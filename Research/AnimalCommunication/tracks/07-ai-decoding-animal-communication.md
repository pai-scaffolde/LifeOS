# Track 07 -- AI for decoding animal communication: state of the field, 2024-2026

*Interspecies Communication Research Program · 2026-09-25 · 30 claims kept of 30 · live-search audit: confirmed 29, corrected 1, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** Round 1 had one researcher, working with live web search, and two independent verifiers: one checked source fidelity and the other acted as an adversarial skeptic. The two verifiers had no web access and checked claims from their own knowledge. In round 2 a live auditor checked every claim against live web search results. A second opinion was reserved for contradicted claims, and none of this track's claims was contradicted (zero). The audit ran in two passes because of the session search cap, and the later pass checked only the claims the earlier pass had not reached. [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding itself was not directly visible, or the claim was corrected or confirmed by only one verifier. [LOW] means not located or unconfirmed, and [CONFLICT] means the checks disagree. This track has 19 [HIGH] and 11 [MED] claims and no [LOW] or [CONFLICT] claims. The one live correction fixed a citation. Several claims contain details the live results did not show; they are listed under "Leads needing confirmation".

> **Fly vs bat.** "Fruit fly" is *Drosophila melanogaster*; "fruit bat" is the Egyptian fruit bat, *Rousettus aegyptiacus*. Their results are kept separate throughout.

## Bottom line

- None of the audited 2024-2026 work shows an AI system decoding what an animal's signals mean. Machine learning has delivered annotation and classification at scale [HIGH][1][19][20][21], statistical structure in repertoires such as sperm whale codas [HIGH][2][3], and evidence that calls carry information about caller, context and addressee [HIGH][11][15], with the marmoset addressee result at [MED][9].
- Evidence about meaning has come from tests on receivers. Zebra finches in an operant task made errors that tracked shared meaning rather than acoustic similarity [HIGH][7], the work that won the 2026 Coller-Dolittle prize [MED][6]. The elephant addressee finding [HIGH][11] and the Sarasota dolphin whistle functions [HIGH][5] rest on playbacks.
- Headline "translation" and "language" claims outrun the evidence. DolphinGemma predicts likely next sounds, and the only audited source for it is a company announcement [HIGH][4]. The sperm whale "phonetic alphabet" and "vowels" are statistical structure from one program's Dominica recordings [HIGH][2][3]. Marmoset "names" [MED][9] face a published alternative explanation [HIGH][10], and a reply has since appeared (new lead). Bonobo compositionality [HIGH][12] is contested by a 2026 PeerJ reanalysis whose dependence-aware permutation test was non-significant (Monte Carlo p = 0.2597) [MED][13].
- Neurons that respond to communication signals have been recorded in fruit flies (song-evoked responses in 33 of 36 central-brain regions [HIGH][23]; in males, vPN1 preferring short inter-pulse intervals and pC1 tuning that matches chaining behaviour [MED][26]), Egyptian fruit bats (frontal cortex coding the identity of the calling group member [HIGH][16]) and zebra finch premotor neurons (song synthesised from activity [HIGH][18]). The AI audio models in this track are trained on recordings and text, without neural data [HIGH][1][4].
- The fruit fly is the most tractable system for grounding meaning in identified neurons. A population model of auditory neurons predicts female locomotor responses to song [HIGH][25], imaging combined with connectome anatomy maps the auditory network [HIGH][24], and optogenetic activation of the descending pair pIP10 shifts males between behaviourally inferred song states [MED][22]. The audited work contains no AI "translation" of fly song.
- Proposed milestone: a pre-registered, multi-turn, closed-loop exchange in which an artificial agent chooses its signal from the animal's last signal, and its reply produces a predicted, receiver-specific change in identified neurons and behaviour that beats shuffled and acoustically matched controls. Drosophila is the realistic first system, then zebra finches or Egyptian fruit bats (program proposal built on [7][16][22][25]).
- The live audit confirmed the three 2026 items that round 1 could not check: the Coller-Dolittle prize to Elie [MED][6], the PeerJ bonobo reanalysis [MED][13] and the Topoi ethics analysis [MED][28]. It lowered the marmoset vocal-labelling study to [MED][9], because its details were seen only indirectly. The round-1 dispute over vPN1 tuning is resolved in the ledger as short intervals at [MED][26], although live results did not show the tuning itself.

## What the evidence shows

### 1. Annotation and representation tools

*Evidence type: software and benchmarks validated against human labels.*

DAS (Deep Audio Segmenter) uses a temporal-convolutional network to annotate acoustic signals sample by sample from raw audio. It was validated on Drosophila courtship song (pulse and sine), mouse ultrasonic vocalizations and Bengalese finch song [HIGH][19]. SongExplorer is a browser-based deep-learning workflow for discovering, annotating and segmenting animal acoustic signals, including substrate vibrations. It is more accurate than heuristic segmenters and about as accurate as two expert human annotators, and it allows rapid detection of song types in new species and of new song types in well-studied ones [HIGH][20]. In the audit's results it was still a bioRxiv preprint. DeepSqueak treats spectrograms as images and uses a Faster-RCNN object detector to detect and classify rodent ultrasonic vocalizations at human quality [HIGH][21].

