# Track 04 -- Seeing neurons light up: whole-brain activity imaging and linking activity to connectome identity

*Interspecies Communication Research Program · 2026-09-25 · 31 claims kept of 31 · live-search audit: confirmed 28, corrected 3, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** In round 1, one researcher with live web search gathered the claims. Two independent verifiers then checked them without web access, from their own knowledge of the literature: one checked source fidelity and the other acted as an adversarial skeptic. In round 2, a live auditor checked each claim against live web search results. A second opinion was reserved for claims the search contradicted, and none was contradicted. The session search cap (29 searches used) meant the audit ran in two passes, and the later pass checked only the claims the earlier pass had not reached. All 31 claims were live-checked: 28 confirmed and 3 corrected. [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding itself was not directly visible, or the claim was corrected or rested on a single verifier; [LOW] means not located or unconfirmed; [CONFLICT] means the checks disagree. No claim in this track is tagged [LOW] or [CONFLICT]. Where live search confirmed a source but not a specific number or result, the text says so.

## Bottom line

- **Identified fly neurons have been recorded lighting up on both sides of courtship.** Sender side: P1 in freely courting males [HIGH][1], the descending neurons pIP10 and pMP2, and the VNC neurons dPR1 (pulse song only) and TN1A (pulse and sine) [HIGH][3]. Receiver side: vpoEN and vpoDN in females hearing song playback [HIGH][9], and pC2 in both sexes [MED][8]. Activating pIP10 or pMP2 drives song [HIGH][3], vpoDN triggers vaginal plate opening [HIGH][9], and pC2 activation drives sex-specific behaviours [MED][8].
- **Almost all identity-resolved recordings come from genetically targeted cell types in head-fixed or tethered flies.** The stimuli were song playback, a moving dot or optogenetic drive. Flyception2 is the only recording here made during a real two-fly interaction, and it imaged the male, not the female [HIGH][1].
- **Whole-brain imaging finds song-tuned activity in most central-brain regions, in ROIs that are not assigned to cell types** [HIGH][6]. No claim here matches whole-brain activity to connectome cell types. Running and flailing modulate most neurons, and walking raises activity brain-wide, so communication signals must be separated from movement and arousal [HIGH][16][17].
- **The receiver's state changes its response to the same signal.** After mating, vpoDN song responses are attenuated while upstream vpoEN responses are not. pC1, which encodes mating status, is implicated, and 5-s pC1 photoactivation in mated females restored vpoDN song sensitivity and receptivity [HIGH][9]. pC1d/e activation produces a state lasting minutes [HIGH][10]. Mating state also gates dopaminergic modulation of auditory sensory neurons [MED][29]. A two-way exchange needs a readout of state as well as of the stimulus.
- **A route from "a neuron lit up" to "this is cell type X" exists, but it is coarse.** Imaging data are registered with BIFROST (under 10 µm) to an atlas aligned to the hemibrain and FlyWire [HIGH][19]. Candidate types get genetic drivers through NeuronBridge and 3,060 adult split-GAL4 lines [HIGH][23][24], and are confirmed by targeted re-imaging and optogenetics. No claim in this track describes an adult-fly identity label comparable to C. elegans NeuroPAL [HIGH][26], and the annotated whole-brain connectome is female while the sender circuits are male [HIGH][25].
- **Wiring is a partial guide to activity.** In the fly, resting-state functional connectivity tracks direct connectivity with regional exceptions [MED][21]; in C. elegans, measured signal propagation departs from anatomy-based predictions, partly through extrasynaptic signalling [HIGH][27].
- **Imaging speed has reached single song pulses, with computational help.** Light beads microscopy records the fly brain at 28 volumes/s (60 for the central brain alone) and recovered responses to single song pulses by temporal super-resolution [MED][7]. Round 1 could not confirm this paper; live search found it and showed these results.
- **Nothing here decodes or translates fly communication.** The best next projects are (1) a computational census that assigns candidate cell types to song-tuned ROIs in the Pacheco 2021 data and (2) song playback steered in closed loop by a female's vpoDN activity.

## What the evidence shows

### 1. Sender side: the courting male

**Arousal and pursuit.** In freely walking, socially interacting males, ratiometric imaging through a head window (Flyception2) showed fruitless-expressing P1 neurons active during courtship and inactive during copulation, while GABAergic mAL neurons stayed active during copulation [HIGH][1]. Live search showed this result directly. It is the only recording in this track made during a real two-animal interaction, and it comes from a single study.

In tethered males courting a moving dot in virtual reality, P1 activity tracks moment-to-moment pursuit intensity, and the gain of LC10a visual projection neurons is selectively raised during courtship [MED][2]. The live audit reached this paper only through a Rockefeller University news story [30]. The story confirms the venue (Nature, not Cell as the seed list said), the rig (a tethered male on an air-supported ball chasing a projected dot) and the description of P1 neurons as an arousal switch that reroutes visual information. The pursuit-tracking and LC10a results were not visible, hence MED. The same story reports that P1 neurons "light up" as the male begins running and wing-flapping toward a dot that mimics female motion [MED][30]; that exact wording was not visible in the live summary.

**Song production.** Calcium imaging of the ventral nerve cord during singing showed nested song-motor populations: dPR1 neurons are selectively active during pulse song, while TN1A neurons are active during both pulse and sine song [HIGH][3]. Live search showed the nesting directly (one population active in both songs, and an expanded population that includes it active in pulse song). The cell names come from the companion Lillvis et al. summary, which places TN1A in the smaller sine circuit and dPR1 in the expanded pulse circuit [4]. The imaging preparation and how song was elicited were not confirmed. Brain recordings showed the same nested activation in the two descending pathways needed for song (pIP10 and pMP2), and connectome analysis showed these pathways give structured input to VNC song neurons consistent with that pattern [HIGH][3]. Optogenetic activation of pIP10 induces both pulse and sine song, whereas pMP2 activation induces pulse but not sine song [HIGH][3]. The same paper also activated dPR1 and TN1A-2 during natural courtship.

Lillvis et al. (2024) built split-GAL4 lines for VNC song-circuit cell types and scored song automatically (reported as SongExplorer, which separates pulse from sine). With activation and silencing they showed that pulse and sine song come from nested neural circuits, with pulse song produced by the larger network [HIGH][4]. Live search stated the counts directly (58 lines, at least 40 cell types), so the round-1 hedge on them no longer applies; SongExplorer as the scoring tool was not visible. The tag matches Tracks 01, 05 and 06, whose audits saw the nested-pathway organisation. This study is a driver-line resource with causal tests and no imaging.

Two-photon imaging of TN1 thoracic interneurons (premotor to wing motor neurons) during optogenetic pIP10 drive found nearly half positively correlated with the stimulus and a smaller fraction anti-correlated, with alternating peaks that persisted after stimulation [MED][5]. These fractions were not visible in live search. Behaviourally, males sang simple one-mode trains far from the female and alternating sequences near her, and the live results name VNC mutual inhibition and rebound excitability as the circuit mechanism [MED][5]. The sender therefore adjusts the signal to where the receiver is.

### 2. Receiver side: hearing the song

**Brain-wide activity, not cell-typed.** Whole-central-brain volumetric imaging with cross-brain registration, in head-fixed males and females, found auditory activity in most central-brain regions, with most of it tuned to courtship-song features [HIGH][6]. Responses were stereotyped in early mechanosensory regions and more variable in higher regions, and this variability was largely independent of ongoing movement [HIGH][6]. Live search showed the first part directly; the second part was not visible in the snippets and agrees with round-1 recollection of the abstract. The ROIs are pan-neuronal, and "tuned to song features" is relative to the stimulus set used.

Light beads microscopy recorded brain-wide calcium signals in behaving, head-fixed adult flies at 28 volumes/s (60 volumes/s for the central brain alone). It revealed fast auditory responses that standard volumetric two-photon imaging misses, and temporal super-resolution recovered responses to single courtship-song pulses [MED][7]. Neither round-1 verifier knew the paper. Live search found it (Gauthey et al., Nature Communications 2026, from a 2025 bioRxiv preprint) and showed these results directly; the article number was not seen.

**Identified song detectors.** Dsx+ pC2 neurons (pC2l and pC2m) are tuned to several temporal features of pulse song, with similar tuning in males and females [MED][8]. This comes from two-photon imaging of pC2 cell bodies and of Dsx+ neurites in the lateral junction (LJ), a neuropil region rather than a cell type. Optogenetic pC2 activation drives sex-specific behaviours, including song production in males [MED][8]. The live audit adds two refinements. The activation experiments used a pC2l-specific driver, so "pC2l activation" is the more exact description, and the live result describes the male-female similarity as similar behavioural tuning to pulse song. A 2023 Current Biology item with the same title, probably a correction notice, has not been checked.

**Female acceptance pathway.** In virgin females, the female-specific descending neurons vpoDN, which trigger vaginal plate opening, showed strong calcium rises in soma and neurites during playback of male courtship song (GCaMP6s, two-photon). They receive excitatory input from song-tuned vpoEN auditory neurons and from pC1 [HIGH][9]. Live search showed the vaginal-plate role and the input pattern directly; the GCaMP6s detail was not visible. After mating, song responses of vpoDNs, but not of the upstream auditory vpoENs, are attenuated, which can explain why mated females are less receptive. pC1 neurons, which encode mating status and excite vpoDNs, are implicated as the source of this modulation [HIGH][9]. The paper itself states that the modulation is mediated by pC1, and 5-s pC1 photoactivation in mated females made vpoDNs more sensitive to song and restored vaginal plate opening and receptivity [9]. The venue is Nature, not Neuron.

**Persistent internal state.** In females, optogenetic activation of Dsx+ pC1 neurons (notably pC1d/e) produces a persistent internal state lasting minutes that changes receptivity, responses to song and aggression-like behaviour [HIGH][10]. pC1 and Fru+ aIPg neurons show persistent activity after pC1 activation, so this is recorded activity following causal drive rather than during natural song. EM wiring from a female volume (FAFB/FlyWire) shows strong recurrent pC1d/e-aIPg connections, proposed to prolong the activity [HIGH][10]. Later work separates the contributions of pC1d and pC1e [HIGH][11].

**Network organisation.** Baker et al. (2022) imaged and characterised 24 new auditory cell types in the AMMC, WED and VLP region (recorded activity). Using the FlyWire female-brain connectome, they mapped connections among these types and to known early and higher-order auditory neurons (wiring) [HIGH][12]. Neurons with different song-mode preferences are highly interconnected in a network without clear hierarchy, but each cell type's responses can be predicted from its inputs [HIGH][12]. Live search showed the 24 types, the FlyWire mapping, a continuum of song-mode preferences and the non-hierarchical network. The prediction-from-inputs result was not visible in this track's audit but was visible in Track 02's live audit (cell-type responses predictable from inputs).

**Dopamine at the auditory periphery.** In females, Johnston's organ auditory sensory neurons express three dopamine receptor types, and some receive direct synapses from dopaminergic neurons. Knocking down Dop1R2 reduces their sound responses in unmated but not mated females, and Dop1R2 in these neurons enhances unmated females' song-evoked copulation receptivity. This implicates Dop1R2-mediated dopaminergic modulation in mating-state-dependent auditory processing [MED][29]. Round 1 had only the title. Live search placed the paper in iScience (2025) and showed these results, though not its authors; an erratum exists.

### 3. Activity-history markers for freely behaving flies

These methods record which neurons were active over a defined window or over slow timescales, without moment-to-moment resolution.

- **HI-FISH** (HCR-3.0 in situ hybridization for the immediate-early gene Hr38) maps activated cells across the whole adult male brain. Double labelling showed activity of aggression-promoting classes, including male-specific P1a, during courtship and aggression, and opto-HI-FISH identified candidate downstream targets [HIGH][13]. Live search confirmed the authors and the application to P1a and aggression-promoting populations; the HCR-3.0/Hr38 specifics and the downstream-target result were not directly visible. As an in situ method on fixed brains, it gives one snapshot per animal.
- **CaMPARI** photoconverts green to red when high calcium coincides with about 405 nm light. It has been used to mark active neurons in several intact, freely moving adult flies at once during a stimulus-defined window. Its use for social or group behaviours such as courtship is proposed rather than shown in that study [MED][14].
- **TRIC**, a transcriptional reporter of intracellular calcium, monitors slow changes in activity. Examples include neuropeptide F neurons responding to sexual deprivation, and pars intercerebralis cells responding to food and arousal [HIGH][15]. Its slow integration makes it a reporter of state rather than of individual signals. The venue is Nature Neuroscience, not Neuron.

### 4. The movement and arousal confound

The seed list filed the locomotion studies below under communication. Here they serve as a warning.

- Light-field microscopy imaged the near-whole adult fly brain at up to 200 Hz with pan-neuronal GCaMP6 and found a global increase in activity when the fly walks compared with when it rests [HIGH][16]. Live search showed only the PubMed record, so the rate and the walking result rest on round-1 agreement.
- SCAPE imaging of a large volume of the adult fly brain, in head-fixed flies behaving spontaneously, showed that most neurons' activity correlated or anti-correlated with running and flailing over timescales from seconds to about a minute. Grooming elicited a weaker global response. Residual activity was high-dimensional and organised in small, spatially clustered groups of neurons [HIGH][17].
- Volumetric two-photon imaging of pan-neuronal GCaMP across the central brain of head-fixed walking flies, registered to a common atlas, found spatially clustered supervoxel-level signals selective for forward or angular velocity. The signals are not resolved to identified neurons [HIGH][18].

Communication claims therefore need controls matched for locomotion and arousal. Testing auditory variability against ongoing movement, as in [6], is one such control.

### 5. From "a neuron lit up" to "this is cell type X"

1. **Record** pan-neuronal GCaMP in a head-fixed fly, by two-photon [6][18], SCAPE [17], light-field [16] or light beads microscopy [7].
2. **Register** to the Functional Drosophila Atlas (FDA) with BIFROST, which registers in vivo multiphoton brains with under 10 µm precision across specimens and labs and aligns the hemibrain and FlyWire connectomes to the FDA [HIGH][19]. Live search showed only the PNAS record, so the precision figure and the alignment rest on round-1 agreement. Registration gives location; identity needs the steps below.
3. **List candidate types.** FlyWire annotation identified 8,453 cell types in the adult female brain: 3,643 previously proposed in the hemibrain and 4,581 new, mostly outside the hemibrain volume [HIGH][25]. The two parts sum to 8,224 rather than 8,453; the figures are given as the source states them. About one-third of hemibrain-proposed types could not be reliably re-identified [25], which limits any candidate list built on hemibrain types. Ranking candidates by morphology, tuning and connectivity is proposed here (project 1) and untested.
4. **Find drivers.** NeuronBridge (neuronbridge.janelia.org) is a web application that matches light-microscopy images of GAL4 and split-GAL4 lines (FlyLight) to EM-reconstructed neurons (FlyEM connectomes) by morphology [HIGH][23]. Its matches are candidates. A split-GAL4 resource provides 3,060 lines targeting cell types in the adult CNS and 1,373 lines for third-instar larvae, from screening over 77,000 split-hemidriver combinations, related to EM connectomes through NeuronBridge and other search tools [HIGH][24]. The NeuronBridge link for this resource was not visible in live search.
5. **Re-image and perturb** the targeted type. This is how pC2, vpoDN, dPR1 and TN1A were characterised [3][8][9].

**How well does wiring predict activity?** Round 1 attributed one finding to the wrong paper, and the live audit corrected it [MED][20][21]. The finding that resting-state functional connectivity relates strongly to direct region-to-region structural connectivity, with the match varying across the brain and the mushroom body more dependent on indirect connections, comes from Turner, Mann & Clandinin 2021, which used the hemibrain connectome [21]. Mann, Gallen & Clandinin 2017, using pre-hemibrain anatomy, reported that resting-state functional connectivity from whole-brain calcium imaging was strongly associated with the strength of both direct and indirect anatomical pathways, and that some regions showed considerably higher functional connectivity than their direct anatomical connections predict [20]. A 2025 reviewed preprint applied fMRI methods to fly whole-brain calcium imaging together with the FlyEM and FlyWire connectomes. The correlation between functional and structural connectivity fell linearly as the number of regions increased, the same trend as in humans, and neurons with unsegregated pre- and postsynaptic sites showed higher correlation between the two [MED][22]. Live search showed the scaling result and a new segregation index under which many neurons have unsegregated synapses; the higher correlation for those neurons was not visible. In C. elegans, optogenetic activation plus whole-brain calcium imaging of 23,433 neuron pairs in the head showed that measured signal propagation differs from anatomy-based predictions, and mutant experiments showed that extrasynaptic signalling, including dense-core-vesicle-dependent signalling where no wired connection exists, contributes to the difference [HIGH][27].

**Gaps.**
- *No identity label in adult flies.* In C. elegans, the NeuroPAL multicolour transgene gives every neuron a stereotyped colour map that resolves all neuronal identities while leaving green channels free for GCaMP. This enabled brain-wide, identity-resolved recordings of responses to chemosensory cues [HIGH][26]. No claim in this track describes an adult-fly equivalent.
- *No same-animal imaging then EM in adult flies.* In larval zebrafish, a functionally imaged EM (CLEM) dataset of the anterior hindbrain identified morphological cell types whose activity patterns define distinct computational roles in visual evidence accumulation, with bilateral inhibition, disinhibition and recurrent connectivity as key motifs. A separate photoconversion-based pipeline labelled and reconstructed functionally characterised neurons across other animals and trained a classifier that predicts functional identity from morphology alone [MED][28]. Round 1 had merged these two components; the same-animal reconstruction comes from the CLEM dataset.
- *Resolution.* Registration error under 10 µm [19] is coarse relative to individual cell bodies when thousands of types are candidates [25].
- *Sex mismatch.* The FlyWire annotation is of a female brain [HIGH][25], but the sender circuits are male. No claim in this track links male brain song-circuit activity to cell types in a male brain connectome; the VNC connectome analysis in [3] is the closest.

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| P1 (incl. P1a) | Courtship arousal; active in courtship, inactive at copulation; P1a Hr38+ during courtship and aggression; tracks pursuit in VR | M | Recorded activity (freely moving; tethered); Hr38 snapshot | HIGH (1, 13); MED (2, 30) | 1, 2, 13, 30 |
| mAL | GABAergic; active during copulation | M | Recorded activity | HIGH | 1 |
| LC10a | Visual gain raised during courtship | M | Recorded activity | MED | 2 |
| pIP10 | Descending; nested activity; activation drives pulse and sine | M | Recorded activity + causal | HIGH | 3 |
| pMP2 | Descending; nested activity; activation drives pulse only | M | Recorded activity + causal | HIGH | 3 |
| dPR1 | VNC; active in pulse song only | M | Recorded activity | HIGH | 3 |
| TN1A | VNC; active in pulse and sine | M | Recorded activity | HIGH | 3 |
| VNC song-circuit types (≥40) | Nested pulse and sine circuits | M | Driver lines + activation and silencing | HIGH | 4 |
| TN1 population | Correlated, anti-correlated or alternating under pIP10 drive | M | Recorded under optogenetic drive | MED | 5 |
| pC2l / pC2m | Pulse-song feature detectors in both sexes; activation drives sex-specific behaviour | M, F | Recorded activity + causal | MED | 8 |
| vpoEN | Song-tuned excitatory input to vpoDN; song response unchanged by mating | F | Recorded activity | HIGH | 9 |
| vpoDN | Triggers vaginal plate opening; song response attenuated after mating | F | Recorded activity + causal | HIGH | 9 |
| pC1 (female) | Encodes mating status; excites vpoDN; photoactivation restores vpoDN song sensitivity in mated females | F | Recorded activity + causal | HIGH | 9 |
| pC1d / pC1e, aIPg | Persistent state lasting minutes; recurrent loop | F | Causal + recorded; loop is EM wiring | HIGH | 10, 11 |
| 24 auditory cell types (AMMC/WED/VLP) | Song-mode preferences; non-hierarchical network | Female connectome | Recorded activity + wiring | HIGH | 12 |
| Johnston's organ neurons + dopaminergic input | Dop1R2 modulation of sound responses and receptivity in unmated females | F | Recorded activity + knockdown | MED | 29 |
| Pan-neuronal song ROIs | Auditory activity in most central-brain regions | M, F | Recorded, not cell-typed | HIGH | 6 |
| NPF neurons; pars intercerebralis cells | Slow changes with sexual deprivation; with food and arousal | Not stated | Slow activity history (TRIC) | HIGH | 15 |

## Why this matters for two-way communication with animals

- **Receiver readouts sit one step from the reply.** vpoDN responds to song and triggers the acceptance posture [HIGH][9], so it measures "signal received and weighted" close to the behavioural answer. pC2 gives a song-feature readout in both sexes [MED][8].
- **Sender readouts sit one step from the signal.** pIP10/pMP2 and dPR1/TN1A activity tracks which song mode is produced [HIGH][3]. Whether this activity predicts the next mode before the wing moves is untested (project 3).
- **State changes the meaning of a signal.** The same song drives vpoDN strongly in virgins and weakly after mating, and pC1 photoactivation reverses the difference [HIGH][9]. pC1d/e activation shifts behaviour for minutes [HIGH][10], and mating state gates dopaminergic modulation as early as the auditory sensory neurons [MED][29]. Interactive playback that ignores the receiver's state will get inconsistent responses to identical stimuli.
- **Senders adapt to the receiver.** Song structure changes with distance to the female [MED][5], and fixed playback removes that part of the exchange.
- **The timing budget is tight.** Brain-wide imaging at 28 volumes/s resolved single song pulses only with temporal super-resolution [MED][7]. Closed loop at the level of song bouts is realistic now; closed loop pulse by pulse has not been shown.
- **Most brain-wide "lighting up" is not message content.** Walking, running and flailing dominate brain-wide activity [HIGH][16][17]. The same trap applies to population readouts in any species.
- **A synapse map is an incomplete guide to the readout.** Structure predicts functional connectivity only in part [MED][21][22], and signalling that does not use wired connections is absent from a synapse map [HIGH][27].
- **The method transfers to other animals; the neurons do not.** Identity-resolved whole-brain imaging exists in C. elegans [HIGH][26], and same-animal imaging plus EM exists in larval zebrafish [MED][28]. This track contains nothing on mammals.

## Open questions

1. Which FlyWire or male-connectome types account for the song-tuned ROIs in [6]?
2. Can vpoDN, pC2 or pC1 be recorded in a freely moving female during natural courtship? The only free-behaviour recording [1] is from males.
3. Can adult flies get identity labels without sparse drivers (a NeuroPAL analogue, barcodes, or EM after imaging as in larval zebrafish [28])?
4. Which controls best separate communication content from movement and arousal [16][17][18]?
5. Can male brain song-circuit activity be assigned to cell types in a male connectome? Beyond the VNC wiring analysis in [3], no claim covers this.
6. How do neuromodulators change which neurons respond to the same signal? The Dop1R2 result [29] and C. elegans extrasynaptic signalling [27] point to this. GRAB sensors and a fly perturbation atlas (track 05) are not covered here.
7. Are jGCaMP8 or voltage indicators needed so that indicator kinetics do not blur pulse-level coding?
8. Can the early auditory relays (Johnston's organ, AMMC, WED, vPN1) be imaged during playback and linked to FlyWire identities? [12] and [29] cover parts of this.
9. Do singing males suppress their own auditory neurons? No claim covers this.
10. What lights up in males receiving female signals such as ovipositor extrusion or rejection kicks (track 03)?
11. Can brain and VNC be imaged together? Is larval Drosophila, for which [24] provides 1,373 split-GAL4 lines, a better identity-resolved test bed?
12. Most identity-resolved courtship results come from three groups (Murthy, Dickson/Stern, Ruta). Have they been independently replicated?

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| **1. Song-responsive ROI to FlyWire cell-type census** | Most song-tuned ROIs in the Pacheco 2021 data narrow to ≤5 FlyWire candidate types | Register ROIs to FDA/FlyWire with BIFROST; rank overlapping neurons by morphology, distance from Johnston's organ input and known tuning; flag hemibrain-derived types that FlyWire could not re-identify; wet-lab partners validate the top 10 with NeuronBridge-selected split-GAL4 lines [6][12][19][23][24][25] | Computational; can start once data access is confirmed | Obtain the Pacheco 2021 dataset and BIFROST templates; reproduce ROI placement in FDA space |
| **2. Neural "yes-meter" for closed-loop song playback** | Playback adapted in real time to a virgin female's vpoDN or pC1 activity raises receptivity-linked responses faster than fixed playback | Image vpoDN (split-GAL4, GCaMP); a controller picks the next bout type and interpulse interval; compare with fixed and random schedules; repeat in mated females with and without pC1 photoactivation [7][9] | Wet lab, months | Measure vpoDN latency and reliability to single song bouts |
| **3. Decoding a singer's upcoming song mode** | The nested pIP10/pMP2 code predicts pulse vs sine tens of ms before wing movement | Image descending neurons and dPR1/TN1A with audio and automated song labels; train a decoder; relate it to the VNC connectome analysis in [3]; test with optogenetics [3][4][5] | Wet lab, months (first step computational) | Re-analyse the Shiozaki 2024 imaging data for how early the modes separate |
| **4. Snapshot atlas of a full courtship exchange** | HI-FISH or CaMPARI maps of freely courting pairs reveal sender and receiver populations beyond P1, pC1 and pC2 | Conditions: song only, acceptance, rejection; fix or photoconvert at defined events; register to FlyWire (female) and a male connectome; compare with flies that walk but do not court [13][14][16][17][19][25] | Wet lab, months | Pilot Hr38 labelling in females after song vs noise |
| **5. Adult-fly identity barcode ("fly NeuroPAL")** | A multicolour landmark transgene lets pan-neuronal activity be assigned to single connectome types | Sparse landmark drivers with nuclear fluorophores that do not overlap GCaMP; structural stack after imaging; probabilistic matching to connectome soma positions [24][25][26] | Wet lab, years | Model how many landmarks, placed where, give a target assignment accuracy |
| **6. Freely moving female imaging during real courtship** | Female pC2/vpoDN activity during natural courtship predicts acceptance better than song statistics alone | Adapt Flyception2 to females with GCaMP in vpoDN or pC2, plus multi-microphone audio and pose tracking; compare with head-fixed playback [1][8][9] | Wet lab, years | Validate a stable vpoDN soma signal in a tethered, walking female |

## Leads needing confirmation

- **Details not visible in live search.** For these claims the source was confirmed but a specific detail rests on round-1 agreement or recollection: P1 pursuit tracking and LC10a gain [2]; the imaging preparation and song elicitation for dPR1/TN1A [3]; SongExplorer as the scoring tool [4]; the TN1 correlated and anti-correlated fractions [5]; stereotyped-versus-variable responses and their independence from movement [6]; the light beads article number [7]; the GCaMP6s soma and neurite detail [9]; HCR-3.0 specifics and opto-HI-FISH targets [13]; "proposed rather than shown" for social use of CaMPARI [14]; the 200 Hz rate and walking result [16]; the SCAPE article number and author list [17]; BIFROST precision and alignment [19]; higher correlation for unsegregated neurons [22]; the NeuronBridge link for the split-GAL4 resource [24]; NeuroPAL's chemosensory application [26]; the "light up" wording in the news story [30].
- **pC2 correction notice [8]:** A 2023 Current Biology item with the same title (cell.com identifier S0960-9822(23)01049-7) should be checked.
- **Author lists:** For [9], the full author list is confirmed (Wang K first). For [10], [12] and [23], names beyond the first three are from verifier memory; for [17], the full list is. No authors were seen for [28] or [29].
- **Turner et al. 2021 [21]:** Volume and pages are from memory.
- **Rockefeller news [30]:** A lay account of [2]; its headline ("spark of desire") is anthropomorphic. Use it only for outreach wording.
- **Round-1 data and tool links:** These were supplied by the round-1 researcher and are outside the audited ledger. They are listed by name under Sources, without URLs.

## Claims dropped in verification

No claim was dropped in either round; the audited ledger's dropped list is empty. These parts were removed, narrowed or corrected:

- pC2 imaging: the seed claim listed "LJ" as a neuron. It is a neuropil region (the lateral junction), and the claim now says so.
- vpoDN mating modulation: round 1 softened "mediated by pC1" to "implicated". The live audit found that the paper itself says "mediated by pC1" and reports a pC1 photoactivation rescue. The wording "implicated" is kept as the cautious form, and the claim is now HIGH.
- Baker et al.: "connectivity among all known auditory neurons" was narrowed to the 24 new types and their links to known auditory neurons, with the connectivity labelled as wiring.
- SCAPE study: a reference to egg-laying circuit neurons was removed as unconfirmed, not as false.
- Walking imaging study: "neurons with similar selectivity cluster" was removed; supervoxel data cannot show this.
- Lillvis et al.: round 1 marked the line and cell-type counts unchecked and tagged the claim LOW. The live audit found the counts stated directly and set the claim to MED, with SongExplorer the remaining unconfirmed detail. A cross-track consistency check raised it to HIGH to match Tracks 01, 05 and 06, since the nested-pathway finding and the counts were visible in live results.
- CaMPARI: social or group use was downgraded to proposed.
- Function-structure scaling preprint: round 1 questioned the evidence label "model prediction", since the work compares measured imaging data with connectomes; the audited ledger keeps that label.
- Resting-state connectivity (round 2): the finding about direct region-to-region connectivity and the mushroom body was reassigned from Mann et al. 2017 to Turner, Mann & Clandinin 2021, and the Mann 2017 statement was narrowed to that paper's own finding.
- Zebrafish CLEM (round 2): the same-animal CLEM dataset and the separate photoconversion pipeline, which round 1 had merged, are now described as two components.
- Dopamine and auditory neurons (round 2): the venue was corrected from unknown to iScience 2025, the sex was confirmed as female, and the findings are now stated.
- Seed venues corrected: [2] and [9] are Nature; [15] is Nature Neuroscience. Seed scope corrected: [17] and [18] concern locomotion, not communication.
- Cross-track consistency check: the author list of [9] was corrected from that of the 2020 egg-laying paper to Wang K first; TN1 neurons are described as thoracic interneurons premotor to the wing motor neurons, matching Track 01; and URLs for [2] and [11] were taken from Tracks 01, 03 and 06.

## Sources

1. Imaging brain activity during complex social behaviors in Drosophila with Flyception2 -- Grover D, Katsuki T, Li J, Dawkins TJ, Greenspan RJ -- Nature Communications, 2020 -- https://www.nature.com/articles/s41467-020-14487-7
2. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature, 2021 -- https://www.nature.com/articles/s41586-021-03714-w (URL as cited in Tracks 01, 03 and 06; this track's live audit reached the paper only through the news story [30])
3. Activity of nested neural circuits drives different courtship songs in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- Nature Neuroscience, 2024 -- https://www.nature.com/articles/s41593-024-01738-9
4. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology 34(4):808-824.e6 (published online 30 Jan 2024), 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00015-0
5. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA, Pacheco DA, Aragon MJ, Ireland EC, Li X, Thieringer K, Pang R, Murthy M -- Nature 622:794-801, 2023 -- https://www.nature.com/articles/s41586-023-06632-1
6. Auditory activity is diverse and widespread throughout the central brain of Drosophila -- Pacheco DA, Thiberge SY, Pnevmatikakis E, Murthy M -- Nature Neuroscience 24(1):93-104, 2021 -- https://www.nature.com/articles/s41593-020-00743-y
7. High-speed whole-brain imaging in Drosophila -- Gauthey et al. -- Nature Communications 17:5810 (article number not seen in live search; from bioRxiv 2025.06.18.660371), 2026 -- https://www.nature.com/articles/s41467-026-72437-1
8. Shared Song Detector Neurons in Drosophila Male and Female Brains Drive Sex-Specific Behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29(19):3200-3215, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219310243
9. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Nature 589(7843):577-581, 2021 (online 25 Nov 2020; doi:10.1038/s41586-020-2972-7) -- https://www.nature.com/articles/s41586-020-2972-7
10. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco DA, Encarnacion-Rivera L, et al. (Murthy lab) -- eLife 9:e59502, 2020 -- https://elifesciences.org/articles/59502
11. Cell type-specific contributions to a persistent aggressive internal state in female Drosophila -- authors not given in the ledger -- eLife (article 88598), year not given in the ledger -- https://elifesciences.org/articles/88598
12. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, et al. (Murthy lab) -- Current Biology 32(15):3317-3333.e7 (published 8 Aug 2022), 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2
13. Whole-brain in situ mapping of neuronal activation in Drosophila during social behaviors and optogenetic stimulation -- Watanabe K, Chiu H, Anderson DJ -- eLife 12:RP92380 (published 28 Nov 2024; bioRxiv 10.1101/2023.09.28.560045), 2024 -- https://elifesciences.org/articles/92380
14. The Photoconvertible Fluorescent Probe, CaMPARI, Labels Active Neurons in Freely-Moving Intact Adult Fruit Flies -- Edwards KA, Hoppa MB, Bosco G -- Frontiers in Neural Circuits 14:22, 2020 -- https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2020.00022/full
15. A transcriptional reporter of intracellular Ca2+ in Drosophila -- Gao XJ, Riabinina O, Li J, Potter CJ, Clandinin TR, Luo L -- Nature Neuroscience 18(6):917-925, 2015 -- https://www.nature.com/articles/nn.4016
16. Fast near-whole-brain imaging in adult Drosophila during responses to stimuli and behavior -- Aimon S, Katsuki T, Jia T, Grosenick L, Broxton M, Deisseroth K, Sejnowski TJ, Greenspan RJ -- PLoS Biology 17(2):e2006732, 2019 -- https://pubmed.ncbi.nlm.nih.gov/30768592/
17. The spatial and temporal structure of neural activity across the fly brain -- Schaffer ES, Mishra N, Whiteway MR, Li W, Vancura MB, Freedman J, Patel KB, Voleti V, Paninski L, Hillman EMC, Abbott LF, Axel R (list from verifier memory) -- Nature Communications 14:5572 (article number from verifier memory), 2023 -- https://www.nature.com/articles/s41467-023-41261-2
18. Mapping the neural dynamics of locomotion across the Drosophila brain -- Brezovec BE, Berger AB, Hao YA, Chen F, Druckmann S, Clandinin TR -- Current Biology 34(4):710-726.e4, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(23)01763-3
19. BIFROST: A method for registering diverse imaging datasets of the Drosophila brain -- Brezovec BE, Berger AB, Hao YA, Lin A, Ahmed OM, Pacheco DA, Thiberge SY, Murthy M, Clandinin TR -- PNAS 121(47), 2024 -- https://www.pnas.org/doi/abs/10.1073/pnas.2322687121
20. Whole-brain calcium imaging reveals an intrinsic functional network in Drosophila -- Mann K, Gallen CL, Clandinin TR -- Current Biology 27:2389-2396, 2017 -- https://pubmed.ncbi.nlm.nih.gov/28756955/
21. The connectome predicts resting-state functional connectivity across the Drosophila brain -- Turner MH, Mann K, Clandinin TR -- Current Biology 31(11):2386-2394.e3 (volume and pages from memory; bioRxiv 10.1101/2020.12.11.422105), 2021 -- https://www.sciencedirect.com/science/article/pii/S0960982221003432
22. Functional connectivity, structural connectivity, and inter-individual variability in Drosophila melanogaster -- Okuno T, Woodward A, Okano H, Hata J -- eLife reviewed preprint 107990 / bioRxiv 10.1101/2025.07.01.662601 (v2), 2025 -- https://elifesciences.org/reviewed-preprints/107990
23. NeuronBridge: an intuitive web application for neuronal morphology search across large data sets -- Clements J, Goina C, Hubbard PM, et al. -- BMC Bioinformatics 25:114, 2024 -- https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05732-7
24. A split-GAL4 driver line resource for Drosophila neuron types -- Meissner GW et al. (FlyLight Project Team) -- eLife (reviewed preprint 2024; version of record 2025), 2025 -- https://elifesciences.org/articles/98405
25. Whole-brain annotation and multi-connectome cell typing of Drosophila -- Schlegel P et al. -- Nature 634:139 (per ADS), 2024 -- https://www.nature.com/articles/s41586-024-07686-5
26. NeuroPAL: A Multicolor Atlas for Whole-Brain Neuronal Identification in C. elegans -- Yemini E, Lin A, Nejatbakhsh A, Varol E, Sun R, Mena GE, Samuel ADT, Paninski L, Venkatachalam V, Hobert O -- Cell 184(1):272-288.e11, 2021 -- https://www.sciencedirect.com/science/article/pii/S0092867420316822
27. Neural signal propagation atlas of Caenorhabditis elegans -- Randi F, Sharma AK, Dvali S, Leifer AM -- Nature 623:406-414, 2023 -- https://www.nature.com/articles/s41586-023-06683-4
28. Correlative light and electron microscopy reveals the fine circuit structure underlying evidence accumulation in larval zebrafish -- Bahl lab (full author list not seen) -- bioRxiv preprint (v2; doi 10.1101/2025.03.14.643363), 2025 -- https://www.biorxiv.org/content/10.1101/2025.03.14.643363v2
29. Mating status-dependent dopaminergic modulation of auditory sensory neurons in Drosophila -- authors not seen -- iScience (published about 29 Jul 2025; erratum exists), 2025 -- https://www.cell.com/iscience/fulltext/S2589-0042(25)01493-2
30. Identifying the spark of desire in fruit flies -- Rockefeller University news office -- Rockefeller University news, 2021 -- https://www.rockefeller.edu/news/30711-drosophila-courtship-arousal-state/

### Data and tool resources named in round 1 (outside the audited ledger; URLs omitted)

Flyception protocol (Springer protocol chapter); Pacheco 2021 auditory dataset (Princeton Data Commons); BIFROST and Functional Drosophila Atlas templates (Dryad); NeuronBridge (neuronbridge.janelia.org, confirmed in the audit) and its R client; a descending-neuron split-GAL4 catalogue (eLife reviewed preprint); Shiozaki 2024 data and code (Janelia figshare); Lillvis song dataset and SongExplorer models (Janelia figshare); FlyWire; TRIC stocks (BDSC); NeuroPAL plasmids (Addgene); C. elegans unified whole-brain datasets (Cell Reports Methods); ZAPBench (arXiv); an unanesthetized adult-fly imaging preparation (PMC, details not verified).

## Verification ledger

| # | Claim (at most 15 words) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | Flyception2: P1 active in courtship, inactive at copulation; mAL active at copulation | HIGH | confirmed | 1 |
| 2 | Tethered male in VR: P1 tracks pursuit intensity; LC10a gain raised in courtship | MED | confirmed | 2 |
| 3 | VNC imaging: dPR1 active in pulse song only; TN1A in pulse and sine | HIGH | confirmed | 3 |
| 4 | pIP10 and pMP2 show nested activation; connectome shows structured input to VNC | HIGH | confirmed | 3 |
| 5 | pIP10 activation induces pulse and sine song; pMP2 induces pulse only | HIGH | confirmed | 3 |
| 6 | Split-GAL4 lines for VNC song types; pulse and sine from nested circuits | HIGH | confirmed | 4 |
| 7 | TN1 neurons correlated or alternating under pIP10 drive; song pattern depends on distance | MED | confirmed | 5 |
| 8 | Auditory activity in most central-brain regions, mostly song-tuned; variability independent of movement | HIGH | confirmed | 6 |
| 9 | Light beads: 28 volumes/s brain-wide; single song-pulse responses via super-resolution | MED | confirmed | 7 |
| 10 | pC2l/pC2m tuned to pulse-song features in both sexes; activation drives behaviour | MED | confirmed | 8 |
| 11 | vpoDN calcium rises to song in virgins; excitatory input from vpoEN and pC1 | HIGH | confirmed | 9 |
| 12 | After mating vpoDN, not vpoEN, song responses attenuated; pC1 implicated | HIGH | confirmed | 9 |
| 13 | pC1d/e activation gives minutes-long state; persistent pC1/aIPg activity; recurrent wiring | HIGH | confirmed | 10, 11 |
| 14 | 24 new auditory cell types imaged and wired in FlyWire; non-hierarchical network | HIGH | confirmed | 12 |
| 15 | HI-FISH (Hr38) maps activated cells brain-wide; P1a active in courtship and aggression | HIGH | confirmed | 13 |
| 16 | CaMPARI marks active neurons in several freely moving flies; courtship use proposed | MED | confirmed | 14 |
| 17 | TRIC reports slow activity changes: NPF with sexual deprivation, PI with food | HIGH | confirmed | 15 |
| 18 | Light-field imaging at up to 200 Hz: global activity rise during walking | HIGH | confirmed | 16 |
| 19 | SCAPE: most neurons track running and flailing; residual activity in small clusters | HIGH | confirmed | 17 |
| 20 | Walking-fly imaging: clustered supervoxels selective for forward or angular velocity | HIGH | confirmed | 18 |
| 21 | BIFROST registers to FDA under 10 µm; aligns hemibrain and FlyWire | HIGH | confirmed | 19 |
| 22 | Direct-connectivity and mushroom-body finding is Turner 2021; Mann 2017 narrowed | MED | corrected | 20, 21 |
| 23 | FC-SC correlation falls linearly with region count; unsegregated neurons correlate more | MED | confirmed | 22 |
| 24 | NeuronBridge matches GAL4/split-GAL4 images to EM neurons by morphology | HIGH | confirmed | 23 |
| 25 | Split-GAL4 resource: 3,060 adult CNS lines and 1,373 larval lines | HIGH | confirmed | 24 |
| 26 | FlyWire: 8,453 cell types in female brain; 3,643 hemibrain, 4,581 new | HIGH | confirmed | 25 |
| 27 | NeuroPAL resolves all C. elegans neuron identities, leaving green free for GCaMP | HIGH | confirmed | 26 |
| 28 | C. elegans, 23,433 pairs: propagation departs from anatomy; extrasynaptic signalling contributes | HIGH | confirmed | 27 |
| 29 | Zebrafish hindbrain CLEM cell types for evidence accumulation; separate photoconversion classifier pipeline | MED | corrected | 28 |
| 30 | Dop1R2 in Johnston's organ neurons modulates sound responses in unmated females | MED | corrected | 29 |
| 31 | Rockefeller news: P1 neurons "light up" as tethered male pursues dot | MED | confirmed | 30 |
