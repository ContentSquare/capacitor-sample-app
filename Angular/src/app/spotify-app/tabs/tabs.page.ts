import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs') tabs!: IonTabs;
  selected: string | undefined;
  progress = 42;
  
  constructor() {
    this.selected = ''
  }

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }
}