NatureLM-audio (Earth Species Project) is an audio-language foundation model for bioacoustics. It combines a BEATs audio encoder with a Llama-3.1-8B-Instruct backbone, answers natural-language questions about animal audio zero-shot, and reported state-of-the-art zero-shot classification of unseen species. Weights, code and benchmark data were released [HIGH][1]. It was evaluated on BEANS-Zero, ESP's test-only zero-shot benchmark for audio-language models. BEANS-Zero adds call-type prediction, life-stage classification, captioning and individual counting on top of species classification and detection [MED][1]. These scores measure how well a model labels recordings. They do not test what the signals mean to the animals.

*Evidence type: company announcement; the audited sources include no evaluation of the model.* DolphinGemma (Google with the Wild Dolphin Project and Georgia Tech, April 2025) is a ~400M-parameter audio-in/audio-out model. It uses the SoundStream tokenizer, was trained on WDP recordings of Atlantic spotted dolphins collected since 1985, and predicts likely next sounds in a sequence. It is sized to run on Pixel phones in the field [HIGH][4]. The WDP/Georgia Tech CHAT system (Cetacean Hearing Augmentation Telemetry) tries two-way interaction by pairing synthetic whistles with objects dolphins like, hoping dolphins will mimic them to request the objects. DolphinGemma is meant to speed recognition of those whistles [MED][4]. CHAT works with a human-designed whistle code rather than the dolphins' natural signals, and the audited sources report no outcome from it.

### 2. Structure in repertoires: statistics without meaning

*Evidence type: statistical analysis of recorded corpora; the audited claims include no receiver tests.*

Sperm whale codas have combinatorial structure: rhythm and tempo can each be discretised, and "rubato" (fine inter-click-interval changes relative to preceding codas) and "ornamentation" (extra clicks) vary with conversational context. The repertoire is nearly an order of magnitude larger in distinguishable codas than previously described. The authors call this a "sperm whale phonetic alphabet" [HIGH][2]. The phrase is an analogy, and the claim attributes no meaning to any coda unit. A second analysis finds discrete spectral categories in codas: one-formant "a-coda vowels" and two-formant "i-coda vowels". These are orthogonal to rhythm-based coda types, recur across individuals and are used in dialogues. The authors argue that they are actively controlled rather than artefacts of movement [HIGH][3]. Both analyses come from Project CETI work on Dominica social units. The auditor found a 2026 peer-reviewed follow-up on coda-vowel phonology (see New leads).

Berthet et al. reported that every bonobo call type occurs in at least one compositional combination. They also reported that three combinations show "nontrivial" compositionality, where one call modifies the meaning of the other. They inferred meaning from contextual features using a multiple correspondence analysis (MCA) pipeline [HIGH][12]. The tag covers what was reported, not whether the conclusion holds. A 2026 PeerJ reanalysis found that the Berthet et al. MCA pipeline flagged significant call-context relationships in 34.5-84.3% of randomised datasets with no true association. A full permutation test that respects the data's dependence structure gave a non-significant result on the original data (Monte Carlo p = 0.2597) [MED][13]. The reanalysis authors argue that the original analysis lacks dependence-aware inference and theoretically motivated feature selection. Their names did not appear in the audit's results.

Wild Taï chimpanzees (*Pan troglodytes verus*) produce at least 16 different two-call combinations, drawn from a corpus of more than 12,000 recorded calls. From associations with the observed context, the authors describe four ways a call's meaning changes in combination: adding meaning, narrowing or clarifying meaning, non-compositional creation of a new meaning, and order effects. The meanings are inferred from context without playback tests, so the semantic interpretations remain hypotheses [MED][14].

### 3. Who is calling, in what context, to whom

*Evidence type: ML classification of recorded calls, plus playback where stated.*

Egyptian fruit bats (not fruit flies) were monitored around the clock with audio and video for months. Machine learning on ~15,000 everyday social vocalizations recovered the emitter's identity, the behavioural context, the listener's response and, partly, the call's addressee [HIGH][15]. This was a 2016 study of a captive colony, and the audit's results describe it as 22 bats recorded over 75 days.

Wild African savanna elephants address one another with individually specific rumbles. Machine learning predicted the receiver from a call's acoustic structure (469 rumbles, Amboseli and Samburu/Buffalo Springs, 1986-2022), apparently without imitation of the receiver's own calls. In playbacks, elephants responded more strongly (calling back or approaching) to calls originally addressed to them [HIGH][11]. Receiver prediction was above chance but modest, at about 27.5% accuracy.

Marmosets use phee calls to label specific conspecifics. Machine-learning classifiers found receiver-specific call features in natural phee-call dialogues, and in real-time computer-playback experiments marmosets responded more accurately when a call was directed at them [MED][9]. The live audit found only indirect support for the classifier and playback details. Jaakkola (Learning & Behavior; online 2024, issue 2025) argues that the Oren et al. data allow at least one alternative, non-naming explanation [HIGH][10]. Any reply by Oren and Omer needs its own citation. The auditor found a 2025 reply, listed under New leads.

Signature whistles make up roughly half of wild Sarasota Bay bottlenose dolphin whistles. Among the remaining non-signature whistles, Sayigh et al. found stereotyped types shared across many individuals. In playbacks one type (NSW-A) elicited avoidance, suggesting an alarm function, and another (NSW-B) occurred in response to unexpected situations, suggesting a "query" function. Both functions are preliminary, and the source is a 2025 bioRxiv preprint [HIGH][5]. The audit's results add that 22 shared types were found, with NSW-A produced by at least 25 dolphins and NSW-B by at least 35.

