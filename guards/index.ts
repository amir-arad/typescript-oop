export const cat = {
    mew() {
        console.log('mew');
    },
};
type Cat = typeof cat;
export const dog = {
    woof() {
        console.log('woof');
    },
};

// use a type guard
const maybeCat = Math.random() > 0.5 ? cat : null;

maybeCat.mew();

if (maybeCat) {
    maybeCat.mew();
}

// use custom type guards
function isCat(val: unknown): val is Cat {
    return !!val && typeof (val as Cat).mew == 'function';
}

const catOrDog = Math.random() > 0.5 ? cat : dog;

catOrDog.mew();

if (isCat(catOrDog)){
    catOrDog.mew();
}
