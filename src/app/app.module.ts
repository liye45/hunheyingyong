import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './componnents/TODOlistcomponnent/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CommonService } from './services/common.service';
import { Child1Component } from './components/child1/child1.component';
import { Common2Service } from './services/common2.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide:CommonService,useClass:Common2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
