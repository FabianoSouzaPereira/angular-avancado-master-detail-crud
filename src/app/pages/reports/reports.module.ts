import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsFormComponent } from './reports-form/reports-form.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

@NgModule({
  declarations: [ReportsListComponent, ReportsFormComponent],
  imports: [CommonModule, ReportsRoutingModule],
})
export class ReportsModule {}
