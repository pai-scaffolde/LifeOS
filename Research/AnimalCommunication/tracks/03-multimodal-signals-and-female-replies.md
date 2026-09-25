# Track 03 -- Beyond song: pheromones, vision, touch, vibration, and the female side of the dialogue

*Interspecies Communication Research Program · 2026-09-25 · 30 claims kept of 30 checked (14 verified / 15 corrected / 0 conflict / 1 unverified) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

*Verification note: no claim in this track was checked against a web source. The search budget was spent, and fetches to Europe PMC and OpenAlex were blocked. The researcher worked from memory, and two verifiers judged each claim against their own recall. "Verified" means "matches two verifiers' recall of a known paper", so no claim carries [HIGH] and no URL was confirmed. Where the verifiers split, the claim was corrected rather than marked [CONFLICT]. All work is in* Drosophila melanogaster *unless noted.*

## Bottom line

- Yes: outside song, neurons have been recorded responding to fly communication signals. Male P1 neurons respond to female contact pheromones and to foreleg touch of the female abdomen [MED][8][9][10]. The male cVA pathway was recorded from olfactory receptor neuron to a descending neuron [MED][3]. Female pC1 neurons respond to cVA and courtship song [MED][17], and female vpoEN neurons are tuned to conspecific pulse song and feed the vpoDN acceptance command [MED][24].
- The non-song channels converge on a few sexually dimorphic hubs: P1 in males and pC1 subtypes in females. These hubs set persistent states (arousal, aggression) lasting minutes. They are not one-message command neurons [MED][14][26][28].
- The female's replies have identified output neurons. vpoDN commands acceptance by vaginal plate opening [MED][24], and DNp13 commands rejection by ovipositor extrusion in mated females [MED][23]. oviDN/oviEN/oviIN form an egg-laying circuit, not a rejection circuit, which corrects the seed brief [MED][22].
- The receiver's state decides what a signal means. Ovipositor extrusion signals acceptance in virgins and rejection in mated females [MED][23][25]. Acute cVA raises male aggression through Or67d, while long-term exposure lowers it through Or65a [MED][5][35]. Sex peptide, acting through reproductive-tract sensory neurons and SAG ascending neurons, switches the female into the mated state [MED][18][19][20][21]. A state-blind "dictionary" of fly signals will misread them.
- Two arms of the loop have no mapped neurons. For how females sense male substrate vibration, only behavior is known [MED][16]. How males sense the female's replies is not covered by any verified claim.
- Connectomes show candidate routes, not activity. FlyWire is one female brain with no nerve cord, no leg sensory neurons and no male-specific P1 [MED][32][33]. The male CNS connectome that would allow a same-method P1 vs pC1 comparison is confirmed here only as a recalled 2025 preprint [LOW][34]. Because verification was recall-only, no claim in this track is rated above MED.
- The three most tractable next steps: a computational convergence audit across the female and male connectomes; a closed-loop multimodal "suitor" that reads female replies and adjusts its signals; and optogenetic injection of a female "yes" (vpoDN) or "no" (DNp13) to find the male's receiving circuit.

## What the evidence shows

Evidence types: **recorded activity** (calcium imaging or electrophysiology in identified neurons), **causal manipulation** (activating or silencing changes behavior), **anatomy** (light microscopy), **wiring only** (EM connectome), **behavior only**, **model prediction**.

### 1. Male receiving: contact pheromones and touch converge on P1

On the male foreleg, ppk23+ gustatory neurons form two subtypes in calcium imaging: "F-cells" respond to the female pheromone 7,11-HD, and "M-cells" respond to male pheromones such as 7-T (recorded activity) [MED][7]. ppk23 neurons are needed both for courting females and for male-male courtship repulsion (causal manipulation) [MED][7].

Gr32a-expressing gustatory neurons are required for 7-T to promote male aggression and for normal suppression of male-male courtship (causal manipulation) [MED][12]. Whether Gr32a neurons detect 7-T themselves is disputed, because ppk23+ M-cells also respond to 7-T [MED][7][12]. ppk25-expressing pheromone-sensing neurons promote male courtship and female receptivity (causal manipulation) [LOW][31].

