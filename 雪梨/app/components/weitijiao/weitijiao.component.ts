import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weitijiao',
  templateUrl: './weitijiao.component.html',
  styleUrls: ['./weitijiao.component.css']
})
export class WeitijiaoComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
  }

}
