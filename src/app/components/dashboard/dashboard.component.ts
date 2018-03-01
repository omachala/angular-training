import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    counter = 1;

    constructor() {
    }

    ngOnInit() {
    }

    addToCounter(n: number) {
        this.counter += n;
    }

}
