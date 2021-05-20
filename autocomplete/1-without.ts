/*
    Don't break autocomplete & type checking

    where is the bug?
*/

function printInfo(arg: any): void {
    console.log(arg.png);
    console.log(arg + 2);
    console.log(Number.parseFloat(arg));
}

printInfo({ ping: 5 });
printInfo({ ping: 5 });

// hint for TS compiler to consider this file a module and not a global script
export {};
