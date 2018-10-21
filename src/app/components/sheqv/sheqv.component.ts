import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import{ HttpClient}from '@angular/common/http'
@Component({
  selector: 'app-sheqv',
  templateUrl: './sheqv.component.html',
  styleUrls: ['./sheqv.component.css']
})
export class SheqvComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { };
  sheqvId;
  sheqv;
  ngOnInit() {
    this.http.get('/api/sheqv').subscribe(data=>{
      this.sheqv = data;
    })
    this.router.params.subscribe((params)=>{
      this.sheqvId = params['sheqvId'];
    });
  }
  

}
