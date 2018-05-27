import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import { Test } from '../shared/test';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mcqtest',
  templateUrl: './mcqtest.component.html',
  styleUrls: ['./mcqtest.component.scss']
})
export class McqtestComponent implements OnInit {
  test: Test;
  tests: Test[];
  errMess:string;
  submitting:boolean=false;
  
  constructor(
    private data: DataService,
    private router: Router) {
      
      this.data.fetchTests()
      .subscribe(res => { 
        //do extra actions on received data
        this.tests=res;
        console.log(res);
       },
        errmess => {this.errMess = <any>errmess; });
     }
  

  ngOnInit() {
    
  }
  

}
