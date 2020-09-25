import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntriesFormComponent } from './entries-form/entries-form.component';
import { EntriesListComponent } from './entries-list/entries-list.component';

const routes: Routes = [
  { path: '', component: EntriesListComponent },
  { path: 'new', component: EntriesFormComponent },
  { path: ':id/edit', component: EntriesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntriesRoutingModule {}
