import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackingTagPage } from './tracking-tag.page';

const routes: Routes = [
  {
    path: '',
    component: TrackingTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingTagPageRoutingModule {}
