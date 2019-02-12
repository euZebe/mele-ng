import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawResultComponent } from './draw-result/draw-result.component';
import { AssignmentResultComponent } from './assignment-result/assignment-result.component';
import { HomeComponent } from './home/home.component';
import { DrawFormComponent } from './draw-form/draw-form.component';
import {FormsModule} from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawResultComponent,
    AssignmentResultComponent,
    HomeComponent,
    DrawFormComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
