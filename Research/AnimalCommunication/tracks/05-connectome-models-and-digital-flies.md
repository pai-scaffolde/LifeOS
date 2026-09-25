# Track 05 -- Simulating communication: connectome-constrained models and digital flies

*Interspecies Communication Research Program · 2026-09-25 · 28 claims kept of 28 checked (19 verified [12 by both verifiers, 7 by one], 8 corrected [3 by both, 5 by one], 0 conflict, 1 unverified) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

## Bottom line

- You can run in silico playback of fly courtship signals today, but only to generate hypotheses. No peer-reviewed study found for this track fed song or pheromone input through a whole-brain connectome model and checked the predicted responders against recordings. The validated whole-brain examples are feeding and grooming [MED][1].
- Connectome models can predict which neurons light up, but so far only outside communication. The Shiu whole-brain model predicted feeding and grooming neurons that imaging and optogenetics confirmed [HIGH][1]. A fitted optic-lobe model matched activity reported in 26 studies [HIGH][2].
- Wiring alone generally cannot predict activity. Wiring plus recordings from some neurons can predict the rest [HIGH][3]. So the plan must be fit-then-predict, which makes song-evoked imaging (track 04) a requirement.
- In this claim set, the evidence of communication neurons lighting up is recorded, not simulated:
  - 24 auditory cell types with measured pulse/sine and pulse-rate tuning [HIGH][13]
  - pulse-tuned pC2l and vpo neurons [MED][14][15]
  - nested nerve-cord activity in singing males [LOW][28]

  These recordings are the benchmark a digital fly must reproduce.
- The male CNS connectome [MED][19] and the female BANC connectome [LOW][20] each cover brain plus nerve cord, which allows sex-matched simulation of sender and receiver. Their reported counts still need checking.
- Company and hobbyist "digital fly" demos show walking, grooming and feeding, or pass checks they defined themselves. None shows validated communication [MED][6] [LOW][29].
- Suggested order: an in silico song playback benchmark and a simulation of the song rhythm generator, both computer-only and ready to start now; then a fit-then-predict auditory model whose imaging is sized in simulation first.

## What the evidence shows

### How this evidence was checked

Neither verifier could search the web, because the session's search budget was already spent, and most page fetches were blocked. Verdicts on peer-reviewed papers from 2019-2025 rest on the verifiers' own knowledge of the title, authors, venue and DOI. Items dated 2026, and several late-2025 preprints, could not be confirmed. No URL was seen in a verifier's search result.

### Whole-brain connectome models: what has been validated

**Shiu et al.** built a leaky integrate-and-fire (LIF) model of the adult fly brain from two inputs only: FlyWire synaptic connectivity and predicted neurotransmitter identity. When sugar- or water-sensing gustatory neurons are activated in silico, it predicts neurons that respond to tastes and are needed to start feeding [HIGH][1].
- It uses point neurons with uniform parameters, and has no nerve cord, gap junctions or neuromodulation [HIGH][1].
- The verifiers differ on its scope [CONFLICT][1]. One says it models the entire FlyWire brain (about 127k neurons, optic lobes included); the other calls it the central brain.
- Evidence type: model prediction, with some predictions then tested by calcium imaging and optogenetics.

Activating Johnston's organ neurons in the same model predicts an antennal-grooming circuit (aBN1, aBN2, aDN1, aDN2) [HIGH][1]. It also made a non-obvious prediction: JO-CE neurons drive aBN1 but JO-F neurons do not, even though JO-F synapses directly onto aBN1. Optogenetics combined with aBN1 calcium imaging confirmed it [HIGH][1]. Johnston's organ is also the fly's hearing organ, but its song-sensing subgroups, JO-A/B, were not tested [MED][1].

**Lappalainen et al.** built a network of 64 optic-lobe cell types. The wiring came from the connectome; the unknown parameters were optimized by deep learning for motion detection. Its single-neuron predictions agreed with measurements across 26 studies, including ON/OFF separation and T4/T5 direction selectivity [HIGH][2].
- The wiring came from FIB-SEM reconstructions of medulla columns, not the hemibrain.
- The fitted parameters are not uniquely determined [HIGH][2].

This is the strongest demonstration that a connectome model can predict which neurons light up, but it covers motion vision.

