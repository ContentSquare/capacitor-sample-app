import { Component, OnInit } from '@angular/core';
import {
  ContentsquarePlugin,
  CustomVarItem,
} from '@contentsquare/capacitor-plugin';

declare type MockCustomVarItemApp = {
  index: any;
  cVarKey: any;
  cVarValue: any;
};

declare type ItemCVarList = {
  title: string;
  description?: string;
  color?: string;
  cVars: MockCustomVarItemApp[];
};

@Component({
  selector: 'app-custom-var',
  templateUrl: './custom-var.page.html',
  styleUrls: ['./custom-var.page.scss'],
})
export class CustomVarPage implements OnInit {
  public customVarItems: ItemCVarList[] = [
    {
      title: '2 CVars Normal. Index 1 & 2',
      description: 'index property equals 1 and 2',
      color: 'success',
      cVars: [
        {
          index: 1,
          cVarKey: 'screenMode',
          cVarValue: 'light',
        },
        {
          index: 2,
          cVarKey: 'device',
          cVarValue: 'android',
        },
      ],
    },
    {
      title: '2 Cvars. 1 too long',
      description:
        'index property equals 1 and 2. CVar with index 1 has too long name CVar with index 2 has too long value',
      color: 'danger',
      cVars: [
        {
          index: 1,
          cVarKey:
            'my name is  really tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop long',
          cVarValue: 'light',
        },
        {
          index: 2,
          cVarKey: 'my_cvar_2',
          cVarValue:
            'I am really tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop long',
        },
      ],
    },
    {
      title: '3 Cvars. 2 with same index',
      description: 'index property equals 1,1 and 2',
      color: 'danger',
      cVars: [
        {
          index: 1,
          cVarKey: 'my_cvar_1',
          cVarValue: 'my_value_1',
        },
        {
          index: 1,
          cVarKey: 'my_cvar_2',
          cVarValue: 'my_value_with_same_index',
        },
        {
          index: 3,
          cVarKey: 'my_cvar_3',
          cVarValue: 'my_value_3',
        },
      ],
    },
    {
      title: '2 Cvars with empty values',
      description:
        'The first cvar has empty name. The 2nd cvar has empty value',
      color: 'danger',
      cVars: [
        {
          index: 1,
          cVarKey: '',
          cVarValue: 'my_value_1',
        },
        {
          index: 2,
          cVarKey: 'my_cvar_2',
          cVarValue: '',
        },
      ],
    },
  ];
  constructor() {
    // Add an Array of 30 Cvars to the basic customVarItems List
    const tooManyCvarsItems: ItemCVarList = {
      title: 'Too many cVars Items',
      color: 'danger',
      description: 'Index are from 0 to 30. Index 10 has a too long value',
      cVars: [],
    };
    for (let i = 0; i < 30; i++) {
      if (i === 10) {
        tooManyCvarsItems.cVars.push({
          index: i,
          cVarKey: 'cvar_key_' + i,
          cVarValue:
            'cvar_value_' +
            i +
            'is realllyyyy tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop long',
        });
      } else {
        tooManyCvarsItems.cVars.push({
          index: i,
          cVarKey: 'cvar_key_' + i,
          cVarValue: 'cvar_value_' + i,
        });
      }
    }
    this.customVarItems.push(tooManyCvarsItems);
  }

  ngOnInit() {}

  sendCVar(listItem: ItemCVarList) {
    ContentsquarePlugin.sendScreenName('testScreenName', listItem.cVars)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
