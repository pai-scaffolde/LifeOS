# Track 07 -- AI for decoding animal communication: state of the field, 2024-2026

*Interspecies Communication Research Program · 2026-09-25 · 30 claims kept of 30 checked (22 verified / 5 corrected / 0 conflict / 3 unverified) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

> **Verification limits.** Both verifiers worked without live web access (search budget exhausted; fetches blocked), so verdicts rest on their own knowledge to about mid-2026 and no URL here was confirmed live. The 2026 items [8][15][30] could not be checked. One detail inside corrected claim [28] is disputed between verifiers and tagged [CONFLICT]. Re-run this track with a fresh search budget before citing it outside the team.
>
> **Fly vs bat.** "Fruit fly" is *Drosophila melanogaster*; "fruit bat" is the Egyptian fruit bat, *Rousettus aegyptiacus*. Their results are kept separate throughout.

## Bottom line

- No AI system from 2024-2026 has decoded the meaning of an animal's signals. Machine learning has delivered annotation at scale [HIGH][1][21][22][23], statistical structure in repertoires such as sperm whale codas [HIGH][3][4], and evidence that calls carry information about caller, context and addressee [HIGH][11][13][17].
- Evidence about meaning has come from tests on the receiver, not from larger models. Zebra finches in an operant task confused calls that shared a meaning but sounded different, not calls that sounded alike but meant different things [HIGH][9]; elephant and marmoset addressee findings were backed by playbacks [HIGH][11][13].
- Headline "translation" and "language" claims outrun the evidence. DolphinGemma predicts the next sound and has no published evaluation [HIGH][5]; sperm whale "alphabet" and "vowels" are structure from one program, untested on listeners [HIGH][3][4]; marmoset "names" have a published alternative explanation [MED][12]; bonobo compositionality faces an unverified 2026 reanalysis (full-permutation p = 0.26) [LOW][15].
- Neurons that "light up" for communication have been recorded in fruit flies (song-evoked activity in 33 of 36 central-brain regions [HIGH][25]; male pC1 tuning to song timing that matches behaviour [MED][28]), Egyptian fruit bats (frontal cortex coding which group member is calling [HIGH][18]) and zebra finch premotor neurons (song synthesised from activity [HIGH][20]). None of the AI audio models use neural data [HIGH][1][5].
- The fruit fly is the most tractable system for grounding meaning in identified neurons: a population model of female auditory neurons predicts how females slow down to song [HIGH][27], and optogenetic activation of the descending pair pIP10 shifts males between behaviourally inferred song states [MED][24]. There is no AI "translation" of fly song.
- Proposed milestone: a pre-registered, multi-turn, closed-loop exchange in which an artificial agent chooses its signal from the animal's last signal, and its reply produces a predicted, receiver-specific change in identified neurons and behaviour that beats shuffled and acoustically matched controls. Drosophila is the realistic first system, then zebra finches or Egyptian fruit bats (program proposal built on [9][18][24][27]).
- The 2026 Coller-Dolittle prize [8], the PeerJ bonobo reanalysis [15] and the Topoi ethics paper [30] are unconfirmed [LOW]; only the bonobo caveat depends on them.

## What the evidence shows

### 1. Annotation and representation tools

*Evidence type: software and benchmarks validated against human labels.*

DAS uses a temporal convolutional network to annotate raw audio sample by sample and was validated on Drosophila pulse and sine song, mouse ultrasonic vocalizations and Bengalese finch song [HIGH][21]; one verifier notes its low latency suits closed-loop playback [MED][21]. SongExplorer, a browser-based deep-learning workflow, outperformed heuristic segmenters and matched two expert annotators, mainly on Drosophila song [HIGH][22]. DeepSqueak runs a Faster-RCNN detector on spectrogram images to classify rodent ultrasonic vocalizations [HIGH][23]. DAS author Jan Clemens is also on the 2025 Coller-Dolittle nightingale finalist team, linking fly song annotation to interactive bird playback [MED][10][21].

