import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-renwutail',
  templateUrl: './renwutail.component.html',
  styleUrls: ['./renwutail.component.css']
})
export class RenwutailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  // renwuId:number;
  // renwus;
  ngOnInit() {
    //调用请求函数
    // this.http.get('/api/renwutail').subscribe(data=>{
    //   this.renwus = data;
    // })
    //数据接收
    //参数快照
    // this.courseId = this.router.snapshot.params['courseId'];
    //参数订阅
    // this.router.params.subscribe((params)=>{
    //   this.renwus = params['renwuId'];
    // });
  }

}
