# Track 06 -- From broadcast to conversation: closed-loop, two-way interaction with animals

*Interspecies Communication Research Program · 2026-09-25 · 32 claims kept of 32 · live-search audit: confirmed 30, corrected 2, not live-checked 0, dropped 0 · tags: [HIGH] [MED] [LOW] [CONFLICT]*

**How this was verified.** Round 1 had one researcher, working without web access because the session search cap had been reached, and two independent verifiers, one checking source fidelity and one acting as an adversarial skeptic. The verifiers also had no web access and checked claims from their own knowledge. In practice each claim was confirmed or corrected by one verifier. In round 2 a live auditor checked all 32 claims against live web search results. A second opinion was reserved for contradicted claims. None was contradicted, so no second opinion was needed: 30 claims were confirmed and 2 corrected. [HIGH] means the finding itself was visible in live search results, or both round-1 verifiers confirmed it and its source came from a live search. [MED] means the source was confirmed but the finding was not directly visible, or the claim was corrected, or it rests on a single verifier. [LOW] means not located or unconfirmed, and [CONFLICT] means the checks disagree. Of the 32 claims, 17 are [HIGH], 15 are [MED], and none is [LOW] or [CONFLICT]. A few statements are the researcher's own framing or assessments rather than sourced claims. They carry [LOW].

## Bottom line

- **No fly study in the verified set records neurons during a live two-way exchange.** Every fly result where neurons "light up" comes from song playback during imaging, not from a live partner. The neurons are the pC2l/pC2m song detectors [HIGH][10], female pC1 [HIGH][9], vpoEN [MED][12] and a wider central-brain auditory network [MED][32]. Activity during real turn-taking has been recorded only in birds: zebra finch HVC and duetting wrens in the wild [HIGH][24][25].
- **The male fly already runs a feedback loop.** He picks pulse or sine song, bout structure and loudness from the female's movement and distance [HIGH][1][2], and chooses between two pulse types by distance and position [MED][4]. His cue-to-song rules differ across three latent states. Activating pIP10, the descending song neurons, is sufficient to switch states [MED][3].
- **The fly is the only system here with handles on both partners.** Sender neurons (P1, pIP10, VNC song circuits) can be driven to produce song [MED][8]. Connectome analysis resolves the VNC song circuits into nested pulse and sine pathways [HIGH][31]. Receiver neurons (pC2, pC1) respond to song [HIGH][9][10]. vpoDN combine song input from vpoEN with mating status from pC1 and drive a measurable acceptance reply, vaginal plate opening [MED][12].
- **The decisive experiment is missing from the verified set.** It would compare an artificial partner that answers the female contingently with a yoked replay of the identical song [LOW]. The tools exist: millisecond song detection (DAS) [HIGH][17], targeted stimulation of freely moving flies (FlyMAD) [MED][16] and real-time pose tracking (SLEAP) [MED][18]. The closest precedent is a 2026 lead found in live search but not independently verified. Song-triggered optogenetic activation of female "moonwalker" descending neurons made females walk backward, and males changed their song strategy and kept it with normal females [MED] (see New leads).
- **Non-fly "conversations" so far are contingent exchanges or one-bit links, not shared meaning.** The humpback "Twain" exchange involved one whale in one encounter [HIGH][26]. DolphinGemma is a corporate announcement with no peer-reviewed evaluation of meaning [HIGH][28]. Brain-to-brain interfaces transmitted single binary choices [MED][29], [HIGH][30].
- **Artificial partners engage animals when they carry the right cues and respond to the animal.** Odor-coated robots steered cockroach groups [HIGH][19]. Zebra finches learned to time their calls around a vocal robot [HIGH][23]. Guppies more readily accepted a robot fish with realistic eyes and responsive motion [MED][22].
- **Seventeen of 32 claims are [HIGH], and the live audit contradicted none.** The 15 [MED] claims have confirmed sources, but specific details were not visible in search results. Check these before external use: the pIP10 attribution for state switching, the Pslow-when-close direction, the pC1 persistent-state findings, SLEAP's closed-loop demonstration, FlyMAD's use on P1 and pIP10, the predictability clause in the auditory-network study, the rat interface accuracy figures, and the CHAT conference paper.

## What the evidence shows

### 1. From eavesdropping to conversation

The researcher's working frame has six levels. It is an organizing device, not a sourced finding [LOW]:

- **L1 eavesdrop:** record and segment signals.
- **L2 decode:** map signals to context or state.
- **L3 playback:** write signals open-loop.
- **L4 contingent reply:** answer the animal in real time.
- **L5 co-adaptation:** animal and agent shape each other's decisions over time.
- **L6 neural read/write:** read or write brain state inside the exchange.

Fly work in the verified set sits mostly at L2-L3, plus open-loop L6. Neurons are driven or recorded, but never while a partner answers. The L4-L5 examples here are birds, robots and cetaceans (section 7). If confirmed, the 2026 moonwalker-feedback lead would add a fly example at L4-L5 on the male side (see New leads).

### 2. The male already runs a closed loop (L2)

Freely courting males choose pulse or sine song, and structure their bouts, from the female's movement cues: her speed, and the male-female distance and position [HIGH][1]. Much song variability that looked stochastic is therefore driven by female feedback, and it depends on the male's sensory (largely visual) access to her (behavioral) [HIGH][1]. The paper attributes the patterning to fast changes in both visual and self-motion signals, so vision is not the only input [HIGH][1]. Males also scale song amplitude with distance, singing louder when farther away. This roughly compensates for the steep fall-off of near-field courtship sound [HIGH][2]. The same paper traces the transformation from visual features to neural and muscle activity [HIGH][2].

A second pulse type adds another feedback-dependent channel. Males choose between Pslow (lower frequency, symmetrical) and Pfast (higher frequency, asymmetrical) according to their distance to and position relative to the female, and Pslow tends to be used when close [MED][4]. Visual feedback influences the probability of each song mode, and four neuron types differentially affect mode choice [MED][4]. The close-range direction itself was not visible in live search results.

The rules linking female cues to male song change with the male's internal state. A GLM-HMM fitted to natural courtship identified three latent states. Each state maps female feedback cues to song mode differently, and together they predict moment-to-moment song choices (model plus causal manipulation) [MED][3]. Activating a pair of neurons previously considered song command neurons, pIP10, was sufficient to drive switching between states [MED][3]. The attribution rests on the abstract's phrase "a pair of neurons previously thought to be command neurons for song production". That fits pIP10, a single bilateral pair of descending neurons, rather than the larger P1/pC1 cluster, but it should be confirmed in the full text [MED][3].

The male's representation of the female, which drives courtship behaviors including song, is distributed across a population of lobula columnar (LC) visual projection neuron types rather than carried by one dedicated channel [HIGH][6]. The evidence combines silencing of individual LC types (more than a dozen were perturbed), calcium imaging, and a deep network trained with "knockout training" [HIGH][6]. In tethered males walking on a ball, pursuit of a moving fly-sized visual target depends on P1-mediated sexual arousal. Two-photon imaging with optogenetic P1 activation showed that arousal gates how LC10a visual signals drive the pursuit [MED][7]. The live audit located the gating: LC10a gain rises during courtship, and P1 activity continuously tunes the gain of the LC10a pathway. In a network model, that gain almost fully specifies tracking [MED][7]. Whether the target moved in closed or open loop remains unconfirmed [MED][7].

### 3. Writing the sender (L6, male side)

Thermogenetic activation of fruitless-expressing neurons elicits courtship song with no female present (causal manipulation) [MED][8]. The brain neurons P1 and the descending neuron pIP10 drive song in solitary males. Thoracic song neurons such as dPR1 and vPR6 shape song features, even in decapitated flies [MED][8]. Live search text confirms that five classes of fru neuron trigger or compose the song, and that activation works in isolated males without the usual sensory inputs. The decapitated-fly result was not visible [MED][8]. Song evoked with no female present cannot carry the feedback-dependent structure of natural song [HIGH][1], so driving the song circuit is not the same as taking a turn.

Male flies sing simple single-mode trains far from the female and complex pulse-sine sequences near her. Roemschied et al. (2023) combined optogenetic manipulation (for example of P1a and pIP10) with circuit modeling [MED][5]. They propose that a single brain-to-VNC pathway operates in two regimes set by recent sensory history, rather than parallel circuits [MED][5]. Brief input drives simple song. Prolonged input recruits disinhibition of VNC song circuits, which are built on mutual inhibition and rebound excitability, and so enables complex sequences near the female [MED][5]. Live search confirmed the two-regime mechanism but did not show the specific optogenetic targets.

Analysis of the Male Adult Nerve Cord (MANC) connectome identified nested premotor circuits in the ventral nerve cord that generate pulse versus sine song. Some neurons are shared and some are specific to one song type, and optogenetic tests supported their roles (wiring plus causal manipulation) [HIGH][31]. The paper describes a highly interconnected core of eight fru and/or dsx cell types, organized as two nested feedforward pathways. The smaller pathway generates sine song and the larger generates pulse song [HIGH][31].

FlyMAD tracks freely walking flies and aims a laser at individual flies, even specific body regions, with low latency [MED][16]. It enabled thermogenetic or optogenetic activation of neurons such as P1 and pIP10 during ongoing courtship interactions [MED][16]. Live search confirmed laser targeting within fractions of a second, demonstrated on locomotion, vision and courtship neurons. The results emphasized thermogenetic control, and the optogenetic use and the specific P1 and pIP10 experiments were not visible.

### 4. Reading the receiver: female neurons that light up for song

This section answers the program lead's question most directly. Every recording below used song playback during imaging, not a live partner [HIGH][9][10], [MED][12][32].

- **pC2l, pC2m.** These doublesex-expressing neurons exist in both sexes and respond selectively to conspecific pulse song. Their inter-pulse-interval tuning matches behavioral preferences, and activating them drives sex-specific behavioral responses to song. The evidence is head-fixed two-photon imaging plus optogenetic activation [HIGH][10]. The paper describes pC2 neurons as tuned to multiple temporal aspects of one song mode, with behavioral tuning similar across sexes [HIGH][10]. The pC2l/pC2m subtype names were not visible in search results.
- **Upstream auditory network.** Baker et al. (2022) combined FlyWire EM reconstruction with calcium imaging during song playback and mapped 24 new auditory cell types [MED][32]. Auditory neurons in the central brain show a continuum of pulse and sine song preferences. Cell types with different preferences are highly interconnected in a non-hierarchical network [MED][32]. Each cell type's song responses can nonetheless be predicted from its synaptic inputs [MED][32]. That last clause was not visible in live search results and needs separate verification.
- **Female pC1.** In virgin females, doublesex-expressing pC1 neurons respond to male courtship song and to the male pheromone cVA in calcium imaging. Silencing pC1 reduces receptivity, so pC1 acts as a multisensory receiver integrator [HIGH][9]. The paper implicates pCd as well: pC1 and pCd both respond to cVA, silencing them makes females unreceptive, and activation promotes receptivity [HIGH][9].
- **Persistent state.** Brief optogenetic activation of female pC1 neurons produces a persistent internal state lasting minutes. It changes how females respond to male song playback and also elicits aggressive behaviors [MED][11]. EM reconstruction from FAFB showed recurrent connectivity among pC1 subtypes, notably pC1d and pC1e, consistent with the persistence (causal manipulation plus wiring) [MED][11]. Live search confirmed the article but did not show these findings.
- **vpoEN and vpoDN.** vpoDN, a pair of female-specific descending neurons, trigger vaginal plate opening (VPO), the acceptance behavior [MED][12]. They integrate excitatory input from vpoEN, which respond to conspecific pulse song, with input from pC1 neurons that reflect mating status. Activating the pathway promotes VPO (recorded activity plus causal manipulation) [MED][12].

Together these give identified cells at each stage of the female's side [HIGH][9][10], [MED][11][12][32]. The auditory network, which includes pC2, represents song features. pC1 holds the female's state, vpoEN carry pulse-song input to vpoDN, and vpoDN produce the reply. The verified set does not establish every link between these stages.

### 5. The female's reply and open-loop playback

Vaginal plate opening is the clearest measurable reply in this set [MED][12]. Females also produce their own wing-vibration song during copulation, and male seminal fluid modulates it, so acoustic signalling in fly courtship is not one-way [HIGH][15]. The song requires DsxF neurons, depends on transfer of seminal fluid from the male accessory gland, and raises male reproductive success under competition [HIGH][15]. It follows acceptance, so it is not a pre-mating turn. Female rejection signals, such as ovipositor extrusion, were not among the checked claims.

Playback of artificial pulse song with the conspecific inter-pulse interval (roughly mid-30 ms) sped up mating when females were paired with wingless (mute) males. Songs with other intervals were less effective [MED][13]. A playback signal can therefore substitute for part of the male's side of the dialogue (behavioral) [MED][13]. Live search text gives the interval as about 34 ms and states that species specificity is set by pulse interval rather than pulse length. The wingless-male design and the mating result were not visible.