These contact signals meet at P1. P1 is excited by female contact pheromones via vAB3 ascending neurons and gated by feedforward inhibition via GABAergic mAL, and the volatile pheromone cVA suppresses P1 excitation. This was recorded in ex vivo and in vivo preparations with foreleg stimulation [MED][9]. Separate P1 calcium imaging showed female contact pheromones exciting P1 and 7-T inhibiting it, a balance that biases mate choice [MED][8]. PPN1 relay neurons (Scott lab naming) and vAB3/mAL (Ruta lab naming) come from different studies, and the exact chain 7-T -> PPN1 -> mAL -> P1 is unconfirmed [MED][8].

Touch alone registers at P1. In tethered males walking on a ball, foreleg contact with a female's abdomen evoked P1 calcium responses, and activating P1 triggered courtship-like behavior (recorded activity plus causal manipulation) [MED][10].

Evolution retuned the integrator, not the sensor. In *D. simulans*, 7,11-HD (a *D. melanogaster* female pheromone) suppresses male courtship, although ppk23+ detection is conserved [MED][11]. In *D. melanogaster*, 7,11-HD excites P1 via vAB3. In *D. simulans*, the balance shifts toward mAL-mediated inhibition, so P1 is not activated (calcium imaging in both species) [MED][11].

### 2. The volatile pheromone cVA, from receptor to descending neuron

Or67d ORNs (DA1 glomerulus) are required for acute behavioral responses to cVA. Without Or67d, males court other males more and females are less receptive (causal manipulation) [MED][1]. Or65a ORNs, a second cVA-sensitive class, carry the effects of long-term exposure, so "single class" applies only to acute responses [MED][1][35].

Or67d ORNs and DA1 projection neurons (PNs) respond to cVA similarly in both sexes (electrophysiology), but DA1 PN axon arbors in the lateral horn are sexually dimorphic and fruitless-dependent (light-microscopy anatomy, not a connectome) [MED][2]. The dimorphism therefore appears to lie in how DA1 PNs connect to third-order lateral horn neurons [MED][2].

In males, a four-step pathway was traced and recorded: Or67d ORN -> DA1 PN -> fru+ DC1 lateral horn neuron -> fru+ DN1 descending neuron, with DN1 responding to cVA (recorded activity) [MED][3]. "DN1" is a descending neuron here, not a clock neuron, and its match to connectome names is unchecked [MED][3].

cVA is routed to different dimorphic lateral horn classes (aSP-f, aSP-g) in males and females through a fruitless-dependent "bidirectional circuit switch", shown by in vivo whole-cell recordings with DA1 PN stimulation [MED][4]. Which class serves which sex needs confirming against the paper [MED][4].

Combining connectomes with physiology, cVA processing splits in the lateral horn into parallel pathways representing the identity of the pheromone source and its position relative to the receiving fly [LOW][6].

In behavior, acute cVA promotes male-male aggression through Or67d, long-term exposure from group housing reduces aggression through Or65a, and cVA also suppresses male-male courtship (causal manipulation) [MED][5][35].

### 3. Vision: tracking the partner, gated by arousal

LC10a visual projection neurons are needed for a courting male to track the female and orient his unilateral wing extension toward her; silencing them impairs visual pursuit (causal manipulation) [MED][13]. Arousal gates this channel. In two-photon imaging of tethered males, LC10a-pathway visual signals drove pursuit only when males were aroused, and optogenetic P1 activation made males pursue a moving target (recorded activity plus causal manipulation) [MED][14]. Whether the gate sits at LC10a or downstream is open [MED][14].

A deep network trained with "knockout training" on male courtship behavior mapped model units onto LC types. It predicted that female position, size and heading are carried by a combinatorial population code across many LC types, not by dedicated channels, and the prediction was tested against LC imaging (model prediction) [MED][15].

Males also use female cues to shape their own signals in real time. The choice between pulse and sine song depends on male-female distance and female speed [MED][29], and amplitude is adjusted to distance [MED][30] (behavior). Vision contributes but was not shown to be the main channel [MED][29].

### 4. Substrate vibration: behavior only

Courting males quiver their abdomens and send substrate-borne vibrations. Females respond by becoming immobile, which helps copulation, and artificial vibration playback reproduces the response (behavior only) [MED][16]. No neuron in this channel is identified: not the female sensor, the ascending pathway, or any route to pC1 [MED][16].

### 5. Female receiving and replying

