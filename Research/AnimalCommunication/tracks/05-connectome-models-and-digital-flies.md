# Track 05 -- Simulating communication: connectome-constrained models and digital flies

*Interspecies Communication Research Program · 2026-09-25 · 28 claims kept of 28 · live-search audit: confirmed 25, corrected 3, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

## Bottom line

- In silico playback of fly courtship signals can run today, but only to generate hypotheses. No peer-reviewed study in this claim set fed song or pheromone input through a whole-brain connectome model and checked the predicted responders against recordings. The whole-brain predictions with experimental support concern feeding and antennal grooming [HIGH][1].
- Connectome models can predict which neurons respond, so far only outside communication. The Shiu whole-brain model predicted feeding-initiation neurons and an antennal-grooming circuit, including a non-obvious JO-CE vs JO-F difference that optogenetics plus imaging confirmed [HIGH][1]. A fitted optic-lobe model matched single-neuron measurements from 26 studies [HIGH][2].
- Wiring alone generally cannot predict activity; wiring plus recordings from some neurons can predict the rest [HIGH][3]. Two 2026 FlyWire-constrained whole-brain models have already been fit to spontaneous calcium imaging [MED][22] [HIGH][23], so the fitting route exists, but neither was driven with communication stimuli. The plan must be fit-then-predict, which makes song-evoked imaging (track 04) a requirement.
- In this claim set, the evidence of communication neurons responding is recorded, not simulated:
  - 24 auditory cell types with measured pulse/sine and pulse-rate tuning [HIGH][13]
  - pulse-preferring pC2l and vpo neurons [MED][14][15]
  - nested nerve-cord activity in singing males [HIGH][27]

  These recordings are the benchmark a digital fly must reproduce.
- Substrates for sex-matched simulation of sender and receiver are now published. The male CNS connectome (166,700 neurons across brain and nerve cord, 11,710 types, 138 dimorphic and 289 male-specific types) appeared in Cell [HIGH][18]. The female BANC brain-and-cord connectome appeared in Nature; its exact counts should be taken from the paper [MED][19].
- Company and hobbyist digital-fly demos do not show validated communication. Eon's closed-loop fly reads out hand-picked descending neurons as turn, walk, groom and feed commands [HIGH][6]. flymsg passes 29 self-defined qualitative checks, one of them a P1-to-pIP10 song-pathway check, but none compares the simulation with recorded activity [MED][28].
- Suggested order: an in silico song playback benchmark and a simulation of the song rhythm generator, both computer-only and ready to start now; then a fit-then-predict auditory model whose imaging is sized in simulation first.

## What the evidence shows

### How this was verified

