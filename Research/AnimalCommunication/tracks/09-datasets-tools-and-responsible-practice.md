# Track 09 -- Datasets, tools, and responsible practice

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 · live-search audit: confirmed 24, corrected 6, not live-checked 1, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** Round 1 had one researcher, who worked without web access because the session search cap had been reached, and two independent verifiers: one checked source fidelity and the other acted as an adversarial skeptic. Neither verifier had web access, so both checked claims from their own knowledge. In round 2 a live auditor checked each claim against live web search results, with a second opinion reserved for claims the search contradicted. No claim was contradicted (0 of 31), so no second opinion was needed. The auditor's 30-search allowance ran out before the mosquito sound-lure claim could be checked. [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding itself was not directly visible, or the claim was corrected, or it rested on one verifier. [LOW] means not located or unconfirmed, and [CONFLICT] means the checks disagree. This track has 9 [HIGH], 21 [MED], 1 [LOW] and no [CONFLICT] claims. Where a kept claim contains a detail that the live results did not show, such as a version string or a count, the text says so.

## Bottom line

- Every connectome in this track is wiring only. FlyWire, hemibrain and BANC (females) and MANC, the optic lobe and the male CNS (males) show which neurons connect, not which ones are active [HIGH][1][6]; [MED][3][4][7][8]. Song responses come from separate calcium-imaging and manipulation studies [HIGH][15]; [MED][16][17], and no audited source ties them to connectome neuron IDs. Linking the two is the program's main data gap.
- Each sex now has a whole-CNS connectome from a single animal. The male CNS (166,700 neurons, 11,710 types) was published in Cell in September 2026, which round 1 could not confirm. BANC (one female, ~188,000 neurons) is reported as published in Nature in June 2026; its volume and DOI still need confirming [MED][7][8]. In the male-female comparison, dimorphic and sex-specific types sit mainly in higher-order brain centres, and the sensory and motor periphery is largely isomorphic [MED][7].
- Computational work can start in week 1. FlyWire is released through CAVE [HIGH][1]. Hemibrain and MANC are served through neuPrint with a personal token [MED][10]. Virtual Fly Brain and NeuronBridge link EM neurons to driver lines [MED][11][12], SLEAP and DAS handle behaviour and song [MED][20][21], and the Shiu et al. whole-brain model code is public [MED][19]. Read the model's licence, hardware needs and default materialization from its README, because the live audit could not confirm the round-1 details. Wet-lab work depends on obtaining split-GAL4 stocks, distributed through Bloomington [MED][13][14], and starts later.
- Connectome results depend on the version and on the individual animal. Pin and record the materialization [MED][9]. The Shiu repository's default reportedly moved from v630 to v783 [MED][19]. Across two female brains, cell-type connectivity was largely reproducible, but individual connections and some cell counts varied, so one animal's wiring is not the species norm [MED][2].
- Models and AI tools give predictions and categories, not biology or meaning. The Shiu model's predictions were tested for feeding and grooming, and the paper did not validate it for courtship communication [HIGH][18]. NatureLM-audio and BEANS measure classification, detection and captioning [MED][22][23]. The sperm whale coda work shows structure, not meaning [MED][24]. Yovel and Rechavi's standard for two-way communication requires the animal's own signals used across many behavioural contexts [MED][31], which a courtship-only fly exchange cannot meet by itself.
- Insects fall outside the UK Sentience Act [MED][26]. The New York Declaration lists insects among animals with a realistic possibility of conscious experience [HIGH][28], and a systematic review found strong evidence of pain-relevant capacities in adult flies [HIGH][29]. Together these justify a voluntary welfare review for repeated playback and optogenetic protocols. Rutz et al. call for ethical guidelines on playing AI-generated signals to wild animals [MED][30]. The documented uses of signal playback to insects in this track are pest control: vibrational mating disruption in vineyards [HIGH][32] and mosquito sound lures [LOW][33]. Dual-use screening therefore belongs in the program.
- Live search confirmed a source URL for 30 of 31 claims; the mosquito sound-lure paper was not checked. Before external use, confirm the details the live results did not show: dataset version strings and counts (FlyWire datastack and v630/v783, hemibrain v1.2.1, the neuPrint optic-lobe and male-cns labels), the Shiu repository README, the BANC Nature citation, and the exact wording of Rutz et al. and Yovel and Rechavi.

## What the evidence shows

### Connectome datasets (wiring only)

**FlyWire.** The FlyWire whole-brain connectome of one adult female *D. melanogaster* (FAFB EM volume; Dorkenwald et al.) is publicly released through CAVE (datastack "flywire_fafb_public"). It has static materializations v630 (an earlier snapshot, used by Shiu et al.) and v783. Reported size is ~139,000 neurons and ~5x10^7 chemical synapses [HIGH][1]. The live results gave 139,255 proofread neurons, 5x10^7 chemical synapses and 8,453 cell types from one adult female. They did not show the CAVE datastack name or the v630 and v783 materializations, so those version details remain unconfirmed [1].

**Cell typing and variability.** Cross-matching FlyWire to the hemibrain gave about 8,400 annotated cell types. Cell-type-level connectivity was largely reproducible between the two female brains, but individual connections and some cell counts varied. A single connectome should therefore not be treated as the canonical wiring of any communication circuit [MED][2]. The live results settle a round-1 disagreement over the type count: of the 8,453 annotated types, 3,643 had been proposed previously in the hemibrain and 4,581 were new. "About 8,400" is therefore FlyWire's total, not the number of types matched to the hemibrain [2]. The reproducibility finding itself was not visible in the live results; it rests on the preprint title ("quantifies circuit stereotypy") and on round-1 review [2].

**Hemibrain.** The hemibrain connectome (Scheffer et al.; one adult female; reported ~25,000 neurons covering much of the central brain, count not re-verified) is served through neuPrint as "hemibrain" (current version v1.2.1) [MED][3]. The live results confirmed the paper and a dense reconstruction that is freely available online. The neuron count and the version string were not visible [3].

**MANC.** The male adult nerve cord (MANC) connectome reconstructs the complete ventral nerve cord of one male (about 23,000 neurons). It systematically annotates descending, ascending, motor and premotor neurons, including the wing-motor systems used for song [MED][4][5]. The live results describe MANC as the first complete, densely reconstructed nerve cord connectome, annotated with cell types and neurotransmitter predictions. The neuron count and the Marin et al. annotation paper were not directly visible [4][5]. The volume contains no brain, so descending neurons such as pIP10 appear only as their axons in the cord.

**Optic lobe.** A complete connectome of one male optic lobe gave a neuron inventory (tens of thousands of neurons, several hundred cell types). It is served on neuPrint as "optic-lobe" and matched to genetic driver lines [HIGH][6]. The live results identify it as the right optic lobe of a male and confirm the matched driver lines. The neuPrint dataset name and the exact neuron and type counts were not visible [6]. Courtship-relevant visual neurons in it, such as LC10a, are present as wiring only.