In virgin females, dsx+ pC1 neurons respond to cVA and courtship song in calcium imaging, and their activity controls receptivity in both directions (recorded activity plus causal manipulation) [MED][17]. pC1 is heterogeneous: later work assigns receptivity and mating status mainly to pC1a and related subtypes, and aggression and persistent state to pC1d/pC1e [MED][17].

**Acceptance.** Virgin females signal acceptance by vaginal plate opening (VPO), commanded by vpoDN descending neurons [MED][24]. vpoDN combine excitation from vpoEN, which are tuned to conspecific pulse song in calcium imaging, with input from pC1 neurons that report mating status and male pheromone cues; EM connectivity (hemibrain and/or FAFB) supports these links [MED][24]. This is the track's clearest female case of a neuron recorded responding to a male signal and wired to the reply it drives [MED][24]. In virgins, ovipositor extrusion also signals acceptance: it prompts male copulation attempts and helps the move from courtship to copulation (behavior) [MED][25].

**Rejection.** Mated females reject courting males by ovipositor extrusion, and DNp13 descending neurons are command-like neurons for this act (causal manipulation) [MED][23]. How song and mating status (possibly via pC1) combine onto DNp13 is unconfirmed [MED][23].

**Egg laying, not rejection.** oviDNs are command-like descending neurons for egg laying, with excitatory (oviEN) and inhibitory (oviIN) inputs; pC1, carrying mating-status input from SAG, feeds into this circuit (causal manipulation plus EM connectivity, dataset unconfirmed) [MED][22].

### 6. Mating state changes what signals mean

The post-mating switch requires the sex peptide receptor (SPR) in a small set of fru+/ppk+ (also dsx+) reproductive-tract sensory neurons, later called SPSNs. Silencing them in virgins mimics the mated state: lower receptivity, more egg laying (causal manipulation) [MED][18][19][20]. That sex peptide reduces SPSN activity was inferred from these manipulations, not recorded [MED][18][19][20].

SAG ascending neurons receive SPSN input and carry mating status to the brain; silencing SAG in virgins lowers receptivity and raises egg laying (causal manipulation) [MED][21]. The SAG-to-pC1 connection was established later by EM (wiring) [MED][22]. The female's reply to courtship thus follows her state: virgins accept through vpoDN-driven plate opening or acceptance-type extrusion, and mated females reject through DNp13-driven extrusion [MED][23][24][25].

### 7. Persistent states and aggression

Activating P1 in males produces a persistent state that raises male-male aggression for minutes after stimulation ends, so P1 is an arousal/state hub, not only a courtship "command" neuron (causal manipulation) [MED][28]. In females, optogenetic activation of pC1d/pC1e triggers a minutes-long persistent state that raises aggression; imaging showed long-lasting activity, and FAFB reconstruction via FlyWire revealed recurrent pC1d-pC1e-aIPg connectivity that could hold the state [MED][26]. aIPg neurons downstream of pC1d drive female aggression (head-butting, shoving), with cell types defined by split-GAL4 lines and hemibrain connectivity (causal manipulation plus wiring) [MED][27].

### 8. What the connectomes add, and what they cannot

FlyWire (one adult female brain, about 139k neurons, cell types matched to the hemibrain) lets researchers trace LC visual neurons, DA1 pheromone PNs and the brain axons of ascending neurons to the female pC1 cluster and descending neurons (wiring only) [MED][32][33]. It lacks the nerve cord and leg sensory neurons, so complete contact-pheromone paths need BANC or male-CNS data; it lacks male-specific P1; and it cannot show state-dependent function [MED][32][33].

The complete male CNS connectome (brain plus nerve cord, one animal) is reported to have been compared with FlyWire to catalogue dimorphic and sex-specific cell types, many fru+/dsx+, which would allow a synapse-level P1 vs pC1 comparison [LOW][34]. Only a 2025 preprint is recalled; the Cell 2026 version is unconfirmed [LOW][34].

The EM dataset behind three female-circuit papers is uncertain: FAFB via FlyWire rather than the hemibrain for the pC1d/aIPg recurrence [MED][26], and FAFB and/or hemibrain for the oviDN and vpoDN circuits [MED][22][24].

