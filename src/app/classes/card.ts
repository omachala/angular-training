import {ICard} from '../interfaces/icard';

export class Card implements ICard {

    static cardAttrs = ['set', 'amount', 'name', 'cost', 'god', 'rarity', 'type', 'subtype', 'attack', 'lives', 'components', 'hand', 'other', 'description', 'text'];

    set: string;
    amount: number;
    name: string;
    cost: number;
    god: string;
    rarity: string;
    type: string;
    subtype: string;
    attack: string;
    lives: string;
    components: string;
    hand: string;
    other: string;
    description: string;
    text: string;

    constructor(data: Array<string>) {

        Card.cardAttrs.forEach((attr: string, index: number) => {
            if (typeof data[index] !== 'undefined') {
                this[attr] = data[index];
            }
        });
    }
}
