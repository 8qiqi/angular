import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aitewode',
  templateUrl: './aitewode.component.html',
  styleUrls: ['./aitewode.component.css']
})
export class AitewodeComponent implements OnInit {
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  // shequId:number;
  aitewodes;
  ngOnInit() {
    this.http.get('/api/aitewodes').subscribe(data=>{
      console.log(data);
      this.aitewodes=data;
    });
    // this.router.params.subscribe((params)=>{
    //   this.shequId = params['shequId'];
    // });
    // console.log(this.router.snapshot.queryParams['id'])
  }

}