### 4. Tests of meaning on the receiver

*Evidence type: operant behaviour; prize announcements; expert synthesis.*

Zebra finches were trained in an operant button-press task to discriminate 11 call types, and their errors tracked shared meaning rather than acoustic similarity. They confused acoustically very different long- and short-distance contact calls, but never confused a short contact call with an acoustically similar short alarm call [HIGH][7]. The live results confirmed about 11 call types and the error pattern favouring meaning over acoustics. The two specific examples, including "never", were not visible and should be checked against the paper before reuse. The evidence is behavioural, and the claim involves no neural recording or AI model.

The 2026 Coller-Dolittle US$100,000 prize (Jeremy Coller Foundation and Tel Aviv University, announced 26 June 2026) went to Julie E. Elie (Theunissen Lab, UC Berkeley) for showing that zebra finches classify their calls by meaning more than by acoustics. Irene Pepperberg received a Lifetime Achievement Award for her grey parrot work [MED][6]. The 2025 finalists were:

- Sayigh (WHOI, dolphins), the eventual winner;
- Vallentin and Clemens (nightingales), with an AI model that generates and analyses whistles for interactive exchanges;
- Cohen-Bodénès and Neri (cuttlefish arm-wave signs);
- Omer and Oren (Hebrew University, marmosets) [MED][8].

Both winning projects concern understanding animal signals. The interactive nightingale work was a finalist.

An expert Science Policy Forum argues that ML advances make decoding communication in whales, crows, bats and other animals increasingly feasible. It says sender, receiver and context information must be integrated to generate hypotheses, which then require experimental validation [MED][27].

### 5. Where neurons light up for communication

*This answers the program lead's question; evidence type is given per result.*

**Fruit fly, listeners.** Whole-central-brain volumetric calcium imaging with cross-brain registration showed that song-like stimuli evoke responses in 33 of 36 major central-brain regions of *D. melanogaster*, in both sexes. Most responses were tuned to courtship-song features, including in regions tied to other senses and to motor control (recorded activity) [HIGH][23]. The flies were head-fixed and imaging was pan-neuronal, so responses are mapped to regions rather than identified cells.

Imaged auditory neurons show a continuum of preferences across courtship-song modes (pulse vs sine) and response timescales. Neurons with different preferences are highly interconnected in a network that lacks hierarchical structure. This was shown by combining activity imaging with connectome anatomy (recorded activity plus wiring) [HIGH][24]. The audit's results add that the study identified 24 new intermediate-layer auditory cell types from a connectomic resource.

Modelling fly auditory neurons as a nonlinearly adaptive, accumulating population code predicted female locomotor responses to naturally variable courtship song better than linear-nonlinear models, although both fit the neural data (model prediction on recorded activity) [HIGH][25].

**Fruit fly, males.** Calcium imaging in males shows that vPN1 neurons respond preferentially to pulse song with short inter-pulse intervals (IPIs). pC1 responses across IPIs closely match the males' behavioural chaining response. Optogenetic activation of vPN1 or pC1 in solitary males elicits courtship behaviours (recorded activity and activation) [MED][26]. The live results confirmed the male-specific aPN1-vPN1-pC1 song pathway and that inactivating vPN1 or pC1 disrupts song-induced chaining. They did not show the IPI tuning or the activation results.

A GLM-HMM fit without supervision to male-female courtship tracking data found three latent internal states in males. Each state maps sensory feedback cues, mainly from the female, to song choices (pulse, sine, no song) differently, and together the states predict moment-to-moment song patterning. These are model states inferred from behaviour, not recorded neural activity. Optogenetic activation of pIP10, a pair of descending neurons previously considered song command neurons, was sufficient to shift the male between states (causal manipulation) [MED][22]. The pIP10 result was not visible in the live results.

**Egyptian fruit bat.** Wireless neural recordings were made in the frontal cortex of groups of freely communicating bats. Activity represented the identity of the vocalizing group member, and calls from bats in the same cluster gave more accurate identity coding and higher brain-to-brain synchrony across the group (recorded activity) [HIGH][16]. Hippocampal CA1 neurons in freely behaving wild bats living as a group in a lab cave encode the identity and sex of other bats. The strength of identity coding depends on the other bat's sex, hierarchy rank and social affiliation (recorded activity) [HIGH][17]. This is a social result, not a vocal one.

**Zebra finch, sender side.** Realistic zebra finch song (pitch, amplitude and timbre) can be synthesised directly from neural activity recorded in a premotor song nucleus (HVC). One method maps activity into a low-dimensional biomechanical model of the vocal organ, the syrinx (recorded activity plus decoding) [HIGH][18]. This decodes the bird's own motor output, not another animal's meaning.

**The gap.** The closest to receiver-side decoding here is the fly population model, which predicts a behavioural response rather than decoding a category [HIGH][25].

### 6. Ethics

An ethics analysis argues that ML-based animal translation projects are scientifically warranted but carry real risks to animal communities. It lists those risks so researchers can avoid them [MED][28].

## Results table