## Results table

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| Or67d ORNs (DA1) | Acute cVA responses; acute aggression | Both | Causal manipulation | MED | 1, 5 |
| Or65a ORNs | Long-term cVA effects; less aggression after group housing | Male | Causal manipulation | MED | 1, 5, 35 |
| DA1 PNs | Relay cVA; responses similar by sex; axon arbors dimorphic | Both | Recorded activity + anatomy | MED | 2 |
| DC1 LHN -> DN1 (descending) | Male cVA path to descending output | Male | Recorded activity | MED | 3 |
| aSP-f / aSP-g LHNs | Sex-specific third-order cVA targets (fru switch) | Male vs female | Recorded activity | MED | 4 |
| DA1 lPNs / vPNs, LHNs | Parallel identity and position streams for cVA | Not confirmed | Recorded activity + wiring | LOW | 6 |
| ppk23+ F-cells / M-cells | Foreleg sensors for female 7,11-HD vs male 7-T | Male | Recorded activity | MED | 7 |
| Gr32a GRNs | Required for 7-T aggression and male-male courtship suppression | Male | Causal manipulation | MED | 12 |
| ppk25+ GRNs | Male courtship; female receptivity | Both | Causal manipulation | LOW | 31 |
| vAB3 | Ascending excitation of P1 by female contact cues | Male | Recorded activity | MED | 9, 11 |
| mAL | GABAergic feedforward inhibition of P1; dominant in *D. simulans* | Male | Recorded activity | MED | 9, 11 |
| PPN1 | ppk23 relay; link to mAL -> P1 unconfirmed | Male | Recorded activity | MED | 8 |
| P1 | Integrates contact pheromones, touch, cVA; gates vision; persistent aggression | Male | Recorded activity + causal manipulation | MED | 8, 9, 10, 14, 28 |
| LC10a | Tracks female; aims wing extension; arousal-gated | Male | Causal manipulation + recorded activity | MED | 13, 14 |
| LC population | Combinatorial code for female features | Male | Model prediction + imaging test | MED | 15 |
| pC1 (dsx+) | Responds to cVA and song; controls receptivity | Female | Recorded activity + causal manipulation | MED | 17 |
| pC1d / pC1e | Persistent state raising aggression | Female | Recorded activity + causal + wiring | MED | 26 |
| aIPg | Aggression effector downstream of pC1d | Female | Causal manipulation + wiring | MED | 27 |
| vpoEN | Tuned to conspecific pulse song; excites vpoDN | Female | Recorded activity | MED | 24 |
| vpoDN | Command for vaginal plate opening (acceptance) | Female (virgin) | Causal manipulation + wiring | MED | 24 |
| DNp13 | Command-like for ovipositor extrusion (rejection) | Female (mated) | Causal manipulation | MED | 23 |
| oviDN / oviEN / oviIN | Egg laying downstream of pC1 (not rejection) | Female | Causal manipulation + wiring | MED | 22 |
| SPSNs (SPR+) | Mating-signal sensors; silencing mimics mated state | Female | Causal manipulation | MED | 18, 19, 20 |
| SAG | Carries mating status to brain (and pC1) | Female | Causal manipulation (+ wiring) | MED | 21, 22 |

## Why this matters for two-way communication with animals

- **A test bed scored by replies already exists.** The female's replies are discrete acts with identified command neurons, plate opening via vpoDN and extrusion via DNp13 [MED][23][24], and males already adjust song to female distance and speed [MED][29][30]. An artificial partner can be scored by what the animal does next.
- **"Message received" can be measured in neurons for some channels.** Recorded responses exist for pulse song (vpoEN), cVA and song (female pC1), and contact pheromone and touch (male P1) [MED][9][10][17][24], so a sender can be tuned against them. For vibration, only behavior is available [MED][16].
- **Context labels are required.** Extrusion means "yes" in virgins and "no" in mated females [MED][23][25], and cVA's effect on aggression reverses with exposure time [MED][5][35]. A decoder for animal signals, in any species, needs the receiver's internal state as an input.
- **Matching the sensor is not enough across species.** *D. simulans* detects 7,11-HD with conserved sensors but weights it toward inhibition at P1 [MED][11]. Artificial signals aimed at another species must be tested against its central response, not only its receptors.
- **Signals can leave minutes-long aftereffects.** Activating P1 or pC1d/pC1e sets states lasting minutes [MED][26][28], so a "conversation" protocol must space exchanges or model the carryover.
- **Limits.** The verifiers found no claim here that supports "decoding" fly signals; the evidence covers how specific signals are detected and relayed to the circuits that decide behavior. Wiring-only routes should not be described as neurons "lighting up".

