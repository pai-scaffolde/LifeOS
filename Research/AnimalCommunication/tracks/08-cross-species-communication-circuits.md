# Track 08 -- Communication circuits across species: what transfers from fly to other animals

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 checked (16 verified, 1 of them by a single verifier / 11 corrected, 1 of them by a single verifier / 0 conflict / 4 unverified) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

> **Verification caveat.** Neither verifier could search the web: the search budget was used up and page fetches were blocked. Every verdict rests on the verifiers' own knowledge of the literature, and no URL was confirmed. Recheck the citations before citing them outside the program.

## Bottom line

- **Yes, neurons outside the fly have been recorded responding during communication.** Several are defined cell types:
  - zebra finch HVC(RA) neurons, which burst once at a fixed song time [MED][7];
  - bat frontal neurons that tell individual callers apart [HIGH][13];
  - clustered neurons in the bat inferior colliculus that separate social calls from echolocation calls [HIGH][15];
  - five identified cricket neurons that detect the song's pulse period [HIGH][9];
  - zebrafish thalamic neurons tuned to fish-like motion [MED][24];
  - male C. elegans CEM neurons, which respond to the pheromone ascr#8 [MED][20].
- **What transfers from the fly is the algorithm and the method, not homologous neurons.** Fly song neurons have no homology to vertebrate PAG, RAm or HVC. The recurring motifs are:
  - temporal-pattern filters;
  - dedicated gates for each call type;
  - replies timed by inhibition;
  - activity that precedes calling;
  - coding that depends on the partner [MED][1][6][9][11][13].
- **The results closest to conversation are causal studies of reply timing.** Blocking inhibition in zebra finch HVC speeds replies and increases overlap with the partner [HIGH][6]. Singing-mouse motor cortex is needed for fast countersinging replies [MED][5]. No turn-taking mechanism has been shown in the fly.
- **The mouse pathway from preoptic area to PAG-USV neurons to RAm is the clearest vertebrate parallel to the fly's command-to-pattern-generator song circuit** [HIGH][1], [MED][4], [LOW][31]. It is an analogy, and nobody has yet checked it against current fly connectomes [LOW].
- **No evidence here decodes what an animal signal means.** It shows whether a signal is produced, when, what category it is, and who sent it [HIGH][12][13][15].
- **Connectomes outside the fly remain small.** MICrONS and H01 each cover about 1 mm³ of cortex [HIGH][26], [MED][27], and BRAIN CONNECTS targets up to 10 mm³ of mouse brain [MED][28]. The researcher ranks the next species as C. elegans, larval zebrafish and field cricket, then zebra finch, mouse, and bats and marmosets [LOW].
- **Start with three projects:**
  - a computational benchmark of fly and cricket song detectors (can start now);
  - a turn-taking playback partner for zebra finches;
  - closed-loop pheromone delivery to C. elegans males, driven by whole-brain imaging.

## What the evidence shows

### Vocal gates and pattern generators (mouse, frog)

**The gate.** In male mice, PAG neurons active during courtship ultrasonic vocalizations (PAG-USV neurons) were labeled by activity-dependent tagging. Silencing them abolished USVs and impaired attraction of females, and activating them triggered USVs without female cues (causal manipulation, one lab) [HIGH][1]. Ablating these neurons blocks USVs in both sexes, but distress squeaks are still produced [MED][2]. The squeak gate was not identified. It may be a separate PAG population or lie outside the PAG [MED][2].

**Upstream control.** Inhibitory preoptic neurons projecting to the PAG promote USVs by releasing PAG-USV neurons from inhibition, while amygdala projections suppress USVs [LOW][31].

**Downstream patterning.** Vocalization-specific premotor neurons in the nucleus retroambiguus (RAmVOC) are necessary and sufficient for vocal-cord closure and USVs [MED][4]. How long they are activated sets syllable length, and inhibitory input from the preBötzinger complex lets the need to inhale override vocal-cord closure [MED][4]. The syllable result comes from artificial activation, not natural calling [MED][4].

**Fos mapping (unverified).** Two unverified 2026 studies used immediate-early-gene labeling (Fos, TRAP2). These labels are snapshots over hours, not real-time activity.
- USVs label neurons throughout RAm, while squeaks label them mainly at its caudal end [LOW][3]. The claim that the two sets barely overlap is not supported by the available excerpt [LOW][3].
- A whole-brain TRAP2 map during courtship USVs found consistent activation of the caudal PAG. Rostral caudoputamen labeling correlated with the number of USVs [LOW][30].

