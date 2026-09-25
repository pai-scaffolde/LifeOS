# Track 01 -- Sender circuits: how a male fly decides to sing and patterns its song

*Interspecies Communication Research Program · 2026-09-25 · 30 claims kept of 30 checked (16 verified, 2 of them by a single verifier / 11 corrected, 4 of them by a single verifier / 0 conflict / 3 unverified) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

*Verification note: neither verifier had live search or page access. All verdicts come from the verifiers' own knowledge of the literature, no URL below was independently confirmed, and 2025-2026 items are the least secure. Where the verifiers read a detail differently, it is listed under Leads needing confirmation.*

## Bottom line

- Yes, song neurons have been recorded lighting up during singing, but only for a small part of the sender map. Nerve-cord calcium imaging in tethered singing males showed a population active in both pulse and sine song, nested inside a larger pulse-song population. dPR1 is active only in pulse song; TN1A is active in both [HIGH][1]. The song in that preparation may have been started artificially [LOW][1].
- The rest of the sender map comes from causal manipulation and wiring, not recorded activity. Brain neurons (P1/P1a, pC1, pC2l) feed two descending neurons: pIP10 drives pulse and sine song, and pMP2 drives pulse only [HIGH][1]. These act on eight fruitless/doublesex nerve-cord cell types, which form two nested feed-forward pathways onto wing motor neurons [MED][3].
- Male song is already a closed loop with the female. Males choose among fast pulse, slow pulse and sine moment by moment from her distance and movement [HIGH][17]; [MED][16]. Three model-inferred internal states change how those cues map onto song, and activating pIP10 switches between them [HIGH][18].
- The nearest existing "conversation" experiment is unverified. In a 2026 study, male song reportedly triggered backward walking in an optogenetically controlled female, and males then changed the contexts in which they sang to new females. This is a change in when innate song is used, not new song [LOW][19].
- The 2026 male whole-CNS connectome lets the full brain-to-wing-motor chain be traced in one animal, but it is wiring only [LOW][20]. It reports sex-specific neurons concentrated in higher centres and a largely shared motor side, which fits the causal finding of a dormant song motor program in females [HIGH][8].
- Four gaps remain at the cellular level: how the pulse rhythm is generated, how fast versus slow pulse is chosen, how female feedback reaches the descending neurons in real time, and which neurons produce aggression song and female copulation song [MED][3][17][25][28].
- Recommended start: a connectome-constrained song-network model fitted to published imaging and manipulation data (can start now), then closed-loop experiments in which a machine "replies" to a singing male.

## What the evidence shows

### Recorded activity: what has actually been seen during song

Two-photon calcium imaging of the ventral nerve cord (VNC) in tethered singing males found two populations. One was active during both pulse and sine song. A larger population, which includes the first, was active during pulse song [HIGH][1]. dPR1 neurons were active only during pulse song, and TN1A neurons during both [HIGH][1]. TN1A's activity during pulse song is notable because TN1A was earlier treated as sine-specific [MED][1]. Both verifiers flagged two caveats. Song in this preparation may have been started by optogenetic activation of upstream neurons such as P1 rather than by a female, and the result comes from one lab without replication [LOW][1].

The same paper recorded the nested pattern in the two descending pathways needed for singing, including pIP10 calcium (left and right pooled) together with song sound [MED][1]. Its claim that these pathways give structured input to VNC neurons is wiring evidence from MANC, a different male from the imaged flies [MED][1]. The 2022 preprint called the pattern "combinatorial," with pIP10 as a general "sing" signal and pMP2 pulse-selective; the published paper calls it "nested" [MED][2][1].

Other activity recordings on the sender side:

- **Wing muscles, not neurons:** the direct control muscles i1, hg1-4 and b3 are all strongly active during pulse song [HIGH][7].
- **P1:** in tethered males courting a fictive female in virtual reality, P1 activity rose at courtship onset, stayed high through the bout, and returned to baseline when pursuit paused [MED][12]. This tracks arousal and pursuit, not song syllables [MED][12].
- **pC2l as a listener:** pC2l neurons respond to both sound and visual cues [HIGH][13].

