import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { McqComponent } from '../mcq/mcq.component';
import { CodingComponent } from '../coding/coding.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../login/login.component';
import { MarkPreviewComponent } from '../mark-preview/mark-preview.component';
export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'mcq',     component: McqComponent },
  { path: 'coding',     component: CodingComponent },
  { path: 'markPreview',     component: MarkPreviewComponent },
  { path: 'admin',     component: AdminComponent },
  { path: 'login',     component: LoginComponent }
 
];