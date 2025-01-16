import { Component, OnInit } from '@angular/core';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';

@Component({
  selector: 'app-basicfunctions',
  templateUrl: './basicfunctions.page.html',
  styleUrls: ['./basicfunctions.page.scss'],
})
export class BasicfunctionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  optIn() {
    const that = this;
    ContentsquarePlugin.optIn();
  }

  optOut() {
    const that = this;
    ContentsquarePlugin.optOut();
  }

}
