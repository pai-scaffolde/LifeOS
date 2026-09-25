export const meta = {
  name: 'animal-comm-research-tracks',
  description: 'Research team: deep research per track on fly-connectome communication circuits and animal-communication science, dual adversarial verification, then a confidence-tagged dossier per track',
  whenToUse: 'Interspecies Communication Research Program. Pass args as an object {tracks: [keys], outDir, today, searchBudget?: {research, verifier}}. The session shares one web search cap (200 in a rolling window, observed 2026-09-25), so run at most ~5 tracks per batch at the default budgets.',
  phases: [
    { title: 'Research', detail: 'one deep researcher per track, web-sourced falsifiable claims' },
    { title: 'Verify', detail: 'source-fidelity verifier + skeptic verifier per track, adjudicated in code' },
    { title: 'Write', detail: 'one confidence-tagged dossier file per track' },
  ],
}

let INPUT = args
if (typeof INPUT === 'string') {
  try { INPUT = JSON.parse(INPUT) } catch { INPUT = {} }
}
INPUT = INPUT || {}
const OUT_DIR = INPUT.outDir || '/home/user/LifeOS/Research/AnimalCommunication/tracks'
const TODAY = INPUT.today || '2026-09-25'
// Run 1 (2026-09-25) gave researchers "at least 15" searches and verifiers 15-30 each with no cap. Six researchers
// spent the session's shared 200-search allowance in ten minutes, leaving three researchers and every verifier offline.
// Per-agent budgets keep one batch inside the shared cap: (research + 2 * verifier) * tracks <= ~180.
const SEARCH = { research: 14, verifier: 8, ...(INPUT.searchBudget || {}) }

