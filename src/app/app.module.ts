import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AssignmentResultComponent} from './assignment-result/assignment-result.component';
import {HomeComponent} from './home/home.component';
import {DrawFormComponent} from './draw-form/draw-form.component';
import {AppCommonModule} from './app-common/app-common.module';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentResultComponent,
    HomeComponent,
    DrawFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
