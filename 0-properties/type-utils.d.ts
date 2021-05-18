/**
 * code copied from repo:
 * https://github.com/wixplosives/typescript-type-utils
 * 
 * 
MIT License

Copyright (c) 2018 Nadav Abrahami

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type EXTENDS<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false;
export type EQUAL<VALUE extends EXPECTED, EXPECTED> = NOT_EQUAL<VALUE, EXPECTED> extends false ? true : false;
export type NOT_EQUAL_INTERNAL<VALUE, EXPECTED> = UnionToIntersection<VALUE> extends UnionToIntersection<EXPECTED>
    ? UnionToIntersection<EXPECTED> extends UnionToIntersection<VALUE>
        ? false
        : true
    : true;

export type NOT_EQUAL<VALUE, EXPECTED> = true extends NOT_EQUAL_INTERNAL<VALUE, EXPECTED> ? true : false;
export type VALID_ARGS<FUNC extends (...args: any[]) => any, ARGS extends any[]> = ARGS extends Parameters<FUNC>
    ? true
    : false;

export type ExpectTrue<T extends true> = T;
export type ExpectFalse<T extends false> = T;

// tests :
type normalStrings = ExpectTrue<EQUAL<string, string>>;
type stringVsSpecificString = ExpectFalse<EQUAL<'gaga', string>>;
type stringVsAny = ExpectFalse<EQUAL<'gaga', any>>;
type anyVsAny = ExpectTrue<EQUAL<any, any>>;
type sameUnion = ExpectTrue<EQUAL<'a' | 'b', 'a' | 'b'>>;
type differentUnion = ExpectFalse<EQUAL<{ id: 'gaga' }, { id: 'gaga' | 'baga' }>>;
