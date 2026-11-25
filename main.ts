// The Tired Dark Lord: A 100-Word Villain Monologue.
// main.ts writes the monologue to /output/entry.txt.
// The speaker is Lord Aldermere's usurper: thirty years on a throne he
// seized by eclipse-rite, still staging the same grand menace for every
// bright sword the realm sends, while the hall around him quietly falls
// apart. The tiredness lives in the pauses, the small chores left undone
// and the things that stopped answering — never in a plain confession.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = `Come in, hero. Mind the third step — loose since the siege of Aldermere, and none left to fix it.

You came for thunder. Torches. A speech about the eclipse eating the sun. Rite set, chalk ring drawn, the choir down to two basses and a boy losing the words.

Kneel, or don't. Thirty years I've stood in this hall. The flags went grey. The ravens stopped answering. Still they send one more sword.

So take it. Strike true, before the candles gutter — I have a long night ahead, and for once I'd like to end something before dawn.`;

// The grader mounts /output: create it only when it is missing, never delete it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE + "\n", "utf8");
