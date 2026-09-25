# Track 04 -- Seeing neurons light up: whole-brain activity imaging and linking activity to connectome identity

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 checked (20 verified / 8 corrected / 0 conflict / 3 unverified) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

> **How far to trust the tags.** The web-search budget was used up before verification, so every verdict comes from the verifiers' own knowledge of the literature (to about mid-2026). [HIGH] means two verifiers independently agreed. It does not mean search-confirmed, and no URL was re-checked. Five verdicts rest on one verifier. Where the verifiers disagreed, both readings are given.

## Bottom line

- **Yes, identified fly neurons have been recorded lighting up on both sides of courtship.** Sender side: P1 in courting males, the descending neurons pIP10 and pMP2 during song, and the VNC neurons dPR1 and TN1A during song. Receiver side: pC2, vpoEN and vpoDN in listening flies. For pIP10, pMP2, pC2 and vpoDN, causal tests show that the neurons also drive behaviour. [HIGH][1][2][3][9]
- **Almost all identity-resolved recordings come from genetically targeted cell types in head-fixed or tethered flies.** The stimuli were playback, a moving dot or optogenetic drive. Flyception2 is the only recording made during a real two-fly interaction, and it imaged the male, not the female. [HIGH][1]
- **Whole-brain imaging shows song-tuned activity in most central-brain regions, but in unidentified ROIs.** No study here matches whole-brain activity to connectome cell types. Running and flailing modulate most neurons, so communication signals must be separated from movement and arousal. [HIGH][6][MED][16]
- **The receiver's state changes its response to the same signal.** After mating, vpoDN song responses shrink but upstream vpoEN responses do not. pC1 carries mating status and a persistent state lasting minutes. A two-way exchange needs a readout of state as well as of the stimulus. [HIGH][9][MED][10]
- **A route from "a neuron lit up" to "this is cell type X" exists, but it is coarse.** Imaging data are registered with BIFROST (under 10 µm error) to an atlas aligned to FlyWire. Candidate types get genetic drivers through NeuronBridge and 3,060 adult split-GAL4 lines, and are confirmed by targeted re-imaging and optogenetics. Flies have no NeuroPAL-style identity label, and the annotated connectome is female while the sender circuits are male. [HIGH][18][21][22][23]
- **Imaging speed is approaching single song pulses.** A 2026 light-beads study reports 28 whole-brain volumes/s and responses to single song pulses. No verifier could confirm it. [LOW][7]
- **Nothing here "decodes" or "translates" fly communication.** The best next projects are (1) a census that assigns candidate cell types to song-tuned ROIs using public data, which can start now, and (2) song playback steered in closed loop by a female's vpoDN activity.

## What the evidence shows

### 1. Sender side: the courting male

**Arousal and pursuit.** In freely walking males courting a female, ratiometric imaging through a head window (Flyception2) showed fruitless-expressing P1 neurons active during courtship and inactive during copulation. GABAergic mAL neurons stayed active during copulation [HIGH][1]. This is the only activity recorded during a real two-animal interaction in this track. The signals are neurite-level, from one lab, in few animals [MED][1].

In tethered males chasing a moving dot in virtual reality, P1 activity tracked moment-to-moment pursuit intensity, and LC10a visual projection neuron gain was selectively raised during courtship [HIGH][2]. The evidence is recorded activity plus causal manipulation: arousal came from female contact or optogenetic P1 activation. "Selectively" is the authors' interpretation, not a test against every visual pathway [MED][2]. The venue is Nature, not Cell as the seed list said [HIGH][2].

**Song production.** VNC calcium imaging during singing showed nested song-motor populations. dPR1 was active only during pulse song, and TN1A during both pulse and sine song [HIGH][3]. Brain recordings showed the same nesting in the descending pathways pIP10 and pMP2 [HIGH][3]. A separate wiring-only analysis of a male VNC connectome showed structured input from these pathways to VNC song neurons, consistent with the nesting [HIGH][3]. One verifier says this connectome was "presumably MANC" [LOW]. Optogenetic activation of pIP10 induces pulse and sine song, and pMP2 activation induces pulse only [HIGH][3]. The pMP2 result comes from one study. It is unconfirmed whether song during imaging was spontaneous or optogenetically triggered [MED][3].

