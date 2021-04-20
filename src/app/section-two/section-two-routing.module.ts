import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionTwoComponent } from './use-cases/section-two.component';

const routes: Routes = [{ path: '', component: SectionTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionTwoRoutingModule { }
