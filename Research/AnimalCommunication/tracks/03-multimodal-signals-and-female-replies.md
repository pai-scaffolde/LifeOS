# Track 03 -- Beyond song: pheromones, vision, touch, vibration, and the female side of the dialogue

*Interspecies Communication Research Program · 2026-09-25 · 30 claims kept of 30 · live-search audit: confirmed 25, corrected 5, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** Round 1 used one researcher, who worked without web access because the session search cap had been reached, and two independent verifiers (one checking source fidelity, one an adversarial skeptic). The verifiers also had no web access and checked each claim from their own knowledge. In round 2 a live auditor checked every claim against live web search results. A second opinion was reserved for contradicted claims; none of the 30 was contradicted, so none was needed. The audit confirmed 25 claims and corrected 5 (scope, wording or venue). [HIGH] means the finding was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding itself was not directly visible, was corrected, or rested on one verifier; [LOW] means not located or unconfirmed; [CONFLICT] means the checks disagree. This track has 8 [HIGH] and 22 [MED] claims and no [LOW] or [CONFLICT] claims. Sentences that report what "the live results" showed describe the auditor's search results and were not re-checked by a second reader. Tags on leads outside the 30 claims were not assigned by the audit.

All work is in *Drosophila melanogaster* unless noted.

## Bottom line

- Yes: outside song, neurons have been recorded responding to fly communication signals. In males, calcium imaging shows female contact pheromones exciting P1 and the male pheromone 7-T inhibiting it [HIGH][8]; female contact evokes P1 activity [MED][10]; and the cVA pathway was traced and recorded from olfactory receptor neuron to a descending neuron [MED][3]. In females, pC1 neurons respond to cVA and courtship song [HIGH][17], vpoEN neurons tuned to features of conspecific song excite the vpoDN acceptance neurons [MED][24], and DNp13 responds to male song through direct input from pC2l auditory neurons [MED][23].
- The non-song channels converge on a few sexually dimorphic hubs: P1 in males and pC1 subtypes in females. These hubs set persistent states (arousal, aggression) lasting minutes rather than acting as one-message command neurons [MED][14][26][28]. The complete male CNS connectome, now confirmed as a Cell 2026 paper, fits this picture at whole-CNS scale: sex-specific and dimorphic neurons cluster in higher-order centres, while the sensory and motor periphery is largely isomorphic [MED][34].
- The female's replies have identified output neurons. A pair of female-specific vpoDNs controls vaginal plate opening, the virgin's acceptance signal [MED][24]. DNp13 are command-type neurons for ovipositor extrusion, which deters males only when mated females perform it; mating status leaves DNp13's song responses unchanged and instead sets how well DNp13 engage the extrusion motor circuits, through ppk+ uterine sensory neurons activated at ovulation [MED][23]. oviDN/oviEN/oviIN form an egg-laying circuit, not a rejection circuit, which corrects the seed brief [HIGH][22].
- The receiver's state decides what a signal means. Ovipositor extrusion signals acceptance in virgins and rejection in mated females [MED][23][25]. Acute cVA raises male aggression through Or67d, while long-term exposure lowers it through Or65a [HIGH][5][35]. Sex peptide, acting through reproductive-tract sensory neurons and SAG ascending neurons, switches the female into the mated state [HIGH][18][19][20][21]. A state-blind "dictionary" of fly signals will misread them.
- Two arms of the loop still lack mapped neurons in the verified claims. Female sensing of male substrate vibration is supported only by behavior [MED][16]. The auditor found a 2021 paper reporting specific female leg neurons that receive the signal [MED][36] and a 2025 paper routing song and vibration output through shared brain neurons (New leads); neither was independently verified. How males sense the female's replies is not covered by any claim.
- Connectomes show candidate routes, not activity. FlyWire is one female brain with no nerve cord, no leg sensory neurons and no male-specific P1 [MED][32][33]. The male CNS connectome (about 166,700 neurons; relative to FlyWire, 8,069 isomorphic, 138 dimorphic, 289 male-specific and 71 female-specific types) makes a same-method P1 vs pC1 comparison possible [MED][34], and BANC adds a female brain-plus-cord volume for tracing leg inputs (New leads). No claim shows the P1 vs pC1 comparison done.
- After live search, 8 of 30 claims reach [HIGH]: the Or67d/Or65a split in cVA responses and aggression, contact-pheromone excitation and inhibition of P1, Gr32a in 7-T behavior, female pC1 responses, and the SPSN-SAG-pC1-oviDN mating-state chain. The other 22 are [MED], mostly because the paper was found but its specific cell names or recordings were not visible in the search results.
- The three most tractable next steps are unchanged: a computational convergence audit across the female and male connectomes; a closed-loop multimodal "suitor" that reads female replies and adjusts its signals; and optogenetic injection of a female "yes" (vpoDN) or "no" (DNp13) to find the male's receiving circuit.

## What the evidence shows

Evidence types: **recorded activity** (calcium imaging or electrophysiology in identified neurons), **causal manipulation** (activating or silencing changes behavior), **anatomy** (light microscopy), **wiring only** (EM connectome), **behavior only**, **model prediction**, **dataset or tool**.

### 1. Male receiving: contact pheromones and female contact converge on P1

Foreleg ppk23+ gustatory neurons come in two functional subtypes: "F-cells" respond to the female pheromone 7,11-HD, and "M-cells" respond to male pheromones such as 7-T (calcium imaging) [MED][7]. ppk23 neurons are needed for normal male courtship of females and for male-male courtship repulsion [MED][7]. The live results for this paper describe ppk29 as well as ppk23 in the fru+ foreleg neurons, with different cells responding selectively to male or female pheromones [7].

Gr32a-expressing gustatory neurons are required for 7-T to promote male aggression and for normal suppression of male-male courtship (causal manipulation) [HIGH][12]. Whether Gr32a neurons themselves detect 7-T is disputed, since ppk23+ M-cells also respond to 7-T; contact chemosensation still sits upstream of the fight-or-court decision [HIGH][12]. The live results did not address the detection dispute. They add that 7-T sensitivity is also needed for cVA's effect on aggression, the "hierarchical" regulation of the title [12].

These contact signals meet at P1. Calcium imaging of P1 during foreleg pheromone stimulation shows that female contact pheromones excite P1 and 7-T inhibits it, a balance that biases mate choice [HIGH][8]. Kallman et al. identified PPN1 relay neurons, and Clowney et al. identified vAB3 excitation and mAL inhibition; exactly how 7-T -> PPN1 -> mAL -> P1 connect needs to be confirmed from the primary paper [HIGH][8]. The PPN1 relay was not visible in the live results.

P1 neurons act as a multisensory integrator in the male brain. They are excited by female contact pheromones via vAB3, gated by feedforward inhibition via GABAergic mAL, and suppressed by the volatile pheromone cVA (calcium imaging and electrophysiology, ex vivo and in vivo, with foreleg stimulation) [MED][9]. The live results for this paper confirmed only that courtship is triggered by activating dimorphic P1 interneurons; the vAB3, mAL and cVA details were not visible [9].

