import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
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
 
  
  @ViewChild('code') code: ElementRef;
  @ViewChild('select') select: ElementRef;
  editorCode:string;
  constructor() {
   
   }
  editor:any;
  ngOnInit() {
   
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
            this.editor.setOption('theme','dracula');
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
  
  submitCode(){
    console.log('Submit Code Pressed '+this.editor.getValue());
  }
  
  
  
  }
  
 


