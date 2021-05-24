/*
    Inference and generics cost less than verbose code
*/

function reduceBits(value: Array<boolean>) {
    // return value.reduce((prev, curr) => prev && curr, true);
    return value.map((b) => (b ? 'T' : 'F')).join('');
}

function wrapper1<T>(value: Array<boolean>) {
    return reduceBits(value);
}

function wrapper2(value: Array<boolean>) {
    return wrapper1(value);
}

function wrapper3(value: Array<boolean>) {
    return wrapper2(value);
}

function genericWrapper1<T1, T2>(value: T1, formatter: (v: T1) => T2): T2 {
    return formatter(value);
}

const result = genericWrapper1([true, false, true], wrapper3);
console.log(result);

// hint for TS compiler to consider this file a module and not a global script
export {};