## Open questions

- **Vibration sensing:** which leg chordotonal or other mechanosensory neurons and ascending pathways turn male quivering into female stopping, and do they reach pC1 or vpoDN? Traceable in FANC/BANC.
- **The male's receiving circuit:** does the male read plate opening, extrusion and slowing by vision (LC types), contact or chemistry, and which neurons carry that reply to P1?
- **Females as senders:** female copulation song modulated by seminal fluid (Kerwin et al. 2020, named by a verifier), wing flicking and slowing have no mapped neurons here.
- **Chemical marks of mating:** how male-transferred anti-aphrodisiacs (cVA, 7-T, CH503) and post-mating hydrocarbon changes signal mated status to other males.
- **Other social channels:** Or65a in females (Lebreton et al. 2014), Or47b and Or88a, IR84a, the IR52 clade, ppk29 and Gr68a are outside this claim set, as are female song detectors pC2l/pC2m (Deutsch et al. 2019; Track 02).
- **Sex-specific routing:** e.g., a visual-vs-olfactory input switch (Nojima et al. 2021) and shared vs dimorphic aggression logic (Chiu et al. 2021).
- **Wiring vs activity:** do connectome-predicted convergence nodes (P1/pC1, aIPg, vpoEN/vpoDN, DNp13) show multisensory responses in vivo, and do synapse weights predict response weights? Do these nodes hold in more than one animal per sex?
- **Neuromodulation:** how the sex-peptide pathway, dopamine, octopamine, tachykinin and SIFamide change the meaning of the same signal; EM wiring cannot show this.
- **Turn-taking:** are there reliable reply latencies and contingencies, measurable in both brains at once (Tracks 01 and 06)?
- **Active queries:** are foreleg tapping and genital licking mechanical as well as chemical probes, and which neurons carry the answers?
- **Coding style:** how much of the repertoire is graded population coding, as the LC result suggests [MED][15], rather than dedicated lines? No claim here covers whole-brain imaging during social stimuli with connectome-matched identities.
- **Evolution and visual displays:** P1 input changes in *D. yakuba* and *D. erecta*, desat-gene hydrocarbon evolution (Track 08), and visual displays in aggression and female assessment of males are not covered.

## Candidate research projects

Listed in suggested priority order.

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| 1. Two-sex channel-convergence audit in the connectomes | Non-song channels converge within 3 synapses onto a few dimorphic hubs (P1 in males; pC1, aIPg, vpoEN in females); dimorphic types are over-represented at convergence points, not sensors. | From entry neurons (DA1 PNs, vAB3, PPN1, LC10a, SAG, leg chordotonal ascending neurons), compute weighted shortest paths, predicted signs and shared nodes toward pIP10, DNp13, vpoDN, oviDN. FlyWire/Codex and hemibrain for females; male CNS for P1; BANC/MANC/FANC for cord-to-brain paths. Flag each edge activity-confirmed or wiring-only from this track's table. | Computational, now | Build per-channel cell-type lists matched across FlyWire and the male CNS; compute sensor-to-hub path lengths and dimorphic-node enrichment. |
| 2. Robotic multimodal suitor with a closed-loop readout of female replies | A partner that adjusts song, vibration and visual motion to the female's replies (slowing, plate opening, extrusion) gets plate opening faster and more reliably than open-loop playback; combined pC1 and vpoEN activity predicts her next reply. | Tethered virgin and mated females with two-photon imaging of pC1, vpoEN, vpoDN (DNp13 in mated). Speaker song, piezo vibration, moving visual dummy, optional contact cue. Online pose-based reply classification; stimulus policy updated each trial (bandit or state-space controller). | Wet lab, months | Measure open-loop replies and pC1/vpoEN responses to each channel alone and in pairs. |
| 3. Injecting the female's "yes" and "no" | Optogenetic activation of vpoDN or DNp13 in a female predictably shifts male behavior (copulation attempts vs courtship decline) and male P1 and LC10a-pathway activity, revealing the male's receiving circuit. | Female-restricted CsChrimson activation of vpoDN or DNp13 in courting pairs and with tethered males under imaging of P1 and visual-pathway neurons; track song and approach. | Wet lab, months | Behavior only: activate vpoDN or DNp13 in females paired with wild-type males; measure male song and copulation-attempt timing. |
| 4. Mapping the vibration channel in females | Leg chordotonal/mechanosensory neurons detect quivering-like vibration and reach pC1 or locomotor-arrest circuits via specific ascending neurons; silencing them abolishes vibration-induced immobility. | Natural-like vibration playback to walking and tethered females; calcium imaging of FANC/BANC-selected ascending neurons and pC1; then silencing and activation. | Wet lab, months | Mine FANC/BANC for ascending neurons 1-2 synapses from leg vibration sensors that project near pC1 or locomotor regions. |
| 5. State-aware "reply decoder" for fly courtship | Models that include partner state (mating status, arousal) predict signal meaning and next responses much better than state-blind models (virgin extrusion -> copulation attempt; mated extrusion -> male departure). | Multi-animal pose and audio data of virgin vs mated pairs (SLEAP, FlyTracker, JAABA); GLM-HMM models; compare state-aware vs state-blind prediction; validate states against Track 04 imaging. | Computational, now | Re-analyze a public courtship dataset with extrusion and slowing labeled by mating status. |
| 6. Simultaneous two-brain imaging during courtship | In successful courtship, male P1 and female pC1 activity couple over seconds, and coupling breaks before rejection. | Two linked imaging rigs; each head-fixed fly's live behavior drives the other's virtual partner. | Moonshot | "Linked-VR" pilot: a tethered male's wing and song output drives a tethered female's stimuli, and her reply drives his visual target. |

