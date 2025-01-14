import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrCaptureElementsPageRoutingModule } from './sr-capture-elements-routing.module';

import { SrCaptureElementsPage } from './sr-capture-elements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrCaptureElementsPageRoutingModule
  ],
  declarations: [SrCaptureElementsPage]
})
export class SrCaptureElementsPageModule {}
