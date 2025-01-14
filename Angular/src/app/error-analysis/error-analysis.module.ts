import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'; 
import { ErrorAnalysisRoutingModule } from './error-analysis-routing.module';
import { ErrorAnalysisPage } from './error-analysis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorAnalysisRoutingModule
  ],
  declarations: [ErrorAnalysisPage]
})
export class ErrorAnalysisModule {}
