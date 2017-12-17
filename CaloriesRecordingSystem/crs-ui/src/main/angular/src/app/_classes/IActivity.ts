import {Category} from './Category';

export interface IActivity {
  id: number;
  name: string;
  description: string;
  category: Category;
}
