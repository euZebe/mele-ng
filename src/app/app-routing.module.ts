import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssignmentResultComponent} from './assignment-result/assignment-result.component';
import {HomeComponent} from './home/home.component';
import {DrawFormComponent} from './draw-form/draw-form.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'draw', loadChildren: './draw/draw.module#DrawModule'},
  {path: 'assignment/:id', component: AssignmentResultComponent},
  {path: 'new-draw', component: DrawFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
