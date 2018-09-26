import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;
  @Output() changeIndex=new EventEmitter();
  @Output() changeIndex1=new EventEmitter();
  @Output() delItems=new EventEmitter();
  @Output() delItems1=new EventEmitter();
 
  
  del(i){
    this.delItems.emit(i);
  }
  del1(i){
    this.delItems1.emit(i);
  }
  swap1(i){
    this.changeIndex.emit(i);
  }
  swap2(i){
    this.changeIndex1.emit(i);
  }
  constructor() { }

  ngOnInit() {
  }

}
