import { Component, OnInit } from '@angular/core';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';

@Component({
  selector: 'app-send-screen',
  templateUrl: './send-screen.page.html',
  styleUrls: ['./send-screen.page.scss'],
})
export class SendScreenPage implements OnInit {
  public screenName = '';

  constructor() {}

  ngOnInit() {}

  sendScreenName() {
    const that = this;
    console.log('Send screen name: ', this.screenName);
    ContentsquarePlugin.sendScreenName(this.screenName);
    this.screenName = '';
  }
}
