import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { CategoryService } from '../../../../../services/category.service';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss']
})
export class AdminCategoryAddComponent implements OnInit {
  categoryModel:string = '';
  categories:Array<string>;
  response:any = {status: false};

  constructor(private CategoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoryList();
  }

  onSubmit(){
    this.CategoryService.add(this.categoryModel).subscribe(
      res => { 
        console.log(res);
        this.response = res.json();
        this.getCategoryList();
      }
    ); 
  }

  getCategoryList(){
    this.CategoryService.getList().subscribe((res) => {
      this.categories = res.json();
    });
  }

}
