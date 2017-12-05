import {Category} from '../enums/Category';
import {ICategory} from './ICategory';

export interface IActivity {
  id: number;
  name: string;
  description: string;
  category: ICategory;
}
