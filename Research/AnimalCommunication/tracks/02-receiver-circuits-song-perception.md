# Track 02 -- Receiver circuits: how flies hear, evaluate, and respond to song

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 checked (12 verified / 8 corrected / 0 conflict / 11 unverified by a second verifier: 5 verified-single, 6 corrected-single) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

*Verification note: neither verifier had live search or page access, so no URL below was confirmed from a search result. [HIGH] means both verifiers agreed the claim matches the paper. [MED] means the claim was corrected by both verifiers, or confirmed by only one. [LOW] means one verifier corrected it and the other could not check it; most of these are 2024-2026 papers. All work is in* Drosophila melanogaster *unless noted.*

## Bottom line

- Yes, within limits. Fly courtship song is a documented case of identified neurons whose recorded activity tracks a communication signal. The chain runs from the antennal receptor neurons through the AMMC relay, intermediate WED/VLP layers and doublesex-expressing (Dsx+) detectors (pC2, vpoEN, pC1) to the descending neurons that produce the female's reply (vpoDN, DNp13) [HIGH][1][8][11][12][16].
- Selectivity for song timing is built in steps. Receptor neurons are not selective for the inter-pulse interval (IPI), but B1 neurons are, probably shaped by GABAergic feedforward inhibition [HIGH][8]. pC2 neurons are tuned to pulse-song features, with similar tuning in both sexes [HIGH][11]. In the FlyWire wiring map, the intermediate types form a dense network with no hierarchy [MED][9].
- The reply is readable and depends on the female's state. vpoDN drives vaginal plate opening (acceptance) and DNp13 drives ovipositor extrusion [HIGH][12][16]. Mating weakens vpoDN's song response through pC1 but leaves vpoEN's unchanged [MED][12]. It changes how strongly DNp13 drives movement, not how DNp13 responds to song [HIGH][16]. What ovipositor extrusion signals is disputed [MED][16] [HIGH][17].
- Females judge song over seconds to tens of seconds [HIGH][19]. A model whose units adapt and slowly integrate their inputs fits both neural and courtship data best [MED][20]. It could serve as an in-silico listener for designing stimuli.
- Neurons lighting up for song are not necessarily dedicated to communication. Song-evoked activity appears in most central-brain regions, including in neurons that respond to other senses, and most of it has not been assigned to connectome cell types [HIGH][1].
- The 2026 male connectome predicts two things. First, vpoEN's output goes to different targets in each sex [LOW][23]. Second, a pathway carries signals from the song generators back to the song detectors [MED][23]. Both predictions come from wiring alone and have not been tested by recording activity.
- For two-way communication, the fly offers a small signal space that playback can control (IPI, pulse vs sine, amplitude envelope, bout timing) and a few measurable replies. That makes it a testbed for closed-loop playback that tracks the animal's state. Nothing here supports decoding a meaning-bearing "language".

## What the evidence shows

### Where song lights up the brain

Volumetric calcium imaging of all neurons in the central brain, registered across flies, found auditory activity in most regions. This included neurons that respond to other senses. Response timing varied widely, and most responses were tuned to courtship-song features [HIGH][1]. The flies were head-fixed and of both sexes. Two caveats apply. The stimulus set was small (pulse, sine, noise controls), and the imaged units are automatically extracted regions, not identified cell types [HIGH][1]. Responses were consistent across trials and animals in early mechanosensory regions and more variable at higher stages of the putative pathway. That variability was largely independent of spontaneous movement [HIGH][1]. The order of stages was inferred, not traced cell by cell.

### Stage 0 -- the antenna

Laser vibrometry and acoustic measurements report that the antenna's mechanics are nonlinear. At low amplitude the antenna is tuned near song frequency. At higher amplitude its resonance shifts up by hundreds of Hz [LOW][2]. Song measured at the female was often louder than predicted, so under natural conditions the antenna may be working outside its amplified, song-tuned range [LOW][2]. These are biophysical measurements, not behavioral ones. They do not show that hearing fails, and they conflict with the established view that the antenna actively amplifies sound [LOW][2].

