import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { InterCComponent } from './inter-c/inter-c.component';
import { InterfdeComponent } from './interfde/interfde.component';
import { ChildComponent } from './child/child.component';
import { DadComponent } from './dad/dad.component';

import { ListComponent } from './CV/list/list.component';
import { ItemComponent } from './CV/item/item.component';
import { DetailComponent } from './CV/detail/detail.component';
import { CvComponent } from './CV/cv/cv.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { ThemeclassComponent } from './themeclass/themeclass.component';
import { CommonModule } from '@angular/common';
import { RaibowDirective } from './dir/raibow.directive';
import { HighlightDirective } from './dir/highlight.directive';
import { ShowParapgraphComponent } from './show-parapgraph/show-parapgraph.component';
import { DefaultImagePipe } from './default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbauchecComponent } from './CV/embauchec/embauchec.component';
import { Comp1Component } from './route/comp1/comp1.component';
import { Comp2Component } from './route/comp2/comp2.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { ColorComponent } from './color/color.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { DetailpersonComponent } from './CV/detailperson/detailperson.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InterCComponent,
    InterfdeComponent,
    ChildComponent,
    DadComponent,

    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    MiniwordComponent,
    ThemeclassComponent,
    RaibowDirective,
    HighlightDirective,
    ShowParapgraphComponent,
    DefaultImagePipe,
    TodoComponent,
    EmbauchecComponent,
    Comp1Component,
    Comp2Component,
    HeaderComponent,
    RouterSimulatorComponent,
    ColorComponent,
    FrontComponent,
    BackComponent,
    DetailpersonComponent,
    LoginComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
