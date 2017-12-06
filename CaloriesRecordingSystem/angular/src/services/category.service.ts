import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ICategory} from '../interfaces/ICategory';
import {Category} from '../classes/Category';

@Injectable()
export class CategoryService {

  categories: ICategory[] = [
    new Category(0, 'Exercise'),
    new Category(1, 'Aerobics'),
    new Category(2, 'Walking'),
    new Category(3, 'Running'),
    new Category(4, 'Swimming'),
    new Category(5, 'Work'),
    new Category(6, 'Work2'),
    new Category(7, 'Work3'),
    new Category(8, 'Work4'),
    new Category(9, 'Work5'),
    new Category(10, 'Work6'),
    new Category(11, 'Work7'),
    new Category(12, 'Work8'),
    new Category(13, 'Work9'),
  ];

  constructor() {}

  getAllCategories(): Observable<ICategory[]> {
    return of(this.categories);
  }

  getCategory(id: number): Observable<ICategory> {
    return of(
      this.categories.find(cat => cat.id === id)
    );
  }

}
