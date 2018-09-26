import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() arr:Array<any>;
  @Output() addItems = new EventEmitter();
  txt:string;
  add(arr){
    this.addItems.emit(arr);
  }
  
  getValue(e){
      if(e.keyCode==13){
        this.arr.push(this.txt);
        this.txt='';
        this.local.set('list',this.arr);
      }
      
    }
  constructor(private local:CommonService) { }

  ngOnInit() {
  }

}
