import { IDogsContainer } from './IDogsContainer';
import { ICatsContainer } from './ICatsContainer';

export interface IServices {
    readonly cats: ICatsContainer;
    readonly dogs: IDogsContainer;
}
