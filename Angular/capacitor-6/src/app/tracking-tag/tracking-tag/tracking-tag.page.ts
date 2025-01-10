import { Component, OnInit } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';

declare var QAJSBridge: any;
declare var window: any;

@Component({
  selector: 'app-tracking-tag',
  templateUrl: './tracking-tag.page.html',
  styleUrls: ['./tracking-tag.page.scss'],
})
export class TrackingTagPage implements OnInit {
  deviceInfo!: DeviceInfo;
  constructor() {}

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
  }

  deleteLocalTrackingTag() {
    if (this.deviceInfo.platform === 'ios') {
      window.webkit.messageHandlers.QAJSBridge.postMessage({
        action: 'deleteLocalTrackingTag',
      });
    } else {
      window.QAJSBridge.deleteLocalTrackingTag();
    }
  }

  deleteLocalTagId() {
    if (this.deviceInfo.platform === 'ios') {
      window.webkit.messageHandlers.QAJSBridge.postMessage({
        action: 'deleteLocalTagId',
      });
    } else {
      window.QAJSBridge.deleteLocalTagId();
    }
  }
}
