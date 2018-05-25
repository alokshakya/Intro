import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PROBLEM } from '../shared/problem';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'; //for post request with data
import { dataURL } from '../shared/urls';
import { HttpHeaders } from '@angular/common/http';
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
    let body=
        {
          "language":language,
          "stdin":input,
          "name":filename,
          "content":code
          
          };
          console.log(body);

      let glotheaders = new Headers();
      //glotheaders.append('Authorization', 'Token 92debc0b-994a-4004-98f6-4895ba453c84e');
      glotheaders.append('Content-type', 'application/json');  
      let glotopts = new RequestOptions();
      glotopts.headers = glotheaders;
      let url='https://run.glot.io/languages/'+language+'/latest';
      let url2='https://api.enlightenment56.hasura-app.io/sampleTest';
      let url3='http://localhost:8080/sampleTest';
      let url4='https://api.enlightenment56.hasura-app.io/test2';
      let url5='https://api.enlightenment56.hasura-app.io/test3';
      let url6='https://api.enlightenment56.hasura-app.io/test4';
      let url7='https://api.enlightenment56.hasura-app.io/test5';
    return this.http.post(url7,body,glotopts)
            .map(res =>{ return this.processHttpMsgService.extractData(res);})
            .catch(error => { return this.processHttpMsgService.handleError(error);});          
  
  
   /* Checked for CORS on hasura api worked on hasura but not working on run.glot.io
        let hadata=JSON.stringify(
          {
            "type": "select",
            "args": {
                "table": "Questions",
                "columns": [
                    "*"
                ]
            }
        }
        );

      let Hsheaders = new Headers();
      Hsheaders.append('Authorization', 'Bearer 0b253fa1dfe1d4a9078aa68a6869b99ef2298c5f9f5bbd2f');
      Hsheaders.append('Content-Type', 'application/json');  
      let Hsopts = new RequestOptions();
      Hsopts.headers = Hsheaders;

      return this.http.post('https://data.enlightenment56.hasura-app.io/v1/query',hadata,Hsopts)
            .map(res =>{ return this.processHttpMsgService.extractData(res);})
            .catch(error => { return this.processHttpMsgService.handleError(error);}); 

        */  
      }

}
