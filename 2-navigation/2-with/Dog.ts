export class Dog {
    constructor(private name: string) {}
    woof(): void {
        console.log(`${this.name} says woof`);
    }
}
