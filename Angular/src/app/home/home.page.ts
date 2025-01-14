import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController, private router: Router) {}

  goToPage(url) {
    this.navCtrl.navigateForward(url);
  }
}
