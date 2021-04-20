import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from './use-cases/private.component';
import {PAGES} from '../core/const/pages.const';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        redirectTo: PAGES.SECTION_ONE,
        pathMatch: 'full',
      },
      {
        path: PAGES.SECTION_ONE,
        loadChildren: () => import('../section-one/section-one.module').then(m => m.SectionOneModule)
      },
      {
        path: PAGES.SECTION_TWO,
        loadChildren: () => import('../section-two/section-two.module').then(m => m.SectionTwoModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
