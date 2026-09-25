# Track 06 -- From broadcast to conversation: closed-loop, two-way interaction with animals

*Interspecies Communication Research Program · 2026-09-25 · 32 claims kept of 32 checked (28 verified / 4 corrected / 0 conflict / 0 unverified) · confidence tags: [HIGH] [MED] [LOW] [CONFLICT]*

> **How far to trust the tags.** This track ran with no web access. The shared search budget was spent before the first query, and all fetches were blocked. "Verified" means that one verifier judged the claim correct from memory. The second verifier could check nothing. No source was opened and no URL was recovered, so nothing is tagged [HIGH]. [MED] means the researcher and a verifier recalled the same citation and core result. [LOW] means details are uncertain or were corrected. The track did not cover the 2025-2026 connectomes (the complete male CNS, BANC) or recent papers on closed-loop experiments in flies.

## Bottom line

- **No fly study here records neurons during a live two-way exchange.** Every fly result where neurons "light up" comes from song played to head-fixed or tethered flies. The neurons are the pC2l/pC2m song detectors, female pC1, vpoEN and a wider auditory network [MED][9][10], [LOW][12][32]. Activity during real turn-taking has been recorded only in birds: zebra finch HVC and duetting wrens [LOW][24][25].
- **The male fly already runs a feedback loop.** He picks pulse or sine song, pulse type and loudness from the female's movement and distance. The rules he follows switch between hidden internal states [MED][1][2][3][4].
- **The fly is the only system here with handles on both partners.** Sender neurons (P1, pIP10, VNC song circuits) can be driven to produce song. Receiver neurons (pC2, pC1, vpoEN) respond to song. vpoDN drive a measurable acceptance reply, vaginal plate opening [MED][8][10][11], [LOW][12][31].
- **The decisive experiment is missing.** It would compare an artificial partner that answers the female contingently with a yoked replay of the identical song [LOW]. The tools exist: millisecond song detection (DAS), real-time pose tracking (SLEAP) and targeted stimulation of freely moving flies (FlyMAD) [MED][16][17], [LOW][18].
- **Non-fly "conversations" so far are contingent exchanges or one-bit links, not shared meaning.** The humpback "Twain" exchange involved one whale in one encounter [MED][26]. DolphinGemma is a corporate announcement [MED][28]. Brain-to-brain interfaces transmitted single binary choices [MED][29][30].
- **Artificial partners engage animals when they carry the right cues and respond to the animal.** Odor-coated robots steered cockroach groups. Guppies preferred a realistic, responsive robot fish. Zebra finches learned to time their calls around a vocal robot [MED][19][23], [LOW][22].
- **Every claim still needs checking against its source before external use.** Start with the four corrected claims (T06-05, 07, 12, 32), then T06-11, 14, 16, 18, 26 and 31.

## What the evidence shows

### 1. From eavesdropping to conversation

The researcher's working frame has six levels [LOW]:

- **L1 eavesdrop:** record and segment signals.
- **L2 decode:** map signals to context or state.
- **L3 playback:** write signals open-loop.
- **L4 contingent reply:** answer the animal in real time.
- **L5 co-adaptation:** animal and agent shape each other's decisions over time.
- **L6 neural read/write:** read or write brain state inside the exchange.

Fly work sits mostly at L2-L3, plus open-loop L6. Neurons are driven or recorded, but never while a partner answers. The L4-L5 examples in this track are birds, robots and cetaceans (section 7).

### 2. The male already runs a closed loop (L2)

Freely courting males choose pulse or sine song, and structure their bouts, from the female's movement cues: her speed, and the male-female distance and position [MED][1]. This depends on the male's largely visual access to her (behavioral) [MED][1]. One verifier notes that feedback explains a substantial but partial share of song variance, so "largely predicted" may overstate the paper [MED][1]. Two further behavioral results come from the same kind of recordings. Males sing louder when farther away, which partly offsets the steep fall-off of near-field sound [MED][2]. They also choose between two pulse types, using Pslow when close and Pfast when farther away [MED][4].

