import { doTalk } from './doTalk';
import { Family } from './Family';
import { isOmnivore } from './isOmnivore';

// ... index.ts
function animal(
    talk: string, 
    family: Family) {
    return { talk, family };
}

const duck = animal(
    'Quack', 
    Family.anatidae
);

doTalk(duck);
doTalk({ talk: 'mew' });

isOmnivore(duck.family);
isOmnivore(Family.felidae);