const TRACKS = [
  {
    key: 'song-production', num: '01', slug: 'sender-circuits-song-production',
    title: 'Sender circuits: how a male fly decides to sing and patterns its song',
    brief: `Scope: Drosophila courtship song production end to end. Pulse song, sine song, pulse subtypes (Pfast/Pslow), and how the male chooses among them. Decision/command neurons (P1 / pC1 in males, fruitless and doublesex circuitry), descending neurons (pIP10, pMP2 and others), the song pattern generator in the ventral nerve cord (vPR6, vMS11, dPR1, TN1A, wing motor neurons such as hg1), and how optogenetic/thermogenetic activation of these neurons elicits song (e.g., von Philipsborn et al. 2011; Clyne & Miesenbock 2008; Shirangi et al. 2016; Lillvis et al. 2024 "Nested neural circuits generate distinct acoustic signals during Drosophila courtship"). What the male adult nerve cord connectome (MANC, 2023-2024), the brain-and-nerve-cord connectome (BANC, 2025), and the complete male CNS connectome (Cell, Sept 2026, "Sexual dimorphism in the complete Drosophila male central nervous system connectome") reveal about song-pathway wiring. Any recordings (calcium imaging, electrophysiology) of song neurons actually active during singing. Song circuit evolution across species (e.g., Ding et al. 2019 on sine song evolution), aggression/threat signals and male-male song, and whether females sing.
Deliverable focus: an inventory of identified song-producing neurons with the evidence type behind each (activity recorded / causal / wiring / model), and an honest assessment of how complete the "sender map" now is.`,
  },
  {
    key: 'song-perception', num: '02', slug: 'receiver-circuits-song-perception',
    title: 'Receiver circuits: how flies hear, evaluate, and respond to song',
    brief: `Scope: the auditory pathway that decodes courtship song in females and males. Johnston's organ subtypes (JO-A/B), AMMC, B1/B2 and other AMMC projection neurons, WED, AVLP, pC2 (pC2l/pC2m), vpoEN (vaginal plate opening excitatory neurons), vpoDN, and pC1 in females integrating song with pheromones. Key leads to verify: Pacheco et al. 2021 Nature Neuroscience "Auditory activity is diverse and widespread throughout the central brain of Drosophila" (whole-brain imaging showing which neurons light up to song); Deutsch et al. 2019 Current Biology "Shared song detector neurons in Drosophila male and female brains drive sex-specific behaviors"; Baker et al. 2022 Current Biology "Neural network organization for courtship-song feature detection"; Wang et al. 2021 (vpoEN and female receptivity); Zhou et al. 2014 (pC1 in females); Deutsch et al. 2020 eLife (pC1 persistent internal state); Baker, Murthy and colleagues mapping the auditory pathway in FlyWire (2024 FlyWire paper package). Song feature tuning (inter-pulse interval, species specificity), intensity/distance cues, male-male song responses (chaining), and how female song response changes with mating state.
Deliverable focus: the receiver pathway as a stage-by-stage list with the activity evidence that each stage responds to song ("lights up"), what song features each stage is tuned to, and where connectome wiring has been checked against activity.`,
  },
  {
    key: 'multimodal-signals', num: '03', slug: 'multimodal-signals-and-female-replies',
    title: 'Beyond song: pheromones, vision, touch, vibration, and the female side of the dialogue',
    brief: `Scope: every non-song channel flies use to communicate, and the circuits that carry them. Volatile pheromone cVA (Or67d -> DA1 glomerulus -> lateral horn, sexually dimorphic lateral horn neurons; Kohl et al. 2013 Cell); contact pheromones such as 7,11-HD and 7-T, detected by ppk23/ppk25/Gr32a neurons on the forelegs -> vAB3/PPN1 -> P1 (Clowney et al. 2015 Neuron); visual pursuit of the female via LC10a / LC11 (Ribeiro et al. 2018 Cell); tapping and licking; substrate-borne vibration from abdominal quivering (e.g., Fabre et al. 2012 Current Biology); aggression signals (wing threat, lunging) and their circuits. Crucially, the FEMALE side of the conversation: acceptance signals (slowing, vaginal plate opening), rejection signals (ovipositor extrusion; OviEN/OviDN and vpoDN circuits; Wang et al. 2020 and 2021 Neuron), and how mating state flips female replies (sex peptide, SAG neurons). How P1 (male) and pC1 (female) act as multisensory integration hubs, and what the connectomes (hemibrain, FlyWire female brain 2024, BANC 2025, male CNS Sept 2026 with dimorphic cell types) show about where channels converge.
Deliverable focus: a channel-by-channel map (signal -> sensor -> pathway -> integrator -> behavior) for both sexes, flagging which links are activity-confirmed versus wiring-only.`,
  },
  {
    key: 'activity-mapping', num: '04', slug: 'activity-mapping-neurons-lighting-up',
    title: 'Seeing neurons light up: whole-brain activity imaging and linking activity to connectome identity',
    brief: `Scope: the methods and results for recording which neurons are active during communication, and for matching active neurons to their connectome identity. Whole-brain or near-whole-brain calcium imaging in adult flies (Mann, Gallen & Clandinin 2017 Current Biology; Aimon et al. 2019 PLoS Biology; Pacheco et al. 2021 Nature Neuroscience; Schaffer et al. 2023 Nature Communications; Brezovec et al. 2024 Current Biology), imaging in freely courting flies (e.g., Grover et al. 2020 Nature Communications "Flyception2" imaging P1 during courtship), activity integrators and markers (CaMPARI, TRIC, immediate early genes such as Hr38 and stripe) used to map courtship- or song-activated neurons, voltage imaging, and approaches for registering functional data to FlyWire / male CNS neuron identities (split-GAL4 lines, NeuronBridge, functional-connectome projects 2024-2026). Include comparable whole-brain-with-identity efforts in C. elegans (NeuroPAL) and larval zebrafish as benchmarks. Limits: head-fixed prep versus natural behavior, temporal resolution, neuromodulators, sex and state.
Deliverable focus: (1) a list of concrete findings where neurons were recorded "lighting up" during a communication signal or behavior in flies, with the method; (2) the current best pipeline to go from "a neuron lit up" to "this is cell type X in the connectome", and its gaps.`,
  },
  {
    key: 'connectome-models', num: '05', slug: 'connectome-models-and-digital-flies',
    title: 'Simulating communication: connectome-constrained models and digital flies',
    brief: `Scope: computational models built from connectomes and whether they can simulate communication. Leads to verify: Shiu et al. 2024 Nature, whole-brain leaky integrate-and-fire model from FlyWire that predicted feeding and grooming circuits; Lappalainen et al. 2024 Nature, connectome-constrained visual network predicting activity; Vaxenburg et al. 2025 Nature, whole-body physics simulation of fly locomotion (flybody, Janelia and Google DeepMind); NeuroMechFly v2 (Wang-Chen et al. 2024 Nature Methods); embodied whole-fly emulation claims by companies or groups in 2025-2026 (e.g., Eon Systems), and the "State of Brain Emulation Report 2025" (arXiv 2510.15745). Any model of courtship song production or song-evoked responses (song recognition models by Clemens and colleagues; Baker 2022 feature-detection model; using the FlyWire LIF model to stimulate Johnston's organ neurons and predict responders). Validation gaps: synaptic sign and weight uncertainty, gap junctions, neuromodulation, plasticity, single-individual connectomes.
Deliverable focus: can we run "in silico playback" today (feed synthetic song or pheromone input to a connectome model and predict which neurons light up and what behavior follows)? What would need to be true for a digital fly to serve as a test partner for designing signals before trying them on real animals?`,
  },
  {
    key: 'closed-loop', num: '06', slug: 'closed-loop-two-way-interaction',
    title: 'From broadcast to conversation: closed-loop, two-way interaction with animals',
    brief: `Scope: fly courtship as a real dialogue and the tools for joining one. Leads to verify: Coen et al. 2014 Nature (males pattern song using female feedback); Coen et al. 2016 Neuron (song intensity adjusted to distance); Calhoun, Pillow & Murthy 2019 Nature Neuroscience (hidden internal states shaping song choice); Roemschied et al. 2023 Nature (context-dependent song sequencing); song playback experiments that change female receptivity; optogenetic "writing" of receiver states (activating pC1 or vpoEN in females); closed-loop optogenetics or virtual reality triggered by behavior. Beyond flies: robots that join animal communication (Landgraf's RoboBee waggle-dance robot, RoboFish, Halloy et al. 2007 Science cockroach robots, ASSISIbf/Hiveopolis bee-robot projects), interactive playback with duetting birds, dolphin two-way interfaces (CHAT with the Wild Dolphin Project), and animal brain-to-brain or BCI work (e.g., Pais-Vieira et al. 2013). 
Deliverable focus: define a capability ladder for animal "conversation" (eavesdrop -> decode -> playback -> contingent reply -> closed-loop co-adaptation -> neural read/write), place each verified example on it, and identify where the fruit fly, with complete sender and receiver connectomes, is uniquely positioned to move up the ladder.`,
  },
  {
    key: 'ai-decoding', num: '07', slug: 'ai-decoding-animal-communication',
    title: 'AI for decoding animal communication: state of the field, 2024-2026',
    brief: `Scope: machine learning applied to animal signals and where it stands in 2026. Leads to verify: Earth Species Project (NatureLM-audio, BEANS benchmark, other releases 2024-2026); Project CETI (Sharma et al. 2024 Nature Communications sperm whale "phonetic alphabet"; 2025 vowel-like/spectral claims and their critiques); Google DolphinGemma (2025) with the Wild Dolphin Project and Georgia Tech; the Coller-Dolittle Prize (Jeremy Coller Foundation and Tel Aviv University; any 2025 or 2026 awards); marmoset name-like calls (Oren et al. 2024 Science); elephant individually addressed calls (Pardo et al. 2024 Nature Ecology & Evolution); bonobo and chimpanzee compositionality (2025); Egyptian fruit bat vocalizations classified by context and addressee (Prat, Taub & Yovel 2016 Scientific Reports) -- note the fruit BAT vs fruit FLY naming overlap and cover the bat work in case the program lead meant it; decoding birdsong from neural activity (Arneodo et al. 2021 Current Biology); mouse USV tools (DeepSqueak, VocalMat); fly song tools (Deep Audio Segmenter / DAS, Steinfath et al. 2021 eLife; SongExplorer; FlySongSegmenter). Include critiques and hype checks: what "translation" claims actually showed, and the difference between classifying signals, finding structure, and establishing meaning.
Deliverable focus: which AI methods genuinely advanced understanding of animal signals, where neural data (like the fly's) could anchor meaning in a way acoustics alone cannot, and what a credible "conversation" milestone looks like.`,
  },
  {
    key: 'cross-species-neuro', num: '08', slug: 'cross-species-communication-circuits',
    title: 'Communication circuits across species: what transfers from fly to other animals',
    brief: `Scope: the neural basis of communication in other animals and how fly findings generalize. Leads to verify: songbird song system (HVC, RA) and neural sequence codes; mouse ultrasonic vocalization circuits via the periaqueductal gray (Tschida et al. 2019 Neuron); Alston's singing mouse turn-taking controlled by motor cortex (Okobi et al. 2019 Science); marmoset vocal turn-taking; bat neural activity during social communication (Egyptian fruit bats, e.g., Rose et al. 2021 Science inter-brain coherence; Omer et al. 2018 social place cells); cricket song recognition via delay-and-coincidence (Schoneich, Kostarakos & Hedwig 2015 Science Advances) as a parallel to fly song detection; C. elegans ascaroside pheromone signaling with a complete connectome plus whole-brain imaging (NeuroPAL); honeybee waggle-dance processing; cuttlefish and octopus skin displays as readable brain states (Reiter et al. 2018 Nature). Connectome efforts beyond the fly (MICrONS mouse visual cortex, Nature 2025; larval zebrafish; human H01 fragment; mouse whole-brain connectome initiatives 2025-2026) and their timelines.
Deliverable focus: shared computational motifs of communication (temporal pattern recognition, sensorimotor feedback, internal states, turn-taking), which fly findings plausibly transfer, and a ranked shortlist of species for the next connectome-informed communication work, with reasons.`,
  },
  {
    key: 'resources-ethics', num: '09', slug: 'datasets-tools-and-responsible-practice',
    title: 'Datasets, tools, and responsible practice',
    brief: `Scope: a practical starter kit plus ethical guardrails. Data platforms: FlyWire and FlyWire Codex, neuPrint (hemibrain, MANC, male CNS / optic lobe), BANC, Virtual Fly Brain, NeuronBridge, FlyLight split-GAL4 collections, CAVE, natverse/fafbseg, and how to access the Sept 2026 male CNS release. Behavior data and tools: SLEAP pose tracking (Pereira et al. 2022 Nature Methods), DAS song annotation, public courtship video and song datasets from the Murthy and Stern labs, the Shiu et al. brain model code, Earth Species Project open models and benchmarks, Project CETI data. Ethics and welfare: invertebrate sentience evidence and law (UK Animal Welfare (Sentience) Act 2022 and the LSE review on decapods and cephalopods), the New York Declaration on Animal Consciousness (2024), ethics of playback and interaction with wild animals (published frameworks from CETI or others), consent and disturbance, data governance, and dual use -- both beneficial (acoustic or pheromone mating disruption for pests and disease vectors, e.g., mosquito and fruit-pest control) and harmful. Also methodological pitfalls: anthropomorphism, confusing signal classification with meaning.
Deliverable focus: a concrete "first 30 days" resource list with access notes (what is open, what needs accounts, compute needs), and a short set of ethics guardrails the program should adopt.`,
  },
]

