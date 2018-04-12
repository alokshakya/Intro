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
    let body=JSON.stringify(
        {
          "language":language,
          "stdin":input,
          "output":output,
          "files": [
            {
              "name": "main.py",
               "content": "print(42)"
              }
            ]
          }
    );


      let glotheaders = new Headers();
      glotheaders.append('Authorization', 'Token 92debc0b-994a-4004-98f6-4895ba453c84e');
      glotheaders.append('Content-type', 'application/json');  
      let glotopts = new RequestOptions();
      glotopts.headers = glotheaders;
      let url='https://run.glot.io/languages/'+language+'/latest';
      let url2='/checkTest/v1';
    return this.http.post(url2,body)
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
