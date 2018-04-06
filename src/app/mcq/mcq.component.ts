import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/question';
import { FormsModule }   from '@angular/forms';
import { FetchQuestionsService} from '../services/fetch-questions.service';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  questions: Question[];
  showAnswer:boolean;
  markedAnswers:string[];
  errMess:string;
  constructor(private fetchQuestionService: FetchQuestionsService) { }

  ngOnInit() {
    this.fetchQuestionService.getQuestions()
      .subscribe( questions => {this.questions=questions; this.showAnswer=false;},
              errmess => this.errMess=errmess
              );
  }
  showAnswerFun(){
    this.showAnswer=true;
  }

}
