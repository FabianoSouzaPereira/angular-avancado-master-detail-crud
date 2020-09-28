import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';

import { CategoriesModule } from './pages/categories/categories.module';
import { EntriesModule } from './pages/entries/entries.module';


// quando for usar uma api externa real, remover     HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase), e remover o arquivo in=meory-database.ts

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    CategoriesModule,
    EntriesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