The rules linking female cues to male song change with the male's internal state. A GLM-HMM fitted to natural courtship found three hidden states, labelled 'close', 'chasing' and 'whatever', each with its own cue-to-song mapping [MED][3]. Optogenetic activation of male P1/pC1 changed which states males occupied. The evidence is a model plus causal manipulation, and the direction of the shift is unverified [MED][3].

The male's representation of the female, which drives courtship including song, is spread across a population of LC visual projection neuron types rather than one channel [MED][6]. The evidence combines silencing of single LC types, calcium imaging of LC responses, and a deep network trained with "knockout training" [MED][6]. In tethered males on a ball, pursuit of a moving fly-sized target depends on P1-mediated arousal. Two-photon imaging with optogenetic P1 activation showed that arousal gates how LC10a signals drive the pursuit [LOW][7]. It is unconfirmed whether the target moved in closed or open loop, and where the gating happens [LOW][7].

### 3. Writing the sender (L6, male side)

Thermogenetic activation of fruitless-expressing neurons elicits song with no female present (causal manipulation) [MED][8]. The brain neurons P1 and the descending neuron pIP10 drive song in solitary males. The thoracic neurons dPR1 and vPR6 shape song features, even in decapitated flies [MED][8]. Song evoked this way lacks the feedback-dependent structure of natural song, so driving the song circuit is not the same as taking a turn [MED][8][1].

Roemschied et al. combined optogenetic manipulation (for example of P1a and pIP10) with modelling [LOW][5]. They propose one brain-to-VNC pathway that runs in two regimes, set by recent sensory history [LOW][5]. Brief input produces the simple single-mode trains sung far from the female. Prolonged input disinhibits VNC circuits built on mutual inhibition and rebound excitability, producing complex pulse-sine sequences near her [LOW][5].

Analysis of the MANC connectome identified nested VNC premotor circuits for pulse and sine song. Some neurons are shared and some are specific to one song type, and optogenetic tests supported their roles (wiring plus causal manipulation) [LOW][31]. FlyMAD tracks freely walking flies and aims a laser at individual flies or body regions with low latency. It has been used to activate P1 and pIP10 [MED][16].

### 4. Reading the receiver: female neurons that light up for song

This section answers the program lead's question most directly. Every recording below used song playback to head-fixed or tethered flies, not a live partner [MED][9][10], [LOW][12][32].

- **pC2l, pC2m.** These doublesex-expressing neurons are found in both sexes. They respond to conspecific pulse song, with inter-pulse-interval tuning that matches behavioral preference. Activating them drives sex-specific responses. The evidence is recorded activity plus causal manipulation [MED][10]. Their responses to sine song are not zero, so "selective" should be read loosely [MED][10][32].
- **Upstream auditory network.** FlyWire wiring combined with calcium imaging shows a continuum of pulse and sine preferences across central-brain auditory cell types [LOW][32]. The cell types are highly interconnected in a non-hierarchical network. Even so, each type's song responses can be predicted from its synaptic inputs [LOW][32].
- **Female pC1.** These neurons respond to male song and to the male pheromone cVA, and silencing them reduces receptivity (recorded activity plus causal manipulation) [MED][9]. "pC1" is a population that later work split into subtypes pC1a-e [MED][11].
- **Persistent state.** Brief optogenetic activation of female pC1 creates a state lasting minutes. It changes how females respond to song playback and also elicits aggression [MED][11]. FAFB EM shows recurrent wiring among pC1 subtypes, notably pC1d and pC1e, consistent with the persistence (causal manipulation plus wiring) [MED][11]. The aggression result may belong mainly to a companion paper. Whether persistent activity was imaged in pC1 itself is unconfirmed [LOW][11].
- **vpoEN and vpoDN.** vpoEN respond to conspecific pulse song and excite vpoDN. vpoDN also receive mating-status input from pC1, and they trigger vaginal plate opening, the acceptance behavior [LOW][12]. Activating the pathway promotes opening. The evidence is recorded activity plus causal manipulation [LOW][12].

Together these form a receiver chain with identified cells at each step [MED][9][10][11], [LOW][12][32]. Song passes through the auditory network to the pC2 detectors. pC1 holds the female's state and vpoEN carry the song input. vpoDN produce the reply.

### 5. The female's reply and open-loop playback

Vaginal plate opening is the clearest measurable reply in this set [LOW][12]. Females also sing during copulation, and male seminal fluid modulates that song, so fly acoustic signalling is not one-way [MED][15]. That song follows acceptance, though, so it is not a pre-mating turn (behavioral) [MED][15]. Rejection signals such as ovipositor extrusion were not among the checked claims [LOW].

Artificial pulse song at the conspecific inter-pulse interval (roughly mid-30 ms) sped up mating when females were paired with wingless males. Songs with other intervals worked less well [MED][13]. Open-loop playback can therefore stand in for part of the male's side (behavioral) [MED][13].

The Kyriacou-Hall ~55 s oscillation in inter-pulse interval, and its claimed role in female preference, was not supported by large re-recordings and reanalyses [MED][14]. The original authors dispute this and blame pulse-detection problems and low-intensity courtship [MED][14]. The program should not build on this rhythm as a communication channel [MED][14].

### 6. Tools that can close the loop in flies

- **DAS.** It annotates fly pulse and sine song, and bird song, with millisecond latency suitable for closed-loop experiments. It is a tool, not a demonstrated exchange [MED][17].
- **SLEAP.** Its multi-animal pose tracking runs in real time, fast enough for closed-loop control. The paper demonstrated closed-loop experiments in interacting flies [LOW][18].
- **FlyMAD.** It targets stimulation to individual moving flies [MED][16].
- **Not checked.** The researcher also listed FreemoVR, PiVR and SongExplorer [LOW].

### 7. Contingent partners in other animals (L4-L5)

**Birds** give the only turn-taking with recorded neurons. Zebra finches exchanging calls with a computer-controlled vocal robot learned to time their calls to avoid overlapping the robot [MED][23]. This depended on the forebrain song system (behavioral plus causal manipulation) [MED][23]. In male zebra finches, activity of inhibitory interneurons in the premotor nucleus HVC was linked to reply timing, and blocking inhibition changed that timing (recorded activity plus pharmacology) [LOW][24]. In duetting plain-tailed wren pairs, sound from the partner modulated each bird's HVC and coordinated the alternation of syllables (recorded activity) [LOW][25].

**Robots in groups.** Odor-coated robots were accepted by American cockroaches and shifted the group's shelter choice, including toward a shelter the insects would not normally prefer [MED][19]. Linked robots let a honeybee group in Graz and a zebrafish group in Lausanne coordinate their collective decisions [MED][20]. Guppies more readily accepted a robot fish that had realistic eyes and moved in response to them [LOW][22]. A robotic bee dancer recruited foragers less reliably than natural dances; that result is a preprint [LOW][21]. These are behavioral results about collective decisions, not conversation [MED][19][20].

**Cetaceans.** A female humpback whale ("Twain") in Southeast Alaska answered playback of a contact call with about three dozen calls over roughly 20 minutes. Her call timing tracked the playback intervals [MED][26]. This was one animal in one encounter, and it shows contingent timing, not shared meaning [MED][26]. CHAT plays object-linked synthetic whistles to wild Atlantic spotted dolphins and detects in real time whether they mimic them [LOW][27]. DolphinGemma, announced in April 2025, is a roughly 400M-parameter model that predicts the next dolphin sound and is meant to run within CHAT. The announcement contained no peer-reviewed evaluation of meaning [MED][28].

### 8. Linking brains directly

