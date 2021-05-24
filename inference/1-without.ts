/*
    Inference and generics cost less than verbose code

    Exercise : change `reduceBits()` to return a boolean instead of string (implement `and`)
*/

function reduceBits(value: Array<boolean>): string {
    // return value.reduce((prev, curr) => prev && curr, true);
    return value.map((b) => (b ? 'T' : 'F')).join('');
}

function wrapper1<T>(value: Array<boolean>): string {
    return reduceBits(value);
}

function wrapper2(value: Array<boolean>): string {
    return wrapper1(value);
}

function wrapper3(value: Array<boolean>): string {
    return wrapper2(value);
}

function genericWrapper1(value: Array<boolean>, formatter: (v: Array<boolean>) => string): string {
    return formatter(value);
}

const result = genericWrapper1([true, false, true], wrapper3);
console.log(result);

// hint for TS compiler to consider this file a module and not a global script
export {};
