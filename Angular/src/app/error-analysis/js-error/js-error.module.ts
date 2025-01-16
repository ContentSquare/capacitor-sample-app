import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JsErrorPage } from './js-error.page';
import { JsErrorRoutingModule } from './js-error-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, JsErrorRoutingModule],
  declarations: [JsErrorPage],
})
export class JsErrorModule {}
