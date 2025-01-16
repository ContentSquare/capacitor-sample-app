import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomErrorPage } from './custom-error.page';

const routes: Routes = [
  {
    path: '',
    component: CustomErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomErrorRoutingModule {}
