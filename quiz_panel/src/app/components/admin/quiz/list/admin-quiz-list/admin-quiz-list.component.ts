import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../../services/quiz.service';
import { Quiz } from '../../../../../models/quiz';
import { FilterPipe } from '../../../../../pipes/filter.pipe';

@Component({
  selector: 'app-admin-quiz-list',
  templateUrl: './admin-quiz-list.component.html',
  styleUrls: ['./admin-quiz-list.component.scss']
})
export class AdminQuizListComponent implements OnInit {
  quizList:Quiz;
  categories:Array<string>;
  selectedCategory:string;

  constructor(private QuizService: QuizService) { }

  ngOnInit() {
    this.categories = this.QuizService.getCategories();
    this.getQuizList();
  }

  getQuizList(){
    this.QuizService.getList().subscribe((res) => {
      this.quizList = res.json();
    });
  }

}
