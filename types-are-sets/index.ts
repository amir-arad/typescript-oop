const cat = {
    madeOf: undefined,
    mew() {
        console.log('mew');
    },
};
type Cat = typeof cat;
class Dog {
    madeOf = 'fur' as const;
    woof() {
        console.log('woof');
    }
}
interface Duck {
    madeOf: 'rubber';
    quack(): void;
}

type Animal = Cat | Dog | Duck;

interface IAnimal {
    madeOf: undefined | 'fur' | 'rubber';
    mew?: () => void;
    woof?: () => void;
    quack?: () => void;
}
// try replacing Animal with IAnimal in the next line
const map = new Map<string, Animal>();
const animal = map.get('something');

animal.quack();

if (animal) {
    animal.quack();
}

if (animal?.madeOf == 'rubber') {
    animal.quack();
}

// use custom type guards
function isCat(val: unknown): val is Cat {
    return !!val && typeof (val as Cat).mew == 'function';
}

const catOrSomething = Math.random() > 0.5 ? cat : 42;

catOrSomething.mew();

if (isCat(catOrSomething)) {
    catOrSomething.mew();
}

// use interface only according to Liskov substitution principle

export class Goose implements Duck {
    madeOf = 'rubber' as const;
    quack(): void {
        console.log('I am a goose');
    }
}
export class DogDuckProxy implements Duck {
    madeOf = 'rubber' as const;
    constructor(private dog : Dog){}
    quack() {
        return this.dog.woof();
    }
}

export {};