Lillvis et al. built split-GAL4 lines for VNC song-circuit types, scored song with SongExplorer (which separates pulse from sine), and showed by activation and silencing that the two modes come from nested circuits. The evidence is causal, not imaging, and the counts (58 lines, ≥40 types) are unchecked [LOW][4].

Under optogenetic pIP10 drive, two-photon imaging found nearly half of TN1 wing-motor neurons positively correlated with the stimulus and a smaller fraction anti-correlated, with alternating peaks after stimulation ended. Only one verifier could assess these numbers [MED][5]. In behaviour, males sang simple one-mode trains far from the female and alternating sequences near her [MED][5]. The sender therefore adjusts the signal to where the receiver is.

### 2. Receiver side: hearing the song

**Brain-wide activity, not cell-typed.** Whole-central-brain volumetric imaging with cross-brain registration, in head-fixed males and females, found auditory activity in most central-brain regions, mostly tuned to courtship-song features [HIGH][6]. Responses were stereotyped in early mechanosensory regions and more variable higher up, and this variability was largely independent of movement [HIGH][6]. The ROIs are pan-neuronal, not cell types, and "song-tuned" is relative to the stimuli tested: pulse, sine, tones and noise [HIGH][6]. The dataset is public.

A 2026 study using light beads microscopy reports brain-wide imaging in head-fixed, behaving flies at 28 volumes/s (60 for the central brain). It reports fast auditory responses that standard two-photon imaging misses, and it recovered responses to single song pulses by temporal super-resolution [LOW][7]. Neither verifier knew the paper. It is the most relevant recent result and the first to re-check.

**Identified song detectors.** Dsx+ pC2l and pC2m neurons are tuned to several temporal features of pulse song, with similar tuning in both sexes [MED][8]. The imaging covered pC2 cell bodies and Dsx+ neurites in the lateral junction (LJ). The seed claim listed "LJ" as a neuron, but it is a neuropil region [MED][8]. Optogenetic pC2 activation drives sex-specific behaviours, including song in males [MED][8].

**Female acceptance pathway.** In head-fixed virgin females, the female-specific descending neurons vpoDN control vaginal plate opening. They showed strong calcium rises during song playback (GCaMP6s, two-photon) [HIGH][9]. They receive excitatory input from song-tuned vpoEN auditory neurons and from pC1 [HIGH][9]. That input map rests partly on EM wiring and functional-connectivity tests [MED][9]. After mating, vpoDN song responses shrink but vpoEN responses do not, which can explain lower receptivity [MED][9]. pC1 encodes mating status, excites vpoDN, and is implicated as the source of the change. One verifier accepted "mediated by pC1". The other judged that wording partly inferential, so this dossier says "implicated" [MED][9]. The venue is Nature, not Neuron [HIGH][9].

**Persistent internal state.** In females, optogenetic activation of Dsx+ pC1 (notably pC1d/e) produces a state lasting minutes that changes receptivity, song responses and aggression-like behaviour [MED][10]. pC1 and Fru+ aIPg neurons show persistent activity after activation, so this is recorded activity following causal drive, not during natural song [MED][10]. The strong recurrent pC1d/e–aIPg connections are wiring only, from a female EM volume [MED][10]. Other labs separate the roles of pC1d and pC1e [MED][10].

**Network organisation.** Baker et al. imaged 24 new auditory cell types (recorded activity) and mapped their connections, including to known early and higher-order auditory neurons, in female FlyWire (wiring) [MED][11]. Neurons with different song-mode preferences are highly interconnected, with no clear hierarchy, yet each type's responses can be predicted from its inputs [MED][11].

### 3. Activity-history markers for freely behaving flies

These methods show which neurons were active over minutes to hours. They do not show moment-to-moment activity.

- **HI-FISH** (in situ labelling of the immediate-early gene Hr38) maps activated cells across the whole male brain. It showed aggression-promoting classes, including P1a, active during courtship and aggression, and an optogenetic variant found candidate downstream targets [HIGH][12]. It is a post-mortem snapshot of tens of minutes of activity [HIGH][12]. Not every active neuron necessarily induces Hr38, so no signal does not mean no activity [MED][12].
- **CaMPARI** photoconverts green to red when high calcium coincides with ~405 nm light. It has marked active neurons in several freely moving flies at once. Use during courtship is proposed, not shown [LOW][13].
- **TRIC** is a transcriptional calcium reporter. It showed neuropeptide F neurons responding to sexual deprivation and pars intercerebralis cells responding to food and arousal. It integrates over hours, so it reports state, not signals [HIGH][14]. The venue is Nature Neuroscience, not Neuron.

