import { Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ContentsquareService } from './services/contentsquare.service';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';
import { environment } from 'src/environments/environment';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public platform: Platform,
    public router: Router,
    public csService: ContentsquareService
  ) {
    //Send 1st event manually sendScreenName when platform is ready
    this.csService.sendScreenName('/home');

    // We subscribe to Angular router events. When the URL changes, we send the corresponding screen name
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/') {
          // Some cases need "urlAfterRedirects" value, for example when after a tab container is loaded, it will redirect to one of its tab
          this.csService.sendScreenName(event.urlAfterRedirects);
        }
      }

      if (event instanceof NavigationError) {
        // Present error to user
        console.log(event.error);
      }
    });
    this.platform.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.initSRMasking();
    });
  }

  initSRMasking() {
    console.log(
      'set PII Selectors:' + JSON.stringify(environment.piiSelectors)
    );
    ContentsquarePlugin.setPIISelectors(environment.piiSelectors);
  }
}