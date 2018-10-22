import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  shequId:number;
  shequs;
  ngOnInit() {
    this.http.get('/api/shequs').subscribe(data=>{
      console.log(data);
      this.shequs=data;
    });
    // this.router.params.subscribe((params)=>{
    //   this.shequId = params['shequId'];
    // });
    // console.log(this.router.snapshot.queryParams['id'])
  }

}

