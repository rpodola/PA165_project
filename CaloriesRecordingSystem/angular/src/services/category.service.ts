import { Injectable } from '@angular/core';
import {ICategory} from '../interfaces/ICategory';
import {Observable} from 'rxjs/Observable';
import {CategoryEnum} from '../enums/CategoryEnum';
import {Category} from '../classes/Category';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CategoryService {

  categories: ICategory[];

  constructor() {
    this.categories = Object
      .keys(CategoryEnum)
      .filter(key => !isNaN(Number(CategoryEnum[key])))
      .map(key => new Category(CategoryEnum[key]));
  }

  getAllCategories(): Observable<ICategory[]> {
    return of(this.categories);
  }

}
