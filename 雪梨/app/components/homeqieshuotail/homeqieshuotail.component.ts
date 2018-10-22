import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-homeqieshuotail',
  templateUrl: './homeqieshuotail.component.html',
  styleUrls: ['./homeqieshuotail.component.css']
})
export class HomeqieshuotailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
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
