import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Question } from '../shared/question';

import { Http, Response } from '@angular/http';
import { dataURL } from '../shared/urls';
import { ProcessHttpMsgService } from './process-http-msg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchQuestionsService {

  constructor(private http: Http,
    private processHttpMsgService: ProcessHttpMsgService) { }
  getQuestions():Observable<Question[]>{
    return this.http.get(dataURL+'questions')
            .map(res =>{ return this.processHttpMsgService.extractData(res);})
            .catch(error => { return this.processHttpMsgService.handleError(error);});

  }

}
