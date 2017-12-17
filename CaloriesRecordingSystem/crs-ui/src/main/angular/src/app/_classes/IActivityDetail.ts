import {BurnedCalories} from './BurnedCalories';
import {IActivity} from './IActivity';

export interface IActivityDetail extends IActivity {
  burnedCaloriesList: BurnedCalories[];
}
