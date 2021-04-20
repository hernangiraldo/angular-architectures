import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionOneComponent } from './use-cases/section-one.component';

const routes: Routes = [{ path: '', component: SectionOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionOneRoutingModule { }
