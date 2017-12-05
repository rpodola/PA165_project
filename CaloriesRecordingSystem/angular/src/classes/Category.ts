import {ICategory} from '../interfaces/ICategory';
import {CategoryEnum} from '../enums/CategoryEnum';

export class Category implements ICategory {

  name: string;

  constructor(
    public category: CategoryEnum,
  ) {
    this.name = CategoryEnum[category];
  }

}
