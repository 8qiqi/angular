import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-yiwancheng',
  templateUrl: './yiwancheng.component.html',
  styleUrls: ['./yiwancheng.component.css']
})
export class YiwanchengComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  yiwanchengId:number;
  yiwanchengs;
  ngOnInit() {
    this.http.get('/api/yiwanchengs').subscribe(data=>{
      this.yiwanchengs = data;
    })
    // this.router.params.subscribe((params)=>{
    //   this.yiwanchengId = params['yiwanchengId'];
    // });
  }

}