The reported ~55 s oscillation in inter-pulse interval (the Kyriacou-Hall song rhythm), and its claimed role in female preference, was not supported by large re-recordings and statistical reanalyses [HIGH][14]. The original authors dispute this and attribute the failures to pulse-detection problems and low-intensity courtship [HIGH][14]. Their rebuttal was not checked in the live audit. A 2021 correction to the reanalysis's Supporting Information fixed a cosinor-code error (degrees used instead of radians) that had underestimated true positives, and it should be cited with the paper [14]. The program should not build on this rhythm as a communication channel.

### 6. Tools that can close the loop in flies

- **DAS.** The Deep Audio Segmenter annotates fly courtship song (pulse and sine) and bird song with deep networks, with millisecond latency suitable for closed-loop experiments [HIGH][17]. The paper covers signals from insects, birds and mammals. It is a tool, not a demonstrated exchange.
- **SLEAP.** Its multi-animal pose tracking can run inference in real time, fast enough for closed-loop control, and the paper demonstrated closed-loop experiments in interacting flies [MED][18]. The source is confirmed, but the real-time and closed-loop demonstration was not visible in live search text.
- **FlyMAD.** It targets stimulation to individual moving flies [MED][16].
- **Song-triggered feedback.** The 2026 moonwalker lead, found by the auditor but not independently verified, used real-time closed-loop optogenetics triggered by the male's pulse song (see New leads).
- **Unchecked tools.** The researcher also listed FreemoVR, PiVR and SongExplorer [LOW].

### 7. Contingent partners in other animals (L4-L5)

**Birds** give the only turn-taking with recorded neurons. Zebra finches exchanging calls with a computer-controlled vocal robot learned to time their calls predictively to avoid overlapping the robot's calls. This predictive turn-taking depends on the forebrain song system [HIGH][23]. Lesioning the song-system nucleus RA impaired the timing adjustment while birds still responded to the robot, and females showed better timing plasticity (behavioral plus lesion) [HIGH][23]. In zebra finches, inhibition within the premotor nucleus HVC controls when a bird calls back to a partner [HIGH][24]. Local inhibition precedes call-related premotor activity, and pharmacologically blocking it speeds responses and impairs flexible overlap avoidance (recorded activity plus pharmacology) [HIGH][24]. Neural recordings from both members of plain-tailed wren pairs singing duets in their natural habitat, the Ecuadorian Andes, showed that auditory input from the partner modulates activity in each bird's HVC. This coordinates the rapid alternation of syllables between partners (recorded activity) [HIGH][25]. The modulation is inhibitory: the partner's sound decreased HVC activity, alternating with each bird's own premotor activity [HIGH][25].

**Robots in groups.** Autonomous robots coated with cockroach odor were accepted into groups of American cockroaches and shifted the mixed group's collective shelter choice, including toward a shelter the insects would not normally prefer. Robots and animals jointly determined the group decision [HIGH][19]. Live search text confirms the shared shelter selection but did not show the non-preferred-shelter result explicitly. Robots in a honeybee arena (Graz, Austria) and a zebrafish tank (Lausanne, Switzerland) were linked so that each relayed its own group's behavior to the other. The two groups came to coordinate their collective decisions without ever meeting [HIGH][20]. Guppies were more likely to accept and follow RoboFish when it had realistic eyes and moved in response to the live fish rather than along fixed paths [MED][22]. The paper's own phrase is "natural motion patterns", and the closed-loop versus fixed-path contrast was not visible. A robotic honeybee dancer (RoboBee) in an observation hive drew dance-followers, and some followers were recruited toward the advertised location, but recruitment was weaker and less consistent than for natural waggle dances [MED][21]. Harmonic-radar tracking showed that followers adjusted their flight paths using the robotic dance. The comparison with natural dances was not visible, and the work is still a preprint. These are behavioral results about collective decisions and following, not conversation [HIGH][19][20].

**Cetaceans.** Playback of a recorded humpback "whup/throp" contact call to a free-ranging female humpback whale ("Twain") in Southeast Alaska produced an extended exchange. She approached and gave about three dozen call responses over roughly 20 minutes, with timing that tracked the playback intervals [HIGH][26]. The paper analyzes response latency and temporal matching across three phases (engagement, agitation, disengagement) [HIGH][26]. The call count was not visible in live search, and the "intentional" framing is the authors' interpretation. This was one animal in one encounter, and it shows contingent timing, not shared meaning. CHAT (Cetacean Hearing Augmentation Telemetry) is an underwater wearable computer. Researchers use it with free-ranging Atlantic spotted dolphins to play synthetic whistles associated with objects and to detect in real time whether dolphins mimic them [MED][27]. A Georgia Tech project page and the 2025 DolphinGemma blog confirm the system; the blog names scarves and seaweed among the objects. The cited 2013 conference paper was not located. Google, Georgia Tech and the Wild Dolphin Project announced DolphinGemma, a roughly 400M-parameter audio model trained on the Wild Dolphin Project's Atlantic spotted dolphin recordings. It uses SoundStream tokenization to predict likely next vocalization sounds and is intended to run on smartphones within CHAT. The announcement contained no peer-reviewed evaluation of meaning [HIGH][28].

### 8. Linking brains directly

In a rat brain-to-brain interface, cortical activity recorded from an encoder rat performing a tactile or visual discrimination was delivered as intracortical microstimulation to a decoder rat [MED][29]. The decoder chose correctly above chance, with modest accuracy of roughly 60-70% against 50% chance. The encoder was rewarded when the decoder was correct, closing a dyadic loop [MED][29]. Live search confirmed the design, including an Internet link between Natal and Durham, but not the accuracy figures or the reward loop. In a second setup, a human's EEG (steady-state visual evoked potentials expressing intent) drove transcranial focused ultrasound over an anesthetized rat's motor cortex. It triggered tail movements with 94.0 ± 3.0% accuracy and a 1.59 ± 1.07 s delay [HIGH][30]. Both links carry single binary choices. The rat loop closes only through reward, so neither is an exchange of content.

### 9. What wiring can and cannot say

Wiring shows possible pathways. Saying that neurons "light up" needs imaging or electrophysiology [HIGH][9][10]. The two connectome-based results in this set expose different amounts of structure. In the VNC, MANC wiring resolved the song circuits into nested pathways whose roles optogenetic tests supported [HIGH][31]. In the central brain, auditory cell types with different song preferences form a highly interconnected, non-hierarchical network [MED][32]. If each type's responses are predictable from its synaptic inputs, as the claim states, that result supports connectome-constrained models; the clause was not visible in live search [MED][32]. According to the researcher, no connectome-constrained model yet reproduces the two-way courtship exchange. This was not checked against the literature [LOW]. Three live-search leads bear on it: a complete male CNS connectome, a male-female VNC connectome alignment, and a 2025 brain-emulation survey (see New leads).

