import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    _uxa: any;
  }
}

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.page.html',
  styleUrls: ['./custom-error.page.scss'],
})
export class CustomErrorPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  throwCustomError() {
    window._uxa = window._uxa || [];
    window._uxa.push(['trackError', 'This is a custom error']);
  }
  throwCustomErrorWithAttributes() {
    window._uxa = window._uxa || [];
    window._uxa.push([
      'trackError',
      'This is a custom error with attributes',
      { key1: 'some_value', foo: 'bar' },
    ]);
  }
  throwCustomErrorWithPII() {
    window._uxa = window._uxa || [];
    window._uxa.push([
      'trackError',
      'This is a custom error with email: foo@bar.buz',
      { key1: 'some_value', foo: 'bar' },
    ]);
  }
}