NatureLM-audio pairs a BEATs audio encoder with a Llama-3.1-8B-Instruct backbone, answers natural-language prompts about animal audio zero-shot, reported state-of-the-art zero-shot classification of unseen species, and was released with weights, code and benchmark data [HIGH][1]. Those results are on Earth Species Project's own test-only benchmark, BEANS-Zero, which adds call-type, life-stage, captioning and individual-counting tasks [MED][2], and the model trails supervised specialists on some tasks [MED][1]. The scores measure labelling, not understanding [MED][1][2].

*Evidence type: announcement, no published evaluation.* DolphinGemma is a ~400M-parameter audio-in/audio-out model using the SoundStream tokenizer, trained on Wild Dolphin Project recordings of Atlantic spotted dolphins collected since 1985; it predicts likely next sounds and is sized for Pixel phones [HIGH][5]. Neither verifier knew of published metrics or field results [HIGH][5]. The companion CHAT system pairs synthetic whistles with objects dolphins like, hoping dolphins mimic them to request the objects; DolphinGemma is meant to speed recognition of mimics [MED][6]. CHAT is an artificial human-designed code, not decoding of natural signals, and no peer-reviewed evidence shows dolphins using it [MED][6].

### 2. Structure in repertoires: statistics without meaning

*Evidence type: statistical analysis of recorded corpora; no receiver tests.*

Sperm whale codas have combinatorial structure: rhythm and tempo can each be discretised, "rubato" (fine inter-click-interval changes relative to preceding codas) and "ornamentation" (extra clicks) vary with conversational context, and the repertoire is nearly an order of magnitude larger than previously described [HIGH][3]. "Sperm whale phonetic alphabet" is the authors' analogy; no phonemes or meanings were shown [HIGH][3]. A second analysis finds one-formant "a-coda vowels" and two-formant "i-coda vowels", orthogonal to rhythm types, recurring across individuals, used in dialogues, and argued (not demonstrated) to be actively controlled [HIGH][4]. Both come from one program's Dominica data, and recording geometry remains a possible confound for the spectral categories [MED][3][4].

Berthet et al. reported that every bonobo call type occurs in at least one compositional combination and that three combinations are "nontrivially" compositional, inferring meaning from coded context with a multiple correspondence analysis (MCA) pipeline [HIGH][14]; the tag covers the description, not the conclusion. A 2026 reanalysis reports that the pipeline flagged call-context relationships in 34.5-84.3% of randomised datasets with no true association, and that a dependence-respecting full permutation test gave Monte Carlo p = 0.2597 [LOW][15]. Wild Taï chimpanzees produce 16 two-call combinations, with four described ways a call's meaning changes when combined, inferred from context without playbacks [MED][16].

### 3. Who is calling, in what context, to whom

*Evidence type: ML classification of recorded calls, plus playback where stated.*

In Egyptian fruit bats recorded continuously for months, machine learning on ~15,000 everyday social calls recovered emitter identity, context, listener response and, partly, addressee [HIGH][17]; this is a 2016 captive-colony study dominated by aggressive interactions [HIGH][17]. Wild African savanna elephants address one another with individually specific rumbles: machine learning predicted the receiver from 469 rumbles (Amboseli and Samburu/Buffalo Springs, 1986-2022), apparently without imitation of the receiver's calls, and playback subjects responded more strongly to calls originally addressed to them [HIGH][13]. Accuracy was modest (about 27.5% vs 8% chance, per one verifier) and the "name" feature is unidentified [MED][13]. Marmoset phee calls carry receiver-specific features found by classifiers, and in real-time computer playbacks marmosets responded more accurately to calls directed at them [HIGH][11]; Jaakkola argues for at least one alternative, non-naming explanation [MED][12]. In Sarasota Bay dolphins, signature whistles are roughly half of whistles; among the rest, a 2025 preprint reports shared stereotyped types, one (NSW-A) eliciting avoidance in playbacks (possible alarm) and another (NSW-B) occurring in unexpected situations (possible "query"), both preliminary [MED][7].

