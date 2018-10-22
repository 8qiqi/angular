import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-coursetail',
  templateUrl: './coursetail.component.html',
  styleUrls: ['./coursetail.component.css']
})
export class CoursetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId']
    this.http.get('/api/kechengs/'+this.courseId).subscribe(data=>{
      this.courses = data;
    })
  }

}
