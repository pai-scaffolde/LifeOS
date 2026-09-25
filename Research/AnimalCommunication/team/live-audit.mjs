export const meta = {
  name: 'animal-comm-live-audit',
  description: 'Live-search audit of every research-track claim (round-1 verifiers had no web access), with an independent second opinion on any claim found contradicted',
  whenToUse: 'Interspecies Communication Research Program, verification round 2. Args {tracks: ["01",...], auditDir, budgets: {"01": 14, ...}}',
  phases: [
    { title: 'Audit', detail: 'one live auditor per track, capped search budget, checks claims against search results' },
    { title: 'Second opinion', detail: 'independent live check of any claim the auditor found contradicted' },
  ],
}

let INPUT = args
if (typeof INPUT === 'string') { try { INPUT = JSON.parse(INPUT) } catch { INPUT = {} } }
INPUT = INPUT || {}
const AUDIT_DIR = INPUT.auditDir
const BUDGETS = INPUT.budgets || {}
const TRACK_NUMS = INPUT.tracks || []
const MEMORY_ONLY = new Set(INPUT.memoryOnly || ['03', '06', '09'])

const AUDIT_SCHEMA = {
  type: 'object',
  required: ['results', 'searches_used', 'budget_exhausted'],
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        required: ['claim_id', 'live', 'note'],
        properties: {
          claim_id: { type: 'string' },
          live: { type: 'string', enum: ['confirmed', 'corrected', 'contradicted', 'not_found', 'not_checked', 'budget_blocked'] },
          strength: { type: 'string', enum: ['strong', 'moderate', 'weak'] },
          url_found: { type: 'string' },
          corrected_claim: { type: 'string' },
          corrected_citation: { type: 'string' },
          note: { type: 'string' },
        },
      },
    },
    new_leads: {
      type: 'array',
      items: {
        type: 'object',
        required: ['claim', 'source_title', 'year', 'url'],
        properties: {
          claim: { type: 'string' }, source_title: { type: 'string' }, authors: { type: 'string' }, venue: { type: 'string' },
          year: { type: 'string' }, url: { type: 'string' }, evidence_type: { type: 'string' }, why_it_matters: { type: 'string' },
        },
      },
    },
    searches_used: { type: 'number' },
    budget_exhausted: { type: 'boolean' },
  },
}

const SECOND_SCHEMA = {
  type: 'object',
  required: ['results'],
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        required: ['claim_id', 'verdict', 'note'],
        properties: {
          claim_id: { type: 'string' },
          verdict: { type: 'string', enum: ['contradicted', 'supported', 'unclear'] },
          url_found: { type: 'string' },
          corrected_claim: { type: 'string' },
          note: { type: 'string' },
        },
      },
    },
  },
}

const TOOLS_NOTE = `TOOLS: Load web search first with ToolSearch query "select:WebSearch". Do NOT use WebFetch: publisher, PubMed, bioRxiv, arXiv and Janelia pages are blocked by the egress proxy. Work from WebSearch result titles, URLs and summaries.
SHARED SEARCH CAP: the whole session shares a web search cap. If a search result says "Web search was not performed: this session has used its web search budget", stop searching immediately and mark every claim you have not yet checked as budget_blocked.
URL RULE: url_found must be copied verbatim from a WebSearch result you received in this task. Never construct, guess, or edit a URL. Prefer the primary source (journal, PubMed, preprint server, official project page) over news or aggregators. Ignore crypto/meme repos, SEO spam and copied "awesome" lists.`

