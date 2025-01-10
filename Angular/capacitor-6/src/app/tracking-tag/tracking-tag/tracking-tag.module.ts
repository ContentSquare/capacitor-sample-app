import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackingTagPageRoutingModule } from './tracking-tag-routing.module';

import { TrackingTagPage } from './tracking-tag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackingTagPageRoutingModule
  ],
  declarations: [TrackingTagPage]
})
export class TrackingTagPageModule {}