**Beiran and Litwin-Kumar** show, with theory and simulation, that connectome data alone are generally not enough to predict activity when biophysical parameters are uncertain. Pairing the wiring with recordings from a subset of neurons can accurately predict the unrecorded ones [HIGH][3]. Connectome-only predictions of song responders are therefore hypotheses [HIGH][3].

### Fitting whole-brain models to recorded activity

Three pieces of work show a route from connectome to calibrated model. All three concern spontaneous activity, and none has been driven with communication stimuli [MED][23][24][27].

- **Online fitting.** One method fits a FlyWire-constrained firing-rate model to whole-brain calcium imaging online. Synaptic weights, time constants and background input are fitted; the connectome fixes only which neurons connect [MED][24]. It is an anonymous OpenReview submission.
- **Spontaneous-activity preprint.** A 2026 preprint reports that a FlyWire-constrained model fit to spontaneous calcium activity reproduced untrained features (lognormal weights, neuronal avalanches, short visual time constants), and that in silico a sparse set of inhibitory hub neurons was necessary and sufficient for resting dynamics [LOW][23]. A verifier notes that many network models produce such features.
- **Function vs structure.** Region-level resting-state correlations track direct structural connectivity tightly in some regions. The mushroom body depends more on indirect connections [MED][27].

### Simulating the nerve cord: a template for the song generator

**Pugliese et al.** simulated ventral nerve cord (VNC) connectomes [MED][9]:
- DNg100 was the strongest descending driver of rhythmic leg activity.
- A three-interneuron rhythm generator was necessary and sufficient in simulation across four datasets.
- DNb08 was predicted to drive rhythmic leg movement, which optogenetics confirmed in behaving flies.

The interneurons were not recorded, the only experimental test is behavioural, and the work is an unreviewed preprint about walking [MED][9].

**Lillvis et al.** activated and silenced more than 40 cell types in behaving males while recording song, and added wiring from the male VNC connectome (MANC). They found a core song circuit of eight fru- and/or dsx-expressing types in two nested feedforward pathways. The smaller drives sine song; the larger, which contains it, drives pulse song [MED][10]. Evidence type: causal manipulation plus wiring.

**Shiozaki et al.** used calcium imaging in singing males and found nested activity. Neurons active in sine song are also active in pulse song, and pulse recruits additional neurons, consistent with [10] [LOW][28]. This is recorded activity of communication neurons during signalling. The LOW tag reflects limits of verification: both verifiers recalled the paper but could not confirm details by search.

Whether a Pugliese-style simulation of the wing neuromere reproduces this nested structure has not been tested [MED][9][10].

### Communication models fit to behaviour, not built from wiring

- **Roemschied et al.** A compact circuit model reproduces context-dependent song [HIGH][11].
  - Far from the female, weak sensory input to a direct brain-to-VNC excitatory pathway gives simple one-mode song.
  - Near her, strong input plus P1a-mediated disinhibition of the VNC song premotor circuit gives complex alternating sequences.

  Verifiers lean toward pIP10 as the direct pathway [MED][11]. The model is fit to behaviour and optogenetics, not constrained by wiring [HIGH][11].
- **Steinfath et al.** The same male brain neurons that drive airborne song also control substrate-borne vibration, through separate premotor pathways. The shared circuit uses recurrence and mutual inhibition, coordinates both signals with locomotion, and is released as code [MED][12][34]. A verifier says the firm finding is that vibration is tied to locomotion state. "Only when vibrations can reach the female" is an interpretation [MED][12].
- **Calhoun et al.** Males pattern song using feedback cues from the female. A GLM-HMM finds three hidden states, each mapping those cues to song mode differently, and predicts moment-to-moment song choices. A neuron pair previously considered song command neurons is sufficient to switch states [HIGH][18]. This is the most dialogue-like result in the set: the receiver's behaviour changes the sender's signal.
- **Cowley et al.** "Knockout training" silenced lobula columnar (LC) visual neuron types in courting males and removed matching units from a deep network. The result maps model units one-to-one onto LC types and shows a population code driving male courtship [HIGH][17]. The one-to-one mapping is imposed by the training design, and the model does not use the connectome [HIGH][17].

### Recorded song responses a digital receiver must reproduce

