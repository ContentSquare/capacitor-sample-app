import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomVarPage } from './custom-var.page';

const routes: Routes = [
  {
    path: '',
    component: CustomVarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomVarPageRoutingModule {}