**Male CNS.** A complete, fully proofread male CNS connectome (brain plus nerve cord, 166,700 neurons, 11,710 neuron types, annotated for fruitless/doublesex expression) was published in Cell in September 2026 after a 2025 bioRxiv preprint. Comparing it with the female brain gave 8,069 isomorphic, 138 dimorphic, 289 male-specific and 71 female-specific types. Sex-specific and dimorphic neurons are concentrated in higher-order brain centres, and the sensory and motor periphery is largely isomorphic [MED][7]. Round 1 could not confirm the Cell paper named in the program brief. The live search found it on the Cell, ScienceDirect, PubMed and Janelia news pages, published 3 September 2026. The neuPrint "male-cns" dataset label (v0.9 at the preprint release, per round 1) was not visible in the live results [7].

**BANC.** The BANC is the first synapse-resolution connectome to unite the brain and ventral nerve cord in one EM volume, from one adult female *D. melanogaster*. It has approximately 188,000 neurons and 199 million predicted synapses, was proofread by researchers and citizen scientists, and is annotated for cell type, neurotransmitter, hemilineage and cross-dataset identity. The data are available via flywire.ai/CAVE [MED][8]. The live audit replaced round 1's figure of about 160,000 neurons with the ~188,000 in the search summary. The same summary reports a peer-reviewed version in Nature (June 2026); its volume and DOI are unconfirmed [8]. Because the animal is female, BANC has no male song-motor circuitry. The male CNS is its whole-CNS counterpart on the sender side.

### Access, infrastructure and versioning

CAVE (Connectome Annotation Versioning Engine) provides versioned, timestamped "materializations" of continuously proofread segmentations and annotations. Users reach it through the caveclient Python package with an auth token. FlyWire and BANC run on this infrastructure [MED][9]. The live results confirmed the Nature Methods 2025 paper, analysis queries at arbitrary time points, and reproducible analysis while proofreading continues. The caveclient package and the token were not visible [9]. Results can differ between materializations, so every analysis should record the one it used. Round 1 also stated that neuron IDs from v630 do not carry over directly to v783; this was not checked live [LOW].

neuPrint is a web-based connectome analysis service (neuprint.janelia.org) with a Python client (neuprint-python) that serves EM connectomes including hemibrain and MANC. Programmatic access needs a personal token, which you get by logging into the neuPrint web interface (Google sign-in not verified here) [MED][10]. The live results confirmed a web interface, programmer APIs, a neo4j graph backend and Cypher queries. The token procedure, the Python client and the MANC listing were not visible [10]. Round 1 named FlyWire Codex as the no-code browser for FlyWire tables; its sign-in requirements and data licence were not checked [LOW].

### From connectome cell type to genetic handle

Virtual Fly Brain is a free web atlas you can browse without an account. Under the Drosophila Anatomy Ontology it integrates EM connectome neurons, light-microscopy driver-line images and literature-curated neuron types, with cross-dataset queries (Court et al. 2023, Frontiers in Physiology) [MED][11]. The live audit corrected the source's venue field from Genetics to Frontiers in Physiology. The live results describe VFB as integrating connectomic, genetic and transcriptomic data for FAIR reuse; account-free browsing and the ontology integration were not explicitly visible [11].

NeuronBridge (Janelia) is a web service and Python API that matches EM-reconstructed neurons (at least the hemibrain v1.2.1; MANC coverage not verified here) to FlyLight Gen1 MCFO and split-GAL4 light-microscopy images by colour-depth morphology search. Researchers use it to find driver lines for cell types identified in the connectome [MED][12]. The live results confirmed morphology matching between EM and light-microscopy datasets. Dataset coverage and the Python API were not visible [12]. A morphology match nominates a candidate line, and its expression pattern still has to be confirmed before any causal experiment.

Janelia FlyLight released a searchable resource of GAL4 driver expression patterns at single-neuron resolution (MultiColor FlpOut images) for matching neurons to driver lines. A companion split-GAL4 driver-line resource covers many identified cell types, with stocks distributed via the Bloomington Drosophila Stock Center [MED][13][14]. The live results confirmed aligned images of 74,000 adult CNSs, released to bridge EM and light-microscopy identification, and found the split-GAL4 paper as eLife article 98405. Bloomington distribution was not visible [13][14]. Coverage of courtship neurons (P1 subtypes, pIP10, pC2, vpoDN) has to be checked line by line.

### Activity data: neurons recorded responding to song

Pan-neuronal calcium imaging in head-fixed flies found that responses to auditory stimuli, including courtship-song components, are diverse and widespread across the central brain in both sexes, not confined to the canonical AMMC/wedge auditory pathway (recorded activity) [HIGH][15]. The live results add that most of this activity relates to aspects of conspecific courtship song, and that responsive neurons include some that carry other modalities [15]. No audited source links these responses to connectome neuron IDs.

Activating the pC1d/e subset of female pC1 neurons drives a minutes-long persistent internal state. That state modulates several behaviours in the presence of males: receptivity, responses to courtship song, aggression and male-like courtship. EM reconstruction shows strong recurrent connectivity between pC1d/e and Fruitless+ aIPg neurons (causal manipulation plus wiring) [MED][16]. pC2 neurons are tuned to temporal features of one song mode in both sexes and drive sex-specific behaviours (recorded activity plus causal manipulation) [MED][17]. The live audit replaced round 1's description of the state as "mainly aggression-like" with the broader list above, and confirmed the 2019 date of the pC2 paper [16][17]. The persistent state is induced by activation; round 1 had already removed a statement that song evokes persistent pC1 activity. Round 1 also credited pC1 responses to male song and to the pheromone cVA in virgin females to Zhou et al. 2014 (eLife). The live audit did not check that paper, and it is no longer part of the kept claim [LOW].

### Models: predictions to test, not simulated biology

A leaky integrate-and-fire model of the whole FlyWire brain predicted the neurons involved in taste-to-feeding (sugar/water) and mechanosensory grooming pathways. It used only connectivity plus neurotransmitter identity (with no fitted weights). A subset of predictions was confirmed by optogenetics and imaging. The paper did not validate the model for courtship communication (model prediction, partly tested by causal manipulation) [HIGH][18]. The live results confirmed the model type, its inputs, the feeding and grooming scope, and that courtship falls outside that scope; they did not detail the validated subset [18]. Round-1 verifiers added that global parameters came from the literature, so the model is not strictly parameter-free, and one noted that the song-relevant JO-A/B auditory pathway was not tested. Neither point was checked live [LOW].

The philshiu/Drosophila_brain_model repository is a leaky integrate-and-fire model of the whole FlyWire brain. It supports activation (Poisson spiking at a fixed rate) and silencing of neurons by FlyWire ID and outputs spike times and rates. Per the search summary, the repository now uses FlyWire public release v783 connectivity by default, with the v630 data (used in the paper) kept in data/archive/ for reproducing the figures [MED][19]. This reverses round 1's framing, in which v630 was primary and v783 an alternative. The summary may partly reflect forks such as rgourley/fly-brain, so read the repository README before relying on either default [19]. Round 1 also described the code as MIT-licensed, written for the Brian 2 simulator, running on CPU, installing in about 10 minutes, writing several GB of raw output, and archived at doi 10.17617/3.CZODIW. None of these details was visible in the live results, and they are no longer part of the audited claim [LOW].

