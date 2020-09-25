import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesModule } from './pages/categories/categories.module';
import { CoreModule } from './core/core.module';
import { EntriesModule } from './pages/entries/entries.module';
import { ReportsModule } from './pages/reports/reports.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    CategoriesModule,
    EntriesModule,
    ReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
