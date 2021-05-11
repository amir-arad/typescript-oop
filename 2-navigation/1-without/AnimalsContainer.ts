import { IDog } from './IDog';
import { ICat } from './ICat';

export interface AnimalsContainer<T extends ICat | IDog> {
    getAnimals(): Array<T>;
}
