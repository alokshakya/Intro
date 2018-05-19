import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//for material module import things which you need
import {MatButtonModule,
        MatCheckboxModule,
        MatCardModule, 
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatIconModule,
        MatSpinner,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTabsModule} from '@angular/material';
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
import { HttpModule } from '@angular/http';
import { ProcessHttpMsgService } from './services/process-http-msg.service';
import { FetchQuestionsService } from './services/fetch-questions.service';
import { FormsModule } from '@angular/forms';
import { SyntaxHighlighterDirective } from './directives/syntax-highlighter.directive';
import { CodingComponent } from './coding/coding.component';
import 'codemirror';
import { RuncodeService } from './services/runcode.service';
import { MarkdownService } from './services/markdown.service';
import { MarkdownComponent } from './markdown/markdown.component';
import { AdminComponent } from './admin/admin.component';
import { MarkPreviewComponent } from './mark-preview/mark-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    McqComponent,
    SyntaxHighlighterDirective,
    CodingComponent,
    MarkdownComponent,
    AdminComponent,
    MarkPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatProgressSpinnerModule, MatCardModule,
    MatToolbarModule, MatListModule, 
    MatIconModule, MatGridListModule,MatSelectModule,MatTabsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    RoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProcessHttpMsgService,
            FetchQuestionsService,
            RuncodeService,
            MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
