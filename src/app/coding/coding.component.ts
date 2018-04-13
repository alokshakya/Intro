import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import * as CodeMirror from 'codemirror';

import { THEMES } from '../shared/themes';
import { LANGUAGES } from '../shared/languages';
import { Lang } from '../shared/lang';
import { LangTemplates } from '../shared/langTemps';
import { RuncodeService} from '../services/runcode.service';
import { PROBLEMS } from '../shared/problems';
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
  @ViewChild('code') code: ElementRef;
  editorCode:string;
  constructor(
    private runCodeService:RuncodeService
  ) { }
  editor:any;
  ngOnInit() {
    this.themes=THEMES;
    this.theme='dracula';
    this.languages=LangTemplates;
    this.language=LangTemplates[0];
    this.problems=PROBLEMS;
    this.problem=PROBLEMS[0];
   
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
  errMess:string;
  submitCode(){
    console.log('Submit Code Pressed \n'+this.editor.getValue());
    this.runCodeService.runTest(this.editor.getValue(),
      this.language.filename,this.language.name,
      '3','6'
      )
      .subscribe( res => this.res=res,
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
  
  
  
  }
  
 


