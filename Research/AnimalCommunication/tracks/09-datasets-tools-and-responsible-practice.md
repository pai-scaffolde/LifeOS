# Track 09 -- Datasets, tools, and responsible practice

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 checked (verified 24 [4 by both verifiers, 20 by one] / corrected 7 [4 by both, 3 by one] / conflict 0 at claim level / unverified 0) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

**Verification caveat.** No web search ran for this track: the session search budget was already used up, and fetches to publisher and index sites were blocked. A claim counts as "verified" if a verifier supported it either from official package code and metadata on PyPI (fafbseg, caveclient, neuprint-python, neuronbridge-python, banc, sleap, das) or from the verifier's own knowledge of the literature. No source has a verified URL and no claim is tagged [HIGH]. Where the verifiers disagreed on a detail inside a kept claim, that detail is tagged [CONFLICT].

## Bottom line

- Every connectome in this track is wiring only. FlyWire, hemibrain and BANC (females) and MANC, optic-lobe and male-cns (males) show which neurons connect, not which ones light up [MED][1][5][7][11][13]. Song responses come from separate calcium-imaging studies and are mostly not tied to connectome neuron IDs [MED][22]. Linking the two is the program's main data gap.
- Computational work can start in week 1 on a laptop. FlyWire v783 is available through CAVE; hemibrain and MANC through neuPrint with a personal token; driver lines through Virtual Fly Brain and NeuronBridge; SLEAP and DAS handle behaviour and song; and the MIT-licensed Shiu et al. whole-brain model runs on CPU [MED][1][3][6][14][19][20]. Wet-lab work depends on ordering split-GAL4 stocks and takes months [LOW][18].
- Connectome results depend on the version and on the individual animal. Pin and record the materialization (v630 or v783) [MED][14]. Across two female brains, cell-type connectivity replicated, but individual connections and cell counts varied. One animal's wiring is therefore not the species norm [MED][2].
- The "Cell, Sept 2026 complete male CNS" paper named in the program brief could not be verified. Until it is confirmed, cite the 2025 bioRxiv preprint (Berg et al.) and the neuPrint "male-cns" dataset (v0.9 at release) [LOW][11].
- Models and AI tools give predictions and categories, not biology or meaning. The Shiu model was validated for feeding and grooming, not courtship [MED][4]. NatureLM-audio and BEANS measure detection and classification [LOW][26][MED][27]. The sperm whale coda work shows structure, not meaning [MED][28].
- Insects fall outside UK sentience law [MED][31]. The New York Declaration and strong review evidence of pain-relevant capacities in adult flies still justify a voluntary welfare review for repeated playback and optogenetic protocols [MED][33][34]. Playing AI-generated signals to wild animals needs ethical review first [MED][29]. The existing large-scale uses of insect signals are for pest control (vibrational mating disruption, mosquito sound lures), so dual-use screening belongs in the program [LOW][35][36].
- No claim here has a verified URL. Rerun verification with a search budget before any external use, starting with the dataset sizes and the male CNS publication status.

## What the evidence shows

### Connectome datasets (wiring only)

