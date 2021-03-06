import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges, ViewEncapsulation } from '@angular/core';
import * as CodeMirror from 'codemirror';

import { MarkdownService } from '../services/markdown.service';
import * as extras from 'marked-extras';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { THEMES } from '../shared/themes';
import { LANGUAGES } from '../shared/languages';
import { Lang } from '../shared/lang';
import { LangTemplates } from '../shared/langTemps';
import { RuncodeService} from '../services/runcode.service';
import { DataService} from '../services/data.service';
import { PROBLEMS } from '../shared/problems';
import { CodingQuestion } from '../shared/codingQuestion';
//import codemirror javascript files
//modes
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/clojure/clojure';
import 'codemirror/mode/cobol/cobol';
import 'codemirror/mode/crystal/crystal';
import 'codemirror/mode/d/d';
import 'codemirror/mode/go/go';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/julia/julia';
import 'codemirror/mode/lua/lua';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/php/php';
import 'codemirror/mode/python/python';
import 'codemirror/mode/r/r';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/swift/swift';
//addon
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
//hints
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/anyword-hint';
import { PROBLEM } from '../shared/problem';
@Component({
  selector: 'app-coding',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent implements OnInit, AfterViewInit {
  problems:PROBLEM[];
  problem:PROBLEM;
  themes:string[];
  languages:Lang[];
  language:Lang;
  theme:string;
  codingQuestion: CodingQuestion;
  codingQuestions: CodingQuestion[];
  errMess:string;
  compilationError:string;
  runError:string;
  output:string;
  sampleTestcasePass:boolean=false;
  @ViewChild('code') code: ElementRef;
  editorCode:string;

  constructor(
    private runCodeService:RuncodeService,
    private data: DataService,
    private _markdown: MarkdownService,
    private route: ActivatedRoute,
    private location: Location) {
      let id = +this.route.snapshot.params['id'];
      console.log("id from params "+ id);
      this.data.fetchCodingQuestion(id)
      .subscribe(res => { 
        //do extra actions on received data
        this.codingQuestion=res[0];
        console.log(res);
       },
        errmess => {this.errMess = <any>errmess; });
     }
  editor:any;
  ngOnInit() {
    this.themes=THEMES;
    this.theme='dracula';
    this.languages=LangTemplates;
    this.language=LangTemplates[0];
    this.problems=PROBLEMS;
    this.problem=PROBLEMS[0];
    extras.init();
    this._markdown.setMarkedOptions({});
    console.log(extras.markedDefaults);
    this._markdown.setMarkedOptions(Object.assign(extras.markedDefaults, {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    }));
    this._markdown.renderer.table = (header: string, body: string) => {
      return `
      <table class="table2">
        <thead>
          ${header}
        </thead>
        <tbody>
          ${body}
        </tbody>
      </table>
      `;
    }
    this._markdown.renderer.blockquote = (quote: string) => {
      return `<blockquote class="king-quote">${quote}</blockquote>`;
    }


   
  }
  ngAfterViewInit() {
    
    console.log(this.code.nativeElement.value);
    
    this.editor= CodeMirror.fromTextArea(this.code.nativeElement, {
      lineNumbers: true,
      styleActiveLine:true,
      matchBrackets:true,
      autoCloseBrackets: true,
      smartIndent: true,
      extraKeys:{"Ctrl+Space":"autocomplete"}
      
    });
    
    this.editor.setOption('theme',this.theme);
    this.editor.setOption('mode',this.language.mode);
    this.editor.setValue(this.language.template);            
  }
  res:any;
  
  submitCode(){
    console.log('Submit Code Pressed \n'+this.editor.getValue());
    this.runCodeService.runTest(this.editor.getValue(),
      this.language.filename,this.language.name,
      this.codingQuestion.sampleInput,this.codingQuestion.samplOutput
      )
      .subscribe( res => {this.res=res;
        if(res.stderr)
        {
          this.compilationError=res.stderr;
        }
        else if(res.error){
          this.runError=res.error;
        }
        else if(res.stdout){
          //check for sample output pass
          //('inside stdout and output' +res.stdout);
          //this.output=this.res.stdout;
          if(this.codingQuestion.samplOutput===res.stdout)
          {
            this.output=this.res.stdout;
            this.sampleTestcasePass=true;
          }
        }
        console.log(res);
      }
      ,
      errmess => this.errMess=errmess
      );
  }
  changeTheme(){
    this.editor.setOption('theme',this.theme);
  }
  changeLanguage(){
    this.editor.setOption('mode',this.language.mode);
    this.editor.setValue(this.language.template);
  }

  
  goBack(): void {
    this.location.back();
  }
  
  
  
}
  
 


