import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTwoRoutingModule } from './section-two-routing.module';
import { SectionTwoComponent } from './use-cases/section-two.component';


@NgModule({
  declarations: [SectionTwoComponent],
  imports: [
    CommonModule,
    SectionTwoRoutingModule
  ]
})
export class SectionTwoModule { }
