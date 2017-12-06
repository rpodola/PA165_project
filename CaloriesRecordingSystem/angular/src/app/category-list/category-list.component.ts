import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ICategory} from '../../interfaces/ICategory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: ICategory[];

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.categoryService
      .getAllCategories()
      .subscribe(categories => this.categories = categories);
  }

}
