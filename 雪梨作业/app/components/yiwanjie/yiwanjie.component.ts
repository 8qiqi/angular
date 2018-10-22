import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-yiwanjie',
  templateUrl: './yiwanjie.component.html',
  styleUrls: ['./yiwanjie.component.css']
})
export class YiwanjieComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

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
