import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ICategory} from '../_interfaces/ICategory';
import {HttpClient} from '@angular/common/http';

const prefix = '/activities/';
const allCategories = prefix + 'categories/';
const category = allCategories;

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient
  ) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.http
      .get<ICategory[]>(allCategories);
  }

  getCategory(id: number): Observable<ICategory> {
    return this.http
      .get<ICategory>(category + id);
  }

}