const ALL_TITLES = TRACKS.map(t => `${t.num} ${t.title}`).join('\n')

const COMMON = `PROGRAM CONTEXT
You are one member of a research team in the "Interspecies Communication Research Program". The program looks for research directions toward better two-way communication ("conversations") with non-human animals. It is anchored in recent fruit fly (Drosophila melanogaster) connectome and brain-mapping work: the FlyWire whole-brain connectome of an adult female (Nature, Oct 2024 paper package), the hemibrain, the male adult nerve cord (MANC), the brain-and-nerve-cord connectome (BANC), and the complete male central nervous system connectome (Cell, Sept 2026) -- plus whole-brain activity imaging and connectome-constrained models. The program lead's question: "Is there anything in the fruit fly research and brain-mapping work showing neurons lighting up for communication, and how could it lead to better conversations with animals?"

Today's date is ${TODAY}. Your own knowledge may stop around mid-2026, so search actively for 2025-2026 developments.

The team's tracks (stay in your own lane; brief cross-references to other tracks are fine):
${ALL_TITLES}

TOOLS
- Load web tools first: call ToolSearch with query "select:WebSearch,WebFetch".
- WebSearch works. WebFetch may be blocked by the environment's egress policy (on 2026-09-25 it was blocked for nature.com, ncbi.nlm.nih.gov, pubmed, biorxiv.org, arxiv.org, janelia.org). Do not retry blocked domains. You may try WebFetch at most twice on other domains; if blocked, move on.
- Verify by searching: targeted WebSearch queries (exact paper title, first author + year + topic, DOI) and read the result summaries.
- SHARED SEARCH CAP: all agents in the session share one web search cap. Stay inside the search budget your task gives you. If a result says "Web search was not performed: this session has used its web search budget", stop searching at once and say in your output which items were not checked.

SOURCING RULES (non-negotiable)
- Cite only URLs that appeared verbatim in your own WebSearch results. Never construct, guess, or edit a URL. If you know a work but never saw its URL in a result, give author/year/venue and leave the URL empty.
- Prefer primary sources (peer-reviewed papers, preprints, lab/institute and official project pages). Press releases and science news are acceptable secondary sources. Ignore crypto/meme/token repos, SEO spam, and copied "awesome-list" forks as evidence.
- Label every claim's evidence type: activity-recorded (calcium/voltage imaging, electrophysiology -- the neurons actually "lit up"), causal-manipulation (optogenetic/thermogenetic activation or silencing), connectome-wiring (anatomy only, no activity), model-prediction, behavioral, review-or-synthesis, dataset-or-tool, or news-or-announcement.
- Be exact about neuron names, species, sex, and preparation. Never let a wiring result stand in for an activity result. Treat "decoding/translating animal language" claims with skepticism.`

