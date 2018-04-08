import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import * as CodeMirror from 'codemirror';

import { THEMES } from '../shared/themes';
import { LANGUAGES } from '../shared/languages';
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
@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent implements OnInit, AfterViewInit {
 
  themes:string[];
  languages:string[];
  language:string;
  theme:string;
  @ViewChild('code') code: ElementRef;
  @ViewChild('select') select: ElementRef;
  editorCode:string;
  constructor() {
   
   }
  editor:any;
  ngOnInit() {
    this.themes=THEMES;
    this.theme='dracula';
    this.languages=LANGUAGES;
    this.language='c';
   
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
            this.editor.setOption('mode','javascript');

            this.editor.setValue( `// ... some code !
function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
              find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}`);
            
            
          }
  //set Theme of editor
  
  
  submitCode(){
    console.log('Submit Code Pressed '+this.editor.getValue());
  }
  changeTheme(){
    this.editor.setOption('theme',this.theme);
  }
  changeLanguage(){
    this.editor.setOption('theme',this.theme);
    switch (this.language) {


      case "c":
        this.editor.setOption('mode','text/x-csrc');
        break; //
      case "clojure":
        this.editor.setOption('mode','text/x-clojure');
        break;
      case "cobol":
        this.editor.setOption('mode','text/x-cobol');
        break;
      case "coffeescript":
        this.editor.setOption('mode','text/x-coffiescript');
        break;
      case "cpp":
        this.editor.setOption('mode','text/x-c++src');
        break;
      case "csharp":
        this.editor.setOption('mode','text/x-objectivec');        
        break;
      case "d":
        this.editor.setOption('mode','text/x-d');
        break;
      case "go":
        this.editor.setOption('mode','text/x-go');
        break;
      case "groovy":
        this.editor.setOption('mode','text/x-groovy');
        break;
      case "haskell":
        this.editor.setOption('mode','text/x-haskell');
        break;
      case "java":
        this.editor.setOption('mode','text/x-java');
        break;
      case "javascript":
        this.editor.setOption('mode','text/javascript');
        break;
      case "julia":
        this.editor.setOption('mode','text/x-julia');
        break; //
      case "kotlin":
        this.editor.setOption('mode','text/x-kotlin');
        break;
      case "lua":
        this.editor.setOption('mode','text/x-lua');
        break; 
      case "perl":
        this.editor.setOption('mode','text/x-perl');
        break; 
      case "php":
        this.editor.setOption('mode','text/x-php');
        break;
      case "python":
        this.editor.setOption('mode','text/x-python');
        break;
      case "r":
        this.editor.setOption('mode','text/x-r');
        break;
      case "ruby":
        this.editor.setOption('mode','text/x-ruby');
        break;
      case "rust":
        this.editor.setOption('mode','text/x-rust');
        break;
      case "scala":
        this.editor.setOption('mode','text/x-scala');
        break;
      case "swift":
        this.editor.setOption('mode','text/x-swift');
        break;
      case "typescript":
        this.editor.setOption('mode','text/typescript');
        break;   
    }
  }
  
  
  
  }
  
 