### 4. Tests of meaning on the receiver

*Evidence type: operant behaviour; prize announcements; expert synthesis.*

Zebra finches trained in an operant button-press task to discriminate 11 call types made errors that tracked shared meaning rather than acoustic similarity: they confused acoustically different long- and short-distance contact calls but never confused a short contact call with an acoustically similar short alarm call [HIGH][9]. The "11 types" and "never" details come from summaries and need checking against the paper's error rates [MED][9]. No neural recording or AI model was involved [HIGH][9].

The 2025 Coller-Dolittle prize went to Sayigh's dolphin team; other finalists worked on nightingales (AI-generated whistles for interactive exchanges), cuttlefish arm-wave signs and marmosets [MED][10]. The 2026 prize reportedly went to Julie E. Elie (Theunissen Lab) for the finch work, with a lifetime award to Irene Pepperberg [LOW][8]. Both awards recognise one-way understanding [MED][8][10]. A 2023 Science Policy Forum argues that sender, receiver and context information must be integrated to generate hypotheses that then require experimental validation [MED][29]; several authors are affiliated with Earth Species Project or Project CETI [MED][29].

### 5. Where neurons light up for communication

*This answers the program lead's question; evidence type is given per result.*

**Fruit fly, listeners.** Whole-central-brain volumetric calcium imaging showed song-like stimuli evoking responses in 33 of 36 central-brain regions in both sexes, mostly tuned to courtship-song features, including regions tied to other senses and to motor control (recorded activity) [HIGH][25]. Flies were head-fixed and passively listening, and responses were mapped to regions, not identified cells [MED][25]. Imaged auditory neurons show a continuum of preferences across pulse and sine song and response timescales (recorded activity), and neurons with different preferences form a highly interconnected, non-hierarchical network (wiring only, from the connectome) [HIGH][26]. A model treating these neurons as a nonlinearly adaptive, accumulating population code predicted female locomotor responses to natural song better than linear-nonlinear models, although both fit the neural data (model prediction on recorded activity) [HIGH][27]. The modelled population is assembled from recorded cell types, not recorded simultaneously [MED][27].

**Fruit fly, males.** Calcium imaging shows pC1 responses across inter-pulse intervals (IPIs) closely matching the male's behavioural "chaining" response to song (recorded activity) [MED][28]. The IPI preference of the upstream neuron vPN1 is disputed: the corrected claim and one verifier say short IPIs, matching the species' natural interval; the other verifier and the original claim say long IPIs [CONFLICT][28]. One verifier adds that optogenetic activation of vPN1 or pC1 elicits courtship in solitary males [MED][28]. A GLM-HMM fit to courtship tracking found three latent male states, each mapping mainly female feedback cues to pulse, sine or no song differently and jointly predicting song patterning; these are model states inferred from behaviour [MED][24]. Optogenetic activation of pIP10, a descending pair previously considered song command neurons, shifted males between states (causal manipulation) [MED][24].

**Egyptian fruit bat.** Wireless frontal cortex recordings in freely communicating groups showed activity representing which group member was vocalizing; calls from same-cluster bats gave more accurate identity coding and higher brain-to-brain synchrony (recorded activity) [HIGH][18]. Hippocampal CA1 neurons in bats living in a lab cave encode the identity and sex of other bats, modulated by hierarchy and affiliation (recorded activity), a social rather than vocal result [HIGH][19].

**Zebra finch, sender side.** Realistic song can be synthesised from premotor (HVC) activity, including through a low-dimensional biomechanical syrinx model (recorded activity plus decoding); this decodes the bird's own motor output, not another animal's meaning [HIGH][20].

**The gap.** The closest to receiver-side decoding here is the fly population model, which predicts a behavioural response rather than decoding a category [HIGH][27].