Round 1 used one researcher with live web search and two independent verifiers, one checking source fidelity and one acting as an adversarial skeptic. The verifiers had no web access and checked claims from their own knowledge. Round 2 was a live auditor who checked each claim against live web search results, with a second opinion reserved for contradicted claims. None of the 28 claims was contradicted, so no second opinion was needed. Because of the session search cap, the audit ran in 2 passes, and a later pass checked only the claims an earlier pass had not reached; this track used 24 searches. [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding itself was not directly visible, the claim was corrected, or it rests on a single verifier; [LOW] means not located or unconfirmed; [CONFLICT] means the checks disagree. No claim in this track is tagged [LOW] or [CONFLICT]. For the two Shiu results and the Lappalainen result, the audit saw the source but not the specific findings, so their [HIGH] rests on agreement of both round-1 verifiers.

### Whole-brain connectome models: what has been validated

**Shiu et al.** built a leaky integrate-and-fire (LIF) model of the entire adult Drosophila central brain from two inputs only: FlyWire synaptic connectivity and predicted neurotransmitter identity. When sugar- or water-sensing gustatory neurons are activated in silico, it predicts neurons that respond to tastes and are required for feeding initiation [HIGH][1].
- Because it is built from those two inputs alone, the model carries nothing beyond synaptic wiring and transmitter identity. The critique in [7] adds that it has no dendritic detail or plasticity [MED][7].
- Round-1 verifiers disagreed on its scope (central brain only, or the whole FlyWire brain including optic lobes). The audited claim reads "central brain"; the audit did not see scope details.
- Evidence type: model prediction.

Activating Johnston's organ (JO) mechanosensory neurons in the same model predicts a small antennal-grooming circuit (aBN1, aBN2, aDN1, aDN2). It also makes a non-obvious prediction: JO-CE neurons drive robust aBN1 activity but JO-F neurons do not, despite synapsing directly onto aBN1. This was tested by optogenetic activation of each JON population plus calcium imaging in aBN1 [HIGH][1]. The song-sensing JO subgroups (JO-A/B) were not part of these tests, and no claim in this set drives the model with song.

**Lappalainen et al.** built a connectome-constrained network of 64 optic-lobe motion-pathway cell types. Unknown single-neuron and synapse parameters were optimized by deep learning for motion detection. The network made single-neuron activity predictions that agreed with experimental measurements across 26 studies, including ON/OFF channel separation and T4/T5 direction selectivity [HIGH][2].
- The connectivity is optic-lobe data from FIB-SEM/hemibrain-era reconstructions.
- The audit saw the paper but not the 64-type, 26-study or T4/T5 details.

This is the strongest demonstration in the set that a connectome model can predict which neurons respond, but it covers motion vision.

**Beiran and Litwin-Kumar** show with theory and simulations that connectome data alone are generally insufficient to predict neural activity when biophysical parameters are uncertain. Pairing connectivity with recordings from a subset of neurons can accurately predict activity in unrecorded neurons [HIGH][3]. The method compares teacher and student networks that share connectivity but differ in biophysical parameters; the code is connconstr [33]. Connectome-only predictions of song responders are therefore hypotheses.

### Fitting whole-brain models to recorded activity

Three works show a route from connectome to calibrated model. All three concern spontaneous activity, and none involves communication stimuli [22][23][26].

- **Spontaneous-activity preprint.** A whole-brain model constrained by the FlyWire connectome, fit to calcium recordings of spontaneous activity in head-fixed flies, reproduced three features it was not trained on: lognormal synaptic weights, scale-free neuronal avalanches, and short intrinsic time constants in visual cells. In silico perturbations suggested that a sparse, brain-spanning ensemble of inhibitory hub neurons is necessary and sufficient to sustain resting dynamics [MED][22]. The audit's results add that the hubs act through reciprocal synapses with excitatory partners within a compact neuropil core. It is an unreviewed bioRxiv preprint posted in August 2026, and its authors were not visible. A round-1 verifier noted that many network models produce such features.
- **Online fitting.** A related method fits a firing-rate model constrained by the FlyWire connectome to whole-brain calcium imaging online. It treats synaptic weights, neuronal time constants and background input strengths as unknowns to be fitted, with the connectome fixing only the network topology [HIGH][23]. The models are threshold-linear. It is an OpenReview submission whose authors and review status were not visible. It reports the same three untrained features as [22] and is likely that preprint's methods companion.
- **Function vs structure.** In whole-brain calcium imaging analysed with fMRI-style methods, resting-state functional correlations relate strongly to direct region-to-region structural connectivity, but the relationship varies across the brain; the mushroom body depends more on indirect connections [MED][26]. The audit did not see this finding in search results. It saw two other findings from the same work: the functional-structural correlation falls linearly as the number of regions rises, and unsegregated synapses (by a new pre/post-synaptic segregation index) show a higher functional-structural correlation.

### Simulating the nerve cord: a template for the song generator

**Pugliese et al.** (Tuthill and Brunton labs) ran dynamic simulations of fly ventral nerve cord (VNC) connectomes [MED][9]:
- DNg100 was the top descending driver of rhythmic leg motor activity.
- A minimal three-interneuron rhythm generator (one inhibitory, two excitatory) was necessary and sufficient in simulation across four connectome datasets.
- DNb08 was predicted to drive rhythmic leg movement, which optogenetics confirmed in behaving flies.

The audit saw all three findings stated directly. The tag is [MED] because the citation needed correction: round 1 had listed Shiu as a co-author, and the authors are Pugliese, Chou, Abe, Turcu, Lancaster, Tuthill and Brunton. The work is a bioRxiv preprint about walking; PubMed and PMC listings suggest later indexing or publication, but no journal was identified. The experimental test in the claim is behavioural. Code: Pugliese_cpg_2025 [31].

**Lillvis et al.** activated and silenced more than 40 cell types in behaving males while recording song, and added wiring from the male VNC connectome (MANC). They identified a core nerve-cord song circuit of eight fru- and/or dsx-expressing cell types in two nested feedforward pathways: the smaller drives sine song, and the larger, which includes the smaller, drives pulse song [MED][10]. Evidence type: causal manipulation plus connectome wiring. The audit saw the paper but not the screen size or the eight-type details.

**Shiozaki et al.** (Stern lab with Dickson-lab collaborators) imaged calcium activity of nerve-cord song-circuit neurons in singing males. Activity is nested: neurons active during sine song are also active during pulse song, and pulse song recruits additional neurons. This is consistent with the nested pathways identified in [10] [HIGH][27]. It is recorded activity of communication neurons during signalling, and the audit saw the key finding stated directly; its results add that the nested pattern appears in two descending pathways. Data and code are on Janelia figshare [35].

Whether a Pugliese-style simulation of the wing neuromere reproduces this nested structure has not been tested in this claim set [9][10][27].

### Communication models fit to behaviour and perturbations

No claim in this group describes a model built from connectome wiring.

- **Roemschied et al.** A compact circuit model shows that a few computations suffice to replicate context-dependent song [HIGH][11].
  - Far from the female, weak sensory input to a direct brain-to-VNC excitatory pathway yields simple one-mode song.
  - Near her, strong input plus P1a-mediated disinhibition of the VNC song premotor circuit yields complex alternating sequences.

  The audit's results add that a single pathway works in two regimes and that the VNC circuit is shaped by mutual inhibition and rebound excitability. The identity of the direct pathway as pIP10 comes from round-1 recall and was not confirmed in the audit.
- **Steinfath et al.** The same male brain neurons that drive air-borne courtship song also control substrate-borne vibration through separate premotor pathways. The shared circuit uses recurrence and mutual inhibition, and coordinates the signals with locomotion so vibrations occur only when they can reach the female. A circuit model is released as code [HIGH][12][32]. The audit did not see the locomotion coupling in search results, though nothing contradicted it. A round-1 verifier read "only when they can reach the female" as the authors' interpretation of a link to locomotion state.
- **Calhoun et al.** During courtship, males pattern their song using feedback cues from the female. An unsupervised model (GLM-HMM) uncovers three hidden states, each with a different mapping from feedback cues to song mode, and predicts moment-to-moment song-patterning decisions. A neuron pair previously considered song command neurons is sufficient to drive switching between states [HIGH][17]. This is the most dialogue-like result in the set: the receiver's behaviour changes the sender's signal. The command-neuron finding was not visible in the audit's results. An Author Correction exists and should be cited with the paper.
- **Cowley et al.** A deep network trained with "knockout training", in which silencing of individual visual projection neuron types in behaving males is mirrored by removing matching model units, gives a one-to-one mapping between model units and LC neuron types. It shows that combinations of visual projection neurons form a population code driving male courtship interactions with the female [HIGH][16]. The one-to-one mapping follows from the training design. Round 1 recorded 23 silenced LC types; the audit's results said "more than a dozen" cell types, so the exact number is unconfirmed.

### Recorded song responses a digital receiver must reproduce

**Baker et al.** identified 24 new intermediate auditory cell types and mapped all their synaptic connections in FlyWire. They measured each cell's pulse vs sine preference, sine-frequency tuning and pulse-rate tuning, finding a continuum of song-mode preferences. The results support interconnectivity, rather than separate pulse and sine pathways, as the source of that continuum [HIGH][13]. The tuning is recorded activity. The interconnectivity account rests on wiring plus tuning, and the claim describes no causal test. The audit's results describe highly interconnected neurons of different preferences in a non-hierarchical network; the per-cell tuning measures were not visible in the summary.

Calcium imaging shows that pC2l neurons in males and females respond selectively to pulse-song features, from single-pulse frequency to pulse-train length, and weakly to sine (Deutsch et al. 2019) [MED][14]. In females, vpoDN and its song-responsive inputs vpoEN (and reportedly vpoIN) respond more strongly to pulse than sine (Wang et al. 2021) [MED][15]. These are activity-recorded results from separate studies, summarised in [13]. The audit saw the Wang et al. citation; Deutsch et al. and the pulse-vs-sine findings themselves were not live-checked.

No connectome simulation in this claim set has reproduced these recordings.

### Bodies and brain-body coupling

- **flybody** is a whole-body, anatomically detailed physics model of Drosophila melanogaster in MuJoCo, with new models for fluid and adhesion forces. It reproduced realistic walking and flight using reinforcement learning, not connectome-driven control [HIGH][4][30]. Song is not among its reported behaviours.
- **NeuroMechFly v2** adds vision, olfaction, ascending motor feedback and complex terrain to a neuromechanical adult fly. It demonstrated fly-fly following using a connectome-constrained visual network [HIGH][5]. Its other reported demonstrations include path integration, head stabilization, multimodal navigation by reinforcement learning and odor-plume navigation. This is the closest embodied simulation of courtship pursuit in the set; none of its listed demonstrations involves song.
- **Eon Systems** (a company, March 2026 demo) coupled the Shiu whole-brain model to the NeuroMechFly v2 body in a closed loop. It read out a small, hand-picked set of descending neurons and translated them into high-level commands (turn, walk forward, groom, feed) executed by pre-trained motor controllers [HIGH][6]. None of these commands is a communication behaviour. The mechanism details appeared in search results for the critique in [7], not on Eon's own page. Eon's marketing figures are unreviewed and are not used here.
- **A 2026 blog post** ("No, we haven't uploaded a fly yet", Substack/LessWrong; not peer-reviewed) criticised the Eon "uploaded fly" framing. It noted that the descending interface reads out only a few of the fly's roughly 1,300 descending neurons, that brain-to-body mappings were chosen by hand, and that the LIF brain has no dendritic detail or plasticity. These limits are consistent with the published description of the Shiu model [MED][7]. The audit confirmed the post's core argument but did not see the 1,300 figure or the dendrite and plasticity points. A second, separate critique is listed under new leads.

### Connectome substrates and their error sources

**Male CNS connectome.** The complete connectome of the Drosophila male central nervous system contains 166,700 neurons across brain and nerve cord, joined through an intact neck, with fruitless/doublesex annotation and 11,710 neuron types. Compared with female data it finds 8,069 isomorphic, 138 dimorphic, 289 male-specific and 71 female-specific types [HIGH][18].
- It was published in Cell on 3 September 2026 (open access) after a 2025 bioRxiv preprint; project page [29]. The audit saw these counts in result text, but not the first author's name.
- The audit's results add that sex-specific and dimorphic types make up 4.8% of male and 2.4% of female central-brain neurons.
- Among the datasets in this claim set, it is the only one covering both brain and nerve cord of a male, so it holds both the song-producing and the song-hearing circuits of the singing sex.
- A round-1 verifier cautioned that comparisons between individual flies can count individual variation, of the kind reported in [21], as dimorphism.

**BANC** is a synapse-resolution connectome of the brain and nerve cord of one adult female fly. Its wiring shows effector neurons mainly influenced by sensory neurons in the same body part, forming local feedback loops. These loops are linked by long-range ascending and descending neurons organised into behaviour-centred modules [MED][19]. Evidence type: wiring only. The audit saw this finding stated directly and confirmed publication in Nature in 2026; its results add that the paper frames "cognitive" regions as supervisory rather than essential for action. Exact neuron and synapse counts should be taken from the paper: round 1 carried about 188,000 neurons and 199 million synapses, while the audit's result text gave about 160,000 neurons.

**Transmitter prediction.** A neural network predicting six transmitters (acetylcholine, glutamate, GABA, serotonin, dopamine, octopamine) from EM images is 87% accurate per synapse, 94% per neuron and 91% for known cell types [HIGH][20]. The Shiu model takes predicted transmitter identity as one of its two inputs [1]; at 94% per-neuron accuracy, about 6% of neurons would carry a wrong label into simulations. Neuropeptides are not among the six classes.

**Individual differences.** Joint analysis of the FlyWire and hemibrain connectomes found broad stereotypy but occasional differences in neuron counts and connectivity between individuals. About one-third of cell types proposed for the hemibrain could not be reliably re-identified in FlyWire [HIGH][21]. The audit's results add that nearly all hemibrain neurons could be matched morphologically, so the shortfall concerns cell-type definitions; a round-1 verifier attributed it mostly to uncertain hemibrain typing. Both brains are female.

### Tools that resemble brain emulation but are not

- **FlyGM** (arXiv 2602.17997, 2026; peer-review and venue status unconfirmed) uses the fly whole-brain connectome as a signed, directed message-passing graph to control simulated whole-body walking, turning and flight. In imitation learning it trained faster and reached lower loss than random-graph, rewired-graph and MLP baselines. This shows the connectome helps as a network design choice for a trained controller, not biological fidelity [MED][24]. The audit corrected the citation (first author Jin Z, Tsinghua University; the earlier "NeurIPS 2025" listing is unsupported) and did not see the baseline comparisons.
- **LLantia** (Yin and Cardona, arXiv 2026, unreviewed) uses an LLM to extract cell-type function descriptions from the literature, then combines them with the connectome to propose functions for other Drosophila brain cell types. The extent of validation is unconfirmed, and its outputs should be treated as hypotheses for experimental testing [MED][25]. It is released as open-source software [34]; the audit saw no experimental validation.
- **flymsg** is an unreviewed 2026 GitHub project (releases v0.5.0/v0.5.1) that runs a whole-CNS leaky integrate-and-fire model on the MaleCNS v1.0 connectome, following Shiu et al. [MED][28].
  - Its stated departures from Shiu's model are a synaptic weight rescaled for MaleCNS's denser synapse detection (w_syn 0.275/1.43 = 0.192) and no adaptive threshold (kept as an option).
  - Its "validation" is 29 self-defined pass/fail checks (29/29 under its own "criterion v4") plus agreement with Shiu's brian2 model on the same connectome.
  - The checks test whether the simulation reproduces qualitatively known circuit functions (LC4 to Giant Fiber looming escape, P1 to pIP10 song pathway, sugar to MN9, bitter leaving MN9 silent), with controls, dose-response and latency-order tests. They are not quantitative comparisons with recorded neural activity, and any new outputs it reports are untested model predictions.
  - Round 1 carried a flymsg output about cVA driving P1/pC1. The audit did not find it, and it is removed.
- **The State of Brain Emulation Report 2025** reassesses progress since the 2008 Sandberg and Bostrom roadmap. It is organized around recording neural dynamics, mapping connectomes, and emulation plus embodiment, and it identifies remaining challenges and strategic priorities [HIGH][8]. Its authors, who include Philip Shiu, work in the field, so it is a synthesis from within the field rather than an independent evaluation.

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| Sugar- and water-sensing GRNs | In silico activation predicts taste-responsive neurons required for feeding initiation | Female connectome | Model prediction | [HIGH] | 1 |
| JO-CE, JO-F | Model predicted that JO-CE, not JO-F, drives aBN1 | Female connectome | Model prediction tested by optogenetics plus aBN1 imaging | [HIGH] | 1 |
| aBN1, aBN2, aDN1, aDN2 | Antennal-grooming circuit recovered from JO input | Female connectome | Model prediction (test described for aBN1) | [HIGH] | 1 |
| 24 intermediate auditory types (AMMC/WED) | Continuum of pulse/sine preference; sine-frequency and pulse-rate tuning | Wiring from female FlyWire | Recorded activity plus wiring | [HIGH] | 13 |
| pC2l | Pulse-song feature detector | Both | Recorded activity | [MED] | 14 |
| vpoEN, vpoIN, vpoDN/pMN2 | Song-responsive inputs to vpoDN; pulse-preferring (vpoIN reported) | Female | Recorded activity | [MED] | 15 |
| P1a | Disinhibits the VNC song premotor circuit near the female | Male | Model prediction (compact circuit model) | [HIGH] | 11 |
| Direct brain-to-VNC song pathway (recalled as pIP10; identity unconfirmed) | Yields simple one-mode song under weak sensory input | Male | Model prediction | [HIGH] | 11 |
| Neuron pair previously considered song command neurons | Sufficient to switch song-patterning states | Male | Model prediction plus manipulation | [HIGH] | 17 |
| Shared song/vibration brain neurons | Drive song and substrate vibration through separate premotor pathways | Male | Causal manipulation plus circuit model | [HIGH] | 12 |
| Eight fru/dsx VNC song types | Nested pathways: smaller = sine, larger = pulse | Male (MANC) | Causal manipulation plus wiring | [MED] | 10 |
| VNC song neurons during singing | Sine-active neurons also active in pulse; pulse recruits more | Male | Recorded activity | [HIGH] | 27 |
| LC visual projection neuron types (number silenced unconfirmed) | Population code for courtship | Male | Causal manipulation plus trained model | [HIGH] | 16 |
| T4 / T5 | Direction selectivity predicted | Not stated | Model prediction matched to recordings | [HIGH] | 2 |
| DNg100, DNb08, three-interneuron circuit (1 inhibitory, 2 excitatory) | Walking rhythm; DNb08 confirmed with optogenetics | MANC and other VNC datasets | Model prediction plus behavioural test | [MED] | 9 |
| Inhibitory hub ensemble | Necessary and sufficient for resting dynamics in silico | Female (FlyWire) | Model prediction fit to spontaneous imaging | [MED] | 22 |

## Why this matters for two-way communication with animals

- **Screening signals before live trials.** A digital receiver validated against [13]-[15] would let the team rank synthetic songs before playing them to live females. Each live trial would then test a specific prediction.
- **A two-way exchange needs a sender that responds.** The models in [17] and [11] already predict how male song changes with female behaviour. Coupling one of them to a receiver model gives a closed-loop "duet" sandbox that track 06 can test with real playback.
- **Keeping evidence types separate.** Keeping recorded, causal, wiring and model evidence apart stops "neurons lighting up" from meaning "a simulation said so", in any species. flymsg shows the risk: a qualitative self-check of a song pathway can read like validation [28].
- **Signals are multimodal and sex-specific.** Song and vibration come from shared neurons [12], pursuit relies on a visual population code [16], and the male CNS has 138 dimorphic and 289 male-specific cell types [18]. A single-channel, single-sex digital partner will mispredict responses.
- **What carries over.** Most target species have no connectome. The held-out playback benchmark and the fit-to-recordings step can be reused for them; the wiring scaffold cannot.

## Open questions

- **Unfitted models.** Driven by realistic JO-A/B input, does an unfitted LIF model reproduce pC2l's pulse preference [14] and the tuning in [13]? If not, which is missing: synaptic dynamics, delays, gap junctions or neuromodulation?
- **Song front end.** How should a song waveform be converted into JO-A vs JO-B spike trains, including antennal mechanics, frequency tuning and adaptation? No such front end for a connectome model appears in this claim set.
- **Data needed.** How many song-evoked recordings are needed to predict unrecorded auditory neurons, in the sense of [3]? Do fitting methods developed on spontaneous activity [22][23] transfer to stimulus-driven data?
- **Internal state.** How should virgin vs mated state, persistent pC1 states and neuromodulators be represented? Round-1 verifiers named Deutsch 2020, Jung 2020 and peptides such as sex peptide, tachykinin and octopamine as uncovered; these were not checked. A record found in the live audit reports that recent social experience alters song behaviour (unverified; see new leads), so the sender's state may matter as much as the receiver's.
- **Robustness.** Which predicted responders hold up across ensembles that vary transmitter labels (about 6% neuron-level error implied by [20]), weight noise, and individual connectomes [21]?
- **Song rhythm.** Does a simulated wing neuromere produce the nested sine-within-pulse structure seen in [10] and [27]?
- **Pheromones.** Does a model driven through the DA1 pathway give sex-appropriate P1/pC1 responses on the matching-sex connectome? No validated pheromone simulation appears in this claim set, and a flymsg output about cVA driving P1/pC1 that round 1 carried was not found in the audit.
- **Leads named by verifiers, not checked here:**
  - Pacheco et al. 2021 (widespread auditory activity in the central brain) as a benchmark
  - descending-neuron atlases (Braun 2024; Cheong, MANC) to replace hand-picked brain-body links
  - Coen 2014/2016 and LC10a pursuit models
  - parallels in other species for track 08: BAAIWorm, the larval connectome (Winding 2023), and mouse hypothalamic line-attractor models

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| **1. In silico song playback benchmark** | A connectome LIF model driven by realistic JO-A/B input gets the direction of the pulse/sine preferences in [13] and [14] right, but not their size or timing. The failures show which missing biophysics matters most. | Find JO-A/B and downstream neuron IDs in the FlyWire annotations [21]. Build a JON front end (band-pass plus adaptation). Drive the Shiu model [1] and a male-CNS port (flymsg [28] or a new port on [18]) with synthetic songs that sweep inter-pulse interval and carrier frequency. Score against [13]-[15]. Add sign-flip and weight-noise ensembles [20]. | Computational, now | Extract JO-A/B IDs and their paths to pC2l and vpoEN; run a pulse vs sine activation screen in the Shiu model. |
| **2. Simulating the male song rhythm generator** | In silico stimulation of the song descending pathway in the male CNS/MANC wing neuromere yields distinct pulse-like and sine-like motor rhythms that depend on the nested pathways. | Adapt the Pugliese pipeline [9][31] to wing motor neurons on the male CNS connectome [18]. Screen descending-neuron activations and prune to a minimal circuit. Compare with [10] and [27] (data [35]). Test new predictions with optogenetics plus song recording. | Computational now; optogenetic test later | Port the pipeline and check whether any descending-neuron activation gives pulse-train periodicity. |
| **3. Fit-then-predict auditory digital twin** | Fitting to song-evoked imaging from some auditory neurons predicts held-out neurons far better than the unfitted connectome [3]. | Use song-evoked imaging from track 04. Fit weights, time constants and inputs on FlyWire/BANC with the online-fitting approach [23], so far applied only to spontaneous activity [22]. Hold out pC2l and vpoEN and test with targeted imaging. | Wet lab, months | Run teacher-student simulations as in [3] (code [33]) to estimate how many recorded cell types are needed, then size the imaging. |
| 4. Sex-specific pheromone playback test | Pheromone-driven P1/pC1 predictions are sex-appropriate only on the matching-sex connectome, because of the 138 dimorphic and 289 male-specific types reported in [18]. | Run matched activation in the male CNS [18] vs FlyWire/BANC [19]. Swap dimorphic subcircuits between models. Validate with P1/pC1 imaging. | Computational now; imaging later | Match pheromone input types across the three connectomes and run the same protocol on each. |
| 5. Digital duet sandbox for signal design | A coupled sender ([11]/[17]/[32]) and fitted receiver ranks synthetic songs well enough that its top designs beat random ones in real playback. | Place both in [5] or [4] with distance-dependent feedback. Optimise song and vibration. Run blinded closed-loop playback to virgin females (track 06). | Wet lab, months | Reproduce [17] with a simple simulated female that returns distance and speed cues. |
| 6. Validated digital fly as a standing test partner | A fitted, embodied digital fly with internal state predicts responses to new signals within the variation between real flies. | Combine projects 1-5. Add state modules, check across connectomes, and keep a held-out benchmark updated with each release. | Wet lab, years | Publish the held-out benchmark (stimuli, neural targets, behaviour) before building the model. |

## Leads needing confirmation

- **Findings not seen in live results.** For these claims the audit confirmed the source but not the specific finding:
  - Shiu [1]: the feeding results, the JO-CE vs JO-F result, the four grooming labels, and the model's scope (disputed in round 1).
  - Lappalainen [2]: the 64 cell types, 26 studies and T4/T5 details.
  - Lillvis [10]: the 40+ cell-type screen and the eight-type circuit.
  - Steinfath [12]: the locomotion coupling; the shared neurons are unnamed.
  - Baker [13]: the per-cell sine-frequency and pulse-rate tuning.
  - Deutsch [14]: not live-checked; Wang [15]: the citation was seen, but not vpoIN's preference or the pulse-vs-sine findings.
  - Cowley [16]: the number of LC types silenced (23 in round 1; "more than a dozen" in the audit's results).
  - Calhoun [17]: the command-neuron pair and its identity (recalled as pIP10).
  - Roemschied [11]: the identity of the direct pathway (recalled as pIP10).
  - Blog critique [7]: the 1,300 descending-neuron figure and the dendrite and plasticity points.
  - Eckstein [20]: the page range.
  - Functional vs structural connectivity [26]: the claimed finding; the audit saw different findings from the same work.
- **BANC [19]:** round 1 carried about 188,000 neurons and 199 million synapses; the audit's result text gave about 160,000 neurons. Take counts from the paper.
- **Male CNS [18]:** the first author "Berg S" was not visible in the audit's results.
- **Pugliese [9]:** PubMed and PMC listings suggest later publication, but no journal was identified.
- **Eon [6]:** the descending neurons read out are unnamed, and the mechanism details came from results for the critique, not from Eon's page.
- **Preprints and unreviewed items:**
  - [22]: authors not visible; unreviewed preprint.
  - [23]: authors and review status not visible.
  - FlyGM [24]: the baseline comparisons were not seen, and no peer-reviewed venue was identified.
  - LLantia [25]: no experimental validation was visible.
  - flymsg [28]: the 165k-neuron and 124M-synapse figures, the absence of gap junctions, neuromodulation and plasticity, and any cVA output were not visible; the README could not be read in this session.

## New leads from live search (2025-2026)

These were found by the live auditor but not independently verified.

- [MED] "The embodied brain: Bridging the brain, body, and behavior with biorealistic neuromechanical models" (arXiv 2601.08056, January 2026). A review/perspective on biorealistic neuromechanical models linking brain, body and behaviour; contents not verified beyond the title. It could be used to check the embodied-model material [4][5][6]. https://arxiv.org/pdf/2601.08056
- [LOW] "No, a Fruit Fly has not been uploaded" (Carboncopies Foundation blog, 2026). A critique of the Eon "uploaded fruit fly" claim, separate from [7]. https://carboncopies.org/Blog/Posts/FruitFlyNotUploaded/Post/
- [MED] Male CNS connectome project page (Janelia FlyEM and collaborators, 2026). Describes the published MaleCNS v1.0 connectome (brain plus ventral nerve cord) and its sexual dimorphism. It is the same dataset as [18], whose Cell paper this dossier cites directly. https://www.janelia.org/project-team/flyem/male-cns-connectome
- [MED] "Recent social experience alters song behavior in Drosophila" (PubMed record; year inferred as 2026; authors and venue not visible). Reports that recent social experience alters courtship song, so song is shaped by experience rather than fixed. This bears on playback designs built on [11] and [17]. https://pubmed.ncbi.nlm.nih.gov/41780528/

## Claims dropped in verification

No claims were dropped in either round; all 28 were kept.

Round-1 corrections that remain accurate:
- The Eon critique was narrowed from "commentators" to a single blog post [7]. The live audit found a second, separate critique (see new leads), so "one blog post" describes this source only.
- The Lillvis result was relabelled as causal manipulation plus wiring [10].
- The pC2l and vpo results were re-cited to the primary papers [14][15] instead of a superseded bioRxiv preprint of [13].
- BANC neuron and synapse counts were removed pending the paper [19].
- FlyGM's "more efficient" was reframed as a network-design benefit, and its venue was flagged [24].
- "Validated" was removed from LLantia [25].
- Shiozaki authorship was corrected to the Stern and Dickson labs [27].
- flymsg's "validated, nothing fitted" was reduced to self-defined checks and one rescaled parameter [28].

Live-audit corrections:
- Pugliese [9]: authorship corrected to the Tuthill and Brunton labs; Shiu is not an author.
- FlyGM [24]: the unsupported "NeurIPS 2025" listing was removed, and the first author (Jin Z, Tsinghua University) was added.
- flymsg [28]: the checks were redescribed as tests against known circuit functions plus agreement with Shiu's brian2 model, and the cVA statement was removed.

Five kinds of material were excluded as evidence without being scored:
- upload and consciousness blogs
- a news headline implying a full brain simulation that scales to humans
- the "Connectome Music Rater" and "flybrain-audio" novelty tools
- crypto repositories such as "flycoin"
- Eon's own marketing figures (for example "91% behavior accuracy"), which are unreviewed

## Sources

1. A Drosophila computational brain model reveals sensorimotor processing -- Shiu PK et al. -- Nature 634:210-219, 2024 -- https://www.nature.com/articles/s41586-024-07763-9
2. Connectome-constrained networks predict neural activity across the fly visual system -- Lappalainen JK, ... Macke JH, Turaga SC -- Nature, 2024 -- https://www.nature.com/articles/s41586-024-07939-3
3. Prediction of neural activity in connectome-constrained recurrent networks -- Beiran M, Litwin-Kumar A -- Nature Neuroscience 28:2561-2574, 2025 -- https://www.nature.com/articles/s41593-025-02080-4
4. Whole-body physics simulation of fruit fly locomotion -- Vaxenburg R, Siwanowicz I, Merel J, Robie AA, Morrow C, Novati G, Stefanidi Z, Both G-J, Card GM, Reiser MB, Botvinick MM, Branson KM, Tassa Y, Turaga SC -- Nature 643(8074):1312-1320 (published online 23 Apr 2025; PMID 40267984), 2025 -- https://www.nature.com/articles/s41586-025-09029-4
5. NeuroMechFly v2: simulating embodied sensorimotor control in adult Drosophila -- Wang-Chen S, Stimpfling VA, Lam TKC, Özdil PG, Genoud L, Hurtak F, Ramdya P -- Nature Methods (published 12 Nov 2024; PubMed 39533006), 2024 -- https://www.nature.com/articles/s41592-024-02497-y
6. How the Eon Team Produced a Virtual Embodied Fly -- Eon Systems -- Company blog (not peer-reviewed), 2026 -- https://eon.systems/updates/embodied-brain-emulation (companion page "We've Uploaded a Fruit Fly": https://eon.systems/updates/weve-uploaded-a-fruit-fly)
7. No, we haven't uploaded a fly yet -- Preserving Hope (Substack; cross-posted to LessWrong) -- Blog, 2026 -- https://www.lesswrong.com/posts/ybwcxBRrsKavJB9Wz/no-we-haven-t-uploaded-a-fly-yet
8. State of Brain Emulation Report 2025 -- Zanichelli N, Schons M, Freeman I, Shiu P, Arkhipov A -- arXiv 2510.15745 (October), 2025 -- https://arxiv.org/abs/2510.15745
9. Connectome simulations identify a central pattern generator circuit for fly walking -- Pugliese SM, Chou GM, Abe ETT, Turcu D, Lancaster JK, Tuthill JC, Brunton BW -- bioRxiv 10.1101/2025.09.12.675944 (PubMed 42094485 and PMC listings exist; journal not identified), 2025 -- https://www.biorxiv.org/content/10.1101/2025.09.12.675944v1.full
10. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology 34(4), 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00015-0
11. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA, Pacheco DA, ... Murthy M -- Nature 622:794-801 (PMID 37821705), 2023 -- https://www.nature.com/articles/s41586-023-06632-1
12. A neural circuit for context-dependent multimodal signaling in Drosophila -- Steinfath E, Khalili A, Stenger M, Schultze BL, Ravindran Nair S, Alizadeh K, Clemens J -- Nature Communications (published 27 Oct 2025; bioRxiv 2024.12.04.625245), 2025 -- https://www.nature.com/articles/s41467-025-64907-9
13. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, ... Murthy M -- Current Biology 32(15):3317-3333 (PMID 35793679), 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
14. Shared song detector neurons in Drosophila male and female brains drive sex-specific behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29:3200-3215, 2019 -- URL not verified
15. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Nature 589:577-581 (DOI 10.1038/s41586-020-2972-7), 2021 -- https://ideas.repec.org/a/nat/nature/v589y2021i7843d10.1038_s41586-020-2972-7.html (RePEc index page)
16. Mapping model units to visual neurons reveals population code for social behaviour -- Cowley BR, Calhoun AJ, Rangarajan N, Ireland E, Turner MH, Pillow JW, Murthy M -- Nature (May 2024; PMID 38778103), 2024 -- https://www.nature.com/articles/s41586-024-07451-8
17. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience 22(12):2040-2049 (PMID 31768056; Author Correction s41593-019-0571-4, PMID 31857711), 2019 -- https://www.nature.com/articles/s41593-019-0533-x
18. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Berg S et al. (Janelia FlyEM, Cambridge Connectomics, Google Research; first author not visible in the audit) -- Cell (published 3 Sep 2026, open access; PubMed 42691995; bioRxiv 10.1101/2025.10.09.680999), 2026 -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6
19. Distributed control circuits across a brain-and-cord connectome -- Bates AS et al. (listed as Bates, Phelps, Kim, Yang et al.; BANC consortium) -- Nature (PubMed 42259917; bioRxiv 10.1101/2025.07.31.667571), 2026 -- https://www.nature.com/articles/s41586-026-10735-w
20. Neurotransmitter classification from electron microscopy images at synaptic sites in Drosophila melanogaster -- Eckstein N et al. -- Cell 187:2574-2594 (published 9 May 2024; doi 10.1016/j.cell.2024.03.016), 2024 -- https://www.cell.com/cell/fulltext/S0092-8674(24)00307-6
21. Whole-brain annotation and multi-connectome cell typing of Drosophila -- Schlegel P, Yin Y, Bates AS, et al. (FlyWire Consortium) -- Nature 634:139-152 (PMID 39358521), 2024 -- https://www.nature.com/articles/s41586-024-07686-5
22. Connectome-constrained modeling identifies neurons and synapses that sustain spontaneous activity in Drosophila -- authors not captured -- bioRxiv (posted about 25 Aug 2026; unreviewed), 2026 -- https://www.biorxiv.org/content/10.64898/2026.08.21.745055v1.full
23. Online Fitting of a Connectome-Constrained Drosophila Whole-Brain Model to Calcium Imaging Data -- authors not captured -- OpenReview submission (review status not visible), 2026 -- https://openreview.net/pdf?id=wCBNxp1qWe
24. Whole-Brain Connectomic Graph Model Enables Whole-Body Locomotion Control in Fruit Fly -- Jin Z et al. (4 authors; Tsinghua University) -- arXiv 2602.17997 (Feb 2026; peer-reviewed venue not identified; project page sites.google.com/view/flygm), 2026 -- https://arxiv.org/abs/2602.17997
25. Neural Circuit Function Inference with LLMs -- Yin Y, Cardona A -- arXiv 2608.00059, 2026 -- https://arxiv.org/abs/2608.00059
26. Functional connectivity, structural connectivity, and inter-individual variability in Drosophila melanogaster -- authors not captured -- eLife reviewed preprint 107990 / bioRxiv 10.1101/2025.07.01.662601, 2025 -- https://elifesciences.org/reviewed-preprints/107990
27. Activity of nested neural circuits drives different courtship songs in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- Nature Neuroscience (published 28 Aug 2024; DOI 10.1038/s41593-024-01738-9; PubMed 39198658), 2024 -- https://www.nature.com/articles/s41593-024-01738-9
28. flymsg: Simulate and view in 3D the complete male Drosophila CNS connectome -- gianlucamazza (GitHub) -- GitHub repository, releases v0.5.0/v0.5.1 (not peer-reviewed), 2026 -- https://github.com/gianlucamazza/flymsg

Datasets and code (named in the audit's results; repository URLs were not captured):

29. Male CNS Connectome (project page for [18]) -- Janelia FlyEM and collaborators -- Janelia project page, 2026 -- https://www.janelia.org/project-team/flyem/male-cns-connectome
30. flybody (code for [4]) -- TuragaLab -- GitHub repository TuragaLab/flybody, n.d. -- URL not verified
31. Pugliese_cpg_2025 (code for [9]) -- smpuglie -- GitHub repository smpuglie/Pugliese_cpg_2025, n.d. -- URL not verified
32. vibmodel (circuit model code for [12]) -- janclemenslab -- GitHub repository janclemenslab/vibmodel, n.d. -- URL not verified
33. connconstr (code for [3]) -- emebeiran -- GitHub repository emebeiran/connconstr, n.d. -- URL not verified
34. llm_circuit_analysis (LLantia code for [25], with Connectome Interpreter) -- YijieYin -- GitHub repository YijieYin/llm_circuit_analysis, n.d. -- URL not verified
35. Data and code for [27] -- Shiozaki HM et al. -- Janelia figshare, 2024 -- URL not verified

## Verification ledger

| # | Claim (short) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | Shiu central-brain LIF model predicts taste-responsive, feeding-initiation neurons from gustatory activation | [HIGH] | confirmed | 1 |
| 2 | Same model predicts grooming circuit; JO-CE, not JO-F, drives aBN1; tested optogenetically | [HIGH] | confirmed | 1 |
| 3 | Fitted 64-type optic-lobe network matched single-neuron measurements across 26 studies | [HIGH] | confirmed | 2 |
| 4 | Connectome alone insufficient to predict activity; adding partial recordings predicts unrecorded neurons | [HIGH] | confirmed | 3 |
| 5 | flybody: MuJoCo whole-body fly; walking and flight via reinforcement learning | [HIGH] | confirmed | 4 |
| 6 | NeuroMechFly v2 adds senses, feedback, terrain; connectome-constrained fly-fly following | [HIGH] | confirmed | 5 |
| 7 | Eon coupled Shiu model to NeuroMechFly v2 via hand-picked descending-neuron readout | [HIGH] | confirmed | 6 |
| 8 | Blog critique: few of ~1,300 descending neurons read out; hand-chosen mappings | [MED] | confirmed | 7 |
| 9 | State of Brain Emulation Report 2025 reassesses progress since 2008 roadmap | [HIGH] | confirmed | 8 |
| 10 | VNC simulations: DNg100 top driver; three-interneuron rhythm generator; DNb08 confirmed optogenetically | [MED] | corrected | 9 |
| 11 | Eight fru/dsx VNC types form nested pathways: smaller sine, larger pulse | [MED] | confirmed | 10 |
| 12 | Compact model reproduces context-dependent song via input strength and P1a disinhibition | [HIGH] | confirmed | 11 |
| 13 | Shared brain neurons drive song and vibration through separate premotor pathways | [HIGH] | confirmed | 12 |
| 14 | 24 auditory types show a continuum of song-mode preferences from interconnectivity | [HIGH] | confirmed | 13 |
| 15 | pC2l and vpo neurons respond more strongly to pulse than sine song | [MED] | confirmed | 14, 15, 13 |
| 16 | Knockout training maps model units to LC types; population code drives courtship | [HIGH] | confirmed | 16 |
| 17 | GLM-HMM finds three states mapping female cues to song; neuron pair switches states | [HIGH] | confirmed | 17 |
| 18 | Male CNS connectome: 166,700 neurons, 11,710 types, 138 dimorphic, 289 male-specific | [HIGH] | confirmed | 18 |
| 19 | BANC female brain-and-cord connectome: local sensory-effector loops linked by ascending/descending modules | [MED] | confirmed | 19 |
| 20 | EM-based six-transmitter classifier: 87% per synapse, 94% per neuron | [HIGH] | confirmed | 20 |
| 21 | FlyWire vs hemibrain: broad stereotypy; one-third of hemibrain types not re-identified | [HIGH] | confirmed | 21 |
| 22 | Model fit to spontaneous activity reproduces untrained features; inhibitory hubs sustain dynamics | [MED] | confirmed | 22 |
| 23 | Online fitting of FlyWire-constrained firing-rate model; weights, time constants, inputs fitted | [HIGH] | confirmed | 23 |
| 24 | FlyGM: connectome as controller graph beats random, rewired and MLP baselines | [MED] | corrected | 24 |
| 25 | LLantia proposes cell-type functions from LLM-extracted literature plus connectome | [MED] | confirmed | 25 |
| 26 | Resting functional correlations track direct structural connectivity; mushroom body relies on indirect | [MED] | confirmed | 26 |
| 27 | Imaging in singing males: sine-active neurons also pulse-active; pulse recruits more | [HIGH] | confirmed | 27 |
| 28 | flymsg: unreviewed MaleCNS LIF model; 29 self-defined qualitative checks, no recordings | [MED] | corrected | 28 |
