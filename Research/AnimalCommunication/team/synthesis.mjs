export const meta = {
  name: 'animal-comm-synthesis',
  description: 'Program-lead synthesis of the audited track dossiers into an overview and ranked research agenda, with a cross-dossier consistency check, completeness critic, live-search gap fill reviewed by a skeptic, and a final editing pass',
  whenToUse: 'Interspecies Communication Research Program, after every track dossier has been revised from the audited ledger. Args {root, today, tracks: [{num, slug, title}], question?, maxGaps?, gapSearchBudget?}',
  phases: [
    { title: 'Synthesize', detail: 'program lead writes README.md while a consistency checker scans all dossiers' },
    { title: 'Critique', detail: 'completeness critic finds gaps and overclaims' },
    { title: 'Gap-fill', detail: 'live-search researcher, then skeptic, per gap' },
    { title: 'Edit', detail: 'editors fold in gap findings and fix cross-dossier inconsistencies' },
  ],
}

let INPUT = args
if (typeof INPUT === 'string') { try { INPUT = JSON.parse(INPUT) } catch { INPUT = {} } }
INPUT = INPUT || {}
const ROOT = INPUT.root
const TODAY = INPUT.today
const TRACKS = INPUT.tracks || []
const MAX_GAPS = INPUT.maxGaps || 4
const GAP_SEARCHES = INPUT.gapSearchBudget || 8
const QUESTION = INPUT.question || 'Can we get a team to start working on research topics for better conversations with biological animals? Use some of the recent work on the fruit fly research and the brain mapping exercises to see if there is anything there for neurons lighting up for communication please.'
const DOSSIERS = TRACKS.map(t => `${ROOT}/tracks/${t.num}-${t.slug}.md`)
const DOSSIER_LIST = TRACKS.map((t, i) => `- Track ${t.num}: ${t.title} -- ${DOSSIERS[i]}`).join('\n')
const README = `${ROOT}/README.md`
const ADDENDUM = `${ROOT}/tracks/10-gap-fill-addendum.md`

const TOOLS_NOTE = `TOOLS: Load web search with ToolSearch query "select:WebSearch". Do not use WebFetch; publisher and preprint pages are blocked by the egress proxy. The session shares one web search cap: if a result says "Web search was not performed: this session has used its web search budget", stop searching and report what you could not check. Cite only URLs copied verbatim from your own search results; never construct or edit a URL.`

const STYLE = `Style: precise, plain prose for a research team. No filler and no hype. Avoid "It's important to note", "Let's dive in", "In conclusion", "Here's the thing", and "Not X. Y." constructions.`

const CONSISTENCY_SCHEMA = {
  type: 'object',
  required: ['issues'],
  properties: {
    issues: {
      type: 'array',
      items: {
        type: 'object',
        required: ['files', 'kind', 'description', 'suggested_fix'],
        properties: {
          files: { type: 'array', items: { type: 'string' } },
          kind: { type: 'string', enum: ['citation-mismatch', 'fact-conflict', 'tag-mismatch', 'naming', 'number', 'other'] },
          description: { type: 'string' },
          suggested_fix: { type: 'string' },
          resolved_by_search: { type: 'boolean' },
          evidence_url: { type: 'string' },
        },
      },
    },
  },
}

const CRITIC_SCHEMA = {
  type: 'object',
  required: ['gaps', 'overclaims'],
  properties: {
    gaps: {
      type: 'array',
      items: {
        type: 'object',
        required: ['title', 'why', 'search_hints', 'where_to_add'],
        properties: {
          title: { type: 'string' },
          why: { type: 'string' },
          search_hints: { type: 'array', items: { type: 'string' } },
          where_to_add: { type: 'string' },
        },
      },
    },
    overclaims: {
      type: 'array',
      items: {
        type: 'object',
        required: ['quote', 'problem', 'fix'],
        properties: { quote: { type: 'string' }, problem: { type: 'string' }, fix: { type: 'string' } },
      },
    },
    other_fixes: { type: 'array', items: { type: 'string' } },
  },
}

const GAP_SCHEMA = {
  type: 'object',
  required: ['summary', 'claims'],
  properties: {
    summary: { type: 'string' },
    claims: {
      type: 'array',
      items: {
        type: 'object',
        required: ['claim', 'evidence_type', 'source_title', 'year', 'url', 'confidence'],
        properties: {
          claim: { type: 'string' },
          evidence_type: { type: 'string' },
          species: { type: 'string' },
          source_title: { type: 'string' },
          authors: { type: 'string' },
          venue: { type: 'string' },
          year: { type: 'string' },
          url: { type: 'string' },
          snippet: { type: 'string' },
          confidence: { type: 'string', enum: ['HIGH', 'MED', 'LOW'] },
        },
      },
    },
    searches_used: { type: 'number' },
  },
}

