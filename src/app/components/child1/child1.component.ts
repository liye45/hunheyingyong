import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  txt:string;
  @Output() eventchild1=new EventEmitter();
  
  fun(e){
    if(e.keyCode==13){
      this.eventchild1.emit(new Msg(this.txt,false));
      this.txt="";
    }
  };
}
export class Msg{
  constructor(public title:string,public done:boolean){

  }
}
