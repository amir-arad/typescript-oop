import { IDog } from './IDog';
import { ICat } from './ICat';

export interface IAnimalsContainer<T extends ICat | IDog> {
    getAnimals(): Array<T>;
}
