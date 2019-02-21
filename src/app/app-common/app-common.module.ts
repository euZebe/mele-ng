import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageComponent} from './error-message/error-message.component';
import {SpinnerComponent} from './spinner/spinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [ErrorMessageComponent, SpinnerComponent, PageNotFoundComponent],
  exports: [ErrorMessageComponent, SpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class AppCommonModule {
}
