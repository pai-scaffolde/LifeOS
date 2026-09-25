"""Write live-audit inputs holding only the claims a previous audit round left unchecked.

Usage: python3 pending_claims.py PAYLOAD_DIR AUDIT_DIR OUT_DIR

PAYLOAD_DIR is merge_audit.py output; AUDIT_DIR holds the full per-track audit inputs from build_ledger.py.
Tracks with nothing pending are skipped. Feed OUT_DIR to live-audit.mjs as auditDir, then pass both audit
results to merge_audit.py (earlier round first).
"""
import glob, json, os, sys

payload_dir, audit_dir, out_dir = sys.argv[1:4]
os.makedirs(out_dir, exist_ok=True)
for fn in sorted(glob.glob(os.path.join(payload_dir, 'track-*.json'))):
    p = json.load(open(fn))
    pending = {c['id'] for c in p['claims'] if c['live_status'] in ('not_checked', 'budget_blocked')}
    if not pending:
        continue
    audit = json.load(open(os.path.join(audit_dir, f"track-{p['num']}.json")))
    audit['claims'] = [c for c in audit['claims'] if c['id'] in pending]
    json.dump(audit, open(os.path.join(out_dir, f"track-{p['num']}.json"), 'w'), indent=1)
    print(p['num'], p['key'], len(audit['claims']), 'pending')