**Frog.** In Xenopus, a sexually differentiated hindbrain pattern generator produces calls. It consists of DTAM plus the vocal motor nucleus (VMN), which is equivalent to the mammalian nucleus ambiguus [MED][29]. Sex-typical fictive calls can be evoked in an isolated brain with serotonin or by stimulating a premotor nucleus [MED][29]. One verifier notes the motor nucleus is usually called n.IX–X.

### Turn-taking and reply timing

**Zebra finch.** In socially interacting zebra finches, inhibition in HVC precedes the premotor activity linked to calling. Blocking that inhibition makes replies faster and impairs the birds' ability to avoid overlapping their partner [HIGH][6]. This concerns calls, not learned song [HIGH][6].

**Singing mouse.** In male Alston's singing mice, orofacial motor cortex (OMC) is needed for the rapid, flexible replies of countersinging [MED][5]. Note structure largely survives OMC inactivation, which implies that downstream circuits generate the notes. Those circuits are presumed to be subcortical and were not identified [MED][5]. One verifier notes OMC also affects song timing, so the two levels form a hierarchy rather than working fully separately [MED][5].

**Marmoset.** Frontal-cortex population activity decreases during call production. It also differs between conversational exchanges and spontaneous calling [MED][19]. Only one verifier could confirm this.

**Pre-call activity (unverified).**
- In marmosets, stronger directed signaling from frontal to auditory cortex before a call predicts auditory suppression and the next call's acoustics. The measure is correlational [LOW][18].
- In the bat Carollia, auditory-cortex spiking distinguishes upcoming echolocation calls from communication calls several hundred ms ahead, and it reflects how many syllables the call will have [LOW][16].

**Fly.** No verified claim in this track describes turn-taking in Drosophila [LOW].

### Sequence generation in songbird HVC

Each zebra finch HVC(RA) neuron fires one short burst (usually cited as about 6 ms) at a single precise time in the motif. Across the population the bursts form a repeatable sequence (recorded activity) [MED][7]. The authors propose that the sequence works as a clock for song. That role is their interpretation and has been debated [MED][7].

In EM of HVC, HVC(RA) axons contact almost only inhibitory interneurons near the soma. Farther away they contact mostly excitatory neurons, about half of them other HVC(RA) cells. This fits a synaptic-chain architecture (wiring only, small volume) [HIGH][8].

### Temporal pattern recognition in insect receivers

**Cricket.** In female field crickets, selectivity for the species' pulse period comes from five identified brain neurons (AN1, LN2, LN5, LN3, LN4) joined by six connections, which combine a delay line with a coincidence detector [HIGH][9]. The evidence is intracellular recording and dye fills. The connections were inferred, not traced by EM [HIGH][9]. A model fitted to these recordings reproduces neuronal and behavioral tuning. Changing its parameters alone yields every known cricket phenotype for pulse duration and pause. This is a model prediction and has not been tested in the other species [HIGH][10].

**Fly.** In Drosophila, calcium imaging of many newly described auditory cell types (reported as more than 20) shows a continuum of preferences from pulse song to sine song. The wiring diagram shows a highly interconnected network with no hierarchy [MED][11]. The contrast with the cricket's compact feed-forward detector is this track's interpretation, not a result of that paper [MED][11]. Track 02 covers the fly auditory circuit.

**Honeybee.** Identified interneurons (DL-Int-1, DL-Int-2, DL-dSEG-LP) respond with distinct spiking to dance-like vibration pulses, forming at least two parallel pathways. Johnston's organ is tuned to about 250–300 Hz [HIGH][22]. The stimuli were artificial pulses applied to restrained bees, not real dance-following [HIGH][22].

### Call category, caller identity and partner coding in mammals

**Big brown bat.** Two-photon imaging of the inferior colliculus found neurons selective for either social or echolocation calls. The category of a call can be decoded from the population, and category-selective neurons cluster independently of the frequency map [HIGH][15]. Imaging reaches only the superficial colliculus, and "decoding" means classifying the call type, not its meaning [HIGH][15].

**Egyptian fruit bat.**
- In groups, single frontal neurons tell apart the calls of specific individuals, and their activity reorganizes across social contexts. Brains are not correlated during trained vocalizations [HIGH][13].
- In pairs, frontal activity was correlated across the two brains on timescales from seconds to hours. The correlation was strongest in LFP above 30 Hz, tracked how much the bats interacted, and rose before interactions began [HIGH][12]. It may reflect shared behavior or environment rather than an exchange of information [HIGH][12].
- In observer bats, some CA1 neurons encode the position of a demonstrator bat, and about half of these also encode the observer's own position. This is position coding, not signal content [HIGH][14].