const RESEARCH_SCHEMA = {
  type: 'object',
  required: ['summary', 'claims', 'open_questions', 'project_ideas'],
  properties: {
    summary: { type: 'string' },
    claims: {
      type: 'array',
      minItems: 8,
      items: {
        type: 'object',
        required: ['claim', 'evidence_type', 'species', 'source_title', 'year', 'source_url', 'confidence'],
        properties: {
          claim: { type: 'string' },
          evidence_type: { type: 'string', enum: ['activity-recorded', 'causal-manipulation', 'connectome-wiring', 'model-prediction', 'behavioral', 'review-or-synthesis', 'dataset-or-tool', 'news-or-announcement'] },
          species: { type: 'string' },
          neurons: { type: 'array', items: { type: 'string' } },
          source_title: { type: 'string' },
          source_authors: { type: 'string' },
          venue: { type: 'string' },
          year: { type: 'string' },
          source_url: { type: 'string' },
          supporting_snippet: { type: 'string' },
          confidence: { type: 'string', enum: ['HIGH', 'MED', 'LOW'] },
          why_it_matters: { type: 'string' },
        },
      },
    },
    key_neurons: {
      type: 'array',
      items: {
        type: 'object',
        required: ['name', 'role', 'evidence_type'],
        properties: { name: { type: 'string' }, role: { type: 'string' }, evidence_type: { type: 'string' }, sex_or_species: { type: 'string' } },
      },
    },
    datasets_tools: {
      type: 'array',
      items: { type: 'object', required: ['name', 'what'], properties: { name: { type: 'string' }, url: { type: 'string' }, what: { type: 'string' } } },
    },
    open_questions: { type: 'array', items: { type: 'string' } },
    project_ideas: {
      type: 'array',
      items: {
        type: 'object',
        required: ['title', 'hypothesis', 'approach', 'feasibility'],
        properties: {
          title: { type: 'string' },
          hypothesis: { type: 'string' },
          approach: { type: 'string' },
          data_or_tools: { type: 'string' },
          feasibility: { type: 'string', enum: ['computational-now', 'wet-lab-months', 'wet-lab-years', 'moonshot'] },
          first_step: { type: 'string' },
        },
      },
    },
    hype_flags: { type: 'array', items: { type: 'string' } },
  },
}

const VERDICT_SCHEMA = {
  type: 'object',
  required: ['verdicts'],
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        required: ['claim_id', 'verdict', 'note'],
        properties: {
          claim_id: { type: 'string' },
          verdict: { type: 'string', enum: ['supported', 'partially_supported', 'refuted', 'unverifiable'] },
          corrected_claim: { type: 'string' },
          corrected_citation: { type: 'string' },
          better_url: { type: 'string' },
          note: { type: 'string' },
        },
      },
    },
    overall_notes: { type: 'string' },
    missing_topics: { type: 'array', items: { type: 'string' } },
  },
}

const WRITE_SCHEMA = {
  type: 'object',
  required: ['path', 'title', 'bottom_line'],
  properties: {
    path: { type: 'string' },
    title: { type: 'string' },
    bottom_line: { type: 'array', items: { type: 'string' } },
    top_projects: { type: 'array', items: { type: 'string' } },
    word_count: { type: 'number' },
  },
}

const VERIFIER_LENSES = [
  {
    key: 'source-fidelity',
    text: `LENS: SOURCE FIDELITY. For each claim, check independently: does the cited work exist with that title, first author, year, and venue? When you search for it, does the cited URL (or a URL for the same work) appear in your results? Does the work actually report what the claim says, at the strength claimed? Fix citation errors (wrong year, venue, author, or a news URL where a primary one exists) via corrected_citation and better_url. better_url must be a URL that appeared verbatim in YOUR search results. Budget: at most ${SEARCH.verifier} WebSearch calls; prioritize HIGH-confidence claims and the claims central to the track. Mark claims you could not check as unverifiable -- do not guess.`,
  },
  {
    key: 'skeptic',
    text: `LENS: ADVERSARIAL SKEPTIC. Try to refute or narrow each claim. Look for: wiring or model results presented as recorded activity; sex, species, or preparation mix-ups; one-lab results presented as settled; "decoding/translating language" hype; findings contradicted, qualified, or superseded by later work (especially 2025-2026 connectome releases and follow-ups); numbers that are wrong. Use WebSearch to look for contradicting or qualifying evidence (at most ${SEARCH.verifier} searches, focused on the strongest and most important claims). If a claim is broadly right but overstated, mark partially_supported and supply corrected_claim. Refute only with a concrete reason in the note. better_url, if given, must have appeared verbatim in YOUR search results.`,
  },
]

