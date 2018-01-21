import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  constructor(public http: Http) { }
  host: 'http://localhost:3000';

  getCategories(){
    return ['Programowanie', 'Jedzenie', 'Muzyka', 'Film'];
  }

  create(quiz) {
    return this.http.post( 'http://localhost:3000/quiz/add/', quiz);
    // return this.http.post('http://localhost:3000/quiz/add/', {});
      // .map(res => res.json());
  }

  getList() {
    return this.http.get( 'http://localhost:3000/quiz/list/');
  }
} 