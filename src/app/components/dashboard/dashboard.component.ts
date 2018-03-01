import {Component, OnInit} from '@angular/core';
import {CounterService} from '../../services/counter.service';
import {ICounter} from '../../interfaces/icounter';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    counter = 1;

    constructor(private counterService: CounterService) {
        this.counterService.counterSubject.subscribe((data: ICounter) => this.counter += data.value);
    }

    ngOnInit() {
    }

}