## Leads needing confirmation

- **Male CNS connectome as a Cell 2026 paper:** only a 2025 preprint is recalled; title, authors and counts unchecked [LOW][34].
- **BANC, MANC, FANC contents:** the researcher describes BANC as a single-animal brain-plus-cord connectome ("reported as female; verify") and MANC/FANC as holding the ascending and descending ends of each channel. No verified claim supports these [LOW].
- **aSP-f in males, aSP-g in females:** recalled by both verifiers, flagged for checking along with the stimulation method [MED][4].
- **PPN1:** whether 7-T -> PPN1 -> mAL -> P1 is a mapped chain, and whether PPN1 figures in the *D. simulans* change [MED][8][11].
- **Taisz et al. details:** fly sex and which links were recorded vs inferred from wiring are unchecked [LOW][6].
- **Single-verifier recollections:** P1 activation in *D. simulans* overcame the aversion, placing the change at or upstream of P1 [LOW][11]; pC1d is the key subtype and pC1e alone is insufficient [LOW][26]; P1 was activated with ATP/P2X2 in the touch study [LOW][10]; LC10a responds to small moving objects [LOW][13]; Or65a acts on mated females (Lebreton et al. 2014) [LOW][1]; internal state shapes song choice (Calhoun et al. 2019) [LOW][29].
- **ppk23 M-cells and cVA:** both verifiers recall M-cells also responding to cVA, but this is outside the verified claim wording [MED][7].
- **DNp13 inputs:** song input combined with pC1-linked mating status is a working model [MED][23].
- **SAG activity after mating:** imaging evidence uncertain [LOW][21].
- **Researcher channel-map items without claims:** male 7-T raising female receptivity through ppk25 neurons [LOW]; LC11 and social freezing (Ferreira and Moita 2020) [LOW]; pIP10 as the P1-downstream song descending neuron (Track 01) [LOW].

## Claims dropped in verification

No claim was dropped; all 30 were kept. Parts removed or rewritten in correction:

- T03-01: "Or67d is the single class" limited to acute responses (Or65a carries long-term effects).
- T03-02: "Connectome wiring" label removed (anatomy plus electrophysiology); "third-order" dimorphism belongs to Kohl et al. 2013, not Datta et al. 2008.
- T03-05: "Aggression rises as cVA builds with density" removed; long-term exposure suppresses aggression via Or65a.
- T03-08: "7-T -> PPN1 -> mAL -> P1" downgraded to unconfirmed; it mixed two labs' cell names.
- T03-11: PPN1 in the *D. simulans* mechanism hedged; not recalled in that paper.
- T03-12: "Gr32a GRNs detect 7-T" became "required for 7-T-dependent behavior".
- T03-17: "pC1 is the female multisensory integrator" narrowed to subtype roles.
- T03-18: "Sex peptide silences SPSNs" reclassified from observation to inference.
- T03-19: SAG -> pC1 credit moved from Feng et al. 2014 to Wang F et al. 2020.
- T03-20, T03-22: "Hemibrain connectivity" generalized; dataset unconfirmed (FAFB likely for T03-20).
- T03-21: "DNp13 combines song and pC1 mating status" downgraded to unconfirmed.
- T03-24: "Hemibrain" replaced by FAFB via FlyWire.
- T03-27: Amplitude result moved to Coen et al. 2016; "sensed mainly visually" removed.
- T03-29: FlyWire tracing of ascending gustatory paths qualified (no nerve cord, leg neurons or P1).
- Seed brief: "OviEN/OviDN = rejection circuit" replaced; they control egg laying, and DNp13 commands rejection [22][23].
- Seed brief: "LC11 in Ribeiro et al. 2018" replaced; that paper is about LC10a [13].