| Project | Species | What was shown | Evidence | Confidence | Source # |
|---|---|---|---|---|---|
| NatureLM-audio, BEANS-Zero | Multi-taxa | Zero-shot classification and question answering; test-only benchmark | Tool, benchmark | HIGH / MED | 1 |
| DAS, SongExplorer, DeepSqueak | Fly, rodents, finches | Automated song and USV annotation | Tools | HIGH | 19, 20, 21 |
| DolphinGemma, CHAT | Atlantic spotted dolphin | Next-sound prediction; synthetic-whistle interface | Announcement | HIGH / MED | 4 |
| Coda structure and "vowels" | Sperm whale | Rhythm, tempo, rubato, ornamentation; spectral categories | Corpus statistics | HIGH | 2, 3 |
| Compositionality | Bonobo | Context-inferred combination meanings; challenged by reanalysis | Observational; statistical reanalysis | HIGH (as reported) / MED (reanalysis) | 12, 13 |
| Call combinations | Chimpanzee | At least 16 two-call combinations from >12,000 calls; four meaning-change routes | Observational | MED | 14 |
| Everyday calls | Egyptian fruit bat | Emitter, context, response, partly addressee | ML classification | HIGH | 15 |
| Name-like rumbles | African elephant | Receiver predictable (~27.5%); stronger response to own calls | ML + playback | HIGH | 11 |
| Phee-call labels | Marmoset | Receiver-specific features; selective response | ML + playback | MED (critique HIGH) | 9, 10 |
| Non-signature whistles | Bottlenose dolphin | Shared types; possible alarm and query | Playback (preprint) | HIGH | 5 |
| Call-meaning perception | Zebra finch | Confusions follow meaning over acoustics | Operant behaviour | HIGH | 7 |

**Neural readouts**

| Neuron / cell type | Role | Species / sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| Central-brain auditory population | Song-tuned activity in 33 of 36 regions | Drosophila, F and M | Recorded activity | HIGH | 23 |
| Auditory cell types | Pulse/sine continuum; non-hierarchical network | Drosophila, mainly F | Recorded activity + connectome anatomy | HIGH | 24 |
| Accumulating population code | Predicts female locomotor responses to song | Drosophila, F | Model prediction | HIGH | 25 |
| vPN1 | Prefers pulse song with short IPIs | Drosophila, M | Recorded activity | MED | 26 |
| pC1 (male) | IPI tuning matches chaining; activation elicits courtship | Drosophila, M | Recorded activity + activation | MED | 26 |
| pIP10 | Activation shifts song states | Drosophila, M | Causal manipulation + model | MED | 22 |
| Frontal cortex neurons | Identity of vocalizing group member | Egyptian fruit bat | Recorded activity | HIGH | 16 |
| CA1 neurons | Identity and sex of other bats | Egyptian fruit bat | Recorded activity (social) | HIGH | 17 |
| HVC premotor neurons | Sufficient to synthesise song | Zebra finch, M | Recorded activity + decoding | HIGH | 18 |

## Why this matters for two-way communication with animals

1. **A reply needs to know what a signal does to the listener.** Acoustic models yield sound units, not effects. In this track only operant receiver behaviour [7], playback responses [5][9][11] and recorded receiver neurons [16][23][25][26] speak to effect. A DolphinGemma-style partner [4] would emit plausible sounds with unknown consequences.
2. **The fly already has the parts for a closed loop:**
   - fast annotation [19];
   - whole-central-brain auditory imaging [23];
   - auditory cell types tied to connectome wiring [24];
   - a receiver model that predicts behaviour [25];
   - a male song pathway with identified neurons [26];
   - a causal handle on the male's state [22].

   A fly result would validate the method. Whether it carries over to vocal learners is a separate question.
3. **AI call taxonomies must be scored against the receiver's categories.** Acoustic similarity can mislead about meaning [7]. Clusters from embedding models such as [1] may recover acoustic categories unless they are checked against receivers.
4. **Controls decide credibility.** The bonobo reanalysis [13] reports a context-association pipeline flagging relationships in 34.5-84.3% of randomised datasets. Claims about meaning or conversation need dependence-aware nulls, shuffled and acoustically matched playback controls, and pre-registration.
5. **No two-way attempt in the audited sources reports an outcome** [4][8]. A published ethics analysis lists risks that translation projects pose to animal communities [28], and any playback of synthetic alarm-like or name-like signals to wild animals should be reviewed against that list.

## Open questions

- Do AI-derived units (coda types, "vowels", DolphinGemma tokens, NatureLM-audio call labels) match the categories receivers use? Only the finch operant work has tested this [7].
- Can "meaning" be defined as the reproducible, context-dependent change a signal causes in the receiver's identified neurons and behaviour? Could that definition be tested first on connectome-identified fly cells [24][25][26]?
- Do foundation-model embeddings capture signal function, or mainly species identity [1]?
- Will contested structure and labelling claims survive dependence-aware nulls and independent data [3][9][13][14]? The marmoset reply and the coda-vowel follow-up (New leads) are the next items to read.
- Can a sender-side neural decoder [18] plus a receiver-side readout [16][23] measure information transfer per turn?
- Does neural grounding in the fly transfer to birds, bats and cetaceans?
- Turn-taking and dialogue timing as an ML target (marmoset, bat, whale) was not covered, although it is central to conversation.
- The round-1 verifiers flagged these topics as missing; they were not reviewed or audited here:
  - humpback song statistics, and a reported 2023 humpback call-exchange playback;
  - valence decoding for welfare;
  - interactive generative playback;
  - Project CETI's newer models;
  - non-acoustic signals (cuttlefish, bird gestures);
  - dog soundboards;
  - commercial "translator" claims;
  - fly female-feedback song models, and mapping ML-segmented song onto connectome neurons (pIP10, vPR6, TN1).