**Baker et al.** identified 24 new intermediate auditory cell types and mapped their synapses in FlyWire. They measured pulse vs sine preference, sine-frequency tuning and pulse-rate tuning, and found a continuum of preferences. They attribute the continuum to interconnectivity rather than to separate pulse and sine pathways [HIGH][13]. The tuning is recorded activity. The interconnectivity explanation comes from wiring plus tuning, not from causal tests [HIGH][13].

In calcium imaging, pC2l neurons in both sexes respond selectively to pulse features, from single-pulse frequency to pulse-train length, and weakly to sine [MED][14]. In females, vpoDN and its inputs vpoEN (and reportedly vpoIN) prefer pulse to sine [MED][15]. Both results are summarised in [13] and were first cited through a superseded preprint [16].

No connectome simulation has yet reproduced these recordings [MED][13].

### Bodies and brain-body coupling

- **flybody** is a whole-body MuJoCo physics model with new fluid and adhesion forces. It walks and flies using reinforcement learning, not connectome control, and cannot produce song vibration [HIGH][4].
- **NeuroMechFly v2** adds vision, olfaction, ascending feedback and complex terrain. It demonstrated one fly following another using a connectome-constrained visual network [HIGH][5]. This is the closest embodied simulation of courtship pursuit, but it has no song, no pheromones and no female response.
- **Eon Systems** (company demo, March 2026) connected the Shiu model to NeuroMechFly v2 in a closed loop. It read out a small, hand-picked set of descending neurons and turned them into high-level commands (turn, walk, groom, feed) carried out by pre-trained motor controllers [MED][6]. No communication was shown.
- **A 2026 blog critique** noted that this reads out only a few of roughly 1,300 descending neurons, with hand-chosen mappings and no dendrites or plasticity [LOW][7], limits that match the published model [HIGH][1].

### Connectome substrates and their error sources

**Male CNS connectome.** It is reported to contain 166,700 neurons across brain and nerve cord, joined through an intact neck, with fruitless/doublesex annotation and 11,710 types. Against female data it is reported to find 8,069 isomorphic, 138 dimorphic, 289 male-specific and 71 female-specific types [MED][19].
- These counts are unconfirmed. A repository README cites MaleCNS v1.0 at 165,122 traced neurons [LOW][29].
- The dimorphic calls compare one male with few females, so some differences may be individual variation [MED][19].
- It is the one dataset here holding both the song-producing and the song-hearing circuits of the singing sex [MED][19].

**BANC** covers the brain and nerve cord of one female. Effector neurons are influenced mainly by sensory neurons in the same body part, forming local loops. Ascending and descending neurons, organised into behaviour-centred modules, link those loops [LOW][20]. Evidence type: wiring only.

**Transmitter prediction.** Six transmitters are predicted from EM images with 87% accuracy per synapse, 94% per neuron and 91% for known cell types [HIGH][21]. The Shiu model takes its signs from these predictions, so errors in about 6% of neurons pass straight into simulations.
- Accuracy is lower for monoamines.
- Neuropeptides and gap junctions are not predicted.
- Glutamate is treated as inhibitory, although it can excite [HIGH][21].

**Individual differences.** FlyWire and the hemibrain show broad stereotypy with occasional differences. About one-third of hemibrain cell types could not be reliably re-identified in FlyWire [HIGH][22]. A verifier attributes this mostly to uncertain hemibrain typing. Both brains are female.

### Tools that resemble brain emulation but are not

