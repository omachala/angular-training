import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICardsResponse} from '../interfaces/api/icards-response';
import 'rxjs/add/operator/map';
import {Card} from '../classes/card';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {ICard} from '../interfaces/icard';
import {ICardsTable} from '../interfaces/icards-table';
import {CardsTable} from '../classes/cards-table';


@Injectable()
export class SpreadsheetService {

    cardSubject: ReplaySubject<Array<ICard>> = new ReplaySubject();
    cardTableSubject: ReplaySubject<ICardsTable> = new ReplaySubject();

    private url = 'https://sheets.googleapis.com/v4/spreadsheets/1InZkwXlSo-I9xj7aVS2VMwd_3nGrtcH5KFE9VL2UHag/values/Karty?key=AIzaSyBCUO_r9ez8nsZ109trLfMcCtuhNYVmtII';

    constructor(private http: HttpClient) {
    }

    loadAllCards() {
        this.http.get(this.url)
            .map((data: ICardsResponse) => {
                const cardTable = new CardsTable();
                cardTable.head = data.values[0];
                data.values.shift();
                cardTable.data = data.values.map((item: Array<string>) => new Card(item));
                return cardTable;
            })
            .subscribe((cardTable: ICardsTable) => {
                this.cardSubject.next(cardTable.data);
                this.cardTableSubject.next(cardTable);
            });
    }

}