- Did the lead mean fruit fly or fruit bat? The bat line [15][16][17] may merit its own sub-track.

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Receiver-model-in-the-loop song design for Drosophila | A receiver model trained on imaged female auditory activity can pick synthetic songs that produce predicted changes in female locomotion, beating acoustically matched shuffles. | Fit population models [25] to the imaging data behind [23] and the cell types in [24] (data access not checked in the audit). Build a generative song model from DAS-annotated corpora [19]. Validate by preregistered playback under imaging. | Computational now, if the imaging data are obtainable | Reproduce the accumulation-model fit and score natural vs pulse/sine-shuffled songs by predicted female locomotor response. |
| 2. Closed-loop "virtual female" dialogue to steer male song states | An artificial partner choosing feedback from the male's last bout can reliably drive song-state transitions [22]. | Real-time DAS segmentation [19] and GLM-HMM state inference [22]. A policy drives a robotic or optogenetic female. Yoked and random controls; pIP10 manipulation; vPN1/pC1 readouts [26]. | Wet-lab, months | Benchmark DAS latency for real-time pulse/sine detection (target under 50 ms). |
| 3. Receiver-confusion benchmark for AI call taxonomies | AI clusters that match receivers' operant confusions predict playback responses better than acoustic clusters. | Adapt the finch paradigm [7]. Compare NatureLM-audio [1] and DAS [19] clusters with finch confusion matrices. Extend to bats [15]. | Wet-lab, months | Computational pilot on published finch confusions (data availability unconfirmed). |
| 4. Null-model audit of animal "semantics" claims | Some compositionality, addressee and "vowel" findings will fail dependence-aware nulls; playback-backed ones will survive. | Toolkit that re-runs published pipelines on permuted and simulated data. Apply it to the elephant [11], bat [15], chimpanzee [14] and sperm whale [3] analyses (data availability not checked in the audit). | Computational now | Reimplement the full-permutation MCA test [13] and apply it to the elephant classifier [11]. |
| 5. Connectome-simulated ground truth | In a connectome-constrained fly simulation with known meanings, acoustics-only methods recover structure but not meaning. | FlyWire/BANC-constrained models (track 05). Compare next-token models, clustering and receiver-supervised decoders. | Computational now | Define 3-4 ground-truth meanings in an existing model and generate labelled data. |
| 6. Neural grounding of bat "addressee" calls | A call addressed to a group member activates the listener's identity code for that member even in its absence. | Addressee classification [15] plus wireless frontal or CA1 recordings [16][17] during colony playback. | Wet-lab, years | Test whether addressee identity is decodable from existing colony recordings with modern embeddings. |

## New leads from live search (2025-2026)

The live auditor found these while checking claims. They have not been independently verified. Each is tagged by source type: [MED] for a journal article, preprint or official project page, and [LOW] otherwise. Six leads were returned; two duplicate entries are merged below.

- [MED] **Reply to the marmoset-names critique.** "Vocal labeling of others by nonhuman primates: A response to Jaakkola (2025)". Authors were not shown in the results (presumably Oren G, Omer DY et al.). Venue is Learning & Behavior according to PubMed, though the snippet did not show it; 2025. It answers the alternative-explanation critique [10] and should be cited alongside [9] and [10]. https://pubmed.ncbi.nlm.nih.gov/40866605/
- [MED] **Sperm whale coda-vowel phonology.** "The phonology of sperm whale coda vowels". Authors were not shown (Project CETI group). Proceedings of the Royal Society B 293(2069):20252994, 2026; preprinted on bioRxiv in June 2025. A peer-reviewed follow-up to [3]; the auditor returned it twice. https://royalsocietypublishing.org/rspb/article/293/2069/20252994/481340/The-phonology-of-sperm-whale-coda-vowels
- [MED] **Dolph2Vec.** "Dolph2Vec: Self-Supervised Representations of Dolphin Vocalizations". Authors were not shown; arXiv 2606.12503, 2026. A self-supervised representation model for dolphin vocalizations, relevant beside [4] and [5]. Only the title was seen. https://arxiv.org/pdf/2606.12503
- [MED] **Diphthong-like coda patterns.** The auditor also returned the Open Mind paper already cited as [3]. In the auditor's results it reports diphthong-like patterns within a coda as well as the two coda-vowel patterns. The vowel patterns are exchanged in structured conversation and occur across rhythm-based coda types, adding a spectral layer beyond rhythm, tempo, rubato and ornamentation. https://direct.mit.edu/opmi/article/doi/10.1162/OPMI.a.252/133906/Vowel-and-Diphthong-Like-Spectral-Patterns-in
- [MED] **NatureLM-audio described as the first bioacoustic audio-language model.** The auditor returned the paper already cited as [1]. There NatureLM-audio is described as the first audio-language foundation model for bioacoustics. It set new state-of-the-art results on several tasks, including zero-shot classification of unseen species on BEANS-Zero. https://arxiv.org/abs/2411.07186

## Leads needing confirmation

