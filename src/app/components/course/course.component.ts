import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import{ HttpClient}from '@angular/common/http'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  kechengId:number;
  kecheng;
  ngOnInit() {
    this.router.params.subscribe((params)=>{
      this.kechengId = params['kechengId'];
    });
    this.http.get('/api/kecheng').subscribe(data=>{
      this.kecheng = data;
    })
  }
}