**FlyWire.** FlyWire is the brain of one adult female, reconstructed from the FAFB electron-microscopy volume. It is released through CAVE as the datastack "flywire_fafb_public", with static materializations v630 (the version Shiu et al. used) and v783 [MED][1]. Its reported size, about 139,000 neurons and 5x10^7 chemical synapses, was not re-checked this session [MED][1]. Synapses were detected automatically, and neurotransmitter identities are machine predictions (Eckstein et al. 2024, not among this track's sources), so each connection's sign is inferred, not measured [LOW][1].

**Cell typing and variability.** Annotating FlyWire gave about 8,400 cell types. Connectivity at the cell-type level was largely reproducible between FlyWire and the hemibrain, which come from two different females, but individual connections and some per-type cell counts varied [MED][2]. The verifiers disagreed on the cross-match. One read 8,453 as FlyWire's total type count, of which only about 3,600 were matched to hemibrain types; the other accepted the claim as written [CONFLICT][2]. One verifier recalled a working threshold from the paper: connections above about 10 synapses, or above about 1% of a cell's input, are likely to be conserved [LOW][2].

**Hemibrain.** The hemibrain comes from one female and covers about 25,000 neurons across much of the central brain. It is on neuPrint as "hemibrain" v1.2.1 [MED][5]. It leaves out the optic lobes and most of the SEZ/GNG, which cuts off many descending and gustatory pathways relevant to courtship [LOW][5].

**MANC.** MANC is the complete ventral nerve cord of one male, about 23,000 neurons. It systematically annotates descending, ascending, motor and premotor neurons, including the wing-motor systems used for song [MED][7][8]. Both verifiers placed most of the premotor and song-motor annotation in companion papers [MED][9][10]. The volume contains no brain, so descending neurons such as pIP10 appear only as truncated axons [LOW][7].

**Optic lobe.** This dataset covers one male optic lobe, with tens of thousands of neurons in several hundred cell types. It is on neuPrint as "optic-lobe" and matched to driver lines [MED][12]. LC10a is present only as wiring; its courtship-related activity comes from separate imaging studies [LOW][12].

**Male CNS.** This dataset covers the brain and VNC of one male, about 166,000 neurons. It was posted as a 2025 preprint on sexual dimorphism and released on neuPrint as "male-cns" v0.9 [LOW][11]. It reportedly shares its source EM volume with the optic-lobe dataset [LOW][12].

**BANC.** BANC contains one female's brain and VNC in a single EM volume, about 160,000 neurons, proofread in CAVE [LOW][13]. It is the only listed dataset with brain and cord from the same animal. Because that animal is female, it lacks the male song-motor circuitry [LOW][13].

### Access, infrastructure and versioning

CAVE serves versioned, timestamped materializations of segmentations and annotations that are continuously proofread. Users query it through caveclient with an auth token, and FlyWire and BANC both run on it [MED][14]. Results change between materializations, and neuron IDs from v630 do not carry over directly to v783 [MED][14]. neuPrint is a web service with a Python client (neuprint-python) that serves hemibrain and MANC among other datasets. API access needs a personal token taken from the web interface [MED][6]. Two further details were asserted but not found in the client code checked: that sign-in is through Google, and that optic-lobe and male-cns are also hosted [LOW][6]. Unverified note: FlyWire Codex is the no-code browser for FlyWire tables. Its sign-in requirements and data licence were not checked [LOW].

### From connectome cell type to genetic handle

Virtual Fly Brain is a free atlas with no account required. Under the Drosophila Anatomy Ontology it links EM neurons, driver-line images and neuron types curated from the literature [LOW][15]. NeuronBridge matches EM neurons to FlyLight MCFO and split-GAL4 images by colour-depth morphology search. This is confirmed for hemibrain v1.2.1; coverage of MANC was not verified [LOW][16]. A match identifies a candidate line only: expression specificity must be confirmed before any causal experiment [LOW][16]. FlyLight provides a single-neuron image resource (MCFO) and a split-GAL4 driver-line resource, with stocks distributed through the Bloomington Drosophila Stock Center [LOW][17][18]. The parent GAL4 lines are split between Bloomington and VDRC [LOW][17]. Coverage of courtship neurons (P1 subtypes, pIP10, pC2, vpoDN) has to be checked line by line [LOW][18].

### Activity data: neurons recorded responding to song

Pan-neuronal calcium imaging in head-fixed males and females found diverse, widespread responses to auditory stimuli, including components of courtship song, across the central brain. The responses were not confined to the AMMC/wedge auditory pathway (recorded activity) [MED][22]. They were measured per region of interest, not per identified cell type or connectome ID [MED][22].

pC2l and pC2m neurons are tuned to song in both sexes, as shown by calcium imaging, and activating them drives sex-specific behaviours (recorded activity plus causal manipulation) [LOW][24]. In virgin females, pC1 neurons respond to male song and to the pheromone cVA and relate to receptivity (recorded activity) [LOW][25]. Optogenetic activation of the pC1d/e subset produces persistent neural activity lasting minutes and a lasting, mainly aggression-like behavioural state. EM wiring shows recurrent pC1d/e-aIPg connections (causal manipulation plus wiring) [LOW][23]. That study did not show persistent pC1 activity evoked by song [LOW][23].

### Models: predictions to test, not simulated biology

A leaky integrate-and-fire model of the whole FlyWire brain was built from connectivity and neurotransmitter identity alone, with no fitted weights. It predicted which neurons carry taste-to-feeding (sugar, water) and mechanosensory grooming signals, and a subset of those predictions was confirmed by optogenetics and imaging (model prediction, partly tested by causal manipulation) [MED][4]. Global parameters came from the literature, so the model is not strictly parameter-free [MED][4]. It was not validated for courtship communication [MED][4]. One verifier added that the song-relevant JO-A/B auditory pathway was not tested either [LOW][4].

The public code is MIT-licensed and written in Python for the Brian 2 simulator, with optional C++ code generation. It uses FlyWire v630, as in the paper, and ships v783 connectivity as an alternative. It runs on CPU under Mac, Windows or Unix, installs in about 10 minutes and writes several GB of raw output. The paper's outputs are archived separately at doi 10.17617/3.CZODIW [MED][3].

### Behaviour and signal tools

SLEAP is open-source deep-learning software for tracking the poses of several animals at once. It supports bottom-up and top-down models, trains from relatively few labelled frames, and was benchmarked on data that include courting fly pairs and mice [MED][19]. DAS is an open-source network that annotates acoustic signals, including fly pulse and sine song, bird song and rodent vocalisations. It is accurate and fast enough for closed-loop experiments [MED][20]. Confirm its latency figure before a closed-loop design depends on it [LOW][20]. DAS labels segments of signal; it does not decode meaning [MED][20].

### Cross-species AI bioacoustics

NatureLM-audio, from Earth Species Project, is an audio-language foundation model for bioacoustics released with open weights. It is evaluated on BEANS-Zero for zero-shot species classification, call-type detection and captioning, none of which amounts to semantic translation [LOW][26]. Its licence terms, including any non-commercial restriction, were not confirmed [LOW][26]. BEANS standardises the evaluation of classification and detection on public datasets covering birds, mammals, anurans and insects [MED][27]. Analysis of the Dominica Sperm Whale Project coda dataset found contextual and combinatorial structure in sperm whale codas, which the authors called a "phonetic alphabet" (rhythm, tempo, rubato, ornamentation). This is structure, not meaning (acoustic analysis) [MED][28].

### Reproducibility lessons

A careful experimental and statistical re-evaluation found no evidence for the reported ~55-s rhythm in the inter-pulse interval of *D. melanogaster* courtship song, and attributed the earlier positive reports to analysis artefacts. The original authors dispute this (behavioural reanalysis) [MED][21]. The lesson for this program: automated analysis can create apparent structure, and single-lab findings about signal structure need independent replication [MED][21].

### Welfare, law and ethics frameworks

The UK Animal Welfare (Sentience) Act 2022 recognises all vertebrates, cephalopod molluscs and decapod crustaceans as sentient for policy purposes, and it creates an Animal Sentience Committee. Insects are not included (legislation) [MED][31]. One verifier added that ASPA 1986 and EU Directive 2010/63/EU also exclude insects [LOW][31]. The DEFRA-commissioned LSE review applied eight sentience criteria. It found very strong evidence in octopods, strong evidence in true crabs, substantial evidence in other cephalopod and decapod groups, and weaker evidence for shrimps and nautiloids, mainly because they are understudied. It recommended bringing all cephalopods and decapods under UK welfare law [LOW][32].

The New York Declaration on Animal Consciousness (2024) reports strong scientific support for conscious experience in mammals and birds. It says there is at least a realistic possibility of such experience in all vertebrates and many invertebrates, at minimum cephalopods, decapods and insects, and that ignoring it in welfare decisions is irresponsible [MED][33]. It is a signed expert statement, neither law nor peer-reviewed [MED][33]. A systematic review applied eight pain-related criteria across insect orders. It found strong evidence of pain-relevant capacities in adult Diptera (flies) and Blattodea (cockroaches), and weaker or absent evidence in many other orders, largely because they are less studied [MED][34].

A Science Policy Forum argued that machine learning could help decode animal communication. It warned that playing AI-generated signals back to wild animals risks disrupting their behaviour and cultures, and called for ethical guidelines [MED][29]. Both verifiers said the claim's "before any such interactive experiments" may overstate the paper, and that "caution for interactive playback" is safer wording [MED][29]. Yovel and Rechavi argue in an opinion piece that pattern-finding is not two-way communication, which requires context, interactive playback and behavioural validation. They add that animals may have no language-like semantics to translate [MED][30].

### Dual use and data governance

Vibrational disturbance signals played through vineyard trellis wires disrupted mating communication in the leafhopper *Scaphoideus titanus*, the vector of grapevine flavescence dorée. This led to field trials of "vibrational mating disruption" (behavioural, field) [LOW][35]. Sound lures that mimic female *Aedes aegypti* flight tones passively trap males, which supports acoustic surveillance and control of this disease vector [LOW][36]. Scientists have warned that published location data for rare species helped poachers and collectors, and urged that such data be withheld or obscured [MED][37].

### Starter sequence for the first 30 days

| Week | Task | Confidence | Source # |
|---|---|---|---|
| 1 | Get neuPrint and CAVE tokens; export connectivity for named communication types from FlyWire v783 and a male dataset; log versions. Codex sign-in and licences unchecked. | MED (tokens, versioning); LOW (Codex) | 6, 14 |
| 2 | Map EM types to candidate split-GAL4 lines (NeuronBridge, VFB, FlyLight); price stock orders. | LOW | 15-18 |
| 3 | Set up SLEAP pose and DAS song pipelines; locate public Murthy- and Stern-lab song data (locations unverified). | MED (tools); LOW (data) | 19, 20 |
| 4 | Install the Shiu model, reproduce one published prediction, then add a song-input protocol. | MED | 3, 4 |

## Results table

| Resource or finding | Species / sex | What it provides or shows | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| FlyWire v630 / v783 | *D. melanogaster*, 1 female | Whole-brain wiring, ~139k neurons, via CAVE | Wiring only | MED | 1 |
| FlyWire vs hemibrain typing | 2 females | ~8,400 types; cell-type connectivity reproducible, single edges vary | Wiring comparison | MED (cross-match count CONFLICT) | 2 |
| Hemibrain v1.2.1 | 1 female | ~25k central-brain neurons | Wiring only | MED | 5 |
| MANC | 1 male | ~23k VNC neurons; wing-motor and premotor annotation | Wiring only | MED | 7-10 |
| Optic-lobe | 1 male | Complete optic lobe, matched to driver lines | Wiring only | MED | 12 |
| male-cns v0.9 | 1 male | Brain + VNC, ~166k neurons | Wiring only (preprint) | LOW | 11 |
| BANC | 1 female | Brain + VNC in one volume, ~160k neurons | Wiring only (preprint) | LOW | 13 |
| CAVE / caveclient; neuPrint | -- | Versioned, token-based query access | Tool | MED | 6, 14 |
| Virtual Fly Brain; NeuronBridge; FlyLight | -- | Link EM types to driver lines | Tool / resource | LOW | 15-18 |
| Shiu model code | FlyWire female | MIT, Brian 2, CPU, v630 + v783 | Tool | MED | 3 |
| Shiu model results | FlyWire female | Feeding and grooming predictions, subset confirmed; no courtship test | Model prediction + partial causal test | MED | 4 |
| SLEAP; DAS | Flies, mice, birds, rodents | Pose tracking; low-latency song segmentation | Tool | MED | 19, 20 |
| Auditory activity survey | Both sexes | Widespread song responses beyond AMMC/wedge | Recorded activity (by region, no cell IDs) | MED | 22 |
| pC2l / pC2m | Both sexes | Song-tuned; activation drives sex-specific behaviour | Recorded activity + causal manipulation | LOW | 24 |
| pC1 | Virgin females | Responds to song and cVA; linked to receptivity | Recorded activity | LOW | 25 |
| pC1d/e | Females | Optogenetically induced persistent state, aggression-like; recurrent wiring | Causal manipulation + wiring | LOW | 23 |
| Song-rhythm re-evaluation | Males | No evidence for ~55-s rhythm; disputed | Behavioural reanalysis | MED | 21 |
| NatureLM-audio; BEANS | Many taxa incl. insects | Classification, detection, captioning benchmarks | Tool | LOW; MED | 26, 27 |
| Sperm whale codas | *Physeter macrocephalus* | Combinatorial, contextual structure | Acoustic analysis | MED | 28 |
| Vibrational mating disruption; sound lures | *S. titanus*; *Ae. aegypti* | Signal playback disrupts mating or traps males | Behavioural | LOW | 35, 36 |

## Why this matters for two-way communication with animals

- In the fly, both ends of a courtship exchange can be looked up at synapse level in both sexes, and some receiver neurons also have recorded activity [MED][2][22]. An "exchange" can therefore be defined operationally as male signal, then female neural response, then female motor reply, and each link checked separately against wiring, activity and manipulation data.
- The tools for a contingent playback test exist. DAS gives low-latency song segmentation and SLEAP gives pose, so playback can be made to depend on the female's own behaviour [MED][19][20]. The Yovel-Rechavi criteria (the animal's own signals, in context, validated by its behavioural response) give a pass/fail standard for calling the result "communication" [MED][30].
- Fly song gives ground truth for AI decoders. Because pulse versus sine song is a distinction known at circuit level, decoders headed for whales or birds can be scored on fly data first. Current tools classify signals; they do not recover meaning [MED][27][28].
- The working large-scale cases of "talking back" to insects are disruption and luring [LOW][35][36]. Any interactive signal system the program builds for a pest species will have a control use and needs non-target assessment.
- Closed-loop "conversation" protocols run many trials on many flies. That is where a precautionary welfare review has practical effect: animal numbers, stimulus intensity and stop rules [MED][33][34].
- Version pinning and checks across several datasets decide whether a "communication circuit" holds up. A pathway present in one animal and absent in another is a hypothesis, not a circuit [MED][2][14].

