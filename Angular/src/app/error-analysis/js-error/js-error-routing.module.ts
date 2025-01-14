import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsErrorPage } from './js-error.page';

const routes: Routes = [
  {
    path: '',
    component: JsErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsErrorRoutingModule {}
