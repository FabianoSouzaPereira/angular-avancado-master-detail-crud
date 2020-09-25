import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsFormComponent } from './reports-form/reports-form.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

const routes: Routes = [
  { path: '', component: ReportsListComponent },
  { path: 'new', component: ReportsFormComponent },
  { path: ':id/edit', component: ReportsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
