import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DrawResultComponent} from './draw-result/draw-result.component';
import {PageNotFoundComponent} from '../app-common/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: ':id', component: DrawResultComponent},
  {path: '', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawRoutingModule {
}
