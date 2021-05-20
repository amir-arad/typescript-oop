/*
    the best code navigation is no navigation - inline short code for better focus
*/

import { Services } from './Services';

const services = Services();

for (const cat of services.cats.getAnimals()) {
    cat.mew();
}
for (const dog of services.dogs.getAnimals()) {
    dog.woof();
}
