import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import { CodingQuestion } from '../shared/codingQuestion';
@Component({
  selector: 'app-coding-questions',
  templateUrl: './coding-questions.component.html',
  styleUrls: ['./coding-questions.component.scss']
})
export class CodingQuestionsComponent implements OnInit {
  codingQuestion: CodingQuestion;
  codingQuestions: CodingQuestion[];
  errMess:string;
  constructor(
    private data: DataService) {

      this.data.fetchCodingQuestions()
      .subscribe(res => { 
        //do extra actions on received data
        this.codingQuestions=res;
        console.log(res);
       },
        errmess => {this.errMess = <any>errmess; });
     }

  ngOnInit() {
  }

}
