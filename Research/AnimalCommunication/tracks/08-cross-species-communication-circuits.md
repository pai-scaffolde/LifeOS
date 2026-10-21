# Track 08 -- Communication circuits across species: what transfers from fly to other animals

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 · live-search audit: confirmed 27, corrected 4, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** In round 1, one researcher drafted the claims using live web search, and two independent verifiers reviewed them: one checked source fidelity, the other acted as an adversarial skeptic. Neither verifier had web access; both checked from their own knowledge of the literature. In round 2, a live auditor checked every claim against live web search results (32 searches for this track), with a second opinion reserved for any claim the search contradicted. None of the 31 claims was contradicted, so no second opinion was needed. Because of the session search cap, the audit ran in 2 passes, and the later pass checked only the claims the earlier pass had not reached. [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding itself was not directly visible, was corrected, or rests on a single verifier; [LOW] means not located or unconfirmed (used here only for researcher statements that no audited claim supports); [CONFLICT] means the checks disagree (none in this track).

## Bottom line

- **Neurons outside the fly have been recorded responding during communication.** Several are defined cell types:
  - zebra finch HVC(RA) neurons, each bursting once at a precise time in the song [HIGH][7];
  - Egyptian fruit bat frontal neurons that tell individual callers apart [HIGH][13];
  - clustered neurons in the big brown bat inferior colliculus that separate social calls from echolocation calls [HIGH][15];
  - five identified cricket neurons that detect the song's pulse period [HIGH][9];
  - zebrafish dorsal-thalamic neurons tuned to fish-like motion [HIGH][24];
  - male C. elegans CEM neurons, which mediate attraction to the pheromone ascr#8 [HIGH][20];
  - bat auditory-cortex and marmoset frontal-auditory activity that precedes calling and predicts the upcoming call [MED][16][18].
- **What transfers from the fly is the algorithm and the method, not homologous neurons.** This track treats every fly–vertebrate pairing as an analogy. The recurring motifs are:
  - temporal-pattern filters [HIGH][9][11][15];
  - a USV gate that distress calls do not need [HIGH][1][2];
  - reply timing controlled by inhibition [HIGH][6];
  - activity that precedes calling [MED][16][18];
  - caller- and context-dependent coding [HIGH][13].
  The grouping is the track's synthesis. Only temporal-pattern filtering has a demonstrated fly counterpart [HIGH][11].
- **The results closest to conversation are causal studies of reply timing.** Blocking inhibition in zebra finch HVC makes call replies faster and impairs overlap avoidance [HIGH][6]. Singing-mouse orofacial motor cortex is needed for rapid countersinging replies [MED][5]. No claim in this track describes a turn-taking mechanism in the fly.
- **The mouse pathway from preoptic area to PAG-USV neurons to RAm is the clearest vertebrate parallel to the fly's command-to-pattern-generator song circuit** [MED][31], [HIGH][1], [MED][4]. The analogy is the researcher's, and nobody has yet checked it against current fly connectomes [LOW].
- **No evidence here decodes what an animal signal means.** It shows whether a signal is produced, when, what category it is, and who sent it [HIGH][12][13][15]. The nearest result, addressee-specific features in marmoset phee calls [MED][17], is behavioral, comes from one lab, and is contested in print (see New leads).
- **Connectomes outside the fly remain small or partial.** MICrONS and H01 each cover about 1 mm³ of cortex [HIGH][26][27]. The Allen-led BRAIN CONNECTS project targets up to 10 mm³ of mouse brain [HIGH][28]. A 2025 preprint reports a synapse-level EM reconstruction of a 6 dpf larval zebrafish brain with more than 176,000 cells [MED][25]. The researcher ranks the next species as C. elegans, larval zebrafish and field cricket, then zebra finch, mouse, and bats and marmosets [LOW]; the audited evidence fits the first three, which already have identity-matched whole-brain imaging [21], whole-brain EM [25] or an identified detector circuit with a fitted model [9][10].
- **Start with three projects:**
  - a computational benchmark of fly and cricket song detectors (can start now);
  - a turn-taking playback partner for zebra finches;
  - closed-loop ascr#8 delivery to C. elegans males, driven by whole-brain imaging of CEM.

## What the evidence shows

### Vocal gates and pattern generators (mouse, frog)

**The gate.** In male mice, intersectionally labeled periaqueductal gray neurons that were transiently active during courtship USVs (PAG-USV neurons) are necessary for USVs: silencing them abolished USVs and impaired attraction of females, and activating them triggered USVs even without female cues (causal manipulation) [HIGH][1]. Ablating PAG-USV neurons blocks USV production in both males and females, but distress squeaks are still produced, so these neurons are not required for squeaks [HIGH][2]. The neurons that gate squeaks were not identified; they may be a separate PAG population or lie outside the PAG [HIGH][2]. The accompanying press release describes them as different PAG populations, which is the release's framing rather than a result.

**Upstream control.** Forebrain-to-PAG pathways in mice include some that promote and others that suppress vocalization; the audit's search results show two inputs to PAG-USV neurons with opposite effects on male courtship USVs [MED][31]. The specific assignment, with preoptic-area inhibitory neurons promoting USVs by disinhibiting PAG-USV neurons and amygdala-derived projections suppressing them, comes from round-1 recall and was not in the visible text [MED][31]. The auditor's recall agrees and places the suppressing input in the central-medial boundary zone of the amygdala.

**Downstream patterning.** Excitatory, vocalization-specific laryngeal premotor neurons in the retroambiguus nucleus (RAmVOC) are necessary and sufficient for vocal-cord closure and USV production [MED][4]. How long they are activated sets syllable length (and, in the audit's results, expiration length), and inhibitory input from the preBötzinger complex lets the need to inhale override vocal-cord closure [MED][4].

**Fos and TRAP2 mapping.** Two 2026 studies used immediate-early-gene labeling. These labels are snapshots over hours, not real-time activity.
- In RAm, USV production is associated with broad Fos activation throughout the nucleus, while distress squeaks are associated with activation in a much smaller region. The two patterns are largely nonoverlapping [MED][3]. Whether the squeak-related region lies at the caudal end needs checking in the full text [MED][3].
- Whole-brain mapping (TRAP2 tagging plus c-Fos) in adult males during courtship USVs across two sessions found consistent, robust activation in the caudal PAG. Activity in the rostral caudoputamen correlated with the number of USVs [MED][30]. The audit saw the caudal PAG result, corticostriatal engagement and enrichment of activated cells in MOR1-positive striosomes, but not the caudoputamen correlation itself.

**Frog.** In Xenopus laevis, calls come from a sexually differentiated hindbrain vocal central pattern generator. It includes the premotor nucleus DTAM (dorsal tegmental area of the medulla) and the laryngeal motor nucleus n.IX–X, which is generally regarded as homologous to the mammalian nucleus ambiguus [MED][29]. Sex-typical fictive vocalizations can be evoked in the isolated brain by applying serotonin or by electrically stimulating a premotor nucleus [MED][29]. The audit corrected the nucleus name: "vocal motor nucleus (VMN)" is midshipman-fish terminology.

### Turn-taking and reply timing

**Zebra finch.** In socially interacting zebra finches, local inhibition in the premotor nucleus HVC precedes premotor activity linked to calling. Blocking inhibition in HVC makes call replies faster and impairs the birds' ability to avoid overlapping their partner [HIGH][6]. The study concerns calls, not learned song.

**Singing mouse.** In male Alston's singing mice, orofacial motor cortex (OMC) is needed for the rapid, flexible vocal responses that support countersinging [MED][5]. Note structure largely survives OMC inactivation, which implies the notes are generated by downstream circuits (presumed subcortical, not identified in the study), with OMC modulating them [MED][5]. The audit's results describe hierarchical control, with motor cortex setting the pace of singing moment by moment; the observation that note structure survives inactivation was not visible in them.

**Marmoset frontal cortex.** In freely moving marmosets in natural conversational exchanges, model-based (GLM) analysis of frontal-cortex neurons found activity related to hearing calls, producing calls in different social contexts, and behavioral state. The functional clusters did not align with prefrontal versus premotor subfields, suggesting a distributed organization [MED][19]. This replaces the earlier statement that frontal activity decreases during call production, which the audit could not find in the source.

**Pre-call activity.**
- In marmosets, theta-band power rises in both frontal and auditory cortex shortly before a call starts (1 to 0.5 s before onset in the audit's results). Increased directed signaling from frontal to auditory cortex predicts suppression of auditory cortex and the acoustic properties of the call that follows [MED][18]. These are predictive relationships in recorded activity. The paper also reports bidirectional frontal-auditory interactions under altered feedback that predict vocal compensation.
- In the bat Carollia perspicillata, auditory-cortex neurons show spike patterns that distinguish upcoming echolocation calls from communication calls several hundred ms before vocal onset. The same activity reflects the number of syllables in a communication sequence [MED][16].

**Fly.** No claim in this track describes turn-taking in Drosophila.

### Sequence generation in songbird HVC

In zebra finches, HVC neurons that project to RA (HVC(RA)) each fire one short burst of a few spikes (usually cited as about 6 ms) at a single precise time in the song motif. The bursts are repeatable across renditions and occur in sequence across the population (recorded activity) [HIGH][7]. The authors propose that this ultra-sparse sequence acts as an explicit clock for song timing; that role is their interpretation [HIGH][7]. The ~6 ms figure was not visible in the audit's results.

Serial block-face EM of zebra finch HVC shows HVC(RA) axons target almost only inhibitory interneurons close to the soma. Farther from the soma they target mostly excitatory neurons, about half of which are other HVC(RA) cells. This supports a synaptic-chain-like sequence architecture (wiring only; the chain reading is the authors' interpretation) [HIGH][8].

### Temporal pattern recognition in insect receivers

**Cricket.** In the field cricket Gryllus bimaculatus (female phonotaxis system), selectivity for the species-specific pulse period comes from a brain network of five identified neurons (AN1, LN2, LN5, LN3, LN4) and six synaptic connections, which combine a delay line with a coincidence detector [HIGH][9]. The "six connections" figure is stated in the companion 2021 model paper. A computational model of this network, fit to recordings, reproduces neuronal and behavioral tuning in G. bimaculatus, and with parameter changes alone produces every known cricket recognition phenotype for pulse duration and pause (model prediction) [HIGH][10]. The auditor notes that the visible abstract supports a narrower wording: different parameter settings within the same circuit yield the diversity of song preferences found across cricket species.

**Fly.** In the Drosophila melanogaster brain, calcium imaging of many newly characterized auditory cell types shows a continuum of preferences between pulse and sine song. Connectome reconstruction shows these neurons are highly interconnected in a network without hierarchical structure (imaging plus connectome wiring) [HIGH][11]. Round 1 reported the count as more than 20; the audit's search results give 24 newly identified cell types, with all synaptic connections among them mapped in FlyWire and excitatory or inhibitory sign assigned to most synapses. The contrast with the cricket's compact feed-forward detector is this track's interpretive comparison, not a result of that paper. Track 02 covers the fly auditory circuit.

**Honeybee.** In the honeybee primary auditory center, identified interneurons (DL-Int-1, DL-Int-2 and bilateral DL-dSEG-LP) respond with distinct spiking patterns to waggle-dance-like vibration pulses applied to the antenna, forming at least two parallel pathways. Johnston's organ is tuned to about 250–300 Hz, the main frequency of dance vibrations [HIGH][22]. The stimuli were dance-like pulses, not dances. The audit confirmed the topic and the role of inhibitory connections in encoding pulse-train duration; the interneuron names and the frequency tuning were not visible in its results.

### Call category, caller identity and partner coding in mammals

**Big brown bat.** Two-photon calcium imaging in the inferior colliculus of awake Eptesicus fuscus found individual neurons selective for social calls or for navigation (echolocation) calls, allowing robust population decoding of call category. Category-selective neurons formed spatial clusters independent of tonotopy [HIGH][15]. The audit's results place the clusters in the dorsal cortex of the inferior colliculus and add that responses switched sharply at the category boundary when calls were morphed. "Decoding" here means classifying the call type, not its meaning.

**Egyptian fruit bat.**
- In groups, single frontal-cortex neurons tell apart the vocalizations of specific individuals, and their activity is restructured across social contexts. Inter-brain correlation is absent during trained vocalizations [HIGH][13]. The visible abstract confirms the recording design; these specific results were not in the result text but agree with the auditor's recall.
- In pairs, wireless recordings showed frontal activity correlated between the two brains on timescales from seconds to hours. The correlation was strongest in high-frequency LFP (>30 Hz), tracked how much the bats interacted, and rose before interactions began [HIGH][12]. The audit adds that the correlation depended on the bats sharing a social environment, so it may reflect shared context rather than an exchange of information.
- In an observer bat, a subpopulation of dorsal CA1 neurons encodes the position of a demonstrator bat in allocentric coordinates (social place cells), and about half of them also encode the observer's own position [HIGH][14]. This is position coding, not signal content.

**Marmoset.** In captive marmosets, phee calls in natural pair exchanges carried acoustic features that predicted which individual was addressed, which the authors interpret as vocal labels. In playback via a computerized system, marmosets responded more consistently to calls directed at them. Family members used similar labels and shared acoustic features, suggesting learning [MED][17]. The tag matches Track 07 [9], whose audit saw the classifier and playback details only indirectly. This is a single-lab behavioral result with no neural data; the "name" interpretation is debated and awaits replication, and a published critique and reply now exist (see New leads).

### Social-signal detection (zebrafish) and pheromone sensing (C. elegans)

**Zebrafish.** In developing zebrafish, brain-wide activity mapping plus two-photon imaging found 21 activity hotspots and biological-motion-tuned neurons in a socially activated dorsal thalamic nucleus. These neurons encode the local acceleration of fish-like dot motion and ignore global or continuous motion. EM shows they receive tectal input and project to hypothalamic social areas. Ablating the tectum or dorsal thalamus impairs social attraction but not repulsion [HIGH][24]. The audit saw the imaging results directly; the EM and ablation results were not in the visible text, and "but not repulsion" should be confirmed in the full text or dropped. If confirmed, this is one of the few communication circuits in this track with recorded activity, wiring and causal manipulation together.

**C. elegans.** Male C. elegans are attracted to hermaphrodite ascaroside cues such as ascr#8 within a preferred concentration range, via the male-specific CEM neurons. Individual CEMs in the same worm give dissimilar, even opposite-sign calcium responses, and this diversity shapes the sex-specific preference [HIGH][20]. Round 1 left two points open: the exact hermaphrodite response and how complete the loss is after CEM removal. The audit's results settle the second. Males with only one intact CEM are still attracted but lose concentration preference, and CEM responses are enhanced in the absence of synaptic transmission, so synaptic modulation is needed for the preference. The hermaphrodite comparison was not visible.

NeuroPAL is a multicolor transgene that gives every C. elegans hermaphrodite neuron a stereotyped color code, so whole-brain calcium imaging can be matched to neuron identity [MED][21]. The statements that at least six labs have published NeuroPAL whole-brain datasets, and that a 2025 GCaMP+NeuroPAL strain (KDK94) improved stimulus responses, come from separate later studies [MED][21]. The audit located the KDK94 study: existing GCaMP+NeuroPAL strains gave suboptimal responses, and KDK94 improved behavioral and neural responses to 2-nonanone and electric stimuli [MED][32]. A 2025 study pooling community datasets is the probable source of the multi-lab statement (see New leads). The researcher found no whole-brain NeuroPAL study of pheromone responses [LOW].

### Signals read from the body (cuttlefish)

By tracking cuttlefish chromatophores at high resolution, Reiter et al. inferred the activity of chromatophore motor neurons from how chromatophores co-fluctuate, and from that the structure of higher control levels. The result is a statistical hierarchy of motor control and low-dimensional skin-pattern dynamics [HIGH][23]. No neurons were recorded (model prediction). The audit saw the motor-neuron inference directly; the hierarchy and low-dimensional dynamics fit the paper's framing but were not explicit in the visible text.

### Connectome status outside the fly

**Mouse cortex (MICrONS).** The MICrONS consortium co-registered calcium imaging of about 75,000 neurons in mouse primary and higher visual cortex with an EM reconstruction of the same ~1 mm³ volume, containing more than 200,000 cells and about 0.5 billion synapses. The flagship Nature paper was published April 9, 2025 [HIGH][26].

**Human cortex (H01).** The H01 dataset reconstructs about 1 mm³ of human temporal cortex taken during epilepsy surgery. It contains about 57,000 cells, about 150 million synapses and about 230 mm of blood vessels, totals 1.4 petabytes, and was imaged at about 4×4×33 nm. Findings include glia outnumbering neurons about 2:1, deep-layer excitatory neurons that can be grouped by dendritic orientation, and rare strong axonal connections with up to 50 synapses [HIGH][27]. The imaging resolution and the surgical origin were not visible in the audit's results.

**Larval zebrafish.** A June 2025 bioRxiv preprint (Fish-X) reports a synapse-level EM reconstruction of the retina, brain and anterior spinal cord of a 6 dpf larval zebrafish (>176,000 cells, >25 million synapses). APEX2 labeling marks noradrenergic, dopaminergic, serotonergic, hypocretinergic and glycinergic neurons, and glutamatergic and GABAergic identities are inferred from morphology. It builds on earlier whole-brain ssEM (Hildebrand et al. 2017) and partial synapse-level reconstructions [MED][25]. The audit found this one preprint, not the several round 1 described, and its authors were not visible.

**Songbird.** Among the audited sources, the songbird connectome is a partial volume of HVC [HIGH][8].

**Mouse brain (BRAIN CONNECTS).** NIH's BRAIN CONNECTS program, launched in 2023 (about $150M, 11 projects over 5 years), includes an Allen Institute-led project. It aims to image up to 10 mm³ of the mouse cortico-basal ganglia-thalamo-cortical loop at synaptic resolution using two 91-beam electron microscopes in parallel [HIGH][28]. That is about 10 times the MICrONS volume (claim-writer's arithmetic). The same page lists about $6.1M in first-year funding and a pipeline that includes serial-section tilt TEM tomography and links to gene-expression cell types. The researcher found no timeline for a whole mouse-brain connectome before 2030 [LOW].

### What carries over from the fly

**Where the fly has a counterpart.** It has one for only two of the five motifs:
- **Temporal-pattern filtering** has direct counterparts in the cricket [9], the bat colliculus [15] and the honeybee [22], with the fly network described in [11].
- **Call gating and pattern generation** have only suggested counterparts: fly command-like song neurons (pIP10/P1) compared with the mouse PAG-USV gate, and the fly's ventral-nerve-cord song generator compared with RAm and Xenopus DTAM. These pairings are the researcher's analogies, not homologies, and no audited claim supports them [LOW]. The verifiers ask that they be checked against the 2025–2026 BANC and male CNS connectomes.

**Where it has none.** None of the claims in this track shows a fly counterpart for replies timed by inhibition [6], activity that precedes calling [16][18], or caller- and context-dependent coding [13]; the singing-mouse result [5] is a further vertebrate case of cortical control of reply timing.

## Results table

| Neuron / cell type | Species (sex) | Role | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| PAG-USV neurons | Mouse (males; both sexes for ablation) | Gate courtship USVs; not needed for squeaks | Causal manipulation | HIGH | 1, 2 |
| Preoptic→PAG; amygdala→PAG | Mouse (males) | Promote / suppress USVs | Causal manipulation | MED | 31 |
| RAmVOC; preBötzinger inhibitory input | Mouse | Close vocal cords, set syllable length; let inhalation override | Causal manipulation | MED | 4 |
| RAm USV vs squeak neurons | Mouse (adults) | Broad vs restricted RAm activation by call type | Fos (immediate-early gene) | MED | 3 |
| Caudal PAG; rostral caudoputamen | Mouse (adult males) | Active with USVs; caudoputamen correlates with USV count | TRAP2 + c-Fos | MED | 30 |
| DTAM + n.IX–X | Xenopus laevis (both sexes) | Hindbrain vocal pattern generator | Fictive calls in isolated brain | MED | 29 |
| Orofacial motor cortex | Singing mouse (males) | Reply speed in countersinging | Causal manipulation | MED | 5 |
| HVC inhibitory interneurons | Zebra finch | Time call replies; avoid overlap | Recorded + blocking inhibition | HIGH | 6 |
| HVC(RA) neurons | Zebra finch (adult males) | Sparse song sequence | Recorded activity | HIGH | 7 |
| HVC(RA) axon targets | Zebra finch | Synaptic-chain-like wiring | EM wiring | HIGH | 8 |
| AN1, LN2, LN3, LN4, LN5 | Field cricket (females) | Pulse-period filter | Recorded activity; model | HIGH | 9, 10 |
| Auditory cell types (24 per audit) | D. melanogaster | Pulse–sine preference continuum | Imaging + FlyWire wiring | HIGH | 11 |
| DL-Int-1, DL-Int-2, DL-dSEG-LP | Honeybee (foragers) | Responses to dance-like vibration | Recorded activity | HIGH | 22 |
| IC category clusters (dorsal cortex) | Big brown bat (awake) | Social vs echolocation calls | Two-photon imaging | HIGH | 15 |
| Frontal neurons | Egyptian fruit bat (groups) | Caller identity; social context | Recorded activity | HIGH | 13 |
| Frontal activity across two brains | Egyptian fruit bat (pairs) | Correlated with interaction | Recorded (correlational) | HIGH | 12 |
| Dorsal CA1 social place cells | Egyptian fruit bat | Demonstrator's position | Recorded activity | HIGH | 14 |
| Pre-call auditory-cortex neurons | Carollia perspicillata | Upcoming call class and syllable count | Recorded activity | MED | 16 |
| Frontal-cortex neurons | Marmoset | Hearing and producing calls by context; state | Recorded activity + GLM | MED | 19 |
| Frontal→auditory cortex | Marmoset | Pre-call directed signaling | Recorded LFP (predictive) | MED | 18 |
| Dorsal-thalamus motion neurons | Zebrafish (larvae) | Detect fish-like motion; needed for attraction | Recorded + EM + ablation | HIGH | 24 |
| CEM | C. elegans (males) | ascr#8 attraction; concentration preference | Calcium imaging + CEM ablation | HIGH | 20 |
| Chromatophore motor neurons (inferred) | Cuttlefish | Drive skin patterns | Model (inferred) | HIGH | 23 |

## Why this matters for two-way communication with animals

- **Reply timing is actively controlled.** A partner with a fixed delay is the wrong model [HIGH][6], [MED][5]. An artificial partner should adapt its latency and avoid overlap. Useful measures are turns per exchange, overlap rate and how latency adapts.
- **Receivers filter by temporal structure and category.** The cricket network defines the pulse period, duration and pause that a signal must match [HIGH][9][10], so synthetic signals outside those ranges are likely to be ignored. Bat colliculus responses switch sharply at the boundary between call categories when calls are morphed [HIGH][15], which gives a comparable boundary for vertebrate calls.
- **Gates are readouts.** PAG-USV activity marks readiness to produce USVs, independent of squeaks [HIGH][1][2]. Recording it during interactive playback tests whether a partner's calls change that readiness. Pre-call cortical activity in bats and marmosets could serve as an "about to call" cue; both sources are now located, and both relationships are predictive rather than causal [MED][16][18].
- **Caller identity matters to the listener.** Bat frontal neurons separate callers [HIGH][13], and marmoset calls carry addressee-specific features [MED][17]. An artificial partner may therefore be represented differently from a conspecific. No audited claim in this track tests this; a 2025 study of hippocampal identity coding in wild fruit bats, audited in Track 07 [17], is a starting point (see New leads).
- **Closed loops are practical now in small systems.** Candidates are identity-matched whole-brain imaging in C. elegans [MED][21][32] and dot-motion stimuli in zebrafish [HIGH][24].
- **The realistic target is well-timed, category-appropriate, partner-aware exchange rather than translation.** None of these circuits encodes meaning in a decodable form [HIGH][12][13][15]. Generative models of marmoset calls (GmSLM, see New leads) could supply plausible output signals, but producing calls is a different problem from understanding them.

## Open questions

1. **Cricket-like or fly-like architecture?** Which generalizes for temporal pattern recognition: the cricket's compact delay-line detector or the fly's interconnected, non-hierarchical network? Does fly wiring contain a delay-plus-coincidence motif [9][11]?
2. **Shared timing for turn-taking?** Is turn-taking timed by a shared inhibitory mechanism in finch HVC [6], singing-mouse OMC [5] and marmoset frontal cortex [19]? Is there anything comparable in fly song that responds to female feedback?
3. **Identity matching in vertebrates?** MICrONS co-registered imaging and EM in one cortical volume [26]. Can the zebrafish social-motion neurons [24] be matched to the Fish-X whole-brain reconstruction [25]?
4. **What does inter-brain correlation mean?** It depended on a shared social environment [12] and was absent during trained vocalizations [13]. Does it reflect information exchange or shared context?
5. **Artificial partners.** Do animals represent a human or robotic partner the way they represent a conspecific? No audited source addresses this.
6. **Pre-call signals and self versus other.** Are the signals that precede calls [16][18] a general corollary-discharge motif that can be read in real time? How does an animal tell its own signal from a partner's? The cricket corollary-discharge interneuron (Poulet & Hedwig 2006) was not reviewed.
7. **Topics not reviewed (flagged by verifiers):**
   - C. elegans: male NeuroPAL coverage of CEM and the male connectome (Cook et al. 2019).
   - Drosophila species comparisons (Seeholzer et al. 2018; Ding et al. 2016/2019).
   - The conserved vertebrate hindbrain vocal generator (Bass, Gilland & Baker 2008).
   - Social-state circuits: fly P1/pC1 versus mouse MPOA/VMHvl.
   - Other animals: mosquito flight-tone matching, electric fish, ant pheromone imaging (Hart et al. 2023).
8. **How far does wiring predict function?** A verifier flagged C. elegans signal-propagation mapping (Randi et al. 2023), where the wiring diagram did not predict many functional connections, and the neuropeptide connectome (Ripoll-Sánchez et al. 2023). Neither was audited. Learned vocal exchange cannot be modeled with the fly's innate song.
9. **Replication.** Most of the mouse evidence comes from the Tschida, Mooney and Wang labs, and most of the bat evidence from the Yartsev and Ulanovsky labs. The marmoset labeling result now has a published critique and reply. Other follow-up and replication work was not assessed.

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| Cross-species temporal-pattern detector benchmark | Fly and cricket song detectors run the same pulse-interval algorithm (delay line plus coincidence detection) despite different wiring. | Fit the cricket network model [10] (circuit from [9]) and connectome-constrained fly auditory models built from the FlyWire wiring and synapse signs in [11]. Present the same synthetic pulse trains to both and compare tuning curves with each other and with the bat colliculus category boundary measured with morphed calls [15]. | Computational, now | Reproduce cricket pulse-period tuning with the published model, then search FlyWire for an inhibitory neuron feeding a delayed excitatory neuron, both converging on one target. |
| Turn-taking playback agent for zebra finch calls | A partner whose reply latency and overlap avoidance follow the HVC inhibition results sustains more well-timed exchanges than fixed-delay or random playback. | Implement inhibition-based reply timing from [6] as a real-time call-reply agent. Compare turns, overlap rate and latency adaptation across agents. Record HVC in a subset of birds during exchanges with the agent. | Wet lab, months | Build the closed-loop rig and record baseline call exchanges between real pairs. |
| Closed-loop ascaroside dialogue in C. elegans males | ascr#8 pulses chosen from the male's own CEM activity steer mate search toward the preferred concentration more reliably than fixed exposure. | Microfluidics plus GCaMP+NeuroPAL whole-brain imaging in males [20][21]; compare against the KDK94 strain [32]. Decode CEM responses in real time and adjust ascr#8 concentration. Measure locomotion and mating, and include males with one intact CEM, which keep attraction but lose concentration preference [20]. | Wet lab, months | Check whether NeuroPAL, which codes hermaphrodite neurons, identifies male CEM, and record baseline whole-brain responses to ascr#8. |
| Closed-loop virtual conspecific in larval zebrafish, then EM matching | Dorsal-thalamus motion neurons respond more when the virtual fish's motion depends on the larva's own movements, and they have a distinctive EM input pattern. | Two-photon imaging during closed-loop versus replayed dot motion [24]. Register imaged neurons to the Fish-X whole-brain EM reconstruction [25] and trace their inputs. | Wet lab, months | Replicate the dot-motion responses, then make dot acceleration respond to tail bouts. |
| Cricket song-circuit EM connectome | The five-neuron detector sits inside a larger, unmapped network, and wiring will show how the motif is retuned across species. | Volume EM of the cricket brain and prothoracic ganglion using fly pipelines. Identify AN1 and the LN neurons by dye fill plus correlative light and EM. Test connectome-constrained models with trackball phonotaxis [9][10]. | Wet lab, years | Pilot correlative light and EM on one dye-filled LN3/LN4 pair. |
| Mouse USV-gate functional connectome | Inputs to PAG-USV→RAm carry partner information and predict when a male calls in an exchange. | Photometry or miniscope recording of PAG-USV and RAm during male–female exchanges with interactive playback [1][4][31], then targeted EM of PAG and RAm in the same animals, following MICrONS-style co-registration [26]. | Wet lab, years | Compare PAG-USV activity during live versus played-back female USVs. |

## Leads needing confirmation

**Findings not visible in the audit's search results** (source confirmed; check the full text)
- **RAm Fos map [3]:** whether the squeak-related region is caudal.
- **TRAP2 map [30]:** the rostral caudoputamen correlation with USV count.
- **Forebrain inputs [31]:** which input promotes and which suppresses USVs, and the precise amygdala subregion.
- **Singing mouse [5]:** survival of note structure after OMC inactivation.
- **Bat groups [13]:** caller discrimination, context restructuring and absent correlation during trained calls.
- **Zebrafish [24]:** the EM connectivity and ablation results, and especially "but not repulsion".
- **Honeybee [22]:** the interneuron names and the 250–300 Hz tuning.
- **Cuttlefish [23]:** the control hierarchy and low-dimensional dynamics.
- **Zebra finch [7]:** the ~6 ms burst duration.
- **H01 [27]:** the 4×4×33 nm resolution and the epilepsy-surgery origin.
- **Cricket model [10]:** "every known phenotype" is stronger than the visible text.
- **C. elegans [20]:** the hermaphrodite response.

**Citation details to complete**
- Authors for [18] (PubMed 40250436), [19] (PubMed 39317185; Li J, Aoi MC, Miller CT unconfirmed) and [25].
- [3]: volume, issue and article number; the earlier eneuro.org link did not appear in search results.
- [4]: only Park, Choi and Takatoh were visible; the rest of the author list and the issue number come from verifier recall.
- [2]: volume and pages were not visible.
- [7]: cite the erratum (nature01221) with the paper.
- [21]: cite [32] for KDK94 and a separate source for "at least six labs" (probably the 2025 pooling study in New leads).

**Researcher statements with no claim behind them** [LOW]
- The role of ASK (and ascr#3) in male pheromone sensing.
- Complete connectomes for both C. elegans sexes.
- The species ranking.
- The pIP10/P1 and ventral-nerve-cord analogies.
- No whole mouse-brain connectome timeline before 2030; no whole-brain NeuroPAL pheromone study.

**Round-1 references not audited.** The researcher also supplied datasets and secondary references: the cricketnet model code, the bat colliculus two-photon dataset, the Carollia pre-vocal data on G-Node, a second 2025 larval zebrafish connectomic preprint, an Area X (songbird basal ganglia) connectome, an eLife model of inter-brain correlation, and a bat hippocampus study reporting representation of human experimenters. The audit did not check them, so they are omitted from Sources; their links are in the round-1 version of this file in git history.

## New leads from live search (2025-2026)

Found by the live auditor and not independently verified.

- [MED] **Vocal labeling of others by nonhuman primates: A response to Jaakkola (2025)** -- Learning & Behavior, 2025. The marmoset vocal-labeling result has a published critique by Jaakkola (2025) and a reply by the original authors, so the interpretation is contested in print. It gives a specific citation for the "debated" caveat on [17]. https://link.springer.com/article/10.3758/s13420-025-00682-3
- [MED] **GmSLM: Generative Marmoset Spoken Language Modeling** -- arXiv, 2025. A generative spoken-language model of marmoset vocalizations; details were not checked beyond the title. Relevant to producing signals back to animals; the track has no generative-modeling claims. https://arxiv.org/pdf/2509.09198
- [MED] **Hippocampal coding of identity, sex, hierarchy, and affiliation in a social group of wild fruit bats** -- Ray S, Yona I, ..., Ulanovsky N -- Science 387(6733):eadk9385, 2025; audited in Track 07 [17]. Extends social place-cell work [14] to naturalistic group social cognition, with single-neuron readouts of identity and relationships. https://www.science.org/doi/10.1126/science.adk9385
- [MED] **Cortical regulation of collective social dynamics during environmental challenge** -- authors not verified -- Nature Neuroscience, 2026. Found on a search for bat group vocal communication; known by title only, and species and design are unverified (possibly a Yartsev-lab follow-up to [12][13]). Check before citing. https://www.nature.com/articles/s41593-026-02224-0
- [MED] **Unifying community whole-brain imaging datasets enables robust neuron identification and reveals determinants of neuron position in C. elegans** -- authors and venue not verified (PubMed 39826553; the audit notes attribute it to Sprague et al.) -- 2025. Pools NeuroPAL whole-brain datasets from multiple labs; the probable source of the "at least six labs" statement under [21]. https://pubmed.ncbi.nlm.nih.gov/39826553/

## Claims dropped in verification

No claim was dropped (0 of 31), in round 1 or in the live audit. The statements below were removed or narrowed.

**Narrowed in round 1 (still accurate)**
- Mouse PAG: "different midbrain gates" for different call types. The squeak gate was not identified.
- Singing mouse: "separate brain areas produce the notes." The downstream generator was inferred, not identified.
- Zebra finch HVC(RA): "~10 ms bursts" and "underlies song timing." The usual figure is about 6 ms, and the timing role is a proposal.
- Drosophila auditory network: Clemens as an author, and the cricket contrast as a finding. The author was wrong, and the contrast is synthesis.
- Marmoset labels stated as fact. The evidence is single-lab and classifier-based.
- C. elegans CEM: hermaphrodites avoid ascr#8, and CEM removal "abolishes" attraction. The live audit has since shown that one intact CEM preserves attraction and only the concentration preference is lost; the hermaphrodite response remains unconfirmed.
- NeuroPAL: the "six labs" count and KDK94 attributed to the 2021 paper. Neither is in it.
- Zebrafish thalamus: imaged neurons also activated by a real conspecific. This was never confirmed.
- Zebrafish EM: "builds on earlier synapse-resolution whole-brain EM." That earlier volume was mostly not at synaptic resolution.
- H01: "a previously unrecognized neuronal class." Overstated.
- BRAIN CONNECTS: 40–50 microscopes needed for a whole mouse brain in 5 years. Unsourced extrapolation.

**Corrected in round 1**
- Inter-brain correlation was credited to Rose 2021. It is Zhang & Yartsev 2019.
- Reiter 2018 was described as a recording of communication. It infers motor-neuron activity statistically; no neurons were recorded.
- A whole-brain NeuroPAL pheromone study was cited. None was found.
- The title of the 2015 cricket paper was wrong. Corrected.

**Corrected or narrowed by the live audit**
- Marmoset frontal cortex: "population activity decreases during call production and differs between conversational and spontaneous calling" was not visible in the source. The claim now states the paper's main GLM finding of distributed coding.
- RAm Fos: "almost completely distinct" became "largely nonoverlapping"; the caudal location of the squeak region is unconfirmed.
- Zebrafish EM: "2025 preprints" became one preprint (Fish-X), now described by its size and labeling.
- Xenopus: "vocal motor nucleus (VMN)" became n.IX–X. Details that DTAM lesions abolish calling and that 5-HT2C receptors are involved come from later Yamaguchi-lab papers (2009–2010), not the 2007 study.
- Drosophila auditory cell types: ">20, count not confirmed" resolves to 24 in the audit's results.

**Changed in the cross-track consistency check**
- Marmoset vocal labeling [17]: lowered from HIGH to MED to match Track 07 [9], whose audit saw the classifier and playback details only indirectly.
- The 2025 wild fruit bat hippocampus lead now carries the citation audited in Track 07 [17].

## Sources

1. A Specialized Neural Circuit Gates Social Vocalizations in the Mouse -- Tschida K, Michael V, Takatoh J, Han BX, Zhao S, Sakurai K, Mooney R, Wang F -- Neuron 103(3):459-472.e4, 2019 -- https://pubmed.ncbi.nlm.nih.gov/31204083/
2. Midbrain neurons important for the production of mouse ultrasonic vocalizations are not required for distress calls -- Ziobro P, Woo Y, He Z, Tschida K -- Current Biology 34(5):1107-1113.e3, 2024 -- https://www.sciencedirect.com/science/article/pii/S0960982224000162
3. Production of Mouse Ultrasonic Vocalizations and Distress Calls Is Associated with Different Patterns of Fos Expression in the Nucleus Retroambiguus -- Ziobro P*, Zheng D-J*, ..., Tschida K (*co-first) -- eNeuro (published 17 Aug 2026; volume, issue and article number unconfirmed; preprint bioRxiv 10.64898/2026.03.18.712517), 2026 -- https://pmc.ncbi.nlm.nih.gov/articles/PMC13484922/
4. Brainstem control of vocalization and its coordination with respiration -- Park J, Choi S, Takatoh J, Zhao S, Harrahill A, Han BX, Wang F (author list from verifier recall; first three confirmed) -- Science 383(6687):eadi8081, 2024 -- https://www.science.org/doi/10.1126/science.adi8081
5. Motor cortical control of vocal interaction in neotropical singing mice -- Okobi DE Jr, Banerjee A, Matheson AMM, Phelps SM, Long MA -- Science 363(6430):983-988, 2019 -- https://pubmed.ncbi.nlm.nih.gov/30819963/
6. Inhibition within a premotor circuit controls the timing of vocal turn-taking in zebra finches -- Benichov JI, Vallentin D -- Nature Communications 11:221, 2020 -- https://www.nature.com/articles/s41467-019-13938-0
7. An ultra-sparse code underlies the generation of neural sequences in a songbird -- Hahnloser RHR, Kozhevnikov AA, Fee MS -- Nature 419:65-70 (erratum: nature01221), 2002 -- https://www.nature.com/articles/nature00974
8. EM connectomics reveals axonal target variation in a sequence-generating network -- Kornfeld J, Benezra SE, Narayanan RT, Svara F, Egger R, Oberlaender M, Denk W, Long MA -- eLife 6:e24364, 2017 -- https://elifesciences.org/articles/24364
9. An auditory feature detection circuit for sound pattern recognition -- Schöneich S, Kostarakos K, Hedwig B -- Science Advances 1(8):e1500325, 2015 -- https://www.science.org/doi/10.1126/sciadv.1500325
10. A small, computationally flexible network produces the phenotypic diversity of song recognition in crickets -- Clemens J, Schöneich S, Kostarakos K, Hennig RM, Hedwig B -- eLife 10:e61475, 2021 -- https://elifesciences.org/articles/61475
11. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, et al., Murthy M -- Current Biology 32(15):3317-3333.e7, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
12. Correlated Neural Activity across the Brains of Socially Interacting Bats -- Zhang W, Yartsev MM -- Cell 178(2):413-428.e22, 2019 -- https://pubmed.ncbi.nlm.nih.gov/31230710/
13. Cortical representation of group social communication in bats -- Rose MC, Styr B, Schmid TA, Elie JE, Yartsev MM -- Science 374(6566):eaba9584, 2021 -- https://www.science.org/doi/10.1126/science.aba9584
14. Social place-cells in the bat hippocampus -- Omer DB, Maimon SR, Las L, Ulanovsky N -- Science 359(6372):218-224, 2018 -- https://www.science.org/doi/10.1126/science.aao3474
15. Spatially clustered neurons in the bat midbrain encode vocalization categories -- Lawlor J, Wohlgemuth MJ, Moss CF, Kuchibhotla KV -- Nature Neuroscience 28(5):1038-1047, 2025 -- https://www.nature.com/articles/s41593-025-01932-3
16. Neurons in the bat auditory cortex encode class and complexity of future vocalizations -- Babl SS, Röhrig D, Hechavarría JC -- Communications Biology, 2026 -- https://www.nature.com/articles/s42003-026-10319-4
17. Vocal labeling of others by nonhuman primates -- Oren G, Shapira A, Lifshitz R, Vinepinsky E, Cohen R, Fried T, Hadad GP, Omer DB -- Science 385(6712):996-1003, 2024 -- https://www.science.org/doi/10.1126/science.adp3757
18. Frontal-auditory cortical interactions and sensory prediction during vocal production in marmoset monkeys -- author list not verified (PubMed 40250436) -- Current Biology, 2025 -- https://www.sciencedirect.com/science/article/pii/S0960982225003938
19. Representing the dynamics of natural marmoset vocal behaviors in frontal cortex -- authors to verify (Miller CT lab) -- Neuron (PubMed 39317185; bioRxiv 2024.03.17.585423), 2024 -- https://www.cell.com/neuron/fulltext/S0896-6273(24)00644-5
20. Contrasting responses within a single neuron class enable sex-specific attraction in Caenorhabditis elegans -- Narayan A, Venkatachalam V, Durak O, Reilly DK, Bose N, Schroeder FC, Samuel ADT, Srinivasan J, Sternberg PW -- PNAS 113(10):E1392-E1401, 2016 -- https://www.pnas.org/doi/10.1073/pnas.1600786113
21. NeuroPAL: A Multicolor Atlas for Whole-Brain Neuronal Identification in C. elegans -- Yemini E et al., Hobert O -- Cell 184(1):272-288.e11, 2021 -- https://www.sciencedirect.com/science/article/pii/S0092867420316822
22. Interneurons in the Honeybee Primary Auditory Center Responding to Waggle Dance-Like Vibration Pulses -- Ai H, Kai K, Kumaraswamy A, Ikeno H, Wachtler T -- Journal of Neuroscience 37(44):10624-10635, 2017 -- https://www.jneurosci.org/content/37/44/10624
23. Elucidating the control and development of skin patterning in cuttlefish -- Reiter S, Hülsdunk P, Woo T, Lauterbach MA, Eberle JS, Akay LA, Longo A, Meier-Credo J, Kretschmer F, Langer JD, Kaschube M, Laurent G -- Nature 562(7727):361-366, 2018 -- https://www.nature.com/articles/s41586-018-0591-3
24. Visual recognition of social signals by a tectothalamic neural circuit -- Kappel JM, Förster D, Slangewal K, Shainer I, Svara F, Donovan JC, Sherman S, Januszewski M, Baier H, Larsch J -- Nature 608:146-152, 2022 -- https://pmc.ncbi.nlm.nih.gov/articles/PMC9352588/
25. Multiplexed neuromodulatory-type-annotated whole-brain EM-reconstruction of larval zebrafish (Fish-X) -- authors to verify -- bioRxiv 10.1101/2025.06.12.659365 (v3), 2025 -- https://www.biorxiv.org/content/10.1101/2025.06.12.659365v3
26. Functional connectomics spanning multiple areas of mouse visual cortex -- The MICrONS Consortium -- Nature 640:435-447, 2025 -- https://www.nature.com/articles/s41586-025-08790-w
27. A petavoxel fragment of human cerebral cortex reconstructed at nanoscale resolution -- Shapson-Coe A, Januszewski M, Berger DR, et al., Jain V, Lichtman JW -- Science 384(6696):eadk4858, 2024 -- https://www.science.org/doi/10.1126/science.adk4858
28. Projects launch to map brain connections in mouse and macaque -- Allen Institute (news) -- Allen Institute news, 2023 -- https://alleninstitute.org/news/projects-launch-to-map-brain-connections-in-mouse-and-macaque
29. Xenopus Vocalizations Are Controlled by a Sexually Differentiated Hindbrain Central Pattern Generator -- Rhodes HJ, Yu HJ, Yamaguchi A -- Journal of Neuroscience 27(6):1485-1497, 2007 -- https://www.jneurosci.org/content/27/6/1485
30. Whole-Brain Mapping of Neuronal Activity Associated with Vocal Socialization Behaviors in Adult Mice -- Luo S-X, Chen S-Y, Kuo H-Y, Liu F-C -- eNeuro 13(5):ENEURO.0400-25.2026, 2026 -- https://pubmed.ncbi.nlm.nih.gov/42091246/
31. Circuit and synaptic organization of forebrain-to-midbrain pathways that promote and suppress vocalization -- Michael V, Goffinet J, Pearson J, Wang F, Tschida K, Mooney R -- eLife 9:e63493, 2020 -- https://elifesciences.org/articles/63493
32. Enhanced whole-brain calcium imaging and cell identification in C. elegans reveal AWCOFF neuronal responses to 2-nonanone -- Endo Y, ..., Kimura KD -- Journal of Biosciences 50:52, 2025 -- https://link.springer.com/article/10.1007/s12038-025-00518-2

## Verification ledger

| # | Claim (at most 15 words) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | Mouse PAG-USV neurons: silencing abolishes courtship USVs; activation triggers USVs without females | HIGH | confirmed | 1 |
| 2 | Ablating PAG-USV neurons blocks USVs in both sexes; squeaks persist; squeak gate unidentified | HIGH | confirmed | 2 |
| 3 | RAm Fos: USVs activate broadly, squeaks a smaller region; largely nonoverlapping | MED | corrected | 3 |
| 4 | RAmVOC neurons necessary and sufficient for vocal-cord closure and USVs; preBötzinger override | MED | confirmed | 4 |
| 5 | Singing-mouse OMC needed for rapid countersinging replies; note structure largely survives inactivation | MED | confirmed | 5 |
| 6 | Blocking HVC inhibition speeds zebra finch call replies and impairs overlap avoidance | HIGH | confirmed | 6 |
| 7 | Each HVC(RA) neuron fires one ~6 ms burst at one precise song time | HIGH | confirmed | 7 |
| 8 | HVC(RA) axons target interneurons near soma, mostly excitatory cells farther out | HIGH | confirmed | 8 |
| 9 | Cricket pulse-period selectivity from five neurons: delay line plus coincidence detector | HIGH | confirmed | 9 |
| 10 | Fitted cricket network model reproduces tuning; parameter changes yield cross-species phenotypes | HIGH | confirmed | 10 |
| 11 | Drosophila auditory cell types show pulse–sine continuum in a non-hierarchical network | HIGH | confirmed | 11 |
| 12 | Paired fruit bats show inter-brain frontal correlation that tracks and precedes interaction | HIGH | confirmed | 12 |
| 13 | Bat frontal neurons distinguish individual callers; no inter-brain correlation during trained calls | HIGH | confirmed | 13 |
| 14 | Observer bat CA1 neurons encode demonstrator's position; about half also self-position | HIGH | confirmed | 14 |
| 15 | Big brown bat colliculus neurons cluster by social versus echolocation call category | HIGH | confirmed | 15 |
| 16 | Carollia auditory cortex predicts upcoming call class and syllable count hundreds of ms ahead | MED | confirmed | 16 |
| 17 | Marmoset phee calls carry addressee-specific features; addressees respond more consistently; debated | MED | confirmed | 17 |
| 18 | Marmoset frontal-to-auditory signaling before calls predicts auditory suppression and call acoustics | MED | confirmed | 18 |
| 19 | Marmoset frontal neurons code hearing, calling and state; clusters distributed across subfields | MED | corrected | 19 |
| 20 | Male C. elegans ascr#8 attraction via CEM; opposite-sign CEM responses shape preference | HIGH | confirmed | 20 |
| 21 | NeuroPAL color-codes every hermaphrodite neuron; six-labs and KDK94 statements cited separately | MED | confirmed | 21, 32 |
| 22 | Honeybee auditory interneurons respond distinctly to dance-like vibration; two parallel pathways | HIGH | confirmed | 22 |
| 23 | Cuttlefish chromatophore tracking infers motor-neuron activity and a hierarchy of control | HIGH | confirmed | 23 |
| 24 | Zebrafish dorsal-thalamic neurons detect fish-like motion; tectum/thalamus ablation impairs attraction | HIGH | confirmed | 24 |
| 25 | Fish-X preprint: synapse-level EM of 6 dpf larval zebrafish, >176,000 cells | MED | corrected | 25 |
| 26 | MICrONS co-registered ~75,000 imaged neurons with EM of ~1 mm³ visual cortex | HIGH | confirmed | 26 |
| 27 | H01: ~1 mm³ human temporal cortex, ~57,000 cells, 150 million synapses, 1.4 PB | HIGH | confirmed | 27 |
| 28 | BRAIN CONNECTS Allen-led project aims to image up to 10 mm³ of mouse brain | HIGH | confirmed | 28 |
| 29 | Xenopus calls from sexually differentiated hindbrain CPG (DTAM, n.IX–X); fictive calls in vitro | MED | corrected | 29 |
| 30 | TRAP2/c-Fos during male courtship USVs: consistent caudal PAG activation | MED | confirmed | 30 |
| 31 | Mouse forebrain-to-PAG inputs include USV-promoting (preoptic) and suppressing (amygdala) pathways | MED | confirmed | 31 |
