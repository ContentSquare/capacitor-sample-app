import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorAnalysisPage } from './error-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorAnalysisPage
  },
  {
    path: 'api-error',
    loadChildren: () => import('./api-error/api-error.module').then( m => m.ApiErrorModule)
  },
  {
    path: 'custom-error',
    loadChildren: () => import('./custom-error/custom-error.module').then( m => m.CustomErrorModule)
  },
  {
    path: 'js-error',
    loadChildren: () => import('./js-error/js-error.module').then( m => m.JsErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorAnalysisRoutingModule {}
