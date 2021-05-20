import { IDog } from './IDog';
import { IDogsContainer } from './IDogsContainer';

export class DogsContainer implements IDogsContainer {
    private dogs: Array<IDog> = [];
    getAnimals(): Array<IDog> {
        return this.dogs;
    }
}