## Results tables

**Fly circuits for a two-way exchange**

| Neuron / cell type | Role | Sex | Evidence type | Confidence | Source # |
|---|---|---|---|---|---|
| P1 (male) | Arousal and command; drives song; tunes LC10a pathway gain during pursuit | Male | Causal manipulation; recorded activity (tethered) | MED | 7, 8, 16 |
| pIP10 | Descending neuron pair; elicits song; activation switches latent song states; input to VNC song circuits | Male | Causal manipulation; model | MED | 3, 5, 8, 16 |
| dPR1, vPR6, TN1A; MANC song core | VNC song neurons shape song features; core of eight fru/dsx types in nested sine and pulse pathways | Male | Causal manipulation; wiring plus causal | MED (8); HIGH (31) | 8, 31 |
| LC population incl. LC10a | Distributed population code for the female; LC10a gain set by arousal | Male | Silencing plus imaging plus model; recorded activity | HIGH (6); MED (7) | 6, 7 |
| pC2l, pC2m | Pulse-song detectors; tuning matches behavior | Both | Recorded activity plus causal | HIGH | 10 |
| Auditory cell types (AMMC/WED; 24 new types) | Pulse-sine continuum; non-hierarchical network | Female | Wiring plus recorded activity | MED | 32 |
| pC1, pCd (female) | pC1 responds to song and cVA, pCd to cVA; needed for receptivity | Female | Recorded activity plus causal | HIGH | 9 |
| pC1d, pC1e | Minutes-long persistent state; recurrent wiring | Female | Causal plus wiring | MED | 11 |
| vpoEN | Respond to conspecific pulse song; excite vpoDN | Female | Recorded activity plus causal | MED | 12 |
| vpoDN | Female-specific descending pair; integrate song and mating status; trigger VPO | Female | Causal manipulation | MED | 12 |

**Interactive and closed-loop demonstrations**

| Project | Species | What was shown | Evidence | Confidence | Source # |
|---|---|---|---|---|---|
| Vocal robot | Zebra finch (female and male) | Predictive call timing; RA lesion impairs the adjustment | Behavioral plus lesion | HIGH | 23 |
| HVC turn-taking | Zebra finch | HVC inhibition sets reply timing | Recorded activity plus pharmacology | HIGH | 24 |
| Duet recordings | Plain-tailed wren (field, Ecuador) | Partner sound inhibits HVC, alternating with own premotor activity | Recorded activity | HIGH | 25 |
| InsBot | American cockroach | Robots shift group shelter choice | Behavioral | HIGH | 19 |
| ASSISIbf | Honeybee, zebrafish | Robot-linked groups in two cities coordinate decisions | Behavioral | HIGH | 20 |
| RoboFish | Guppy | Realistic eyes and responsive motion raise acceptance | Behavioral | MED | 22 |
| RoboBee | Honeybee | Dance-following; weaker recruitment than natural dances | Behavioral (preprint) | MED | 21 |
| Twain playback | Humpback, n=1 | About three dozen calls in about 20 min, timed to playback | Behavioral (field) | HIGH | 26 |
| CHAT | Atlantic spotted dolphin | Object-linked whistle playback; real-time mimic detection | Tool | MED | 27 |
| DolphinGemma | Atlantic spotted dolphin | ~400M-parameter next-sound model; no evaluation of meaning | Announcement | HIGH | 28 |
| Rat brain-to-brain | Rat | Decoder about 60-70% against 50% chance | Causal manipulation | MED | 29 |
| Human-to-rat link | Human, rat | EEG-triggered ultrasound moves tail, 94% accuracy | Causal manipulation | HIGH | 30 |

## Why this matters for two-way communication with animals

- **Contingency separates conversation from stimulation.** An exchange is conversation-like only if the animal responds differently to a partner that answers it than to an exact replay. The fly lets that control run with identified receiver neurons as the readout [HIGH][10], [MED][11][12]. The same yoked design carries over to bird, whale and robot playback.
- **A partner must track state, not just cues.** Male flies change how they map female cues to song as their latent state changes [MED][3]. A partner that follows a fixed rule will look erratic to the animal. The 2026 moonwalker lead suggests the mapping also shifts with recent social experience (see New leads).
- **Pacing follows the receiver's memory.** Brief pC1 activation shifts female responses to song for minutes [MED][11]. Male song sequencing depends on recent sensory history, with brief and prolonged input producing different regimes [MED][5]. Earlier turns change how later ones land, so trials cannot be treated as independent.
- **The reply must be measurable and causally grounded.** Vaginal plate opening is a discrete reply with a known descending driver [MED][12]. Other species need an equally specific response, such as approach, acceptance or a matched call type, rather than call counts.
- **The fly can calibrate "conversation" metrics.** Metrics can be tested on fly courtship, where the causal links are known [HIGH][1], [MED][3], before they are applied to single-encounter data such as the humpback playback [HIGH][26].

## Open questions

1. Does a contingent partner shift the female's receiver state (pC1, vpoEN, the persistent state) or her acceptance more than a yoked replay of the same song?
2. Does the male model the female's state beyond her instantaneous movement? P1 tunes LC10a gain [MED][7] and pIP10 activation switches song states [MED][3]. Along the route from the LC population [HIGH][6] through P1 to pIP10, where are her feedback and his latent state combined?
3. Can the male's next song choice be read in real time from P1 or pIP10 activity? Is that possible in tethered flies, or only in freely moving ones?
4. How long does the female's song memory last, and how should a synthetic partner pace its turns to match [MED][11]?
5. Which female-to-male signals does the male use in real time: slowing, ovipositor extrusion, vaginal plate opening, substrate vibration or pheromones? Which of these could a device detect and answer? Female rejection signals were missing from the checked claims. The 2026 moonwalker lead offers one synthetic female signal, backward walking, to which males responded.
6. Can identified fly neurons be recorded during a live two-fly exchange rather than playback? Verifiers flagged imaging in freely courting flies, but it was not checked here (see Track 04).
7. Can FlyWire, BANC, the complete male CNS connectome (Cell) and the male-female VNC alignment together trace the male's full loop? That loop runs from female cues through LC10a and the auditory neurons, then P1/pC1 and pC2, then pIP10, to the VNC song circuits. No verified claim here uses the newest connectomes; the live audit surfaced both as leads (see New leads and Tracks 01 and 05).
8. How quickly does a male adapt to a synthetic partner? The 2026 lead reports that males kept altered song strategies after aberrant feedback. Repeated exposure to an artificial partner may therefore reshape the sender (L5 co-adaptation), and experiments need naive-animal controls.
9. What operational definition of "conversation" should the program adopt? Candidates are transfer entropy, turn-taking structure and co-adaptation, each with controls for entrainment, habituation and pseudo-replication.
10. Which vertebrate paradigms were missed? Verifiers named marmoset antiphonal calling with virtual partners, closed-loop playback to bats and mice, song-type matching in songbirds, and electric fish.
11. What welfare and permit standards should govern neural write experiments, invasive brain-to-brain interfaces, and field playback to wild whales and dolphins?
12. What did 2025-2026 cetacean work show (Project CETI playback, the 2025 Coller-Dolittle Prize, DolphinGemma field results)? The live audit surfaced no new results on these; see Track 07.

