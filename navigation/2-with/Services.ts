import { DogsContainer } from './DogsContainer';
import { CatsContainer } from './CatsContainer';

export class Services {
    public cats = new CatsContainer();
    public dogs = new DogsContainer();
}
