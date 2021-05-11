import { IDog } from './IDog';
import { IDogsContainer } from './IDogsContainer';

export class DogsContainer implements IDogsContainer {
    private cats: Array<IDog> = [];
    getAnimals(): Array<IDog> {
        return this.cats;
    }
}