### Stage 1 -- Johnston's organ neurons (JONs)

JONs form five subgroups (JO-A to JO-E). In calcium imaging, JO-A and JO-B respond to antennal vibration, and JO-C and JO-E respond most to steady deflection of the antenna. Silencing A/B impaired song responses, and silencing C/E impaired gravity-guided behavior [MED][3]. JO-B has been reported to prefer lower frequencies than JO-A, but the ~100 Hz cut-off and the NompC expression pattern need confirming [MED][3]. A 2021 preprint reports three JON properties: adaptation to stimulus mean and intensity, frequency tuning that shifts with intensity, and a quadratic nonlinearity. Together these give an efficient code for song [MED][4]. The adaptation and nonlinearity come from recordings; "efficient" comes from the model. JONs are not IPI-selective [HIGH][8].

A 2025 study reports several findings in females. JONs express several dopamine receptor types, and connectome wiring suggests that some JONs contact dopaminergic neurons. Knocking down the receptor Dop1R2 reduced JON sound responses in unmated females but not in mated ones (calcium imaging). Overexpressing Dop1R2 strengthened unmated females' behavioral response to song [LOW][5]. This is a single lab's result, it has not been replicated, and the paper has an erratum whose content was not checked.

### Stage 2 -- the AMMC: B1, A2 and inhibitory interneurons

Whole-cell recordings show that two cell types downstream of the antennal receptors encode vibration differently [MED][6]:

- **A2** is excited by movement in both directions and low-pass filters it, so it tracks the vibration envelope.
- **B1** is phase-sensitive and band-pass filters input at the stimulus frequency. Individual B1 cells prefer different frequencies because they have different voltage-gated Na+/K+ conductances.

The stimuli were synthetic vibrations, not recorded song [MED][6].

Of seven projection-neuron types and five local-interneuron types that were tested, only aPN1 (= B1) and the GABAergic interneuron aLN(al) were needed for behavioral song responses, in both sexes [HIGH][7]. This is causal evidence, mostly from silencing, and "only" applies to the lines tested.

B1 neurons are selective for IPI in a way that upstream JONs are not. Two types of GABAergic AMMC interneurons receive auditory input and inhibit B1 before it fires (feedforward). The authors propose that this inhibition shapes B1's interval selectivity and the female's response to song [HIGH][8]. B1 is the earliest stage at which IPI selectivity has been recorded [MED][8].

### Stage 3 -- intermediate layers and the first circuit map

Calcium imaging of newly identified WED/VLP auditory types, alongside B1 and pC2, found a continuum of preference between sine and pulse song rather than two separate channels [MED][9]. The source counts 24 new types, which were defined by anatomy. Only the types with usable driver lines were imaged [MED][9].

The same study mapped synapses among these types in FlyWire, an electron-microscopy (EM) reconstruction of an adult female brain. Neurons with different song-mode preferences and response timescales are highly interconnected, with no hierarchy. The authors call this the first circuit-level map of the fly auditory pathway and compare it with the imaged tuning [MED][9]. Whether each synapse excites or inhibits was inferred from predicted neurotransmitter identity, not measured [MED][9]. In this track, this is where wiring and activity are compared most directly. The paper predates the October 2024 FlyWire release, so the seed lead that placed it in that package was wrong.

In males, calcium imaging showed that third-order vPN1 neurons prefer pulse song with long IPIs. Fourth-order pC1 neurons respond across IPIs in a pattern that closely matches the IPI tuning of song-induced "chaining", in which males court each other in a line. The pathway runs aPN1 -> vPN1 -> pC1 [MED][10]. Silencing vPN1 or pC1 disrupts chaining [HIGH][10].

### Stage 4 -- Dsx+ detectors and state integrators