In a rat brain-to-brain interface, cortical activity from an encoder rat was delivered as microstimulation to a decoder rat. The decoder chose correctly roughly 60-70% of the time, against 50% chance [MED][29]. In another setup, a human's EEG drove focused ultrasound over an anesthetized rat's motor cortex and triggered tail movements, with about 94% reported accuracy [MED][30]. Both are one-bit links, not exchanges [MED][29][30].

### 9. What wiring can and cannot say

Wiring shows possible pathways. Saying that neurons "light up" needs imaging or electrophysiology [MED][9][10]. The auditory-network result cuts both ways [LOW][32]. Cell-type responses were predictable from inputs, which supports connectome-constrained models. But the wiring had suggested a feedforward flow toward pC2 that the imaging did not support [LOW][32]. According to the researcher, no connectome-constrained model yet reproduces the two-way courtship exchange; this was not checked against the literature [LOW].

## Results tables

**Fly circuits for a two-way exchange**

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| P1 / pC1 (male) | Arousal and command; drives song; shifts song states; gates LC10a-driven pursuit | Male | Causal manipulation; recorded activity (tethered) | MED; LOW for gating | 3, 7, 8, 16 |
| pIP10 | Descending neuron; elicits song; input to VNC song circuits | Male | Causal manipulation | MED (8); LOW (5) | 5, 8, 16 |
| dPR1, vPR6, TN1A | VNC song premotor neurons; nested pulse and sine circuits | Male | Causal manipulation; wiring plus causal | MED (8); LOW (31) | 8, 31 |
| LC population incl. LC10a | Population code for the female | Male | Causal plus activity plus model | MED (6); LOW (7) | 6, 7 |
| pC2l, pC2m | Pulse-song detectors; tuning matches behavior | Both | Recorded activity plus causal | MED | 10 |
| Auditory cell types (AMMC/WED) | Pulse-sine continuum; non-hierarchical; predictable from inputs | Female | Wiring plus recorded activity | LOW | 32 |
| pC1, pCd (female) | Respond to song and cVA; needed for receptivity | Female | Recorded activity plus causal | MED | 9 |
| pC1d, pC1e | Minutes-long persistent state; recurrent wiring | Female | Causal plus wiring | MED | 11 |
| vpoEN | Respond to pulse song; excite vpoDN | Female | Recorded activity plus causal | LOW | 12 |
| vpoDN | Trigger vaginal plate opening (acceptance) | Female | Causal manipulation | LOW | 12 |

**Interactive and closed-loop demonstrations**

| Project | Species | What was shown | Evidence | Confidence | Source # |
|---|---|---|---|---|---|
| Vocal robot | Zebra finch | Predictive call timing; needs song system | Behavioral plus causal | MED | 23 |
| HVC turn-taking | Zebra finch (male) | HVC inhibition sets reply timing | Recorded activity plus pharmacology | LOW | 24 |
| Duet recordings | Plain-tailed wren | Partner sound modulates HVC in both birds | Recorded activity | LOW | 25 |
| InsBot | Cockroach | Robots shift group shelter choice | Behavioral | MED | 19 |
| ASSISIbf | Honeybee, zebrafish | Robot-linked groups coordinate | Behavioral | MED | 20 |
| RoboFish | Guppy | Realistic, responsive robot better accepted | Behavioral | LOW | 22 |
| RoboBee | Honeybee | Weaker recruitment than natural dances | Behavioral (preprint) | LOW | 21 |
| Twain playback | Humpback, n=1 | About 36 calls in about 20 min, timed to playback | Behavioral (field) | MED | 26 |
| CHAT | Atlantic spotted dolphin | Whistle playback, real-time mimic detection | Tool | LOW | 27 |
| DolphinGemma | Atlantic spotted dolphin | Next-sound model; no evaluation of meaning | Announcement | MED | 28 |
| Rat brain-to-brain | Rat | Decoder about 60-70% against 50% chance | Causal manipulation | MED | 29 |
| Human-to-rat link | Human, rat | EEG-triggered ultrasound evokes tail movement | Causal manipulation | MED | 30 |

## Why this matters for two-way communication with animals