**Marmoset.** Phee calls carried acoustic features that predicted which individual was addressed, and addressed marmosets responded more consistently in playback. Family members used similar labels [MED][17]. This is behavior from one lab with no neural data, and the "name" interpretation is debated [MED][17].

### Social-signal detection (zebrafish) and pheromone sensing (C. elegans)

**Zebrafish.** In developing zebrafish, brain-wide activity mapping plus two-photon imaging found 21 activity hotspots and neurons tuned to biological motion in a dorsal thalamic nucleus that social contact activates [MED][24]. These neurons encode the local acceleration of fish-like dot motion and ignore global or continuous motion [MED][24]. EM shows input from the tectum and projections to hypothalamic social areas. Ablating the tectum or dorsal thalamus impairs social attraction but not repulsion [MED][24]. This is one of the few communication circuits in this track with recorded activity, wiring and causal manipulation all together [MED][24].

**C. elegans.** Males are attracted to hermaphrodite pheromones (ascarosides) such as ascr#8, within a preferred concentration range, through the male-specific CEM neurons [MED][20]. Individual CEM neurons in one worm give different, even opposite-sign, calcium responses, and this diversity shapes the male's preference [MED][20]. NeuroPAL color-codes every hermaphrodite neuron so that whole-brain calcium imaging can be matched to identity [MED][21]. The researcher found no whole-brain NeuroPAL study of pheromone responses [LOW].

### Signals read from the body (cuttlefish)

Tracking chromatophores at high resolution, Reiter et al. inferred motor-neuron activity from how the chromatophores fluctuate together. From that they built a statistical hierarchy of motor control and found low-dimensional pattern dynamics [HIGH][23]. No neurons were recorded (model prediction), and the displays studied were mostly camouflage [HIGH][23].

### Connectome status outside the fly

**Mouse cortex (MICrONS).** Calcium imaging of about 75,000 neurons in mouse visual cortex was co-registered with EM of the same ~1 mm³ volume, which holds more than 200,000 cells and about 0.5 billion synapses. It was published April 9, 2025 [HIGH][26]. Only a subset of imaged neurons are matched to EM cells [HIGH][26].

**Human cortex (H01).** About 1 mm³ of surgical human temporal cortex: about 57,000 cells, 150 million synapses and 1.4 petabytes. Glia outnumber neurons about 2:1, and some axonal connections have up to 50 synapses [MED][27].

**Larval zebrafish.** 2025 preprints describe new whole-brain EM reconstructions, one annotated for neuromodulatory cell types. These appear to be new specimens, not extensions of an earlier whole-brain synapse-resolution dataset [LOW][25].

**Songbird.** Connectomes are partial: a volume of HVC [HIGH][8] and an unchecked EM connectome of the song basal ganglia (Area X) [LOW][36].

**Mouse brain (BRAIN CONNECTS).** Launched in 2023 with about $150M for 11 projects over 5 years, the program includes a plan to image up to 10 mm³ of mouse cortico-basal ganglia-thalamo-cortical loop with two 91-beam microscopes [MED][28]. That is about 10 times MICrONS and roughly 2–3% of the mouse brain, by this track's arithmetic [MED][28]. No timeline for a whole mouse-brain connectome before 2030 was found [LOW].

### What carries over from the fly

**Where the fly has a counterpart.** It has one for only two of the five motifs:
- **Temporal-pattern filtering** has direct counterparts in the cricket, bat colliculus and bee [9][11][15][22].
- **Call gating and pattern generation** have only suggested counterparts: fly command-like song neurons (pIP10/P1) compared with the mouse PAG-USV gate, and the fly's ventral-nerve-cord song generator compared with RAm and Xenopus DTAM. These pairings are unverified analogies, not homologies, and the verifiers ask that they be checked against the 2025–2026 BANC and male CNS connectomes [LOW].

**Where it has none.** No fly counterpart has been shown for replies timed by inhibition, for activity that precedes calling, or for partner-dependent coding [MED][5][6][13][16].

**A limit on reading function from wiring.** One verifier notes that in C. elegans signal-propagation mapping (Randi et al. 2023), the wiring diagram did not predict many functional connections [LOW][21].

## Results table

