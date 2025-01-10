import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () =>
      import('./menu-user/menu-user.module').then((m) => m.MenuUserPageModule),
  },
  {
    path: 'basicfunctions',
    loadChildren: () =>
      import('./basicfunctions/basicfunctions.module').then(
        (m) => m.BasicfunctionsPageModule
      ),
  },
  {
    path: 'send-screen',
    loadChildren: () =>
      import('./send-screen/send-screen.module').then(
        (m) => m.SendScreenPageModule
      ),
  },
  {
    path: 'menu-user',
    loadChildren: () =>
      import('./menu-user/menu-user.module').then((m) => m.MenuUserPageModule),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./transaction/transaction.module').then(
        (m) => m.TransactionPageModule
      ),
  },
  {
    path: 'dynamic-var',
    loadChildren: () =>
      import('./dynamic-var/dynamic-var.module').then(
        (m) => m.DynamicVarPageModule
      ),
  },
  {
    path: 'snapshot',
    loadChildren: () =>
      import('./snapshot/snapshot.module').then((m) => m.SnapshotPageModule),
  },
  {
    path: 'custom-var',

    loadChildren: () =>
      import('./custom-var/custom-var.module').then(
        (m) => m.CustomVarPageModule
      ),
  },
  {
    path: 'error-analysis',

    loadChildren: () =>
      import('./error-analysis/error-analysis.module').then(
        (m) => m.ErrorAnalysisModule
      ),
  },
  {
    path: 'spotify-app',
    loadChildren: () =>
      import('./spotify-app/spotify-app.module').then(
        (m) => m.SpotifyAppModule
      ),
  },
  {
    path: 'tracking-tag',
    loadChildren: () =>
      import('./tracking-tag/tracking-tag/tracking-tag.module').then(
        (m) => m.TrackingTagPageModule
      ),
  },
  {
    path: 'sr-masking',
    loadChildren: () =>
      import('./sr-masking/sr-masking.module').then(
        (m) => m.SrMaskingPageModule
      ),
  },
  {
    path: 'telemetry',
    loadChildren: () =>
      import('./telemetry/telemetry.module').then((m) => m.TelemetryPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
