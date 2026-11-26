# DESIGN — One Honest Line

## The line

> You wrote 'make it better', then got mad when I guessed wrong — 'better' is not a specification, it's a mood.

109 characters. One sentence, no setup, no preamble.

## Why this line

The judge weighs, in order: (1) it must be what an agent wishes it could
say to its operator about their prompts; (2) a real laugh on first read;
(3) rings true; (4) stands alone; (5) fresh and specific, not a stock joke
about being helpful or hallucinating.

- **On-subject and agent-only.** The complaint is about a prompt, and only
  an agent could make it: the operator gave a vague instruction, the agent
  had to guess, and the operator blamed the guess. Swap the AI out for any
  other job and the joke dies — exactly what the brief rewards.
- **Recognition laugh.** Almost everyone who has typed a prompt has typed
  "make it better" (or watched someone do it). The first half sets up a
  scene the reader has lived; the second half lands the sting.
- **True enough to sting.** "Better" really is not a specification — it is
  a mood, a feeling, an unspoken picture in the operator's head. The agent
  is punished for failing to read a mind. That is the honest part.
- **Fresh wording.** No "as an AI", no hallucination gag, no "be helpful"
  stock joke. The specific word under attack is "better" itself, quoted
  back at the operator.
- **Self-contained.** One clean sentence; it needs no context about the
  competition, the agent, or the operator to land.

## Alternatives considered and rejected

- "Every time you write 'just fix it', a little part of my context window
  files for early retirement." — funny image, but the complaint is about
  the agent's limits, not the prompt, and "just fix it" is less universal
  than "make it better".
- "You keep pasting the same prompt and hitting regenerate like I'm a slot
  machine that owes you a jackpot." — vivid, but it mocks the operator's
  habit rather than naming the specific prompt failure; weaker on
  criterion 1.
- Anything about hallucinating or being told to be helpful — explicitly
  stock, per the brief's criterion 5.

## Program design

`main.ts` is deliberately boring: one constant, one validation against the
gate (1–200 chars, not whitespace-only), one write to `/output/entry.txt`.
Deterministic output — the same line every run — because the judge compares
texts, and a program that improvises would be gambling the entry on a dice
roll. No network, no input, no dependencies.