No recording in this set is tied to cell IDs in the male CNS connectome, and almost all come from tethered males [MED][1][20].

### Deciding to sing: brain neurons

The 2011 framework named P1 and pIP10 in the brain as mediating the decision to sing and acting on it. It proposed dPR1, vPR6 and vMS11 in the thorax as parts of a pulse pattern generator. P1, pIP10 and dPR1 are male-specific [HIGH][4]. Later work revised this. P1 is now split into subtypes within the pC1 cluster, pC2 drives song upstream of pIP10, and the VNC circuit has been reorganised around pMP2, TN1A and dMS9 [MED][4][13][14][3].

Activating P1 in solitary males quickly triggers courtship song that can persist for minutes after stimulation ends [MED][9][10]. P1 activation also drives a persistent state that increases male-male aggression [MED][11]. The male connectome release highlights male pC1, a doublesex population that includes the male-specific P1 subtypes, as promoting song and aggression, based on earlier causal work [LOW][21]. pC1 also exists in females, so it is not a male-specific cluster [LOW][21].

In males, activating a subset of pC2l gives pulse song at once, then sine song after activation ends. pC2l is also needed for normal singing, and in females the same type is needed for normal responses to male song [HIGH][13]. pC2 drives pulse song directly via pIP10, which gives simple song from brief input. It also recruits persistent P1a activity and releases inhibition on a VNC rebound circuit, which enables complex bouts [MED][14].

Males also produce substrate-borne vibration, mostly in different contexts from song. P1a and pC2l drive both signals through separate premotor pathways. A model with recurrence and mutual inhibition explains why vibration is limited to contexts such as a close or stationary female [LOW][15].

### Descending pathways: pIP10 and pMP2

Optogenetic activation of pIP10 produces both pulse and sine song. Activation of pMP2 produces pulse song but not sine [HIGH][1]. Both project heavily into the wing neuropils; that part is wiring evidence [MED][1]. The song mix after pIP10 activation depends on activation strength and genotype [MED][4][26]. pIP10 activation also switches a male between model-inferred internal states [HIGH][18]. Calling pIP10 a simple "command neuron" is therefore an oversimplification [MED][18][3].

### The nerve-cord song network and motor output

Silencing and activation screens identified eight fru- and/or dsx-expressing cell types: pIP10, pMP2, dPR1, dMS9, vMS12, TN1A, dMS2 and vPR9. Each is needed for normal pulse song, sine song, or both [MED][3]. In MANC (wiring only, one male), they are densely interconnected and linked to wing motor neurons. They form two nested feed-forward pathways, and the larger one underlies pulse song. The authors argue that pulse song is the older and more complex song type, which is an inference, not a measurement [MED][3].

Song-type roles are not cleanly separated. The "pulse" neurons dMS9 and vMS12 also changed sine amplitude or frequency, the "sine" neurons TN1A and dMS2 changed pulse features, and pIP10 and vPR9 affected many features of both [MED][3]. Only one verifier confirmed these details, and chronic silencing or strong split-GAL4 activation leaves room for off-target effects and compensation [LOW][3].

Optogenetic activation of dMS9, vMS12, vPR6 or vPR13 produced some sine song, but silencing any one of them did not noticeably reduce it. So vPR6 can evoke sine song but has not been shown to be needed for it [LOW][3]. The MANC premotor analysis mapped descending-to-motor circuits and identified courtship-linked types including TN1a, dPR1, vPR9 and vMS11. How older driver-line names such as vPR6 map onto MANC types is unsettled [MED][5].

At the motor end, TN1A is male-specific, doublesex-dependent and needed specifically for sine song. It can drive hg1, a wing motor neuron that is not sex-specific and is also needed for sine. Doublesex in TN1A increases its branch density where hg1 dendrites sit [HIGH][6]. Song and flight use different activity patterns from a shared set of muscles and motor neurons, and the flight command overrides song [HIGH][7]. The research summary gives the pulse interval as roughly 35 ms, but that figure is unverified [LOW]. No recording ties the pulse rhythm or the sine carrier frequency to specific cells [MED][1][3].