- **FlyGM** uses the connectome as a signed message-passing graph for a trained controller of walking, turning and flight. It trained faster than random, rewired and MLP baselines. That shows the connectome is a useful network design, not a faithful copy of the biology [LOW][25].
- **LLantia** proposes cell-type functions by combining literature extracted by a large language model with the connectome. How far it has been validated is unconfirmed, and its outputs are hypotheses [LOW][26].
- **flymsg** is an unreviewed Shiu-style LIF model of MaleCNS v1.0 [LOW][29]. Its "validation" is 29 self-defined consistency checks, not comparisons with recordings. A claim that cVA drives P1/pC1 would conflict with cVA's known suppression of male courtship.
- **The State of Brain Emulation Report 2025** reviews progress since the 2008 Sandberg-Bostrom roadmap [MED][8]. Its authors work in the field, so it is a sympathetic synthesis, not an independent evaluation.

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| JO-A / JO-B | Song input; required front end for playback; untested in the Shiu model | Both | Recorded earlier (not in this set); no model playback | [MED] | 1 |
| JO-CE, JO-F | Model predicted that JO-CE, not JO-F, drives aBN1 | Female connectome | Model prediction confirmed by optogenetics plus imaging | [HIGH] | 1 |
| aBN1, aBN2, aDN1, aDN2 | Grooming circuit recovered from sensory input | Female connectome | Model prediction plus causal manipulation | [HIGH] | 1 |
| 24 intermediate auditory types (AMMC/WED) | Continuum of pulse/sine preference; frequency and pulse-rate tuning | Wiring from female FlyWire | Recorded activity plus wiring | [HIGH] | 13 |
| pC2l | Pulse-song feature detector | Both | Recorded activity | [MED] | 14 |
| vpoEN, vpoIN, vpoDN/pMN2 | Song-to-receptivity pathway; pulse-preferring (vpoIN unconfirmed) | Female | Recorded activity | [MED] | 15 |
| P1a / pC1 | P1a disinhibits the VNC song premotor circuit near the female (model) | Male (pC1 also female) | Causal manipulation plus compact model | [HIGH] | 11 |
| pIP10 (likely also the state-switching pair in [18]) | Direct song pathway from brain to VNC | Male | Causal manipulation; identity from verifier recall | [MED] | 11, 18 |
| Eight fru/dsx VNC song types | Nested pathways: smaller = sine, larger = pulse | Male (MANC) | Causal manipulation plus wiring | [MED] | 10 |
| VNC song neurons during singing | Sine-active neurons also active in pulse; pulse recruits more | Male | Recorded activity | [LOW] | 28 |
| LC visual projection neurons (23 silenced) | Population code for courtship | Male | Causal manipulation plus trained model | [HIGH] | 17 |
| T4 / T5 | Direction selectivity predicted | Not stated | Model prediction matched to recordings | [HIGH] | 2 |
| DNg100, DNb08, three-interneuron circuit | Walking rhythm; DNb08 confirmed with optogenetics | MANC and other VNC datasets | Model prediction plus behavioural test | [MED] | 9 |

## Why this matters for two-way communication with animals

- **Screening signals before live trials.** A digital receiver validated against [13]-[15] would let the team rank synthetic songs before playing them to live females. Each live trial would then test a specific prediction.
- **A two-way exchange needs a sender that responds.** The models in [18] and [11] already predict how male song changes with female behaviour. Coupling one of them to a receiver model gives a closed-loop "duet" sandbox that track 06 can test with real playback.
- **Keeping evidence types separate.** Keeping recorded, causal, wiring and model evidence apart stops "neurons lighting up" from meaning "a simulation said so", in any species.
- **Signals are multimodal.** Song and vibration come from shared neurons [12], pursuit relies on a visual population code [17], and pheromone circuits differ by sex [19]. A single-channel digital partner will mispredict responses.
- **What carries over.** Most target species have no connectome. The held-out playback benchmark and the fit-to-recordings step can be reused for them; the wiring scaffold cannot.

## Open questions

