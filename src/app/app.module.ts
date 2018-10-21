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
import { RouterModule ,Router} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { SheqvComponent } from './components/sheqv/sheqv.component';
import{HttpClientModule} from '@angular/common/http';
import { TongbukedetailComponent } from './components/tongbukedetail/tongbukedetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component'

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    SheqvComponent,
    TongbukedetailComponent,
    CoursedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path:'home',component:HomeComponent},
    {path:'tongbu',component:TongbuComponent},
    {path:'tongbu/:courseId',component:TongbukedetailComponent},
    {path:'course',component:CourseComponent},
    {path:'course/:kechengId',component:CoursedetailComponent},
    {path:'sheqv',component:SheqvComponent},
    {path:'',redirectTo:'home',pathMatch:"full"},
  ]),
    HttpClientModule
  ],
  providers: [{provide:CommonService,useClass:Common2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