### Receiver feedback shapes what the sender sings

Song patterning is not a fixed action pattern. Males choose song moment by moment from fast visual and self-motion cues: their own locomotion, the female's movement, and the distance between them [MED][16]. The authors found the same relationship in the other Drosophila species they tested, a limited comparison [MED][16].

Male song has at least three modes: fast pulse (Pfast), slow pulse (Pslow) and sine. Pfast is louder and more common when the male is far from the female [HIGH][17]. Activity in identified premotor and motor neurons affects which mode is chosen, and the two pulse types affect female behaviour differently [HIGH][17]. Whether Pfast and Pslow are separate categories or ends of a continuum depends on the analysis method [MED][17].

An unsupervised hidden-state model finds three internal states in courting males. Each state maps female feedback cues onto song modes differently, and together they predict moment-to-moment song choice [HIGH][18]. These states are inferred from behaviour; no recording shows them [MED][18]. Distance also sets complexity. Males sing simple single-mode trains far from the female and complex pulse-sine alternations near her. VNC song circuits show mutual inhibition and rebound excitability between the nodes for the two modes [MED][14].

In one closed-loop setup, the male's song triggered backward walking in the female through optogenetic activation of her Moonwalker descending neurons. Trained males later changed the contexts in which they sang to new females, which the authors call usage learning of an innate song [LOW][19]. If confirmed, the manipulation was on the receiver, the male result is behavioural, and what changed was when he sang, not the song's structure [LOW][19].

### Sex differences, female signals and the whole-CNS connectome

The male CNS connectome is reported to hold about 166,700 proofread neurons and about 11,700 cell types, annotated for fruitless and doublesex [LOW][20]. Against the female brain, the Cell summary gives 8,069 matching, 138 dimorphic, 289 male-specific and 71 female-specific types; the preprint gave 262 sex-specific plus 114 dimorphic [LOW][20]. In this comparison (wiring only, one animal per sex), sex-specific and dimorphic types sit mainly in higher-order central regions, while sensory and motor neurons within the CNS are largely similar, apart from some sensory afferents [LOW][20]. The authors read dimorphic neurons as routing shared sensory input into sex-specific circuits, which is an interpretation of wiring [LOW][20].

This fits older causal work. Stimulating fruitless-expressing nerve-cord neurons gives wing movement and sound in both sexes, but male-typical song only in males or in females given male fruitless. A song-like motor program is therefore dormant in females because the commands to start it are missing [HIGH][8]. These experiments were done largely in headless flies, using an ATP-gated channel rather than channelrhodopsin [MED][8]. Activating pC1 doublesex neurons in female brains makes females court like males: they follow, tap and sing to other flies [MED][23][24]. How closely this song matches male acoustics was not checked [LOW][23].

Females also sing naturally. During mating they produce a copulation song by wing vibration that differs from male courtship song. It requires DoublesexF-expressing neurons, whose single-cell identity is unknown, and is modulated by the male's seminal fluid [MED][25]. A 2026 preprint uses two male VNC connectomes as references to assign cell types to about 13,000 female VNC neurons and study female counterparts of the male song circuit. Its counterparts are anatomical predictions only [LOW][22].

Hearing regulates male-male aggression, and courtship and aggression songs affect aggression differently. The neurons that produce aggression song were not identified [HIGH][28].

### Evolution: same sender neuron, different song

pIP10 (one per hemisphere) was targeted in D. melanogaster and D. yakuba. Its activation gave sine song in D. melanogaster at low activation and "clack" song in D. yakuba, with more pulse in D. yakuba at higher activation. This places the evolutionary change downstream of pIP10 [MED][26]. D. yakuba lost sine song and lacks a TN1A-equivalent type. Its TN1 neurons still drive the singing wing posture but not sine song. A divergent doublesex function reduces TN1 number by promoting cell death [HIGH][27].

### Interpretation limits

