import { Injectable } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';

@Injectable({
  providedIn: 'root',
})
export class ContentsquareService {
  // We map the url of the screen with the screen name
  private mapScreenURL = {
    '/home': 'Menu',
    '/basicfunctions': 'Privacy',
    '/send-screen': 'Send Screen',
    '/transaction': 'Transaction',
    '/dynamic-var': 'Dynamic Var',
    '/custom-var': 'Custom Var',
    '/parametres': 'Parametres',
    '/snapshot': 'Snapshot',
    '/spotify-app/tabs/tab1': 'Spotify homepage',
    '/spotify-app/tabs/tab2': 'Images test page',
    '/tracking-tag': 'Tracking Tag',
    '/sr-masking': 'SR Masking',
    '/sr-masking/sr-pii': 'SR PII',
    '/sr-masking/sr-capture-elements': 'SR Capture Elements',
    '/telemetry': 'Telemetry',
    '/error-analysis': 'Error analysis',
    '/error-analysis/api-error' : 'API Errors',
    '/error-analysis/custom-error': 'Custom Errors',
    '/error-analysis/js-error': 'JS Errors'
  };
     

  // Some URLs could be excluded.
  private excludedURL: string [] = [];

  constructor() {}

  private getScreenName(url: string) {
    if (url.startsWith('/snapshot')) {
      let screenName = url.substring(url.lastIndexOf('/') + 1);
      //Capitalize the first letter
      screenName = screenName.charAt(0).toUpperCase() + screenName.slice(1);
      const fullScreenName = 'Ionic ' + screenName;
      return fullScreenName;
    } else {
      return this.mapScreenURL[url] || 'undefined';
    }
  }

  // Send the screen name to the SDK
  async sendScreenName(url: string) {
    if (!this.excludedURL.includes(url)) {
      const screenName = this.getScreenName(url);
      console.log('Url: ' + url + ' -> Send screen name: ' + screenName);
      let deviceInfo = await Device.getInfo();
      ContentsquarePlugin.sendScreenName(screenName)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log('Url: ' + url + ' -> Excluded URL ');
    }
  }
}
