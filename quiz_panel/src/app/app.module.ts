import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';

import { AdminQuizListComponent } from './components/admin/quiz/list/admin-quiz-list/admin-quiz-list.component';
import { AdminQuizCreateComponent } from './components/admin/quiz/create/admin-quiz-create/admin-quiz-create.component';
import { AdminNavigationComponent } from './components/admin/navigation/admin-navigation/admin-navigation.component';

import { FilterPipe } from './pipes/filter.pipe';

import { QuizService } from './services/quiz.service'

@NgModule({
  declarations: [
    AppComponent,
    AdminQuizListComponent,
    AdminQuizCreateComponent,
    AdminNavigationComponent,
    FilterPipe
  ],
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
    
    // MaterialModule,
    // BrowserAnimationsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
