# Track 01 -- Sender circuits: how a male fly decides to sing and patterns its song

*Interspecies Communication Research Program · 2026-09-25 · 30 claims kept of 30 · live-search audit: confirmed 28, corrected 2, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** Round 1: one researcher with live web search assembled the claims, and two independent verifiers, one checking source fidelity and one acting as an adversarial skeptic, checked each claim from their own knowledge without web access. Round 2: a live auditor checked every claim against live web search results, with a second opinion reserved for contradicted claims; no claim was contradicted (0 of 30), so no second opinion was needed. The audit ran in 2 passes because of the session search cap, and the later pass checked only the claims the earlier pass had not reached. [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search; [MED] means the source was confirmed but the finding itself was not directly visible, or the claim was corrected or rested on a single verifier; [LOW] means not located or unconfirmed; [CONFLICT] means the checks disagree. This version holds 16 [HIGH] and 14 [MED] claims and no [LOW] or [CONFLICT] claims; untagged sentences are synthesis or scope notes.

## Bottom line

- Song neurons have been recorded during singing, but only for a small part of the sender map. Calcium imaging of the nerve cord in tethered singing males shows a population active in both pulse and sine song nested inside a larger pulse-song population; dPR1 is active only in pulse song and TN1A in both [HIGH][1].
- The rest of the sender map rests on causal manipulation and wiring. P1 and pIP10 mediate the decision to sing [HIGH][4], and pC2 drives pulse song through pIP10 while recruiting P1a for complex bouts [HIGH][14]. Of the two descending neurons, pIP10 drives pulse and sine song and pMP2 drives pulse only [HIGH][1]; the preprint describes one pathway as setting when to sing and the other which song [HIGH][2]. Downstream, eight fruitless/doublesex nerve-cord cell types form two nested feed-forward pathways onto wing motor neurons [HIGH][3].
- Male song is already a closed loop with the female. Males choose among fast pulse, slow pulse and sine moment by moment, using her distance and movement among other cues [HIGH][17] [MED][16]. Three model-inferred internal states change how those cues map onto song, and activating a neuron pair earlier described as song command neurons (likely pIP10) switches between them [HIGH][18].
- The nearest existing "conversation" experiment is now confirmed as a published study. In a 2026 Current Biology paper, closed-loop optogenetics made the male's song trigger backward walking in the female, and trained males then changed the contexts in which they sang to new females, which the authors call usage learning of an innate song. The changes were retained only at first and then gradually reverted [MED][19].
- The 2026 male whole-CNS connectome (about 166,700 neurons, one animal, wiring only) covers brain and nerve cord, so the brain-to-wing-motor chain can be traced in one animal [MED][20]. Sex-specific and dimorphic types sit mainly in higher brain centres while sensory and motor neurons are largely shared [MED][20], consistent with the causal result that fruitless nerve-cord neurons produce sound in both sexes but authentic song only in males [HIGH][8].
- Four gaps remain at the cellular level: how the pulse rhythm is generated, which cells select fast versus slow pulse, how female feedback reaches the descending neurons in real time, and which neurons produce aggression song and female copulation song. None of the audited sources identifies these cells [3][17][18][24][27].
- Recommended start: a connectome-constrained song-network model fitted to published imaging and manipulation data (can start now), then closed-loop experiments in which a machine "replies" to a singing male, building on the confirmed 2026 precedent.

## What the evidence shows

### Recorded activity: what has actually been seen during song

Two-photon calcium imaging of the ventral nerve cord (VNC) in tethered, singing males shows one population active during both pulse and sine song and a larger population, which includes the first, active during pulse song. dPR1 neurons are active only during pulse song; TN1A neurons are active during both [HIGH][1]. Live search results confirmed the nesting and the authors' statement that the nested patterns of dPR1 and TN1A are a general feature of the VNC song circuit; the exact dPR1/TN1A split rests on round-1 agreement. TN1A is needed specifically for sine song [HIGH][6], so its activity during pulse song shows that recorded activity and necessity do not map one to one.

Brain recordings show the same nested pattern in the two descending pathways needed for singing. The authors recorded pIP10 calcium together with song sound (the signal combines left and right pIP10), and connectome analysis shows that the two pathways feed structured input to VNC neurons, matching the activation patterns [MED][1]. Live results confirmed the pathway-level pattern: pIP10 is active whatever the song type, and the pathway that includes pMP2 is active only during pulse song. The pooled-signal and connectome details were not visible, and the connectome part is wiring evidence.

The 2022 preprint of this work described two descending pathways with different roles: "one defines when to sing and the other specifies what song to sing." pIP10 is active for both songs, so it acts as a general "sing" signal, and pMP2 is pulse-selective. The published 2024 paper keeps this idea of distinct descending signals and calls the VNC activity pattern "nested" instead of "combinatorial" [HIGH][2][1]. The live audit found the "when versus what" wording in the preprint text, which round 1 had left unverified.

Other activity recordings on the sender side:

- **Wing muscles, not neurons:** calcium imaging of wing muscles during song shows the direct control muscles i1, hg1-4 and b3 all strongly active during pulse song [HIGH][7].
- **P1:** in tethered males courting a fictive female (a dot target in virtual reality), P1 neurons became strongly active at courtship onset, stayed elevated through a courtship bout, and returned to baseline whenever the male paused pursuit [MED][12]. The activity is described relative to pursuit, not to song. The live audit saw only the published paper, in an incidental result.
- **pC2l as a listener:** pC2l neurons in the central brain respond to both sound and visual cues [HIGH][13]. Live results confirmed that pC2 neurons are tuned to temporal features of song, with similar tuning in both sexes.

The neuronal recordings that state their preparation used tethered males [1][12], and none is matched to cell IDs in the male CNS connectome [20].

### Deciding to sing: brain neurons

The 2011 framework identified five classes of fruitless neurons that trigger or make up the song. In the brain, P1 and the descending neuron pIP10 mediate the decision to sing and acting on it. In the thorax, dPR1, vPR6 and vMS11 were proposed as parts of a pattern generator that times and shapes song pulses. P1, pIP10 and dPR1 are male-specific [HIGH][4]. Later work revised this picture: P1 is now treated as male-specific subtypes within the doublesex-expressing pC1 population [MED][21], pC2 drives song upstream of pIP10 [HIGH][14], and the VNC circuit is described as an eight-type network [HIGH][3].

Optogenetic or thermogenetic activation of P1 neurons in solitary males quickly triggers courtship song that can persist for minutes after stimulation ends [HIGH][9][10]. P1 activation also drives a persistent state that increases inter-male aggression [HIGH][11]. The live audit found the 2015 eLife paper stating both effects and citing the two 2014 studies as primary sources for persistent song.

The Janelia release on the male connectome highlights male pC1 neurons, a diverse doublesex-expressing population (some also fruitless-expressing) that includes the male-specific P1 subtypes, as promoting courtship song and aggression, based on earlier causal studies. pC1 neurons also exist in females, with different subtypes and roles, and the connectome itself is wiring only [MED][21]. The live search summary merged several pages, so this wording cannot be pinned to the release rather than the Cell paper [20].

In males, activating a subset of pC2l neurons triggers pulse song at once, followed by sine song after activation ends, and pC2l is needed for normal singing. In females, the same type is needed for normal responses to male song [HIGH][13]. pC2 neurons drive pulse song directly via pIP10, which gives simple song from brief input. They also recruit persistent P1a activity and disinhibit a VNC rebound circuit, which enables complex bouts [HIGH][14]. Live results state that P1a mediates disinhibition, not direct excitation, of the rebound circuit; they do not name pC2 or pIP10. Whether this paper shows P1a being driven by taste cues from tapping remains unverified.

Courting males produce both airborne song and substrate-borne vibration, mostly in different behavioural contexts. The brain neurons P1a and pC2l can drive both signals through separate premotor pathways with cell-type-specific dynamics. A circuit model with recurrence and mutual inhibition explains why vibration is limited to contexts, such as a close or stationary female, where it is likely to be effective [MED][15]. Live results confirmed everything except the naming of P1a and pC2l; exact male counts come from the paper's figures and were not verified.

### Descending pathways: pIP10 and pMP2

Optogenetic activation of the descending neuron pIP10 produces both pulse and sine song, while activation of pMP2 produces pulse song but not sine song; both project heavily into the wing neuropils of the nerve cord [HIGH][1]. The activation result appeared verbatim in live results; the projection detail did not. Manipulating pIP10 affects many features of both song types [MED][3], the song its activation evokes differs by species and activation level [MED][25], and activating a neuron pair earlier described as song command neurons, likely pIP10, switches a male between internal states [HIGH][18]. The live results did not name pIP10 for the state switch. Taken together, these results make a simple "command neuron" reading of pIP10 too narrow.

### The nerve-cord song network and motor output

Silencing and activation screens identified eight fruitless- and/or doublesex-expressing cell types (pIP10, pMP2, dPR1, dMS9, vMS12, TN1A, dMS2, vPR9), each needed for normal pulse song, sine song, or both. In the MANC connectome (wiring only, one male) they are densely interconnected and connected to wing motor neurons, forming two nested feed-forward pathways with reciprocal and feedback links. The larger pathway underlies pulse song, which the authors argue is the more complex and ancestral song type [HIGH][3]. Live results quoted the pathway organisation directly; the list of eight named types was not visible.

Song-type roles are not cleanly separated. Manipulating the "pulse" neurons dMS9 and vMS12 also changed sine amplitude or frequency, manipulating the "sine" neurons TN1A and dMS2 also changed pulse features, and pIP10 and vPR9 affected many features of both song types [MED][3]. These cross-mode effects rest on a single round-1 check; the live audit confirmed the source and its design only.

In isolated males, optogenetic activation of dMS9, vMS12, vPR6 or vPR13 produced some sine song, but silencing any one of them did not noticeably reduce sine song. For sine song, vPR6 activation can evoke it, but vPR6 has not been shown to be needed for it; its role in pulse song is a separate question [MED][3]. This result was not visible in live results, and vPR6 is not among the eight core types, so the figure should be checked before relying on it.

The MANC premotor analysis systematically mapped circuits from descending neurons to premotor and motor neurons and identified courtship-linked VNC types including TN1a, dPR1, vPR9 and vMS11. How older driver-line names such as vPR6 map onto MANC types is not fully settled in the sources seen [MED][5]. The live audit corrected the citation to the 2026 version of record; the named courtship types were not visible in its results.

At the motor end, the male-specific, doublesex-expressing thoracic interneurons TN1A are needed specifically for sine song. They can drive the wing motor neuron hg1, which is not sex-specific and is also needed for sine song. Doublesex acting in TN1A increases TN1A branch density where hg1 dendrites sit, which supports the TN1A-hg1 connection [HIGH][6]. Song and flight use different patterns of muscle activity from a shared set of muscles and motor neurons, and the flight command overrides song [HIGH][7]. None of the audited sources ties the pulse rhythm or the sine carrier frequency to a specific cell.

### Receiver feedback shapes what the sender sings

Male song patterning is not a fixed action pattern. Males use fast changes in visual and self-motion feedback cues (their own locomotion as well as the female's movement and the distance between them) to choose song moment by moment. The authors found the same relationship in the other Drosophila species they tested [MED][16]. The live audit confirmed the main finding but did not see the cross-species statement, which should be verified or dropped.

Male D. melanogaster song has at least three modes: fast pulse (Pfast), slow pulse (Pslow) and sine. Pfast is louder and more common when the male is far from the female. Activity of identified song premotor and motor neurons affects which mode is chosen, and the two pulse types affect female behaviour differently [HIGH][17]. Live results state that four separate neuron types in the song pathway affect mode probability differently; the loudness, distance and female-response details were not visible.

An unsupervised hidden-state model finds three hidden internal states in courting males. Each state maps female feedback cues onto song modes differently, and the model predicts moment-to-moment song choices [HIGH][18]. The states are inferred by the model from behaviour. Distance also sets song complexity: males sing simple single-mode trains far from the female and complex pulse-sine alternations near her, and VNC song circuits show mutual inhibition and rebound excitability between the nodes that drive the two modes [HIGH][14].

Using real-time closed-loop optogenetics, the male's song was made to trigger backward walking in the female through activation of her Moonwalker descending neurons, which perturbed her feedback. Males trained this way later changed the contexts in which they sang to new females, which the authors call usage learning of an innate song. The changes were retained only at first and then gradually reverted [MED][19]. The live audit confirmed the paper (Current Biology, March 2026), the closed-loop design, the adaptive song changes and the term "usage learning"; the Moonwalker manipulation was not visible in its results. The manipulation was on the receiver, the male result is behavioural, and what changed was when he sang, not the structure of his song.

### Sex differences, female signals and the whole-CNS connectome

The complete male central nervous system connectome contains about 166,700 fully proofread neurons across brain and nerve cord, annotated for fruitless and doublesex expression, with about 11,700 cell types (11,710 in the live result text). Compared with the female brain it has 8,069 matching types, 138 dimorphic types, 289 male-specific and 71 female-specific types. These counts come from the Cell summary; the preprint reported 262 sex-specific plus 114 dimorphic types [MED][20]. The live audit saw the Cell counts but not the preprint figures. Its results add that sex-specific and dimorphic types make up 4.8% of male and 2.4% of female central-brain neurons, and the Janelia and HHMI release reports about 125 million synapses [MED][20][21].

In the male CNS versus female brain comparison (wiring only, one animal per sex), sex-specific and dimorphic cell types are concentrated in higher-order central brain regions, while sensory and motor neurons within the CNS are largely similar between the sexes; known exceptions include some sensory afferents. The authors interpret dimorphic neurons as routing shared sensory input into sex-specific behavioural circuits [MED][20]. Live results confirmed the distribution and report a high but not perfect correspondence between dimorphism status and fruitless/doublesex expression; the routing interpretation was not in the visible text.

This fits older causal work. Optogenetic stimulation of fruitless-expressing neurons in the thoracic-abdominal ganglia (nerve cord) produces wing movement and sound in both sexes, but authentic song only in males or in females made to express male fruitless [HIGH][8]. The reading that a song-like motor program exists in females but lies dormant because the commands to start song are missing is an interpretation of this result. The live audit confirmed the source and method; the sex comparison itself rests on round-1 agreement.

Activating doublesex-expressing neurons in the female brain, with the pC1 cluster identified as critical, makes females court like males: mainly orienting and following, with occasional tapping and one-wing extension. Audio recordings show male-like song features, including sine and pulse episodes. The female brain therefore contains latent circuitry for male-like courtship and song [MED][23]. The live audit replaced the earlier secondary summary with the primary paper and corrected the description of the behaviours.

Females also sing naturally. D. melanogaster females produce a copulation song by wing vibration during mating. It differs from male courtship song, requires DoublesexF-expressing neurons, and is modulated by seminal fluid from the male [HIGH][24]. The remating effect that round 1 left unverified was stated in live results: playback of female copulation song to a mating couple increases the time the female takes to remate with later males, and hearing the song increases a male's reproductive success under competition [HIGH][24].

A 2026 preprint aligns connectomes using network structure alone. It uses two complete male VNC connectomes as references to assign cell types to about 13,000 female VNC neurons, flags sex-specific and dimorphic types, and compares the male song-production circuit across the sexes; it also covers female oviposition circuits [MED][22]. Its cross-sex matches are anatomical predictions, and its authors were not captured.

Hearing regulates male-male aggression, and courtship song and aggression song affect aggression differently. Males therefore have an acoustic threat or agonistic signal, but the neurons that produce aggression song were not identified in this work [HIGH][27].

### Evolution: same sender neuron, different song

The homologous male-specific descending neuron pIP10 (one per hemisphere) was genetically targeted in D. melanogaster and D. yakuba. Its activation gave different song types in the two species: sine in D. melanogaster at low activation, "clack" song in D. yakuba, and more pulse in D. yakuba at higher activation. The evolutionary change was placed downstream of pIP10's own physiology [MED][25]. The headline result visible in live search comes from silencing: inhibiting pIP10 mainly reduced pulse song in D. melanogaster and clack song in D. yakuba, song types produced in a conserved context (fast chasing at a distance) [MED][25]. The activation-level details were not visible.

D. yakuba, which lost sine song, lacks a TN1A-equivalent cell type. Its TN1 neurons can still drive the singing wing posture but not sine song. A divergent doublesex function in D. yakuba reduces TN1 number by promoting cell death [HIGH][26].

### Interpretation limits

Wiring is not activity: the connectomes show no neuron firing [MED][20]. The 2026 result is usage learning of an innate song whose effects revert, which is different from vocal learning [MED][19]. Female song evoked through pC1 activation is artificially induced [MED][23]. Several [HIGH] tags rest on round-1 agreement plus a live-confirmed source rather than on the finding being visible in search; the main cases are listed under Leads needing confirmation.

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| P1 / P1a | Decision to sing; persistent song and aggression; activity tracks pursuit; P1a disinhibits the VNC rebound circuit and drives song and vibration | Male | Causal; recorded (during pursuit) | HIGH / MED | 4, 9-12, 14, 15 |
| pC1 | Promotes song and aggression in males (release summary of earlier causal work); activation in the female brain gives male-like courtship and song | Both | Causal; announcement | MED | 21, 23 |
| pC2 / pC2l | Responds to sound and vision; drives pulse then sine; pulse via pIP10; recruits P1a; drives vibration | Both | Recorded (sensory); causal | HIGH / MED | 13-15 |
| pIP10 | Descending; drives pulse and sine; "when to sing" pathway; likely state switch; species-specific output | Male | Recorded with sound; causal; wiring | HIGH / MED | 1, 2, 18, 25 |
| pMP2 | Descending; drives pulse, not sine; pulse-selective pathway | Male | Causal; recorded at pathway level; wiring | HIGH / MED | 1, 2 |
| dPR1 | Active only during pulse song; core network type; 2011 pattern-generator candidate | Male | Recorded; causal; wiring | HIGH | 1, 3-5 |
| TN1A | Needed for sine; active in both songs; drives hg1; no equivalent in D. yakuba | Male | Recorded; causal; wiring | HIGH | 1, 3, 6, 26 |
| dMS9, vMS12, dMS2, vPR9 | Core network types; each affects features of both songs | Male | Causal; wiring | HIGH / MED | 3, 5 |
| vPR6, vMS11, vPR13 | 2011 pattern-generator candidates (vPR6, vMS11); vPR6 and vPR13 activation evokes some sine, silencing does not reduce it | Male | Causal (sufficiency); vMS11 in MANC | HIGH / MED | 3-5 |
| hg1 motor neuron | Needed for sine; driven by TN1A | Both (not sex-specific) | Causal | HIGH | 6 |
| Muscles i1, hg1-4, b3 | Strongly active in pulse song; shared with flight; flight overrides song | Recorded in males | Recorded (muscle) | HIGH | 7 |
| fru+ VNC neurons | Wing movement and sound in both sexes; authentic song only in males or females expressing male fruitless | Both | Causal | HIGH | 8 |
| DsxF neurons | Needed for female copulation song | Female | Causal | HIGH | 24 |
| Moonwalker descending neurons | Tool used to make the female back away in response to male song | Female | Causal (tool) | MED | 19 |

## Why this matters for two-way communication with animals

- **A machine can join the exchange on the receiver side.** The male selects song modes from the female's distance and movement [HIGH][17] [MED][16]. Her side has already been driven in closed loop with his song, and this changed when he sang [MED][19]. The practical reply channel is controlled receiver behaviour rather than synthetic song.
- **The sender's output is small and machine-readable.** Pfast, Pslow and sine are defined modes [HIGH][17], and substrate vibration is a second channel used in particular contexts [MED][15]. The 2026 study triggered the reply from the male's song in real time [MED][19], so an utterance can be answered within a trial. No real-time song-mode classifier is among the audited sources.
- **Responding to intent before sound is plausible but untested.** pIP10 calcium has been recorded together with song sound [MED][1], but no source here measures how far it leads song onset.
- **Learned changes fade.** The 2026 changes in singing context were retained only at first and then reverted [MED][19]. An interface that aims to shape the sender must measure retention as well as within-session change.
- **Playback can engage aggression as well as courtship.** Hearing regulates male-male aggression, and courtship and aggression songs affect it differently [HIGH][27]. A connectome-derived module upstream of pC1 is proposed to switch between the two behaviours (new lead, unverified).
- **This maps mode choice, not meaning.** The evidence links what is sung to receiver cues and inferred states [HIGH][18]. Nothing here decodes content.
- **Decoders will not carry over between species unchanged.** The same descending neuron drives different songs in two species [MED][25], and a cell type is absent in the species that lost sine song [HIGH][26].
- **A reusable recipe for other animals:** list the discrete output modes, find the receiver cues that predict mode choice, model hidden states, then alter the reply in closed loop and measure how the sender's mode use shifts and how long the shift lasts. Every step has a fly precedent [HIGH][17] [HIGH][18] [MED][16] [MED][19].

## Open questions

1. What generates the pulse rhythm: an oscillating cell type, a network rebound loop, or motor and muscle dynamics? No audited source ties the rhythm to a cell; the inter-pulse-interval literature and temperature effects were not reviewed.
2. Which neurons select Pfast versus Pslow? Identified pathway neurons shift mode probabilities [HIGH][17], but no cell-level recording separates the two pulse types.
3. How does female feedback (distance, movement, taste from tapping) reach pIP10 and pMP2, and do the male-CNS paths from pC2, P1a and pC1 match the three-state switching [HIGH][18]? No audited claim gives pIP10 or pMP2 identities in the newer connectomes. The proposed vPN1-to-pC1 song-hearing line (new lead) is one candidate input route.
4. Upstream triggers: pheromone and taste inputs to P1, and visual targeting. Round-1 verifiers pointed to LC10a and to Kohatsu 2011, Clowney 2015, Kallman 2015 and Ribeiro 2018; none was reviewed or audited.
5. Neuromodulation and state: dopamine, mating drive, satiety, age, and how persistent P1/pC1 effects [HIGH][9][10][11] are maintained. Round-1 verifiers pointed to Jung 2020 and Zhang 2016/2018; not reviewed or audited.
6. Is song-circuit wiring stable across individuals, given one animal per connectome? How do driver-line names (vPR6, vMS11, vPR13) map onto connectome types [MED][5]?
7. Which neurons produce aggression song, and do they reuse the VNC song circuit [HIGH][27]? Does the proposed vPN1-mAL-pC1 module (new lead) gate the choice between courtship and aggression? Does female copulation song [HIGH][24] use the song-capable motor circuitry present in the female nerve cord [HIGH][8]?
8. Can wiring plus predicted neurotransmitters alone reproduce the nested activity [HIGH][1], or are neuromodulators and intrinsic properties needed?
9. What changes in the male during usage learning, and why do the changes revert [MED][19]? Isolation and early acoustic experience were not reviewed.
10. Could an interface use substrate vibration instead of, or alongside, sound [MED][15]?
11. Do song neurons behave the same in natural, untethered song? No electrophysiology or voltage imaging of song premotor or motor neurons during natural song was found.

## Candidate research projects

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Connectome-constrained song pattern generator model | A sign-constrained model of the eight-type VNC network, weighted from MANC and the male CNS connectome, reproduces the nested activity and the pIP10 versus pMP2 activation results, and predicts which cells separate Pfast from Pslow. | Extract the song subnetwork and wing motor neurons from the male CNS connectome [20] and the MANC premotor analysis [5]; simulate descending input; fit to song changes under activation and silencing [3] and to calcium recordings [1]; link to Track 05. | Computational, now | Pull the song-circuit adjacency matrix and test whether a sign-constrained linear model already makes pulse activity a superset of sine activity [1][3]. |
| 2. Closed-loop "reply" to a singing male | A machine that detects song mode in real time and gives mode-specific female-like replies will shift the male's feedback-to-mode mapping within one session. | Extend the 2026 closed-loop rig [19]; a real-time classifier for Pfast, Pslow and sine [17] (tool still to be chosen) triggers different replies (female backing via Moonwalker or other split-GAL4 lines, or a visual or robotic dummy); test transfer to real females and track retention, since the 2026 changes reverted [19]. | Wet lab, months | Confirm the Moonwalker method in [19] and reproduce the result, then make the reply depend on Pfast versus Pslow. |
| 3. Neural-intent readout driving a virtual partner | pIP10/pMP2 (or pC2l/P1a) calcium predicts the next song mode tens to hundreds of ms ahead; a fictive female that reacts to decoded intent shifts song sequences more than one that reacts to sound. | Tethered virtual-reality courtship [12] with two-photon imaging of descending neurons [1] and a microphone; train a decoder; close the loop on it. | Wet lab, years | Obtain the pIP10 calcium and sound recordings of [1] and measure how far calcium leads song onset. |
| 4. Map the dormant female song circuit | Female copulation song uses VNC counterparts of the male premotor types, gated by DsxF neurons instead of pIP10 and pMP2. | Use the alignment preprint's female VNC cell-type assignments [22] and the male CNS connectome [20]; screen matching split-GAL4 lines in the copulation-song assay [24]; compare with pC1-evoked female song [23]. | Wet lab, months | List female counterparts of dPR1, TN1A, vPR9, dMS2, dMS9 and vMS12; check which receive DsxF brain input. |
| 5. Find the aggression-song sender neurons | Aggression song uses the same VNC wing network, reached via a descending neuron downstream of aggression-linked pC1/P1 subsets, not pIP10. | Query the male CNS connectome [20], starting from the proposed vPN1-mAL-pC1 switch (new lead); activate and silence candidates in contests with microphones [27]. | Wet lab, months | Shortlist descending neurons with high pC1 input and wing-neuropil output, excluding pIP10 and pMP2. |

## Leads needing confirmation

- **2026 closed-loop study [19].** The paper, its closed-loop design and the term "usage learning" are confirmed. The Moonwalker/backward-walking manipulation was not visible in live results; read the methods before building project 2 on it.
- **Shiozaki 2024 methods [1].** Round-1 verifiers asked whether song in the imaging preparation was evoked optogenetically rather than by a female, and noted that the result comes from one lab; the live audit did not address this. The pIP10/pMP2 activation result is now attributed to [1] (it appears in the preprint and paper summary). The pooled left/right pIP10 signal and the connectome input analysis were not visible.
- **Lillvis 2024 figure-level details [3].** The cross-mode effects rest on one round-1 verifier, and the vPR6/vPR13 silencing result was not visible in live results. vPR6 is not among the eight core types; check the figure.
- **pIP10 activation in two species [25].** The activation-level details (sine at low activation in D. melanogaster; more pulse at higher activation in D. yakuba) were not visible, and round-1 verifiers read them differently. Check the paper; the silencing result is the better-supported headline.
- **Song-vibration paper [15].** Venue and full author list are now confirmed. The naming of P1a and pC2l as the driving neurons was not visible, and male counts are unverified.
- **Roemschied 2023 [14].** The visible result text does not name pC2 or pIP10, and no result mentions taste cues from tapping driving P1a.
- **Coen 2014 cross-species statement [16].** Not visible in any result; verify or drop.
- **Male CNS connectome counts [20].** Use the Cell figures seen live (166,700 neurons; 11,710 types; 8,069 / 138 / 289 / 71). The preprint figures (262 sex-specific plus 114 dimorphic) were not seen, and the routing interpretation is not in the visible text.
- **Janelia release [21] and alignment preprint [22].** The release wording on pC1 cannot be separated from the Cell paper's; the preprint's authors are still not captured.
- **Details behind [HIGH] tags that the live audit did not see.** These rest on round-1 agreement plus a live-confirmed source: male-specificity of P1, pIP10 and dPR1 [4]; the sex comparison in Clyne and Miesenböck [8]; the muscle list and flight override [7]; Pfast loudness and distance and the different female responses to the two pulse types [17]; pC2l visual responses, pulse-then-sine output and necessity [13]; TN1 driving wing posture in D. yakuba [26]; pIP10 and pMP2 projections into the wing neuropils [1]. For [13], cite the 2019 record; a record with a 2023 identifier is probably a correction notice.
- **Other.** The MANC courtship types (TN1a, dPR1, vPR9, vMS11) were not visible in live results [5]. The P1 time course [12] was checked only incidentally.

## New leads from live search (2025-2026)

Found by the live auditor while checking this track's claims; not independently verified.

- [MED] **Courtship-versus-aggression switch upstream of pC1.** Male CNS connectome analysis identifies a disinhibitory module in which vPN1 inhibits a male-specific mAL, which in turn inhibits pC1; the authors propose it switches male behaviour between aggression and courtship. They also identify a male-specific vPN1-to-pC1 labeled line for processing courtship song. This is a wiring-based hypothesis, not a causal test. Berg S et al., Cell, 2026 (source [20]) -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6
- [MED] **2025 review of song-circuit evolution.** "Neural evolution of complex motor behaviors: insights from Drosophila courtship song", 2025, a review in a ScienceDirect journal, probably Current Opinion in Neurobiology (inferred from the S0959-4388 identifier; unconfirmed). The auditor expects it to synthesise the pIP10, TN1A and D. yakuba findings [25][26]. It surfaced twice in the audit; the two entries are merged here. -- https://www.sciencedirect.com/science/article/pii/S095943882500162X
- [MED] **2026 study of wing-behaviour sequencing.** "Sequencing of distinct wing behaviors during Drosophila courtship", Current Biology, 2026. Seen as a search-result title only; authors and findings need checking. It may update the picture of song versus other wing displays. -- https://www.cell.com/current-biology/fulltext/S0960-9822(26)00078-3
- [LOW] **PubMed record "Recent social experience alters song behavior in Drosophila".** Seen as a title only, with venue and authors unconfirmed. The title matches the 2026 Current Biology paper [19], so it is probably that paper's PubMed entry rather than a separate study. -- https://pubmed.ncbi.nlm.nih.gov/41780528/

## Claims dropped in verification

No claim was dropped in either round; all 30 were kept.

Round-1 narrowing that still holds:

- Eight-type network: "needed for pulse and sine" narrowed to "pulse song, sine song, or both"; pathway structure labelled as wiring.
- vPR6: "sufficient to evoke song" limited to sine song.
- Coen 2014: "mainly from the female's movement" removed (male self-motion also counts); "conserved across species" narrowed to the species tested.
- Roemschied 2023: taste cues driving P1a removed as a finding of that paper.
- Song-vibration paper: an unverified "all 35 males" count removed; "only when it can reach the female" replaced by context variables.
- P1 persistent song: re-cited from Hoopfer 2015 to Inagaki 2014 and Bath 2014.
- Male-female connectome comparison: sensory routing reframed as the authors' interpretation.
- pC1: "male-specific pC1" removed, since pC1 also exists in females.
- Female copulation song: "depends on seminal fluid" became "modulated by".
- Seed errors not carried forward: Shirangi 2016 is Developmental Cell, not Cell; Clemens 2018 is Current Biology; sine-song loss is Ye 2024, not Ding 2019; BANC is a female dataset; a 2025 Current Opinion review was misreported as a Cell study.

Reversed or updated by the live audit:

- The preprint's "when versus what" wording, removed in round 1 as unverifiable, is restored.
- The female copulation-song remating effect, removed in round 1, is restored.
- The MANC premotor paper is cited under its 2026 version-of-record title, replacing the reviewed-preprint title used after round 1.
- The female pC1 activation claim is cited to the primary Current Biology paper instead of the JEB summary, with corrected behaviour and song details.

Removed in this revision because they are not part of the audited ledger:

- 08B ascending neurons and DNa12 (seen only in a round-1 search summary).
- The ~35 ms pulse-interval figure.
- A description of the Clyne and Miesenböck preparation, and a note on whether Pfast and Pslow form a continuum.
- Sources outside the ledger: Jonsson et al. 2011; the Janelia male CNS project page; MANC and its annotation preprints; the Lillvis and Shiozaki data deposits; comparative descending-neuron connectomics; an LLM-based circuit-inference preprint; and the DAS song segmenter.

## Sources

1. Activity of nested neural circuits drives different courtship songs in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- Nature Neuroscience, 2024 -- https://www.nature.com/articles/s41593-024-01738-9 (PMC full text: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11452343/)
2. Combinatorial circuit dynamics orchestrate flexible motor patterns in Drosophila -- Shiozaki HM, Wang K, Lillvis JL, Xu M, Dickson BJ, Stern DL -- bioRxiv 2022.12.14.520499, 2022 (published as [1]; v1 titled "Neural coding of distinct motor patterns during Drosophila courtship song") -- https://www.biorxiv.org/content/10.1101/2022.12.14.520499v2.full
3. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00015-0
4. Neuronal Control of Drosophila Courtship Song -- von Philipsborn AC, Liu T, Yu JY, Masser C, Bidaye SS, Dickson BJ -- Neuron 69(3):509-522, 2011 -- https://www.cell.com/neuron/fulltext/S0896-6273(11)00057-2
5. Organization of circuits linking descending input to motor output in the Drosophila Male Adult Nerve Cord connectome -- Cheong HSJ, Eichler K, Sturner T, ..., Card GM -- eLife 13:RP96084, 2026 (version of record 20 July 2026; reviewed preprint 2024 titled "Transforming descending input into behavior: The organization of premotor circuits in the Drosophila Male Adult Nerve Cord connectome"; bioRxiv 10.1101/2023.06.07.543976) -- https://elifesciences.org/articles/96084
6. Doublesex Regulates the Connectivity of a Neural Circuit Controlling Drosophila Male Courtship Song -- Shirangi TR, Wong AM, Truman JW, Stern DL -- Developmental Cell, 2016 -- https://www.cell.com/developmental-cell/fulltext/S1534-5807(16)30325-2
7. Multifunctional Wing Motor Control of Song and Flight -- O'Sullivan A, Lindsay T, Prudnikova A, Erdi B, Dickinson M, von Philipsborn AC -- Current Biology 28(17):2705-2717.e4, 2018 -- https://www.cell.com/current-biology/fulltext/S0960-9822(18)30829-7
8. Sex-Specific Control and Tuning of the Pattern Generator for Courtship Song in Drosophila -- Clyne JD, Miesenböck G -- Cell 133(2):354-363, 2008 -- https://www.sciencedirect.com/science/article/pii/S0092867408002158
9. Optogenetic control of Drosophila using a red-shifted channelrhodopsin reveals experience-dependent influences on courtship -- Inagaki HK, Jung Y, Hoopfer ED, Wong AM, Mishra N, Lin JY, Tsien RY, Anderson DJ -- Nature Methods 11:325-332, 2014 -- URL not verified
10. FlyMAD: rapid thermogenetic control of neuronal activity in freely walking Drosophila -- Bath DE, Stowers JR, Hormann D, Poehlmann A, Dickson BJ, Straw AD -- Nature Methods 11:756-762, 2014 -- URL not verified
11. P1 interneurons promote a persistent internal state that enhances inter-male aggression in Drosophila -- Hoopfer ED, Jung Y, Inagaki HK, Rubin GM, Anderson DJ -- eLife 4:e11346, 2015 -- https://elifesciences.org/articles/11346
12. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature 595:549-553, 2021 (2020 bioRxiv preprint titled "An arousal-gated visual circuit controls pursuit during Drosophila courtship") -- https://www.nature.com/articles/s41586-021-03714-w
13. Shared Song Detector Neurons in Drosophila Male and Female Brains Drive Sex-Specific Behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29(19):3200-3215.e5, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219310243
14. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA, Pacheco DA, Aragon MJ, Ireland EC, Li X, Thieringer K, Pang R, Murthy M -- Nature, 2023 -- https://www.nature.com/articles/s41586-023-06632-1
15. A neural circuit for context-dependent multimodal signaling in Drosophila -- Steinfath E, Khalili A, Stenger M, Schultze BL, Ravindran Nair S, Alizadeh K, Clemens J -- Nature Communications 16:9472, 2025 (published 27 Oct 2025; preprint bioRxiv 10.1101/2024.12.04.625245; model code reported on GitHub as janclemenslab/vibmodel) -- https://www.nature.com/articles/s41467-025-64907-9
16. Dynamic sensory cues shape song structure in Drosophila -- Coen P, Clemens J, Weinstein AJ, Pacheco DA, Deng Y, Murthy M -- Nature 507:233, 2014 -- https://www.nature.com/articles/nature13131
17. Discovery of a New Song Mode in Drosophila Reveals Hidden Structure in the Sensory and Neural Drivers of Behavior -- Clemens J, Coen P, Roemschied FA, Pereira TD, Mazumder D, Aldarondo DE, Pacheco DA, Murthy M -- Current Biology 28(15):2400-2412, 2018 -- https://pubmed.ncbi.nlm.nih.gov/30057309/
18. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience 22(12):2040-2049, 2019 (an Author Correction exists, s41593-019-0571-4) -- https://www.nature.com/articles/s41593-019-0533-x
19. Recent social experience alters song behavior in Drosophila -- Roemschied FA, Ireland EC, Calhoun AJ, Choi M, Ahmed OM, Murthy M -- Current Biology, 2026 (March 2026; preprint bioRxiv 10.1101/2025.09.04.674308) -- https://www.cell.com/current-biology/fulltext/S0960-9822(26)00152-1
20. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Berg S et al. (FlyEM/Janelia, Cambridge, Google) -- Cell, 2026 (preprint bioRxiv 10.1101/2025.10.09.680999, Oct 2025, titled "Sexual dimorphism in the complete connectome of the Drosophila male central nervous system") -- https://www.cell.com/cell/fulltext/S0092-8674(26)00942-6 (also: https://www.sciencedirect.com/science/article/pii/S0092867426009426)
21. Researchers reveal connectome of the male fruit fly central nervous system -- Janelia Research Campus news -- Janelia news, 2026 -- https://www.janelia.org/news/researchers-reveal-connectome-of-the-male-fruit-fly-central-nervous-system
22. Uncovering Sex Differences in the Drosophila Ventral Nerve Cord Through Connectome Alignment -- authors not captured -- bioRxiv, 2026 -- https://www.biorxiv.org/content/10.64898/2026.06.14.732053v2
23. Activation of Latent Courtship Circuitry in the Brain of Drosophila Females Induces Male-like Behaviors -- Rezával C, Pattnaik S, Pavlou HJ, Nojima T, Brüggemeier B, D'Souza LAD, Dweck HKM, Goodwin SF -- Current Biology 26(18):2508-2515, 2016 (doi:10.1016/j.cub.2016.07.021) -- https://pubmed.ncbi.nlm.nih.gov/27568592/
24. Female copulation song is modulated by seminal fluid -- Kerwin P, Yuan J, von Philipsborn AC -- Nature Communications 11:1430, 2020 -- https://www.nature.com/articles/s41467-020-15260-6
25. Neural Evolution of Context-Dependent Fly Song -- Ding Y, Lillvis JL, Cande J, Berman GJ, Arthur BJ, Long X, Xu M, Dickson BJ, Stern DL -- Current Biology, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219301587
26. Changes in the cellular makeup of motor patterning circuits drive courtship song evolution in Drosophila -- Ye D, Walsh JT, Junker IP, Ding Y -- Current Biology 34(11):2319-2329, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00460-3
27. Hearing regulates Drosophila aggression -- Versteven M, Vanden Broeck L, Geurten B, Zwarts L, Decraecker L, Beelen M, Göpfert MC, Heinrich R, Callaerts P -- PNAS 114(8):1958-1963, 2017 -- https://www.pnas.org/doi/10.1073/pnas.1605946114

## Verification ledger

| # | Claim (at most 15 words) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | VNC imaging: pulse-and-sine population nested in pulse population; dPR1 pulse-only, TN1A both | HIGH | confirmed | 1 |
| 2 | pIP10 activation gives pulse and sine; pMP2 gives pulse only; both reach wing neuropils | HIGH | confirmed | 1 |
| 3 | Nested pattern in descending pathways; pIP10 calcium recorded with sound; structured VNC input | MED | confirmed | 1 |
| 4 | Preprint: two descending pathways, one sets when to sing, other which song | HIGH | confirmed | 2 |
| 5 | Eight fru/dsx VNC types needed for song form two nested feed-forward pathways | HIGH | confirmed | 3 |
| 6 | Cross-mode effects: "pulse" and "sine" neurons also alter the other song's features | MED | confirmed | 3 |
| 7 | dMS9, vMS12, vPR6, vPR13 activation evokes some sine; silencing does not reduce it | MED | confirmed | 3 |
| 8 | 2011 framework: P1, pIP10 decide to sing; dPR1, vPR6, vMS11 pattern-generator candidates | HIGH | confirmed | 4 |
| 9 | fru+ nerve-cord stimulation gives sound in both sexes, authentic song only in males | HIGH | confirmed | 8 |
| 10 | TN1A needed for sine, drives hg1; doublesex raises TN1A arbor density near hg1 | HIGH | confirmed | 6 |
| 11 | Muscles i1, hg1-4, b3 active in pulse song; flight command overrides song | HIGH | confirmed | 7 |
| 12 | Three song modes (Pfast, Pslow, sine); identified neurons affect which mode is chosen | HIGH | confirmed | 17 |
| 13 | Males pattern song moment by moment from visual and self-motion feedback cues | MED | confirmed | 16 |
| 14 | Three hidden internal states map feedback to song; command-neuron pair switches states | HIGH | confirmed | 18 |
| 15 | Distance sets song complexity; pC2 via pIP10 and P1a disinhibition enable complex bouts | HIGH | confirmed | 14 |
| 16 | pC2l responds to sound and vision, drives pulse then sine, needed in both sexes | HIGH | confirmed | 13 |
| 17 | P1a and pC2l drive song and substrate vibration through separate premotor pathways | MED | confirmed | 15 |
| 18 | Closed-loop female backing changed contexts of male singing: usage learning of innate song | MED | confirmed | 19 |
| 19 | P1 activation drives persistent song and a persistent inter-male aggression state | HIGH | confirmed | 9, 10, 11 |
| 20 | P1 activity rises at courtship onset, returns to baseline when pursuit pauses | MED | confirmed | 12 |
| 21 | Male CNS connectome: about 166,700 neurons, 11,700 types; sex-specific type counts | MED | confirmed | 20 |
| 22 | Sex-specific types concentrated in higher brain; sensory and motor neurons largely shared | MED | confirmed | 20 |
| 23 | Janelia release: male pC1 promotes song and aggression; pC1 also exists in females | MED | confirmed | 21 |
| 24 | MANC: descending-to-motor circuits mapped; TN1a, dPR1, vPR9, vMS11 identified | MED | corrected | 5 |
| 25 | Preprint aligns about 13,000 female VNC neurons to male references; compares song circuits | MED | confirmed | 22 |
| 26 | pIP10 activation gives different song types in D. melanogaster and D. yakuba | MED | confirmed | 25 |
| 27 | D. yakuba lacks TN1A equivalent; divergent doublesex reduces TN1 number via cell death | HIGH | confirmed | 26 |
| 28 | pC1-centred doublesex activation in female brain gives male-like courtship and song | MED | corrected | 23 |
| 29 | Female copulation song needs DsxF neurons and is modulated by seminal fluid | HIGH | confirmed | 24 |
| 30 | Hearing regulates male aggression; aggression-song-producing neurons not identified | HIGH | confirmed | 27 |
