/*
    Simplify code navigation
*/

import { Services } from './Services';

const services = new Services();

for (const cat of services.cats.getAnimals()) {
    cat.mew();
}
for (const dog of services.dogs.getAnimals()) {
    dog.woof();
}
