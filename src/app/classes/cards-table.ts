import {ICardsTable} from '../interfaces/icards-table';
import {ICard} from '../interfaces/icard';

export class CardsTable implements ICardsTable {
    head: Array<string>;
    data: Array<ICard>;
}