- **Unfitted models.** Driven by realistic JO-A/B input, does an unfitted LIF model reproduce pC2l's pulse preference and the tuning in [13]? If not, which is missing: synaptic dynamics, delays, gap junctions or neuromodulation?
- **Song front end.** How should a song waveform be converted into JO-A vs JO-B spike trains, including antennal mechanics, frequency tuning and adaptation? None has been published for a connectome model.
- **Data needed.** How many song-evoked recordings are needed to predict unrecorded auditory neurons, in the sense of [3]?
- **Internal state.** How should virgin vs mated state, persistent pC1 states and neuromodulators be represented? Verifiers named Deutsch 2020, Jung 2020 and peptides such as sex peptide, tachykinin and octopamine as uncovered; these were not checked here.
- **Robustness.** Which predicted responders hold up across ensembles that vary transmitter signs (about 6% error [21]), weight noise, and individual connectomes [22]?
- **Song rhythm.** Does a simulated wing neuromere produce the nested sine-within-pulse structure seen in [10] and [28]?
- **Pheromones.** cVA's effects depend on sex and context. Does a model driven through the DA1 pathway give sex-appropriate P1/pC1 responses on the matching-sex connectome?
- **Leads named by verifiers, not checked here:**
  - Pacheco et al. 2021 (widespread auditory activity in the central brain) as a benchmark
  - descending-neuron atlases (Braun 2024; Cheong, MANC) to replace hand-picked brain-body links
  - Coen 2014/2016 and LC10a pursuit models
  - parallels in other species for track 08: BAAIWorm, the larval connectome (Winding 2023), and mouse hypothalamic line-attractor models

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| **1. In silico song playback benchmark** | A connectome LIF model driven by realistic JO-A/B input gets the direction of pulse/sine preferences in [13] and [14] right, but not their size or timing. The failures show which missing biophysics matters most. | Find the neurons with [39]. Build a JON front end (band-pass plus adaptation). Drive [30] and a male-CNS port [36] with synthetic songs that sweep inter-pulse interval and carrier frequency. Score against [13]-[15]. Add sign-flip and weight-noise ensembles [21]. | Computational, now | Extract JO-A/B IDs and their paths to pC2l and vpoEN; run a pulse vs sine activation screen with the existing Shiu code. |
| **2. Simulating the male song rhythm generator** | In silico stimulation of the song descending pathway in the male CNS/MANC wing neuromere yields distinct pulse-like and sine-like motor rhythms that depend on the nested pathways. | Adapt [33] to wing motor neurons. Screen descending-neuron activations and prune to a minimal circuit. Compare with [10], [40] and [28]. Test new predictions with optogenetics plus song recording. | Computational now; optogenetic test later | Port the pipeline and check whether any descending-neuron activation gives pulse-train periodicity. |
| **3. Fit-then-predict auditory digital twin** | Fitting to song-evoked imaging from some auditory neurons predicts held-out neurons far better than the unfitted connectome [3]. | Use song-evoked imaging from track 04. Fit weights, time constants and inputs on FlyWire/BANC [24]. Hold out pC2l and vpoEN and test with targeted imaging. | Wet lab, months | Run [35] simulations to estimate how many recorded cell types are needed, then size the imaging. |
| 4. Sex-specific pheromone playback test | Pheromone-driven P1/pC1 predictions are sex-appropriate only on the matching-sex connectome, because of the dimorphic types (counts unconfirmed [19]). | Run matched activation in the male CNS vs FlyWire/BANC. Swap dimorphic subcircuits between models. Validate with P1/pC1 imaging. | Computational now; imaging later | Match pheromone input types across the three connectomes and run the same protocol on each. |
| 5. Digital duet sandbox for signal design | A coupled sender ([11]/[18]/[34]) and fitted receiver ranks synthetic songs well enough that its top designs beat random ones in real playback. | Place both in [5] or [4] with distance-dependent feedback. Optimise song and vibration. Run blinded closed-loop playback to virgin females (track 06). | Wet lab, months | Reproduce [18] with a simple simulated female that returns distance and speed cues. |
| 6. Validated digital fly as a standing test partner | A fitted, embodied digital fly with internal state predicts responses to new signals within the variation between real flies. | Combine projects 1-5. Add state modules, check across connectomes, and keep a held-out benchmark updated with each release. | Wet lab, years | Publish the held-out benchmark (stimuli, neural targets, behaviour) before building the model. |

## Leads needing confirmation

- **Male CNS [19]:** the counts and publication in Cell (Sept 2026) were only partly confirmed, by one verifier.
- **BANC [20]:** reported as about 188,000 neurons and 199 million synapses. A verifier judged this high next to FlyWire (about 139k) plus a nerve cord (about 20-25k).
- **Pugliese [9]:** the findings rest on one verifier, and Shiu's co-authorship is doubted.
- **Eon [6]:** the body model and descending-neuron mapping are unnamed.
- **Specific details to confirm in the papers:**
  - Steinfath [12]: the shared neurons.
  - Shiozaki [28]: the preparation.
  - Calhoun [18]: whether the switching neuron is pIP10.
  - Shiu [1]: the four grooming labels.
  - Lillvis [10]: the "1,800 h / 5,000 males" figure.
  - Wang [15]: vpoIN's preference.
  - Beiran [3]: the pages.
- **Preprints and single-verifier items:**
  - [23]: unverified.
  - [24], [27] and [8]: each rests on one verifier.
  - FlyGM [25]: the arXiv ID conflicts with its "NeurIPS 2025" listing.
  - LLantia [26]: the validation claim was not found.
  - flymsg [29]: its "cVA about 4x" and "about 35 ms" claims were absent from the fetched README.

