import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DrawResultComponent} from './draw-result/draw-result.component';

const routes: Routes = [
  {path: ':id', component: DrawResultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawRoutingModule {
}
