import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SpotifyAppRoutingModule } from './spotify-app-routing.module';
import { SpotifyAppComponent } from './spotify-app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotifyAppRoutingModule
  ],
  declarations: [SpotifyAppComponent]
})
export class SpotifyAppModule {}
