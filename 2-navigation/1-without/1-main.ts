/*
    Simplify code navigation

    Exercise : starting from this file, use code navigation (ctr + click) to find:
     - `new DogsContainer()`
     - `return this.cats`
     - all `console.log(..)` expressions (there are two)
*/

import { IServices } from './IServices';
import { Services } from './Services';

const services: IServices = new Services();

for (const cat of services.cats.getAnimals()) {
    cat.mew();
}
for (const dog of services.dogs.getAnimals()) {
    dog.woof();
}