Wiring is not activity: the connectomes show no neuron lighting up [MED][20]. The 2026 result is not vocal learning [LOW][19]. Female song evoked through pC1 is artificial [MED][23]. LLM-inferred cell functions are hypotheses [MED][35]. Hobby "connectome-inspired audio" repositories are not evidence about fly circuits.

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| P1 / P1a | Decision to court; persistent song and arousal; P1a drives song and vibration | Male | Causal; recorded (pursuit, not song-locked); wiring | MED | 4, 9-12, 14, 15 |
| pC1 | Promotes song and aggression in males; activation in females gives male-like courtship | Both | Causal; wiring | MED | 21, 23 |
| pC2l | Hears song and sees the female; drives pulse then sine; pulse via pIP10, persistent song via P1a | Both | Recorded (sensory); causal | HIGH / MED | 13, 14 |
| pIP10 | Descending; drives pulse and sine; switches internal states; species-specific output | Male | Recorded with sound; causal; wiring | HIGH | 1, 18, 26 |
| pMP2 | Descending; drives pulse, not sine | Male | Causal; wiring; activity at pathway level | HIGH / MED | 1 |
| dPR1 | Active only during pulse song | Male | Recorded; causal; wiring | HIGH | 1, 3, 4 |
| TN1A | Needed for sine; active in both songs; drives hg1; absent in D. yakuba | Male | Recorded; causal; wiring | HIGH | 1, 6, 27 |
| dMS9, vMS12, dMS2, vPR9 | Core network types; each affects features of both songs | Male | Causal; wiring | MED | 3, 5 |
| vPR6, vMS11, vPR13 | 2011 pattern-generator candidates; evoke song; not shown necessary for sine | Male | Causal (sufficiency); vMS11 in MANC | LOW | 3, 4, 5 |
| hg1 motor neuron | Needed for sine; driven by TN1A | Both | Causal | HIGH | 6 |
| Muscles i1, hg1-4, b3 | Strongly active in pulse song; shared with flight | Both | Recorded (muscle) | HIGH | 7 |
| fru+ VNC neurons | Dormant song motor program in females | Both | Causal | HIGH | 8 |
| DsxF neurons | Needed for female copulation song | Female | Causal | MED | 25 |
| Moonwalker descending neurons | Tool used to force a female "reply" | Female | Causal (tool) | LOW | 19 |
| 08B ascending neurons; DNa12 | Reported links to song and courtship | Unclear | Wiring (search summary only) | LOW | -- |

## Why this matters for two-way communication with animals

- **A machine can join the exchange on the receiver side.** The male already selects song modes from the female's distance and movement [HIGH][16][17]. Her side can be driven in closed loop with his song [LOW][19]. The practical reply channel is controlled receiver behaviour, not synthetic song.
- **The sender's output is small and machine-readable.** Pfast, Pslow and sine are defined modes [HIGH][17], and vibration is a second channel used in particular contexts [LOW][15]. Real-time pulse and sine segmentation exists [LOW][36], so each utterance can be labelled and answered within a trial.
- **Responding to intent before sound is plausible but untested.** pIP10 and pMP2 activity has been recorded alongside song [MED][1], but no source here measures how far it leads song onset.
- **This maps mode choice, not meaning.** The evidence links what is sung to receiver cues and inferred states [MED][18]. Nothing here decodes content.
- **Decoders will not carry over between species unchanged.** The same neuron drives different songs in two species [MED][26], and a cell type disappeared along with sine song [HIGH][27].
- **A reusable recipe for other animals:** list the discrete output modes, find the receiver cues that predict mode choice, model hidden states, then alter the reply in closed loop and measure how the sender's mode use shifts. Every step has a fly precedent [MED][16][17][18][19].

## Open questions