### 6. Ethics

An ethics analysis argues that ML animal-translation projects carry real risks to animal communities and lists them; whether it calls them "scientifically warranted" is unconfirmed [LOW][30]. The Policy Forum also raises ethical risks [MED][29].

## Results table

| Project | Species | What was shown | Evidence | Confidence | Source # |
|---|---|---|---|---|---|
| NatureLM-audio, BEANS-Zero | Multi-taxa | Zero-shot classification, captioning | Tool, benchmark | HIGH / MED | 1, 2 |
| DAS, SongExplorer, DeepSqueak | Fly, rodents, finches | Automated song and USV annotation | Tools | HIGH | 21, 22, 23 |
| DolphinGemma, CHAT | Atlantic spotted dolphin | Next-sound prediction; synthetic-whistle interface | Announcement | HIGH / MED | 5, 6 |
| Coda structure and "vowels" | Sperm whale | Rhythm, tempo, rubato, ornamentation; formant categories | Corpus statistics | HIGH | 3, 4 |
| Compositionality | Bonobo | Context-inferred combination meanings; challenged | Observational | HIGH (as reported) / LOW (reanalysis) | 14, 15 |
| Call combinations | Chimpanzee | 16 two-call combinations | Observational | MED | 16 |
| Everyday calls | Egyptian fruit bat | Emitter, context, partly addressee | ML classification | HIGH | 17 |
| Name-like rumbles | African elephant | Receiver predictable; stronger response to own calls | ML + playback | HIGH | 13 |
| Phee-call labels | Marmoset | Receiver-specific features; selective response | ML + playback | HIGH (contested) | 11, 12 |
| Non-signature whistles | Bottlenose dolphin | Shared types; possible alarm and query | Playback (preprint) | MED | 7 |
| Call-meaning perception | Zebra finch | Confusions follow meaning, not acoustics | Operant behaviour | HIGH | 9 |

**Neural readouts**

| Neuron / cell type | Role | Species / sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| Central-brain auditory population | Song-tuned activity in 33 of 36 regions | Drosophila, F and M | Recorded activity | HIGH | 25 |
| Auditory cell types | Pulse/sine continuum; non-hierarchical network | Drosophila, mainly F | Recorded activity + wiring only | HIGH | 26 |
| Accumulating population code | Predicts female slowing to song | Drosophila, F | Model prediction | HIGH | 27 |
| pC1 (male) | IPI tuning matches chaining | Drosophila, M | Recorded activity | MED | 28 |
| vPN1 | IPI preference, direction disputed | Drosophila, M | Recorded activity | CONFLICT | 28 |
| pIP10 | Activation shifts song states | Drosophila, M | Causal manipulation + model | MED | 24 |
| Frontal cortex neurons | Identity of vocalizing group member | Egyptian fruit bat | Recorded activity | HIGH | 18 |
| CA1 social place cells | Identity and sex of other bats | Egyptian fruit bat | Recorded activity (social) | HIGH | 19 |
| HVC premotor neurons | Sufficient to synthesise song | Zebra finch, M | Recorded activity + decoding | HIGH | 20 |

## Why this matters for two-way communication with animals

1. **A reply needs to know what a signal does to the listener.** Acoustic models yield sound units, not effects. Here only operant receiver behaviour [9], playback responses [7][11][13] and recorded receiver neurons [18][25][27][28] speak to effect; a DolphinGemma-style partner [5] would emit plausible sounds with unknown consequences.
2. **The fly already has the parts for a closed loop:** fast annotation [21], a public whole-brain imaging dataset [37], identified auditory cell types with wiring [26], a receiver model that predicts behaviour [27] and a causal handle on the male's state [24]. Fly song is largely innate (researcher note [LOW]), so a fly result would validate the method, not show language.
3. **AI call taxonomies must be scored against the receiver's categories.** Acoustic similarity can mislead about meaning [9], and embedding clusters [1] will tend to recover acoustic categories.
4. **Controls decide credibility.** If the bonobo reanalysis holds [15], context-association pipelines produce frequent false positives; conversation claims need dependence-aware nulls, shuffled and acoustically matched playback controls, and pre-registration.
5. **No two-way attempt has a published outcome** [5][6], and playing synthetic alarm-like or name-like signals to wild animals carries welfare risk [30].

