import { Component } from '@angular/core';
import { Router } from '@angular/router';

import recentlyPlayed from '../../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../../assets/mockdata/jumpBackIn.json';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed,
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation,
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn,
    },
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true,
  };

  constructor(private router: Router, private navCtrl: NavController) {
    console.log('Tab1');
  }

  openAlbum(album) {
    console.log('open: ', album);

    // const titleEscaped = encodeURIComponent(album.title);
    // this.router.navigateByUrl(`/spotify/tabs/album/${titleEscaped}`);
  }

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }

  closeApp() {
    this.navCtrl.pop();
  }
}
