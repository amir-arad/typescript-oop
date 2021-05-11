export class Cat {
    constructor(private name: string) {}
    mew(): void {
        console.log(`${this.name} says mew`);
    }
}