## Open questions

- Do AI-derived units (coda types, "vowels", DolphinGemma tokens, NatureLM call labels) match categories receivers use? Only the finch operant work has tested this [9].
- Can "meaning" be defined as the reproducible, context-dependent change a signal causes in the receiver's identified neurons and behaviour, and tested first on connectome-identified fly cells [26][27][28]?
- Do foundation-model embeddings capture function or mainly species identity? A 2026 preprint on "limited benefit of domain-specific pretraining" was seen by title only [LOW].
- Will contested structure claims survive dependence-aware nulls and independent data [4][12][15][16]?
- Can a sender-side neural decoder [20] plus a receiver-side readout [18][25] measure information transfer per turn?
- Does neural grounding in the stereotyped fly system transfer to learned vocal systems (birds, bats, cetaceans)?
- Turn-taking and dialogue timing as an ML target (marmoset, bat, whale) was not covered, yet it is central to conversation.
- Topics the verifiers flagged as missing, not reviewed here [LOW]: humpback song statistics and a reported 2023 humpback call-exchange playback; valence decoding for welfare; interactive generative playback; Project CETI's newer models; non-acoustic signals (cuttlefish, bird gestures); dog soundboards; commercial "translator" claims; fly female-feedback song models and mapping ML-segmented song onto connectome neurons (pIP10, vPR6, TN1).
- Did the lead mean fruit fly or fruit bat? The bat line [17][18][19] may merit its own sub-track.

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Receiver-model-in-the-loop song design for Drosophila | A receiver model trained on imaged female auditory activity can pick synthetic songs that produce predicted changes in female locomotion, beating acoustically matched shuffles. | Fit population models [27] to public imaging data [37] and cell types [26]; generative song model from DAS-annotated corpora [21]; validate by preregistered playback under imaging. | Computational now | Reproduce the accumulation-model fit and score natural vs pulse/sine-shuffled songs by predicted female slowing. |
| 2. Closed-loop "virtual female" dialogue to steer male song states | An artificial partner choosing feedback from the male's last bout can reliably drive song-state transitions [24]. | Real-time DAS segmentation, GLM-HMM state inference, policy driving a robotic or optogenetic female; yoked and random controls; pIP10 manipulation. | Wet-lab, months | Benchmark DAS latency for real-time pulse/sine detection (target under 50 ms). |
| 3. Receiver-confusion benchmark for AI call taxonomies | AI clusters matching receivers' operant confusions predict playback responses better than acoustic clusters. | Adapt the finch paradigm [9]; compare NatureLM-audio [1], Perch 2.0 [33] and DAS clusters to finch confusion matrices; extend to bats [17]. | Wet-lab, months | Computational pilot on published finch confusions (data availability unconfirmed). |
| 4. Null-model audit of animal "semantics" claims | Some compositionality, addressee and "vowel" findings will fail dependence-aware nulls; playback-backed ones will survive. | Toolkit re-running published pipelines on permuted and simulated data; apply to elephant [38] and bat [39] data. | Computational now | Reimplement the full-permutation MCA test [15] and apply it to the elephant classifier [13]. |
| 5. Connectome-simulated ground truth | In a connectome-constrained fly simulation with known meanings, acoustics-only methods recover structure but not meaning. | FlyWire/BANC-constrained models (track 05); compare next-token models, clustering and receiver-supervised decoders. | Computational now | Define 3-4 ground-truth meanings in an existing model and generate labelled data. |
| 6. Neural grounding of bat "addressee" calls | A call addressed to a group member activates the listener's identity code for that member even in its absence. | Addressee classification [17] plus wireless CA1 or frontal recordings [18][19] during colony playback. | Wet-lab, years | Test whether addressee identity is decodable from existing colony recordings with modern embeddings. |

