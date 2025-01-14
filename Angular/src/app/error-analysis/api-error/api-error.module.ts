import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiErrorPage } from './api-error.page';
import { ApiErrorRoutingModule } from './api-error-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    ApiErrorRoutingModule,
  ],
  declarations: [ApiErrorPage],
})
export class ApiErrorModule {}