function compactClaims(claims) {
  return claims.map(c => ({
    id: c.id, claim: c.claim, evidence_type: c.evidence_type, species: c.species, neurons: c.neurons || [],
    source_title: c.source_title, source_authors: c.source_authors || '', venue: c.venue || '', year: c.year,
    source_url: c.source_url, supporting_snippet: c.supporting_snippet || '', confidence: c.confidence,
  }))
}

function adjudicate(claims, verdictSets) {
  const maps = verdictSets.filter(Boolean).map(vs => {
    const m = {}
    for (const v of vs.verdicts || []) m[v.claim_id] = v
    return m
  })
  const nVerifiers = Math.max(maps.length, 1)
  return claims.map(c => {
    const vs = maps.map(m => m[c.id]).filter(Boolean)
    const count = k => vs.filter(v => v.verdict === k).length
    const sup = count('supported'), part = count('partially_supported'), ref = count('refuted')
    let status, finalConfidence
    if (ref >= 2 || (ref === 1 && sup === 0 && part === 0)) { status = 'refuted'; finalConfidence = null }
    else if (ref === 1) { status = 'conflict'; finalConfidence = 'CONFLICT' }
    else if (sup >= 2) { status = 'verified'; finalConfidence = c.confidence }
    else if (sup === 1 && part === 0) { status = 'verified-single'; finalConfidence = c.confidence === 'LOW' ? 'LOW' : 'MED' }
    else if (part >= 1 && sup + part >= 2) { status = 'corrected'; finalConfidence = c.confidence === 'LOW' ? 'LOW' : 'MED' }
    else if (part === 1) { status = 'corrected-single'; finalConfidence = 'LOW' }
    else { status = 'unverified'; finalConfidence = 'LOW' }
    const pick = f => (vs.find(v => v[f] && v[f].trim()) || {})[f] || ''
    return {
      ...c,
      status,
      final_confidence: finalConfidence,
      final_claim: pick('corrected_claim') || c.claim,
      corrected_citation: pick('corrected_citation'),
      better_url: pick('better_url'),
      verifier_notes: vs.map(v => `${v.verdict}: ${v.note}`),
      votes: { supported: sup, partial: part, refuted: ref, missing: nVerifiers - vs.length },
    }
  })
}

