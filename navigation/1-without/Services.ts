import { IServices } from './IServices';
import { DogsContainer } from './DogsContainer';
import { CatsContainer } from './CatsContainer';

export class Services implements IServices {
    public cats = new CatsContainer();
    public dogs = new DogsContainer();
}
