import { IDog } from './IDog';

export class Dog implements IDog {
    constructor(private name: string) {}
    woof(): void {
        console.log(`${this.name} says woof`);
    }
}
