import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-zhengzaixuexi',
  templateUrl: './zhengzaixuexi.component.html',
  styleUrls: ['./zhengzaixuexi.component.css']
})
export class ZhengzaixuexiComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }


  kechengs;
  ngOnInit() {
    this.http.get('/api/zhengzaixuexis').subscribe(data=>{
      this.kechengs = data;
    })
}
}