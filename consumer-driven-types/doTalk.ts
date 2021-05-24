// doTalk.ts
export type Talker = { talk: string };
export function doTalk(v: Talker) {
    console.log(v.talk);
}