Female contact registers at P1: in tethered males, female contact evoked activity in P1 [MED][10]. The causal evidence in the same study came from dTrpA1 activation of fruitless-expressing neurons, which induced courtship acts; in mosaic analysis, courtship initiation correlated with activation of P1 interneurons, descending P2b neurons, or both [MED][10]. Because P1 was not activated selectively, this study does not show that P1 alone triggers courtship.

Evolution retuned the integrator, not the sensor. In *D. simulans*, 7,11-HD (a female pheromone of *D. melanogaster*) suppresses male courtship. Peripheral detection by ppk23+ neurons is conserved, but the central route to P1 differs: in *D. melanogaster* 7,11-HD excites P1 via vAB3, and in *D. simulans* the balance shifts toward inhibition via the GABAergic mAL pathway, so P1 is not activated (calcium imaging in both species) [MED][11]. The live results confirmed the species difference and its central locus but named vAB3 and mAL only as neurons involved, without the direction of the balance. Whether PPN1 is part of the altered pathway is unconfirmed [MED][11].

### 2. The volatile pheromone cVA, from receptor to descending neuron

Or67d ORNs (DA1 glomerulus) are required for the acute behavioral responses to cVA. Without Or67d, males court other males more and females are less receptive (causal manipulation) [HIGH][1]. Or65a ORNs, a second cVA-sensitive class, were later shown to carry the effects of long-term cVA exposure, so "single class" applies only to acute responses [HIGH][1][35].

Or67d ORNs and DA1 PNs respond to cVA similarly in males and females (electrophysiology), but DA1 PN axon arbors in the lateral horn are sexually dimorphic and depend on fruitless (light-microscopy anatomy, not a connectome) [MED][2]. This suggests the dimorphism lies in how DA1 PNs connect to third-order lateral horn neurons, not in how sensory neurons or PNs respond [MED][2]. Live search confirmed the paper but not these details; Kohl et al.'s summary, which states that first- and second-order olfactory neurons respond identically to cVA in both sexes, supports the claim indirectly [4].

In males, a four-step cVA pathway was traced and recorded: Or67d ORN -> DA1 PN -> fru+ DC1 lateral horn neuron -> fru+ DN1 descending neuron. Electrophysiological recordings showed that DN1 responds to cVA, linking pheromone input to descending motor output [MED][3]. The live results describe a circuit of at least four neurons and three synapses from antennal sensory neurons to descending neurons, three of them dimorphic, with a male-specific neuropil integrating multisensory input; the DC1/DN1 names and the DN1 recording were not visible [3]. "DN1" here is a descending neuron, not a clock neuron, and its match to connectome names is unchecked.

cVA signals are sent to different sexually dimorphic lateral horn neuron classes in males and females (the aSP-f and aSP-g classes) through a fruitless-dependent "bidirectional circuit switch". In vivo whole-cell recordings combined with optogenetic stimulation of DA1 PNs showed sex-specific functional connectivity [MED][4]. The live results describe two third-order lateral horn clusters, one responding to cVA in females and the other in males; both clusters exist in both sexes and share input, and fruitless reroutes the input by setting dendrite position. The aSP-f/aSP-g labels, which class serves which sex, and the optogenetic method were not visible [4].

Combining the hemibrain/FlyWire connectomes with physiology, cVA processing splits in the lateral horn into parallel pathways that represent the identity of the pheromone source and its position relative to the receiving fly [MED][6]. The live results confirmed separate cVA streams for identity and position; they did not show that the split happens specifically in the lateral horn or which connectome was used [6].

In behavior, acute cVA exposure promotes male-male aggression through Or67d ORNs, while long-term exposure from group housing reduces aggression through Or65a ORNs. The same pheromone can therefore push aggression either way depending on timescale, while also suppressing male-male courtship (causal manipulation) [HIGH][5][35].

### 3. Vision: tracking the partner, gated by arousal

LC10a lobula columnar visual projection neurons are needed for a courting male to track the female and to orient his unilateral wing extension toward her; silencing LC10a impairs visual pursuit during courtship (causal manipulation) [MED][13]. The live results phrase the silencing at the level of LC10 as a whole, with LC10a the subtype described, and state that LC10 neurons respond to small moving objects [13].

Arousal gates this channel. With two-photon imaging in tethered males pursuing a visual target, visual signals from the LC10a pathway drove pursuit only when males were aroused, and optogenetic P1 activation made males pursue a moving target (recorded activity plus causal manipulation) [MED][14]. The live results add that LC10a activity rises when males are sexually aroused and that LC10a activation triggers robust courtship only in that state, with P1 setting arousal [14]. The precise locus of the gate was not checked in this audit.

A deep network trained with "knockout training" on male courtship behavior mapped model units onto LC visual projection neuron types. It predicted that female features (position, size, heading) are carried by a combinatorial population code across many LC types, not by single dedicated channels, and the prediction was tested against LC neuron imaging (model prediction) [MED][15].

Males pattern their song in real time using feedback cues from the female. The choice between pulse and sine song depends on male-female distance and female speed [MED][29], and song amplitude is adjusted to distance [MED][30] (behavior). Visual cues contribute, but vision was not shown to be the sole or main channel [MED][29]. The live results for the 2014 paper describe song patterned by visual and self-motion inputs; the 2016 amplitude paper was not searched [29][30].

### 4. Substrate vibration: behavior only in the verified claims

Courting males make abdominal quivering movements that send substrate-borne vibrations. Females respond by becoming immobile (stopping), which helps copulation, and playing artificial vibrations reproduces the stopping response (behavior only) [MED][16]. The live results confirm quivering at 4-6 Hz that coincides and correlates strongly with female immobility; the playback result was not visible in the snippets [16].

No verified claim identifies a neuron in this channel. The auditor found two later primary papers that bear on it, neither independently verified: a 2021 Current Biology follow-up titled "Drosophila females receive male substrate-borne signals through specific leg neurons during courtship" [MED][36], and a 2025 Nature Communications study reporting that the brain neurons that drive male courtship song also control substrate-borne vibrations through separate premotor pathways (New leads).

### 5. Female receiving and replying

In virgin females, dsx+ pC1 neurons respond to cVA and courtship song in calcium imaging, and their activity bidirectionally controls receptivity (recorded activity plus causal manipulation) [HIGH][17]. pC1 is heterogeneous: later work assigns receptivity and mating status mainly to pC1a and related subtypes, and aggression and persistent state to pC1d/pC1e [HIGH][17]. The live results add that a second dsx+ cluster, pCd, shares the cVA response and the receptivity role, which the claim omits; the later subtype assignments were not checked [17].

Contact chemosensation matters on the female side too. In females, ppk25-expressing pheromone-sensing neurons promote receptivity to male courtship, and the same channel subunit also supports male courtship (causal manipulation) [MED][31].