### Behaviour and signal tools

SLEAP is an open-source deep-learning system for multi-animal pose tracking. It supports bottom-up and top-down models, trains from relatively few labelled frames, and was benchmarked on datasets that include interacting fruit fly pairs (courtship) and mice [MED][20]. The live results confirmed tracking of any number of animals at over 800 frames per second, and the "flies13" dataset of 30 videos of courting male-female pairs. The bottom-up/top-down detail and the mouse benchmarks were not shown explicitly [20].

DAS (Deep Audio Segmenter) is an open-source deep network that annotates acoustic signals, including fly pulse and sine song, bird song and rodent vocalisations. It is accurate and has latency low enough for closed-loop experiments [MED][21]. The live results state high accuracy, low latency, suitability for closed-loop use, and tests on insects, birds and mammals [21]. DAS labels segments of signal; it does not decode meaning.

### Cross-species AI bioacoustics

Earth Species Project released NatureLM-audio, an audio-language foundation model for bioacoustics, with open weights. It is evaluated on the BEANS-Zero benchmark for zero-shot tasks such as species classification, call-type detection and captioning. None of these tasks show semantic "translation" [MED][22]. The live results confirmed an ICLR 2025 model with a BEATs encoder and a Llama-3.1-8B backbone, state-of-the-art zero-shot results on BEANS-Zero, and weights released on Hugging Face. The "no translation" point is an interpretation consistent with the listed tasks [22]. The licence terms of the weights, including any non-commercial restriction, were not checked.

BEANS (the Benchmark of Animal Sounds) standardises evaluation of ML models on public bioacoustic datasets, covering classification and detection tasks across birds, mammals, anurans and insects [MED][23]. The live results confirmed classification and detection tasks over 12 public datasets; the breakdown by taxon was not shown explicitly [23].

Analysis of a large Dominica Sperm Whale Project coda dataset found contextual and combinatorial structure in sperm whale codas, which the authors called a "sperm whale phonetic alphabet" (rhythm, tempo, "rubato", "ornamentation"). The work shows structure, not meaning (acoustic analysis) [MED][24]. The live results confirmed the phonetic alphabet, the combinatorial structure and the context-dependent modulation of codas; the four feature names were not visible [24].

### Reproducibility lessons

A careful experimental and statistical re-evaluation found no evidence for the reported ~55-s rhythm in the inter-pulse interval of *D. melanogaster* courtship song. Earlier positive reports were attributed to data-analysis artefacts. The original authors dispute this (behavioural reanalysis) [HIGH][25]. The live results state that manual analysis, automated analysis and new datasets gave no evidence for song rhythms or for genotype differences in periodicity, addressing reports from 1980-1992. The ~55-s value and the original authors' dispute were not visible. A 2021 correction to the Supporting Information exists and should be cited with the paper [25]. For this program, the lesson is that automated analysis can create apparent structure, and single-lab findings about signal structure need independent replication.

### Welfare, law and ethics frameworks

The UK Animal Welfare (Sentience) Act 2022 recognises all vertebrates, cephalopod molluscs and decapod crustaceans as sentient for policy purposes and creates an Animal Sentience Committee. Insects are not included (legislation) [MED][26]. The live results came from secondary sources (Eurogroup for Animals, LSE), which confirm the extension of legal recognition to decapods and cephalopods. The committee, the coverage of all vertebrates and the exclusion of insects were not visible, and no legislation.gov.uk page appeared [26]. One round-1 verifier added that ASPA 1986 and EU Directive 2010/63/EU also exclude insects; this was not checked live [LOW].

The DEFRA-commissioned LSE review (Birch et al. 2021) applied eight sentience criteria. It found very strong evidence in octopods, strong evidence in true crabs, and substantial evidence in other cephalopod and decapod groups. Evidence was weaker for some groups, such as shrimps and nautiloids, mainly for lack of research. It recommended treating all cephalopod molluscs and decapod crustaceans as sentient under UK animal welfare law [MED][27]. The live results confirmed the eight criteria, the more than 300 studies reviewed and the recommendation. The graded evidence levels were not visible [27].

The New York Declaration on Animal Consciousness states strong scientific support for conscious experience in mammals and birds. It says there is at least a realistic possibility of conscious experience in all vertebrates and many invertebrates, including at minimum cephalopods, decapod crustaceans and insects, and that it is irresponsible to ignore that possibility in welfare decisions [HIGH][28]. The text quoted in the live results names fruit flies as an example; the "irresponsible to ignore" wording was not quoted [28]. The Declaration was announced on 19 April 2024 with more than 500 signatories. It is a signed expert statement, neither law nor peer-reviewed.

A systematic review applying eight pain-related criteria across insect orders found strong evidence of pain-relevant capacities in adult Diptera (flies) and Blattodea (cockroaches), and weaker or absent evidence in many other orders, largely because they have been studied less [HIGH][29]. The live results show that the review applied Birch et al.'s eight criteria to more than 350 studies across six named insect orders, so its conclusions cover those six orders, not insects broadly [29].

A Science Policy Forum argued that machine learning could help decode animal communication but warned that playing back AI-generated signals to wild animals risks disrupting behaviour and animal cultures. It called for ethical guidelines before any such interactive experiments [MED][30]. The live results confirmed the citation and the paper's view that decoding is "coming within reach" with AI. They did not directly show the playback warnings or the call for guidelines [30]. Both round-1 verifiers judged that "before any such interactive experiments" may overstate the paper; "caution about interactive playback" is the safer reading until the text is checked.

Yovel and Rechavi frame two-way animal communication as "the Doctor Dolittle challenge" and name three main obstacles. Per the search summary, meeting the challenge requires an AI model to use the animal's own signals, without the animal having to learn new signals, and to use them across many behavioural contexts, not only courtship or threat [MED][31]. The live audit replaced round 1's paraphrase of their requirements ("context, interactive playback and behavioural validation"), which did not match the criteria in the results. Round 1's statement that animals may have no language-like semantics to translate was not visible in the live results [31].

### Dual use and data governance

Playing back vibrational disturbance signals through vineyard trellis wires disrupted mating communication in the leafhopper *Scaphoideus titanus*, the vector of grapevine flavescence dorée. This led to field trials of "vibrational mating disruption" (behavioural, field) [HIGH][32]. According to the live results, disruptive vibrations masked mate-recognition signals and cut mating to 9% in semi-field conditions and 4% in a mature vineyard; the 2012 paper already includes vineyard-scale testing [32].

Sound lures that mimic female *Aedes aegypti* flight tones can passively capture male mosquitoes in traps, a basis for acoustic surveillance and control of disease vectors (behavioural) [LOW][33]. The live audit ran out of searches before checking this claim.

Scientists warned that publishing precise location data for rare species had enabled poachers and collectors. They urged withholding or obscuring such data [HIGH][34]. The live results add that poachers trawl papers for location information, and that the authors proposed withholding information or buffering spatial data according to risk [34].

