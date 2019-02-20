import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageComponent} from './error-message/error-message.component';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
  declarations: [ErrorMessageComponent, SpinnerComponent],
  exports: [ErrorMessageComponent, SpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class AppCommonModule {
}