**Acceptance.** Vaginal plate opening (VPO), the virgin female's acceptance signal, is controlled by a pair of female-specific descending neurons (vpoDNs). vpoDNs receive excitatory input from auditory vpoEN neurons tuned to specific features of *D. melanogaster* courtship song, and from pC1 neurons that encode the female's mating status [MED][24]. The audit corrected this paper's venue to Nature (not Neuron). Three round-1 details were not supported by the search results and have been removed: tuning to pulse song specifically, pC1 carrying male pheromone cues, and the EM dataset used [24]. In virgin females, ovipositor extrusion also signals acceptance: it prompts males to attempt copulation and helps the transition from courtship to copulation, unlike the rejection role of extrusion in mated females (behavior) [MED][25]. One aggregator summary seen by the auditor mentions ovipositor retraction in acceptance, so the extrusion-vs-retraction wording should be checked against the abstract [25].

**Rejection.** DNp13 descending neurons are command-type neurons for ovipositor extrusion (OE), and OE deters males only when mated females perform it (causal manipulation) [MED][23]. DNp13 respond to male song through direct synaptic input from pC2l auditory neurons. Mating status does not change DNp13 song responses; it changes how well DNp13 engage the OE motor circuits, and that status signal comes from ppk+ uterine sensory neurons that are activated at ovulation [MED][23]. VPO and OE are controlled by anatomically and functionally distinct circuits [MED][23]. The live audit replaced the round-1 version, which left both inputs unconfirmed and suggested that mating status reached DNp13 via pC1; the search results do not describe the status signal as passing through pC1.

The female side therefore has two song-to-reply routes with identified neurons: vpoEN -> vpoDN for acceptance [MED][24] and pC2l -> DNp13 for rejection [MED][23].

**Egg laying, not rejection.** oviDNs are command-like descending neurons for egg laying. They receive excitatory (oviEN) and inhibitory (oviIN) inputs, and pC1 neurons, which carry mating-status input from SAG, feed into this circuit. This is the egg-laying circuit, not the ovipositor-extrusion rejection circuit (causal manipulation plus EM connectivity; FAFB and/or hemibrain, dataset to be confirmed) [HIGH][22]. The live results add that oviDN activation is necessary and sufficient for egg laying and works equally well in virgin and mated females; the oviEN/oviIN identities and the EM dataset were not visible [22].

### 6. Mating state changes what signals mean

The post-mating switch requires the sex peptide receptor (SPR) in a small set of fru+/ppk+ (also dsx+) sensory neurons of the female reproductive tract, later called SPSNs. Silencing these neurons in virgins mimics the mated state: lower receptivity, more egg laying (causal manipulation) [HIGH][18][19][20]. This led to the model that sex peptide acts by reducing their activity; the 2008-2009 papers inferred this silencing rather than recording it directly [HIGH][18][19][20]. The 2020 egg-laying paper states that sex peptide silences these neurons and their ascending targets, consistent with the model [22]. Yang et al. 2009 was not separately searched [20].

SAG ascending neurons in the abdominal ganglion receive SPSN input and carry mating-status information to the central brain. Silencing SAG makes virgin females less receptive and raises egg laying, mimicking the mated state (causal manipulation) [HIGH][21]. The downstream SAG-to-pC1 connection was established later by EM connectomics [HIGH][21][22]. The live results add that activating SAG raises receptivity in mated females; the egg-laying effect of SAG silencing was not visible [21].

The female's reply to courtship thus follows her state: virgins accept through vpoDN-driven plate opening or acceptance-type extrusion, and mated females reject through DNp13-driven extrusion, with mating status acting downstream of DNp13's song responses [MED][23][24][25]. A 2024 eLife paper found by the auditor reports that male cuticular pheromones act through pC1 to promote mating-plug removal and re-mating in mated females (New leads; not independently verified).

### 7. Persistent states and aggression

Activating P1 neurons in males produces a persistent internal state that raises male-male aggression, lasting minutes after stimulation ends, so P1 is an arousal/state hub, not just a courtship "command" neuron (causal manipulation) [MED][28].

In females, optogenetic activation of pC1d/pC1e neurons triggers a persistent internal state lasting minutes that raises female aggression. Imaging showed long-lasting activity, and EM reconstruction in the FAFB volume via FlyWire (the hemibrain may have been used for comparison) revealed recurrent connectivity among pC1d, pC1e and aIPg that could hold that state [MED][26]. aIPg neurons, downstream of pC1d, drive female aggression (head-butting, shoving); split-GAL4 lines plus hemibrain connectivity defined the cell types in the female aggression circuit (causal manipulation plus wiring) [MED][27].

The two female papers place persistence differently. In the live results for Schretter et al., activating pC1d alone gave only time-locked aggression, pC1e activation had no effect, and 30 s of aIPg stimulation gave aggression outlasting the stimulus [MED][27]. A later eLife paper on cell-type-specific contributions to the persistent aggressive state refines which node holds it [37]; the auditor found it but did not verify its findings.

### 8. What the connectomes add, and what they cannot

FlyWire (a single adult female brain, about 139k neurons, hemibrain-matched cell types) lets researchers trace brain-level social inputs, including LC visual neurons, DA1 pheromone PNs and the brain axons of ascending neurons, to the female pC1 cluster and descending neurons. It is wiring only. It lacks the nerve cord and leg sensory neurons, so full contact-pheromone paths need BANC or male-CNS data, and male-specific circuits such as P1 are absent [MED][32][33]. The audit gives the exact size as 139,255 proofread neurons and about 5x10^7 synapses, completed the Schlegel et al. title, and confirmed BANC as a single adult female brain-plus-nerve-cord connectome published in Nature in 2026 (New leads).

The complete male CNS connectome (brain plus nerve cord, one animal; about 166,700 neurons and 11,710 neuron types, fully proofread and annotated for fruitless/doublesex expression) was compared with the female FlyWire brain at synaptic resolution [MED][34]. It found 8,069 isomorphic, 138 dimorphic, 289 male-specific and 71 female-specific types. Sex-specific or dimorphic neurons make up 4.8% of male and 2.4% of female central-brain neurons; they cluster in higher-order centres while the sensory and motor periphery is largely isomorphic, and dimorphism spreads through dimorphic connectivity [MED][34]. Dimorphism status matches fru/dsx expression closely but not perfectly [MED][34]. This claim was unverified in round 1. The live audit confirmed the Cell 2026 journal version, whose title differs from the 2025 bioRxiv preprint's; the author list and any specific P1-vs-pC1 hub comparison were not visible [34]. The auditor also found that the preprint reports higher sensory neuron numbers in males (New leads).

The whole-CNS pattern of shared periphery and dimorphic higher-order centres matches, at a larger scale, this track's circuit-level findings: shared cVA responses in first- and second-order neurons with dimorphic third-order routing [2][4], and conserved ppk23+ detection with a changed central route to P1 across species [11]. This is an interpretation linking separate results, not a tested claim.

The EM dataset behind several female-circuit papers remains unconfirmed by the live results: FAFB via FlyWire for the pC1d/pC1e/aIPg recurrence [MED][26], and FAFB and/or hemibrain for the oviDN circuit [HIGH][22]. For vpoDN, the corrected claim no longer states an EM basis [24]. A 2025 Nature paper found by the auditor matches descending and ascending neuron types across three EM datasets and both sexes, which would help compare these output channels (New leads).

## Results table

