import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrMaskingPageRoutingModule } from './sr-masking-routing.module';

import { SrMaskingPage } from './sr-masking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrMaskingPageRoutingModule
  ],
  declarations: [SrMaskingPage]
})
export class SrMaskingPageModule {}
