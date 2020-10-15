import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { InterCComponent } from './inter-c/inter-c.component';
import { InterfdeComponent } from './interfde/interfde.component';
import { ChildComponent } from './child/child.component';
import { DadComponent } from './dad/dad.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InterCComponent,
    InterfdeComponent,
    ChildComponent,
    DadComponent,
    
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
