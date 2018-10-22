import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hometongbutail',
  templateUrl: './hometongbutail.component.html',
  styleUrls: ['./hometongbutail.component.css']
})
export class HometongbutailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  hometongbutails;
  ngOnInit() {
    this.http.get('/api/hometongbutails').subscribe(data=>{
      this.hometongbutails = data;
    })
  
  }
}
