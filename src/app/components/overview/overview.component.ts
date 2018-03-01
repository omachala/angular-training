import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

    @Input() title: string;
    @Output() counterAdd: EventEmitter<number> = new EventEmitter();
    counter = 1;

    constructor() {
    }

    ngOnInit() {
    }

    counterButtonClick() {
        this.counter++;
        this.counterAdd.emit(1);
    }

}
