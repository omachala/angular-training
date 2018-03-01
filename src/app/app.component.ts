import {Component} from '@angular/core';
import {SpreadsheetService} from './services/spreadsheet.service';
import {ICardsTable} from './interfaces/icards-table';
import {Card} from './classes/card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    loading = true;
    cardsTable: ICardsTable;
    cardAttrs: Array<String> = Card.cardAttrs;

    constructor(private spreadsheetService: SpreadsheetService) {

        this.spreadsheetService.cardTableSubject.subscribe((cardTable: ICardsTable) => {
            this.cardsTable = cardTable;
            this.loading = false;
        });

        this.spreadsheetService.loadAllCards();
    }

    reloadData() {
        this.loading = true;
        this.spreadsheetService.loadAllCards();
    }

}
