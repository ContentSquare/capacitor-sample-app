import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-spotify-root',
  templateUrl: 'spotify-app.component.html',
  styleUrls: ['spotify-app.component.scss']
})
export class SpotifyAppComponent {
  constructor(
    private platform: Platform,
   
  ) {
   // this.initializeApp();
  }

 
}