- **Contingency separates conversation from stimulation.** An exchange is conversation-like only if the animal responds differently to a partner that answers it than to an exact replay. The fly lets that control run with identified receiver neurons as the readout [MED][10][11], [LOW][12]. The same yoked design carries over to bird, whale and robot playback.
- **A partner must track state, not just cues.** Male flies change how they answer female cues as their hidden state changes [MED][3]. A partner that follows a fixed rule will look erratic to the animal.
- **Pacing follows the receiver's memory.** Seconds of pC1 activation shift female responses for minutes [MED][11]. Male song circuits behave differently after brief versus prolonged input [LOW][5]. Earlier turns change how later ones land, so trials cannot be treated as independent.
- **The reply must be measurable and causally grounded.** Vaginal plate opening is a discrete reply with a known descending driver [LOW][12]. Other species need an equally specific response, such as approach, acceptance or a matched call type, rather than call counts.
- **The fly can calibrate "conversation" metrics.** Metrics can be tested on fly courtship, where the causal links are known [MED][1][3], before they are applied to single-encounter data such as the humpback playback [MED][26].

## Open questions

1. Does a contingent partner shift the female's receiver state (pC1, vpoEN, the persistent state) or her acceptance more than a yoked replay of the same song [LOW]?
2. Does the male model the female's state beyond her instantaneous movement? Along the route from LC neurons through P1/pC1 to pIP10, where are her feedback and his hidden state combined [MED][3][6]?
3. Can the male's next song choice be read in real time from P1 or pIP10 activity? Is that possible in tethered flies, or only in freely moving ones?
4. How long does the female's song memory last, and how should a synthetic partner pace its turns to match [MED][11]?
5. Which female-to-male signals does the male use in real time: slowing, ovipositor extrusion, vaginal plate opening, substrate vibration or pheromones? Which of these could a device detect and answer? Female rejection signals were missing from the checked claims.
6. Can identified fly neurons be recorded during a live two-fly exchange rather than playback? Verifiers flagged imaging in freely courting flies, but it was not checked here (see Track 04).
7. Can FlyWire, BANC and the male CNS connectome (Cell, 2026) together trace the male's full loop? That loop runs from female cues through LC10a and the auditory neurons, then P1/pC1 and pC2, then pIP10, to the VNC song circuits. No claim here used the newest connectomes (see Tracks 01 and 05).
8. What operational definition of "conversation" should the program adopt? Candidates are transfer entropy, turn-taking structure and co-adaptation, each with controls for entrainment, habituation and pseudo-replication.
9. Which vertebrate paradigms were missed? Verifiers named marmoset antiphonal calling with virtual partners, closed-loop playback to bats and mice, song-type matching in songbirds, and electric fish.
10. What welfare and permit standards should govern neural write experiments, invasive brain-to-brain interfaces, and field playback to wild whales and dolphins?
11. What did 2025-2026 cetacean work show (Project CETI playback, the 2025 Coller-Dolittle Prize, DolphinGemma field results)? This is unchecked; see Track 07.

## Candidate research projects