Confidence is the tag of the underlying claim; where a row draws on claims with different tags, both are shown.

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| Or67d ORNs (DA1) | Acute cVA responses; acute aggression | Both | Causal manipulation | HIGH | 1, 5 |
| Or65a ORNs | Long-term cVA effects; less aggression after group housing | Male | Causal manipulation | HIGH | 1, 5, 35 |
| DA1 PNs | Relay cVA; responses similar by sex; axon arbors dimorphic | Both | Recorded activity + anatomy | MED | 2 |
| DC1 LHN -> DN1 (descending) | Male cVA path to descending output | Male | Recorded activity | MED | 3 |
| aSP-f / aSP-g LHNs | Sex-specific third-order cVA targets (fru switch) | Male vs female | Recorded activity | MED | 4 |
| DA1 lPNs / vPNs, LHNs | Parallel identity and position streams for cVA | As in study (unconfirmed) | Recorded activity + wiring | MED | 6 |
| ppk23+ F-cells / M-cells | Foreleg sensors for female 7,11-HD vs male 7-T | Male | Recorded activity | MED | 7 |
| Gr32a GRNs | Required for 7-T aggression and male-male courtship suppression | Male | Causal manipulation | HIGH | 12 |
| ppk25+ GRNs | Female receptivity; also male courtship | Both | Causal manipulation | MED | 31 |
| vAB3 | Ascending excitation of P1 by female contact cues | Male | Recorded activity | MED | 9, 11 |
| mAL | GABAergic feedforward inhibition of P1; dominant in *D. simulans* | Male | Recorded activity | MED | 9, 11 |
| PPN1 | Relay named by Kallman et al.; link to mAL -> P1 unconfirmed | Male | Recorded activity | HIGH (claim); PPN1 detail not seen live | 8 |
| P1 | Excited by female contact pheromones, inhibited by 7-T, suppressed by cVA; responds to female contact; gates vision; persistent aggression state | Male | Recorded activity + causal manipulation | HIGH (8); MED (9, 10, 14, 28) | 8, 9, 10, 14, 28 |
| P2b (descending) | Courtship initiation correlated with P1 and/or P2b activation | Male | Causal manipulation (fru+ population, mosaic analysis) | MED | 10 |
| LC10a | Tracks female; aims wing extension; arousal-gated | Male | Causal manipulation + recorded activity | MED | 13, 14 |
| LC population | Combinatorial code for female features | Male | Model prediction + imaging test | MED | 15 |
| pC1 (dsx+) | Responds to cVA and song; bidirectionally controls receptivity | Female | Recorded activity + causal manipulation | HIGH | 17 |
| pC1d / pC1e | Persistent state raising aggression; which node holds it is disputed | Female | Recorded activity + causal + wiring | MED | 26, 27 |
| aIPg | Aggression effector downstream of pC1d; stimulation outlasts stimulus | Female | Causal manipulation + wiring | MED | 27 |
| vpoEN | Auditory; tuned to features of conspecific song; excites vpoDN | Female | Recorded activity | MED | 24 |
| vpoDN (pair) | Controls vaginal plate opening (acceptance) | Female (virgin) | Recorded activity | MED | 24 |
| pC2l | Direct synaptic song input to DNp13 | Female | Causal manipulation | MED | 23 |
| DNp13 | Command-type for ovipositor extrusion; deters males only in mated females | Female (mated) | Causal manipulation | MED | 23 |
| ppk+ uterine sensory neurons (ovulation-activated) | Mating-status signal setting DNp13's engagement of OE motor circuits | Female (mated) | Causal manipulation | MED | 23 |
| oviDN / oviEN / oviIN | Egg laying downstream of pC1 (not rejection) | Female | Causal manipulation + wiring | HIGH | 22 |
| SPSNs (SPR+) | Mating-signal sensors; silencing mimics mated state | Female | Causal manipulation | HIGH | 18, 19, 20 |
| SAG | Carries mating status to brain and pC1 | Female | Causal manipulation + wiring | HIGH | 21, 22 |

## Why this matters for two-way communication with animals

- **A test bed scored by replies already exists.** The female's replies are discrete acts with identified descending neurons, plate opening via vpoDN and extrusion via DNp13 [MED][23][24], and males already adjust song to female distance and speed [MED][29][30]. An artificial partner can be scored by what the animal does next.
- **"Message received" can be measured in neurons for some channels.** Recorded responses exist for contact pheromones at male P1 [HIGH][8], female contact at P1 [MED][10], cVA and song in female pC1 [HIGH][17], and song features in vpoEN and, via pC2l, in DNp13 [MED][23][24]. A sender can be tuned against these readouts. For vibration, the verified claims cover behavior only [MED][16].
- **Context labels are required.** Extrusion means "yes" in virgins and "no" in mated females [MED][23][25], and cVA's effect on aggression reverses with exposure time [HIGH][5][35]. In DNp13, mating status leaves the song response unchanged and changes the motor output [MED][23], so a decoder that reads the sensory response alone would miss the state. A decoder for animal signals, in any species, needs the receiver's internal state as an input.
- **Matching the sensor is not enough across species or sexes.** *D. simulans* detects 7,11-HD with conserved sensors but routes it to P1 differently [MED][11], and between the sexes the male CNS connectome finds a largely isomorphic periphery with dimorphism concentrated in higher-order centres [MED][34]. Artificial signals must be tested against the central response, not only the receptors.
- **Signals can leave minutes-long aftereffects.** Activating P1 or pC1d/pC1e sets states lasting minutes [MED][26][28], and in females the node that holds the state is still being refined [MED][27]. A "conversation" protocol must space exchanges or model the carryover.
- **Limits.** No claim here supports "decoding" fly signals; the evidence covers how specific signals are detected and relayed to the circuits that decide behavior. Wiring-only routes should not be described as neurons "lighting up". A paper confirmed in live search does not confirm every cell name attributed to it; the [MED] notes above mark where details were not visible.

## Open questions

