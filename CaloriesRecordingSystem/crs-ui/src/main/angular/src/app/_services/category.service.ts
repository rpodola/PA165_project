import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Category} from '../_classes/Category';
import {HttpClient} from '@angular/common/http';

const prefix = 'activities/';
const allCategories = prefix + 'allCategories';
const category = prefix + 'category/';

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient
  ) {}

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<{ categories: Category[] }>(allCategories)
      .map(response => response.categories);
  }

  getCategory(id: number): Observable<Category> {
    return this.http
      .get<{ category: Category }>(category + id)
      .map(response => response.category);
  }

}
