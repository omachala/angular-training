import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SpreadsheetService} from './services/spreadsheet.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchInputComponent} from './components/search-input/search-input.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchInputComponent
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