## Leads needing confirmation

- 2026 Coller-Dolittle prize to Elie and Pepperberg lifetime award [LOW][8]; the finch science rests on [9] regardless.
- PeerJ bonobo reanalysis: numbers, article number and authors unconfirmed; check for a reply by Berthet et al. [LOW][15].
- Topoi ethics paper: authors, venue and stance unconfirmed [LOW][30].
- vPN1 IPI tuning, short vs long [CONFLICT][28]; check before any fly playback design relies on it.
- vPN1/pC1 optogenetic activation eliciting courtship, one verifier only [MED][28].
- Female pC1 persistent state (Deutsch et al. 2020 preprint, title only, no URL; track 02) and pC2l-to-pIP10 pathway (search summaries only; track 01) [LOW].
- Figures to check: sperm whale "order of magnitude" [MED][3]; Open Mind venue and "used in dialogues" [MED][4]; elephant 27.5% accuracy [MED][13]; finch "11 types" and "never" [MED][9]; SongExplorer substrate vibrations [MED][22]; "motor control" regions [MED][25]; PNAS venue [MED][27].
- Titles seen only: Perch 2.0 [33], Dolph2Vec [40], GmSLM [41] [LOW]. Luke Rendell's reported "nothing of the sort" remark on the "alphabet", outlet not captured [LOW].
- Peer-review status of the nightingale AI interaction work [MED][10]; the DolphinGemma blog path, which verifiers recall differently [MED][5].

## Claims dropped in verification

No claim was dropped outright. Removed or changed elements:

- T07-12: a 2025 author reply rejecting vocal accommodation, removed; no source for it was found.
- T07-16: the ">12,000 calls" corpus size, removed; unconfirmed and possibly at odds with earlier Taï counts of about 4,300 utterances.
- T07-07: "about half of whistles" reassigned to signature whistles; shared non-signature types are a subset of the rest.
- T07-28: "vPN1 prefers long IPIs", reversed by one verifier and upheld by the other; now [CONFLICT].
- T07-24: the unnamed "command pair" (P1/pC1 candidates) resolved to pIP10; evidence relabelled as model prediction plus causal manipulation.
- T07-26: pC1 as an example neuron, dropped as unsupported.
- T07-10: Sayigh's team upgraded from finalist to 2025 winner.
- Researcher summary: the 2026 prize as "the clearest case" re-based on the peer-reviewed paper [9].

## Sources