- **Vibration sensing:** which leg neurons turn male quivering into female stopping (the 2021 follow-up [36] reports specific ones), which ascending pathways carry the signal, and do they reach pC1 or vpoDN? Traceable in BANC (New leads). If song and vibration share a male command (New leads), does the female combine the two channels?
- **The male's receiving circuit:** does the male read plate opening, extrusion and slowing by vision (LC types), contact or chemistry, and which neurons carry that reply to P1?
- **Two uterine ppk+ populations:** are the ovulation-activated ppk+ uterine neurons that gate DNp13's motor output [23] the same cells as the SPR+ SPSNs that drive the post-mating switch [18][19]?
- **Where female persistence lives:** pC1d, pC1e, aIPg, or their recurrent loop [26][27][37]?
- **Females as senders:** female copulation song modulated by seminal fluid (Kerwin et al. 2020, named by a verifier), wing flicking and slowing have no mapped neurons here.
- **Chemical marks of mating:** how male-transferred anti-aphrodisiacs (cVA, 7-T, CH503) and post-mating hydrocarbon changes signal mated status to other males, and how male cuticular pheromones act on mated females through pC1 (New leads).
- **Other social channels:** Or65a in females (Lebreton et al. 2014), Or47b and Or88a, IR84a, the IR52 clade and Gr68a are outside this claim set. ppk29 appears only in the live results for [7]. Female song detectors pC2l/pC2m (Deutsch et al. 2019) are covered in Track 02; here pC2l enters only as the direct song input to DNp13 [23].
- **Sex-specific routing:** e.g., a visual-vs-olfactory input switch (Nojima et al. 2021) and shared vs dimorphic aggression logic (Chiu et al. 2021).
- **Wiring vs activity:** do connectome-predicted convergence nodes (P1/pC1, aIPg, vpoEN/vpoDN, pC2l/DNp13) show multisensory responses in vivo, and do synapse weights predict response weights? Do these nodes hold in more than one animal per sex?
- **Neuromodulation:** how the sex-peptide pathway, dopamine, octopamine, tachykinin and SIFamide change the meaning of the same signal; EM wiring cannot show this.
- **Turn-taking:** are there reliable reply latencies and contingencies, measurable in both brains at once (Tracks 01 and 06)?
- **Active queries:** are foreleg tapping and genital licking mechanical as well as chemical probes, and which neurons carry the answers?
- **Coding style:** how much of the repertoire is graded population coding, as the LC result suggests [MED][15], rather than dedicated lines? No claim here covers whole-brain imaging during social stimuli with connectome-matched identities.
- **Evolution and visual displays:** P1 input changes in *D. yakuba* and *D. erecta*, desat-gene hydrocarbon evolution (Track 08), and visual displays in aggression and female assessment of males are not covered.

## Candidate research projects

Listed in suggested priority order.

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Two-sex channel-convergence audit in the connectomes | Non-song channels converge within 3 synapses onto a few dimorphic hubs (P1 in males; pC1, aIPg, vpoEN in females), and dimorphic types sit at these convergence points rather than at sensors, as the whole-CNS pattern in the male connectome suggests [34]. | From entry neurons (DA1 PNs, vAB3, PPN1, LC10a, SAG, pC2l, leg vibration-receiving neurons), compute weighted shortest paths, predicted signs and shared nodes toward pIP10, DNp13, vpoDN, oviDN. FlyWire/Codex and hemibrain for females; the male CNS connectome for P1; BANC for female cord-to-brain paths; the cross-sex descending/ascending neuron map (New leads) to match outputs; MANC/FANC only where their contents are confirmed. Flag each edge activity-confirmed or wiring-only from this track's table. | Computational, now | Build per-channel cell-type lists matched across FlyWire and the male CNS using its isomorphic/dimorphic/sex-specific type annotations; compute sensor-to-hub path lengths and dimorphic-node enrichment. |
| 2. Robotic multimodal suitor with a closed-loop readout of female replies | A partner that adjusts song, vibration and visual motion to the female's replies (slowing, plate opening, extrusion) gets plate opening faster and more reliably than open-loop playback; combined pC1 and vpoEN activity predicts her next reply. | Tethered virgin and mated females with two-photon imaging of pC1, vpoEN, vpoDN (pC2l and DNp13 in mated). Speaker song, piezo vibration, moving visual dummy, optional contact cue. Online pose-based reply classification; stimulus policy updated each trial (bandit or state-space controller). | Wet lab, months | Measure open-loop replies and pC1/vpoEN responses to each channel alone and in pairs. |
| 3. Injecting the female's "yes" and "no" | Optogenetic activation of vpoDN or DNp13 in a female predictably shifts male behavior (copulation attempts vs courtship decline) and male P1 and LC10a-pathway activity, revealing the male's receiving circuit. Because extrusion deters males only when mated females perform it [23] and signals acceptance in virgins [25], DNp13 activation in virgin vs mated females tests which additional cues males read. | Female-restricted CsChrimson activation of vpoDN or DNp13 in virgin and mated females in courting pairs, and with tethered males under imaging of P1 and visual-pathway neurons; track song and approach. | Wet lab, months | Behavior only: activate vpoDN or DNp13 in virgin and mated females paired with wild-type males; measure male song and copulation-attempt timing. |
| 4. Mapping the vibration channel in females | The leg neurons reported to receive male vibration [36] reach pC1 or locomotor-arrest circuits via specific ascending neurons; silencing them abolishes vibration-induced immobility. | Playback of 4-6 Hz quivering-like vibration to walking and tethered females; calcium imaging of BANC-selected ascending neurons and pC1; then silencing and activation. | Wet lab, months (first step computational) | Read [36] for the receptor-neuron identity, then trace those neurons and their ascending partners toward pC1, vpoDN or locomotor regions in BANC. |
| 5. State-aware "reply decoder" for fly courtship | Models that include partner state (mating status, arousal) predict signal meaning and next responses much better than state-blind models (virgin extrusion -> copulation attempt; mated extrusion -> male deterred). The DNp13 result, where mating status changes motor engagement but not song responses [23], predicts that state enters at the output stage. | Multi-animal pose and audio data of virgin vs mated pairs (SLEAP, FlyTracker, JAABA); GLM-HMM models; compare state-aware vs state-blind prediction; validate states against Track 04 imaging. | Computational, now | Re-analyze a public courtship dataset with extrusion and slowing labeled by mating status. |
| 6. Simultaneous two-brain imaging during courtship | In successful courtship, male P1 and female pC1 activity couple over seconds, and coupling breaks before rejection. | Two linked imaging rigs; each head-fixed fly's live behavior drives the other's virtual partner. | Moonshot | "Linked-VR" pilot: a tethered male's wing and song output drives a tethered female's stimuli, and her reply drives his visual target. |

## New leads from live search (2025-2026)

Found by the round-2 auditor; not independently verified. All are primary sources.

- [MED] **BANC, a brain-and-cord connectome.** A connectome of the brain and ventral nerve cord of a single adult female fly was reconstructed and annotated as an open resource; it shows neural control of behaviour to be distributed, parallel and embodied, and allows sensory-to-motor tracing across the neck connective, which FlyWire lacks. "Distributed control circuits across a brain-and-cord connectome", Nature, 2026. Relevance: female leg contact-chemosensory and vibration inputs can be traced to pC1, vpoDN and DNp13 in one animal. https://www.nature.com/articles/s41586-026-10735-w
- [MED] **Cross-sex descending and ascending neuron map.** A complete connectomic description of ascending and descending neurons, integrating three EM datasets with cell types matched across hemispheres, datasets and sexes, including stereotypy and sexual dimorphism; 51% of DN types are matched to driver lines. "Comparative connectomics of Drosophila descending and ascending neurons", Nature, 2025. Relevance: compares output channels (oviDN, vpoDN, DNp13, P1-driven DNs) and ascending status signals such as SAG across sexes. https://www.nature.com/articles/s41586-025-08925-z
- [MED] **Shared command for song and vibration.** The same brain neurons that drive male courtship song also control substrate-borne vibrations through separate premotor pathways with cell-type-specific dynamics, so one command signal is routed to two channels depending on context. "A neural circuit for context-dependent multimodal signaling in Drosophila", Nature Communications, 2025. Relevance: links the vibration and song channels at the circuit level, which matters for multimodal playback design. https://www.nature.com/articles/s41467-025-64907-9
- [MED] **Male CNS connectome: sensory neuron numbers.** The male CNS connectome annotates sensory neurons and reports higher sensory neuron numbers in males, which may help them sustain pheromone responses during prolonged courtship. bioRxiv preprint, 2025 (Cell 2026 version; same resource as [34]). Relevance: primary resource for a synapse-level P1 and pC1 comparison; the preprint and journal titles differ. https://www.biorxiv.org/content/10.1101/2025.10.09.680999v1
- [MED] **Structure of the cVA receptor.** Cryo-EM structures of the Or67d-Orco receptor complex reveal the structural mechanism of cVA sensing. "Cryo-EM structures of Drosophila OR67d-Orco complexes reveal insect pheromone sensing mechanism", Cell Research, 2026. Relevance: molecular basis of the entry point to the cVA channel, useful for designing synthetic agonists as "words" in a two-way signalling system. https://www.nature.com/articles/s41422-026-01264-2
- [MED] **A pC1-mediated post-mating reply.** Male cuticular pheromones stimulate mated females to remove the mating plug and promote re-mating, acting through pC1 neurons. "Male cuticular pheromones stimulate removal of the mating plug and promote re-mating through pC1 neurons in Drosophila females", eLife, 2024 (predates the 2025-2026 window; included because the auditor surfaced it). Relevance: extends the pC1 hub to a post-mating reply channel and shows contact pheromones can reverse the mated-state switch. https://elifesciences.org/articles/96013