The projects are listed in priority order.

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| P1. Contingent versus yoked "virtual male" song partner | Song whose timing, pulse/sine choice and amplitude follow the female's own movement (rules from [1][3]) raises acceptance and receiver-neuron engagement more than a yoked replay of the same song | Virgin females alone or with wingless males; SLEAP tracking; real-time song from a GLM-HMM policy fitted to natural male song; the yoked group gets the exact sequence from a contingent session; measure vaginal plate opening, slowing and copulation latency | Wet lab, months | Build and calibrate the yoked playback rig, then replicate the open-loop baseline of [13] in it |
| P2. Connectome-constrained "digital female" | A model of the path from Johnston's organ through pC2, pC1 and vpoEN to vpoDN, including pC1 recurrence, reproduces song tuning and persistent state and ranks song sequences by simulated vpoDN drive | Extract the auditory-to-acceptance subgraph from FlyWire (and BANC); fit a rate or integrate-and-fire model to published imaging [10][11][32]; simulate contingent versus yoked song; test the top predictions in P1 | Computational, now | Pull all neurons within two synapses upstream of vpoDN and pC1 in FlyWire; check that pC2 and vpoEN appear with song-pathway inputs |
| P3. Neuron-in-the-loop song optimization | An online search over song parameters, guided by live pC2, pC1 or vpoEN responses, finds songs that drive receiver neurons beyond natural song, and those songs predict acceptance | Head-fixed virgin female on a ball; two-photon imaging with split-GAL4 lines; Bayesian optimization of inter-pulse interval, pulse/sine mix and bout structure; replay the optimized songs to freely behaving females | Wet lab, months | Reproduce the pC2 inter-pulse-interval tuning curves [10] with automated stimulus delivery, then add the optimizer |
| P4. Partner-triggered neural write | Activating female vpoEN or pC2 with light only while the male sings pulse song raises acceptance more than the same light dose on a random schedule | DAS song detection [17]; FlyMAD-style targeting [16], or whole-arena light with a female-only genotype; three arms: song-gated, matched random, none | Wet lab, months | Measure song-to-light latency end to end; pilot with pC1 activation, which has known effects [11] |
| P5. Conversation-metrics benchmark | Transfer entropy and turn-taking statistics show bidirectional influence in fly courtship, and the same pipeline ranks bird, whale and robot "conversation" claims | One pipeline over published fly courtship datasets (availability unverified), zebra finch turn-taking data [23] and the humpback playback annotations [26]; compare against shuffled and yoked controls | Computational, now | Find one public fly dataset with song annotations and both flies' tracks; compute transfer entropy in both directions |
| P6. Linked-VR fly pair with imaging of both brains | Two tethered flies, each seeing a live rendering of the other and hearing the other's song, sustain courtship-like exchanges while sender (P1, pIP10) and receiver (pC2, pC1, vpoEN) neurons are imaged | Couple two ball-tracking VR rigs [7] with low-latency streaming of pose and song; record the tethered male's song with a laser or particle-velocity microphone; yoked-partner control | Moonshot | Check that a tethered male sings contingently to a VR target driven by recorded female trajectories |

## Leads needing confirmation

Every item below rests on one verifier, a correction, or no check at all.

- **Tethered pursuit [7].** One verifier recalls an open-loop target. If so, no preparation here closes the visual loop around a tethered male. The gating site is also unconfirmed.
- **Two-regime sequencing [5].** The corrected mechanism rests on one verifier's recall of the abstract.
- **Receptivity circuit [12].** The venue correction needs confirming, as does which neurons were imaged with song.
- **Persistent state [11].** The aggression finding may belong to Schretter et al. 2020 (eLife). Direct imaging of persistent activity in pC1 is unconfirmed.
- **FlyMAD [16].** One verifier recalls optogenetic as well as thermogenetic activation. Neither verifier confirms use during live courtship.
- **SLEAP [18].** One verifier recalls these details from the abstract: over 800 frames per second, latency under about 3.5 ms, and a demonstration with interacting flies. The stimulation design is unchecked.
- **Wren duets [25].** One verifier recalls the modulation as largely inhibitory. Its direction and the recording setting are unconfirmed.
- **Humpback byline [26].** Fournet M may not be an author, and Sharpe F and Frediani J may be missing.
- **RoboBee and RoboFish [21][22].** The comparisons with natural dances and with fixed-path motion come from recall and were not checked.
- **VNC song circuits [31].** The named neurons may not be the paper's focus. The companion paper that recorded activity (Shiozaki et al. 2024, Nature Neuroscience) is unchecked (see Track 01).
- **Named but unchecked.** Kohatsu et al. 2011/2015 (tethered male VR), Clemens et al. 2015 (female song evaluation), Shiu et al. 2024 (whole-brain model), Grover et al. 2016/2020 (Flyception imaging in courting males), and Wang F et al. 2020 (DNp13 and ovipositor extrusion).
- **CHAT "sargassum" report (circa 2013).** This was a single anecdotal detection publicized in the press and should not be cited as a finding.