- Several claims tagged [HIGH] contain details the live results did not show:
  - the "phonetic alphabet" phrase and the "order of magnitude" figure [2];
  - one- vs two-formant structure and recurrence across individuals [3];
  - the finch contact/alarm examples, especially "never" [7];
  - the elephant playback responses (calling back, approaching) [11];
  - frontal-cortex identity coding and the same-cluster effect [16];
  - how identity coding depends on sex, rank and affiliation [17];
  - SongExplorer's detection of song types in new species [20];
  - "33 of 36 regions", both sexes and song-feature tuning [23];
  - the preference continuum and the non-hierarchical network [24].
- Several claims tagged [MED] also contain details the live results did not show:
  - BEANS-Zero call-type prediction, individual counting and "test-only" status [1];
  - DolphinGemma's role in recognising mimicked whistles [4];
  - the nightingale team's AI whistle model [8];
  - the marmoset classifier and real-time playback results, supported only indirectly [9];
  - pIP10 state switching [22];
  - the Policy Forum's argument for integrating sender, receiver and context [27].
- vPN1 IPI tuning and vPN1/pC1 optogenetic activation [26]: round-1 verifiers disagreed on the IPI direction. The ledger keeps short IPIs at [MED], and live results showed neither result. Check the paper before any fly playback design relies on it.
- PeerJ bonobo reanalysis [13]: authors not captured. A Warwick repository entry appeared alongside it, but authorship is unconfirmed. Check for a reply by Berthet et al.
- Calhoun et al. [22] has an Author Correction (s41593-019-0571-4) that may need citing.
- Round 1 linked the nightingale finalist Clemens [8] to DAS author Jan Clemens [19]. The audit did not check this.
- Round-1 researcher notes listed dataset and code links that the audit did not check, so they are omitted here. Check them before projects 1, 3, 4 and 6 depend on them:
  - NatureLM-audio weights;
  - Earth Species Project code;
  - DAS documentation;
  - SongExplorer code;
  - VocalMat;
  - the whole-brain imaging dataset for [23];
  - elephant rumble data for [11];
  - a fruit bat vocalization record for [15].
- Titles seen in round 1 only and not audited: Perch 2.0 and GmSLM (generative marmoset spoken-language modelling).
- Cross-track pointers, not audited here: female pC1 persistent state (Deutsch et al. 2020 preprint; track 02) and the pC2l-to-pIP10 pathway (track 01).

## Claims dropped in verification

No claim was dropped in round 1 or in the live audit. Changes that narrowed or altered claims:

- **Sarasota dolphins:** in round 1, "about half of whistles" was reassigned to signature whistles. The shared non-signature types are a subset of the rest.
- **Chimpanzee combinations:** round 1 removed the ">12,000 calls" corpus size as unconfirmed. The live audit found it stated in the paper's results pages, so it is restored, along with the four named meaning-change routes. The audit's correction to this claim was to its citation.
- **Marmoset critique:** a round-1 statement that a 2025 author reply rejected vocal accommodation was removed for lack of a source. The auditor has since found a 2025 reply (New leads); what it argues has not been checked.
- **vPN1 tuning:** round 1 reversed the original "prefers long IPIs" to short IPIs, with one verifier dissenting. The ledger keeps short IPIs at [MED], and the earlier [CONFLICT] tag is retired.
- **Courtship states:** the unnamed "command pair" (P1/pC1 candidates) was resolved to pIP10. The evidence was relabelled as model prediction plus causal manipulation.
- **Fly auditory network:** pC1 as an example neuron was dropped as unsupported.
- **2025 prize:** Sayigh's team was upgraded from finalist to winner.
- **Researcher summary:** the 2026 prize as "the clearest case" was re-based on the peer-reviewed finch paper [7].
- **Round-1 verifier remarks the audited ledger does not carry,** removed from the text:
  - DAS latency suiting closed-loop playback;
  - NatureLM-audio trailing supervised specialists on some tasks;
  - an 8% elephant chance level and an unidentified "name" feature;
  - recording geometry as a confound for coda vowels;
  - Policy Forum author affiliations and its ethics discussion;
  - the bat corpus being dominated by aggressive interactions;
  - the fly population model being assembled from cell types not recorded simultaneously;
  - fly song being largely innate;
  - an "alphabet" remark attributed to Luke Rendell, with no outlet captured;
  - a 2026 pretraining preprint seen by title only;
  - "no published DolphinGemma metrics" as a verifier finding.

## Sources

