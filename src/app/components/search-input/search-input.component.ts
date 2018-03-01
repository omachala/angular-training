import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    changeText(value: string) {
        this.search.emit(value);
    }

}