### Starter sequence for the first 30 days

| Week | Task | Confidence | Source # |
|---|---|---|---|
| 1 | Get neuPrint and CAVE tokens; export connectivity for named communication types from FlyWire v783 and the male CNS; log dataset versions. FlyWire Codex sign-in and licences unchecked. | MED (tokens, versioning); LOW (Codex) | 7, 9, 10 |
| 2 | Map EM types to candidate split-GAL4 lines (NeuronBridge, VFB, FlyLight); price stock orders. | MED | 11-14 |
| 3 | Set up SLEAP pose and DAS song pipelines; locate public Murthy- and Stern-lab song data (locations unverified). | MED (tools); LOW (data) | 20, 21 |
| 4 | Install the Shiu model, confirm its default materialization and licence from the README, reproduce one published feeding or grooming prediction, then add a song-input protocol. | MED (code); HIGH (published scope) | 18, 19 |

## Results table

| Resource or finding | Species / sex | What it provides or shows | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| FlyWire (v630 / v783) | *D. melanogaster*, 1 female | Whole-brain wiring, ~139k neurons (139,255 proofread), via CAVE; version details unconfirmed | Wiring only | HIGH | 1 |
| FlyWire vs hemibrain typing | 2 females | 8,453 types (3,643 previously proposed in hemibrain, 4,581 new); type-level connectivity largely reproducible, single connections vary | Wiring comparison | MED | 2 |
| Hemibrain v1.2.1 | 1 female | ~25k central-brain neurons (count and version not seen live) | Wiring only | MED | 3 |
| MANC | 1 male | ~23k VNC neurons; descending, ascending, motor, premotor and wing-motor annotation | Wiring only | MED | 4, 5 |
| Optic lobe | 1 male | Complete right optic lobe; neuron-type catalogue matched to driver lines | Wiring only | HIGH | 6 |
| Male CNS | 1 male | Brain + nerve cord, 166,700 neurons, 11,710 types; fru/dsx annotation; 8,069 isomorphic, 138 dimorphic, 289 male-specific, 71 female-specific types | Wiring only (Cell, Sept 2026) | MED | 7 |
| BANC | 1 female | Brain + VNC in one volume, ~188k neurons, 199M predicted synapses | Wiring only (Nature publication reported) | MED | 8 |
| CAVE / caveclient; neuPrint | -- | Versioned, token-based query access | Tool | MED | 9, 10 |
| Virtual Fly Brain; NeuronBridge; FlyLight | -- | Link EM types to driver lines; split-GAL4 stocks | Tool / resource | MED | 11-14 |
| Auditory activity survey | Both sexes | Diverse, widespread song responses beyond AMMC/wedge | Recorded activity | HIGH | 15 |
| pC1d/e | Females | Activation drives a minutes-long state modulating receptivity, song responses, aggression and male-like courtship; recurrent pC1d/e-aIPg wiring | Causal manipulation + wiring | MED | 16 |
| pC2 | Both sexes | Tuned to temporal features of one song mode; drives sex-specific behaviours | Recorded activity + causal manipulation | MED | 17 |
| Shiu model results | FlyWire female | Feeding and grooming predictions, subset confirmed; not validated for courtship | Model prediction + partial causal test | HIGH | 18 |
| Shiu model code | FlyWire female | LIF model; activate or silence by FlyWire ID; v783 default and v630 archived per search summary | Tool | MED | 19 |
| SLEAP; DAS | Flies, mice; insects, birds, mammals | Multi-animal pose tracking; low-latency song annotation | Tool | MED | 20, 21 |
| NatureLM-audio; BEANS | Many taxa | Zero-shot classification, detection, captioning; standardised benchmarks | Tool | MED | 22, 23 |
| Sperm whale codas | *Physeter macrocephalus* | Combinatorial, contextual structure | Acoustic analysis | MED | 24 |
| Song-rhythm re-evaluation | Males | No evidence for ~55-s rhythm; disputed | Behavioural reanalysis | HIGH | 25 |
| Vibrational mating disruption | *S. titanus* | Trellis-wire vibrations cut mating to 9% (semi-field) and 4% (vineyard) | Behavioural, field | HIGH | 32 |
| Sound lures | *Ae. aegypti* | Female flight-tone mimics trap males | Behavioural | LOW | 33 |

## Why this matters for two-way communication with animals

