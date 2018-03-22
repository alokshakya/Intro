import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//for material module import things which you need
import {MatButtonModule,
        MatCheckboxModule,
        MatCardModule, 
        MatToolbarModule,
        MatListModule,
        MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { McqComponent } from './mcq/mcq.component';

import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    McqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatListModule, MatIconModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
