# Track 02 -- Receiver circuits: how flies hear, evaluate, and respond to song

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 · live-search audit: confirmed 27, corrected 4, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** Round 1 had one researcher, who used live web search, and two independent verifiers. One verifier checked source fidelity and the other acted as an adversarial skeptic. Neither verifier had web access, so both checked claims from their own knowledge. In round 2 a live auditor checked every kept claim against live web search results, with a second opinion reserved for any claim the search contradicted. No claim was contradicted (0 of 31), so no second opinion was needed. The audit ran in two passes because of the session search cap (26 searches; the cap was reached), and the later pass checked only the claims the earlier pass had not reached. [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding itself was not directly visible, or the claim was corrected, or it rested on a single verifier. [LOW] means not located or unconfirmed, and [CONFLICT] means the checks disagree. This track has 17 [HIGH] and 14 [MED] claims, and none at [LOW] or [CONFLICT]. All work is in *Drosophila melanogaster* unless noted.

## Bottom line

- Yes, within limits. Fly courtship song is a documented case of identified neurons whose recorded activity tracks a communication signal. The chain runs from the antennal receptor neurons through the AMMC relay, intermediate WED/VLP layers and doublesex-expressing (Dsx+) detectors (pC2, vpoEN, pC1) to the descending neurons that produce the female's reply (vpoDN, DNp13) [HIGH][1][8][9][11][12][16].
- Selectivity for song timing is built in steps. AMMC-B1 neurons show inter-pulse-interval (IPI) selectivity that differs from that of the upstream receptor neurons, and GABAergic feedforward inhibition is proposed to shape it [HIGH][8]. pC2 neurons are tuned to several temporal features of pulse song, with similar tuning in both sexes [HIGH][11]. In the FlyWire wiring map, the intermediate auditory types are highly interconnected in a network without hierarchy [HIGH][9].
- The reply is readable and depends on the female's state. vpoDN controls vaginal plate opening (acceptance) and DNp13 commands ovipositor extrusion [HIGH][12][16]. Mating attenuates vpoDN's song responses, through pC1, while vpoEN's are unchanged [HIGH][12]. In DNp13, mating changes how effectively the neurons engage ovipositor-extrusion motor circuits and leaves their song responses unchanged [HIGH][16]. What ovipositor extrusion signals is disputed [MED][16] [HIGH][17].
- Females integrate song over tens of seconds [HIGH][19]. In a 2025 model comparison, units that adapt to and slowly accumulate their inputs best predicted female locomotion during courtship [HIGH][20]. That model could serve as an in-silico listener for designing stimuli.
- Song-evoked activity is widespread. It appears in most central-brain regions, including in neurons that respond to other senses [HIGH][1]. The imaged units are regions of interest rather than identified cell types, so a response to song does not by itself show that a neuron is dedicated to communication.
- The 2026 male connectome adds three wiring results. vpoEN connects to different targets in each sex [MED][23]. Male-specific ascending neurons link the nerve-cord song generators to brain song detectors [MED][23]. vPN1 is GABAergic, so its apparent drive of male pC1 is best explained by disinhibition through mAL [MED][10][23]. No source in this track tests these with recordings or manipulations, and the ascending-neuron finding was not visible in live search results.
- For two-way communication, the fly offers a small signal space that playback can control (IPI, pulse vs sine, amplitude envelope, bout timing) and a few measurable replies. That makes it a testbed for closed-loop playback that tracks the animal's state. Nothing here supports decoding a meaning-bearing "language".

## What the evidence shows

### Where song lights up the brain

Volumetric pan-neuronal calcium imaging, registered across the whole central brain, found auditory activity in most central-brain regions, including in neurons responsive to other modalities. Responses were temporally diverse, but the majority were tuned to courtship-song features [HIGH][1]. The flies were head-fixed adults, and both sexes were compared. The imaged units are regions of interest (AMMC, WED, AVLP, PVLP and others), not identified cell types. In the same dataset, auditory responses were stereotyped across trials and animals in early mechanosensory regions and became more variable at higher stages of the putative pathway. This variability was largely independent of spontaneous movements [HIGH][1]. The live search results showed the comparisons across trials, individuals and sexes but not this specific pattern, so that tag rests on agreement between both round-1 verifiers. The order of stages is putative, inferred rather than traced cell by cell.

### Stage 0 -- the antenna

Laser Doppler vibrometry and acoustic measurements report that the *D. melanogaster* antenna's mechanics are nonlinear. It is tuned near song frequencies at low amplitudes, and its resonance shifts up by hundreds of Hz at higher amplitudes. Song measured at the female during courtship was often louder than predicted, so under natural conditions the antenna may be operating outside its amplified, song-tuned regime [MED][2]. The live search results showed the nonlinearity and the amplitude-dependent tuning, and that the study quantified directional sensitivity and sender-receiver geometry. The louder-than-predicted finding was not visible. These are biophysical measurements of the antenna and of song amplitude in courting pairs. They do not show that hearing fails. The authors and venue remain unconfirmed (round 1 suggests Morley, Jonsson & Robert, J Acoust Soc Am).

### Stage 1 -- Johnston's organ neurons (JONs)

JONs form five subgroups (JO-A to JO-E). Calcium imaging showed that JO-A and JO-B are activated by antennal vibration (sound), while JO-C and JO-E respond most strongly to static antennal deflection. Silencing the A/B neurons impaired hearing (song responses), and silencing the C/E neurons impaired gravitaxis. Only the sound-sensitive neurons express the candidate mechanotransducer channel NompC, and the two subsets project to separate central pathways [MED][3]. The live audit found the NompC statement in the paper's abstract; the subgroup and silencing details were not visible in the search results. A proposed ~100 Hz frequency split between JO-B and JO-A still needs a primary source.

Drosophila auditory receptor neurons adapt to stimulus mean and intensity, change their frequency tuning with sound intensity, and apply a quadratic nonlinearity, which together give an efficient representation of courtship song [HIGH][4]. The live search results state these three properties directly. The source is a 2021 preprint, and no journal version appeared in the results. The adaptation and nonlinearity rest on recordings; the efficiency of the representation rests on modeling. AMMC-B1 IPI selectivity differs from that of these upstream neurons [HIGH][8].

A 2025 iScience study from the Kamikouchi lab (Nagoya) reports that female JONs express several dopamine receptor types. Connectome data suggest that some JONs contact dopaminergic neurons directly (wiring evidence). Knocking down Dop1R2 in JONs reduced JON sound responses in unmated but not mated females (calcium imaging). Overexpressing Dop1R2 in JONs enhanced unmated females' song-response behavior in the lab's playback assay [MED][5]. The live search results describe three receptor types, direct synapses with dopaminergic neurons, and copulation receptivity on exposure to song as the behavioral measure. This is a single lab's result, no replication is cited, and the paper has an erratum (PMID 41660267) whose content was not checked.

### Stage 2 -- the AMMC: B1, A2 and inhibitory interneurons

In vivo whole-cell patch-clamp recordings show that two cell types postsynaptic to the antennal vibration receptors, A2 and B1, encode vibration differently [HIGH][6]:

- **A2** receives excitation for both directions of antennal movement (twice per cycle), and its membrane low-pass filters that input, so A2 tracks the vibration envelope.
- **B1** is phase-sensitive, excited by forward or backward movement only, and band-pass filters oscillatory synaptic input at the stimulus frequency. Different B1 cells prefer different frequencies because of differences in voltage-gated Na+/K+ conductances.

The live search results stated the A2 and B1 encoding directly; the conductance explanation was not in the result text. Round-1 review framed the claim as vibration encoding rather than song encoding because the stimuli were synthetic.

Of seven auditory projection-neuron types (aPNs) and five local-interneuron types (aLNs) of the ascending mechanosensory pathway, only aPN1 (= AMMC-B1) and the GABAergic interneuron aLN(al) were necessary for behavioral song responses, in both males and females [HIGH][7]. The evidence is causal, from neuronal inactivation and hyperactivation during behavior, and "only" applies to the lines tested. The search results did not spell out the identity aPN1 = AMMC-B1, which is standard usage in the field.

AMMC-B1 neurons show IPI selectivity that differs from upstream JONs. Two GABAergic AMMC local interneurons receive auditory input and provide feedforward inhibition onto B1, and are proposed to shape B1 interval selectivity and the female response to song [HIGH][8]. The auditor's search results name the two interneurons as AMMC-LN and AMMC-B2 and say they shape the B1 response pattern by inhibiting activity to short-IPI song. The B1-versus-JON difference and the feedforward arrangement were not visible in those results, so the tag rests on agreement between both round-1 verifiers. Among the stages covered in this track, B1 is the first with recorded IPI selectivity.

### Stage 3 -- intermediate layers and the first circuit map

Calcium imaging of newly identified intermediate-layer auditory cell types in the WED and VLP, together with known types such as B1 and pC2, showed a continuum of preferences between sine and pulse song modes rather than two separate channels [HIGH][9]. The paper identifies 24 new intermediate-layer cell types. Round 1 could not confirm that count, and the live search results state it. Round-1 review noted that not all 24 types were imaged.

The same study mapped synapses among these auditory cell types in FlyWire, the electron-microscopy (EM) reconstruction of an adult female brain (FAFB). Neurons with different song-mode preferences and response timescales are highly interconnected in a network without hierarchical structure. The authors call this the first circuit-level map of the fly auditory pathway and relate it to the imaged tuning [HIGH][9]. The search results add that cell-type responses are predictable from their inputs. Synapse sign comes from predicted neurotransmitter identity (the Eckstein/Funke classifier), not from measured physiology [HIGH][9]. The search results confirm that the authors determined the sign of most synapses but did not show the method. In this track, this is where wiring and activity are compared most directly. The paper predates the October 2024 FlyWire release.

In males, Zhou et al. 2015 used calcium imaging to show that third-order vPN1 neurons prefer pulse song with long IPIs, and that fourth-order pC1 responses across IPIs match the IPI tuning of song-induced male chaining. They proposed aPN1 -> vPN1 -> pC1 as the pathway [MED][10]. The 2026 male CNS connectome refines this. vPN1 is GABAergic, so its apparent excitation of pC1 is best explained by disinhibition (vPN1 inhibits the male-specific mAL, which inhibits pC1) rather than a direct excitatory link [MED][10][23]. The live audit found the connectome statement in the search results; the 2015 tuning data were not visible. Genetic inactivation of vPN1 or pC1 disrupts song-induced male chaining (male-male courtship in response to song playback) [MED][10]. The source was located, but the inactivation result itself was not visible in the search results.

### Stage 4 -- Dsx+ detectors and state integrators

- **pC2l / pC2m.** Dsx+ pC2 neurons are tuned for multiple temporal features of pulse song, and song-feature tuning is similar in male and female brains [HIGH][11]. pC2l neurons in both sexes respond selectively to features of pulse song. Silencing pC2l in females reduces female slowing to pulse song. In males, optogenetic activation of a subset of pC2l acutely elicits pulse song, followed by transient sine song after the light goes off. Males with a subset of pC2l silenced still sang pulse song with normal IPIs, pulse shapes and carrier frequencies, but sang about twice as much as controls, mainly more sine song [MED][11]. The authors conclude that sex-shared song detectors drive divergent behaviors [HIGH][11]. A correction notice for this paper was indexed in 2023; its content was not checked.
- **vpoEN.** These female auditory neurons are tuned to features of *D. melanogaster* song and provide excitatory input to vpoDN [HIGH][12]. Their song responses are not attenuated by mating [HIGH][12].
- **pC1 and pCd (female).** Activating pC1 or pCd neurons in females promotes receptivity, and silencing them makes females unreceptive. Female pC1 neurons respond both to courtship song and to the male pheromone cVA, consistent with multisensory integration of courtship cues [HIGH][13]. The search results add that pCd also responds to cVA. pC1 encodes mating status and excites vpoDN [HIGH][12]. The 2014 experiments treated pC1 as one population; later work distinguishes subsets such as pC1d/e [14].
- **pC1d/e and aIPg.** A subset of female Dsx+ pC1 neurons (pC1d/e) can drive minutes-long changes in female behavior in the presence of males. EM reconstruction of all their inputs and outputs revealed strong recurrent connectivity between pC1d/e and Fruitless+ aIPg neurons [HIGH][14]. The behavioral finding was visible in the live search results; the EM finding was not. That this loop holds the state is an inference from wiring, and the claim includes no recording of persistent activity in the loop.
- **pCd-2.** A 2024 iScience study from the Kamikouchi lab with Janelia co-authors reports that song preference learning requires GABA made in pCd-2 neurons, a small Dsx+ population of about four cells per hemibrain. In this learning, flies that have heard conspecific song respond less to heterospecific song. Female connectome data show direct, often reciprocal, pCd-2-pC1 connections [MED][15]. The live audit resolved one open point: the search results report a dopamine requirement via Dop1R2 on pCd-2, and a requirement for GABAergic input to pC1. The sex used for the behavioral experiments and the full author list still need confirming from the paper.

### Stage 5 -- descending reply neurons and the mating-state gate

Female vaginal plate opening (VPO), the acceptance act, is controlled by a pair of female-specific descending neurons (vpoDNs). vpoDNs receive excitatory input from auditory vpoEN neurons, which are tuned to features of *D. melanogaster* song, and from pC1 neurons, which encode mating status. The synaptic connections were confirmed in EM connectome data [HIGH][12]. The evidence combines imaging, optogenetics and EM connectivity. After mating, vpoDN song responses are attenuated but vpoEN responses are not, and pC1 neurons mediate this change. For VPO, the key mating-status gate therefore sits where vpoDN integrates song and state [HIGH][12]. That does not exclude state-dependent modulation elsewhere in the auditory pathway, such as the JON dopamine result [MED][5].

DNp13 descending neurons are command-type neurons for ovipositor extrusion (OE). They respond to male song through direct synaptic input from pC2l auditory neurons. Mating status does not change DNp13 song responses; it changes how effectively they engage OE motor circuits, via ppk+ uterine sensory neurons activated by ovulation [HIGH][16]. The search results describe the pC2l input as about 20 Dsx+ cholinergic cells per hemisphere. Male song is more likely to evoke VPO in virgin females and OE in recently mated females [MED][16].

**What OE means is disputed.** Wang et al. treat OE as a rejection behavior in mated females [MED][16], and the live results show that they also report OE to be an effective deterrent only when performed by previously mated females. The companion paper by Mezzera et al. reports that OE is shown only by sexually mature females, only during courtship, and in response to male song. OE promotes male copulation attempts in both virgin and mated females and signals acceptance in virgins [HIGH][17]. Both readings rest on behavioral evidence. The audit confirmed the Mezzera findings separately; in checking the dispute itself, only the Wang et al. side was searched.

State signals also reach the brain from the body. A 2025 annotation of the female FlyWire brain connectome identified putative Fruitless and Doublesex neuron types by matching morphology to light-microscopy data, and characterized their connectivity [MED][18]. The reported counts (1,278 Fru, 50 Dsx, 79 ambiguous) are unverified. The search results give "91 Fru/Dsx types comprising over 1400 neurons", consistent with the 1,407 total, but not the breakdown. They also report that Fru/Dsx neurons are highly interconnected yet receive most of their input from non-Fru/Dsx neurons, and that the labels are available in FlyWire Codex. That SAG ascending neurons relay post-mating (sex-peptide) information to pC1 was established earlier by functional work (Feng et al. 2014, Neuron; Wang F et al. 2020, Nature) [MED][18]. The audit did not check that attribution.

### Timescale: song is judged over seconds

During natural courtship, females are sensitive to long-timescale song structure (tens of seconds) and integrate song information. Simple computations applied to single-neuron responses can predict female locomotor behavior [HIGH][19]. The evidence combines behavior from freely courting pairs, recordings from AMMC/WED auditory neurons, and a model. The search results describe a model that correctly predicted the song length females respond to, but did not show the "tens of seconds" figure.

A 2025 comparison of computational models against neural activity and unrestrained courtship behavior found that the best model used neurons that adapt to and accumulate their inputs, with heterogeneous nonlinear adaptation and slow integration. This let fine-scale song information persist in the population code for long periods [HIGH][20]. "Best" means best at predicting behavior. According to the search results, a linear-nonlinear feature-detection model and the accumulation model both explained the neural data, and the accumulation model better predicted female locomotion during courtship. The persistence of song information is a property of the fitted model, which was fit to recorded responses of the Baker 2022 cell types.

Female *D. melanogaster* respond to amplitude modulation within courtship song and prefer their own strain's song amplitude envelope over a flat or a steeper gain profile [MED][21]. The search results confirm the preference for amplitude modulations typical of *D. melanogaster* song and the authors' term "song amplitude structure" (SAS). The comparison with flat and steeper profiles was not visible. The evidence is behavioral, and no neuron is assigned to it.

### Species differences

*D. melanogaster* and *D. simulans* females each increase receptivity to songs with conspecific temporal patterns. JONs and AMMC-B1 neurons share morphology and neurotransmitters across the two species, and the early auditory circuit is largely conserved. AMMC-B1 temporal-pattern preferences are relatively similar across species, with slight but significant band-pass differences too small to explain the behavioral difference in song preference. The divergence in preference therefore likely lies downstream of B1 [MED][22]. The live audit replaced earlier wording that the circuits setting IPI preference have diversified, which overstated the paper. The node that diverged is unidentified.

### 2026 male CNS connectome: predictions from wiring alone

The complete male central nervous system (CNS) connectome, published in Cell on 3 September 2026, reports that sex-specific and dimorphic neuron types concentrate in higher brain centres, while the sensory and motor periphery is largely isomorphic [MED][23]. The claim does not extend this to the early auditory pathway. The auditor's search results give the final published counts: 166,700 neurons and 11,710 neuron types, of which 8,069 are isomorphic, 138 dimorphic, 289 male-specific and 71 female-specific. The same results describe male-specific connection "hotspots" and dimorphic neurons that reroute information. Quote cell-type counts only from this final version.

A male-female connectome comparison finds that vpoEN has a strong sex-shared downstream partner (DNp55) and sex-specific partners: vpoDN in females and pC1_6a in males. The same auditory neuron type therefore connects to different targets in each sex [MED][23]. The authors call this a "switchboard motif". Whether song activity actually flows this way in males has not been recorded.

The connectome identifies male-specific ascending neurons that carry information from nerve-cord song-generating neurons to brain song-detection circuits. The authors infer a closed loop in which the motor output of singing likely influences auditory detection of song [MED][23]. No search result text described these neurons or the loop, so this rests on round-1 review of the source.

The connectome also revises the 2015 male pathway: vPN1 is GABAergic, and the analysis identifies a disinhibitory circuit in which vPN1 inhibits the male-specific mAL, which in turn inhibits pC1 [MED][10][23]. No source in this track tests the sex-specific routing, the singing-to-hearing loop or the mAL step with recordings or manipulations.

### What the evidence does not show

- The label "species-specific song detector" overstates what single neurons are shown to do. Between *D. melanogaster* and *D. simulans*, B1 temporal-pattern preferences differ too little to explain the behavioral difference, and the downstream node where preference diverges is unidentified [MED][22].
- Pathway diagrams drawn from activity alone can misstate mechanism. The excitatory aPN1 -> vPN1 -> pC1 chain proposed from imaging is, on male connectome evidence, a disinhibitory circuit through mAL [MED][10][23].
- Most whole-brain auditory activity is assigned to regions, not cell types [HIGH][1]. The stage-by-stage account above is assembled from separate studies of identified neurons.

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| Antenna | Nonlinear, amplitude-dependent tuning | Measured at female in courting pairs | Biophysical measurement | MED | 2 |
| JO-A / JO-B | Vibration (sound) receptors; NompC+; adapt; quadratic nonlinearity | Not stated | Recorded activity + silencing; recordings + model | MED (subgroups); HIGH (adaptation) | 3, 4 |
| JO-C / JO-E | Static deflection; needed for gravitaxis | Not stated | Recorded activity + silencing | MED | 3 |
| JONs (Dop1R2) | Dopamine modulates sound responses in unmated females only | Female | Recorded activity + knockdown + wiring | MED | 5 |
| AMMC-B1 (aPN1) | Phase-sensitive band-pass; IPI selectivity distinct from JONs; needed for song responses | Both | Recorded activity + inactivation | HIGH | 6, 7, 8 |
| AMMC-A2 | Tracks vibration envelope | Not stated | Recorded activity | HIGH | 6 |
| aLN(al); AMMC-LN and AMMC-B2 | aLN(al) needed for song responses; GABAergic feedforward inhibition of B1 | Both (aLN(al)); female (AMMC-LN/B2) | Inactivation; recorded activity | HIGH | 7, 8 |
| WED/VLP intermediate types (24 new) | Sine-pulse preference continuum; non-hierarchical network | Female | Recorded activity + wiring | HIGH | 9 |
| vPN1 | Prefers long-IPI pulse song; GABAergic; needed for chaining | Male | Recorded activity + inactivation; wiring | MED | 10, 23 |
| mAL | Male-specific; inhibited by vPN1; inhibits pC1 | Male | Wiring only | MED | 23 |
| pC1 (male) | Tuning matches chaining; needed for chaining; disinhibited via mAL | Male | Recorded activity + inactivation; wiring | MED | 10, 23 |
| pC2l / pC2m | Pulse-song detectors; female slowing; male singing | Both | Recorded activity + manipulation | HIGH (tuning); MED (manipulations) | 11 |
| vpoEN | Own-species song; excites vpoDN; unaffected by mating; sex-specific partners | Female (activity); both (wiring) | Recorded activity; wiring | HIGH; MED (male wiring) | 12, 23 |
| pC1 / pCd (female) | Receptivity; song + cVA; pC1 encodes mating status | Female | Manipulation + recorded activity + wiring | HIGH | 12, 13 |
| pC1d/e + aIPg | Minutes-long state; recurrent loop | Female | Manipulation + wiring | HIGH | 14 |
| pCd-2 | GABA for song preference learning; Dop1R2 requirement | To be confirmed | Knockdown + wiring | MED | 15 |
| vpoDN | VPO; song responses attenuated after mating | Female | Recorded activity + manipulation + wiring | HIGH | 12 |
| DNp13 | OE command; pC2l input; mating gates output, not song response | Female | Recorded activity + manipulation + wiring | HIGH | 16 |
| ppk+ uterine neurons | Ovulation signal gating DNp13 output | Female | Part of the DNp13 study | HIGH | 16 |
| SAG ascending neurons | Post-mating state to pC1 | Female | Earlier functional work; annotation | MED | 18 |
| DNp55, pC1_6a | vpoEN partners (shared; male-specific) | Both; male | Wiring only | MED | 23 |
| Male ascending neurons | Song generators to song detectors | Male | Wiring only | MED | 23 |

## Why this matters for two-way communication with animals

1. **The signal can be specified as a handful of parameters.** Neural tuning or behavioral preference has been measured for IPI, pulse vs sine, and amplitude envelope [8][9][11][21]. Playback that controls these features addresses the receiver's own filters, with no assumed vocabulary.
2. **Replies can be read out at two levels.** Behavior gives slowing, VPO and OE. The neural level gives vpoDN and DNp13, whose song responses can be imaged [12][16]. A reply could in principle be read from the brain before the animal moves.
3. **The same signal gets different answers in different states.** Mating alters vpoDN [12] and DNp13 output [16], and possibly JON gain [5]. A closed-loop system must estimate the animal's state rather than assume one fixed mapping.
4. **A turn in the exchange lasts seconds.** Integration over seconds to tens of seconds [19][20] means adaptive playback should update on that timescale. The model in [20], which best predicted female locomotion, can pre-score candidate songs before they are tried on animals.
5. **Calibration matters.** Antennal tuning depends on amplitude [2], so playback level must be set at the animal's position.
6. **Replies can be ambiguous.** OE has two competing interpretations [16][17]. Any reply "dictionary" must depend on the animal's state and be checked against how the partner actually responds.
7. **Singing may change hearing.** If the male singing-to-hearing wiring works as predicted [23], a two-way rig will need to account for the animal's own sound.
8. **Models that design signals need synapse sign.** The male aPN1 -> vPN1 -> pC1 link, drawn from imaging as excitatory, is disinhibitory in the connectome [10][23]. A receiver model used to choose playback should carry transmitter identity.

## Open questions

- **Where does mating status gate the response?** vpoEN is unaffected by mating [12], while a 2025 study reports Dop1R2-dependent modulation of JON sound responses in unmated females only [5]. The gating may be spread across stages. Age, hunger and other neuromodulators are unexamined here.
- **Which neurons hold the seconds-long integration?** Candidates are adaptation and slow integration in the auditory population [20] and the pC1d/e-aIPg loop [14]. Neither has been shown to do this in a living fly.
- **Do males respond as the male connectome predicts?** Do vpoEN and pC1_6a respond to song in males? Does self-singing change auditory responses, as a copy of the motor command (corollary discharge) would [23]? Does silencing mAL remove the apparent vPN1 drive of pC1 [10][23]?
- **How does sharp IPI selectivity arise?** The authors of [9] report that cell-type responses are predictable from their inputs. Whether a connectome-constrained model reproduces each type's IPI tuning from wiring alone, in a network with no hierarchy, is untested.
- **Which node diverged between species?** B1 preferences differ too little to account for the behavioral difference [22]; candidates downstream include vpoEN and pC1. Comparisons beyond *D. simulans* are missing.
- **Can activity be matched to connectome cell types in the same animal?** Most whole-brain activity [1] is assigned to regions, not cell types. Sex-shared types (B1, pC2, vpoEN) have not been confirmed as matched across the female and male connectomes (Track 04).
- **Which inputs were not covered?** Gaps include female copulation song, other males' song, substrate vibration, aggression song, near-field escape, sound localization between the two antennae, and sine-specific processing. Round-1 verifiers named Kerwin et al. 2020, Versteven et al. 2017 and Batchelor & Wilson 2019 (Track 03); the live audit did not check these.
- **How does the receiver shape the sender?** Male song depends on female movement and distance, and males switch between two pulse types, Pfast and Pslow. How female neurons respond to each type is untested here. This loop is the closest fly analogue to a conversation. Round-1 verifiers named Coen et al. 2014/2016, Clemens et al. 2018 and Calhoun et al. 2019 (Tracks 01, 06); the live audit did not check these. A 2025 lead on context-dependent multimodal signaling is listed below.
- **What happens downstream of the reply neurons?** Where vpoDN and DNp13 outputs go in the nerve-cord connectomes (FANC, BANC) is unknown. Which male neurons read OE and VPO is also unknown (Track 06).

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Connectome-to-activity atlas of the song receiver | Each auditory type's song tuning can be predicted from FlyWire wiring plus inferred synapse sign, using adapting, accumulating units [20]. | Build a rate model of the 24 intermediate types [9] plus B1, pC2, vpoEN, pC1 and vpoDN, with signs from predicted transmitter identity. Drive it with natural and synthetic song. Compare with published imaging [9][10][11][12], then register whole-brain maps [1] to the model's predicted fingerprints. | Computational; can start now | Extract the FlyWire auditory subgraph and fit B1 and pC1 IPI tuning. pC1 tuning was recorded in males [10] while FlyWire is a female brain; take male wiring, including the vPN1-mAL-pC1 disinhibitory step, from the male CNS connectome [23]. |
| 2. Closed-loop "duet" playback | Playback that adapts IPI, pulse/sine ratio and envelope to the female's replies raises receptivity faster than fixed song and reveals her state-dependent preferences. | Track females by pose and classify replies in under 100 ms. A bandit or Bayesian optimizer updates the speaker's song, with [20] as the prior. Compare with open-loop playback and with real males. | Wet lab, months | Calibrate open-loop playback to natural near-field amplitude [2]. Then add walking speed as the only feedback signal. |
| 3. Read the answer from the brain: vpoDN/DNp13 as a two-symbol reply channel | Imaging vpoDN ("yes") and DNp13 ("no/ready") together decodes the reply before movement. Changing state (mating, Dop1R2, SAG) shifts the answer as the wiring predicts. | Two-photon imaging in head-fixed females using split-GAL4 lines for vpoEN, vpoDN and DNp13 across synthetic songs. Add optogenetic manipulation of pC1 or SAG [12][16][18]. | Wet lab, months | Replicate the vpoEN/vpoDN mating dissociation [12], then add DNp13 in the same preparation. |
| 4. Test the male routing, singing-feedback and disinhibition predictions | In males, vpoEN drives pC1_6a; ascending neurons reshape song-detector (pC2, vpoEN, pC1) responses during self-singing; vPN1 drives pC1 by disinhibiting it through mAL [10][23]. | Image vpoEN and pC1_6a in males during playback. Evoke singing optogenetically while imaging, with and without silencing the ascending neurons. Silence mAL and test whether vPN1 activation still raises pC1 activity. | Wet lab, months; lines may need building | Query the male connectome for the ascending neurons' targets and mAL's inputs, and check for existing split-GAL4 lines. |
| 5. Retune *D. melanogaster* females to *D. simulans* song | Because B1 preferences differ too little between species to explain behavior [22], changing a node downstream of B1, such as pC1 plasticity via pCd-2 learning [15], shifts preference toward *D. simulans* temporal patterns. | Use the Project 1 model to find the smallest change downstream of B1 that moves pC1/vpoEN tuning. Then test it in flies by manipulation or by learning with *D. simulans* song. | Wet lab, years | Confirm the species song parameters from [22], then run a model parameter sweep to choose the target. |

**Data and tools named by the round-1 researcher:** the Pacheco 2021 whole-brain dataset (Princeton Data Commons) [1]; FlyWire, with Fru/Dsx labels in FlyWire Codex [18]; the BANC brain-and-nerve-cord connectome; the male CNS connectome project and cell-type pages [23]; JON model code and data at github.com/janclemenslab/quadratic-adaptive [4]; species-comparison data on Dryad [22]; Dop1R2 data on Mendeley [5]. Links other than the JON code repository are omitted because they are not in the audited ledger; retrieve them from the source papers.

## Leads needing confirmation

- **Male pC1 band-pass of ~35-65 ms.** This appears in the round-1 researcher's summary but not in the abstract of [10], and it is not part of the kept claim. Check the figures.
- **JO-B ~100 Hz cut-off.** Still needs a primary source [3]. Round-1 verifiers suggested Effertz et al. 2011 and Matsuo et al. 2014.
- **Species song parameters [22].** Round 1 gave a *D. simulans* pulse-song IPI of ~55 ms and carrier frequency of ~320 Hz, against ~35 ms and ~170 Hz in *D. melanogaster*. The live results did not show these numbers, and they are not part of the kept claim.
- **JON adaptation preprint [4].** No journal version appeared in the live results; cite it as a preprint. One round-1 verifier cites Clemens et al. 2018 (Nat Commun) as independent support for adaptation.
- **Dop1R2 modulation of JONs [5].** Single lab; the erratum (PMID 41660267) is unchecked; author names and the article number 113232 were not visible in the live results.
- **pCd-2 learning [15].** The sex tested and the full author list (possibly Imoto K, ..., Aso Y, Funke J, ..., Kamikouchi A) are unconfirmed. Per round 1, the learning paradigm comes from Li, Ishimoto & Kamikouchi 2018 (eLife).
- **Male CNS connectome [23].** Named authors (reportedly Berg, Beckett, Costa, Schlegel et al.) were not visible in the live results. The ascending-neuron feedback pathway was not visible in search text.
- **Antenna study [2].** Authors and venue (round 1: Morley, Jonsson & Robert, J Acoust Soc Am) are unconfirmed, and the louder-than-predicted song finding was not visible.
- **Fru/Dsx annotation [18].** Authors and the per-category counts were not visible. The SAG attribution cites "Wang F et al. 2020 Nature", while the Nature receptivity paper [12] is listed with Wang K first and dated 2021 (online 2020); check which reference is meant.
- **Wang et al. Nature author order [12].** Not visible in the live results; round 1's order (Wang K first) is kept.
- **Deutsch et al. 2019 correction notice [11].** Indexed in 2023; content unchecked.
- **Details that rest on both round-1 verifiers.** The live search did not display these parts of [HIGH] claims: the early-versus-late variability pattern [1], the B1 conductance explanation [6], B1's difference from JONs and the feedforward arrangement [8], the pC1d/e-aIPg recurrent wiring [14], and the "tens of seconds" timescale [19].

## New leads from live search (2025-2026)

Found by the live auditor and not independently verified.

- [MED] **vPN1 is GABAergic; the male song pathway to pC1 is disinhibitory.** The male CNS connectome shows that vPN1 inhibits a male-specific mAL, which inhibits pC1, revising the aPN1 -> vPN1 -> pC1 excitatory chain proposed from 2015 imaging. Any model that uses connectome wiring to predict song responses needs this motif. It has been folded into the male-pathway text above. Cell 189(18):5504-5526.e15, 2026; connectome wiring. https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6?rss=yes
- [MED] **A neural circuit for context-dependent multimodal signaling in Drosophila** (Nature Communications, 2025). It appears to build on the pC2 song-detector and song-production work and is relevant to how flies choose between signal modalities by context. Only the title was visible; check the findings before using it. https://www.nature.com/articles/s41467-025-64907-9

## Claims dropped in verification

No claim was dropped in round 1 or in the live audit. Parts removed or narrowed are listed below.

Round-1 narrowing that still holds:

- JON subgroups [3]: the kept claim does not describe JO-C/E as wind-sensitive; round-1 verifiers attributed that reading to Yorozu et al. 2009, not [3].
- A2/B1 encoding [6]: "encode song" was changed to "encode vibration", because the stimuli were synthetic.
- Intermediate-layer imaging [9]: "all 24 new types imaged" overstated coverage.
- FlyWire map [9]: synapse sign was "determined" in the original claim; it was inferred from predicted transmitters.
- Male pathway [10]: the pC1 ~35-65 ms range was removed as unconfirmed.
- Mating gate [12]: "the gate is at the descending neuron, not the detector" was too strong.
- OE [16]: "OE deters only when performed by mated females" was presented as settled. The live audit shows that Wang et al. do report this, but the interpretation is disputed [17], so it is presented as one side of the dispute.
- Dop1R2 [5]: "copulation receptivity", "three receptor types" and "5-7 days" were judged unsupported. The live results now describe three receptor types and copulation receptivity as the measure; the kept claim retains the narrower wording, and the 5-7 day age remains unconfirmed.
- Male CNS [23]: "including the early auditory pathway" was the researcher's extrapolation. Two conflicting type-count sets and a ~166,700-neuron total were removed in round 1; the live audit has since found the final published counts, given above.
- vpoEN partners [23]: the "switchboard" label and "routes song in males" read function into wiring. The live results show that "switchboard motif" is the authors' own term; the claim keeps the wiring-only wording.
- Fru/Dsx annotation [18]: credit for the SAG relay moved to earlier functional work.
- Antenna [2]: "the antenna should neither amplify nor tune to song" was softened, and the measurements are described as biophysical rather than behavioral.
- Seed leads: Baker 2022 [9] was not in the October 2024 FlyWire package. Wang et al. [12] is Nature 589 (2021), published online in 2020.
- Not used as evidence: hobbyist repositories ("flybrain-audio", "neurofly16px") and an AI search summary giving unsourced BANC counts.

Round-1 narrowing reversed by the live audit:

- NompC [3]: "only sound-sensitive JONs express NompC" had been reduced to needs-confirmation. The live audit found it in the abstract, and it is restored, along with the separate central projections of the two subsets.
- Male pC2l silencing [11]: removed in round 1 as unconfirmed; the live results state it, and it is restored. No effect on mating success was visible, so none is claimed.
- pCd-2 [15]: the dopamine requirement and GABAergic input to pC1 were unconfirmed in round 1; the live results report both. The sex tested is still open.

Narrowing by the live audit:

- Species comparison [22]: "the circuits that set IPI preference have diversified" overstated the paper. It was replaced with a largely conserved early circuit and a divergence that likely lies downstream of B1. The species IPI and carrier values were moved to leads needing confirmation.
- Male pathway [10]: the aPN1 -> vPN1 -> pC1 chain is qualified as disinhibitory via mAL [23].
- Model comparison [20]: "best model" is read as best at predicting behavior.
- Not used as evidence: an aggregator summary describing a "closed-loop system" in the male CNS, which was the search tool's own synthesis rather than source text.

## Sources

1. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience 24(1):93-104, 2021 -- https://www.nature.com/articles/s41593-020-00743-y
2. Auditory sensitivity, spatial dynamics, and amplitude of courtship song in Drosophila melanogaster -- Authors not confirmed (round 1 suggests Morley, Jonsson & Robert) -- Indexed in PubMed (PMID 30180716); venue not confirmed (round 1 suggests J Acoust Soc Am), 2018 -- https://pubmed.ncbi.nlm.nih.gov/30180716/
3. The neural basis of Drosophila gravity-sensing and hearing -- Kamikouchi A, Inagaki HK, Effertz T, Hendrich O, Fiala A, Goepfert MC, Ito K -- Nature 458(7235):165-171 (doi:10.1038/nature07810; PMID 19279630), 2009 -- https://www.nature.com/articles/nature07810
4. Quadratic and adaptive computations yield an efficient representation of song in Drosophila auditory receptor neurons -- Clemens J, Murthy M -- bioRxiv preprint, 2021 -- https://www.biorxiv.org/content/10.1101/2021.05.26.445391v1.full
5. Mating status-dependent dopaminergic modulation of auditory sensory neurons in Drosophila -- Yamakoshi H, Horigome M, Yamamoto S, et al. (Nagoya University) -- iScience 28(9):113232 (online 29 July 2025; PMID 40831745; preprint bioRxiv 2025.05.22.655009; erratum PMID 41660267), 2025 -- https://www.cell.com/iscience/fulltext/S2589-0042(25)01493-2
6. Active Mechanisms of Vibration Encoding and Frequency Filtering in Central Mechanosensory Neurons -- Azevedo AW, Wilson RI -- Neuron 96(2):446-460 (doi:10.1016/j.neuron.2017.09.004), 2017 -- https://pubmed.ncbi.nlm.nih.gov/28943231/
7. Neural pathways for the detection and discrimination of conspecific song in D. melanogaster -- Vaughan AG, Zhou C, Manoli DS, Baker BS -- Current Biology 24(10):1039-1049, 2014 -- https://pubmed.ncbi.nlm.nih.gov/24794294/
8. GABAergic Local Interneurons Shape Female Fruit Fly Response to Mating Songs -- Yamada D, Ishimoto H, Li X, Kohashi T, Ishikawa Y, Kamikouchi A -- Journal of Neuroscience 38(18):4329-4347 (doi:10.1523/JNEUROSCI.3644-17.2018), 2018 -- https://pubmed.ncbi.nlm.nih.gov/29691331/
9. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, et al., Murthy M -- Current Biology 32(15):3317-3333.e7 (PMID 35793679), 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2 (also https://pubmed.ncbi.nlm.nih.gov/35793679)
10. Central neural circuitry mediating courtship song perception in male Drosophila -- Zhou C, Franconville R, Vaughan AG, Robinett CC, Jayaraman V, Baker BS -- eLife 4:e08477, 2015 -- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4575990/
11. Shared Song Detector Neurons in Drosophila Male and Female Brains Drive Sex-Specific Behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29(19):3200-3215.e5 (correction notice indexed 2023, PII S0960-9822(23)01049-7), 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219310243 (also https://pmc.ncbi.nlm.nih.gov/articles/PMC6885007/)
12. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ (order from round 1) -- Nature 589(7843):577-581 (online 2020; preprint bioRxiv 2020.08.07.241919), 2021 -- https://www.nature.com/articles/s41586-020-2972-7
13. Central brain neurons expressing doublesex regulate female receptivity in Drosophila -- Zhou C, Pan Y, Robinett CC, Meissner GW, Baker BS -- Neuron 83(1):149-163, 2014 -- https://pubmed.ncbi.nlm.nih.gov/24991959/
14. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco D, Encarnacion-Rivera L, et al., Murthy M -- eLife 9:e59502 (also PMC7787663), 2020 -- https://elifesciences.org/articles/59502
15. Neural-circuit basis of song preference learning in fruit flies -- Kamikouchi lab (Nagoya) with Janelia co-authors; full author list not confirmed -- iScience (June 2024; preprint bioRxiv 2023.10.24.563693; PMC11260866), 2024 -- https://www.cell.com/iscience/fulltext/S2589-0042(24)01491-3
16. Circuit and Behavioral Mechanisms of Sexual Rejection by Drosophila Females -- Wang F, Wang K, et al., Dickson BJ -- Current Biology (August 2020; PMID 32795445), 2020 -- https://www.cell.com/current-biology/fulltext/S0960-9822(20)31142-8
17. Ovipositor Extrusion Promotes the Transition from Courtship to Copulation and Signals Female Acceptance in Drosophila melanogaster -- Mezzera C, Brotas M, Gaspar M, Pavlou HJ, Goodwin SF, Vasconcelos ML -- Current Biology 30(19):3736-3748.e5, 2020 -- https://pubmed.ncbi.nlm.nih.gov/32795437/
18. Sexually-dimorphic neurons in the Drosophila whole-brain connectome -- Authors not confirmed -- bioRxiv 10.1101/2025.06.10.658788 (also Research Square rs-6881911; PMID 40661468; PMC12259084), 2025 -- https://pubmed.ncbi.nlm.nih.gov/40661468/
19. Connecting Neural Codes with Behavior in the Auditory System of Drosophila -- Clemens J, Girardin CC, Coen P, Guan XJ, Dickson BJ, Murthy M -- Neuron 87(6):1332-1343 (doi:10.1016/j.neuron.2015.08.014), 2015 -- https://www.cell.com/neuron/fulltext/S0896-6273(15)00708-4
20. Inferring neural population codes for Drosophila acoustic communication -- Pang R, Baker CA, Murthy M, Pillow J -- PNAS (also PMC12130820), 2025 -- https://www.pnas.org/doi/10.1073/pnas.2417733122
21. Female Drosophila melanogaster respond to song-amplitude modulations -- Brüggemeier B, Porter MA, Vigoreaux JO, Goodwin SF -- Biology Open 7(6):bio032003 (PMID 29666051; PMC6031343), 2018 -- https://journals.biologists.com/bio/article/7/6/bio032003/1956/Female-Drosophila-melanogaster-respond-to-song
22. Evolutionary conservation and diversification of auditory neural circuits that process courtship songs in Drosophila -- Ohashi T, et al. (Kamikouchi lab) -- Scientific Reports (PMID 36611081; PMC9825394), 2023 -- https://pubmed.ncbi.nlm.nih.gov/36611081/
23. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Janelia FlyEM, MRC LMB, University of Cambridge and Google Research consortium (named authors not confirmed; reportedly Berg, Beckett, Costa, Schlegel et al.) -- Cell 189(18):5504-5526.e15 (published 3 Sep 2026; doi:10.1016/j.cell.2026.08.015; PMID 42691995; preprint "Sexual dimorphism in the complete connectome of the Drosophila male central nervous system", bioRxiv 10.1101/2025.10.09.680999), 2026 -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6

## Verification ledger

| # | Claim (at most 15 words) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | Song-evoked activity in most central-brain regions, mostly tuned to song features | HIGH | confirmed | 1 |
| 2 | Responses stereotyped early, more variable at higher stages, largely movement-independent | HIGH | confirmed | 1 |
| 3 | JO-A/B sense vibration, JO-C/E static deflection; only sound-sensitive JONs express NompC | MED | corrected | 3 |
| 4 | JONs adapt, shift tuning with intensity, apply quadratic nonlinearity: efficient song code | HIGH | confirmed | 4 |
| 5 | A2 tracks vibration envelope; B1 is phase-sensitive band-pass, tuned by conductances | HIGH | confirmed | 6 |
| 6 | Of twelve AMMC pathway types tested, only aPN1 (B1) and aLN(al) needed | HIGH | confirmed | 7 |
| 7 | B1 IPI selectivity differs from JONs; GABAergic feedforward inhibition proposed to shape it | HIGH | confirmed | 8 |
| 8 | Intermediate WED/VLP types show a sine-pulse preference continuum, not two channels | HIGH | confirmed | 9 |
| 9 | FlyWire map: auditory types highly interconnected without hierarchy; sign from predicted transmitters | HIGH | confirmed | 9 |
| 10 | Male vPN1 prefers long-IPI pulse; pC1 matches chaining; vPN1-pC1 link is disinhibitory | MED | corrected | 10, 23 |
| 11 | Inactivating vPN1 or pC1 disrupts song-induced male chaining | MED | confirmed | 10 |
| 12 | pC2 tuned to multiple pulse-song features, similarly in both sexes | HIGH | confirmed | 11 |
| 13 | pC2l silencing reduces female slowing; male activation evokes song; silencing doubles singing | MED | corrected | 11 |
| 14 | vpoDNs control VPO, excited by song-tuned vpoEN and mating-status pC1 | HIGH | confirmed | 12 |
| 15 | Mating attenuates vpoDN, not vpoEN, song responses via pC1; gate at vpoDN | HIGH | confirmed | 12 |
| 16 | pC1/pCd activation promotes receptivity; female pC1 responds to song and cVA | HIGH | confirmed | 13 |
| 17 | pC1d/e drive minutes-long behavior change; strong recurrent pC1d/e-aIPg wiring | HIGH | confirmed | 14 |
| 18 | DNp13 commands OE, gets pC2l song input; mating changes output via ppk+ neurons | HIGH | confirmed | 16 |
| 19 | Song evokes VPO in virgins, OE in mated females; OE's role disputed | MED | confirmed | 16 |
| 20 | OE only in mature courted females; promotes copulation, signals acceptance in virgins | HIGH | confirmed | 17 |
| 21 | Dop1R2 in JONs modulates sound responses and song behavior in unmated females only | MED | confirmed | 5 |
| 22 | Females integrate song over tens of seconds; neural computations predict locomotion | HIGH | confirmed | 19 |
| 23 | Adapting, slowly integrating model best predicts courtship behavior; song information persists | HIGH | confirmed | 20 |
| 24 | Song preference learning needs GABA from ~4 Dsx+ pCd-2 neurons; reciprocal pCd-2-pC1 wiring | MED | confirmed | 15 |
| 25 | Early auditory circuit conserved across species; preference divergence likely downstream of B1 | MED | corrected | 22 |
| 26 | Male CNS: dimorphic types concentrate in higher centres; periphery largely isomorphic | MED | confirmed | 23 |
| 27 | vpoEN shares partner DNp55; sex-specific partners vpoDN (female), pC1_6a (male) | MED | confirmed | 23 |
| 28 | Male-specific ascending neurons link song generators to song detectors (wiring only) | MED | confirmed | 23 |
| 29 | Female FlyWire annotation of putative Fru/Dsx types; SAG-to-pC1 from earlier work | MED | confirmed | 18 |
| 30 | Antenna nonlinear: song-tuned at low amplitude, resonance shifts up at high amplitude | MED | confirmed | 2 |
| 31 | Females prefer their own strain's song amplitude envelope over flat or steeper profiles | MED | confirmed | 21 |
