# Evidence ledger

`claims-ledger.json` and `claims-ledger.csv` hold every claim the research team kept: 274 claims from nine tracks, all checked against live web search results. 148 are tagged [HIGH] and 126 [MED]. None were contradicted or dropped. The dossiers in `../tracks/` are written from this ledger, and their verification appendices match it claim for claim.

| Field | Meaning |
|---|---|
| `id` | Claim ID, `T<track>-<n>`; the dossiers' verification appendices list the same claims. |
| `confidence_tag` / `tag` | HIGH, MED, LOW or CONFLICT: the tag the dossiers use (rules in the JSON's `tag_rules`). |
| `audit_tag` | The tag `team/merge_audit.py` computed from the audit. It differs from `confidence_tag` only for the 13 claims marked `harmonized`. For those, the cross-dossier consistency check aligned the tag with the tag the same finding from the same paper carries in another track; the reason is in `notes`. |
| `round1_status` | Outcome of the two round-1 verifiers: `verified` (both supported), `verified-single`, `corrected` (both narrowed it), `corrected-single`, `unverified`. |
| `live_status` | Live-search audit outcome: `confirmed` or `corrected`. |
| `strength` | How directly the search results showed the finding: `strong` (stated in the result text), `moderate` (source and topic match), `weak` (indirect). |
| `evidence_type` | activity-recorded, causal-manipulation, connectome-wiring, model-prediction, behavioral, review-or-synthesis, dataset-or-tool, news-or-announcement. |
| `url` / `url_status` | Source URL and where it came from: a live-search audit, the round-1 researcher's own search results, or "not verified". |
| `notes` | Auditor, editor and consistency-check notes (JSON only). Seven claims' wording was corrected by the cross-dossier consistency check (for example vPN1's long-IPI tuning and the BANC neuron count); each carries a note saying what changed. |

The JSON also keeps each track's `new_leads_unverified`. These are 2025-2026 items the auditors found while searching, and nobody has checked them yet.

Research was carried out on 2026-09-25. Verification relied on search-result text, because the environment blocked direct page fetches from publisher and preprint sites. Re-check a claim against the paper itself before citing it outside the program.
