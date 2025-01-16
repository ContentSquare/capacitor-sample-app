import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss']
})
export class ParametresPage implements OnInit {

  constructor(
    public route: Router,
    public alertController: AlertController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {

  }

  goToPage(page) {
    this.route.navigate([page]);
  }

}