- In the fly, both ends of a courtship exchange can be looked up at synapse level in both sexes, and each sex now has a whole-CNS connectome [HIGH][1]; [MED][7][8]. Some receiver neurons also have recorded song responses [HIGH][15]; [MED][17]. An "exchange" can therefore be defined operationally as male signal, then female neural response, then female motor reply, and each link checked separately against wiring, activity and manipulation data.
- The male-female comparison places dimorphic and sex-specific types mainly in higher-order centres and finds the sensory and motor periphery largely isomorphic [MED][7]. For this program, that points the search for sex differences in signal handling toward central circuits rather than sensory detection.
- The tools for a contingent playback test exist. DAS gives low-latency song annotation and SLEAP gives multi-animal pose, so playback can be made to depend on the female's own behaviour [MED][20][21]. Yovel and Rechavi's requirements (the animal's own signals, no new signals for the animal to learn, many behavioural contexts) set the bar for calling a result two-way communication [MED][31]. A fly courtship exchange can use the animal's own signals but covers a single context, so it is a testbed for methods rather than a demonstration against that bar.
- Fly song gives ground truth for AI decoders. Pulse versus sine song has known neural correlates (pC2 is tuned to temporal features of one song mode [MED][17]), so decoders headed for whales or birds can be scored on fly data first. Current tools classify and detect signals; they do not recover meaning [MED][22][23][24].
- The documented large-scale cases of "talking back" to insects are disruption and luring [HIGH][32]; [LOW][33]. Any interactive signal system the program builds for a pest species will have a control use and needs non-target assessment.
- Closed-loop "conversation" protocols run many trials on many flies. That is where a precautionary welfare review has practical effect: animal numbers, stimulus intensity and stop rules [HIGH][28][29].
- Version pinning and checks across several datasets decide whether a "communication circuit" holds up. A pathway present in one animal and absent in another is a hypothesis, not a circuit [MED][2][9].

## Open questions

- Which neuPrint release corresponds to the published male CNS paper? Round 1 recorded "male-cns" v0.9 at the preprint release; does a later release rename cell types or change IDs?
- What are the volume and DOI of the BANC Nature paper, and which neuron count (about 160,000 in round 1, ~188,000 in the live summary) applies to which data release?
- Which materialization does the canonical Shiu repository use by default, as distinct from forks such as rgourley/fly-brain, and under what licence?
- How variable are pC1, pC2, vpoDN, vpoEN, pIP10 and their main partners across FlyWire, hemibrain, BANC, MANC and the male CNS? Which connections are stable enough to model an exchange, and which of these types does the male CNS classify as isomorphic, dimorphic or sex-specific?
- Which public imaging datasets resolve song responses finely enough to register to FlyWire cell types? Where are they hosted (DANDI/NWB or lab servers)?
- How accurate are the predicted neurotransmitter labels (Eckstein et al. 2024) in communication circuits, and how much do sign errors change model output?
- This track did not cover FANC (the female nerve cord connectome) or the transforms that register FAFB, FANC, BANC, MANC, hemibrain and the male CNS to each other. Both are needed to compare VNC-side song reception and receptivity between the sexes; the VNC-alignment lead below is a starting point.
- What are the licence and citation terms for FlyWire, the neuPrint datasets, BANC, ESP model weights and CETI data, especially for commercial or pest-control use?
- Which behavioural measures of distress or avoidance are valid in flies? What standard should apply to repeated closed-loop playback or optogenetics?
- Can a pipeline from captive to wild animals, with stop rules, satisfy the concerns of Rutz et al. [30] for AI-synthesised signals?
- Can the fly serve as a testbed that separates "signal category" from "meaning" for decoders used on other species? How well do other benchmarks (BirdSet, Perch) and behaviour tools (FlyTracker, JAABA, DeepLabCut) handle near-field insect signals?
- Can any fly protocol extend beyond courtship to other behavioural contexts, as Yovel and Rechavi's requirements demand [31]?

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| Cross-connectome communication circuit atlas | The song sender circuit (P1, pIP10, VNC song neurons) and receiver circuit (JO, AMMC/wedge, pC2/pC1, vpoEN/vpoDN) are conserved at cell-type level across connectomes; individual variation sits mainly in weak connections. | Pull named types and their 2-hop partners from FlyWire, hemibrain, BANC, MANC and the male CNS; cross-match with navis/fafbseg; carry over the male CNS isomorphic/dimorphic/sex-specific labels [7]; classify edges as conserved or variable using synapse-count thresholds calibrated on the FlyWire-hemibrain comparison [2]; publish a versioned table. | Computational; start now | Get neuPrint and CAVE tokens; export pC1, pC2, vpoDN, vpoEN and pIP10 connectivity from FlyWire v783 and the male CNS; record versions. |
| In-silico female: whole-brain model response to simulated song | Driving Johnston's organ input with song-like patterns in the Shiu model recruits known song-responsive neurons (pC2, pC1, vpoEN) more than matched control stimuli do. | Run the model on v783 after confirming the repository default [19]; stimulate JO subtypes with pulse- and sine-like rate patterns; rank downstream neurons; score against published imaging and pC2 tuning [15][17]. The paper did not validate the model for courtship communication [18], so failures are informative. | Computational; start now | Install from the repository, reproduce one published feeding or grooming result, then add JO stimulation. |
| Minimal fly "conversation" rig with contingent playback | Female locomotion and receptivity change more when synthetic song depends on her behaviour than when matched song plays independently of it. | DAS and SLEAP trigger pulse or sine playback from female speed, distance or orientation [20][21]; yoked controls, blinded scoring, preregistration; later, imaging of pC1 or vpoEN through split-GAL4 lines [13][14]. | Wet lab; months | Pilot playback only, using recorded public song; write the invertebrate welfare protocol before running any flies [28][29]. |
| Ground-truth benchmark for AI "decoders" | Unsupervised methods will recover circuit-level song categories (pulse vs sine, feedback-linked modes) but not their behavioural meaning without contingency tests. | Apply NatureLM-audio/BEANS-style embeddings and clustering to public fly song and courtship data [22][23]; score against circuit ground truth and behaviour-contingent effects; release for Tracks 07 and 08. | Computational; start now | Build a labelled fly-song evaluation set from public DAS training data; run baseline embeddings. |
| Song-response data audit and registration (derived from open questions) | Some public imaging data resolve song responses finely enough to register to FlyWire cell types. | Audit data-availability statements of [15]-[17]; convert usable data to NWB; register to FlyWire types; flag which neurons have wiring only and which have activity. | Computational; months, depends on data access | List candidate datasets with their hosting and licence status; contact labs whose data are not deposited. |
| Program responsible-practice charter and dual-use review | A short published charter reduces overclaiming and welfare risk without slowing the science. | Draft from [27]-[31] and [34] plus ASAB/ABS guidelines (unverified); apply to every project, with non-target assessment for pest uses [32][33]. | Start now; no lab needed | Week 1: circulate the guardrails below for team sign-off. |
| Species-specific acoustic or vibrational lure for a pest drosophilid | Knowledge of song feature detection in *D. melanogaster* can guide species-specific playback that attracts, or disrupts courtship in, a pest such as *D. suzukii* without non-target effects. | Characterise the target species' acoustic and vibrational signals; test synthetic variants in the lab, then in semi-field cages, measuring non-target effects; use the leafhopper and mosquito precedents as design references [32][33]. | Wet lab; years | Audit the pest's courtship signalling first; several drosophilids rely less on airborne song, so the premise may fail. |

Proposed charter guardrails (the researcher's synthesis; not verified as a set) [LOW]:
1. Insect welfare: minimise animal numbers, limit aversive stimulation, set humane endpoints, give animals a way to opt out.
2. Playback: pilot in captivity; independent review before any wild broadcast of AI-synthesised signals; amplitude and duration limits, disturbance monitoring, stop rules.
3. Claims: label evidence types; never call classification "translation"; "conversation" claims require contingent, controlled, blinded, preregistered tests.
4. Data: FAIR with versioned IDs; obscure sensitive locations; respect host-nation and Indigenous data rights and permits.
5. Dual use: non-target assessment for lures and disruption signals; no open release of signal generators for protected species or pollinators.
6. Pitfalls: Clever-Hans effects; wiring treated as activity; model output treated as biology; artefactual rhythms; one connectome treated as the species norm.

## Leads needing confirmation

**Dataset versions and publication details.** The neuPrint labels and versions for male-cns (v0.9 at the preprint release, per round 1) and optic-lobe; the FlyWire CAVE datastack name and the v630/v783 materializations; hemibrain v1.2.1; the BANC Nature volume and DOI. All are unconfirmed details inside kept claims [LOW].

**Round-1 details outside the audited ledger.** These came from the researcher or from one verifier, were not checked live, and are all [LOW]:
- The hemibrain leaves out the optic lobes and most of the SEZ/GNG, which cuts off many descending and gustatory pathways relevant to courtship.
- The male CNS reportedly shares its source EM volume with the optic-lobe dataset.
- Parent GAL4 lines are split between Bloomington and VDRC.
- A working threshold recalled from Schlegel et al.: connections above about 10 synapses, or above about 1% of a cell's input, are likely to be conserved.
- Most MANC premotor and song-motor annotation sits in companion papers (Cheong et al. 2024, eLife; Lillvis et al., venue disputed in round 1). The live search surfaced PMC11452343, "Activity of nested neural circuits drives different courtship songs in Drosophila", which may be the published form of the Lillvis preprint "Nested neural circuits generate distinct acoustic signals during Drosophila courtship". Check the title and venue.

**Communication neurons to query first.** This list comes from the researcher's recall. pC2 tuning and pC1d/e function now have [MED] support [16][17]; the other entries remain [LOW].

| Neuron / cell type | Role (as recalled unless cited) | Sex | Evidence type |
|---|---|---|---|
| pIP10 | Descending neuron; activation drives song | Male | Causal manipulation (recalled) |
| P1 (male pC1 cluster) | Arousal and decision; gates song and pursuit | Male | Recorded activity + causal manipulation (recalled) |
| pC2l / pC2m | Tuned to temporal features of one song mode; drive sex-specific behaviours [17] | Both | Recorded activity + causal manipulation |
| pC1d/e | Activation drives a persistent state; recurrent wiring with aIPg [16] | Female | Causal manipulation + wiring |
| vpoEN -> vpoDN | Song-responsive input to the descending neuron for vaginal plate opening (the female's motor "reply") | Female | Recorded activity + causal manipulation (recalled) |
| JO-A / JO-B; AMMC-B1 | Antennal detection of near-field song; early central auditory tuning | Both | Recorded activity (recalled) |
| TN1A, dPR1 | VNC neurons patterning sine and pulse song | Male | Causal manipulation + wiring (recalled) |
| LC10a | Visual tracking of the female, gated by P1 | Male | Recorded activity (recalled) |
| ppk23+ foreleg neurons; Or67d ORNs | Contact pheromone and cVA detection | Both | Recorded activity / causal manipulation (recalled) |

**Named but unchecked.** FlyWire Codex; flyvis (Lappalainen et al. 2024); NeuroMechFly v2/FlyGym and flybody; FANC; Brezovec et al. 2024 imaging; Wang et al. 2021 (vpoDN/vpoEN); Zhou et al. 2014 (pC1 song and cVA responses); where the public Murthy- and Stern-lab song data are hosted; the ~24 GB GPU needed for NatureLM-audio and the licence of its weights; the CETI coda annotations released with [24], whose raw data are reportedly not open; whether the US Animal Welfare Act excludes insects; the content of the ASAB/ABS playback guidance. All [LOW].

**Hype checks (recalled).** DolphinGemma (2025) and the 2023 humpback "Twain" exchange (McCowan et al., PeerJ) are pattern generation and a single call-matching episode, not demonstrated semantic conversation. The mosquito "harmonic convergence" findings are contested. Claims of a "digital fly" built from connectome models overstate what those models were validated for [18]. All [LOW].

## New leads from live search (2025-2026)

The live auditor found these while checking claims. They were not independently verified.

- [MED] Male CNS connectome in Cell (Berg S, et al., 2026). A fully proofread male CNS connectome (166,700 neurons, 11,710 types) was published on 3 Sept 2026. The male-female comparison gave 8,069 isomorphic, 138 dimorphic, 289 male-specific and 71 female-specific types; sex-specific and dimorphic neurons are concentrated in higher-order centres, and male-specific connections form hotspots. This overlaps the kept male CNS claim [7]; the hotspot finding is new. It is the first peer-reviewed connectome containing both the male courtship decision circuits and the nerve-cord song motor circuits in one animal. https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6
- [MED] "Uncovering Sex Differences in the Drosophila Ventral Nerve Cord Through Connectome Alignment" (authors and journal not shown in search results; PMC, 2025-2026). Aligning male and female VNC connectomes places sexually dimorphic circuitry mainly in the abdominal neuromere and the male wing tectulum, which controls courtship song. It predicts a new song cell type, IN03B024, that gets excitation from vMS12 and strongly inhibits the pulse-song neurons pMP2 and dPR1. This would add a connectome-predicted feedback node to the pulse-song motor circuit, a candidate target for song-perturbation or playback experiments. https://pmc.ncbi.nlm.nih.gov/articles/PMC13307954/
- [MED] "Whole-Brain Connectomic Graph Model Enables Whole-Body Locomotion Control in Fruit Fly" (arXiv preprint 2602.17997, 2026; authors not shown). A whole-brain connectomic graph model was coupled to whole-body locomotion control of a simulated fly. It extends connectome-only brain models of the Shiu type to closed-loop embodied behaviour, a step toward simulating signalling behaviours such as song and wing display. https://arxiv.org/pdf/2602.17997
- [MED] "State of Brain Emulation Report 2025" (arXiv preprint 2510.15745, 2025; authors not shown). A survey of brain emulation, including connectome-based whole-brain fly models; useful for judging how much the program can expect from fly brain models. https://arxiv.org/pdf/2510.15745
- [LOW] Manzi et al., "Flexible self-protection as evidence of pain-like states in house crickets" (2026; PDF hosted by invertbeacon.com, venue not shown). Presents flexible self-protective behaviour in house crickets as evidence of pain-like states, which would extend the evidence in [29] beyond Diptera and Blattodea. https://invertbeacon.com/wp-content/uploads/2026/05/Manzi-et-al.-Flexible-self-protection-as-evidence-of-pain-like-states-in-house-crickets.pdf
- [LOW] "Scientific Declaration on Insect Sentience and Welfare" (November 2023; signatory scientists, distributed by Eurogroup for Animals). Calls for welfare consideration of insects; an insect-specific statement that sits alongside the New York Declaration [28], relevant because the UK Sentience Act does not cover insects [26]. https://www.eurogroupforanimals.org/files/eurogroupforanimals/2024-06/2023_11_efa_scientific%20declaration%20on%20insect%20sentience%20and%20welfare_scientific%20statement_eng.pdf

## Claims dropped in verification

No claims were dropped in either round; all 31 were kept.

Round-1 narrowing that still applies:
- FlyWire: the framing of v783 as "the reference materialization" was dropped; v630 and v783 are both static public releases. Live search confirmed the dataset but not these version details.
- Hemibrain: the neuron count is flagged as not re-verified, and the neuPrint version v1.2.1 was added. Live search showed neither.
- neuPrint: Google sign-in was dropped as unverified; token retrieval through the web interface was kept.
- NeuronBridge: MANC coverage was dropped as unverified.
- pC1/pC2: a statement that song evokes persistent pC1 activity was removed, because the persistent state is induced by activating pC1d/e. The pC2 paper's date was corrected to 2019, which live search confirmed.
- LSE review: "strong evidence in octopods" was replaced by the graded findings (very strong for octopods, strong for true crabs). Live search confirmed the review but not the grades.
- Rutz et al.: both verifiers flagged "before any such interactive experiments" as possibly overstating the paper. Live search neither confirmed nor refuted the wording.

Kept in corrected form after the live audit:
- Male CNS: the Cell paper that round 1 could not verify was found (published 3 Sept 2026), and the claim now carries its neuron, type and dimorphism figures.
- BANC: about 160,000 neurons became ~188,000 neurons and 199 million predicted synapses. A Nature publication (June 2026) is reported but its volume and DOI are unconfirmed; the author order Bates, Phelps, Kim was confirmed.
- Shiu repository: the default materialization is reversed (v783 default, v630 archived, per the search summary). The MIT licence, Brian 2, CPU operation, install time, output size and archive DOI are no longer part of the claim.
- pC1d/e: "mainly aggression-like" was replaced by several behaviours (receptivity, song responses, aggression, male-like courtship). Zhou et al. 2014 is no longer part of the claim.
- Yovel and Rechavi: their requirements now read as the animal's own signals, no new signals to learn, and many behavioural contexts. The earlier paraphrase and the statement about animals lacking language-like semantics were removed.
- Virtual Fly Brain: the source's venue field was corrected from Genetics to Frontiers in Physiology, matching the claim text.

## Sources

1. Neuronal wiring diagram of an adult brain -- Dorkenwald S, et al.; FlyWire Consortium; Seung HS, Murthy M -- Nature, 2024; doi:10.1038/s41586-024-07558-y (PubMed 37425937) -- https://www.nature.com/articles/s41586-024-07558-y
2. Whole-brain annotation and multi-connectome cell typing of Drosophila -- Schlegel P, Yin Y, Bates AS, et al.; Jefferis GSXE -- Nature 634(8032):139-152, 2024; doi:10.1038/s41586-024-07686-5 (preprint title included "quantifies circuit stereotypy") -- https://www.nature.com/articles/s41586-024-07686-5
3. A connectome and analysis of the adult Drosophila central brain -- Scheffer LK, Xu CS, Januszewski M, et al. -- eLife 9:e57443, 2020; doi:10.7554/eLife.57443 -- https://elifesciences.org/articles/57443
4. A Connectome of the Male Drosophila Ventral Nerve Cord -- Takemura S, et al. -- eLife, 2024 (reviewed preprint 97769); bioRxiv doi:10.1101/2023.06.05.543757 -- https://elifesciences.org/reviewed-preprints/97769
5. Systematic annotation of a complete adult male Drosophila nerve cord connectome reveals principles of functional organisation -- Marin EC, et al. -- eLife, 2024 (not visible in live results) -- URL not verified
6. Connectome-driven neural inventory of a complete visual system -- Nern A, Loesche F, Takemura S, et al. -- Nature 641(8065):1225-1237, 2025 (online 26 Mar 2025); doi:10.1038/s41586-025-08746-0 -- https://www.nature.com/articles/s41586-025-08746-0
7. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Berg S, et al. -- Cell, 2026 (published 3 Sept 2026); doi:10.1016/j.cell.2026.08.015 (PubMed 42691995). Preprint: "Sexual dimorphism in the complete connectome of the Drosophila male central nervous system", bioRxiv 2025, doi:10.1101/2025.10.09.680999 -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6
8. Distributed control circuits across a brain-and-cord connectome -- Bates AS, Phelps JS, Kim M, Yang HH, et al.; Murthy M, Drugowitsch J, Wilson RI, Lee WCA -- bioRxiv (preprint), 2025, doi:10.1101/2025.07.31.667571; peer-reviewed version reported in Nature, June 2026 (PubMed 42259917), volume and DOI unconfirmed -- https://pubmed.ncbi.nlm.nih.gov/42259917/
9. CAVE: Connectome Annotation Versioning Engine -- Dorkenwald S, Schneider-Mizell CM, Brittain D, et al. -- Nature Methods, 2025 (May issue; epub 9 Apr 2025); doi:10.1038/s41592-024-02426-z; preprint bioRxiv doi:10.1101/2023.07.26.550598 -- https://www.nature.com/articles/s41592-024-02426-z
10. neuPrint: An open access tool for EM connectomics -- Plaza SM, Clements J, Dolafi T, Umayam L, Neubarth NN, Scheffer LK, Berg S -- Frontiers in Neuroinformatics, 2022; doi:10.3389/fninf.2022.896292 -- https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2022.896292/full
11. Virtual Fly Brain - An interactive atlas of the Drosophila nervous system -- Court R, Costa M, Pilgrim C, et al. -- Frontiers in Physiology, 2023 (published 26 Jan 2023); doi:10.3389/fphys.2023.1076533 -- https://pubmed.ncbi.nlm.nih.gov/36776967/
12. NeuronBridge: an intuitive web application for neuronal morphology search across large data sets -- Clements J, Goina C, Hubbard PM, et al. -- BMC Bioinformatics 25:114, 2024; doi:10.1186/s12859-024-05732-7 -- https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05732-7
13. A searchable image resource of Drosophila GAL4 driver expression patterns with single neuron resolution -- Meissner GW, et al.; FlyLight Project Team -- eLife, 2023; doi:10.7554/eLife.80660 -- https://elifesciences.org/articles/80660
14. A split-GAL4 driver line resource for Drosophila neuron types -- Meissner GW, et al.; FlyLight Project Team -- eLife, article 98405 (year not shown in live results) -- https://elifesciences.org/articles/98405
15. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience 24(1):93-104, 2021 -- https://www.nature.com/articles/s41593-020-00743-y
16. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco DA, Encarnacion-Rivera L, et al.; Murthy M -- eLife, 2020 (article 59502) -- https://elifesciences.org/articles/59502
17. Shared song detector neurons in Drosophila male and female brains drive sex-specific behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology, 2019; doi:10.1016/j.cub.2019.08.008 -- URL not verified
18. A Drosophila computational brain model reveals sensorimotor processing -- Shiu PK, Sterne GR, Spiller N, et al.; Scott K -- Nature 634(8032):210-219, 2024; doi:10.1038/s41586-024-07763-9 -- https://www.nature.com/articles/s41586-024-07763-9
19. Drosophila_brain_model (GitHub code accompanying Shiu et al., Nature 2024) -- Shiu PK, et al. -- GitHub, 2024 -- https://github.com/philshiu/Drosophila_brain_model
20. SLEAP: A deep learning system for multi-animal pose tracking -- Pereira TD, et al.; Murthy M -- Nature Methods 19(4), 2022; doi:10.1038/s41592-022-01426-1 -- https://www.nature.com/articles/s41592-022-01426-1
21. Fast and accurate annotation of acoustic signals with deep neural networks -- Steinfath E, Palacios-Munoz A, Rottschaefer JR, Yuezak D, Clemens J -- eLife 10:e68837, 2021; doi:10.7554/eLife.68837 -- https://elifesciences.org/articles/68837
22. NatureLM-audio: an Audio-Language Foundation Model for Bioacoustics -- Robinson D, Miron M, Hagiwara M, Pietquin O, et al. (Earth Species Project) -- arXiv:2411.07186, 2024; presented at ICLR 2025; weights at https://huggingface.co/EarthSpeciesProject/NatureLM-audio -- https://arxiv.org/pdf/2411.07186
23. BEANS: The Benchmark of Animal Sounds -- Hagiwara M, Hoffman B, Liu JY, Cusimano M, Effenberger F, Zacarian K -- ICASSP 2023, pp. 1-5; arXiv:2210.12300 -- https://arxiv.org/pdf/2210.12300
24. Contextual and combinatorial structure in sperm whale vocalisations -- Sharma P, Gero S, Payne R, Gruber DF, Rus D, Torralba A, Andreas J -- Nature Communications 15, 2024 (published 7 May 2024); doi:10.1038/s41467-024-47221-8 -- https://www.nature.com/articles/s41467-024-47221-8
25. Experimental and statistical reevaluation provides no evidence for Drosophila courtship song rhythms -- Stern DL, Clemens J, Coen P, Calhoun AJ, Hogenesch JB, Arthur BJ, Murthy M -- PNAS, 2017 (online 29 Aug 2017); doi:10.1073/pnas.1707471114; Correction to Supporting Information, PNAS 2021, doi:10.1073/pnas.2100258118 -- https://www.pnas.org/doi/full/10.1073/pnas.1707471114
26. Animal Welfare (Sentience) Act 2022 -- UK Parliament -- UK legislation, 2022 (URL is a secondary report by Eurogroup for Animals; no legislation.gov.uk page appeared in live search) -- https://www.eurogroupforanimals.org/news/uk-sentience-bill-passes-final-stages-recognise-decapod-and-cephalopod-sentience-law
27. Review of the Evidence of Sentience in Cephalopod Molluscs and Decapod Crustaceans -- Birch J, Burn C, Schnell A, Browning H, Crump A -- LSE Consulting report for DEFRA, 2021 -- https://www.lse.ac.uk/business/consulting/reports/review-of-the-evidence-of-sentiences-in-cephalopod-molluscs-and-decapod-crustaceans
28. The New York Declaration on Animal Consciousness -- Andrews K, Birch J, Sebo J, et al. (more than 500 signatories) -- announced 19 April 2024 at "The Emerging Science of Animal Consciousness" conference, NYU, 2024 -- https://sites.google.com/nyu.edu/nydeclaration/declaration
29. Can insects feel pain? A review of the neural and behavioural evidence -- Gibbons M, Crump A, Barrett M, Sarlak S, Birch J, Chittka L -- Advances in Insect Physiology 63:155-229, 2022 -- https://www.sciencedirect.com/science/chapter/bookseries/abs/pii/S0065280622000170
30. Using machine learning to decode animal communication -- Rutz C, Bronstein M, Raskin A, Vernes SC, Zacarian K, Blasi DE -- Science 381(6654):152-155, 2023 (14 July 2023); doi:10.1126/science.adg7314 -- https://www.science.org/doi/10.1126/science.adg7314
31. AI and the Doctor Dolittle challenge -- Yovel Y, Rechavi O -- Current Biology 33(15):R783-R787, 2023 (7 Aug 2023); doi:10.1016/j.cub.2023.06.063 -- https://www.cell.com/current-biology/fulltext/S0960-9822(23)00848-5
32. Exploitation of insect vibrational signals reveals a new method of pest management -- Eriksson A, Anfora G, Lucchi A, Lanzo F, Virant-Doberlet M, Mazzoni V (Mazzoni not visible in live results) -- PLoS ONE 7(3):e32954, 2012; correction PLoS ONE 9:e100029 (2014) -- https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0032954
33. The siren's song: exploitation of female flight tones to passively capture male Aedes aegypti (Diptera: Culicidae) -- Johnson BJ, Ritchie SA -- Journal of Medical Entomology, 2016 (not checked in live search) -- URL not verified
34. Do not publish -- Lindenmayer D, Scheele B -- Science 356(6340):800, 2017; doi:10.1126/science.aan1362 -- https://www.science.org/doi/10.1126/science.aan1362

## Verification ledger

| # | Claim (short form) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | FlyWire female whole-brain connectome via CAVE; v630 and v783; ~139k neurons | HIGH | confirmed | 1 |
| 2 | ~8,400 types; type-level connectivity reproducible across two females; single connections vary | MED | confirmed | 2 |
| 3 | Shiu repository: LIF whole-brain model; v783 default, v630 archived | MED | corrected | 19 |
| 4 | Shiu model predicted feeding and grooming neurons; not validated for courtship | HIGH | confirmed | 18 |
| 5 | Hemibrain: one female, ~25k central-brain neurons, neuPrint v1.2.1 | MED | confirmed | 3 |
| 6 | neuPrint web service and Python client; personal token from web login | MED | confirmed | 10 |
| 7 | MANC: complete male VNC, ~23k neurons, wing-motor song systems annotated | MED | confirmed | 4, 5 |
| 8 | Male CNS connectome (166,700 neurons, 11,710 types) published in Cell, Sept 2026 | MED | corrected | 7 |
| 9 | Male optic-lobe connectome on neuPrint as "optic-lobe", matched to driver lines | HIGH | confirmed | 6 |
| 10 | BANC: female brain plus VNC in one volume, ~188k neurons | MED | corrected | 8 |
| 11 | CAVE serves versioned materializations via caveclient; hosts FlyWire and BANC | MED | confirmed | 9 |
| 12 | Virtual Fly Brain: free atlas linking EM neurons, driver lines, literature types | MED | corrected | 11 |
| 13 | NeuronBridge matches EM neurons to FlyLight images by colour-depth search | MED | confirmed | 12 |
| 14 | FlyLight MCFO and split-GAL4 resources; stocks via Bloomington | MED | confirmed | 13, 14 |
| 15 | SLEAP: open-source multi-animal pose tracking, benchmarked on courting fly pairs | MED | confirmed | 20 |
| 16 | DAS annotates fly, bird and rodent signals; closed-loop latency | MED | confirmed | 21 |
| 17 | Re-evaluation found no evidence for ~55-s courtship-song rhythm; disputed | HIGH | confirmed | 25 |
| 18 | Auditory responses diverse and widespread across central brain, both sexes | HIGH | confirmed | 15 |
| 19 | pC1d/e activation drives persistent multi-behaviour state; pC2 tuned to one song mode | MED | corrected | 16, 17 |
| 20 | NatureLM-audio: open weights, evaluated on BEANS-Zero; no semantic translation | MED | confirmed | 22 |
| 21 | BEANS standardises classification and detection benchmarks across taxa | MED | confirmed | 23 |
| 22 | Sperm whale codas show contextual, combinatorial structure, not meaning | MED | confirmed | 24 |
| 23 | Rutz et al.: ML may decode communication; AI playback risks; ethical guidelines | MED | confirmed | 30 |
| 24 | Doctor Dolittle challenge: animal's own signals, across many behavioural contexts | MED | corrected | 31 |
| 25 | UK Sentience Act covers vertebrates, cephalopods, decapods; excludes insects | MED | confirmed | 26 |
| 26 | LSE review: graded evidence; recommended protecting all cephalopods and decapods | MED | confirmed | 27 |
| 27 | New York Declaration: realistic possibility of conscious experience, including insects | HIGH | confirmed | 28 |
| 28 | Strong evidence of pain-relevant capacities in adult flies and cockroaches | HIGH | confirmed | 29 |
| 29 | Trellis-wire vibrations disrupted *S. titanus* mating; led to field trials | HIGH | confirmed | 32 |
| 30 | Female flight-tone lures passively trap male *Aedes aegypti* | LOW | not live-checked | 33 |
| 31 | Published rare-species locations aided poachers; authors urged withholding data | HIGH | confirmed | 34 |
