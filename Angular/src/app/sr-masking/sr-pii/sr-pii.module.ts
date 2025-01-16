import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrPiiPageRoutingModule } from './sr-pii-routing.module';

import { SrPiiPage } from './sr-pii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrPiiPageRoutingModule
  ],
  declarations: [SrPiiPage]
})
export class SrPiiPageModule {}
