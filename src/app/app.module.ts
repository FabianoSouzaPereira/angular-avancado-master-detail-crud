import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from "./in-memory-database";

import { CategoriesModule } from './pages/categories/categories.module';
import { CoreModule } from './core/core.module';
import { EntriesModule } from './pages/entries/entries.module';
import { ReportsModule } from './pages/reports/reports.module';

//quando for usar uma api externa real, remover     HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase), e remover o arquivo in=meory-database.ts

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    CategoriesModule,
    EntriesModule,
    ReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
