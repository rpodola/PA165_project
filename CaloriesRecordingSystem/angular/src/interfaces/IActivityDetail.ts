import {Category} from '../enums/Category';
import {IBurnedCalories} from './IBurnedCalories';

export interface IActivityDetail {
  id: number;
  name: string;
  description: string;
  category: string;
  burnedCaloriesList: IBurnedCalories[],
}
