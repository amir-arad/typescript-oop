import { ICat } from './ICat';
import { ICatsContainer } from './ICatsContainer';

export class CatsContainer implements ICatsContainer {
    private cats: Array<ICat> = [];
    getAnimals(): Array<ICat> {
        return this.cats;
    }
}
