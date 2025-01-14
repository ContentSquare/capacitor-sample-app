import { Component, OnInit } from '@angular/core';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';
declare type DynamicVarItemApp = {
    title: string;
    dynVarKey: string;
    dynVarValue: any;
};

@Component({
  selector: 'app-dynamic-var',
  templateUrl: './dynamic-var.page.html',
  styleUrls: ['./dynamic-var.page.scss'],
})
export class DynamicVarPage implements OnInit {

  public dynamicVarItems: DynamicVarItemApp[] = [
    {
        title: 'NormalStringValue',
        dynVarKey: 'NormalStringValue',
        dynVarValue: 'value',
    },
    {
        title: 'EmptyStringValue',
        dynVarKey: 'EmptyStringValue',
        dynVarValue: '',
    },
    {
        title: 'NullValue',
        dynVarKey: 'NullValue',
        dynVarValue: null,
    },
    {
        title: 'StringIntValue',
        dynVarKey: 'StringIntValue',
        dynVarValue: '10',
    },
    {
        title: 'NormalIntValue',
        dynVarKey: 'NormalIntValue',
        dynVarValue: 10,
    },
    {
        title: 'FloatValue',
        dynVarKey: 'FloatValue',
        dynVarValue: 10.5,
    },
    {
        title: 'IntValueZero',
        dynVarKey: 'IntValueZero',
        dynVarValue: 0,
    },
    {
        title: 'IntValueNegative',
        dynVarKey: 'IntValueNegative',
        dynVarValue: -10,
    },
    {
        title: 'KeyTooLongWithStringValue',
        dynVarKey:
            'MyKeyIsReallyTooLongAsItIsOver40CharactersAndShouldTriggerAnError',
        dynVarValue: 'string',
    },
    {
        title: 'KeyTooLongWithIntValue',
        dynVarKey:
            'MyKeyIsReallyTooLongAsItIsOver40CharactersAndShouldTriggerAnError',
        dynVarValue: 10,
    },
    {
        title: 'WrongStringValue',
        dynVarKey: 'WrongStringValue',
        dynVarValue:
            'I am really tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop long',
    },
];
constructor() { }

ngOnInit() {
}

sendDynVar(item: DynamicVarItemApp) {
    const dynVarItem = {
        dynVarKey: item.dynVarKey,
        dynVarValue: item.dynVarValue
    }
    ContentsquarePlugin.sendDynamicVar(dynVarItem)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        });
}

}
