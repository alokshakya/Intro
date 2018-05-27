import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'; //for post request with data

import { HttpHeaders } from '@angular/common/http';
import { ProcessHttpMsgService } from './process-http-msg.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CodingQuestion } from '../shared/codingQuestion';
import { McqQuestion } from '../shared/mcqQuestion';
import { Test } from '../shared/test';
@Injectable()
export class DataService {
  url:string;
  constructor(private http: Http,
    private processHttpMsgService: ProcessHttpMsgService) {
      this.url=`https://data.enlightenment56.hasura-app.io/v1/query`;
     }
  
     addCodingQuestion(title:string, description:string,
                        sampleInput:string,sampleOutput:string,
                        submitInput:string,submitOutput:string):Observable<any>{
      var user=JSON.parse(localStorage.getItem('user'));
      let hadata=JSON.stringify(
        {
          "type" : "insert",
          "args" : {
             "table":"CodingQuestions",
             "objects":[
               {
                 "title":title,
                 "description":description,
                 "sampleInput":sampleInput,
                 "sampleOutput":sampleOutput,
                 "submitInput":submitInput,
                 "submitOutput":submitOutput,
                 "author":user.hasura_id
               }
             ]
          }
        }
      );
      

    let Hsheaders = new Headers();
    Hsheaders.append('Content-Type', 'application/json');
    Hsheaders.append('Authorization', 'Bearer '+user.auth_token); 
     
    let Hsopts = new RequestOptions();
    Hsopts.headers = Hsheaders;
    return this.http.post(this.url,hadata,Hsopts)
          .map(res =>{console.log(res);  return this.processHttpMsgService.extractData(res);
          })
          .catch(error => { return this.processHttpMsgService.handleError(error);}); 
 
    }

    //function for fetching coding questions
    fetchCodingQuestions():Observable<CodingQuestion[]>{
      var user=JSON.parse(localStorage.getItem('user'));
      let hadata=JSON.stringify(
        {
          "type" : "select",
          "args" : {
             "table":"CodingQuestions",
             "columns":[
               
                 "id","title","description","sampleInput",
                 "sampleOutput","submitInput","submitOutput","created"
               
             ]
          }
        }
      );
    let Hsheaders = new Headers();
    Hsheaders.append('Content-Type', 'application/json');
    Hsheaders.append('Authorization', 'Bearer '+user.auth_token);  
    let Hsopts = new RequestOptions();
    Hsopts.headers = Hsheaders;
    return this.http.post(this.url,hadata,Hsopts)
          .map(res =>{console.log(res);  return this.processHttpMsgService.extractData(res);
          })
          .catch(error => { return this.processHttpMsgService.handleError(error);}); 
 
    }
    fetchCodingQuestion(id:number):Observable<CodingQuestion>{
      var user=JSON.parse(localStorage.getItem('user'));
      let hadata=JSON.stringify(
        {
          "type" : "select",
          "args" : {
             "table":"CodingQuestions",
             "columns":[
               
                 "id","title","description","sampleInput",
                 "sampleOutput","submitInput","submitOutput","created"
               
             ],
             "where":{"id":id}
          }
        }
      );
      console.log('id from data service function fetch question '+id);
    let Hsheaders = new Headers();
    Hsheaders.append('Content-Type', 'application/json');
    Hsheaders.append('Authorization', 'Bearer '+user.auth_token); 
    let Hsopts = new RequestOptions();
    Hsopts.headers = Hsheaders;
    return this.http.post(this.url,hadata,Hsopts)
          .map(res =>{console.log(res);  return this.processHttpMsgService.extractData(res);
          })
          .catch(error => { return this.processHttpMsgService.handleError(error);}); 
 
    }

    fetchTests():Observable<Test[]>{
      var user=JSON.parse(localStorage.getItem('user'));
      let hadata=JSON.stringify(
        {
          "type" : "select",
          "args" : {
             "table":"McqTests",
             "columns":[
                 "id","title","category","noOfQuestions","time",
                 "author","created" 
             ]
          }
        }
      );
    let Hsheaders = new Headers();
    Hsheaders.append('Content-Type', 'application/json');
    Hsheaders.append('Authorization', 'Bearer '+user.auth_token); 
    
    let Hsopts = new RequestOptions();
    Hsopts.headers = Hsheaders;
    return this.http.post(this.url,hadata,Hsopts)
          .map(res =>{console.log(res);  return this.processHttpMsgService.extractData(res);
          })
          .catch(error => { return this.processHttpMsgService.handleError(error);}); 
 
    }
    fetchMcqTestQuestions(id:number):Observable<McqQuestion[]>{
      var user=JSON.parse(localStorage.getItem('user'));
      let hadata=JSON.stringify(
        {
          "type" : "select",
          "args" : {
             "table":"McqQuestions",
             "columns":[
               
                 "id","answer","description","optionA",
                 "optionB","optionC","optionD","test_id","created","author"
               
             ],
             "where":{"test_id":id}
          }
        }
      );
      console.log('id from data service function fetch question '+id);
    let Hsheaders = new Headers();
    Hsheaders.append('Content-Type', 'application/json');
    Hsheaders.append('Authorization', 'Bearer '+user.auth_token); 
     
    let Hsopts = new RequestOptions();
    Hsopts.headers = Hsheaders;
    return this.http.post(this.url,hadata,Hsopts)
          .map(res =>{console.log(res);  return this.processHttpMsgService.extractData(res);
          })
          .catch(error => { return this.processHttpMsgService.handleError(error);}); 
 
    }

}
