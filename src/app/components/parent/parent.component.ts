import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ShareService } from '../../services/share.service';
import { Services } from '@angular/core/src/view';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[CommonService]
})
export class ParentComponent implements OnInit {

  // add(){
  //   this.share.add(100);
  // }
  constructor(private local: CommonService) { };
  //   if(this.local.get('list')){
  //   this.data1=this.local.get('list').split(',')}
  //   else{this.data1=["a","b","c","d","e"];}
  //   //this.local.set('name','liu')
  // }
  // data=[1,2,3,4,5,6];
  // data1;
  // del(i){
  //   console.log(i);
  //   this.data1.splice(i,1)
  //   this.local.set('list',this.data1);
  // }
  counter:number=0;
  data = [];
  
  gettxt(msg){
    this.data.push(msg);
    this.count();
    JSON.stringify(this.data)
  }
  count(){
    this.counter=0;
    this.data.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
  add1(i:number){
    this.count();
    this.local.set('list', JSON.stringify(this.data));
  }
  del(i){
    this.data.splice(i,1);
    this.count();
    this.local.set('list', JSON.stringify(this.data));
  }


  ngOnInit() {
    if(this.local.get('list')){
      this.data = JSON.parse(this.local.get('list'));
      this.count();
    }
    else{
      this.data=[];
    }
    
    
  }
}
