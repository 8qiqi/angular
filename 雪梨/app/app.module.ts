import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { CommonService } from './services/common.service';
import { RouterModule,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { ShequtailComponent } from './components/shequtail/shequtail.component';
import { RenwutailComponent } from './components/renwutail/renwutail.component';
import { HometongbutailComponent } from './components/hometongbutail/hometongbutail.component';
import { HomekechengtailComponent } from './components/homekechengtail/homekechengtail.component';
import { HomeqieshuotailComponent } from './components/homeqieshuotail/homeqieshuotail.component';
import { HometongzhitailComponent } from './components/hometongzhitail/hometongzhitail.component';
import { ZhengzaixuexiComponent } from './components/zhengzaixuexi/zhengzaixuexi.component';
import { WoguanzhudeComponent } from './components/woguanzhude/woguanzhude.component';
import { WokanguodeComponent } from './components/wokanguode/wokanguode.component';
import { AitewodeComponent } from './components/aitewode/aitewode.component';
import { ShoudaodezanComponent } from './components/shoudaodezan/shoudaodezan.component';
import { WeitijiaoComponent } from './components/weitijiao/weitijiao.component';
import { YiwanchengComponent } from './components/yiwancheng/yiwancheng.component';
import { YiwanjieComponent } from './components/yiwanjie/yiwanjie.component';
import { PinglunComponent } from './components/pinglun/pinglun.component';
import { CoursetailComponent } from './components/coursetail/coursetail.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    InputComponent,
    ListComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    ShequtailComponent,
    RenwutailComponent,
    HometongbutailComponent,
    HomekechengtailComponent,
    HomeqieshuotailComponent,
    HometongzhitailComponent,
    ZhengzaixuexiComponent,
    WoguanzhudeComponent,
    WokanguodeComponent,
    AitewodeComponent,
    ShoudaodezanComponent,
    WeitijiaoComponent,
    YiwanchengComponent,
    YiwanjieComponent,
    PinglunComponent,
    CoursetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'renwutail',component:RenwutailComponent,children:[
          {path:'weitijiao',component:WeitijiaoComponent},
          {path:'yiwancheng',component:YiwanchengComponent},
          {path:'yiwanjie',component:YiwanjieComponent},
          {path:'',redirectTo:'weitijiao',pathMatch:'full'}
        ]},
        {path:'homekechengtail',component:HomekechengtailComponent,children:[
          {path:'woguanzhude',component:WoguanzhudeComponent},
          {path:'wokanguode',component:WokanguodeComponent},
          {path:'zhengzaixuexi',component:ZhengzaixuexiComponent},
          {path:'',redirectTo:'zhengzaixuexi',pathMatch:'full'}
        ]},
        {path:'homeqieshuotail',component:HomeqieshuotailComponent},
        {path:'hometongzhitail',component:HometongzhitailComponent,children:[
          {path:'aitewode',component:AitewodeComponent},
          {path:'shoudaodezan',component:ShoudaodezanComponent},
          {path:'pinglun',component:PinglunComponent},
          {path:'',redirectTo:'aitewode',pathMatch:'full'}
        ]},
        {path:'hometongbutail',component:HometongbutailComponent},
        {path:'',redirectTo:'renwutail',pathMatch:'full'}
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:courseId',component:CoursetailComponent},
      {path:'shequ',component:ShequComponent},
      // {path:'shequ/:shequId',component:ShequtailComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent},
    ]),
    HttpClientModule
  ],
  providers: [{provide:CommonService,useClass:CommonService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