- **pC2l / pC2m.** These neurons are tuned to several timing features of pulse song, with similar tuning in male and female brains [HIGH][11]. Silencing pC2l in females reduces their slowing to pulse song. Optogenetic activation of some pC2l neurons in males elicits pulse song during activation and sine song afterward [MED][11]. The authors conclude that detectors shared by both sexes drive behaviors that differ by sex [HIGH][11].
- **vpoEN.** These female auditory neurons are tuned to features of *D. melanogaster* song and excite vpoDN [HIGH][12]. Their song responses do not change after mating [MED][12].
- **pC1 (female).** Activating pC1 or pCd makes females receptive, and silencing them makes females unreceptive. Female pC1 responds both to song and to the male pheromone cVA [HIGH][13]. pC1 encodes mating status and excites vpoDN [HIGH][12]. The 2014 experiments targeted pC1 as one cluster, before it was split into subtypes pC1a-e.
- **pC1d/e and aIPg.** Activating pC1d/e changes female behavior for minutes when males are present. EM reconstruction shows strong recurrent connections between pC1d/e and fruitless-expressing aIPg neurons [HIGH][14]. The idea that this loop holds the state comes from wiring. Reverberating activity has not been recorded [HIGH][14].
- **pCd-2.** A 2024 study reports that song preference learning needs GABA made in pCd-2 neurons, about four Dsx+ cells per hemibrain. In this learning, flies that have heard their own species' song respond less to another species' song. Female connectome data show direct, often reciprocal, pCd-2-pC1 connections [LOW][15]. It is unconfirmed whether the behavior was measured in females and whether dopamine input is required.

### Stage 5 -- descending reply neurons and the mating-state gate

A pair of female-specific descending neurons (vpoDNs) controls vaginal plate opening (VPO), the female's acceptance act. They receive excitatory input from song-tuned vpoEN and from pC1, which encodes mating status. EM data confirm these connections [HIGH][12]. The evidence combines imaging, optogenetics and connectivity. After mating, vpoDN's song responses weaken but vpoEN's do not, and pC1 mediates the change [MED][12]. The main gate on VPO is therefore where vpoDN combines song and state. This does not exclude modulation earlier in the pathway, such as the JON dopamine result [MED][12][5].

DNp13 neurons are command-type neurons for ovipositor extrusion (OE). They receive song through direct pC2l input. Mating leaves their song responses unchanged but alters how effectively they drive OE, through ppk+ uterine sensory neurons that ovulation activates [HIGH][16]. Song more often evokes VPO in virgin females and OE in recently mated ones [MED][16].

**What OE means is disputed.** Wang et al. treat OE by mated females as rejection [MED][16]. Mezzera et al., in the same journal issue, report the following. Only sexually mature females show OE, only during courtship, and in response to song. OE promotes male copulation attempts with both virgin and mated females, and it signals acceptance in virgins [HIGH][17]. Both readings rest on behavioral evidence.

State signals also reach the brain from the body. A 2025 annotation of the female FlyWire brain identified putative fruitless and doublesex neuron types by matching their shapes to light-microscopy images. The reported counts (1,278 fruitless, 50 doublesex, 79 ambiguous) are unverified [LOW][18]. Earlier functional work established that SAG ascending neurons carry post-mating (sex-peptide) information to pC1. The annotation restates this with connectome support [LOW][18].

### Timescale: song is judged over seconds

During natural courtship, females respond to song structure over tens of seconds and integrate song. Simple computations on single-neuron responses predict how fast females walk [HIGH][19]. The evidence combines behavior from courting pairs, recordings from AMMC/VLP neurons in separate head-fixed flies, and a model [HIGH][19]. A 2025 comparison of models against neural and courtship data found that the best model has units that adapt to and accumulate their inputs, with varied nonlinear adaptation and slow integration. In this model, fine-scale song information persists in the population code for a long time [MED][20]. Its units are abstract rather than wired cell types, so the persistence is a property of the model [MED][20]. Females also prefer their own strain's song amplitude envelope over a flat or steeper one [MED][21]. That preference is behavioral; no envelope-detecting neuron has been shown.

