/*
    Don't break autocomplete & type checking
*/

function printInfo(arg: { ping: number }): void {
    console.log(arg.png);
}

printInfo({ ping: 5 });
printInfo({ ping: 5 });

// hint for TS compiler to consider this file a module and not a global script
export {};
