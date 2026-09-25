"""Build the combined claim ledger and per-track live-audit inputs from research-tracks.mjs workflow outputs.

Usage: python3 build_ledger.py OUT_DIR RESULT.json [RESULT.json ...] [--memory-only 03,06,09]

RESULT files are research-tracks.mjs workflow outputs (the object with completed[].ledger).
--memory-only lists tracks whose researcher had no live web access; the audit and merge steps treat
their citations as unconfirmed until a live search shows them.

Writes OUT_DIR/ledger.json (input to merge_audit.py) and OUT_DIR/audit/track-NN.json (input to live-audit.mjs).
"""
import json, os, sys

args = sys.argv[1:]
memory_only = set()
if '--memory-only' in args:
    i = args.index('--memory-only')
    memory_only = set(args[i + 1].split(','))
    del args[i:i + 2]
out_dir, result_files = args[0], args[1:]

tracks = {}
for fn in result_files:
    d = json.load(open(fn))
    r = d.get('result', d)
    if isinstance(r, str):
        r = json.loads(r)
    for t in r['completed']:
        tracks[t['num']] = {'key': t['key'], 'memory_only_research': t['num'] in memory_only, 'ledger': t['ledger']}

os.makedirs(os.path.join(out_dir, 'audit'), exist_ok=True)
json.dump(tracks, open(os.path.join(out_dir, 'ledger.json'), 'w'), indent=1)

FIELDS = ['id', 'final_claim', 'status', 'final_confidence', 'evidence_type', 'species', 'source_title',
          'source_authors', 'venue', 'year', 'source_url', 'better_url', 'corrected_citation']
for num, t in sorted(tracks.items()):
    claims = [{k: c.get(k, '') for k in FIELDS} for c in t['ledger']]
    audit = {'key': t['key'], 'live_research': not t['memory_only_research'], 'claims': claims}
    json.dump(audit, open(os.path.join(out_dir, 'audit', f'track-{num}.json'), 'w'), indent=1)
    print(num, t['key'], len(claims), 'claims', '(memory-only research)' if t['memory_only_research'] else '')
