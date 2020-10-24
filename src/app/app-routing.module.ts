import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './route/comp1/comp1.component';
import { Comp2Component } from './route/comp2/comp2.component';
import { CvComponent } from './CV/cv/cv.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { TodoComponent } from './todo/todo.component';
import { ColorComponent } from './color/color.component';


const routes: Routes = [
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'mini', component: MiniwordComponent },
  { path: 'color/:color', component: ColorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
