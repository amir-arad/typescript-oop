import { Dog } from "./Dog";

export class DogsContainer {
    private cats: Array<Dog> = [];
    getAnimals(): Array<Dog> {
        return this.cats;
    }
}