### 4. The movement and arousal confound

The seed list filed these locomotion studies under communication. Here they serve as a warning.

- Light-field imaging of the near-whole brain at up to 200 Hz found a global rise in activity during walking compared with rest [HIGH][15]. One verifier adds that there was no such rise during grooming and that the rise was strongest in dopamine and octopamine neurons [MED][15].
- SCAPE imaging of head-fixed, spontaneously behaving flies found most neurons correlated or anti-correlated with running and flailing, over seconds to about a minute. Grooming gave a weaker response. Residual activity formed small, spatially clustered groups [MED][16].
- Two-photon imaging of walking flies found spatially clustered supervoxel signals selective for forward or angular velocity, not resolved to neurons [MED][17].

Communication claims therefore need controls matched for locomotion and arousal [MED][16]. Pacheco's test of auditory variability against movement is one such control [HIGH][6].

### 5. From "a neuron lit up" to "this is cell type X"

1. **Record** pan-neuronal GCaMP in a head-fixed fly, by two-photon [6], SCAPE [16], light-field [15] or light beads microscopy [LOW][7].
2. **Register** to the Functional Drosophila Atlas (FDA) with BIFROST. Precision is under 10 µm across specimens and labs, and the hemibrain and FlyWire are aligned to the FDA [HIGH][18]. Registration gives location, not identity [HIGH][18].
3. **List candidate types.** FlyWire annotates 8,453 cell types in one female brain: 3,643 from the hemibrain and 4,581 new ones [HIGH][23]. The two parts do not sum to the total in the abstract either. The researcher proposes ranking candidates by morphology, tuning and connectivity, which is untested [LOW].
4. **Find drivers.** NeuronBridge matches light-microscopy images of GAL4 and split-GAL4 lines to EM neurons by morphology. Its matches are candidates [HIGH][21]. FlyLight provides 3,060 adult CNS and 1,373 larval split-GAL4 lines [HIGH][22].
5. **Re-image and perturb** the targeted type. This is how pC2, vpoDN, dPR1 and TN1A were characterised [HIGH][3][8][9].

**How well does wiring predict activity?** Resting-state functional correlations in the fly brain relate strongly to direct region-to-region connectivity (light-level, not EM), but the match varies by region and the mushroom body depends more on indirect connections [HIGH][19]. A 2025 reviewed preprint reports that the match falls linearly as the brain is divided into more regions [LOW][20]. In C. elegans, optogenetic stimulation plus imaging of 23,433 neuron pairs showed measured signal propagation departing from anatomy-based predictions, partly through extrasynaptic signalling [HIGH][25]. The researcher therefore flags as overreach the Nature Methods "Method of the Year 2025" statement that fly maps already predict function from structure [MED].

