import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrMaskingPage } from './sr-masking.page';

const routes: Routes = [
  {
    path: '',
    component: SrMaskingPage,
  },
  {
    path: 'sr-capture-elements',
    loadChildren: () =>
      import('./sr-capture-elements/sr-capture-elements.module').then(
        (m) => m.SrCaptureElementsPageModule
      ),
  },
  {
    path: 'sr-pii',
    loadChildren: () => import('./sr-pii/sr-pii.module').then( m => m.SrPiiPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrMaskingPageRoutingModule {}
