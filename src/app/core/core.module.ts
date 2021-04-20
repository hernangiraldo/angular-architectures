import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadOnceGuard } from './guards/ensure-module-load-once.guard';
import {HttpImplementationService} from './singletons/http-implementation.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpStatusImplementationService} from './singletons/http-status-implementation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [
    HttpImplementationService,
    HttpStatusImplementationService,
  ]
})
export class CoreModule extends EnsureModuleLoadOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
