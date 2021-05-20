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

export function cat(name: string) {
    const mew = () => console.log(`${name} says mew`);
    return { mew };
}
export type Cat = ReturnType<typeof cat>;