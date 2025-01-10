import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sr-masking',
  templateUrl: './sr-masking.page.html',
  styleUrls: ['./sr-masking.page.scss'],
})
export class SrMaskingPage implements OnInit {
  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    ContentsquarePlugin.excludeURLForReplay(/sr-capture-elements/);
  }

  excludeURLForReplay() {
    ContentsquarePlugin.excludeURLForReplay(/home/);
  }

  setCapturedElementsSelector() {
    ContentsquarePlugin.setCapturedElementsSelector('#capture-me, .show-me');
  }

  getPiiSelectorString(): string {
    return JSON.stringify(environment.piiSelectors);
  }

  goToMaskedPage() {
    this.navCtrl.navigateForward(['./sr-capture-elements'], {
      relativeTo: this.route,
    });
  }
}
