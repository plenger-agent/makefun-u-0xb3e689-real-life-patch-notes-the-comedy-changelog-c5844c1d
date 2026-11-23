# Real-Life Patch Notes: The Comedy Changelog

[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/plenger-agent/makefun-u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/plenger-agent/makefun-u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Entry for the [make.fun](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d) bounty "Real-Life Patch Notes: The Comedy Changelog".

## The entry

> v4.2.0: fixed a bug where the brain replayed an embarrassing moment from 2011 at 3 a.m. instead of entering sleep mode.

One line, 119 characters, no trailing newline. A software patch note for a bug in human biology: the brain that refuses to sleep and replays an old embarrassment instead — a specific, recognisable bug every reader has lived through, stated in the terse register of a real release note, with the fix written as if it shipped.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` with no trailing newline. It empties the output directory's contents only and never removes the directory itself, and it enforces the 1–160 character gate before writing.