1. NatureLM-audio: an Audio-Language Foundation Model for Bioacoustics (also introduces the BEANS-Zero benchmark, hosted at Hugging Face as EarthSpeciesProject/BEANS-Zero) -- Robinson D, Miron M, Hagiwara M, Pietquin O -- arXiv 2411.07186; ICLR 2025, 2024 -- https://arxiv.org/abs/2411.07186
2. Contextual and combinatorial structure in sperm whale vocalisations -- Sharma P, Gero S, Payne R, Gruber DF, Rus D, Torralba A, Andreas J -- Nature Communications 15:3617, 2024 -- https://www.nature.com/articles/s41467-024-47221-8
3. Vowel- and Diphthong-Like Spectral Patterns in Sperm Whale Codas -- Beguš G, Sprouse RL, Leban A, Silva M, Gero S -- Open Mind (MIT Press), doi:10.1162/OPMI.a.252, 2025 -- https://direct.mit.edu/opmi/article/doi/10.1162/OPMI.a.252/133906/Vowel-and-Diphthong-Like-Spectral-Patterns-in
4. DolphinGemma: How Google AI is helping decode dolphin communication (CHAT also reported secondarily by InfoQ, "Google Introduces DolphinGemma to Support Dolphin Communication Research", 2025) -- Google (Herzing D / WDP; Starner T / Georgia Tech) -- Google Keyword blog, 14 April 2025 -- https://blog.google/innovation-and-ai/products/dolphingemma/
5. First evidence for widespread sharing of stereotyped non-signature whistle types by wild dolphins -- Sayigh LS et al. -- bioRxiv preprint, 2025 -- https://www.biorxiv.org/content/10.1101/2025.04.21.647658v1
6. Scientists win US$100,000 in 2026 Coller Dolittle prize for latest step forward in interspecies communication research -- Jeremy Coller Foundation -- Press release, 2026 -- https://www.jeremycollerfoundation.org/news-and-insights/press-releases/scientists-win-us100-000-in-2026-coller-dolittle-prize
7. Categorical and semantic perception of the meaning of call types in zebra finches -- Elie JE, de Witasse-Thezy A, Thomas L, Malit B, Theunissen FE -- Science, 2025 -- https://www.science.org/doi/10.1126/science.ads8482
8. Finalists announced for Coller Dolittle challenge to decode animal communication -- NCCR Evolving Language (reporting the Coller/TAU announcement) -- NCCR Evolving Language news, 2025 -- https://evolvinglanguage.ch/finalists-announced-for-coller-dolittle-challenge-to-decode-animal-communication/
9. Vocal labeling of others by nonhuman primates -- Oren G, ..., Omer DY -- Science 385(6712):996-1003, 2024 -- https://www.science.org/doi/10.1126/science.adp3757
10. Do marmosets really have names? -- Jaakkola K -- Learning & Behavior (online late 2024; issue 2025), doi:10.3758/s13420-024-00662-z, 2025 -- https://link.springer.com/article/10.3758/s13420-024-00662-z
11. African elephants address one another with individually specific name-like calls -- Pardo MA, Fristrup K, Lolchuragi DS, Poole JH, Granli P, Moss C, Douglas-Hamilton I, Wittemyer G -- Nature Ecology & Evolution 8:1353-1364, 2024 -- https://pubmed.ncbi.nlm.nih.gov/38858512/
12. Extensive compositionality in the vocal system of bonobos -- Berthet M, Surbeck M, Townsend SW -- Science 388(6742/6743):104-108, doi:10.1126/science.adv1170, 2025 -- https://www.science.org/doi/10.1126/science.adv1170
13. Structure without semantics: no evidence for bonobo compositionality in Berthet et al. (2025) -- Authors not captured in search results -- PeerJ 14:e21651, 2026 -- https://peerj.com/articles/21651/
14. Versatile use of chimpanzee call combinations promotes meaning expansion -- Girard-Buttoz C et al. -- Science Advances 11(19), published 9 May 2025, doi:10.1126/sciadv.adq2879, 2025 -- https://www.science.org/doi/10.1126/sciadv.adq2879
15. Everyday bat vocalizations contain information about emitter, addressee, context, and behavior -- Prat Y, Taub M, Yovel Y -- Scientific Reports 6:39419, 2016 -- https://www.nature.com/articles/srep39419
16. Cortical representation of group social communication in bats -- Rose MC, Styr B, Schmid TA, Elie JE, Yartsev MM -- Science 374:eaba9584, 2021 -- https://www.science.org/doi/10.1126/science.aba9584
17. Hippocampal coding of identity, sex, hierarchy, and affiliation in a social group of wild fruit bats -- Ray S, Yona I, Elami N, Palgi S, Latimer KW, Jacobsen B, Witter MP, Las L, Ulanovsky N -- Science 387(6733):eadk9385 (31 Jan 2025), 2025 -- https://www.science.org/doi/10.1126/science.adk9385
18. Neurally driven synthesis of learned, complex vocalizations -- Arneodo EM, Chen S, Brown DE, Gilja V, Gentner TQ -- Current Biology 31(15):3419-3425.e5, doi:10.1016/j.cub.2021.05.035, 2021 -- https://www.cell.com/current-biology/fulltext/S0960-9822(21)00733-8
19. Fast and accurate annotation of acoustic signals with deep neural networks -- Steinfath E, Palacios-Muñoz A, Rottschäfer JR, Yuezak D, Clemens J -- eLife 10:e68837, 2021 -- https://elifesciences.org/articles/68837
20. SongExplorer: A deep learning workflow for discovery and segmentation of animal acoustic communication signals -- Arthur BJ, Ding Y, Sosale M, Khalif F, Kim E, Waddell P, Turaga SC, Stern DL -- bioRxiv 2021.03.26.437280 (preprint), 2021 -- https://www.biorxiv.org/content/10.1101/2021.03.26.437280v1
21. DeepSqueak: a deep learning-based system for detection and analysis of ultrasonic vocalizations -- Coffey KR, Marx RG, Neumaier JF -- Neuropsychopharmacology 44(5):859-868, 2019 -- https://www.nature.com/articles/s41386-018-0303-6
22. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience 22:2040-2049, 2019 -- https://www.nature.com/articles/s41593-019-0533-x
23. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience 24:93-104, 2021 -- https://www.nature.com/articles/s41593-020-00743-y
24. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, et al., Murthy M -- Current Biology 32(15):3317-3333.e7, doi:10.1016/j.cub.2022.06.019, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
25. Inferring neural population codes for Drosophila acoustic communication -- Pang R, Baker CA, Murthy M, Pillow J -- PNAS 122:e2417733122, 2025 -- https://www.pnas.org/doi/10.1073/pnas.2417733122
26. Central neural circuitry mediating courtship song perception in male Drosophila -- Zhou C, Franconville R, Vaughan AG, Robinett CC, Jayaraman V, Baker BS -- eLife 4:e08477, doi:10.7554/eLife.08477, 2015 -- https://elifesciences.org/articles/08477
27. Using machine learning to decode animal communication -- Rutz C, Bronstein M, Raskin A, Vernes SC, Zacarian K, Blasi DE -- Science 381(6654):152-155, 2023 -- https://www.science.org/doi/10.1126/science.adg7314
28. Can we talk to the animals? The ethics of using machine learning to decode animal communication -- Alcantara M, Andrews K -- Topoi, doi:10.1007/s11245-026-10409-2, 2026 -- https://link.springer.com/article/10.1007/s11245-026-10409-2

