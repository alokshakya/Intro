import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PROBLEM } from '../shared/problem';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'; //for post request with data
import { dataURL } from '../shared/urls';
import { glotURL } from '../shared/urls';
import { ProcessHttpMsgService } from './process-http-msg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class RuncodeService {
  glotToken:string;
  constructor(private http: Http,
    private processHttpMsgService: ProcessHttpMsgService) { 
      this.glotToken = '92debc0b-994a-4004-98f6-4895ba453c84';
    }
  runTest(code:string, filename:string, language:string,input:string,output:string):Observable<PROBLEM[]>{
    let body=JSON.stringify(
      {
        "files": [{
            "name": filename,
            "content": code
        }],
        'stdin': input,
        
    },
  
    );


        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('Authorization', 'Token '+this.glotToken);
        let option = new RequestOptions({ headers: headers });
    return this.http.post('https://run.glot.io/languages/'+language+'/latest',body,option)
            .map(res =>{ return this.processHttpMsgService.extractData(res);})
            .catch(error => { return this.processHttpMsgService.handleError(error);});

  }

}
