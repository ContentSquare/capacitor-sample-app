import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomVarPageRoutingModule } from './custom-var-routing.module';

import { CustomVarPage } from './custom-var.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomVarPageRoutingModule
  ],
  declarations: [CustomVarPage]
})
export class CustomVarPageModule {}
