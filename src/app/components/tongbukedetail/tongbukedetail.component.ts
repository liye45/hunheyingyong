import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-tongbukedetail',
  templateUrl: './tongbukedetail.component.html',
  styleUrls: ['./tongbukedetail.component.css']
})
export class TongbukedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  // num=2;
  num
  // change(d){
  //   this.num= d;
  // }
  change(event){
    console.log(event);
    this.num=event.target.value
  }
  flag :boolean=true;
  course;
  date=new Date();
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId']
    this.http.get('/api/courses/'+this.courseId).pipe(map(data=>{
      // data.name='haha'
      return data;
    })).pipe(filter(data=>{
      return true;
    })).subscribe(data=>{
      console.log(data);
      this.course = data;
    })
  }
}
