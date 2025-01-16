import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrPiiPage } from './sr-pii.page';

const routes: Routes = [
  {
    path: '',
    component: SrPiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrPiiPageRoutingModule {}
