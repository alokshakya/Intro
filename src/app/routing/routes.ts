import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { McqComponent } from '../mcq/mcq.component';
import { CodingComponent } from '../coding/coding.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'mcq',     component: McqComponent },
  { path: 'coding',     component: CodingComponent }
 
];