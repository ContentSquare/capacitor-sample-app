import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrCaptureElementsPage } from './sr-capture-elements.page';

const routes: Routes = [
  {
    path: '',
    component: SrCaptureElementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrCaptureElementsPageRoutingModule {}
