import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiErrorPage } from './api-error.page';

const routes: Routes = [
  {
    path: '',
    component: ApiErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiErrorRoutingModule {}