function stats(ledger) {
  const s = { total: ledger.length }
  for (const c of ledger) s[c.status] = (s[c.status] || 0) + 1
  return s
}

const selected = Array.isArray(INPUT.tracks) && INPUT.tracks.length
  ? TRACKS.filter(t => INPUT.tracks.includes(t.key))
  : TRACKS
log(`Running ${selected.length} track(s): ${selected.map(t => t.key).join(', ')}`)

const results = await pipeline(
  selected,
  // Stage 1: deep research
  async track => {
    const research = await agent(
      `${COMMON}

YOUR TRACK: ${track.num} -- ${track.title}

${track.brief}

The named papers above are seed leads written from memory; some details may be wrong. Confirm, correct, or discard each one, and go well beyond them -- especially 2025-2026 work.

METHOD
1. Run up to ${SEARCH.research} distinct WebSearch queries (hard limit): primary literature, lab and project pages, 2025-2026 developments, and critiques or failed replications.
2. Extract 15-30 specific, falsifiable claims. Each claim: one fact, the exact neurons/species/sex involved, evidence type, the source (title, authors, venue, year, URL from your results), a short supporting snippet from the search result, and your confidence (HIGH = primary source seen in results and consistent with other sources; MED = one decent source; LOW = secondary or uncertain).
3. List key neurons/cell types (where relevant), datasets/tools, open questions, and 3-6 concrete research project ideas that move toward two-way communication with animals. Mark each idea's feasibility honestly.
4. List hype flags: claims you encountered that overreach.

Return the structured output only.`,
      { label: `research:${track.key}`, phase: 'Research', schema: RESEARCH_SCHEMA },
    )
    if (!research || !Array.isArray(research.claims)) throw new Error(`research failed for ${track.key}`)
    research.claims = research.claims.map((c, i) => ({ ...c, id: `T${track.num}-${String(i + 1).padStart(2, '0')}` }))
    log(`${track.key}: ${research.claims.length} claims extracted`)
    return research
  },
  // Stage 2: dual adversarial verification, adjudicated in code
  async (research, track) => {
    const claimsJson = JSON.stringify(compactClaims(research.claims), null, 1)
    const verdictSets = await parallel(VERIFIER_LENSES.map(lens => () => agent(
      `${COMMON}

You are an independent VERIFIER for track ${track.num} -- ${track.title}. You did not produce these claims and you have no access to the researcher's reasoning. Judge every claim below.

${lens.text}

Verdicts: supported | partially_supported (supply corrected_claim) | refuted (concrete reason in note) | unverifiable. Return one verdict per claim_id, for every claim. Also list missing_topics: important aspects of this track the claims do not cover.

CLAIMS (JSON):
${claimsJson}`,
      { label: `verify:${lens.key}:${track.key}`, phase: 'Verify', schema: VERDICT_SCHEMA },
    )))
    const ledger = adjudicate(research.claims, verdictSets)
    const st = stats(ledger)
    log(`${track.key}: verification ${JSON.stringify(st)}`)
    const missingTopics = verdictSets.filter(Boolean).flatMap(v => v.missing_topics || [])
    const verifierOverall = verdictSets.filter(Boolean).map(v => v.overall_notes || '').filter(Boolean)
    return { research, ledger, stats: st, missingTopics, verifierOverall }
  },
  // Stage 3: write the dossier
  async (v, track) => {
    const path = `${OUT_DIR}/${track.num}-${track.slug}.md`
    const keep = v.ledger.filter(c => c.status !== 'refuted')
    const dropped = v.ledger.filter(c => c.status === 'refuted').map(c => ({ id: c.id, claim: c.claim, source: c.source_title, why: c.verifier_notes }))
    const payload = {
      track: { num: track.num, title: track.title },
      researcher_summary: v.research.summary,
      key_neurons: v.research.key_neurons || [],
      datasets_tools: v.research.datasets_tools || [],
      open_questions: v.research.open_questions || [],
      project_ideas: v.research.project_ideas || [],
      hype_flags: v.research.hype_flags || [],
      verifier_missing_topics: v.missingTopics,
      verifier_overall_notes: v.verifierOverall,
      verification_stats: v.stats,
      claims: keep.map(c => ({
        id: c.id, final_claim: c.final_claim, original_claim: c.final_claim === c.claim ? undefined : c.claim,
        status: c.status, confidence_tag: c.final_confidence, evidence_type: c.evidence_type, species: c.species,
        neurons: c.neurons || [], source_title: c.source_title, source_authors: c.source_authors || '', venue: c.venue || '',
        year: c.year, source_url: c.source_url, corrected_citation: c.corrected_citation, better_url: c.better_url,
        verifier_notes: c.verifier_notes,
      })),
      dropped_claims: dropped,
    }
    const out = await agent(
      `You are the WRITER for track ${track.num} of the Interspecies Communication Research Program (fruit fly connectome and brain-mapping work as the anchor for better two-way communication with animals). Today is ${TODAY}.

Write one Markdown dossier to this exact path with the Write tool: ${path}
(The directory exists. Overwrite the file if present.)

Base it ONLY on the verified material in the JSON below. Do not add facts from memory. If an essential connecting fact is missing, you may state it only as an explicitly unverified note tagged [LOW].

Structure:
# Track ${track.num} -- ${track.title}
A short italic status line: "Interspecies Communication Research Program · ${TODAY} · N claims kept of M checked (verified / corrected / conflict / unverified counts) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]".
## Bottom line -- 4-7 bullets that answer the track's deliverable directly.
## What the evidence shows -- organized subsections. Every substantive sentence carries a confidence tag and a numbered citation like [HIGH][3]. Say the evidence type in plain words where it matters (recorded activity, causal manipulation, wiring only, model prediction).
## A results table suited to the track (for fly-circuit tracks: Neuron / cell type | Role | Sex | Evidence type | Confidence | Source #; for other tracks, an equivalent table such as Project | Species | What was shown | Evidence | Confidence | Source #).
## Why this matters for two-way communication with animals -- concrete, not grand.
## Open questions -- include the verifiers' missing topics where substantive.
## Candidate research projects -- a table: Project | Hypothesis | Approach and data | Feasibility | First step.
## Leads needing confirmation -- unverified or single-verifier items, stated cautiously.
## Claims dropped in verification -- one line each: what was claimed and why it was dropped.
## Sources -- numbered list: Title -- Authors -- Venue, Year -- URL. Use better_url when given, else source_url; if both are empty write "URL not verified". Apply corrected_citation details when given. Never invent or edit a URL.

Style: precise, plain scientific prose for a research team. No filler, no hype, no "It's important to note", no "Let's dive in", no "In conclusion". Use the claim's final_claim wording (corrected where the verifiers corrected it). A CONFLICT tag means the verifiers disagreed: show both readings briefly. Aim for 1,800-3,500 words.

After writing, return the structured output: path, title, 4-7 bottom_line bullets (same as the file), the top 3 project titles, and an approximate word_count.

DATA (JSON):
${JSON.stringify(payload, null, 1)}`,
      { label: `write:${track.key}`, phase: 'Write', schema: WRITE_SCHEMA },
    )
    return { key: track.key, num: track.num, title: track.title, path, stats: v.stats, write: out, ledger: v.ledger, missingTopics: v.missingTopics }
  },
)

const done = results.filter(Boolean)
const failed = selected.filter(t => !done.find(d => d.key === t.key)).map(t => t.key)
if (failed.length) log(`Tracks that failed and need a rerun: ${failed.join(', ')}`)
return { completed: done, failed }
