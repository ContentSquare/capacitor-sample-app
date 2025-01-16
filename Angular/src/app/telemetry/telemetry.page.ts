import { Component, OnInit } from '@angular/core';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';

export interface TelemetryItemApp  {
  title: string;
  name: string;
  value: any;
}

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.page.html',
  styleUrls: ['./telemetry.page.scss'],
})
export class TelemetryPage implements OnInit {
  public telemetryItems: TelemetryItemApp[] = [
    {
      title: 'NormalStringValue',
      name: 'NormalString',
      value: 'NormalStringValue',
    },
    {
      title: 'EmptyStringValue',
      name: 'EmptyStringValue',
      value: '',
    },
    {
      title: 'NullValue',
      name: 'NullValue',
      value: null,
    },
    {
      title: 'StringIntValue',
      name: 'StringIntValue',
      value: '10',
    },
    {
      title: 'NormalIntValue',
      name: 'NormalIntValue',
      value: 10,
    },

    {
      title: 'KeyTooLongWithStringValue',
      name: 'MyKeyIsReallyTooLongAsItIsOver40CharactersAndShouldTriggerAnError',
      value: 'string',
    },
  ];
  constructor() {}

  ngOnInit() {}

  collect(item: TelemetryItemApp) {
    ContentsquarePlugin.collect({
      name: item.name,
      value: item.value,
    });
  }
}
