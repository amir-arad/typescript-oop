export class Singleton {
    private static instance: Singleton;
    private barkCount = 0;

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    private constructor() {}

    public bark() {
        this.barkCount = this.barkCount + 1;
        console.log(`I've barked ${this.barkCount} times. woof!`);
    }
}
