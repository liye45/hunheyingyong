import { Component, OnInit, Input, Output ,EventEmitter, SimpleChanges  } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // index =0;
  // log(msg){
  //   console.log(`这是第${this.index++}次调用，调用的钩子函数是${msg}`);
  // }
  constructor(private share:ShareService) { };
   
  ngOnInit(){
   };
  // ngOnChanges(change:SimpleChanges):void{
  //  this.log("ngOnChanges")
  // }
  // ngDoCheck():void{
  //   this.log("ngDOcheck")
  // }
  @Input() count;
  @Input() arr;
  @Output() delIndex = new EventEmitter();
  @Output() changeIndex = new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  change(i) {
    this.arr[i].done = !this.arr[i].done;
    this.changeIndex.emit(i);
  }

}