1. NatureLM-audio: an Audio-Language Foundation Model for Bioacoustics -- Robinson D, Miron M, Hagiwara M, Pietquin O -- arXiv 2411.07186; ICLR 2025, 2024 -- https://arxiv.org/abs/2411.07186
2. EarthSpeciesProject/BEANS-Zero (introduced in Robinson D et al., NatureLM-audio, arXiv 2411.07186 / ICLR 2025) -- Earth Species Project -- Hugging Face, 2025 -- https://huggingface.co/datasets/EarthSpeciesProject/BEANS-Zero
3. Contextual and combinatorial structure in sperm whale vocalisations -- Sharma P, Gero S, Payne R, Gruber DF, Rus D, Torralba A, Andreas J -- Nature Communications 15:3617, 2024 -- https://www.nature.com/articles/s41467-024-47221-8
4. Vowel- and Diphthong-Like Spectral Patterns in Sperm Whale Codas -- Beguš G et al. -- Open Mind (MIT Press), 2025 -- https://direct.mit.edu/opmi/article/doi/10.1162/OPMI.a.252/133906/Vowel-and-Diphthong-Like-Spectral-Patterns-in
5. DolphinGemma: How Google AI is helping decode dolphin communication -- Google (Herzing D / WDP; Starner T / Georgia Tech) -- Google Keyword blog, 14 April 2025 -- https://blog.google/innovation-and-ai/products/dolphingemma/
6. Google Introduces DolphinGemma to Support Dolphin Communication Research (secondary to [5]) -- InfoQ -- InfoQ, 2025 -- https://www.infoq.com/news/2025/05/dolphin-gemma-google/
7. First evidence for widespread sharing of stereotyped non-signature whistle types by wild dolphins -- Sayigh LS et al. -- bioRxiv preprint, 2025 -- https://www.biorxiv.org/content/10.1101/2025.04.21.647658v1
8. Scientists win US$100,000 in 2026 Coller Dolittle prize for latest step forward in interspecies communication research -- Jeremy Coller Foundation -- Press release, 2026 -- https://www.jeremycollerfoundation.org/news-and-insights/press-releases/scientists-win-us100-000-in-2026-coller-dolittle-prize
9. Categorical and semantic perception of the meaning of call types in zebra finches -- Elie JE, Theunissen FE et al. -- Science, 2025 -- https://www.science.org/doi/10.1126/science.ads8482
10. Finalists announced for Coller Dolittle challenge to decode animal communication -- NCCR Evolving Language -- NCCR Evolving Language news, 2025 -- https://evolvinglanguage.ch/finalists-announced-for-coller-dolittle-challenge-to-decode-animal-communication/
11. Vocal labeling of others by nonhuman primates -- Oren G, ..., Omer DY -- Science 385(6712):996-1003, 2024 -- https://www.science.org/doi/10.1126/science.adp3757
12. Do marmosets really have names? -- Jaakkola K -- Learning & Behavior (online late 2024; issue 2025), doi:10.3758/s13420-024-00662-z, 2025 -- https://link.springer.com/article/10.3758/s13420-024-00662-z
13. African elephants address one another with individually specific name-like calls -- Pardo MA, Fristrup K, Lolchuragi DS, Poole JH, Granli P, Moss C, Douglas-Hamilton I, Wittemyer G -- Nature Ecology & Evolution 8:1353-1364, 2024 -- https://www.nature.com/articles/s41559-024-02420-w
14. Extensive compositionality in the vocal system of bonobos -- Berthet M, Surbeck M, Townsend SW -- Science 388(6742/6743):104-108, doi:10.1126/science.adv1170, 2025 -- https://www.science.org/doi/10.1126/science.adv1170
15. Structure without semantics: no evidence for bonobo compositionality in Berthet et al. (2025) -- Authors not captured -- PeerJ 14:e21651, 2026 -- https://peerj.com/articles/21651/
16. Versatile use of chimpanzee call combinations promotes meaning expansion -- Girard-Buttoz C, ..., Crockford C -- Science Advances, 2025 -- https://www.science.org/doi/10.1126/sciadv.adq2879
17. Everyday bat vocalizations contain information about emitter, addressee, context, and behavior -- Prat Y, Taub M, Yovel Y -- Scientific Reports 6:39419, 2016 -- https://www.nature.com/articles/srep39419
18. Cortical representation of group social communication in bats -- Rose MC, Styr B, Schmid TA, Elie JE, Yartsev MM -- Science 374:eaba9584, 2021 -- https://www.science.org/doi/abs/10.1126/science.aba9584
19. Hippocampal coding of identity, sex, hierarchy, and affiliation in a social group of wild fruit bats -- Ray S, ..., Ulanovsky N -- Science, 2025 -- https://www.science.org/doi/10.1126/science.adk9385
20. Neurally driven synthesis of learned, complex vocalizations -- Arneodo EM, Chen S, Brown DE, Gilja V, Gentner TQ -- Current Biology 31(15):3419-3425, 2021 -- https://www.cell.com/current-biology/fulltext/S0960-9822(21)00733-8
21. Fast and accurate annotation of acoustic signals with deep neural networks -- Steinfath E, Palacios-Muñoz A, Rottschäfer JR, Yuezak D, Clemens J -- eLife 10:e68837, 2021 -- https://elifesciences.org/articles/68837
22. SongExplorer: A deep learning workflow for discovery and segmentation of animal acoustic communication signals -- Arthur BJ, Ding Y, ..., Turaga SC, Stern DL -- bioRxiv; Janelia publication page, 2021 -- https://www.janelia.org/publication/songexplorer-a-deep-learning-workflow-for-discovery-and-segmentation-of-animal-acoustic
23. DeepSqueak: a deep learning-based system for detection and analysis of ultrasonic vocalizations -- Coffey KR, Marx RG, Neumaier JF -- Neuropsychopharmacology 44(5):859-868, 2019 -- https://pubmed.ncbi.nlm.nih.gov/30610191/
24. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience 22:2040-2049, 2019 -- https://www.nature.com/articles/s41593-019-0533-x
25. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience 24:93-104, 2021 -- https://www.nature.com/articles/s41593-020-00743-y
26. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, ..., Murthy M -- Current Biology 32:3317-3333, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
27. Inferring neural population codes for Drosophila acoustic communication -- Pang R, Baker CA, Murthy M, Pillow J -- PNAS 122:e2417733122, 2025 -- https://www.pnas.org/doi/10.1073/pnas.2417733122
28. Central neural circuitry mediating courtship song perception in male Drosophila -- Zhou C, Franconville R, Vaughan AG, Robinett CC, Jayaraman V, Baker BS -- eLife 4:e08477, 2015 -- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4575990/
29. Using machine learning to decode animal communication -- Rutz C, Bronstein M, Raskin A, Vernes SC, Zacarian K, Blasi DE -- Science 381(6654):152-155, 2023 -- https://www.science.org/doi/10.1126/science.adg7314
30. Can we talk to the animals? The ethics of using machine learning to decode animal communication -- Alcantara M, Andrews K -- Topoi, 2026 -- https://link.springer.com/article/10.1007/s11245-026-10409-2