### Species differences

*D. simulans* pulse song has an IPI of ~55 ms and a carrier frequency of ~320 Hz, against ~35 ms and ~170 Hz in *D. melanogaster*. *D. simulans* females become more receptive to their own species' IPIs [MED][22]. JONs and B1 have the same shape and neurotransmitters in both species, so the circuits that set IPI preference are inferred to have diverged further downstream. The node that diverged is unidentified [MED][22].

### 2026 male CNS connectome: predictions from wiring alone

The complete male central nervous system (CNS) connectome reports that sex-specific and dimorphic neuron types are concentrated in higher brain centres. The sensory and motor periphery is largely the same in both sexes [LOW][23]. Nobody has directly checked whether this holds for the early auditory pathway. A male-female comparison finds that vpoEN has one strong partner in both sexes (DNp55) and one sex-specific partner in each: vpoDN in females and pC1_6a in males [LOW][23]. vpoEN's song responses have been recorded only in females [HIGH][12]. Male-specific ascending neurons carry signals from the nerve-cord song generators to brain song-detection circuits, and the authors infer that singing likely influences song detection [MED][23]. None of this has been tested with activity recordings or manipulations.

### What the evidence does not show

- The label "species-specific song detector" overstates what single neurons do. Male pC1's unverified ~35-65 ms band-pass would include the *D. simulans* IPI, so species discrimination may partly be a population or behavioral property [LOW][10][22].
- The male CNS cell-type counts differ between versions. Quote them only from the final paper [LOW][23].

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| Antenna | Amplitude-dependent tuning | Measured at female | Biophysical measurement | LOW | 2 |
| JO-A / JO-B | Vibration receptors; adapt; not IPI-selective | Both | Recorded activity + silencing | MED; HIGH for "not IPI-selective" | 3, 4, 8 |
| JONs (Dop1R2) | Dopamine boosts sound responses in virgins only | Female | Recorded activity + knockdown + wiring | LOW | 5 |
| AMMC-B1 (aPN1) | Phase-locked band-pass; IPI-selective; needed for song responses | Both | Recorded activity + silencing | HIGH | 6, 7, 8 |
| AMMC-A2 | Tracks vibration envelope | Not stated | Recorded activity | MED | 6 |
| aLN(al), GABAergic AMMC interneurons | Feedforward inhibition of B1; aLN(al) needed | Both | Recorded activity + manipulation | HIGH | 7, 8 |
| WED/VLP intermediate types | Pulse-sine continuum; non-hierarchical network | Female | Recorded activity + wiring | MED | 9 |
| vPN1 | Prefers long-IPI pulse song; needed for chaining | Male | Recorded activity + silencing | MED / HIGH | 10 |
| pC1 (male cluster) | Tuning matches chaining; needed for chaining | Male | Recorded activity + silencing | MED / HIGH | 10 |
| pC2l / pC2m | Pulse-song detectors; female slowing; male singing | Both | Recorded activity + manipulation | HIGH / MED | 11 |
| vpoEN | Own-species song; excites vpoDN; unchanged by mating | Female (activity), both (wiring) | Recorded activity; wiring only in males | HIGH / MED; LOW (male) | 12, 23 |
| pC1 (female) | Song + cVA; mating status; receptivity | Female | Manipulation + recorded activity + wiring | HIGH | 12, 13 |
| pC1d/e + aIPg | Minutes-long state; recurrent loop | Female | Manipulation + wiring | HIGH | 14 |
| pCd-2 | GABA for song preference learning | Unconfirmed | Knockdown + wiring | LOW | 15 |
| vpoDN | Vaginal plate opening; weaker after mating | Female | Recorded activity + manipulation + wiring | HIGH / MED | 12 |
| DNp13 | Ovipositor extrusion; pC2l input; mating gates output | Female | Recorded activity + manipulation + wiring | HIGH | 16 |
| ppk+ uterine neurons | Ovulation signal gating DNp13 | Female | Manipulation | HIGH | 16 |
| SAG ascending neurons | Post-mating state to pC1 | Female | Earlier manipulation; annotation | LOW | 18 |
| DNp55, pC1_6a | vpoEN partners (shared; male-specific) | Both; male | Wiring only | LOW | 23 |
| Male ascending neurons | Song generators to song detectors | Male | Wiring only | MED | 23 |

