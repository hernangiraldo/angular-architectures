import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PAGES} from './core/const/pages.const';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: PAGES.PRIVATE,
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
