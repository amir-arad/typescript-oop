// type safe Duck Typing
function doTalk(v: { talk: string }) {
    console.log(v.talk);
}

const duck = { talk: 'Quack' };
const dog = { talk: 'Bark' };
const fox = { say: 'gering-ding-ding' };

doTalk(duck); // OK
doTalk(dog); // OK
doTalk(fox); // not assignable

export {};
