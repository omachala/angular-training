import {Component} from '@angular/core';
import {SpreadsheetService} from './services/spreadsheet.service';
import {ICardsTable} from './interfaces/icards-table';
import {Card} from './classes/card';
import {ICard} from './interfaces/icard';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    loading = true;
    cardsTable: ICardsTable;
    cardsData: Array<ICard> = [];
    cardAttrs: Array<String> = Card.cardAttrs;
    searchParams: Object = {};

    constructor(private spreadsheetService: SpreadsheetService) {

        this.spreadsheetService.cardTableSubject.subscribe((cardTable: ICardsTable) => {
            this.cardsTable = cardTable;
            this.cardsData = this.cardsTable.data;
            this.loading = false;
        });

        this.spreadsheetService.loadAllCards();
    }

    reloadData() {
        this.loading = true;
        this.spreadsheetService.loadAllCards();
    }

    search(value: string, attr: string) {

        this.searchParams[attr] = value;

        if (value.length === 0) {
            delete this.searchParams[attr];
        }

        if (Object.keys(this.searchParams).length === 0) {
            this.cardsData = this.cardsTable.data;
            return;
        }

        console.log(this.searchParams);

        this.cardsData = this.cardsTable.data.filter((item: ICard) => {
            for (let key in this.searchParams) {
                if (item[key].indexOf(this.searchParams[key]) === -1) {
                    return false;
                }
            }
            return true;
        });
    }

}