## Claims dropped in verification

None of the 28 claims were dropped. Eight were corrected:
- **T05-08:** "Commentators" narrowed to a single blog post.
- **T05-11:** relabelled as causal manipulation plus wiring.
- **T05-15:** re-cited to the primary papers [14][15] instead of a superseded preprint.
- **T05-19:** neuron and synapse counts removed pending the paper.
- **T05-24:** "more efficient" reframed as a network-design benefit; its venue was flagged.
- **T05-25:** "validated" removed.
- **T05-27:** authorship corrected to the Stern and Dickson labs.
- **T05-28:** "validated, nothing fitted" reduced to self-defined checks and one rescaled parameter.

Four kinds of material were excluded as evidence without being scored:
- upload and consciousness blogs
- a news headline implying a full brain simulation that scales to humans
- the "Connectome Music Rater" and "flybrain-audio" novelty tools
- crypto repositories such as "flycoin"

## Sources

1. A Drosophila computational brain model reveals sensorimotor processing -- Shiu PK et al. -- Nature 634:210-219, 2024 -- https://www.nature.com/articles/s41586-024-07763-9
2. Connectome-constrained networks predict neural activity across the fly visual system -- Lappalainen JK, ... Macke JH, Turaga SC -- Nature, 2024 -- https://www.nature.com/articles/s41586-024-07939-3
3. Prediction of neural activity in connectome-constrained recurrent networks -- Beiran M, Litwin-Kumar A -- Nature Neuroscience 28:2561-2574 (volume/pages unconfirmed), 2025 -- https://www.nature.com/articles/s41593-025-02080-4
4. Whole-body physics simulation of fruit fly locomotion -- Vaxenburg R, Siwanowicz I, Merel J, et al. -- Nature 643:1312-1320, 2025 -- https://www.nature.com/articles/s41586-025-09029-4
5. NeuroMechFly v2: simulating embodied sensorimotor control in adult Drosophila -- Wang-Chen S, Stimpfling VA, Lam TKC, Özdil PG, Genoud L, Hurtak F, Ramdya P -- Nature Methods, 2024 -- https://www.nature.com/articles/s41592-024-02497-y
6. How the Eon Team Produced a Virtual Embodied Fly -- Eon Systems -- Company blog (not peer-reviewed), 2026 -- https://eon.systems/updates/embodied-brain-emulation
7. No, we haven't uploaded a fly yet -- Preserving Hope (Substack; cross-posted to LessWrong) -- Blog, 2026 -- https://www.lesswrong.com/posts/ybwcxBRrsKavJB9Wz/no-we-haven-t-uploaded-a-fly-yet
8. State of Brain Emulation Report 2025 -- Zanichelli N, Schons M, Freeman I, Shiu P, Arkhipov A -- arXiv 2510.15745, 2025 -- https://arxiv.org/abs/2510.15745
9. Connectome simulations identify a central pattern generator circuit for fly walking -- Pugliese SM et al. (listed co-authorship with Shiu PK doubted by a verifier) -- bioRxiv, 2025 -- https://www.biorxiv.org/content/10.1101/2025.09.12.675944v1
10. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology 34(4), 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00015-0
11. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA et al. (Murthy lab) -- Nature, 2023 -- https://www.nature.com/articles/s41586-023-06632-1
12. A neural circuit for context-dependent multimodal signaling in Drosophila -- Steinfath E, Khalili A, Stenger M, Schultze BL, Ravindran Nair S, Alizadeh K, Clemens J -- Nature Communications, 2025 -- https://www.nature.com/articles/s41467-025-64907-9
13. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, ... Murthy M -- Current Biology 32(15):3317-3333, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
14. Shared song detector neurons in Drosophila male and female brains drive sex-specific behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29:3200-3215, 2019 -- URL not verified
15. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Nature 589:577-581, 2021 -- URL not verified
16. Neural Network Organization for Courtship Song Feature Detection in Drosophila (bioRxiv v2; superseded by [13]) -- Baker CA et al. -- bioRxiv, 2021 -- https://www.biorxiv.org/content/10.1101/2020.10.08.332148v2.full
17. Mapping model units to visual neurons reveals population code for social behaviour -- Cowley BR, Calhoun AJ, Rangarajan N, Ireland E, Turner MH, Pillow JW, Murthy M -- Nature, 2024 -- https://www.nature.com/articles/s41586-024-07451-8
18. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience 22:2040-2049, 2019 -- https://www.nature.com/articles/s41593-019-0533-x
19. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Berg S et al. (Janelia FlyEM, Cambridge Connectomics, Google Research) -- Cell, 2026 -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6
20. Distributed control circuits across a brain-and-cord connectome -- Bates AS et al. (BANC consortium) -- Nature, 2026 -- https://www.nature.com/articles/s41586-026-10735-w
21. Neurotransmitter classification from electron microscopy images at synaptic sites in Drosophila melanogaster -- Eckstein N et al. -- Cell 187:2574-2594, 2024 -- https://www.cell.com/cell/fulltext/S0092-8674(24)00307-6
22. Whole-brain annotation and multi-connectome cell typing of Drosophila -- Schlegel P et al. -- Nature, 2024 -- https://www.nature.com/articles/s41586-024-07686-5
23. Connectome-constrained modeling identifies neurons and synapses that sustain spontaneous activity in Drosophila -- authors not captured -- bioRxiv, 2026 -- https://www.biorxiv.org/content/10.64898/2026.08.21.745055v1.full
24. Online Fitting of a Connectome-Constrained Drosophila Whole-Brain Model to Calcium Imaging Data -- anonymous submission -- OpenReview, 2026 -- https://openreview.net/pdf?id=wCBNxp1qWe
25. Whole-Brain Connectomic Graph Model Enables Whole-Body Locomotion Control in Fruit Fly -- Tsinghua University group (unconfirmed) -- arXiv 2602.17997 (venue listing inconsistent), 2026 -- https://arxiv.org/abs/2602.17997
26. Neural Circuit Function Inference with LLMs -- Yin Y, Cardona A -- arXiv 2608.00059, 2026 -- https://arxiv.org/abs/2608.00059
27. Functional connectivity, structural connectivity, and inter-individual variability in Drosophila melanogaster -- authors not captured -- eLife reviewed preprint / bioRxiv, 2025 -- https://elifesciences.org/reviewed-preprints/107990
28. Activity of nested neural circuits drives different courtship songs in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- Nature Neuroscience, 2024 (DOI not re-verified) -- https://www.nature.com/articles/s41593-024-01738-9
29. flymsg: Simulate and view in 3D the complete male Drosophila CNS connectome -- gianlucamazza -- GitHub repository (not peer-reviewed), 2026 -- https://github.com/gianlucamazza/flymsg

