import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/question';
import { FormsModule }   from '@angular/forms';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService} from '../services/data.service';
import { McqQuestion } from '../shared/mcqQuestion';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  questions: McqQuestion[];
  showAnswer:boolean;
  markedAnswers:string[];
  errMess:string;
  testId:number;
  constructor(private data: DataService, private route: ActivatedRoute,
    private location: Location) {
      this.testId = +this.route.snapshot.params['id'];
     

   }

  ngOnInit() {
    this.data.fetchMcqTestQuestions(this.testId)
      .subscribe( questions => {this.questions=questions; this.showAnswer=false;},
              errmess => this.errMess=errmess
              );
  }
  showAnswerFun(){
    this.showAnswer=true;
  }

}