const SKEPTIC_SCHEMA = {
  type: 'object',
  required: ['verdicts'],
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        required: ['index', 'verdict', 'note'],
        properties: {
          index: { type: 'number' },
          verdict: { type: 'string', enum: ['supported', 'partially_supported', 'refuted', 'unverifiable'] },
          corrected_claim: { type: 'string' },
          note: { type: 'string' },
        },
      },
    },
  },
}

const EDIT_SCHEMA = {
  type: 'object',
  required: ['files_changed', 'summary'],
  properties: {
    files_changed: { type: 'array', items: { type: 'string' } },
    summary: { type: 'array', items: { type: 'string' } },
    unresolved: { type: 'array', items: { type: 'string' } },
  },
}

// Gap claims are single-researcher finds reviewed once, so they never outrank MED unless both agents agree on a HIGH.
function adjudicateGap(claims, verdicts) {
  const byIndex = {}
  for (const v of (verdicts && verdicts.verdicts) || []) byIndex[v.index] = v
  const kept = [], dropped = []
  claims.forEach((c, i) => {
    const v = byIndex[i]
    const verdict = v ? v.verdict : 'unverifiable'
    if (verdict === 'refuted') { dropped.push({ claim: c.claim, why: v.note }); return }
    let tag
    if (verdict === 'supported') tag = c.confidence
    else if (verdict === 'partially_supported') tag = c.confidence === 'LOW' ? 'LOW' : 'MED'
    else tag = 'LOW'
    kept.push({ ...c, claim: (v && v.corrected_claim) || c.claim, tag, skeptic: v ? `${v.verdict}: ${v.note}` : 'no verdict' })
  })
  return { kept, dropped }
}

phase('Synthesize')
const [leadOut, consistency] = await parallel([
  () => agent(
    `You are the PROGRAM LEAD of the Interspecies Communication Research Program. Today is ${TODAY}.

The program lead's original request, verbatim:
"${QUESTION}"

Nine research tracks have each produced an audited dossier. Read every one of them in full with the Read tool:
${DOSSIER_LIST}

Write the program overview to ${README} (Write tool, full file). It is the first thing the team reads, so it must answer the request directly and set the team's research agenda.

Required structure:
# Interspecies Communication Research Program
An italic status line: date, "9 research tracks", total claims and how many were live-confirmed (sum these from the dossiers' status lines), and the tag legend.
A blockquote with the original request, verbatim.
## Short answer -- 5-8 bullets. The first bullet answers "is there anything there for neurons lighting up for communication" with a direct yes/no and names the cell types, keeping the distinction between neurons recorded lighting up, neurons manipulated, and neurons only wired in a connectome.
## The fly courtship conversation, neuron by neuron
- A Mermaid flowchart (\`\`\`mermaid, flowchart LR) of the signal loop: male decision and command neurons -> descending neurons -> nerve-cord song circuit -> wing song -> female hearing pathway -> song detectors and state integrators -> descending reply neurons -> female reply -> back to the male's senses. Also show the other channels (pheromones, vision) where the dossiers support them. Use only nodes the dossiers support. Keep node labels short and quote any label containing parentheses or slashes.
- A table: Stage | Cell types | Sex | Recorded activity? | Causal test? | Connectome wiring? | Confidence | Track.
## What "lighting up" has and has not been shown -- including the gap between whole-brain activity maps and connectome cell types, and state dependence.
## What the new connectomes add -- FlyWire female brain, male nerve cord, brain-and-nerve-cord, and the September 2026 male CNS connectome, as the dossiers report them, with their limits (wiring is not activity).
## From flies to conversations with animals -- the capability ladder from the closed-loop dossier, with where flies and other species sit today.
## Research agenda -- 8-12 ranked research topics for the team. For each: ### R<n>. <title>, then bold-labelled lines: Why, Key question, First 90 days, Data and tools, Feasibility, Tracks. Rank by value to two-way communication times feasibility, and say briefly how you ranked.
## Start this week -- 3-5 computational starter projects that use only public data and tools named in the dossiers.
## What would count as a real "conversation" milestone -- from the AI-decoding and closed-loop dossiers.
## Guardrails -- ethics, welfare, dual use, hype checks.
## How this was produced -- the team roster, the three verification rounds, and limitations: page fetches blocked by the environment, the shared web search cap that sent part of round 1 offline, auditor coverage, and no human expert review yet.
## Track dossiers -- an index with relative links (tracks/<file>.md) and a one-line summary each. Also list tracks/10-gap-fill-addendum.md as "Gap-fill addendum (added by the completeness pass)".
## Key sources -- 20-30 numbered sources, with titles and URLs copied exactly from the dossiers, or "URL not verified" where a dossier says so.

Rules
- Every factual statement carries the confidence tag the dossier gives it plus the track, in the form [HIGH · T02]. Never raise a tag. Don't state facts that are not in the dossiers.
- Where dossiers disagree, say so and cite both.
- Research agenda items must build on specific findings in the dossiers. Label speculation as a hypothesis.
- ${STYLE}
- Aim for 3,500-5,500 words.

Return a plain-text summary: the Short answer bullets and the agenda titles in rank order.`,
    { label: 'program-lead', phase: 'Synthesize' },
  ),
  () => agent(
    `You are the CONSISTENCY CHECKER for the Interspecies Communication Research Program. Read these nine dossiers in full with the Read tool:
${DOSSIER_LIST}

Find cross-dossier inconsistencies:
- the same paper cited with a different title, year, venue or author list;
- the same fact stated differently, or with different confidence tags;
- conflicting numbers (neuron counts, cell-type counts, dates);
- inconsistent neuron or dataset naming;
- a URL given for a work in one dossier while another says "URL not verified" for the same work.
For factual conflicts, you may use up to 6 web searches to decide which version is right.

${TOOLS_NOTE}

Report at most 25 issues, most important first. For each, give the file paths involved, the kind, a description, and a concrete suggested_fix (exact replacement wording where possible). Set resolved_by_search and give evidence_url when a search settled it.`,
    { label: 'consistency-checker', phase: 'Synthesize', schema: CONSISTENCY_SCHEMA },
  ),
])
log(`program lead done; ${consistency ? consistency.issues.length : 0} consistency issues`)

