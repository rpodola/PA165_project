import {IBurnedCalories} from './IBurnedCalories';
import {IActivity} from './IActivity';

export interface IActivityDetail extends IActivity {
  burnedCalories: IBurnedCalories[];
}
