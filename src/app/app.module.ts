import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SpreadsheetService} from './services/spreadsheet.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        SpreadsheetService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