## Candidate research projects

The projects are listed in priority order.

| Project | Hypothesis | Approach and data | Feasibility | First step |
|---|---|---|---|---|
| P1. Contingent versus yoked "virtual male" song partner | Song whose timing, pulse/sine choice and amplitude follow the female's own movement (rules from [1][2][3]) raises acceptance and receiver-neuron engagement more than a yoked replay of the same song | Virgin females alone or with wingless males; SLEAP tracking; real-time song from a GLM-HMM policy fitted to natural male song; the yoked group gets the exact sequence from a contingent session; measure vaginal plate opening, slowing and copulation latency | Wet lab, months | Build and calibrate the yoked playback rig, then replicate the open-loop baseline of [13] in it |
| P2. Connectome-constrained "digital female" | A model of the path from Johnston's organ through pC2, pC1 and vpoEN to vpoDN, including pC1 recurrence, reproduces song tuning and persistent state and ranks song sequences by simulated vpoDN drive | Extract the auditory-to-acceptance subgraph from FlyWire (and BANC or the male CNS connectome lead); fit a rate or integrate-and-fire model to published imaging [10][11][32]; simulate contingent versus yoked song; test the top predictions in P1 | Computational, now | Pull all neurons within two synapses upstream of vpoDN and pC1 in FlyWire; check that pC2 and vpoEN appear with song-pathway inputs; confirm in the full text of [32] that responses are predictable from inputs |
| P3. Neuron-in-the-loop song optimization | An online search over song parameters, guided by live pC2, pC1 or vpoEN responses, finds songs that drive receiver neurons beyond natural song, and those songs predict acceptance | Head-fixed virgin female on a ball; two-photon imaging with split-GAL4 lines; Bayesian optimization of inter-pulse interval, pulse/sine mix and bout structure; replay the optimized songs to freely behaving females | Wet lab, months | Reproduce the pC2 inter-pulse-interval tuning curves [10] with automated stimulus delivery, then add the optimizer |
| P4. Partner-triggered neural write | Activating female vpoEN or pC2 with light only while the male sings pulse song raises acceptance more than the same light dose on a random schedule | DAS song detection [17]; FlyMAD-style targeting [16], or whole-arena light with a female-only genotype; three arms: song-gated, matched random, none; the 2026 moonwalker study (New leads) is the closest design precedent for song-gated optogenetics on female neurons | Wet lab, months | Measure song-to-light latency end to end; pilot with pC1 activation, which has known effects [11] |
| P5. Conversation-metrics benchmark | Transfer entropy and turn-taking statistics show bidirectional influence in fly courtship, and the same pipeline ranks bird, whale and robot "conversation" claims | One pipeline over published fly courtship datasets (availability unverified), zebra finch turn-taking data [23] and the humpback playback annotations [26]; compare against shuffled and yoked controls | Computational, now | Find one public fly dataset with song annotations and both flies' tracks; compute transfer entropy in both directions |
| P6. Linked-VR fly pair with imaging of both brains | Two tethered flies, each seeing a live rendering of the other and hearing the other's song, sustain courtship-like exchanges while sender (P1, pIP10) and receiver (pC2, pC1, vpoEN) neurons are imaged | Couple two ball-tracking VR rigs [7] (whether [7] presented its target in closed loop is unconfirmed) with low-latency streaming of pose and song; record the tethered male's song with a laser or particle-velocity microphone; yoked-partner control | Moonshot | Check that a tethered male sings contingently to a VR target driven by recorded female trajectories |

## Leads needing confirmation

Every item below rests on a detail not visible in live search, a round-1 note, or no check at all.

- **State switching [3].** Confirm in the full text that the neurons whose activation switches states are pIP10. The state labels used in round 1 ("close", "chasing", "whatever") were not visible and have been removed. An Author Correction to the paper exists.
- **Pulse-type choice [4].** The direction (Pslow when close) was not visible.
- **Two-regime sequencing [5].** The mechanism was confirmed. The optogenetic targets (P1a, pIP10) and the 622:794-801 pagination were not shown.
- **Tethered pursuit [7].** Closed- versus open-loop target presentation is unconfirmed. One round-1 verifier recalled an open-loop target. If so, no preparation here closes the visual loop around a tethered male.
- **Song writing [8].** The decapitated-fly result was not visible.
- **pC2 subtypes [10].** The pC2l/pC2m names were not visible. A reissued record (PII S0960-9822(23)01049-7; PubMed 37699336) appears to be a 2023 re-publication or correction notice.
- **Persistent state [11].** Only the article's title, venue and number were confirmed. Round-1 verifiers flagged that the aggression finding may belong mainly to a companion paper (Schretter et al. 2020, eLife) and that direct imaging of persistent activity in pC1 is unconfirmed.
- **Pulse-interval playback [13].** The wingless-male design and the faster mating were not visible.
- **Song rhythm [14].** The Kyriacou rebuttal was not checked. Cite the 2021 Supporting Information correction with the reanalysis.
- **FlyMAD [16].** The optogenetic use and the P1 and pIP10 experiments were not visible. Round-1 verifiers could not confirm use during live courtship.
- **SLEAP [18].** The real-time and closed-loop demonstration was not visible. Round-1 recollections of specific frame-rate and latency figures remain unchecked and are not repeated here. A Publisher Correction to the paper exists.
- **Robot studies [19][20][21][22].** Four details were not visible: the non-preferred-shelter result [19], the city names [20], RoboBee's comparison with natural dances [21], and RoboFish's closed-loop versus fixed-path contrast [22]. For [22] the auditor suggests the wording "natural (including interactive) motion patterns".
- **Humpback playback [26].** The call count was not visible. The byline was not checked in the live audit. A round-1 verifier queried whether Fournet M is an author and whether Sharpe F and Frediani J are missing.
- **CHAT [27].** The ISWC 2013 paper was not located. The URL listed is the project page.
- **Rat interface [29].** The accuracy figures and the encoder-reward loop were not visible.
- **VNC song circuits [31].** The author list and 34:808-824 pagination were not shown, nor which of the named neurons (dPR1, vPR6, TN1A) belong to the eight-type core. A related follow-up, "Activity of nested neural circuits drives different courtship songs in Drosophila" (PMC11452343), surfaced in search and was not read. Round 1 named a companion activity paper (Shiozaki et al. 2024) that remains unchecked (see Track 01).
- **Auditory network [32].** The clause that responses are predictable from synaptic inputs was not visible. Verify it before relying on it for modeling.
- **Named but unchecked.** Kohatsu et al. 2011/2015 (tethered male VR), Clemens et al. 2015 (female song evaluation), Shiu et al. 2024 (whole-brain model), Grover et al. 2016/2020 (Flyception imaging in courting males), and Wang F et al. 2020 (DNp13 and ovipositor extrusion).
- **CHAT "sargassum" report (circa 2013).** This was a single anecdotal detection publicized in the press and should not be cited as a finding.

