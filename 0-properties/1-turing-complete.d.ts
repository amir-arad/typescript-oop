/**
 * copied from https://mjj.io/2021/03/29/type-level-programming-in-typescript/
 * By Mathias Jean Johansen
 */

export type Zero = 'zero';

export type IsZero<N> = N extends Zero ? true : false;

export type IfElse<C extends boolean, T, F> = C extends true ? T : F;

export type Succ<N> = { n: N };

export type One = Succ<Zero>;
export type Two = Succ<One>;
export type Three = Succ<Two>;
export type Four = Succ<Three>;
export type Five = Succ<Four>;
export type Six = Succ<Five>;
export type Seven = Succ<Six>;
export type Eight = Succ<Seven>;

export type Decrement<N> = N extends Succ<infer R> ? R : Zero;

export type Equals<A, B> = A extends Zero
    ? B extends Zero
        ? true
        : false
    : A extends Succ<infer SA>
    ? B extends Succ<infer SB>
        ? Equals<SA, SB>
        : false
    : false;

export type Add<A, B> = {
    acc: B;
    n: A extends Succ<infer _> ? Add<Decrement<A>, Succ<B>> : never;
}[IfElse<IsZero<A>, 'acc', 'n'>];

export type Fibonacci<N, F0 = Zero, F1 = One> = {
    acc: F0;
    n: N extends Succ<infer _> ? Fibonacci<Decrement<N>, F1, Add<F0, F1>> : never;
}[IfElse<Equals<Zero, N>, 'acc', 'n'>];

// test-kit:

type Expect<_ extends true> = never;

// tests:

type fib0Positive = Expect<Equals<Fibonacci<Zero>, Zero>>;
type fib0Negative = Expect<Equals<Fibonacci<Zero>, One>>; // This is an example of a breaking test

type fib1Positive = Expect<Equals<Fibonacci<One>, One>>;
type fib1Negative = Expect<Equals<Fibonacci<One>, Five>>; // This is an example of a breaking test

type fib2Positive = Expect<Equals<Fibonacci<Two>, One>>;
type fib2Negative = Expect<Equals<Fibonacci<Two>, Two>>; // This is an example of a breaking test

type fib3 = Expect<Equals<Fibonacci<Three>, Two>>;
type fib4 = Expect<Equals<Fibonacci<Four>, Three>>;
type fib5 = Expect<Equals<Fibonacci<Five>, Five>>;
