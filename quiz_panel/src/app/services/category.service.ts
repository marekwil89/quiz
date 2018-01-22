import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(public http: Http) { }

  add(category) {
    return this.http.post( 'http://80.211.200.144:3000/category/add/', {name: category});
  }

  getList() {
    return this.http.get( 'http://80.211.200.144:3000/category/list/');
  }
}