## New leads from live search (2025-2026)

The live auditor found these sources while checking claims. They were not independently verified and are not counted in the claim totals. Primary sources (journal articles, research preprints, official project pages) are tagged [MED]; secondary sources are tagged [LOW].

- [MED] **Recent social experience alters song behavior in Drosophila** -- Roemschied et al. (Murthy lab) -- Current Biology, online 3 Mar 2026 (bioRxiv 2025.09.04.674308; PubMed 41780528). Using real-time closed-loop optogenetics, the authors activated female "moonwalker" descending neurons each time the male sang pulse song, which made females walk backward. Males exposed to this aberrant feedback changed their mapping from social context to song choice, kept the altered strategies with normal females, and produced a novel song strategy. This is the closest experiment found to a closed-loop artificial partner in the fly. A Nature Reviews Neuroscience highlight (s41583-026-01043-3) covered it. -- https://www.cell.com/current-biology/fulltext/S0960-9822(26)00152-1
- [MED] **Sexual dimorphism in the complete Drosophila male central nervous system connectome** -- authors not shown in results -- Cell (PII S0092-8674(26)00942-6), 2025-2026. A complete male CNS connectome (brain plus nerve cord) analyzed for sexual dimorphism, following the 2025 completion of CNS connectomes (Bates et al.; Berg et al.). It would link P1, LC10a and the auditory pathway to the VNC song circuits in one wiring diagram; the verified claims use separate FAFB/FlyWire and MANC datasets. -- https://www.sciencedirect.com/science/article/pii/S0092867426009426
- [MED] **Sequencing of distinct wing behaviors during Drosophila courtship** -- authors not shown in results -- Current Biology, 2026. Its findings were not visible in search snippets. It may extend the song-sequencing results in [5] and [31]. -- https://www.cell.com/current-biology/fulltext/S0960-9822(26)00078-3
- [MED] **Uncovering Sex Differences in the Drosophila Ventral Nerve Cord Through Connectome Alignment** -- authors not shown in results -- PMC-indexed article, year unclear (likely 2025-2026). It compares male (MANC) and female (FANC) nerve cords. Sexually dimorphic and sex-specific VNC intrinsic neurons are strongly interconnected and concentrated in the wing tectulum and abdominal neuromere, and females, which do not sing, retain several sexually dimorphic song neurons. -- https://pmc.ncbi.nlm.nih.gov/articles/PMC13307954/
- [MED] **Neural evolution of complex motor behaviors: insights from Drosophila courtship song** -- authors not shown in results -- Current Opinion in Neurobiology, 2025 (review). It synthesizes how song circuits evolve across species and circuit levels, and can serve as a check that the song-production claims reflect current consensus. -- https://www.sciencedirect.com/science/article/pii/S095943882500162X
- [LOW] **State of Brain Emulation Report 2025** -- authors not shown in results -- arXiv 2510.15745, 2025. It surveys connectome-based brain emulation, including Drosophila whole-brain models, and bears on whether connectome-constrained fly models could act as an in-silico partner. The auditor classed it as a secondary source to be read critically. -- https://arxiv.org/pdf/2510.15745

## Claims dropped in verification

No claims were dropped in either round.

Round-1 corrections, kept and since confirmed or refined by the live audit:

- **Two-regime sequencing [5].** "Different circuit routes in courting versus solitary males" became "one pathway in two regimes, near versus far from the female". Live search confirmed the corrected version.
- **Tethered pursuit [7].** "Pursuit in closed loop" was removed, because one verifier recalled an open-loop target, and the gating site was marked unconfirmed. Live search has since located the gating at the gain of the LC10a pathway. The loop question remains open.
- **Receptivity circuit [12].** The venue was corrected from Neuron 109:101-118 to Nature 589:577-581 (2021). Live search confirmed the correction and supplied the issue number and DOI.
- **Auditory network [32].** "Network flows toward pC2" was replaced by "a non-hierarchical network whose cell-type responses are predictable from inputs". Live search confirmed the non-hierarchical organization but not the predictability clause.
- **Song-rhythm citation [14].** Kyriacou et al. 2017 preceded Stern et al. 2017, so it was not a rebuttal of that paper. This was not rechecked in the live audit.

Live-audit corrections:

- **State switching [3].** The neurons whose activation drives switching between latent states changed from P1/pC1 to pIP10, based on the abstract's wording. The state labels were removed.
- **Receptivity circuit [12].** The Nature citation was confirmed and applied with its DOI (see Sources).

## Sources

