import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { QuizService } from '../../../../../services/quiz.service';
import { CategoryService } from '../../../../../services/category.service';
import { Quiz } from '../../../../../models/quiz';

// import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-admin-quiz-create',
  templateUrl: './admin-quiz-create.component.html',
  styleUrls: ['./admin-quiz-create.component.scss']
})

export class AdminQuizCreateComponent implements OnInit {
  newQuiz:Quiz;
  categories:Array<string>;
  response:any = {status: false};

  constructor(private QuizService: QuizService, private CategoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoryList();
    this.cleanForm();
  }

  cleanForm(){
    this.newQuiz = {name: '',category: '',questions: []};
  }

  onSubmit(){
    this.QuizService.create(this.newQuiz).subscribe(
      res => { 
        console.log(res);
        this.response = res.json()
        this.cleanForm();
      }
    ); 
  }

  getCategoryList(){
    this.CategoryService.getList().subscribe((res) => {
      this.categories = res.json();
    });
  }
}