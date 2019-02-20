import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawRoutingModule } from './draw-routing.module';
import { DrawResultComponent } from './draw-result/draw-result.component';
import {AppCommonModule} from '../app-common/app-common.module';

@NgModule({
  declarations: [DrawResultComponent],
  imports: [
    AppCommonModule,
    CommonModule,
    DrawRoutingModule
  ]
})
export class DrawModule { }
