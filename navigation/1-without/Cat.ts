import { ICat } from './ICat';

export class Cat implements ICat {
    constructor(private name: string) {}
    mew(): void {
        console.log(`${this.name} says mew`);
    }
}
