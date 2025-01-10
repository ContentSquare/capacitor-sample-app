import { Component, OnInit } from '@angular/core';
import { TransactionItem, CurrencyCode, ContentsquarePlugin } from '@contentsquare/capacitor-plugin';


declare type TransactionItemApp = {
  title: string;
  transactionValue: any;
  transactionCurrency: any;
  transactionId?: any;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  public transactionItems: TransactionItemApp[] = [
    {
      title: 'SendIntWithValidIntCurrency',
      transactionValue: 10,
      transactionCurrency: CurrencyCode.USD,
    },
    {
      title: 'SendIntWithInvalidIntCurrency',
      transactionValue: 10,
      transactionCurrency: 9999999,
    },
    {
      title: 'SendIntWithValidUppercaseStringCurrency',
      transactionValue: 10,
      transactionCurrency: 'USD',
    },
    {
      title: 'SendIntWithValidLowercaseStringCurrency',
      transactionValue: 10,
      transactionCurrency: 'usd',
    },
    {
      title: 'SendIntWithInvalidStringCurrency',
      transactionValue: 10,
      transactionCurrency: 'DEFINITELY NOT VALID',
    },
    {
      title: 'SendIntWithID',
      transactionValue: 10,
      transactionCurrency: CurrencyCode.USD,
      transactionId: 'my usd transaction',
    },
    {
      title: 'SendFloat',
      transactionValue: 50.5,
      transactionCurrency: CurrencyCode.MAD,
    },
    {
      title: 'SendZero',
      transactionValue: 0,
      transactionCurrency: CurrencyCode.EUR,
    },
    {
      title: 'SendNeg',
      transactionValue: -10,
      transactionCurrency: CurrencyCode.GBP,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  sendTransaction(item: TransactionItemApp) {
    const transactionItem: TransactionItem = {
      transactionValue: item.transactionValue,
      transactionCurrency: item.transactionCurrency,
      transactionId: item.transactionId || null
    }

    ContentsquarePlugin.sendTransaction(transactionItem)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });

  }


}