*Datasets and tools (links from the researcher's notes; not checked by verifiers)*

31. NatureLM-audio weights -- Earth Species Project -- Hugging Face, year not captured -- https://huggingface.co/EarthSpeciesProject/NatureLM-audio
32. Earth Species Project code (BEANS, NatureLM-audio) -- Earth Species Project -- GitHub, year not captured -- https://github.com/earthspecies
33. Perch 2.0: The Bittern Lesson for Bioacoustics (title only seen) -- Google DeepMind -- arXiv, 2025 -- https://arxiv.org/pdf/2508.04665
34. DAS documentation -- Clemens lab -- Project website, year not captured -- https://janclemenslab.org/das/
35. SongExplorer code -- Janelia -- GitHub, year not captured -- https://github.com/JaneliaSciComp/SongExplorer
36. VocalMat -- Authors not captured -- eLife, 2021 -- https://elifesciences.org/articles/59161
37. Whole-brain auditory imaging dataset for [25] -- Pacheco DA et al. -- Princeton Data Commons, year not captured -- https://datacommons.princeton.edu/discovery/catalog/doi-10-34770-gv6w-5351
38. Elephant rumble data for [13] -- Pardo MA et al. -- Dryad, year not captured -- https://datadryad.org/dataset/doi:10.5061/dryad.hmgqnk9nj
39. Egyptian fruit bat vocalization record for [17] (contents not inspected) -- Prat Y et al. -- Zenodo, year not captured -- https://zenodo.org/records/13435025
40. Dolph2Vec (title only seen) -- Authors not captured -- arXiv preprint, 2026 -- https://arxiv.org/pdf/2606.12503
41. GmSLM: Generative Marmoset Spoken Language Modeling (title only seen) -- Authors not captured -- arXiv preprint, 2025 -- https://arxiv.org/pdf/2509.09198