1. Dynamic sensory cues shape song structure in Drosophila -- Coen P, Clemens J, Weinstein AJ, Pacheco DA, Deng Y, Murthy M -- Nature 507:233-237, 2014 -- https://www.nature.com/articles/nature13131
2. Sensorimotor transformations underlying variability in song intensity during Drosophila courtship -- Coen P, Xie M, Clemens J, Murthy M -- Neuron 89:629-644, 2016 -- https://pubmed.ncbi.nlm.nih.gov/26844835/
3. Unsupervised identification of the internal states that shape natural behavior -- Calhoun AJ, Pillow JW, Murthy M -- Nature Neuroscience 22:2040-2049, 2019 (an Author Correction exists) -- https://www.nature.com/articles/s41593-019-0533-x
4. Discovery of a new song mode in Drosophila reveals hidden structure in the sensory and neural drivers of behavior -- Clemens J, Coen P, Roemschied FA, Pereira TD, Mazumder D, Aldarondo DE, Pacheco DA, Murthy M -- Current Biology 28:2400-2412, 2018 -- https://www.cell.com/current-biology/fulltext/S0960-9822(18)30773-5
5. Flexible circuit mechanisms for context-dependent song sequencing -- Roemschied FA, Pacheco DA, Aragon MJ, Ireland EC, Li X, Thieringer K, Pang R, Murthy M -- Nature 622:794-801, 2023 -- https://www.nature.com/articles/s41586-023-06632-1
6. Mapping model units to visual neurons reveals population code for social behaviour -- Cowley BR, Calhoun AJ, Rangarajan N, Ireland E, Turner MH, Pillow JW, Murthy M -- Nature 629:1100-1108, 2024 -- https://www.nature.com/articles/s41586-024-07451-8
7. Sexual arousal gates visual processing during Drosophila courtship -- Hindmarsh Sten T, Li R, Otopalik A, Ruta V -- Nature 595:549-553, 2021 -- https://www.nature.com/articles/s41586-021-03714-w
8. Neuronal control of Drosophila courtship song -- von Philipsborn AC, Liu T, Yu JY, Masser C, Bidaye SS, Dickson BJ -- Neuron 69:509-522, 2011 -- https://www.cell.com/neuron/fulltext/S0896-6273(11)00057-2
9. Central brain neurons expressing doublesex regulate female receptivity in Drosophila -- Zhou C, Pan Y, Robinett CC, Meissner GW, Baker BS -- Neuron 83:149-163, 2014 -- https://pubmed.ncbi.nlm.nih.gov/24991959/
10. Shared song detector neurons in Drosophila male and female brains drive sex-specific behaviors -- Deutsch D, Clemens J, Thiberge SY, Guan G, Murthy M -- Current Biology 29:3200-3215, 2019 -- https://www.sciencedirect.com/science/article/pii/S0960982219310243
11. The neural basis for a persistent internal state in Drosophila females -- Deutsch D, Pacheco D, Encarnacion-Rivera L, Pereira T, Fathy R, Clemens J, Girardin C, Calhoun A, Ireland E, Burke A, Dorkenwald S, McKellar C, Macrina T, Lu R, Lee K, Kemnitz N, Ih D, Castro M, Halageri A, Jordan C, Silversmith W, Wu J, Seung HS, Murthy M -- eLife 9:e59502, 2020 -- https://elifesciences.org/articles/59502
12. Neural circuit mechanisms of sexual receptivity in Drosophila females -- Wang K, Wang F, Forknall N, Yang T, Patrick C, Parekh R, Dickson BJ -- Nature 589(7843):577-581, 2021, doi:10.1038/s41586-020-2972-7 (corrected from Neuron 109:101-118) -- https://www.nature.com/articles/s41586-020-2972-7
13. Pulse interval as a critical parameter in the courtship song of Drosophila melanogaster -- Bennet-Clark HC, Ewing AW -- Animal Behaviour 17:755-759, 1969 -- https://www.sciencedirect.com/science/article/abs/pii/S0003347269800230
14. Experimental and statistical reevaluation provides no evidence for Drosophila courtship song rhythms -- Stern DL, Clemens J, Coen P, Calhoun AJ, Hogenesch JB, Arthur BJ, Murthy M -- PNAS 114:9978-9983, 2017 -- https://www.pnas.org/doi/full/10.1073/pnas.1707471114. Cite with the Correction to the Supporting Information, PNAS 118(6):e2100258118 (2021). See also Stern 2014 (BMC Biology) and the Kyriacou et al. 2017 PNAS rebuttal (not checked).
15. Female copulation song is modulated by seminal fluid -- Kerwin P, Yuan J, von Philipsborn AC -- Nature Communications 11:1430, 2020 -- https://www.nature.com/articles/s41467-020-15260-6
16. FlyMAD: rapid thermogenetic control of neuronal activity in freely walking Drosophila -- Bath DE, Stowers JR, Hörmann D, Poehlmann A, Dickson BJ, Straw AD -- Nature Methods 11:756-762, 2014 -- https://www.nature.com/articles/nmeth.2973
17. Fast and accurate annotation of acoustic signals with deep neural networks -- Steinfath E, Palacios-Muñoz A, Rottschäfer JR, Yuezak D, Clemens J -- eLife 10:e68837, 2021 -- https://elifesciences.org/articles/68837
18. SLEAP: A deep learning system for multi-animal pose tracking -- Pereira TD, Tabris N, Matsliah A, Turner DM, Li J, Ravindranath S, Papadoyannis ES, Normand E, Deutsch DS, Wang ZY, et al. -- Nature Methods 19:486-495, 2022 (a Publisher Correction exists) -- https://www.nature.com/articles/s41592-022-01426-1
19. Social integration of robots into groups of cockroaches to control self-organized choices -- Halloy J, Sempo G, Caprari G, Rivault C, Asadpour M, Tâche F, Saïd I, Durier V, Canonge S, Amé JM, Detrain C, Correll N, Martinoli A, Mondada F, Siegwart R, Deneubourg JL -- Science 318:1155-1158, 2007 -- https://www.science.org/doi/10.1126/science.1144259
20. Robots mediating interactions between animals for interspecies collective behaviors -- Bonnet F, Mills R, Szopek M, Schönwetter-Fuchs S, Halloy J, Bogdan S, Correia L, Mondada F, Schmickl T -- Science Robotics 4:eaau7897, 2019 -- https://www.science.org/doi/10.1126/scirobotics.aau7897
21. Dancing honey bee robot elicits dance-following and recruits foragers -- Landgraf T, Bierbach D, Kirbach A, Cusing R, Oertel M, Lehmann K, Greggers U, Menzel R, Rojas R -- arXiv preprint 1803.07126, 2018 (builds on the Michelsen et al. 1992 mechanical-bee model, Behav Ecol Sociobiol) -- https://arxiv.org/pdf/1803.07126
22. RoboFish: increased acceptance of interactive robotic fish with realistic eyes and natural motion patterns by live Trinidadian guppies -- Landgraf T, Bierbach D, Nguyen H, Muggelberg N, Romanczuk P, Krause J -- Bioinspiration & Biomimetics 11:015001, 2016 -- https://pubmed.ncbi.nlm.nih.gov/26757096/
23. The forebrain song system mediates predictive call timing in female and male zebra finches -- Benichov JI, Benezra SE, Vallentin D, Globerson E, Long MA, Tchernichovski O -- Current Biology 26:309-318, 2016 -- https://www.cell.com/current-biology/fulltext/S0960-9822(15)01568-7
24. Inhibition within a premotor circuit controls the timing of vocal turn-taking in zebra finches -- Benichov JI, Vallentin D -- Nature Communications 11:221, 2020 -- https://www.nature.com/articles/s41467-019-13938-0
25. Neurophysiological coordination of duet singing -- Coleman MJ, Day NF, Rivera-Parra P, Fortune ES -- PNAS 118:e2018188118, 2021 (see also Fortune et al. 2011, Science 334:666-670) -- https://www.pnas.org/doi/10.1073/pnas.2018188118
26. Interactive bioacoustic playback as a tool for detecting and exploring nonhuman intelligence: 'conversing' with an Alaskan humpback whale -- McCowan B, Hubbard J, Walker L, Fournet M, Doyle L, et al. (byline not checked) -- PeerJ 11:e16349, 2023 -- https://peerj.com/articles/16349/
27. An underwater wearable computer for two way human-dolphin communication experimentation -- Kohlsdorf D, Gilliland S, Presti P, Starner T, Herzing D -- Proceedings of the International Symposium on Wearable Computers (ISWC), 2013 (paper not located in live search; the URL is the Georgia Tech GVU CHAT project page) -- https://gvu.gatech.edu/research/projects/chat-cetacean-hearing-augmentation-and-telemetry-and-uhura-unsupervised-harvesting
28. DolphinGemma announcement (Google blog / press, April 2025) -- Google DeepMind/Google with Georgia Tech (Starner) and Wild Dolphin Project (Herzing) -- Corporate announcement, 2025 -- https://blog.google/innovation-and-ai/products/dolphingemma/
29. A brain-to-brain interface for real-time sharing of sensorimotor information -- Pais-Vieira M, Lebedev M, Kunicki C, Wang J, Nicolelis MAL -- Scientific Reports 3:1319, 2013 -- https://www.nature.com/articles/srep01319
30. Non-invasive brain-to-brain interface (BBI): establishing functional links between two brains -- Yoo SS, Kim H, Filandrianos E, Taghados SJ, Park S -- PLoS ONE 8:e60410, 2013 -- https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0060410
31. Nested neural circuits generate distinct acoustic signals during Drosophila courtship -- Lillvis JL, Wang K, Shiozaki HM, Xu M, Stern DL, Dickson BJ -- Current Biology 34:808-824, 2024 -- https://www.cell.com/current-biology/fulltext/S0960-9822(24)00015-0
32. Neural network organization for courtship-song feature detection in Drosophila -- Baker CA, McKellar C, Pang R, Nern A, Dorkenwald S, Pacheco DA, Eckstein N, Funke J, Dickson BJ, Murthy M -- Current Biology 32:3317-3333, 2022 -- https://www.cell.com/current-biology/fulltext/S0960-9822(22)00978-2