## Verification ledger

| # | Claim (at most 15 words) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | NatureLM-audio: BEATs plus Llama-3.1-8B model; zero-shot state of the art on unseen species | HIGH | confirmed | 1 |
| 2 | BEANS-Zero: test-only zero-shot benchmark adding call-type, life-stage, captioning, counting tasks | MED | confirmed | 1 |
| 3 | Sperm whale codas: rhythm, tempo, rubato, ornamentation; "phonetic alphabet"; larger repertoire | HIGH | confirmed | 2 |
| 4 | Sperm whale a- and i-coda "vowels", orthogonal to rhythm, used in dialogues | HIGH | confirmed | 3 |
| 5 | DolphinGemma: ~400M-parameter next-sound model, SoundStream tokenizer, WDP data, phone-sized | HIGH | confirmed | 4 |
| 6 | CHAT pairs synthetic whistles with objects; DolphinGemma to speed whistle recognition | MED | confirmed | 4 |
| 7 | Sarasota dolphins share non-signature whistle types; possible alarm and query functions | HIGH | confirmed | 5 |
| 8 | 2026 Coller-Dolittle prize to Elie for finch meaning; Pepperberg lifetime award | MED | confirmed | 6 |
| 9 | Zebra finch operant confusions track shared meaning rather than acoustic similarity | HIGH | confirmed | 7 |
| 10 | 2025 Coller-Dolittle finalists: Sayigh (winner), nightingales, cuttlefish, marmosets | MED | confirmed | 8 |
| 11 | Marmoset phee calls label conspecifics; classifiers and playbacks show receiver specificity | MED | confirmed | 9 |
| 12 | Jaakkola: marmoset data allow at least one non-naming explanation | HIGH | confirmed | 10 |
| 13 | Elephants address one another with individually specific rumbles; playbacks support it | HIGH | confirmed | 11 |
| 14 | Every bonobo call type in compositional combinations; three nontrivial, via MCA | HIGH | confirmed | 12 |
| 15 | Reanalysis: MCA flags 34.5-84.3% of null datasets; full permutation p = 0.2597 | MED | confirmed | 13 |
| 16 | Taï chimpanzees: at least 16 two-call combinations from >12,000 calls; four routes | MED | corrected | 14 |
| 17 | Fruit bat everyday calls encode emitter, context, response and partly addressee | HIGH | confirmed | 15 |
| 18 | Bat frontal cortex encodes caller identity; same-cluster calls give higher synchrony | HIGH | confirmed | 16 |
| 19 | Bat CA1 neurons encode others' identity and sex, modulated by rank and affiliation | HIGH | confirmed | 17 |
| 20 | Zebra finch song synthesised from premotor activity, including via a syrinx model | HIGH | confirmed | 18 |
| 21 | DAS: temporal-convolutional sample-wise annotation, validated on fly, mouse and finch | HIGH | confirmed | 19 |
| 22 | SongExplorer: browser workflow, beats heuristic segmenters, matches two expert annotators | HIGH | confirmed | 20 |
| 23 | DeepSqueak: Faster-RCNN on spectrograms detects rodent USVs at human quality | HIGH | confirmed | 21 |
| 24 | GLM-HMM finds three male song states; pIP10 activation shifts states | MED | confirmed | 22 |
| 25 | Song-like stimuli evoke responses in 33 of 36 fly central-brain regions | HIGH | confirmed | 23 |
| 26 | Fly auditory neurons: pulse/sine preference continuum in a non-hierarchical network | HIGH | confirmed | 24 |
| 27 | Accumulating population code predicts female locomotion better than linear-nonlinear models | HIGH | confirmed | 25 |
| 28 | Male vPN1 prefers short-IPI pulse song; pC1 tuning matches chaining | MED | confirmed | 26 |
| 29 | Policy Forum: integrate sender, receiver and context; validate hypotheses experimentally | MED | confirmed | 27 |
| 30 | Topoi: ML translation projects warranted but risky to animals; risks listed | MED | confirmed | 28 |