| Neuron / cell type | Species (sex) | Role | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| PAG-USV neurons | Mouse (males; both sexes for ablation) | Gate courtship USVs; not needed for squeaks | Causal manipulation | HIGH / MED | 1, 2 |
| Preoptic→PAG; amygdala→PAG | Mouse | Promote / suppress USVs | Causal manipulation | LOW | 31 |
| RAmVOC | Mouse | Close vocal cords; set syllable length | Causal manipulation | MED | 4 |
| RAm USV vs squeak neurons | Mouse | Recruited in different parts of RAm by call type | Fos (immediate-early gene) | LOW | 3 |
| Caudal PAG; rostral caudoputamen | Mouse (males) | Active with USVs; caudoputamen correlates with USV count | TRAP2/c-Fos | LOW | 30 |
| DTAM + VMN (n.IX–X) | Xenopus (both sexes) | Hindbrain call pattern generator | Fictive recording under activation | MED | 29 |
| Orofacial motor cortex | Singing mouse (males) | Reply speed in countersinging | Causal manipulation | MED | 5 |
| HVC inhibitory interneurons | Zebra finch | Time replies; avoid overlap | Recorded + drug manipulation | HIGH | 6 |
| HVC(RA) neurons | Zebra finch (males) | Sparse song sequence | Recorded activity | MED | 7 |
| HVC(RA) axon targets | Zebra finch | Synaptic-chain-like wiring | Wiring only | HIGH | 8 |
| AN1, LN2, LN5, LN3, LN4 | Field cricket (females) | Pulse-period filter | Recorded (intracellular); model | HIGH | 9, 10 |
| Auditory cell types (>20 reported) | D. melanogaster | Pulse–sine preference continuum | Imaging + wiring | MED | 11 |
| DL-Int-1, DL-Int-2, DL-dSEG-LP | Honeybee | Dance-like vibration responses | Recorded activity | HIGH | 22 |
| Colliculus category clusters | Big brown bat | Social vs echolocation calls | Two-photon imaging | HIGH | 15 |
| Frontal neurons | Egyptian fruit bat | Caller identity; context | Recorded activity | HIGH | 13 |
| Frontal activity across two brains | Egyptian fruit bat | Correlated with interaction | Recorded (correlational) | HIGH | 12 |
| CA1 social place cells | Egyptian fruit bat | Another bat's position | Recorded activity | HIGH | 14 |
| Pre-call auditory-cortex neurons | Carollia | Upcoming call type and syllable count | Recorded activity | LOW | 16 |
| Frontal cortex | Marmoset | Suppressed during calls; state-dependent | Recorded activity | MED | 19 |
| Frontal→auditory cortex | Marmoset | Pre-call directed signaling | Recorded (correlational) | LOW | 18 |
| Dorsal-thalamus motion neurons | Zebrafish (developing) | Detect fish-like motion; needed for attraction | Recorded + EM + ablation | MED | 24 |
| CEM | C. elegans (males) | ascr#8 attraction | Imaging + ablation | MED | 20 |
| ASK | C. elegans | Pheromone sensing (ascr#3) | Researcher note only | LOW | -- |
| Chromatophore motor neurons | Cuttlefish | Drive skin patterns | Model (inferred) | HIGH | 23 |

## Why this matters for two-way communication with animals

- **Reply timing is actively controlled.** A partner with a fixed delay is the wrong model [HIGH][6], [MED][5]. An artificial partner should adapt its latency and avoid overlap. Useful measures are turns per exchange, overlap rate and how latency adapts.
- **Receivers filter by temporal structure.** The cricket model defines the ranges of pulse period, duration and pause that a signal must fall within [HIGH][9][10], and synthetic signals outside them are likely to be ignored. The public bat colliculus data give a comparable boundary between call categories [HIGH][15][33].
- **Gates are readouts.** PAG-USV activity marks readiness to produce USVs, independent of squeaks [HIGH][1], [MED][2]. Recording it during interactive playback tests whether a partner's calls change that readiness. Pre-call cortical activity could serve as an "about to call" cue if it is confirmed [LOW][16][18].
- **Caller identity matters to the listener.** Bat frontal neurons separate callers [HIGH][13], and marmoset calls carry addressee-specific features [MED][17]. An artificial partner may therefore be represented differently from a conspecific; one bat study reports hippocampal representation of human experimenters [LOW][39].
- **Closed loops are practical now in small systems.** Candidates are identified whole-brain imaging in C. elegans [MED][21] and dot-motion stimuli in zebrafish [MED][24].
- **The realistic target is well-timed, category-appropriate, partner-aware exchange, not translation.** None of these circuits encodes meaning in a decodable form [MED][12][13][15]. Generating plausible calls (e.g., GmSLM for marmosets) is not understanding them [LOW][37].

## Open questions

1. **Cricket-like or fly-like architecture?** Which generalizes for temporal pattern recognition: the cricket's compact feed-forward detector or the fly's interconnected network? Does fly wiring contain a delay-plus-coincidence motif [9][11]?
2. **Shared timing for turn-taking?** Is turn-taking timed by a shared inhibitory mechanism in finch HVC, singing-mouse OMC and marmoset frontal cortex? Is there anything comparable in fly song that responds to female feedback?
3. **Identity matching in vertebrates?** Can activity be matched to connectome identity in vertebrates? So far only MICrONS-style co-registration has done this [26].
4. **What does inter-brain correlation mean?** Does it reflect information exchange or a shared environment? It was absent during trained vocalizations [13], and one eLife model favors a shared environment [38].
5. **Artificial partners.** Do animals represent a human or robotic partner the way they represent a conspecific [39]?
6. **Pre-call signals and self versus other.** Are the signals that precede calls a general corollary-discharge motif that can be read in real time [16][18]? How does an animal tell its own signal from a partner's? The cricket corollary-discharge interneuron (Poulet & Hedwig 2006) was not reviewed.
7. **Topics not reviewed (flagged by verifiers):**
   - C. elegans: male NeuroPAL coverage of CEM and the male connectome (Cook et al. 2019).
   - Drosophila species comparisons (Seeholzer et al. 2018; Ding et al. 2016/2019).
   - The conserved vertebrate hindbrain vocal generator (Bass, Gilland & Baker 2008).
   - Social-state circuits: fly P1/pC1 versus mouse MPOA/VMHvl.
   - Other animals: mosquito flight-tone matching, electric fish, ant pheromone imaging (Hart et al. 2023).
8. **How far does wiring predict function?** See the signal-propagation and neuropeptide connectome work (Randi et al. 2023; Ripoll-Sánchez et al. 2023). Learned vocal exchange cannot be modeled with the fly's innate song.
9. **Replication.** Most of the mouse evidence comes from the Tschida, Mooney and Wang labs, and the bat evidence from the Yartsev lab. Follow-up and replication work was not assessed.

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| Cross-species temporal-pattern detector benchmark | Fly and cricket song detectors run the same pulse-interval algorithm (delay lines plus coincidence detection or rebound) despite different wiring. | Fit cricketnet [32][10] and connectome-constrained fly auditory models (FlyWire/BANC; cell types from [11]). Present the same synthetic pulse trains to both and compare tuning curves with each other and with bat colliculus data [33]. | Computational, now | Reproduce cricket pulse-period tuning with cricketnet, then search FlyWire for an inhibitory neuron feeding a delayed excitatory neuron, both converging on one target. |
| Turn-taking playback agent for zebra finch calls | A partner whose reply delay follows the inhibition model of Benichov & Vallentin 2020 sustains more well-timed exchanges than fixed-delay or random playback. | Run the HVC timing model as a real-time call-reply agent [6]. Compare turns, overlap rate and latency adaptation across agents. Record HVC in a subset of birds during exchanges with the agent. | Wet lab, months | Build the closed-loop rig and record baseline call exchanges between real pairs. |
| Closed-loop pheromone dialogue in C. elegans males | Ascaroside pulses chosen from the male's own CEM/ASK activity steer mate search more reliably than fixed exposure. | Microfluidics plus GCaMP+NeuroPAL whole-brain imaging in males [20][21]. Decode CEM/ASK responses in real time and switch between ascr#8 and ascr#3 pulses accordingly. Measure locomotion and mating. | Wet lab, months | Check whether NeuroPAL strains identify male CEM, and record baseline whole-brain responses to ascr#8. |
| Closed-loop virtual conspecific in larval zebrafish, then EM matching | Dorsal-thalamus motion neurons respond more when the virtual fish's motion depends on the larva's own movements, and they have a distinctive EM input pattern. | Two-photon imaging during closed-loop versus replayed dot motion [24]. Register imaged neurons to 2025 whole-brain EM resources [25][35] and trace their inputs. | Wet lab, months | Replicate the dot-motion responses, then make dot acceleration respond to tail bouts. |
| Cricket song-circuit EM connectome | The five-neuron detector sits inside a larger, unmapped network, and wiring will show how the motif is retuned across species. | Volume EM of the cricket brain and prothoracic ganglion using fly pipelines. Identify AN1 and the LN neurons by dye fill plus correlative light and EM. Test connectome-constrained models with trackball phonotaxis [9][10]. | Wet lab, years | Pilot correlative light and EM on one dye-filled LN3/LN4 pair. |
| Mouse USV-gate functional connectome | Inputs to PAG-USV→RAm carry partner information and predict when a male calls in an exchange. | Photometry or miniscope recording of PAG-USV and RAm during male–female exchanges with interactive playback [1][4][31], then targeted EM of PAG and RAm in the same animals [26]. | Wet lab, years | Compare PAG-USV activity during live versus played-back female USVs. |

## Leads needing confirmation

**Unverified papers**
- **2026 mouse Fos and TRAP2 maps [3][30].** These are snapshots of gene expression, not real-time activity. The overlap claim in [3] needs double labeling.
- **Carollia pre-call neurons [16].** Authors are unknown and the recorded region needs checking. Data are at [34].
- **Marmoset frontal-to-auditory signaling [18].** The claim itself is unverified and the authors are unconfirmed.

**Partly confirmed**
- **Marmoset frontal cortex [19].** One verifier only.
- **Zebrafish EM preprints [25][35].** Details are unconfirmed.
- **Preoptic and amygdala inputs to the PAG [31].** Entered from memory, though both verifiers recalled the same thing.

**Details to check**
- **Author lists** for [4] and [22].
- **BRAIN CONNECTS [28].** Who leads the 10 mm³ project.
- **NeuroPAL [21].** The "six labs" statement and the KDK94 strain.
- **Single-verifier details:** that the correlation rose before interactions [12], and the ">20" cell-type count [11].

**Researcher statements with no claim behind them**
- The role of ASK.
- Complete connectomes for both C. elegans sexes.
- The species ranking.
- The pIP10/P1 analogy.

## Claims dropped in verification

No claim was dropped outright (0 of 31). The statements below were removed or narrowed.

**Removed or narrowed during correction**
- **T08-02:** "different midbrain gates" for different call types. The squeak gate was not identified.
- **T08-05:** "separate brain areas produce the notes." The downstream generator was inferred, not identified.
- **T08-07:** "~10 ms bursts" and "underlies song timing." The usual figure is about 6 ms, and the timing role is a proposal.
- **T08-11:** Clemens as an author, and the cricket contrast as a finding. The author was wrong, and the contrast is synthesis.
- **T08-17:** marmoset "vocal labels" stated as fact. The evidence is single-lab and classifier-based.
- **T08-20:** hermaphrodites avoid ascr#8, and CEM removal "abolishes" attraction. Neither was confirmed.
- **T08-21:** the "six labs" count and KDK94 attributed to the 2021 NeuroPAL paper. Neither is in it.
- **T08-24:** imaged neurons also activated by a real conspecific. Not confirmed.
- **T08-25:** the preprints "build on earlier synapse-resolution whole-brain EM." That earlier volume was mostly not at synaptic resolution.
- **T08-27:** H01 found "a previously unrecognized neuronal class." Overstated.
- **T08-28:** 40–50 microscopes needed for a whole mouse brain in 5 years. Unsourced extrapolation.

**Corrected seed leads**
- Inter-brain correlation credited to Rose 2021. It is Zhang & Yartsev 2019.
- Reiter 2018 described as a recording of communication. It is statistical inference during camouflage.
- A whole-brain NeuroPAL pheromone study. None was found.
- The cricket 2015 paper title was wrong. Corrected.

## Sources

1. A Specialized Neural Circuit Gates Social Vocalizations in the Mouse -- Tschida K, Michael V, Takatoh J, Han BX, Zhao S, Sakurai K, Mooney R, Wang F -- Neuron 103(3):459-472.e4, 2019 -- https://pubmed.ncbi.nlm.nih.gov/31204083/
2. Midbrain neurons important for the production of mouse ultrasonic vocalizations are not required for distress calls -- Ziobro P, Woo Y, He Z, Tschida K -- Current Biology 34(5):1107-1113.e3, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00016-2
3. Production of Mouse Ultrasonic Vocalizations and Distress Calls Is Associated with Different Patterns of Fos Expression in the Nucleus Retroambiguus -- Ziobro P, Zheng D-J, et al., Tschida K -- eNeuro, 2026 -- https://www.eneuro.org/content/13/8/ENEURO.0100-26.2026
4. Brainstem control of vocalization and its coordination with respiration -- Park J, Choi S, Takatoh J, Zhao S, Harrahill A, Han BX, Wang F (from verifier recall) -- Science 383(6687):eadi8081, 2024 -- https://www.science.org/doi/10.1126/science.adi8081
5. Motor cortical control of vocal interaction in neotropical singing mice -- Okobi DE Jr, Banerjee A, Matheson AMM, Phelps SM, Long MA -- Science 363(6430):983-988, 2019 -- https://www.science.org/doi/10.1126/science.aau9480
6. Inhibition within a premotor circuit controls the timing of vocal turn-taking in zebra finches -- Benichov JI, Vallentin D -- Nature Communications 11:221, 2020 -- https://www.nature.com/articles/s41467-019-13938-0
7. An ultra-sparse code underlies the generation of neural sequences in a songbird -- Hahnloser RHR, Kozhevnikov AA, Fee MS -- Nature 419:65-70, 2002 -- https://www.nature.com/articles/nature00974
8. EM connectomics reveals axonal target variation in a sequence-generating network -- Kornfeld J, Benezra SE, Narayanan RT, Svara F, Egger R, Oberlaender M, Denk W, Long MA -- eLife 6:e24364, 2017 -- https://elifesciences.org/articles/24364
9. An auditory feature detection circuit for sound pattern recognition -- Schöneich S, Kostarakos K, Hedwig B -- Science Advances 1(8):e1500325, 2015 -- https://www.science.org/doi/10.1126/sciadv.1500325
10. A small, computationally flexible network produces the phenotypic diversity of song recognition in crickets -- Clemens J, Schöneich S, Kostarakos K, Hennig RM, Hedwig B -- eLife, 2021 -- https://elifesciences.org/articles/61475
11. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, Eckstein N, Funke J, Dickson BJ, Murthy M -- Current Biology 32(15):3317-3333.e7, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
12. Correlated Neural Activity across the Brains of Socially Interacting Bats -- Zhang W, Yartsev MM -- Cell 178(2):413-428.e22, 2019 -- https://www.cell.com/cell/fulltext/S0092-8674(19)30551-3
13. Cortical representation of group social communication in bats -- Rose MC, Styr B, Schmid TA, Elie JE, Yartsev MM -- Science 374(6566), 2021 -- https://www.science.org/doi/10.1126/science.aba9584
14. Social place-cells in the bat hippocampus -- Omer DB, Maimon SR, Las L, Ulanovsky N -- Science 359:218-224, 2018 -- https://www.science.org/doi/10.1126/science.aao3474
15. Spatially clustered neurons in the bat midbrain encode vocalization categories -- Lawlor J, Wohlgemuth MJ, Moss CF, Kuchibhotla KV -- Nature Neuroscience, 2025 -- https://www.nature.com/articles/s41593-025-01932-3
16. Neurons in the bat auditory cortex encode class and complexity of future vocalizations -- author list not verified -- Communications Biology, 2026 -- https://www.nature.com/articles/s42003-026-10319-4
17. Vocal labeling of others by nonhuman primates -- Oren G, et al., Omer DB -- Science 385(6712):996-1003, 2024 -- https://www.science.org/doi/10.1126/science.adp3757
18. Frontal-auditory cortical interactions and sensory prediction during vocal production in marmoset monkeys -- author list not verified -- Current Biology, 2025 -- https://www.sciencedirect.com/science/article/pii/S0960982225003938
19. Representing the dynamics of natural marmoset vocal behaviors in frontal cortex -- Li J, Aoi MC, Miller CT -- Neuron, 2024 (volume and pages to verify; bioRxiv 2024.03.17.585423) -- https://www.biorxiv.org/content/10.1101/2024.03.17.585423.full.pdf
20. Contrasting responses within a single neuron class enable sex-specific attraction in Caenorhabditis elegans -- Narayan A, Venkatachalam V, Durak O, Reilly DK, Bose N, Schroeder FC, Samuel ADT, Srinivasan J, Sternberg PW -- PNAS 113(10):E1392-E1401, 2016 -- https://pnas.org/content/113/10/E1392
21. NeuroPAL: A Multicolor Atlas for Whole-Brain Neuronal Identification in C. elegans -- Yemini E, Lin A, Nejatbakhsh A, Varol E, Sun R, Mena GE, Samuel ADT, Paninski L, Venkatachalam V, Hobert O -- Cell 184(1):272-288.e11, 2021 -- https://www.sciencedirect.com/science/article/pii/S0092867420316822
22. Interneurons in the Honeybee Primary Auditory Center Responding to Waggle Dance-Like Vibration Pulses -- Ai H, Kai K, Kumaraswamy A, Ikeno H, Wachtler T (from verifier recall) -- Journal of Neuroscience 37(44):10624-10635, 2017 -- https://www.jneurosci.org/content/37/44/10624
23. Elucidating the control and development of skin patterning in cuttlefish -- Reiter S, Hülsdunk P, Woo T, Lauterbach MA, Eberle JS, Akay LA, Longo A, Meier-Credo J, Kretschmer F, Langer JD, Kaschube M, Laurent G -- Nature 562:361-366, 2018 -- https://www.nature.com/articles/s41586-018-0591-3
24. Visual recognition of social signals by a tectothalamic neural circuit -- Kappel JM, Förster D, Slangewal K, Shainer I, Svara F, Donovan JC, Sherman S, Januszewski M, Baier H, Larsch J -- Nature 608:146-152, 2022 -- https://www.nature.com/articles/s41586-022-04925-5
25. Multiplexed neuromodulatory-type-annotated whole-brain EM-reconstruction of larval zebrafish -- author list not verified -- bioRxiv 2025.06.12.659365, 2025 -- https://www.biorxiv.org/content/10.1101/2025.06.12.659365v2.full
26. Functional connectomics spanning multiple areas of mouse visual cortex -- The MICrONS Consortium -- Nature 640:435-447, 2025 -- https://www.nature.com/articles/s41586-025-08790-w
27. A petavoxel fragment of human cerebral cortex reconstructed at nanoscale resolution -- Shapson-Coe A, Januszewski M, Berger DR, et al., Jain V, Lichtman JW -- Science 384(6696):eadk4858, 2024 -- https://www.science.org/doi/10.1126/science.adk4858
28. Projects launch to map brain connections in mouse and macaque -- Allen Institute (news) -- Allen Institute news, 2023 -- https://alleninstitute.org/news/projects-launch-to-map-brain-connections-in-mouse-and-macaque
29. Xenopus Vocalizations Are Controlled by a Sexually Differentiated Hindbrain Central Pattern Generator -- Rhodes HJ, Yu HJ, Yamaguchi A -- Journal of Neuroscience 27(6):1485-1497, 2007 -- https://pmc.ncbi.nlm.nih.gov/articles/PMC2575670/
30. Whole-Brain Mapping of Neuronal Activity Associated with Vocal Socialization Behaviors in Adult Mice -- Luo S-X, Chen S-Y, Kuo H-Y, Liu F-C -- eNeuro 13(5), 2026 -- https://www.eneuro.org/content/13/5/ENEURO.0400-25.2026
31. Circuit and synaptic organization of forebrain-to-midbrain pathways that promote and suppress vocalization -- Michael V, Goffinet J, Pearson J, Wang F, Tschida K, Mooney R -- eLife 9:e63493, 2020 -- https://elifesciences.org/articles/63493

Datasets and other references supplied by the researcher (the verifiers did not check these):

32. cricketnet (code for the Clemens et al. 2021 model) -- Clemens lab -- GitHub, year not given -- https://github.com/janclemenslab/cricketnet
33. Bat inferior colliculus two-photon dataset -- Lawlor et al. -- Zenodo, 2025 -- https://zenodo.org/records/14743696
34. Bat auditory cortex pre-vocal data (for source 16) -- authors not given -- G-Node, 2026 -- https://doi.gin.g-node.org/10.12751/g-node.44wmeq/
35. Larval zebrafish connectomic resource -- authors not given -- bioRxiv 2025.06.10.658982, 2025 -- https://www.biorxiv.org/content/10.1101/2025.06.10.658982v1
36. Songbird basal ganglia (Area X) connectome -- authors not given -- venue and year not given -- https://pmc.ncbi.nlm.nih.gov/articles/PMC12636473/
37. GmSLM (Generative Marmoset Spoken Language Modeling) -- authors not given -- arXiv 2509.09198, year not given -- https://arxiv.org/pdf/2509.09198
38. eLife model of inter-brain neural correlation (shared-environment account) -- title and authors not given -- eLife, year not given -- https://elifesciences.org/articles/70493
39. Bat hippocampus study reporting representation of human experimenters -- title and authors not given -- 2024 -- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11374686/
