import { Cat } from './Cat';

export class CatsContainer {
    private cats: Array<Cat> = [];
    getAnimals(): Array<Cat> {
        return this.cats;
    }
}