## Why this matters for two-way communication with animals

1. **The signal can be specified as a handful of parameters.** Neural tuning or behavioral preference has been measured for IPI, pulse vs sine, and amplitude envelope [8][9][11][21]. Playback that controls these features addresses the receiver's own filters, with no assumed vocabulary.
2. **Replies can be read out at two levels.** Behavior gives slowing, VPO and OE. The neural level gives vpoDN and DNp13, whose song responses can be imaged [12][16]. A reply could in principle be read from the brain before the animal moves.
3. **The same signal gets different answers in different states.** Mating alters vpoDN [12] and DNp13 output [16], and possibly JON gain [5]. A closed-loop system must estimate the animal's state rather than assume one fixed mapping.
4. **A turn in the exchange lasts seconds.** Integration over seconds to tens of seconds [19][20] means adaptive playback should update on that timescale. The model in [20] can pre-score candidate songs before they are tried on animals.
5. **Calibration matters.** Antennal tuning depends on amplitude [2], so playback level must be set at the animal's position.
6. **Replies can be ambiguous.** OE has two competing interpretations [16][17]. Any reply "dictionary" must depend on the animal's state and be checked against how the partner actually responds.
7. **Singing may change hearing.** If the male singing-to-hearing wiring works as predicted [23], a two-way rig will need to account for the animal's own sound.

## Open questions