## Open questions

- Is the male CNS paper published as the brief describes? Does a neuPrint v1.0 release rename cell types or change IDs relative to v0.9?
- How variable are pC1, pC2, vpoDN, vpoEN, pIP10 and their main partners across FlyWire, hemibrain, BANC, MANC and male-cns? Which connections are stable enough to model an exchange?
- Which public imaging datasets resolve song responses finely enough to register to FlyWire cell types? Where are they hosted (DANDI/NWB or lab servers)?
- How accurate are the predicted neurotransmitter labels (Eckstein et al. 2024) in communication circuits, and how much do sign errors change model output?
- This track did not cover FANC (the female nerve cord connectome) or the transforms that register FAFB, FANC, BANC, MANC and hemibrain to each other. Both are needed to compare VNC-side song reception and receptivity between the sexes.
- What are the licence and citation terms for FlyWire, the neuPrint datasets, BANC, ESP model weights and CETI data, especially for commercial or pest-control use?
- Which behavioural measures of distress or avoidance are valid in flies? What standard should apply to repeated closed-loop playback or optogenetics?
- Can a pipeline from captive to wild animals, with stop rules, satisfy the concerns of Rutz et al. [29] for AI-synthesised signals?
- Can the fly serve as a testbed that separates "signal category" from "meaning" for decoders used on other species? How well do other benchmarks (BirdSet, Perch) and behaviour tools (FlyTracker, JAABA, DeepLabCut) handle near-field insect signals?

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| Cross-connectome communication circuit atlas | The song sender circuit (P1, pIP10, VNC song neurons) and receiver circuit (JO, AMMC/wedge, pC2/pC1, vpoEN/vpoDN) are conserved at cell-type level across connectomes; individual variation sits mainly in weak connections. | Pull named types and their 2-hop partners from FlyWire, hemibrain, BANC, MANC and male-cns; cross-match with navis/fafbseg; classify edges as conserved or variable using synapse thresholds (start from ~10 synapses / ~1% of input [2]); publish a versioned table. | Computational; start now | Get neuPrint and CAVE tokens; export pC1, pC2, vpoDN, vpoEN and pIP10 connectivity from FlyWire v783 and male-cns; record versions. |
| In-silico female: whole-brain model response to simulated song | Driving Johnston's organ input with song-like patterns in the Shiu model recruits known song-responsive neurons (pC2, pC1, vpoEN) more than matched control stimuli do. | Run the Brian 2 model with v783; stimulate JO subtypes with pulse- and sine-like rate patterns; rank downstream neurons; score against published imaging [22][24]. The auditory pathway is reportedly untested in this model [4], so failures are informative. | Computational; start now | Install (~10 min), reproduce one published feeding or grooming result, then add JO stimulation. |
| Minimal fly "conversation" rig with contingent playback | Female locomotion and receptivity change more when synthetic song depends on her behaviour than when matched song plays independently of it. | DAS and SLEAP trigger pulse or sine playback from female speed, distance or orientation; yoked controls, blinded scoring, preregistration; later, imaging of pC1 or vpoEN through split-GAL4 lines. | Wet lab; months | Pilot playback only, using recorded public song; write the invertebrate welfare protocol before running any flies. |
| Ground-truth benchmark for AI "decoders" | Unsupervised methods will recover circuit-level song categories (pulse vs sine, feedback-linked modes) but not their behavioural meaning without contingency tests. | Apply NatureLM-audio/BEANS-style embeddings and clustering to public fly song and courtship data; score against circuit ground truth and behaviour-contingent effects; release for Tracks 07 and 08. | Computational; start now | Build a labelled fly-song evaluation set from public DAS training data; run baseline embeddings. |
| Song-response data audit and registration (derived from open questions) | Some public imaging data resolve song responses finely enough to register to FlyWire cell types. | Audit data-availability statements of [22]-[25]; convert usable data to NWB; register to FlyWire types; flag which neurons have wiring only and which have activity. | Computational; months, depends on data access | List candidate datasets with their hosting and licence status; contact labs whose data are not deposited. |
| Program responsible-practice charter and dual-use review | A short published charter reduces overclaiming and welfare risk without slowing the science. | Draft from [29][30][32][33][34][37] plus ASAB/ABS guidelines (unverified); apply to every project, with non-target assessment for pest uses. | Start now; no lab needed | Week 1: circulate the guardrails below for team sign-off. |
| Species-specific acoustic or vibrational lure for a pest drosophilid | Knowledge of song feature detection in *D. melanogaster* can guide species-specific playback that attracts, or disrupts courtship in, a pest such as *D. suzukii* without non-target effects. | Characterise the target species' acoustic and vibrational signals; test synthetic variants in the lab, then in semi-field cages, measuring non-target effects. | Wet lab; years | Audit the pest's courtship signalling first; several drosophilids rely less on airborne song, so the premise may fail. |

