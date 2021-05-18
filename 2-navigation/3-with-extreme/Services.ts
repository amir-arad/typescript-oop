export const Services = () => ({
    cats: {
        cats: [] as Array<{ mew(): void }>,
        getAnimals() {
            return this.cats;
        },
    },
    dogs: {
        dogs: [] as Array<{ woof(): void }>,
        getAnimals() {
            return this.dogs;
        },
    },
});