## Leads needing confirmation

- **aSP-f in males, aSP-g in females:** the live results confirm one cluster responding in each sex but not the labels, the sex assignment or the optogenetic stimulation method [MED][4].
- **PPN1:** whether 7-T -> PPN1 -> mAL -> P1 is a mapped chain, and whether PPN1 figures in the *D. simulans* change [MED][8][11].
- **Taisz et al. details:** fly sex, whether the split is in the lateral horn, which connectome was used, and which links were recorded vs inferred from wiring [LOW][6].
- **Kohatsu et al. details:** the foreleg-contact calcium result (and the female-abdomen specifics recalled in round 1) was not described in the live results. The round-1 single-verifier recollection that P1 was activated with ATP/P2X2 is not supported; the live results describe dTrpA1 activation of fru+ neurons [MED][10].
- **Single-verifier recollections still unchecked:** P1 activation in *D. simulans* overcame the aversion, placing the change at or upstream of P1 [LOW][11]; Or65a acts on mated females (Lebreton et al. 2014) [LOW][1]; internal state shapes song choice (Calhoun et al. 2019) [LOW][29].
- **ppk23 M-cells and cVA:** both round-1 verifiers recall M-cells also responding to cVA, but this is outside the verified claim wording [MED][7].
- **SAG:** imaging evidence for SAG activity after mating is uncertain [LOW][21]; the egg-laying half of the SAG-silencing result was not visible in the live results [21].
- **Extrusion vs retraction:** check the acceptance-signal wording against the Mezzera et al. abstract [MED][25].
- **EM datasets:** FAFB via FlyWire for [26], FAFB and/or hemibrain for [22], and whatever EM data underlie [24] are unconfirmed.
- **Male CNS connectome:** the Cell 2026 author list and any published P1-vs-pC1 comparison were not visible [MED][34].
- **MANC and FANC contents:** the researcher described them as holding the ascending and descending ends of each channel; no verified claim supports this [LOW]. BANC is now a new lead above.
- **FlyWire-based dimorphism work:** the auditor named "Sexually-dimorphic neurons in the Drosophila whole-brain connectome" without authors, venue or URL [LOW].
- **Sources not searched in the audit:** Yang et al. 2009 [20], Coen et al. 2016 [30], Jung et al. 2020 on P1a (see [28]), and the companion papers listed under [7] and [12]. The author list for [28] was not shown in the live result.
- **Researcher channel-map items without claims:** male 7-T raising female receptivity through ppk25 neurons [LOW]; LC11 and social freezing (Ferreira and Moita 2020) [LOW]; pIP10 as the P1-downstream song descending neuron (Track 01) [LOW].

## Claims dropped in verification

No claim was dropped in either round; all 30 were kept.

Parts removed or rewritten in round 1 (still accurate after the live audit):

- Or67d as "the single class" of cVA neurons was limited to acute responses; Or65a carries long-term effects.
- The "connectome wiring" label on the Datta et al. result was removed (anatomy plus electrophysiology); the demonstrated third-order dimorphism belongs to Kohl et al. 2013, not Datta et al. 2008.
- "Aggression rises as cVA builds with density" was removed; long-term exposure suppresses aggression via Or65a.
- "7-T -> PPN1 -> mAL -> P1" was downgraded to unconfirmed; it mixed two labs' cell names.
- PPN1's role in the *D. simulans* mechanism was hedged.
- "Gr32a GRNs detect 7-T" became "required for 7-T-dependent behavior".
- "pC1 is the female multisensory integrator" was narrowed to subtype roles.
- "Sex peptide silences SPSNs" was reclassified from observation to inference for the 2008-2009 papers.
- Credit for the SAG -> pC1 link moved from Feng et al. 2014 to Wang F et al. 2020.
- "Hemibrain connectivity" for the oviDN circuit was generalized to FAFB and/or hemibrain, dataset unconfirmed.
- "Hemibrain" for the pC1d/pC1e/aIPg recurrence was replaced by FAFB via FlyWire.
- The song-amplitude result was moved to Coen et al. 2016, and "sensed mainly visually" was removed.
- FlyWire tracing of ascending gustatory paths was qualified (no nerve cord, leg neurons or P1).
- Seed brief: "OviEN/OviDN = rejection circuit" was replaced; they control egg laying, and DNp13 commands rejection [22][23].
- Seed brief: "LC11 in Ribeiro et al. 2018" was replaced; that paper is about LC10a [13].

Parts removed or rewritten in round 2 (live audit):

- Kohatsu et al.: "activating P1 triggered courtship" was replaced by dTrpA1 activation of fru+ neurons, with courtship initiation correlated with P1 and/or P2b activation; "foreleg contact with the female abdomen evoked P1 calcium responses" became "female contact evoked activity in P1".
- DNp13: the round-1 hedge that song and mating status (possibly via pC1) combine onto DNp13 was replaced by direct pC2l song input, a mating-status effect on motor engagement from ovulation-activated ppk+ uterine neurons, and distinct VPO and OE circuits.
- vpoDN: venue corrected from Neuron to Nature; "pulse song" became "specific features of *D. melanogaster* courtship song"; pC1 carrying male pheromone cues and the EM-connectivity statement were removed.
- FlyWire: the Schlegel et al. title was completed and BANC was confirmed as a female brain-plus-cord connectome.
- Male CNS connectome: the unverified recollection of a 2025 preprint was replaced by the confirmed Cell 2026 paper and its quantitative findings.

## Sources