**Gaps.**
- *No identity label.* C. elegans NeuroPAL colour-codes every neuron and leaves the green channel free for GCaMP, which made identity-resolved whole-brain recordings possible [HIGH][24]. Neither the researcher nor one verifier knows of an adult-fly equivalent [MED][24].
- *No same-animal imaging then EM in adult flies.* This has been done in larval zebrafish hindbrain (a preprint, checked by one verifier) [MED][26].
- *Resolution.* An error of about 10 µm is coarse relative to cell bodies and thousands of types [MED][18][23].
- *Sex mismatch.* FlyWire is female, but the sender circuits are male [HIGH][23]. No claim links male song-circuit activity to cell types in the male connectomes (MANC, BANC, 2026 male CNS). Details of the 2026 male CNS could not be checked [LOW].

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| P1 (incl. P1a) | Courtship arousal; active in courtship, silent at copulation; tracks pursuit; Hr38+ after courtship | M | Recorded activity (freely moving; tethered); Hr38 snapshot | HIGH | 1, 2, 12 |
| mAL | GABAergic; active during copulation | M | Recorded activity | HIGH | 1 |
| LC10a | Visual gain raised by P1 arousal | M | Recorded activity + causal | HIGH | 2 |
| pIP10 | Descending; nested activity; drives pulse and sine | M | Recorded activity + causal | HIGH | 3 |
| pMP2 | Descending; nested; drives pulse only | M | Recorded activity + causal | HIGH | 3 |
| dPR1 | VNC; active in pulse song only | M | Recorded activity | HIGH | 3 |
| TN1A | VNC; active in pulse and sine | M | Recorded activity | HIGH | 3 |
| TN1 population | Correlated or alternating under pIP10 drive | M | Recorded under optogenetic drive | MED | 5 |
| pC2l / pC2m | Pulse-song detectors in both sexes; drive sex-specific behaviour | M, F | Recorded activity + causal | MED | 8 |
| vpoEN | Song-tuned input to vpoDN; unchanged by mating | F | Recorded activity; input partly wiring | HIGH | 9 |
| vpoDN | Controls vaginal plate opening; song response shrinks after mating | F | Recorded activity + causal | HIGH / MED (mating) | 9 |
| pC1 (female) | Mating status; excites vpoDN | F | Recorded activity + wiring | MED | 9 |
| pC1d / pC1e, aIPg | Persistent state lasting minutes; recurrent loop | F | Causal + recorded; loop is wiring only | MED | 10 |
| 24 auditory cell types | Song-mode preferences; responses predictable from inputs | Female connectome | Recorded activity + wiring | MED | 11 |
| Pan-neuronal song ROIs | Auditory activity in most central-brain regions | M, F | Recorded, not cell-typed | HIGH | 6 |
| NPF neurons | Slow change with sexual deprivation | M | Slow activity history (TRIC) | HIGH | 14 |
| Auditory sensory + dopamine neurons | Mating-status-dependent modulation (title only) | ? | Unknown | LOW | 27 |

## Why this matters for two-way communication with animals

- **Receiver readouts sit one step from the reply.** vpoDN responds to song and controls the acceptance posture [HIGH][9]. It measures "signal received and weighted" close to the behavioural answer. pC2 gives a song-feature readout in both sexes [MED][8].
- **Sender readouts sit one step from the signal.** The pIP10/pMP2 descending code and dPR1/TN1A track which song mode is produced [HIGH][3]. It is untested whether this activity predicts the next mode before the wing moves (project 3).
- **State changes the meaning of a signal.** The same song drives vpoDN strongly in virgins and weakly after mating [MED][9], and pC1 activation shifts behaviour for minutes [MED][10]. Interactive playback that ignores the receiver's state will get inconsistent responses to identical stimuli.
- **Senders adapt to the receiver.** Song structure changes with distance to the female [MED][5], and fixed playback removes that part of the exchange.
- **The timing budget is tight.** The verifiers' notes put song pulses about 35 ms apart; this was not checked as a claim [LOW]. Imaging at 28 volumes/s is at the edge of that scale [LOW][7]. Closed loop at the level of song bouts is realistic now. Closed loop pulse by pulse has not been shown.
- **Most brain-wide "lighting up" is not message content** [MED][16][HIGH][15]. The same trap applies to population readouts in any species.
- **The method transfers to other animals; the neurons do not.** Identity-resolved whole-brain imaging exists in C. elegans [HIGH][24] and same-animal imaging plus EM in larval zebrafish [MED][26]. This track contains nothing on mammals.

## Open questions