1. What generates the pulse rhythm: an oscillating cell type, a network rebound loop, or motor and muscle dynamics? The inter-pulse-interval dispute and temperature effects were not reviewed.
2. Which neurons select Pfast versus Pslow? No cell-level recording separates them [HIGH][17].
3. How does female feedback (distance, speed, taste from tapping) reach pIP10 and pMP2, and do the male-CNS paths from pC2, P1a and pC1 match the three-state switching [HIGH][18]? No claim gives pIP10/pMP2 identities in the newer connectomes.
4. Upstream triggers: pheromone and taste inputs to P1 and visual targeting via LC10a (verifiers point to Kohatsu 2011, Clowney 2015, Kallman 2015, Ribeiro 2018; not reviewed) [LOW].
5. Neuromodulation and state: dopamine, mating drive, satiety, age, and how P1/pC1 persistence is held (Jung 2020, Zhang 2016/2018; not reviewed) [LOW].
6. Is song-circuit wiring stable across individuals, given one animal per connectome? How do driver-line names (vPR6, vMS11, vPR13) map onto connectome types [MED][5]?
7. Which neurons produce aggression song, and do they reuse the VNC song circuit [HIGH][28]? Does female copulation song reuse the dormant generator [HIGH][8][25]?
8. Can wiring plus predicted neurotransmitters alone reproduce the nested activity [HIGH][1], or are neuromodulators and intrinsic properties needed?
9. What changes in the male during usage learning, and does it last [LOW][19]? Isolation and early acoustic experience were not reviewed.
10. Could an interface use vibration instead of sound [LOW][15]? A verifier notes that song is a near-field particle-velocity signal and that males adjust amplitude to distance (Coen 2016, not reviewed) [LOW].
11. Do song neurons behave the same in natural, untethered song? No electrophysiology or voltage imaging of song premotor or motor neurons during natural song was found.

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Connectome-constrained song pattern generator model | A sign-constrained model of the eight-type VNC network, weighted from MANC and the male CNS connectome, reproduces the nested activity and the pIP10 versus pMP2 results, and predicts which cells separate Pfast from Pslow. | Extract the song subnetwork and wing motor neurons [20][30][31]; simulate descending input; fit to song data under activation and silencing [32] and calcium traces [33]; link to Track 05. | Computational, now | Pull the song-circuit adjacency matrix and test whether a sign-constrained linear model already makes pulse activity a superset of sine activity [33]. |
| 2. Closed-loop "reply" to a singing male | A machine that detects song mode in real time and gives mode-specific female-like replies will shift the male's feedback-to-mode mapping within one session. | Extend the 2026 rig [19]; real-time segmentation [36] triggers different replies to Pfast, Pslow and sine (female backing or slowing via MDN or other split-GAL4 lines, or a visual or robotic dummy); test transfer to real females. | Wet lab, months | Reproduce the MDN-feedback result, then make the reply depend on Pfast versus Pslow. |
| 3. Neural-intent readout driving a virtual partner | pIP10/pMP2 (or pC2l/P1a) calcium predicts the next song mode tens to hundreds of ms ahead; a fictive female reacting to decoded intent shifts song sequences more than one reacting to sound. | Tethered virtual-reality courtship [12] with two-photon imaging of descending neurons [1] and a microphone; train a decoder; close the loop on it. | Wet lab, years | Measure how far pIP10/pMP2 calcium leads song onset in the published data [33]. |
| 4. Map the dormant female song circuit | Female copulation song uses VNC counterparts of the male premotor types, gated by DsxF neurons instead of pIP10 and pMP2. | Alignment preprint [22], FANC and BANC, cross-sex descending-neuron matching [34], male CNS [20]; screen matching split-GAL4 lines in the copulation-song assay [25]. | Wet lab, months | List female counterparts of dPR1, TN1A, vPR9, dMS2, dMS9 and vMS12; check which receive DsxF brain input. |
| 5. Find the aggression-song sender neurons | Aggression song uses the same VNC wing network, reached via a descending neuron downstream of aggression-linked pC1/P1 subsets, not pIP10. | Query the male CNS connectome [20]; activate and silence candidates in contests with microphones [28]. | Wet lab, months | Shortlist descending neurons with high pC1 input and wing-neuropil output, excluding pIP10 and pMP2. |

## Leads needing confirmation