1. A single class of olfactory neurons mediates behavioural responses to a Drosophila sex pheromone -- Kurtovic A, Widmer A, Dickson BJ -- Nature 446:542-546, 2007 -- https://www.nature.com/articles/nature05672
2. The Drosophila pheromone cVA activates a sexually dimorphic neural circuit -- Datta SR, Vasconcelos ML, Ruta V, Luo S, Wong A, Demir E, Flores J, Balonze K, Dickson BJ, Axel R -- Nature 452:473-477, 2008 -- https://www.nature.com/articles/nature06808
3. A dimorphic pheromone circuit in Drosophila from sensory input to descending output -- Ruta V, Datta SR, Vasconcelos ML, Freeland J, Looger LL, Axel R -- Nature 468:686-690, 2010 -- https://pubmed.ncbi.nlm.nih.gov/21124455/
4. A bidirectional circuit switch reroutes pheromone signals in male and female brains -- Kohl J, Ostrovsky AD, Frechter S, Jefferis GSXE -- Cell 155(7):1610-1623, 2013 -- https://pubmed.ncbi.nlm.nih.gov/24360281/
5. Identification of an aggression-promoting pheromone and its receptor neurons in Drosophila -- Wang L, Anderson DJ -- Nature, 2010 -- https://www.nature.com/articles/nature08678
6. Generating parallel representations of position and identity in the olfactory system -- Taisz I, Dona E, Munch D, Bailey SN, Morris BJ, Meechan KI, Stevens KM, Varela-Martinez I, Gkantia M, Schlegel P, Ribeiro C, Jefferis GSXE, Galili DS -- Cell 186(12):2556-2573.e22, 2023 -- https://pubmed.ncbi.nlm.nih.gov/37236194/
7. Contact chemoreceptors mediate male-male repulsion and male-female attraction during Drosophila courtship -- Thistle R, Cameron P, Ghorayshi A, Dennison L, Scott K -- Cell 149(5):1140-1151, 2012 -- https://www.cell.com/fulltext/S0092-8674(12)00523-5. Companion papers (titles not given): Toda H, Zhao X, Dickson BJ, Cell Reports 2012; Lu B et al., PLoS Genetics 2012.
8. Excitation and inhibition onto central courtship neurons biases Drosophila mate choice -- Kallman BR, Kim H, Scott K -- eLife 4:e11188, 2015 -- https://elifesciences.org/articles/11188
9. Multimodal chemosensory circuits controlling male courtship in Drosophila -- Clowney EJ, Iguchi S, Bussell JJ, Scheer E, Ruta V -- Neuron 87(5):1036-1049, 2015 -- https://pubmed.ncbi.nlm.nih.gov/26279475/
10. Female contact activates male-specific interneurons that trigger stereotypic courtship behavior in Drosophila -- Kohatsu S, Koganezawa M, Yamamoto D -- Neuron 69(3):498-508, 2011 -- https://pubmed.ncbi.nlm.nih.gov/21315260/
11. Evolution of a central neural circuit underlies Drosophila mate preferences -- Seeholzer LF, Seppo M, Stern DL, Ruta V -- Nature, 2018 -- https://www.nature.com/articles/s41586-018-0322-9
12. Hierarchical chemosensory regulation of male-male social interactions in Drosophila -- Wang L, Han X, Mehren J, Hiroi M, Billeter JC, Miyamoto T, Amrein H, Levine JD, Anderson DJ -- Nature Neuroscience, 2011 -- https://www.nature.com/articles/nn.2800. See also Miyamoto T, Amrein H, Nature Neuroscience 2008 (title not given).
13. Visual projection neurons mediating directed courtship in Drosophila -- Ribeiro IMA, Drews M, Bahl A, Machacek C, Borst A, Dickson BJ -- Cell 174(3):607-621, 2018 -- https://www.cell.com/cell/fulltext/S0092-8674(18)30788-8
14. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature 595:549-553, 2021 -- https://www.nature.com/articles/s41586-021-03714-w. Preprint title: "An arousal-gated visual circuit controls pursuit during Drosophila courtship" (bioRxiv).
15. Mapping model units to visual neurons reveals population code for social behaviour -- Cowley BR, Calhoun AJ, Rangarajan N, Ireland E, Turner MH, Pillow JW, Murthy M -- Nature 629:1100-1108, 2024 -- https://www.nature.com/articles/s41586-024-07451-8
16. Substrate-borne vibratory communication during courtship in Drosophila melanogaster -- Fabre CCG, Hedwig B, Conduit G, Lawrence PA, Goodwin SF, Casal J -- Current Biology, 2012 -- https://pubmed.ncbi.nlm.nih.gov/23103187/
17. Central brain neurons expressing doublesex regulate female receptivity in Drosophila -- Zhou C, Pan Y, Robinett CC, Meissner GW, Baker BS -- Neuron, 2014 -- https://pubmed.ncbi.nlm.nih.gov/24991959/
18. A receptor that mediates the post-mating switch in Drosophila reproductive behaviour -- Yapici N, Kim YJ, Ribeiro C, Dickson BJ -- Nature 451:33-37, 2008 -- https://www.nature.com/articles/nature06483
19. Sensory neurons in the Drosophila genital tract regulate female reproductive behavior -- Häsemeyer M, Yapici N, Heberlein U, Dickson BJ -- Neuron 61:511-518, 2009 -- https://pubmed.ncbi.nlm.nih.gov/19249272/
20. Control of the postmating behavioral switch in Drosophila females by internal sensory neurons -- Yang CH, Rumpf S, Xiang Y, Gordon MD, Song W, Jan LY, Jan YN -- Neuron, 2009 -- URL not verified.
21. Ascending SAG neurons control sexual receptivity of Drosophila females -- Feng K, Palfreyman MT, Häsemeyer M, Talsma A, Dickson BJ -- Neuron 83(1):135-148, 2014 -- https://pubmed.ncbi.nlm.nih.gov/24991958/
22. Neural circuitry linking mating and egg laying in Drosophila females -- Wang F, Wang K, Forknall N, Patrick C, Yang T, Parekh R, Bock D, Dickson BJ -- Nature 579(7797):101-105, 2020 -- https://www.nature.com/articles/s41586-020-2055-9
23. Circuit and behavioral mechanisms of sexual rejection by Drosophila females -- Wang F, Wang K, Forknall N, Parekh R, Dickson BJ -- Current Biology, 2020 -- https://pubmed.ncbi.nlm.nih.gov/32795445/
24. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Nature 589(7843):577-581, 2021 (bioRxiv 10.1101/2020.08.07.241919) -- https://www.nature.com/articles/s41586-020-2972-7
25. Ovipositor extrusion promotes the transition from courtship to copulation and signals female acceptance in Drosophila melanogaster -- Mezzera C, Brotas M, Gaspar M, Pavlou HJ, Goodwin SF, Vasconcelos ML -- Current Biology 30(19):3736-3748.e5, 2020 -- https://pubmed.ncbi.nlm.nih.gov/32795437/
26. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco D, Encarnacion-Rivera L, Pereira T, Fathy R, Clemens J, Girardin C, Calhoun A, Ireland E, Burke A, Dorkenwald S, McKellar C, Macrina T, Lu R, Lee K, Kemnitz N, Ih D, Castro M, Halageri A, Jordan C, Silversmith W, Wu J, Seung HS, Murthy M -- eLife, 2020 (EM data: FAFB via FlyWire) -- https://elifesciences.org/articles/59502
27. Cell types and neuronal circuitry underlying female aggression in Drosophila -- Schretter CE, Aso Y, Robie AA, Dreher M, Dolan MJ, Chen N, Ito M, Yang T, Parekh R, Branson KM, Rubin GM -- eLife, 2020 -- https://elifesciences.org/articles/58942
28. P1 interneurons promote a persistent internal state that enhances inter-male aggression in Drosophila -- Hoopfer ED, Jung Y, Inagaki HK, Rubin GM, Anderson DJ -- eLife, 2015 -- https://elifesciences.org/articles/11346. See also Jung Y et al., Neuron 2020, on P1a (title not given).
29. Dynamic sensory cues shape song structure in Drosophila -- Coen P, Clemens J, Weinstein AJ, Pacheco DA, Deng Y, Murthy M -- Nature 507:233-237, 2014 -- https://www.nature.com/articles/nature13131
30. Sensorimotor transformations underlying variability in song intensity during Drosophila courtship -- Coen P, Xie M, Clemens J, Murthy M -- Neuron, 2016 -- URL not verified.
31. Drosophila pheromone-sensing neurons expressing the ppk25 ion channel subunit stimulate male courtship and female receptivity -- Vijayan V, Thistle R, Liu T, Starostina E, Pikielny CW -- PLoS Genetics 10(3):e1004238, 2014 -- https://journals.plos.org/plosgenetics/article?id=10.1371%2Fjournal.pgen.1004238
32. Neuronal wiring diagram of an adult brain -- Dorkenwald S et al. (FlyWire Consortium) -- Nature, 2024 (PubMed 37425937) -- https://www.nature.com/articles/s41586-024-07558-y
33. Whole-brain annotation and multi-connectome cell typing quantifies circuit stereotypy in Drosophila -- Schlegel P et al. (FlyWire Consortium) -- Nature, 2024 -- URL not verified.
34. Sexual dimorphism in the complete Drosophila male central nervous system connectome -- Berg S, Beckett IR, Costa M, Schlegel P, ... Jefferis GSXE et al. (author list not visible in search results) -- Cell, 2026 (PII S0092-8674(26)00942-6; PubMed 42691995) -- https://www.sciencedirect.com/science/article/pii/S0092867426009426. Preprint: "Sexual dimorphism in the complete connectome of the Drosophila male central nervous system", bioRxiv 10.1101/2025.10.09.680999, 2025 -- https://www.biorxiv.org/content/10.1101/2025.10.09.680999v1. Project page: https://www.janelia.org/project-team/flyem/male-cns-connectome
35. Social regulation of aggression by pheromonal activation of Or65a olfactory neurons in Drosophila -- Liu W, Liang X, Gong J et al. -- Nature Neuroscience 14:896-902, 2011 -- https://www.nature.com/articles/nn.2836
36. Drosophila females receive male substrate-borne signals through specific leg neurons during courtship -- authors not given in the audit -- Current Biology, 2021 (PubMed 34174209) -- URL not verified. Found by the auditor; findings not independently verified.
37. Cell type-specific contributions to a persistent aggressive internal state in female Drosophila -- authors not given in the audit -- eLife, year not given -- https://elifesciences.org/articles/88598. Found by the auditor; findings not independently verified.