## Verification ledger

| # | Claim | Tag | Live status | Source # |
|---|---|---|---|---|
| 1 | Males pattern pulse/sine song and bouts from female movement cues in real time | HIGH | confirmed | 1 |
| 2 | Males sing louder when farther from the female, offsetting near-field sound fall-off | HIGH | confirmed | 2 |
| 3 | GLM-HMM finds three latent states; pIP10 activation drives switching between them | MED | corrected | 3 |
| 4 | Males choose Pslow or Pfast pulse song by distance and position | MED | confirmed | 4 |
| 5 | One brain-to-VNC pathway in two regimes sequences simple versus complex song | MED | confirmed | 5 |
| 6 | Male representation of the female is distributed across a population of LC types | HIGH | confirmed | 6 |
| 7 | P1 arousal gates LC10a-driven pursuit of a visual target in tethered males | MED | confirmed | 7 |
| 8 | Activating fru neurons (P1, pIP10, dPR1, vPR6) evokes song without a female | MED | confirmed | 8 |
| 9 | Female pC1 responds to song and cVA; silencing reduces receptivity | HIGH | confirmed | 9 |
| 10 | pC2l/pC2m in both sexes detect conspecific pulse song, drive sex-specific behavior | HIGH | confirmed | 10 |
| 11 | Brief pC1 activation causes a minutes-long female state; recurrent pC1d/pC1e wiring | MED | confirmed | 11 |
| 12 | vpoDN trigger vaginal plate opening, integrating vpoEN song input and pC1 mating status | MED | corrected | 12 |
| 13 | Pulse song at the conspecific interval speeds mating with wingless males | MED | confirmed | 13 |
| 14 | The ~55 s song rhythm was not supported by re-recordings and reanalyses | HIGH | confirmed | 14 |
| 15 | Females sing during copulation; male seminal fluid modulates the song | HIGH | confirmed | 15 |
| 16 | FlyMAD aims a laser at freely walking flies for targeted neural activation | MED | confirmed | 16 |
| 17 | DAS annotates fly and bird song with millisecond latency for closed loop | HIGH | confirmed | 17 |
| 18 | SLEAP tracking runs in real time; closed-loop demonstration in interacting flies | MED | confirmed | 18 |
| 19 | Odor-coated robots joined cockroach groups and shifted collective shelter choice | HIGH | confirmed | 19 |
| 20 | Linked robots let remote honeybee and zebrafish groups coordinate collective decisions | HIGH | confirmed | 20 |
| 21 | RoboBee drew dance-followers and some recruits, weaker than natural dances | MED | confirmed | 21 |
| 22 | Guppies better accepted RoboFish with realistic eyes and responsive motion | MED | confirmed | 22 |
| 23 | Zebra finches learned to time calls around a vocal robot; needs song system | HIGH | confirmed | 23 |
| 24 | Inhibition in HVC controls zebra finch reply timing in vocal turn-taking | HIGH | confirmed | 24 |
| 25 | Partner sound modulates each duetting wren's HVC, coordinating syllable alternation | HIGH | confirmed | 25 |
| 26 | Humpback "Twain" gave about three dozen timed calls to playback over ~20 minutes | HIGH | confirmed | 26 |
| 27 | CHAT plays object-linked whistles and detects dolphin mimicry in real time | MED | confirmed | 27 |
| 28 | DolphinGemma: ~400M-parameter next-sound model for CHAT; no peer-reviewed evaluation | HIGH | confirmed | 28 |
| 29 | Rat brain-to-brain interface: decoder about 60-70% correct against 50% chance | MED | confirmed | 29 |
| 30 | Human EEG drove focused ultrasound to move an anesthetized rat's tail (~94%) | HIGH | confirmed | 30 |
| 31 | MANC wiring reveals nested VNC premotor circuits for pulse versus sine song | HIGH | confirmed | 31 |
| 32 | Auditory cell types: pulse-sine continuum, non-hierarchical, input-predictable responses | MED | confirmed | 32 |
