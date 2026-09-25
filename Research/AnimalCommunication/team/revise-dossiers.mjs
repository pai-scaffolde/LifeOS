export const meta = {
  name: 'animal-comm-revise-dossiers',
  description: 'Rewrite research-track dossiers from the live-audited claim ledger (updated confidence tags, corrected citations, verified URLs, new 2025-2026 leads, verification appendix)',
  whenToUse: 'Interspecies Communication Research Program, after a live-audit merge. Args {tracks: [{num, slug, title}], payloadDir, outDir, today}',
  phases: [
    { title: 'Revise', detail: 'one writer per track rebuilds its dossier from the audited ledger' },
  ],
}

let INPUT = args
if (typeof INPUT === 'string') { try { INPUT = JSON.parse(INPUT) } catch { INPUT = {} } }
INPUT = INPUT || {}
const TODAY = INPUT.today || '2026-09-25'

const REVISE_SCHEMA = {
  type: 'object',
  required: ['path', 'title', 'bottom_line', 'changes_summary'],
  properties: {
    path: { type: 'string' },
    title: { type: 'string' },
    bottom_line: { type: 'array', items: { type: 'string' } },
    top_projects: { type: 'array', items: { type: 'string' } },
    word_count: { type: 'number' },
    changes_summary: { type: 'array', items: { type: 'string' } },
  },
}

const results = await parallel((INPUT.tracks || []).map(t => () => agent(
  `You are the REVISION WRITER for track ${t.num} of the Interspecies Communication Research Program (fruit fly connectome and brain-mapping work as the anchor for two-way communication with animals). Today is ${TODAY}.

Inputs (read both with the Read tool):
1. The current dossier: ${INPUT.outDir}/${t.num}-${t.slug}.md -- written from round-1 verification, which had no live web access.
2. The audited claim ledger: ${INPUT.payloadDir}/track-${t.num}.json -- fields: stats, claims[] (id, claim, confidence_tag, round1_status, live_status, strength, evidence_type, species, neurons, citation fields, corrected_citation, url, url_status, notes), dropped[], new_leads[].

Task: rewrite the dossier at the SAME path (Write tool, full file) so every statement reflects the audited ledger.

Rules
- Use each claim's "claim" text and its confidence_tag exactly. Where the audit changed wording, citation details, or a tag, the dossier must change too. Do not add facts from memory. Don't mention claim IDs in the prose.
- Keep the dossier's structure, and keep its bottom line, results table, "why this matters", open questions and candidate-projects table wherever their support still holds. Revise anything whose support changed. The bottom line must match the revised evidence.
- Status line (italic, directly under the title): "Interspecies Communication Research Program · ${TODAY} · N claims kept of M · live-search audit: confirmed a, corrected b, not live-checked c, dropped d · tags: [HIGH] [MED] [LOW] [CONFLICT]" with numbers from stats.
- Replace any old verification caveat with a short "How this was verified" paragraph: round 1 = one researcher (${t.memoryOnly ? 'working without web access, because the session search cap had been reached' : 'with live web search'}) plus two independent verifiers (source fidelity; adversarial skeptic) who had no web access and checked from their own knowledge; round 2 = a live auditor who checked claims against live web search results, with a second opinion reserved for contradicted claims (state how many were contradicted -- zero if none). Explain the tags in one or two sentences: HIGH = the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search; MED = source confirmed but the finding itself not directly visible, corrected, or single-verifier; LOW = not located or unconfirmed; CONFLICT = checks disagree.
- Sources: rebuild the numbered list from the ledger. Format: Title -- Authors -- Venue, Year -- URL. Apply corrected_citation where given. Use the claim's url; if it is empty write "URL not verified". Never write a URL that is not in the ledger. Keep in-text [n] numbers consistent with the list, and merge duplicate sources.
- If new_leads is non-empty, add "## New leads from live search (2025-2026)": one bullet per lead with a [MED] tag if it is a primary source (journal, preprint, official project page) and [LOW] otherwise, plus its URL. Mark them as found by the auditor but not independently verified.
- Add a final appendix "## Verification ledger": a compact table with columns # | Claim (at most 15 words) | Tag | Live status | Source #, one row per kept claim.
- "Claims dropped in verification" lists the ledger's dropped[] items. Also keep round-1 narrowing notes from the old dossier that are still accurate.
- Style: precise, plain scientific prose for a research team. No filler, no hype. Avoid "It's important to note", "Let's dive in", "In conclusion", "Here's the thing", and "Not X. Y." constructions.

Return: path, title, the bottom_line bullets, top 3 project titles, approximate word_count, and a changes_summary listing what materially changed from the old version (tags raised or lowered, corrected citations, removed or added content).`,
  { label: `revise:${t.num}`, phase: 'Revise', schema: REVISE_SCHEMA },
)))

return { revised: results.filter(Boolean), failed: (INPUT.tracks || []).filter((t, i) => !results[i]).map(t => t.num) }
