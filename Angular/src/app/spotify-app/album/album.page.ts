import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../../assets/mockdata/albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data: any;

  constructor(private activatedRoute: ActivatedRoute) { this.data = null}

  ngOnInit() {
    console.log('Album Page: ');
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title!);
    console.log('decoded: ', decodedTitle);
    
    this.data = albums[decodedTitle];    
  }

    // Helper function for image names
    dasherize(string: string) {
      return string.replace(/[A-Z]/g, function(char: string, index: number) {
        return (index !== 0 ? '-' : '') + char.toLowerCase();
      });
    };
}