- **Where does mating status gate the response?** vpoEN is unchanged by mating [12], while a 2025 study reports dopamine modulation of JONs in virgins only [5]. The gating may be spread across stages. Age, hunger and other neuromodulators are unexamined.
- **Which neurons hold the seconds-long integration?** Candidates are adaptation in WED/VLP neurons [20] and the pC1d/e-aIPg loop [14]. Neither has been shown to do this in a living fly.
- **Do males respond as the male connectome predicts?** Do vpoEN and pC1_6a respond to song in males? Does self-singing suppress auditory responses, as a copy of the motor command (corollary discharge) would [23]?
- **How does sharp IPI selectivity arise?** Can a connectome-constrained model reproduce each type's tuning from wiring alone, given a network with no hierarchy [9]?
- **Which node diverged between species?** Candidates include the AMMC interneurons, vpoEN and pC1 [22]. Comparisons beyond *D. simulans* are missing.
- **Can activity be matched to connectome cell types in the same animal?** Most whole-brain activity [1] is assigned to regions, not cell types. Sex-shared types (B1, pC2, vpoEN) have not been confirmed as matched across the female and male connectomes (Track 04) [LOW].
- **Which inputs were not covered?** Gaps include female copulation song, other males' song, substrate vibration, aggression song, near-field escape, sound localization between the two antennae, and sine-specific processing. Verifiers named Kerwin et al. 2020, Versteven et al. 2017 and Batchelor & Wilson 2019 (Track 03) [LOW].
- **How does the receiver shape the sender?** Male song depends on female movement and distance, and males switch between two pulse types, Pfast and Pslow. How female neurons respond to each type is untested here. This loop is the closest fly analogue to a conversation. Verifiers named Coen et al. 2014/2016, Clemens et al. 2018 and Calhoun et al. 2019 (Tracks 01, 06) [LOW].
- **What happens downstream of the reply neurons?** Where vpoDN and DNp13 outputs go in the nerve-cord connectomes (FANC, BANC) is unknown. Which male neurons read OE and VPO is also unknown (Track 06).

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Connectome-to-activity atlas of the song receiver | Each auditory type's song tuning can be predicted from FlyWire wiring plus inferred synapse sign, using adapting, integrating units [20]. | Build a rate model of the ~30 auditory types [9] plus pC2, vpoEN, pC1 and vpoDN. Drive it with natural and synthetic song. Compare with published imaging [9][10][11][12], then register whole-brain maps [1] to the model's predicted fingerprints. | Computational; can start now | Extract the FlyWire auditory subgraph and fit B1 and pC1 IPI tuning. Note that pC1 tuning was recorded in males [10] while FlyWire is a female brain. |
| 2. Closed-loop "duet" playback | Playback that adapts IPI, pulse/sine ratio and envelope to the female's replies raises receptivity faster than fixed song and reveals her state-dependent preferences. | Track females by pose and classify replies in under 100 ms. A bandit or Bayesian optimizer updates the speaker's song, with [20] as the prior. Compare with open-loop playback and with real males. | Wet lab, months | Calibrate open-loop playback to natural near-field amplitude [2]. Then add walking speed as the only feedback signal. |
| 3. Read the answer from the brain: vpoDN/DNp13 as a two-symbol reply channel | Imaging vpoDN ("yes") and DNp13 ("no/ready") together decodes the reply before movement. Changing state (mating, Dop1R2, SAG) shifts the answer as the wiring predicts. | Two-photon imaging in head-fixed females using split-GAL4 lines for vpoEN, vpoDN and DNp13 across synthetic songs. Add optogenetic manipulation of pC1 or SAG [12][16]. | Wet lab, months | Replicate the vpoEN/vpoDN mating dissociation [12], then add DNp13 in the same preparation. |
| 4. Test the male routing and singing-feedback predictions | In males, vpoEN drives pC1_6a, and ascending neurons reshape B1/pC2 responses during self-singing [23]. | Image vpoEN and pC1_6a in males during playback. Evoke singing optogenetically while imaging, with and without silencing the ascending neurons. | Wet lab, months; lines may need building | Query the male connectome for the ascending neurons' targets and check for existing split-GAL4 lines. |
| 5. Retune *D. melanogaster* females to *D. simulans* song | Changing AMMC inhibition [8], or pC1 plasticity via pCd-2 ([LOW][15]), shifts IPI preference toward ~55 ms [22]. | Use the Project 1 model to find the smallest change that moves pC1/vpoEN tuning. Then test it in flies by manipulation or by learning with *D. simulans* song. | Wet lab, years | Run a model parameter sweep to choose the target. |

**Data and tools listed by the researcher (links not checked by verifiers):** Pacheco 2021 whole-brain dataset https://datacommons.princeton.edu/discovery/catalog/doi-10-34770-gv6w-5351 · FlyWire https://flywire.ai/ · BANC brain-and-nerve-cord connectome https://blog.flywire.ai/2025/11/03/the-banc-brain-and-nerve-cord/ · male CNS vpoEN page https://male-cns.janelia.org/build/summary_types/vpoEN/ and project page https://www.janelia.org/project-team/flyem/male-cns-connectome · JON model code https://github.com/janclemenslab/quadratic-adaptive · species-comparison data https://datadryad.org/dataset/doi:10.5061/dryad.tdz08kq3f · Dop1R2 data https://data.mendeley.com/datasets/29hpr3nrrv/1

## Leads needing confirmation

- **Male pC1 band-pass of ~35-65 ms.** This appears in the researcher's summary but not in the abstract [10]. Check the figures.
- **JO-B's ~100 Hz cut-off and NompC expression.** These may come from later papers (verifiers suggested Effertz et al. 2011 and Matsuo et al. 2014) [3].
- **JON adaptation preprint.** Its peer-review status is unknown [4]. One verifier cites Clemens et al. 2018 (Nat Commun) as independent support for adaptation.
- **Dop1R2 modulation of JONs.** Single lab, and the erratum is unchecked [5].
- **pCd-2 learning.** The sex tested, the dopamine requirement and the authors are unconfirmed [15]. The learning paradigm comes from Li, Ishimoto & Kamikouchi 2018 (eLife).
- **The 2026 male connectome.** The partner lists, the feedback pathway and the counts all await a second verifier [23]. The preprint is reportedly Berg et al. 2025.
- **PNAS publication of [20].** Confirmed by only one verifier.
- **Species values and first author for [22].** Unconfirmed; the first author may be Ohashi TS.
- **Authors of [2] and [21].** Recalled from memory by verifiers.