const results = await pipeline(
  TRACK_NUMS,
  async num => {
    const budget = BUDGETS[num] || 14
    const memoryOnly = MEMORY_ONLY.has(num)
    const file = `${AUDIT_DIR}/track-${num}.json`
    const audit = await agent(
      `You are the LIVE AUDITOR for track ${num} of the Interspecies Communication Research Program (fruit fly connectome and brain-mapping work as the anchor for two-way communication with animals). Today is 2026-09-25.

Read the claim list for this track from ${file} with the Read tool. Each claim has id, final_claim, citation fields (source_title, source_authors, venue, year, source_url), and round-1 status and confidence.

Background: round-1 verification of these claims ran with NO web access, so the verifiers checked from memory. ${memoryOnly
        ? 'The researcher for this track ALSO had no web access, so every claim and citation here came from model memory, and no URL has been confirmed. Treat every citation as unconfirmed until a search result shows it.'
        : 'The researcher for this track did have live search, so most source URLs came from real search results. The main risks are claims that overstate or misread the source, wrong citation details, and 2025-2026 items.'}

${TOOLS_NOTE}

SEARCH BUDGET FOR YOU: at most ${budget} WebSearch calls in total. Count them as you go.

METHOD
1. Group claims by source first; one good search (exact title in quotes, or first author + year + key terms) often checks several claims.
2. Priority order: ${memoryOnly
        ? '(a) claims that carry the track\'s main conclusions and all HIGH/MED claims, (b) 2024-2026 claims, (c) the rest.'
        : '(a) 2025-2026 claims and anything with unconfirmed authors/venue, (b) claims whose round-1 status is corrected-single, unverified or verified-single, (c) HIGH-confidence claims central to the track, (d) the rest.'}
3. For each claim you check, decide from the search results:
   - confirmed: the source exists with matching title/authors/venue/year, and the results are consistent with the claim. Set strength: strong = result text directly states the claim's key finding; moderate = source and topic match but the specific finding is not visible in the results; weak = only indirect or secondary support.
   - corrected: the source exists but citation details differ, or the claim overstates/misstates it. Give corrected_citation and/or corrected_claim (narrow, precise wording).
   - contradicted: the results show the claim is wrong, or the cited work does not exist as described. Explain concretely in the note.
   - not_found: you searched for it (1-2 queries) and could not locate the source.
   - not_checked: you ran out of your own budget before reaching it.
   - budget_blocked: the shared cap stopped you.
4. Return one result for EVERY claim id in the file.
${memoryOnly ? `5. Reserve about 3 searches for important 2025-2026 developments in this track's topic that the claim list misses. Return up to 6 new_leads, each with a URL from your results.` : '5. new_leads is optional: add up to 3 only if you incidentally see a major 2025-2026 development the claims miss.'}

Report searches_used and budget_exhausted honestly. Return the structured output only.`,
      { label: `audit:${num}`, phase: 'Audit', schema: AUDIT_SCHEMA },
    )
    if (!audit) throw new Error(`audit failed for ${num}`)
    const tally = {}
    for (const r of audit.results || []) tally[r.live] = (tally[r.live] || 0) + 1
    log(`track ${num}: ${JSON.stringify(tally)}; searches ${audit.searches_used}${audit.budget_exhausted ? ' (CAP HIT)' : ''}`)
    return audit
  },
  async (audit, num) => {
    const contradicted = (audit.results || []).filter(r => r.live === 'contradicted')
    if (!contradicted.length) return { num, audit, second: null }
    const second = await agent(
      `You are giving an INDEPENDENT SECOND OPINION for track ${num} of the Interspecies Communication Research Program. A live auditor judged the claims below to be contradicted by search results. You have not seen the auditor's searches. Decide for each claim whether it really is wrong.

Read the full claim records (by claim_id) from ${AUDIT_DIR}/track-${num}.json with the Read tool.

${TOOLS_NOTE}

SEARCH BUDGET FOR YOU: at most ${Math.min(3 + contradicted.length * 2, 10)} WebSearch calls.

Verdicts: contradicted (the claim is wrong; say why) | supported (the claim holds; give url_found) | unclear. If the claim is salvageable with narrower wording, give corrected_claim and use supported.

Claims flagged as contradicted, with the auditor's reasons:
${JSON.stringify(contradicted.map(r => ({ claim_id: r.claim_id, auditor_note: r.note })), null, 1)}`,
      { label: `second-opinion:${num}`, phase: 'Second opinion', schema: SECOND_SCHEMA },
    )
    log(`track ${num}: second opinion on ${contradicted.length} contradicted claim(s)`)
    return { num, audit, second }
  },
)

return { tracks: results.filter(Boolean), failed: TRACK_NUMS.filter(n => !results.find(r => r && r.num === n)) }