## Sources

1. A single class of olfactory neurons mediates behavioural responses to a Drosophila sex pheromone -- Kurtovic A, Widmer A, Dickson BJ -- Nature, 2007 -- URL not verified.
2. The Drosophila pheromone cVA activates a sexually dimorphic neural circuit -- Datta SR, Vasconcelos ML, Ruta V, Luo S, Wong A, Demir E, Flores J, Balonze K, Dickson BJ, Axel R -- Nature 452:473-477, 2008 -- URL not verified.
3. A dimorphic pheromone circuit in Drosophila from sensory input to descending output -- Ruta V, Datta SR, Vasconcelos ML, Freeland J, Looger LL, Axel R -- Nature, 2010 -- URL not verified.
4. A bidirectional circuit switch reroutes pheromone signals in male and female brains -- Kohl J, Ostrovsky AD, Frechter S, Jefferis GSXE -- Cell, 2013 -- URL not verified.
5. Identification of an aggression-promoting pheromone and its receptor neurons in Drosophila -- Wang L, Anderson DJ -- Nature, 2010 -- URL not verified.
6. Generating parallel representations of position and identity in the olfactory system -- Taisz I, Dona E, Munch D, ... Jefferis GSXE, Galili DS -- Cell, 2023 -- URL not verified.
7. Contact chemoreceptors mediate male-male repulsion and male-female attraction during Drosophila courtship -- Thistle R, Cameron P, Ghorayshi A, Dennison L, Scott K -- Cell, 2012 -- URL not verified. Companion papers (titles not given): Toda H, Zhao X, Dickson BJ, Cell Reports 2012; Lu B et al., PLoS Genetics 2012.
8. Excitation and inhibition onto central courtship neurons biases Drosophila mate choice -- Kallman BR, Kim H, Scott K -- eLife, 2015 -- URL not verified.
9. Multimodal chemosensory circuits controlling male courtship in Drosophila -- Clowney EJ, Iguchi S, Bussell JJ, Scheer E, Ruta V -- Neuron, 2015 -- URL not verified.
10. Female contact activates male-specific interneurons that trigger stereotypic courtship behavior in Drosophila -- Kohatsu S, Koganezawa M, Yamamoto D -- Neuron, 2011 -- URL not verified.
11. Evolution of a central neural circuit underlies Drosophila mate preferences -- Seeholzer LF, Seppo M, Stern DL, Ruta V -- Nature, 2018 -- URL not verified.
12. Hierarchical chemosensory regulation of male-male social interactions in Drosophila -- Wang L, Han X, Mehren J, Hiroi M, Billeter JC, Miyamoto T, Amrein H, Levine JD, Anderson DJ -- Nature Neuroscience, 2011 -- URL not verified. See also Miyamoto T, Amrein H, Nature Neuroscience 2008 (title not given).
13. Visual projection neurons mediating directed courtship in Drosophila -- Ribeiro IMA, Drews M, Bahl A, Machacek C, Borst A, Dickson BJ -- Cell, 2018 -- URL not verified.
14. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature, 2021 -- URL not verified.
15. Mapping model units to visual neurons reveals population code for social behaviour -- Cowley BR, Calhoun AJ, Rangarajan N, ... Pillow JW, Murthy M -- Nature, 2024 -- URL not verified.
16. Substrate-borne vibratory communication during courtship in Drosophila melanogaster -- Fabre CCG, Hedwig B, Conduit G, Lawrence PA, Goodwin SF, Casal J -- Current Biology, 2012 -- URL not verified.
17. Central brain neurons expressing doublesex regulate female receptivity in Drosophila -- Zhou C, Pan Y, Robinett CC, Meissner GW, Baker BS -- Neuron, 2014 -- URL not verified.
18. A receptor that mediates the post-mating switch in Drosophila reproductive behaviour -- Yapici N, Kim YJ, Ribeiro C, Dickson BJ -- Nature, 2008 -- URL not verified.
19. Sensory neurons in the Drosophila genital tract regulate female reproductive behavior -- Häsemeyer M, Yapici N, Heberlein U, Dickson BJ -- Neuron, 2009 -- URL not verified.
20. Control of the postmating behavioral switch in Drosophila females by internal sensory neurons -- Yang CH, Rumpf S, Xiang Y, Gordon MD, Song W, Jan LY, Jan YN -- Neuron, 2009 -- URL not verified.
21. Ascending SAG neurons control sexual receptivity of Drosophila females -- Feng K, Palfreyman MT, Häsemeyer M, Talsma A, Dickson BJ -- Neuron 83, 2014 -- URL not verified.
22. Neural circuitry linking mating and egg laying in Drosophila females -- Wang F, Wang K, Forknall N, Patrick C, Yang T, Parekh R, Bock D, Dickson BJ -- Nature, 2020 -- URL not verified.
23. Circuit and behavioral mechanisms of sexual rejection by Drosophila females -- Wang F, Wang K, Forknall N, Parekh R, Dickson BJ -- Current Biology, 2020 -- URL not verified.
24. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Neuron, 2021 -- URL not verified.
25. Ovipositor extrusion promotes the transition from courtship to copulation and signals female acceptance in Drosophila melanogaster -- Mezzera C, Brotas M, Gaspar M, ... Vasconcelos ML -- Current Biology, 2020 -- URL not verified.
26. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco D, Encarnacion-Rivera L, Pereira T, Fathy R, Clemens J, Girardin C, Calhoun A, Ireland E, Burke A, Dorkenwald S, McKellar C, Macrina T, Lu R, Lee K, Kemnitz N, Ih D, Castro M, Halageri A, Jordan C, Silversmith W, Wu J, Seung HS, Murthy M -- eLife, 2020 (EM data: FAFB via FlyWire) -- URL not verified.
27. Cell types and neuronal circuitry underlying female aggression in Drosophila -- Schretter CE, Aso Y, Robie AA, Dreher M, Dolan MJ, Chen N, Ito M, Yang T, Parekh R, Branson KM, Rubin GM -- eLife, 2020 -- URL not verified.
28. P1 interneurons promote a persistent internal state that enhances inter-male aggression -- Hoopfer ED, Jung Y, Inagaki HK, Rubin GM, Anderson DJ -- eLife, 2015 -- URL not verified. See also Jung Y et al., Neuron 2020, on P1a (title not given).
29. Dynamic sensory cues shape song structure in Drosophila -- Coen P, Clemens J, Weinstein AJ, Pacheco DA, Deng Y, Murthy M -- Nature, 2014 -- URL not verified.
30. Sensorimotor transformations underlying variability in song intensity during Drosophila courtship -- Coen P, Xie M, Clemens J, Murthy M -- Neuron, 2016 -- URL not verified.
31. Drosophila pheromone-sensing neurons expressing the ppk25 ion channel subunit stimulate male courtship and female receptivity -- Vijayan V, Thistle R, Liu T, Starostina E, Pikielny CW -- PLoS Genetics, 2014 -- URL not verified.
32. Neuronal wiring diagram of an adult brain -- Dorkenwald S et al. (FlyWire Consortium) -- Nature, 2024 -- URL not verified.
33. Whole-brain annotation and multi-connectome cell typing of Drosophila -- Schlegel P et al. (FlyWire Consortium) -- Nature, 2024 -- URL not verified.
34. Sexual dimorphism in the complete connectome of the Drosophila male central nervous system -- Berg S, Beckett IR, Costa M, Schlegel P, ... Jefferis GSXE et al. -- bioRxiv (preprint), 2025; journal version (Cell 2026) unconfirmed -- URL not verified.
35. Title not given in the verified material (cited by the verifiers for Or65a-mediated effects of long-term cVA exposure) -- Liu et al. -- Nature Neuroscience, 2011 -- URL not verified.