## Claims dropped in verification

No claim was dropped outright. Parts removed or narrowed:
- T02-03: "Only sound-sensitive JONs express NompC" was reduced to needs-confirmation. The "wind" reading of JO-C/E comes from Yorozu et al. 2009, not [3].
- T02-05: "Encode song" was changed to "encode vibration", because the stimuli were synthetic.
- T02-08: "All 24 new types imaged" overstated coverage.
- T02-09: Synapse sign was "determined" in the original claim. It was inferred from predicted transmitters.
- T02-10: The pC1 ~35-65 ms range was removed as unconfirmed.
- T02-13: Male pC2l silencing effects were removed as unconfirmed.
- T02-15: "The gate is at the descending neuron, not the detector" was too strong.
- T02-19: "OE deters only when performed by mated females" was presented as settled but is disputed.
- T02-21: "Copulation receptivity", "three receptor types" and "5-7 days" were unsupported.
- T02-24: The female subjects, the dopamine requirement and "GABA onto pC1" were unconfirmed.
- T02-26: "Including the early auditory pathway" was the researcher's extrapolation. Two conflicting type-count sets and a ~166,700-neuron total were removed.
- T02-27: The "switchboard" label and "routes song in males" read function into wiring.
- T02-29: Credit for the SAG relay moved to earlier functional work.
- T02-30: "The antenna should neither amplify nor tune to song" was softened. The evidence type was relabelled from behavioral to biophysical.
- Seed leads: Baker 2022 was not in the October 2024 FlyWire package. Wang et al. is Nature 589 (2021), published online in 2020.
- Not used as evidence: hobbyist repositories ("flybrain-audio", "neurofly16px") and an AI search summary giving unsourced BANC counts.

## Sources

1. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience 24(1):93-104, 2021 -- https://www.nature.com/articles/s41593-020-00743-y
2. Auditory sensitivity, spatial dynamics, and amplitude of courtship song in Drosophila melanogaster -- Authors not confirmed (a verifier suggests Morley EL, Jonsson T, Robert D) -- Indexed in PubMed (30180716), 2018 -- https://pubmed.ncbi.nlm.nih.gov/30180716/
3. The neural basis of Drosophila gravity-sensing and hearing -- Kamikouchi A, Inagaki HK, Effertz T, Hendrich O, Fiala A, Goepfert MC, Ito K -- Nature 458:165, 2009 -- https://www.nature.com/articles/nature07810
4. Quadratic and adaptive computations yield an efficient representation of song in Drosophila auditory receptor neurons -- Clemens J, Murthy M -- bioRxiv preprint, 2021 -- https://www.biorxiv.org/content/10.1101/2021.05.26.445391v1.full
5. Mating status-dependent dopaminergic modulation of auditory sensory neurons in Drosophila -- Yamakoshi H, Horigome M, Yamamoto S, et al. (Nagoya University) -- iScience 28(9):113232, 2025 -- https://www.cell.com/iscience/fulltext/S2589-0042(25)01493-2
6. Active Mechanisms of Vibration Encoding and Frequency Filtering in Central Mechanosensory Neurons -- Azevedo AW, Wilson RI -- Neuron 96, 2017 -- https://pubmed.ncbi.nlm.nih.gov/28943231/
7. Neural pathways for the detection and discrimination of conspecific song in D. melanogaster -- Vaughan AG, Zhou C, Manoli DS, Baker BS -- Current Biology, 2014 -- https://pubmed.ncbi.nlm.nih.gov/24794294/
8. GABAergic Local Interneurons Shape Female Fruit Fly Response to Mating Songs -- Yamada D, Ishimoto H, Li X, Kohashi T, Ishikawa Y, Kamikouchi A -- Journal of Neuroscience 38(18):4329-4347, 2018 -- https://pubmed.ncbi.nlm.nih.gov/29691331/
9. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, et al., Murthy M -- Current Biology 32(15):3317-3333, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
10. Central neural circuitry mediating courtship song perception in male Drosophila -- Zhou C, Franconville R, Vaughan AG, Robinett CC, Jayaraman V, Baker BS -- eLife 4:e08477, 2015 -- https://elifesciences.org/articles/08477
11. Shared Song Detector Neurons in Drosophila Male and Female Brains Drive Sex-Specific Behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29(19):3200-3215, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219310243
12. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Nature 589:577-581, 2021 (online 2020) -- https://www.nature.com/articles/s41586-020-2972-7
13. Central brain neurons expressing doublesex regulate female receptivity in Drosophila -- Zhou C, Pan Y, Robinett CC, Meissner GW, Baker BS -- Neuron 83(1):149-163, 2014 -- https://www.cell.com/neuron/fulltext/S0896-6273(14)00482-6
14. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco D, Encarnacion-Rivera L, et al., Murthy M -- eLife 9:e59502, 2020 -- https://elifesciences.org/articles/59502
15. Neural-circuit basis of song preference learning in fruit flies -- Kamikouchi lab (Nagoya) with Janelia co-authors; full author list not confirmed -- iScience, 2024 -- https://www.cell.com/iscience/fulltext/S2589-0042(24)01491-3
16. Circuit and Behavioral Mechanisms of Sexual Rejection by Drosophila Females -- Wang F, Wang K, et al., Dickson BJ -- Current Biology, 2020 -- https://www.cell.com/current-biology/fulltext/S0960-9822(20)31142-8
17. Ovipositor Extrusion Promotes the Transition from Courtship to Copulation and Signals Female Acceptance in Drosophila melanogaster -- Mezzera C, Brotas M, Gaspar M, Pavlou HJ, Goodwin SF, Vasconcelos ML -- Current Biology, 2020 -- https://www.cell.com/current-biology/fulltext/S0960-9822(20)30923-4
18. Sexually-dimorphic neurons in the Drosophila whole-brain connectome -- Authors not confirmed -- bioRxiv 2025 / PMC-deposited, 2025 -- https://pmc.ncbi.nlm.nih.gov/articles/PMC12259084/
19. Connecting Neural Codes with Behavior in the Auditory System of Drosophila -- Clemens J, Girardin CC, Coen P, Guan XJ, Dickson BJ, Murthy M -- Neuron, 2015 -- https://www.cell.com/neuron/fulltext/S0896-6273(15)00708-4
20. Inferring neural population codes for Drosophila acoustic communication -- Pang R, Baker CA, Murthy M, Pillow J -- PNAS, 2025 -- https://www.pnas.org/doi/10.1073/pnas.2417733122
21. Female Drosophila melanogaster respond to song-amplitude modulations -- Authors not confirmed (a verifier suggests Brüggemeier B, Porter MA, Vigoreaux JO, Goodwin SF) -- Biology Open 7(6):bio032003, 2018 -- https://journals.biologists.com/bio/article/7/6/bio032003/1956/Female-Drosophila-melanogaster-respond-to-song
22. Evolutionary conservation and diversification of auditory neural circuits that process courtship songs in Drosophila -- Kamikouchi lab (Nagoya); first author not confirmed -- Scientific Reports, 2023 -- https://www.nature.com/articles/s41598-022-27349-7
23. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Janelia FlyEM, MRC LMB, University of Cambridge and Google Research consortium -- Cell, 2026 -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6 (also given as https://www.sciencedirect.com/science/article/pii/S0092867426009426)
