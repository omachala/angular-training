import {Component, Input, OnInit} from '@angular/core';
import {CounterService} from '../../services/counter.service';
import {ICounter} from '../../interfaces/icounter';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

    @Input() title: string;

    counter = 1;

    constructor(private counterService: CounterService) {
    }

    ngOnInit() {
    }

    counterButtonClick() {
        this.counter++;
        const data = <ICounter>{
            value: 1,
            sum: this.counter
        };
        this.counterService.counterSubject.next(data);
    }

}
