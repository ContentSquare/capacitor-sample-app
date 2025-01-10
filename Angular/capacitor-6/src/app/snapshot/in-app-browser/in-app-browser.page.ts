import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser'; 

@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  async openGoogleIab() {
    // Opens the inapp Browser
    await Browser.open({url: 'https://google.com'});
  }

  async openCsIab() {
    await Browser.open({url: 'https://tupeuxpastest.csq.io/mobile/web-view-cart.html'});
  }
  
}
