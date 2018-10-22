import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wokanguode',
  templateUrl: './wokanguode.component.html',
  styleUrls: ['./wokanguode.component.css']
})
export class WokanguodeComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  courseId:number;
  kechengs;
  ngOnInit() {
    this.http.get('/api/kechengs').subscribe(data=>{
      this.kechengs = data;
    })

    //参数快照
    // this.courseId = this.router.snapshot.params['courseId'];
    //参数订阅
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];
    });
  }

}
