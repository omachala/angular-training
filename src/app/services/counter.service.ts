import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ICounter} from '../interfaces/icounter';

@Injectable()
export class CounterService {

    counterSubject: BehaviorSubject<ICounter> = new BehaviorSubject<ICounter>(<ICounter>{value: 1});

    constructor() {
    }

}