1. Which FlyWire or male-connectome types account for the song-tuned ROIs in [6]?
2. Can vpoDN, pC2 or pC1 be recorded in a freely moving female during natural courtship? The only free-behaviour recording [1] is from males.
3. Can adult flies get identity labels without sparse drivers (a NeuroPAL analogue, barcodes, or EM after imaging) [26]?
4. Which controls separate communication content from movement and arousal [15][16]? The verifiers name further global-state studies (Mann 2021; Aimon 2023) that were not checked.
5. Can male song-circuit activity be assigned to cell types in MANC, BANC or the 2026 male CNS? No claim covers this.
6. How do neuromodulators change which neurons respond to the same signal [25]? GRAB sensors and a fly perturbation atlas (track 05) are not covered.
7. Are jGCaMP8 or voltage indicators needed so that calcium kinetics do not blur pulse-level coding?
8. Can the early auditory relays (Johnston's organ, AMMC, WED, vPN1) be imaged during playback and linked to FlyWire identities?
9. Do singing males suppress their own auditory neurons? No recordings were found.
10. What lights up in males receiving female signals such as ovipositor extrusion or rejection kicks (track 03)?
11. Can brain and VNC be imaged together? Is larval Drosophila, with its complete connectome, a better identity-resolved test bed?
12. Most results come from three lab groups (Murthy, Dickson/Stern, Ruta). Have they been independently replicated?

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| **1. Song-responsive ROI to FlyWire cell-type census** | Most song-tuned ROIs in the Pacheco 2021 data narrow to ≤5 FlyWire candidate types | Register ROIs to FDA/FlyWire with BIFROST; rank overlapping neurons by morphology, distance from Johnston's organ input and known tuning; wet-lab partners validate the top 10 with NeuronBridge-selected split-GAL4 lines [6][11][18][21][22] | Computational, can start now | Download the dataset and BIFROST templates; reproduce ROI placement in FDA space |
| **2. Neural "yes-meter" for closed-loop song playback** | Playback adapted in real time to a virgin female's vpoDN or pC1 activity raises receptivity-linked responses faster than fixed playback | Image vpoDN (split-GAL4, GCaMP); a controller picks the next bout type and interpulse interval; compare with fixed and random schedules; repeat in mated females [9][7] | Wet lab, months | Measure vpoDN latency and reliability to single song bouts |
| **3. Decoding a singer's upcoming song mode** | The nested pIP10/pMP2 code predicts pulse vs sine tens of ms before wing movement | Image descending neurons and dPR1/TN1A with audio and SongExplorer labels; train a decoder; map to MANC/male CNS; test with optogenetics [3][4] | Wet lab, months (first step computational) | Re-analyse the Shiozaki 2024 figshare data for how early the modes separate |
| **4. Snapshot atlas of a full courtship exchange** | HI-FISH or CaMPARI maps of freely courting pairs reveal sender and receiver populations beyond P1, pC1 and pC2 | Conditions: song only, acceptance, rejection; fix or photoconvert at defined events; register to FlyWire (F) and male CNS (M); compare with flies that walk but do not court [12][13][18] | Wet lab, months | Pilot Hr38 labelling in females after song vs noise |
| **5. Adult-fly identity barcode ("fly NeuroPAL")** | A multicolour landmark transgene lets pan-neuronal activity be assigned to single connectome types | Sparse landmark drivers with nuclear fluorophores that do not overlap GCaMP; structural stack after imaging; probabilistic matching to connectome soma positions [22][23][24] | Wet lab, years | Model how many landmarks, placed where, give a target assignment accuracy |
| **6. Freely moving female imaging during real courtship** | Female pC2/vpoDN activity during natural courtship predicts acceptance better than song statistics alone | Adapt Flyception2 to females with GCaMP in vpoDN or pC2, plus multi-microphone audio and pose tracking; compare with head-fixed playback [1][8][9] | Wet lab, years | Validate a stable vpoDN soma signal in a tethered, walking female |

## Leads needing confirmation

- **Light beads microscopy, 2026 [7]:** Volume rates, the single-pulse result and the author "Gauthey" are unconfirmed. Confirm before citing.
- **Function-structure scaling, 2025 [20]:** An unverified reviewed preprint.
- **Dopamine and mating status in auditory neurons [27]:** Only the title was seen. Relevant to track 02.
- **Lillvis counts [4], CaMPARI group use [13], TN1 fractions [5], zebrafish imaging then EM [26]:** Each rests on a single verifier. [26] is a preprint with unconfirmed authors.
- **Rockefeller news [28]:** A lay account of [2] ("spark of desire" is anthropomorphic). Use it only for outreach wording.
- **Authors:** For [9], one verifier could not confirm "Bock D". The author lists for [10], [11], [12], [16] and [21] are from verifier memory.
- **2026 male CNS connectome** and the **unanesthetized imaging preparation**: unverified.

## Claims dropped in verification

No claim was dropped. These parts were removed or narrowed:

- T04-10: "LJ" as a neuron. Removed; LJ is a neuropil region.
- T04-12: "Mediated by pC1". Softened to "implicated".
- T04-14: "Connectivity among all known auditory neurons". Narrowed to 24 new types and their links; relabelled as wiring.
- T04-19: Egg-laying circuit neurons. Removed as unconfirmed, not as false.
- T04-20: "Neurons with similar selectivity cluster". Removed; supervoxel data cannot show this.
- T04-06: Line and cell-type counts. Kept, marked unchecked, downgraded to LOW.
- T04-16: Social or group use of CaMPARI. Downgraded to proposed.
- T04-23: Evidence label "model prediction". Rejected; the work is an empirical comparison.
- Seed venues corrected: [2] and [9] are Nature; [14] is Nature Neuroscience. Seed scope corrected: [16] and [17] are about locomotion, not communication.

## Sources

1. Imaging brain activity during complex social behaviors in Drosophila with Flyception2 -- Grover D, Katsuki T, Li J, Dawkins TJ, Greenspan RJ -- Nature Communications, 2020 -- https://www.nature.com/articles/s41467-020-14487-7
2. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature, 2021 -- https://www.nature.com/articles/s41586-021-03714-w
3. Activity of nested neural circuits drives different courtship songs in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- Nature Neuroscience, 2024 -- https://www.nature.com/articles/s41593-024-01738-9
4. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology 34(4):808-824, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00015-0
5. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA, Pacheco DA, Aragon MJ, Ireland EC, Li X, Thieringer K, Pang R, Murthy M -- Nature 622:794-801, 2023 -- https://www.nature.com/articles/s41586-023-06632-1
6. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience 24:93-104, 2021 -- https://www.nature.com/articles/s41593-020-00743-y
7. High-speed whole-brain imaging in Drosophila -- Gauthey et al. (unverified) -- Nature Communications 17:5810 (bioRxiv 2025.06.18.660371), 2026 -- https://www.nature.com/articles/s41467-026-72437-1
8. Shared Song Detector Neurons in Drosophila Male and Female Brains Drive Sex-Specific Behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29(19):3200-3215, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219310243
9. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang F, Wang K, Forknall N, Patrick C, Yang T, Parekh R, Bock D, Dickson BJ (one verifier could not confirm Bock D) -- Nature, 2021 -- https://www.nature.com/articles/s41586-020-2972-7
10. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco D, Encarnacion-Rivera L, et al., Seung HS, Murthy M (full list from verifier memory) -- eLife, 2020 -- https://elifesciences.org/articles/59502
11. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, Eckstein N, Funke J, Dickson BJ, Murthy M (from verifier memory) -- Current Biology 32(15):3317-3333, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
12. Whole-brain in situ mapping of neuronal activation in Drosophila during social behaviors and optogenetic stimulation -- Watanabe K, Chiu H, Anderson DJ (from verifier memory) -- eLife 12:RP92380, 2024 -- https://elifesciences.org/articles/92380
13. The Photoconvertible Fluorescent Probe, CaMPARI, Labels Active Neurons in Freely-Moving Intact Adult Fruit Flies -- authors not confirmed -- Frontiers in Neural Circuits, 2020 -- https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2020.00022/full
14. A transcriptional reporter of intracellular Ca2+ in Drosophila -- Gao XJ, Riabinina O, Li J, Potter CJ, Clandinin TR, Luo L -- Nature Neuroscience 18:917-925, 2015 -- https://www.nature.com/articles/nn.4016
15. Fast near-whole-brain imaging in adult Drosophila during responses to stimuli and behavior -- Aimon S, Katsuki T, Jia T, Grosenick L, Broxton M, Deisseroth K, Sejnowski TJ, Greenspan RJ -- PLoS Biology 17(2):e2006732, 2019 -- https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.2006732
16. The spatial and temporal structure of neural activity across the fly brain -- Schaffer ES, Mishra N, Whiteway MR, Li W, Vancura MB, Freedman J, Patel KB, Voleti V, Paninski L, Hillman EMC, Abbott LF, Axel R (from verifier memory) -- Nature Communications 14:5572, 2023 -- https://www.nature.com/articles/s41467-023-41261-2
17. Mapping the neural dynamics of locomotion across the Drosophila brain -- Brezovec BE, Berger AB, Hao YA, Chen F, Druckmann S, Clandinin TR -- Current Biology 34:710-726, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(23)01763-3
18. BIFROST: A method for registering diverse imaging datasets of the Drosophila brain -- Brezovec BE, Berger AB, Hao YA, Lin A, Ahmed OM, Pacheco DA, Thiberge SY, Murthy M, Clandinin TR -- PNAS 121(47), 2024 -- https://www.pnas.org/doi/10.1073/pnas.2322687121
19. Whole-brain calcium imaging reveals an intrinsic functional network in Drosophila -- Mann K, Gallen CL, Clandinin TR -- Current Biology 27:2389-2396, 2017 -- https://www.sciencedirect.com/science/article/pii/S0960982217308138
20. Functional connectivity, structural connectivity, and inter-individual variability in Drosophila melanogaster -- Okuno T et al. -- eLife reviewed preprint / bioRxiv 2025.07.01.662601, 2025 -- https://elifesciences.org/reviewed-preprints/107990
21. NeuronBridge: an intuitive web application for neuronal morphology search across large data sets -- Clements J, Goina C, Hubbard PM, Kawase T, Olbris DJ, Otsuna H, Svirskas R, Rokicki K (from verifier memory) -- BMC Bioinformatics 25:114, 2024 -- https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05732-7
22. A split-GAL4 driver line resource for Drosophila neuron types -- Meissner GW et al. (FlyLight Project Team) -- eLife, 2025 -- https://elifesciences.org/articles/98405
23. Whole-brain annotation and multi-connectome cell typing of Drosophila -- Schlegel P et al. -- Nature, 2024 -- https://www.nature.com/articles/s41586-024-07686-5
24. NeuroPAL: A Multicolor Atlas for Whole-Brain Neuronal Identification in C. elegans -- Yemini E, Lin A, Nejatbakhsh A, Varol E, Sun R, Mena GE, Samuel ADT, Paninski L, Venkatachalam V, Hobert O -- Cell 184(1):272-288, 2021 -- https://www.sciencedirect.com/science/article/pii/S0092867420316822
25. Neural signal propagation atlas of Caenorhabditis elegans -- Randi F, Sharma AK, Dvali S, Leifer AM -- Nature, 2023 -- https://www.nature.com/articles/s41586-023-06683-4
26. Correlative light and electron microscopy reveals the fine circuit structure underlying evidence accumulation in larval zebrafish -- authors not verified -- bioRxiv (preprint), 2025 -- https://www.biorxiv.org/content/10.1101/2025.03.14.643363v1.full
27. Mating status-dependent dopaminergic modulation of auditory sensory neurons in Drosophila -- authors not seen -- venue unknown (PMC-indexed), 2025 (unconfirmed) -- https://pmc.ncbi.nlm.nih.gov/articles/PMC12358670/
28. Identifying the spark of desire in fruit flies -- Rockefeller University news office -- Rockefeller University news, 2021 -- https://www.rockefeller.edu/news/30711-drosophila-courtship-arousal-state/

### Data and tool links (supplied by the researcher; not re-confirmed)

- Flyception protocol -- https://link.springer.com/protocol/10.1007/978-1-0716-2321-3_12
- Pacheco 2021 auditory dataset -- https://datacommons.princeton.edu/discovery/catalog/doi-10-34770-gv6w-5351
- BIFROST + Functional Drosophila Atlas -- https://datadryad.org/dataset/doi:10.5061/dryad.8pk0p2nx1
- NeuronBridge -- https://neuronbridge.janelia.org ; R client -- https://natverse.org/neuronbridger/
- Descending-neuron split-GAL4 catalogue -- https://elifesciences.org/reviewed-preprints/107450
- Shiozaki 2024 data and code -- https://janelia.figshare.com/articles/journal_contribution/Data_and_code_related_to_Shiozaki_et_al_2024_Activity_of_nested_neural_circuits_drives_different_courtship_songs_in_i_Drosophila_i_/25041485
- Lillvis song dataset and SongExplorer models -- https://janelia.figshare.com/articles/dataset/Data_related_to_Lillvis_JL_et_al_2023_Nested_neural_circuits_generate_distinct_acoustic_signals_during_Drosophila_courtship/24707544
- FlyWire -- https://flywire.ai/
- TRIC stocks (BDSC) -- https://bdsc.indiana.edu/stocks/misc/tric.html
- NeuroPAL (Addgene) -- https://www.addgene.org/browse/article/28216912/
- C. elegans unified whole-brain datasets -- https://www.cell.com/cell-reports-methods/fulltext/S2667-2375(24)00354-0
- ZAPBench -- https://arxiv.org/pdf/2503.02618
- Unanesthetized adult fly imaging preparation (details not verified) -- https://pmc.ncbi.nlm.nih.gov/articles/PMC13044849/
