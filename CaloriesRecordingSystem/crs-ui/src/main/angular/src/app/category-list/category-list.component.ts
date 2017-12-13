import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {Category} from '../_classes/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.categoryService
      .getAllCategories()
      .subscribe(categories => this.categories = categories);
  }

}
