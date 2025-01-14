import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomErrorPage } from './custom-error.page';
import { CustomErrorRoutingModule } from './custom-error-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CustomErrorRoutingModule],
  declarations: [CustomErrorPage],
})
export class CustomErrorModule {}
