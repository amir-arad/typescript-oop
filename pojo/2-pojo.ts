

let barkCount = 0;

export const instance = {
    bark() {
        barkCount = barkCount + 1;
        console.log(`I've barked ${barkCount} times. woof!`);
    },
};

export type Dog = typeof instance;