phase('Critique')
const critic = await agent(
  `You are the COMPLETENESS CRITIC for the Interspecies Communication Research Program. Read the program overview at ${README}, then skim the dossiers as needed:
${DOSSIER_LIST}

The request the program must answer: "${QUESTION}"

Find:
1. GAPS: up to ${MAX_GAPS} important topics the overview and dossiers miss that bear on the request. Examples of the kind of thing to check: recent (2025-2026) fly work on communication circuits that no dossier covers, a modality or species left out, a method that would change the agenda, or a missing practical constraint. For each gap give search_hints (2-4 concrete web queries) and where_to_add (which README section).
2. OVERCLAIMS: sentences in the overview that go beyond their dossier support. Examples: a tag higher than the dossier gives, wiring described as activity, a speculative idea stated as a finding, or "translation" language. Quote each exactly and give a fix.
3. OTHER FIXES: structural problems such as a broken Mermaid diagram, a missing required section, or a missing link.

Only list gaps that would change what the team does. No web access is needed for this review.`,
  { label: 'completeness-critic', phase: 'Critique', schema: CRITIC_SCHEMA },
)
const gaps = ((critic && critic.gaps) || []).slice(0, MAX_GAPS)
if (critic && critic.gaps && critic.gaps.length > MAX_GAPS) log(`critic listed ${critic.gaps.length} gaps; kept the first ${MAX_GAPS}`)
log(`critic: ${gaps.length} gaps, ${critic ? critic.overclaims.length : 0} overclaims`)