Proposed charter guardrails (the researcher's synthesis; not verified as a set) [LOW]:
1. Insect welfare: minimise animal numbers, limit aversive stimulation, set humane endpoints, give animals a way to opt out.
2. Playback: pilot in captivity; independent review before any wild broadcast of AI-synthesised signals; amplitude and duration limits, disturbance monitoring, stop rules.
3. Claims: label evidence types; never call classification "translation"; "conversation" claims require contingent, controlled, blinded, preregistered tests.
4. Data: FAIR with versioned IDs; obscure sensitive locations; respect host-nation and Indigenous data rights and permits.
5. Dual use: non-target assessment for lures and disruption signals; no open release of signal generators for protected species or pollinators.
6. Pitfalls: Clever-Hans effects; wiring treated as activity; model output treated as biology; artefactual rhythms; one connectome treated as the species norm.

## Leads needing confirmation

**Publication status.** The "Cell, Sept 2026" male CNS paper, and whether neuPrint male-cns has moved beyond v0.9 [LOW][11].

**Communication neurons to query first.** This list comes from the researcher's recall and was not verified this session. Every entry is [LOW].

| Neuron / cell type | Role (as recalled) | Sex | Evidence type (recalled) |
|---|---|---|---|
| pIP10 | Descending neuron; activation drives song | Male | Causal manipulation |
| P1 (male pC1 cluster) | Arousal and decision; gates song and pursuit | Male | Recorded activity + causal manipulation |
| pC2l / pC2m | Song detectors; sex-specific responses | Both | Recorded activity + causal manipulation |
| vpoEN -> vpoDN | Song-responsive input to the descending neuron for vaginal plate opening (the female's motor "reply") | Female | Recorded activity + causal manipulation |
| JO-A / JO-B; AMMC-B1 | Antennal detection of near-field song; early central auditory tuning | Both | Recorded activity |
| TN1A, dPR1 | VNC neurons patterning sine and pulse song | Male | Causal manipulation + wiring |
| LC10a | Visual tracking of the female, gated by P1 | Male | Recorded activity |
| ppk23+ foreleg neurons; Or67d ORNs | Contact pheromone and cVA detection | Both | Recorded activity / causal manipulation |

**Named but unchecked.** FlyWire Codex; flyvis (Lappalainen et al. 2024); NeuroMechFly v2/FlyGym and flybody; FANC; Brezovec et al. 2024 imaging; Wang et al. 2021 (vpoDN/vpoEN); where the public Murthy- and Stern-lab song data are hosted; the ~24 GB GPU needed for NatureLM-audio; the CETI coda annotations released with [28], whose raw data are reportedly not open; whether the US Animal Welfare Act excludes insects; the content of the ASAB/ABS playback guidance. All [LOW].

**Hype checks (recalled).** DolphinGemma (2025) and the 2023 humpback "Twain" exchange (McCowan et al., PeerJ) are pattern generation and a single call-matching episode, not demonstrated semantic conversation. The mosquito "harmonic convergence" findings are contested. Claims of a "digital fly" built from connectome models overstate what those models were validated for [LOW][4].

**Single-verifier support, mostly from memory.** Claims T09-02, 03, 04, 07, 08, 09, 14, 17, 18, 20-25 and 27-31, and the corrected forms of T09-12, 19 and 26. Check the [LOW] items first: the male CNS and BANC sizes [11][13], the driver-line resource citations [15]-[18], the pC1/pC2 citations [23]-[25], the NatureLM-audio licence [26], the graded LSE findings [32], and the pest-control precedents [35][36].

## Claims dropped in verification

No claims were dropped. Seven were kept only in corrected form:
- T09-01: "v783 is the reference materialization" reframed; v630 and v783 are both static public releases, and the counts are flagged as not re-verified.
- T09-05: hemibrain size marked as not re-verified; neuPrint version v1.2.1 added.
- T09-06: "open-access" and "Google sign-in" dropped as unverified; token retrieval through the web interface confirmed from the client code.
- T09-12: VFB venue corrected from *Genetics* to *Frontiers in Physiology*.
- T09-13: MANC coverage of NeuronBridge dropped as unverified.
- T09-19: "song-evoked persistent pC1 activity" removed. The persistent state was induced optogenetically in pC1d/e and was mainly aggression-like. pC1 song and cVA responses are credited to Zhou et al. 2014. The pC2 paper is dated 2019.
- T09-26: "strong evidence in octopods" replaced by the graded findings (very strong for octopods, strong for true crabs).

## Sources

1. Neuronal wiring diagram of an adult brain -- Dorkenwald S, Matsliah A, Sterling AR, et al.; FlyWire Consortium; Murthy M, Seung HS -- Nature, 2024 (preprint bioRxiv 2023, doi:10.1101/2023.06.27.546656; Nature volume, pages and DOI not verified) -- URL not verified
2. Whole-brain annotation and multi-connectome cell typing quantifies circuit stereotypy in Drosophila (preprint title; Nature version reportedly shortened to "Whole-brain annotation and multi-connectome cell typing of Drosophila", not verified) -- Schlegel P, Yin Y, Bates AS, et al.; Jefferis GSXE -- bioRxiv 2023, doi:10.1101/2023.06.27.546055; Nature, 2024 -- URL not verified
3. philshiu/Drosophila_brain_model (GitHub code accompanying Shiu et al., Nature 2024) -- Shiu PK et al. -- GitHub, 2024 (raw outputs: doi 10.17617/3.CZODIW) -- URL not verified
4. A Drosophila computational brain model reveals sensorimotor processing -- Shiu PK, Sterne GR, Spiller N, et al.; Scott K -- Nature, 2024 -- URL not verified
5. A connectome and analysis of the adult Drosophila central brain -- Scheffer LK, Xu CS, Januszewski M, et al. -- eLife, 2020 -- URL not verified
6. neuPrint: an open access tool for EM connectomics -- Plaza SM, Clements J, Dolafi T, et al. -- Frontiers in Neuroinformatics, 2022 -- URL not verified
7. A connectome of the male Drosophila ventral nerve cord -- Takemura S et al. -- eLife, 2024 -- URL not verified
8. Systematic annotation of a complete adult male Drosophila nerve cord connectome reveals principles of functional organisation -- Marin EC et al. -- eLife, 2024 -- URL not verified
9. Transforming descending input into behavior: the organization of premotor circuits in the Drosophila Male Adult Nerve Cord connectome -- Cheong HSJ et al. -- eLife, 2024 -- URL not verified
10. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL et al. -- Current Biology, 2024 (per corrected citation; one verifier recalled eLife [CONFLICT]) -- URL not verified
11. Sexual dimorphism in the complete connectome of the Drosophila male central nervous system -- Berg S, Beckett IR, Costa M, et al.; Janelia FlyEM / Cambridge (Jefferis lab) and collaborators -- bioRxiv (preprint), 2025 -- URL not verified
12. Connectome-driven neural inventory of a complete visual system -- Nern A, Loesche F, Takemura S, et al. -- Nature, 2025 -- URL not verified
13. Distributed control circuits across a brain-and-cord connectome -- Bates AS, Phelps JS, et al.; Wilson RI, Lee WCA (author order not re-verified) -- bioRxiv (preprint), 2025, doi:10.1101/2025.07.31.667571 -- URL not verified
14. CAVE: Connectome Annotation Versioning Engine -- Dorkenwald S, Schneider-Mizell CM, Brittain D, et al. -- bioRxiv, 2023, doi:10.1101/2023.07.26.550598 (Nature Methods 2025 publication not verified) -- URL not verified
15. Virtual Fly Brain -- An interactive atlas of the Drosophila nervous system -- Court R, Costa M, Pilgrim C, et al. -- Frontiers in Physiology, 2023 (corrected from Genetics; verifier memory, not search-verified) -- URL not verified
16. NeuronBridge: an intuitive web application for neuronal morphology search across large data sets -- Clements J, Goina C, Hubbard PM, et al. -- BMC Bioinformatics, 2024 -- URL not verified
17. A searchable image resource of Drosophila GAL4 driver expression patterns with single neuron resolution -- Meissner GW et al.; FlyLight Project Team -- eLife, 2023 -- URL not verified
18. A split-GAL4 driver line resource for Drosophila neuron types -- Meissner GW et al.; FlyLight Project Team -- eLife, ~2024-2025 (venue and year not verified) -- URL not verified
19. SLEAP: A deep learning system for multi-animal pose tracking -- Pereira TD, Tabris N, Matsliah A, Turner DM, Li J, Ravindranath S, et al.; Shaevitz JW, Murthy M -- Nature Methods 19(4), 2022, doi:10.1038/s41592-022-01426-1 -- URL not verified
20. Fast and accurate annotation of acoustic signals with deep neural networks -- Steinfath E, Palacios-Muñoz A, Rottschäfer JR, Yuezak D, Clemens J -- eLife 10:e68837, 2021, doi:10.7554/eLife.68837 -- URL not verified
21. Experimental and statistical reevaluation provides no evidence for Drosophila courtship song rhythms -- Stern DL, Clemens J, Coen P, Calhoun AJ, Hogenesch JB, Arthur BJ, Murthy M -- PNAS, 2017 -- URL not verified
22. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience, 2021 -- URL not verified
23. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco DA, Encarnacion-Rivera L, et al.; Seung HS, Murthy M -- eLife, 2020 (verifier memory, not search-verified) -- URL not verified
24. Shared song detector neurons in Drosophila male and female brains drive sex-specific behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology, 2019 (corrected from 2020; verifier memory, not search-verified) -- URL not verified
25. Title not given in verified material (pC1 song and cVA responses in females) -- Zhou et al. -- eLife, 2014 -- URL not verified
26. NatureLM-audio: an Audio-Language Foundation Model for Bioacoustics -- Robinson D, Miron M, Hagiwara M, Pietquin O, et al. (Earth Species Project) -- arXiv preprint / ICLR (final venue not verified), 2024-2025 -- URL not verified
27. BEANS: The Benchmark of Animal Sounds -- Hagiwara M, Hoffman B, Liu JY, Cusimano M, Effenberger F, Zacarian K -- ICASSP, 2023 -- URL not verified
28. Contextual and combinatorial structure in sperm whale vocalisations -- Sharma P, Gero S, Payne R, Gruber DF, Rus D, Torralba A, Andreas J -- Nature Communications, 2024 -- URL not verified
29. Using machine learning to decode animal communication -- Rutz C, Bronstein M, Raskin A, Vernes SC, Zacarian K, Blasi DE -- Science, 2023 -- URL not verified
30. AI and the Doctor Dolittle challenge -- Yovel Y, Rechavi O -- Current Biology, 2023 -- URL not verified
31. Animal Welfare (Sentience) Act 2022 -- UK Parliament -- UK legislation, 2022 -- URL not verified
32. Review of the Evidence of Sentience in Cephalopod Molluscs and Decapod Crustaceans -- Birch J, Burn C, Schnell A, Browning H, Crump A -- LSE Consulting report for DEFRA, 2021 -- URL not verified
33. The New York Declaration on Animal Consciousness -- Andrews K, Birch J, Sebo J, et al. (signatories) -- NYU conference "The Emerging Science of Animal Consciousness", 2024 -- URL not verified
34. Can insects feel pain? A review of the neural and behavioural evidence -- Gibbons M, Crump A, Barrett M, Sarlak S, Birch J, Chittka L -- Advances in Insect Physiology, 2022 -- URL not verified
35. Exploitation of insect vibrational signals reveals a new method of pest management -- Eriksson A, Anfora G, Lucchi A, et al.; Mazzoni V -- PLoS ONE, 2012 -- URL not verified
36. The siren's song: exploitation of female flight tones to passively capture male Aedes aegypti (Diptera: Culicidae) -- Johnson BJ, Ritchie SA -- Journal of Medical Entomology, 2016 -- URL not verified
37. Do not publish -- Lindenmayer D, Scheele B -- Science, 2017 -- URL not verified