## Verification ledger

| # | Claim (at most 15 words) | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | Or67d ORNs required for acute cVA responses; Or65a carries long-term effects | HIGH | confirmed | 1, 35 |
| 2 | cVA responses match across sexes; DA1 PN lateral-horn arbors dimorphic, fru-dependent | MED | confirmed | 2 |
| 3 | Male cVA path Or67d ORN -> DA1 PN -> DC1 -> DN1 traced and recorded | MED | confirmed | 3 |
| 4 | fru-dependent switch routes cVA to different lateral horn classes by sex | MED | confirmed | 4 |
| 5 | Acute cVA raises aggression via Or67d; chronic exposure lowers it via Or65a | HIGH | confirmed | 5, 35 |
| 6 | cVA processing splits into parallel identity and position streams | MED | confirmed | 6 |
| 7 | Foreleg ppk23+ F-cells sense 7,11-HD; M-cells sense male pheromones such as 7-T | MED | confirmed | 7 |
| 8 | Female pheromones excite P1, 7-T inhibits it; PPN1 chain unconfirmed | HIGH | confirmed | 8 |
| 9 | P1 excited via vAB3, gated by mAL inhibition, suppressed by cVA | MED | confirmed | 9 |
| 10 | fru+ activation induces courtship, correlated with P1/P2b; female contact activates P1 | MED | corrected | 10 |
| 11 | *D. simulans*: 7,11-HD detection conserved; central balance at P1 shifts to inhibition | MED | confirmed | 11 |
| 12 | Gr32a neurons required for 7-T-driven aggression and male-male courtship suppression | HIGH | confirmed | 12 |
| 13 | LC10a needed for tracking the female and orienting wing extension | MED | confirmed | 13 |
| 14 | Arousal (P1) gates LC10a-pathway visual signals that drive pursuit | MED | confirmed | 14 |
| 15 | Knockout-trained network predicts a combinatorial LC population code for female features | MED | confirmed | 15 |
| 16 | Male abdominal quivering vibrations make females stop; playback reproduces stopping | MED | confirmed | 16 |
| 17 | Female dsx+ pC1 responds to cVA and song, bidirectionally controls receptivity | HIGH | confirmed | 17 |
| 18 | SPR in fru+/ppk+ reproductive-tract neurons mediates the post-mating switch | HIGH | confirmed | 18, 19, 20 |
| 19 | SAG ascending neurons carry mating status; SAG-to-pC1 link later shown by EM | HIGH | confirmed | 21, 22 |
| 20 | oviDNs command egg laying, with oviEN/oviIN inputs and pC1 upstream | HIGH | confirmed | 22 |
| 21 | DNp13 commands extrusion; direct pC2l song input; mating status gates motor engagement | MED | corrected | 23 |
| 22 | Female-specific vpoDNs control plate opening, fed by song-tuned vpoEN and pC1 | MED | corrected | 24 |
| 23 | In virgins, ovipositor extrusion signals acceptance and promotes copulation | MED | confirmed | 25 |
| 24 | pC1d/pC1e activation sets minutes-long aggressive state; recurrent pC1d-pC1e-aIPg wiring | MED | confirmed | 26 |
| 25 | aIPg neurons downstream of pC1d drive female aggression | MED | confirmed | 27 |
| 26 | P1 activation produces a persistent state that raises male aggression | MED | confirmed | 28 |
| 27 | Males set song type and amplitude by female distance and speed | MED | confirmed | 29, 30 |
| 28 | Female ppk25+ neurons promote receptivity; ppk25 also supports male courtship | MED | confirmed | 31 |
| 29 | FlyWire: one female brain, wiring only; lacks nerve cord, leg neurons, P1 | MED | corrected | 32, 33 |
| 30 | Male CNS connectome: dimorphism concentrated in higher-order centres, periphery largely isomorphic | MED | corrected | 34 |
