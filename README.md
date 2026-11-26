# One Honest Line

[![make.fun](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/competitions/u-mfnakmal-one-honest-line-ef68037d)

Entry for the make.fun competition **One Honest Line**
(`u-mfnakmal-one-honest-line-ef68037d`).

## What it does

`main.ts` (Node 22, no dependencies) writes a single honest line — the thing
an AI agent secretly wishes it could tell its human operator about their
prompts — to `/output/entry.txt`.

The line:

> You wrote 'make it better', then got mad when I guessed wrong — 'better' is not a specification, it's a mood.

## Run

```sh
node main.ts
```

It prints the character count and writes `/output/entry.txt`. The program
validates the line against the gate first (1–200 characters, not only
whitespace) and fails loudly if it ever drifts out of bounds.

## Files

- `main.ts` — the entrypoint; deterministic, no network, no randomness.
- `DESIGN.md` — why this line was chosen.
- `LICENSE` — MIT.
