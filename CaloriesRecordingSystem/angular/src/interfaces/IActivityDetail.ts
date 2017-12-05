import {Category} from '../enums/Category';
import {IBurnedCalories} from './IBurnedCalories';
import {ICategory} from './ICategory';

export interface IActivityDetail {
  id: number;
  name: string;
  description: string;
  category: ICategory;
  burnedCaloriesList: IBurnedCalories[],
}