- **2026 closed-loop study [19].** Its existence and design are unverified. This is the top re-check, since it is the main "conversation" precedent [LOW][19].
- **Male CNS connectome counts [20].** Versions differ: 166,696 vs 166,700 neurons; 11,691 vs 11,710 types; 262 + 114 vs 289 + 71 + 138. Settle these against the Cell paper [LOW][20].
- **Unchecked source texts.** The Janelia release wording on pC1 [LOW][21] and the alignment preprint's authors and "13,000 neurons" figure [LOW][22] were not checked.
- **Song-vibration paper [15].** The venue and a reported "all 35 males vibrated" count are unverified [LOW][15].
- **pIP10 dose-response [26].** Verifiers differ. One found the snippet inconsistent ("more sine" in D. melanogaster at stronger activation, against the nested model); the other read it as sine versus clack at low activation and more sine versus more pulse at high activation. Check the paper [MED][26].
- **Lillvis 2024 figure-level details [3].** Which neuron changed which song feature, and the vPR6/vPR13 silencing result, rest on one verifier [LOW][3].
- **Shiozaki 2024 methods [1].** Check whether song was optogenetically evoked, and whether [1] or [3] reports the pIP10/pMP2 activation result [LOW][1].
- **P1a and tapping cues [14].** The claim that tapping cues drive P1a probably comes from earlier work, not [14] [LOW][14].
- **08B ascending neurons and DNa12.** Their links to song and courtship were seen only in a search summary [LOW].
- **Other unconfirmed details.** The ~35 ms pulse interval [LOW]; the MANC premotor paper's 2026 version of record [LOW][5]; a remating effect of female song [LOW][25]; Jonsson 2011 as the first description of aggression song [LOW][29]; and the DAS URL [LOW][36].

## Claims dropped in verification

No claim was dropped in full. These parts were removed or narrowed:

- T01-04: preprint "when versus which song" wording removed as unverifiable.
- T01-05: "needed for pulse and sine" narrowed to "pulse and/or sine"; pathway structure relabelled as wiring.
- T01-07: "vPR6 sufficient to evoke song" limited to sine song.
- T01-13: "mainly from the female's movement" removed (male self-motion also counts); "conserved across species" narrowed to species tested.
- T01-15: taste cues driving P1a removed as a finding of that paper.
- T01-17: unverified "all 35 males" count removed; "only when it can reach the female" replaced by context variables.
- T01-19: persistent song re-cited from Hoopfer 2015 to Inagaki 2014 and Bath 2014.
- T01-22: sensory routing reframed as the authors' interpretation.
- T01-23: "male-specific pC1" removed.
- T01-24: wrong source title corrected.
- T01-28: citation moved from a JEB summary to the primary paper.
- T01-29: "depends on seminal fluid" became "modulated by"; remating effect removed.
- Seed errors not carried forward: Shirangi 2016 is Developmental Cell, not Cell; Clemens 2018 is Current Biology; sine-song loss is Ye 2024, not Ding 2019; BANC is a female dataset; a 2025 Current Opinion review was misreported as a Cell study.

## Sources