const gapResults = await pipeline(
  gaps,
  async gap => agent(
    `You are a GAP-FILL RESEARCHER for the Interspecies Communication Research Program (fruit fly connectome and brain-mapping work as the anchor for two-way communication with animals). Today is ${TODAY}.

Gap to fill: ${gap.title}
Why it matters: ${gap.why}
Suggested searches: ${gap.search_hints.join(' | ')}

${TOOLS_NOTE}

Use at most ${GAP_SEARCHES} web searches. Return 3-8 specific, falsifiable claims, each with its source (title, authors, venue, year, URL from your results), a short supporting snippet from the result, its evidence type (activity-recorded, causal-manipulation, connectome-wiring, model-prediction, behavioral, review-or-synthesis, dataset-or-tool, news-or-announcement), and your confidence (HIGH only if the result text states the finding and the source is primary). Also give a 2-4 sentence summary of what the gap-fill found.`,
    { label: `gap:${gap.title.slice(0, 40)}`, phase: 'Gap-fill', schema: GAP_SCHEMA },
  ),
  async (found, gap) => {
    if (!found || !found.claims || !found.claims.length) return { gap, summary: found ? found.summary : 'no result', kept: [], dropped: [] }
    const verdicts = await agent(
      `You are the SKEPTIC reviewing gap-fill claims for the Interspecies Communication Research Program. Gap: ${gap.title}.

For each claim (by index), decide whether its snippet and source support it: supported | partially_supported (give corrected_claim) | refuted (concrete reason) | unverifiable. Look for wiring described as activity, species or sex mix-ups, overreach beyond the snippet, and news sources presented as findings. You may run up to 3 web searches on the most important claims.

${TOOLS_NOTE}

CLAIMS:
${JSON.stringify(found.claims.map((c, i) => ({ index: i, ...c })), null, 1)}`,
      { label: `gap-skeptic:${gap.title.slice(0, 32)}`, phase: 'Gap-fill', schema: SKEPTIC_SCHEMA },
    )
    return { gap, summary: found.summary, ...adjudicateGap(found.claims, verdicts) }
  },
)
const filled = gapResults.filter(Boolean)
log(`gap-fill: ${filled.reduce((n, g) => n + g.kept.length, 0)} claims kept, ${filled.reduce((n, g) => n + g.dropped.length, 0)} dropped`)

phase('Edit')
const [overviewEdit, dossierEdit] = await parallel([
  () => agent(
    `You are the OVERVIEW EDITOR for the Interspecies Communication Research Program. Today is ${TODAY}.

1. Write ${ADDENDUM} (Write tool): "# Track 10 -- Gap-fill addendum". Add an italic status line, then one section per gap below. Each section gives why the gap matters, the kept claims as prose with their tags (form [MED · T10]) and numbered citations, and "Dropped in review" lines for dropped claims. End with a numbered Sources list using only the URLs given below. Explain in one paragraph that each gap was researched by one agent with live search and reviewed by one skeptic, so tags never exceed what that review supports.
2. Edit ${README} with the Edit tool (targeted edits, not a rewrite):
   - Fix every overclaim listed below.
   - Apply the other structural fixes listed below.
   - Fold the most important gap findings into the sections the critic named, tagged [TAG · T10], and adjust the research agenda if a finding changes a priority.
   - Make sure the Track dossiers index links tracks/10-gap-fill-addendum.md.
   - If a consistency issue below touches a statement in the README, apply the fix there too.
3. Read the final README once more and confirm the Mermaid block is valid: flowchart syntax, quoted labels where they contain parentheses or slashes, no HTML.

${STYLE}

OVERCLAIMS:
${JSON.stringify((critic && critic.overclaims) || [], null, 1)}

OTHER FIXES:
${JSON.stringify((critic && critic.other_fixes) || [], null, 1)}

GAP FINDINGS (adjudicated; use only these):
${JSON.stringify(filled.map(g => ({ gap: g.gap.title, why: g.gap.why, where_to_add: g.gap.where_to_add, summary: g.summary, kept: g.kept, dropped: g.dropped })), null, 1)}

CONSISTENCY ISSUES:
${JSON.stringify((consistency && consistency.issues) || [], null, 1)}`,
    { label: 'overview-editor', phase: 'Edit', schema: EDIT_SCHEMA },
  ),
  () => agent(
    `You are the DOSSIER EDITOR for the Interspecies Communication Research Program. Apply the cross-dossier consistency fixes below to the track dossiers in ${ROOT}/tracks/ using the Edit tool. Make minimal, targeted edits. Keep each dossier's in-text citation numbers, Sources list and Verification ledger in sync. Do not edit README.md or 10-gap-fill-addendum.md. Never add a URL that is not already in one of the dossiers or given as evidence_url below. When a fix is uncertain, leave the text and list it as unresolved.

${STYLE}

CONSISTENCY ISSUES:
${JSON.stringify((consistency && consistency.issues) || [], null, 1)}`,
    { label: 'dossier-editor', phase: 'Edit', schema: EDIT_SCHEMA },
  ),
])

return {
  lead: leadOut,
  consistency_issues: (consistency && consistency.issues) || [],
  critic,
  gaps: filled.map(g => ({ gap: g.gap.title, kept: g.kept.length, dropped: g.dropped })),
  overviewEdit,
  dossierEdit,
}
