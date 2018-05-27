import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { McqComponent } from '../mcq/mcq.component';
import { McqtestComponent } from '../mcqtest/mcqtest.component';
import { CodingComponent } from '../coding/coding.component';
import { CodingQuestionsComponent } from '../coding-questions/coding-questions.component';

import { LoginComponent } from '../login/login.component';
import { MarkPreviewComponent } from '../mark-preview/mark-preview.component';
export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'mcq/:id',     component: McqComponent },
  { path: 'mcqtest',     component: McqtestComponent },
  { path: 'coding/:id',     component: CodingComponent },
  { path: 'codingQuestions',     component: CodingQuestionsComponent },
  { path: 'markPreview',     component: MarkPreviewComponent },
  
  { path: 'login',     component: LoginComponent }
 
];