## Claims dropped in verification

No claims were dropped. Four were kept with corrections:

- **T06-05.** "Different circuit routes in courting versus solitary males" became "one pathway in two regimes, near versus far from the female".
- **T06-07.** "Pursuit in closed loop" was removed, because one verifier recalls an open-loop target. The gating site is now marked unconfirmed.
- **T06-12.** The venue was corrected from Neuron 109:101-118 to Nature 589:577-581 (2021).
- **T06-32.** "Network flows toward pC2" was replaced by "a non-hierarchical network whose cell-type responses are predictable from inputs".

The citation for T06-14 was also fixed. Kyriacou et al. 2017 preceded Stern et al. 2017, so it was not a rebuttal of that paper.

## Sources

1. Dynamic sensory cues shape song structure in Drosophila -- Coen P, Clemens J, Weinstein AJ, Pacheco DA, Deng Y, Murthy M -- Nature 507:233-237, 2014 -- URL not verified
2. Sensorimotor transformations underlying variability in song intensity during Drosophila courtship -- Coen P, Xie M, Clemens J, Murthy M -- Neuron 89:629-644, 2016 -- URL not verified
3. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience 22:2040-2049, 2019 -- URL not verified
4. Discovery of a new song mode in Drosophila reveals hidden structure in the sensory and neural drivers of behavior -- Clemens J, Coen P, Roemschied FA, Pereira TD, Mazumder D, Aldarondo DE, Pacheco DA, Murthy M -- Current Biology 28:2400-2412, 2018 -- URL not verified
5. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA, Pacheco DA, Aragon MJ, Ireland EC, Li X, Thieringer K, Pang R, Murthy M -- Nature 622:794-801, 2023 -- URL not verified
6. Mapping model units to visual neurons reveals population code for social behaviour -- Cowley BR, Calhoun AJ, Rangarajan N, Ireland E, Turner MH, Pillow JW, Murthy M -- Nature 629:1100-1108, 2024 -- URL not verified
7. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature 595:549-553, 2021 -- URL not verified
8. Neuronal control of Drosophila courtship song -- von Philipsborn AC, Liu T, Yu JY, Masser C, Bidaye SS, Dickson BJ -- Neuron 69:509-522, 2011 -- URL not verified
9. Central brain neurons expressing doublesex regulate female receptivity in Drosophila -- Zhou C, Pan Y, Robinett CC, Meissner GW, Baker BS -- Neuron 83:149-163, 2014 -- URL not verified
10. Shared song detector neurons in Drosophila male and female brains drive sex-specific behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29:3200-3215, 2019 -- URL not verified
11. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco D, Encarnacion-Rivera L, Pereira T, Fathy R, Clemens J, et al., Seung HS, Murthy M -- eLife 9:e59502, 2020 -- URL not verified
12. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Nature 589:577-581, 2021 (corrected from Neuron 109:101-118) -- URL not verified
13. Pulse interval as a critical parameter in the courtship song of Drosophila melanogaster -- Bennet-Clark HC, Ewing AW -- Animal Behaviour 17:755-759, 1969 -- URL not verified
14. Experimental and statistical reevaluation provides no evidence for Drosophila courtship song rhythms -- Stern DL, Clemens J, Coen P, Calhoun AJ, Hogenesch JB, Arthur BJ, Murthy M -- PNAS 114:9978-9983, 2017 -- URL not verified. Related: Stern 2014 (BMC Biology); Kyriacou et al. 2017 (PNAS 114:1970-1975), which replied to Stern 2014 and was answered by this paper.
15. Female copulation song is modulated by seminal fluid -- Kerwin P, Yuan J, von Philipsborn AC -- Nature Communications 11:1430, 2020 -- URL not verified
16. FlyMAD: rapid thermogenetic control of neuronal activity in freely walking Drosophila -- Bath DE, Stowers JR, Hörmann D, Poehlmann A, Dickson BJ, Straw AD -- Nature Methods 11:756-762, 2014 -- URL not verified
17. Fast and accurate annotation of acoustic signals with deep neural networks -- Steinfath E, Palacios-Muñoz A, Rottschäfer JR, Yuezak D, Clemens J -- eLife 10:e68837, 2021 -- URL not verified
18. SLEAP: A deep learning system for multi-animal pose tracking -- Pereira TD, Tabris N, Matsliah A, Turner DM, Li J, Ravindranath S, Papadoyannis ES, Normand E, Deutsch DS, Wang ZY, et al. -- Nature Methods 19:486-495, 2022 -- URL not verified
19. Social integration of robots into groups of cockroaches to control self-organized choices -- Halloy J, Sempo G, Caprari G, Rivault C, et al., Deneubourg JL -- Science 318:1155-1158, 2007 -- URL not verified
20. Robots mediating interactions between animals for interspecies collective behaviors -- Bonnet F, Mills R, Szopek M, Schönwetter-Fuchs S, Halloy J, Bogdan S, Correia L, Mondada F, Schmickl T -- Science Robotics 4:eaau7897, 2019 -- URL not verified
21. Dancing honey bee robot elicits dance-following and recruits foragers -- Landgraf T, Bierbach D, Kirbach A, Cusing R, Oertel M, Lehmann K, Greggers U, Menzel R, Rojas R -- arXiv preprint 1803.07126, 2018 -- URL not verified
22. RoboFish: increased acceptance of interactive robotic fish with realistic eyes and natural motion patterns by live Trinidadian guppies -- Landgraf T, Bierbach D, Nguyen H, Muggelberg N, Romanczuk P, Krause J -- Bioinspiration & Biomimetics 11:015001, 2016 -- URL not verified
23. The forebrain song system mediates predictive call timing in female and male zebra finches -- Benichov JI, Benezra SE, Vallentin D, Globerson E, Long MA, Tchernichovski O -- Current Biology 26:309-318, 2016 -- URL not verified
24. Inhibition within a premotor circuit controls the timing of vocal turn-taking in zebra finches -- Benichov JI, Vallentin D -- Nature Communications 11:221, 2020 -- URL not verified
25. Neurophysiological coordination of duet singing -- Coleman MJ, Day NF, Rivera-Parra P, Fortune ES -- PNAS 118:e2018188118, 2021 (see also Fortune et al. 2011, Science 334:666-670) -- URL not verified
26. Interactive bioacoustic playback as a tool for detecting and exploring nonhuman intelligence: 'conversing' with an Alaskan humpback whale -- McCowan B, Hubbard J, Walker L, Fournet M, Doyle L, et al. (byline unconfirmed) -- PeerJ 11:e16349, 2023 -- URL not verified
27. An underwater wearable computer for two way human-dolphin communication experimentation -- Kohlsdorf D, Gilliland S, Presti P, Starner T, Herzing D -- Proceedings of the International Symposium on Wearable Computers (ISWC), 2013 -- URL not verified
28. DolphinGemma announcement (Google blog / press, April 2025) -- Google DeepMind/Google with Georgia Tech (Starner) and Wild Dolphin Project (Herzing) -- Corporate announcement, 2025 -- URL not verified
29. A brain-to-brain interface for real-time sharing of sensorimotor information -- Pais-Vieira M, Lebedev M, Kunicki C, Wang J, Nicolelis MAL -- Scientific Reports 3:1319, 2013 -- URL not verified
30. Non-invasive brain-to-brain interface (BBI): establishing functional links between two brains -- Yoo SS, Kim H, Filandrianos E, Taghados SJ, Park S -- PLoS ONE 8:e60410, 2013 -- URL not verified
31. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology 34:808-824, 2024 -- URL not verified
32. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, Eckstein N, Funke J, Dickson BJ, Murthy M -- Current Biology 32:3317-3333, 2022 -- URL not verified
