"""Merge live-audit results (rounds 2 and 3) into the round-1 ledger and write per-track writer payloads.

Usage: python3 merge_audit.py LEDGER.json OUT_DIR AUDIT_RESULT.json [AUDIT_RESULT.json ...]
AUDIT_RESULT files are live-audit.mjs workflow outputs. A later file fills in claims an earlier file left
not_checked or budget_blocked; it never overrides a completed check.

Tagging rules (deterministic):
  confirmed    -> HIGH needs strength=strong, or a live-research track whose claim both round-1 verifiers supported;
                  otherwise MED. weak strength caps at MED.
  corrected    -> MED, corrected wording/citation applied.
  contradicted -> second opinion: contradicted => dropped; supported => CONFLICT; unclear/missing => LOW (disputed).
  not_found    -> live-research track: capped at MED; memory-only track: LOW.
  not_checked / budget_blocked -> live-research track: round-1 tag kept; memory-only track: capped at MED.
"""
import json, sys, glob, os, collections
RANK = {'LOW': 1, 'MED': 2, 'HIGH': 3}
def cap(t, m):
    return t if t in (None, 'CONFLICT') else (m if RANK[t] > RANK[m] else t)
def atleast(t, m):
    return t if t in (None, 'CONFLICT') else (m if RANK[t] < RANK[m] else t)

# Fallback for ledgers written before build_ledger.py recorded memory_only_research: the tracks whose round-1
# researcher had no web access in the 2026-09-25 run.
MEMORY = {'03', '06', '09'}
LEDGER, OUT = sys.argv[1], sys.argv[2]
ledger = json.load(open(LEDGER))
PENDING = ('not_checked', 'budget_blocked')
audits = {}
for fn in sys.argv[3:]:
    d = json.load(open(fn)); r = d.get('result', d)
    if isinstance(r, str): r = json.loads(r)
    for t in r['tracks']:
        acc = audits.setdefault(t['num'], {'results': {}, 'second': {}, 'new_leads': [], 'searches_used': 0, 'budget_exhausted': False})
        for x in t['audit'].get('results') or []:
            prev = acc['results'].get(x['claim_id'])
            if prev is None or prev['live'] in PENDING:
                acc['results'][x['claim_id']] = x
        for x in ((t.get('second') or {}).get('results') or []):
            acc['second'][x['claim_id']] = x
        acc['new_leads'] += t['audit'].get('new_leads') or []
        acc['searches_used'] += t['audit'].get('searches_used') or 0
        acc['budget_exhausted'] = acc['budget_exhausted'] or bool(t['audit'].get('budget_exhausted'))
os.makedirs(OUT, exist_ok=True)
summary = {}
for num, tr in sorted(ledger.items()):
    live_research = not tr.get('memory_only_research', num in MEMORY)
    au = audits.get(num)
    amap = au['results'] if au else {}
    smap = au['second'] if au else {}
    kept, dropped = [], []
    for c in tr['ledger']:
        a = amap.get(c['id']); s = smap.get(c['id'])
        live = a['live'] if a else 'not_checked'
        strength = (a or {}).get('strength') or ''
        r1, t1 = c['status'], c['final_confidence']
        claim = c['final_claim']
        citation = c.get('corrected_citation') or ''
        if a and (a.get('corrected_citation') or '').strip(): citation = a['corrected_citation']
        status2 = live
        if live == 'confirmed':
            if r1 == 'verified': tag = atleast(t1, 'MED')
            elif r1 in ('verified-single', 'corrected') and strength == 'strong': tag = 'HIGH'
            else: tag = 'MED'
            if strength != 'strong' and not (live_research and r1 == 'verified'): tag = cap(tag, 'MED')
            if strength == 'weak': tag = cap(tag, 'MED')
        elif live == 'corrected':
            tag = 'MED'
            if (a.get('corrected_claim') or '').strip(): claim = a['corrected_claim']
        elif live == 'contradicted':
            v = (s or {}).get('verdict', 'unclear')
            if v == 'contradicted':
                dropped.append({'id': c['id'], 'claim': c['final_claim'], 'source': c.get('source_title', ''),
                                'why': [a.get('note', ''), s.get('note', '')]})
                continue
            elif v == 'supported':
                tag = 'CONFLICT'; status2 = 'contradicted-then-supported'
                if (s.get('corrected_claim') or '').strip(): claim = s['corrected_claim']
            else:
                tag = 'LOW'; status2 = 'disputed'
        elif live == 'not_found':
            tag = cap(t1, 'MED') if live_research else 'LOW'
        else:
            tag = t1 if live_research else cap(t1, 'MED')
        url_live = ((a or {}).get('url_found') or '').strip() or ((s or {}).get('url_found') or '').strip()
        if url_live: url, url_status = url_live, 'confirmed in a live-search audit'
        elif live_research and (c.get('source_url') or '').strip(): url, url_status = c['source_url'], "from the researcher's live search (round 1)"
        else: url, url_status = '', 'not verified'
        notes = []
        if a and a.get('note'): notes.append('live audit: ' + a['note'])
        if s and s.get('note'): notes.append('second opinion: ' + s['note'])
        kept.append({
            'id': c['id'], 'claim': claim, 'confidence_tag': tag, 'round1_status': r1, 'live_status': status2,
            'strength': strength, 'evidence_type': c.get('evidence_type'), 'species': c.get('species'),
            'neurons': c.get('neurons') or [], 'source_title': c.get('source_title'), 'source_authors': c.get('source_authors', ''),
            'venue': c.get('venue', ''), 'year': c.get('year'), 'corrected_citation': citation, 'url': url, 'url_status': url_status,
            'notes': notes,
        })
    leads = au['new_leads'] if au else []
    st = {
        'claims_round1': len(tr['ledger']), 'kept': len(kept), 'dropped': len(dropped),
        'live_status': dict(collections.Counter(k['live_status'] for k in kept)),
        'tags': dict(collections.Counter(k['confidence_tag'] for k in kept)),
        'searches_used': au['searches_used'] if au else 0,
        'cap_hit': au['budget_exhausted'] if au else None,
        'memory_only_research': not live_research,
    }
    json.dump({'num': num, 'key': tr['key'], 'stats': st, 'claims': kept, 'dropped': dropped, 'new_leads': leads},
              open(os.path.join(OUT, f'track-{num}.json'), 'w'), indent=1)
    summary[num] = st
    print(num, tr['key'], json.dumps(st))
json.dump(summary, open(os.path.join(OUT, 'summary.json'), 'w'), indent=1)
