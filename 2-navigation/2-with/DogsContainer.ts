import { Dog } from "./Dog";

export class DogsContainer {
    private dogs: Array<Dog> = [];
    getAnimals(): Array<Dog> {
        return this.dogs;
    }
}
