import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {OverviewComponent} from './components/overview/overview.component';
import {CounterService} from './services/counter.service';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        OverviewComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        CounterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