1. Activity of nested neural circuits drives different courtship songs in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- Nature Neuroscience, 2024 -- https://www.nature.com/articles/s41593-024-01738-9 (PMC full text: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11452343/)
2. Combinatorial circuit dynamics orchestrate flexible motor patterns in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- bioRxiv 2022.12.14.520499, 2022 (published as [1]) -- https://www.biorxiv.org/content/10.1101/2022.12.14.520499v2
3. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00015-0 (PDF: https://www.cell.com/current-biology/pdf/S0960-9822(24)00015-0.pdf)
4. Neuronal Control of Drosophila Courtship Song -- von Philipsborn AC, Liu T, Yu JY, Masser C, Bidaye SS, Dickson BJ -- Neuron, 2011 -- https://www.sciencedirect.com/science/article/pii/S0896627311000572
5. Transforming descending input into behavior: The organization of premotor circuits in the Drosophila Male Adult Nerve Cord connectome -- Cheong HSJ, Eichler K, Sturner T, Asinof SK, Champion AS, Marin EC, Oram TB, Sumathipala M, Venkatasubramanian L, Namiki S, Siwanowicz I, Costa M, Berg S, Janelia FlyEM Project Team, Jefferis GSXE, Card GM -- eLife 13:RP96084 (reviewed preprint), 2024 -- https://elifesciences.org/articles/96084
6. Doublesex Regulates the Connectivity of a Neural Circuit Controlling Drosophila Male Courtship Song -- Shirangi TR, Wong AM, Truman JW, Stern DL -- Developmental Cell, 2016 -- https://www.cell.com/developmental-cell/fulltext/S1534-5807(16)30325-2
7. Multifunctional Wing Motor Control of Song and Flight -- O'Sullivan A, Lindsay T, Prudnikova A, Erdi B, Dickinson M, von Philipsborn AC -- Current Biology, 2018 -- https://www.cell.com/current-biology/fulltext/S0960-9822(18)30829-7
8. Sex-Specific Control and Tuning of the Pattern Generator for Courtship Song in Drosophila -- Clyne JD, Miesenböck G -- Cell, 2008 -- https://www.sciencedirect.com/science/article/pii/S0092867408002158
9. Optogenetic control of Drosophila using a red-shifted channelrhodopsin reveals experience-dependent influences on courtship -- Inagaki HK, Jung Y, Hoopfer ED, Wong AM, Mishra N, Lin JY, Tsien RY, Anderson DJ -- Nature Methods 11:325-332, 2014 -- URL not verified
10. FlyMAD: rapid thermogenetic control of neuronal activity in freely walking Drosophila -- Bath DE, Stowers JR, Hormann D, Poehlmann A, Dickson BJ, Straw AD -- Nature Methods 11:756-762, 2014 -- URL not verified
11. P1 interneurons promote a persistent internal state that enhances inter-male aggression in Drosophila -- Hoopfer ED, Jung Y, Inagaki HK, Rubin GM, Anderson DJ -- eLife 4:e11346, 2015 -- https://elifesciences.org/articles/11346
12. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature 595:549-553, 2021 (URL is the 2020 bioRxiv preprint, "An arousal-gated visual circuit controls pursuit during Drosophila courtship") -- https://www.biorxiv.org/content/10.1101/2020.08.31.275883v1.full
13. Shared Song Detector Neurons in Drosophila Male and Female Brains Drive Sex-Specific Behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219310243
14. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA, Pacheco DA, Aragon MJ, Ireland EC, Li X, Thieringer K, Pang R, Murthy M -- Nature, 2023 -- https://www.nature.com/articles/s41586-023-06632-1
15. A neural circuit for context-dependent multimodal signaling in Drosophila -- Steinfath E, ... Clemens J (full author list not captured) -- Nature Communications, 2025 -- https://www.nature.com/articles/s41467-025-64907-9
16. Dynamic sensory cues shape song structure in Drosophila -- Coen P, Clemens J, Weinstein AJ, Pacheco DA, Deng Y, Murthy M -- Nature, 2014 -- https://www.nature.com/articles/nature13131
17. Discovery of a New Song Mode in Drosophila Reveals Hidden Structure in the Sensory and Neural Drivers of Behavior -- Clemens J, Coen P, Roemschied FA, Pereira TD, Mazumder D, Aldarondo DE, Pacheco DA, Murthy M -- Current Biology, 2018 -- https://www.sciencedirect.com/science/article/pii/S0960982218307735
18. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience, 2019 -- https://www.nature.com/articles/s41593-019-0533-x
19. Recent social experience alters song behavior in Drosophila -- Roemschied FA, Ireland EC, Calhoun AJ, Choi M, Ahmed OM, Murthy M -- Current Biology, 2026 -- https://www.cell.com/current-biology/fulltext/S0960-9822(26)00152-1
20. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Berg S et al. (FlyEM/Janelia, Cambridge, Google) -- Cell, 2026 (preprint bioRxiv 10.1101/2025.10.09.680999, Oct 2025) -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6 (also: https://www.sciencedirect.com/science/article/pii/S0092867426009426)
21. Researchers reveal connectome of the male fruit fly central nervous system -- Janelia Research Campus news -- Janelia news, 2026 -- https://www.janelia.org/news/researchers-reveal-connectome-of-the-male-fruit-fly-central-nervous-system
22. Uncovering Sex Differences in the Drosophila Ventral Nerve Cord Through Connectome Alignment -- authors not captured -- bioRxiv, 2026 -- https://www.biorxiv.org/content/10.64898/2026.06.14.732053v2
23. Activation of latent courtship circuitry in the brain of Drosophila females induces male-like behaviors -- Rezával C, Pattnaik S, Pavlou HJ, Nojima T, Brüggemeier B, D'Souza LAD, Dweck HKM, Goodwin SF -- Current Biology 26(18):2508-2515, 2016 -- URL not verified
24. Brain wiring explains sex differences in Drosophila behaviour (secondary summary of [23]) -- author not captured -- Journal of Experimental Biology, 2016 -- https://journals.biologists.com/jeb/article/219/23/3675/16606/Brain-wiring-explains-sex-differences-in
25. Female copulation song is modulated by seminal fluid -- Kerwin P, Yuan J, von Philipsborn AC -- Nature Communications, 2020 -- https://www.nature.com/articles/s41467-020-15260-6
26. Neural Evolution of Context-Dependent Fly Song -- Ding Y, Lillvis JL, Cande J, Berman GJ, Arthur BJ, Long X, Xu M, Dickson BJ, Stern DL -- Current Biology, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219301587
27. Changes in the cellular makeup of motor patterning circuits drive courtship song evolution in Drosophila -- Ye D, Walsh JT, Junker IP, Ding Y -- Current Biology, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00460-3
28. Hearing regulates Drosophila aggression -- Versteven M, Vanden Broeck L, Geurten B, Zwarts L, Decraecker L, Beelen M, Göpfert MC, Heinrich R, Callaerts P -- PNAS, 2017 -- https://www.pnas.org/doi/10.1073/pnas.1605946114
29. Sound production during agonistic behavior of male Drosophila melanogaster -- Jonsson T, Kravitz EA, Heinrich R -- Fly 5:29-38, 2011 (verifier-suggested, not reviewed) -- URL not verified
30. Male CNS connectome project page and media -- Janelia FlyEM with Cambridge and Google -- Janelia, 2025-2026 -- https://www.janelia.org/project-team/flyem/male-cns-connectome (media: https://male-cns.janelia.org/media/)
31. MANC (Male Adult Nerve Cord connectome) and its systematic annotation -- authors not captured -- eLife reviewed preprints -- https://elifesciences.org/reviewed-preprints/97769 (annotation: https://elifesciences.org/reviewed-preprints/97766v1)
32. Data related to Lillvis JL et al. 2023, Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL et al. -- Janelia figshare -- https://janelia.figshare.com/articles/dataset/Data_related_to_Lillvis_JL_et_al_2023_Nested_neural_circuits_generate_distinct_acoustic_signals_during_Drosophila_courtship/24707544
33. Data and code related to Shiozaki et al. 2024, Activity of nested neural circuits drives different courtship songs in Drosophila -- Shiozaki HM et al. -- Janelia figshare -- https://janelia.figshare.com/articles/journal_contribution/Data_and_code_related_to_Shiozaki_et_al_2024_Activity_of_nested_neural_circuits_drives_different_courtship_songs_in_i_Drosophila_i_/25041485
34. Comparative connectomics of descending and ascending neurons (FlyWire, FANC and MANC matched) -- Sturner T et al. -- venue not captured, 2025 -- https://collaborate.princeton.edu/en/publications/comparative-connectomics-of-drosophila-descending-and-ascending-n/
35. LLantia: LLM-based circuit function inference from connectome structure and literature -- authors not captured -- arXiv, 2026 -- https://arxiv.org/html/2608.00059v1
36. DAS (Deep Audio Segmenter) -- Steinfath E et al. -- eLife, 2021 -- URL not verified