Datasets and code:

30. Drosophila_brain_model (LIF whole-brain model) -- Shiu PK et al. (code for [1]) -- GitHub repository -- https://github.com/philshiu/Drosophila_brain_model
31. flyvis -- Turaga lab (code for [2]) -- GitHub repository -- https://github.com/TuragaLab/flyvis
32. flybody -- Turaga lab (code for [4]) -- GitHub repository -- https://github.com/TuragaLab/flybody
33. Pugliese_cpg_2025 -- Pugliese SM et al. (code for [9]) -- GitHub repository -- https://github.com/smpuglie/Pugliese_cpg_2025
34. vibmodel -- Clemens lab (code for [12]) -- GitHub repository -- https://github.com/janclemenslab/vibmodel
35. connconstr -- Beiran M (code for [3]) -- GitHub repository -- https://github.com/emebeiran/connconstr
36. Male CNS Connectome -- Janelia FlyEM -- Project page -- https://www.janelia.org/project-team/flyem/male-cns-connectome
37. BANC project -- BANC consortium -- GitHub repository -- https://github.com/htem/BANC-project
38. FlyWire -- FlyWire consortium -- Connectome platform -- https://flywire.ai/
39. flywire_annotations v2.1.0 -- Schlegel P et al. (data for [22]) -- GitHub repository -- https://github.com/flyconnectome/flywire_annotations/tree/v2.1.0
40. Data related to Lillvis JL et al. 2023, Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL et al. -- Janelia figshare -- https://janelia.figshare.com/articles/dataset/Data_related_to_Lillvis_JL_et_al_2023_Nested_neural_circuits_generate_distinct_acoustic_signals_during_Drosophila_courtship/24707544
