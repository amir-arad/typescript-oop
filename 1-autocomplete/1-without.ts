/*
    Don't break autocomplete & type checking

    Exercise : how long will it take to spot the bug?
*/

function printInfo(arg: any): void {
    console.log(arg.png);
}

printInfo({ ping: 5 });
printInfo({ ping: 5 });

// hint for TS compiler to consider this file a module and not a global script
export {};
