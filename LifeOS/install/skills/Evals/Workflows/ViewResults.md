# ViewResults Workflow

Inspect evaluation results from completed runs.

## Voice Notification

```bash
curl -s -X POST http://localhost:31337/notify \
  -H "Content-Type: application/json" \
  -d '{"message": "Running the ViewResults workflow in the Evals skill to display eval results"}' \
  > /dev/null 2>&1 &
```

Running the **ViewResults** workflow in the **Evals** skill to display eval results...

---

## Where Results Live

Per-run output (source of truth):

```
~/.claude/LIFEOS/MEMORY/STATE/Evals-Results/<suite>/<run-id>/run.json    # one per run, transcripts under .detail
~/.claude/LIFEOS/MEMORY/STATE/Evals-Results/<suite>/latest.json          # rolling status, no transcripts
```

`run.json` contains the suite summary (`passed`, `score`, `pass_to_k`, `pass_at_k`, `summary`, `run_id`), a per-case roll-up in `.cases[]`, and `.detail[]` — per case, every trial's `score`, `passed`, `asserts[]` and the agent's full `output`. `latest.json` is that same summary without `detail`, plus a `ts`. The `LIFEOS/MEMORY/STATE/Evals-Results/` directory is the canonical store — query it with standard tools (`jq`, `rg`, `cat`).

---

## Execution

### Step 1: List runs for a suite

```bash
SUITE=~/.claude/LIFEOS/MEMORY/STATE/Evals-Results/<suite>

# Show all runs for a suite (newest first)
ls -1t "$SUITE" | grep '^run_'

# Or via SuiteManager
bun run ~/.claude/skills/Evals/Tools/SuiteManager.ts list
```

### Step 2: View latest run summary

```bash
# Rolling status for the suite
jq '{passed, score, pass_to_k, pass_at_k, summary, run_id}' "$SUITE/latest.json"

# Or for a specific run
jq '{passed, score, pass_to_k, pass_at_k, summary, run_id}' "$SUITE/<run-id>/run.json"
```

### Step 3: Check saturation (when a suite is graduating capability → regression)

```bash
bun run ~/.claude/skills/Evals/Tools/SuiteManager.ts check-saturation <suite-name>
```

Two caveats before you trust the verdict. `check-saturation` reads each run's `pass_rate`, a field `EvalRunner.ts` does not write (it writes `score` and `pass_to_k`), so the pass-rate history can come back empty and read as "not saturated" — confirm against `latest.json`. And it resolves suites only from the skill's own `Suites/Capability` and `Suites/Regression`, not the USER customization layer that `EvalRunner.ts` searches first.

### Step 4: View per-trial scores or failure detail

```bash
RUN="$SUITE/$(ls -1t "$SUITE" | grep '^run_' | head -1)/run.json"

# Per-case roll-up — every case that did not pass on all trials
jq '.cases[] | select(.pass_to_k < 1)' "$RUN"

# Per-trial scores and the assertions that failed, for one case
jq '.detail[] | select(.id=="<case-id>") | .trials[]
      | {score, passed, failed: [.asserts[] | select(.passed==false) | {type, reason}]}' "$RUN"

# Read the transcript behind a score
jq -r '.detail[] | select(.id=="<case-id>") | .trials[0].output' "$RUN"
```

A score is not evidence until you have read the transcript behind it.

### Step 5: Report

```markdown
📋 SUMMARY: Evaluation results for <suite>

📊 STATUS:
| Metric | Value |
|--------|-------|
| Run ID | <run-id> |
| Suite | <suite> (<type>) |
| pass^k | X% |
| pass@k | X% |
| Mean Score | X.XX |

📖 STORY EXPLANATION:
1. Retrieved evaluation run <run-id>
2. <N> cases evaluated against the suite's assertions, <k> trials each
3. <Failing case ids, the assertion that failed, and the judge's reason>
4. <Recommendation>

🎯 COMPLETED: Results retrieved for <suite>, pass^k X%.
```

---

## Comparison and Trend Analysis

There is no built-in CLI for trend analysis, regression detection, or cross-run comparison in the current skill — these are intended use cases that would be authored against the `run.json` files using `jq` or a small ad-hoc script when needed. If you need recurring trend analysis, consider authoring a Tools/TrendReport.ts script (not yet on disk) and wiring it into the routing table.

---

## Done

Results inspected from `LIFEOS/MEMORY/STATE/Evals-Results/<suite>/<run-id>/run.json` and (optionally) suite saturation surfaced via `SuiteManager.ts`.
