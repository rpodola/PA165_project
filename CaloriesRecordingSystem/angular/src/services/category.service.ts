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
