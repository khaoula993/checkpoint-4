import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './route/comp1/comp1.component';
import { Comp2Component } from './route/comp2/comp2.component';
import { CvComponent } from './CV/cv/cv.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { TodoComponent } from './todo/todo.component';
import { ColorComponent } from './color/color.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { DetailpersonComponent } from './CV/detailperson/detailperson.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './CV/add/add.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },

  { path: 'cv' ,
    children : [
      { path:'',  component:CvComponent },
      { path: 'add', component: AddComponent },
      { path:':id',  component:DetailpersonComponent }
    ]
  },

  { path: 'todo', component: TodoComponent },
  { path: 'mini', component: MiniwordComponent },
  { path: 'color/:color', component: ColorComponent },

  { path: 'front', component: FrontComponent,
  children :[
    { path: 'color/:color', component: ColorComponent },
  ]
},
  { path: 'back', component: BackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
