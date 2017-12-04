import {Category} from '../enums/Category';

const defaultCategories = {
  [Category.Exercise]: 'Exercise',
  [Category.Aerobics]: 'Aerobics',
  [Category.Dancing]: 'Dancing',
  [Category.Hobby]: 'Hobby',
  [Category.Running]: 'Running',
  [Category.Swimming]: 'Swimming',
  [Category.Walking]: 'Walking',
  [Category.Work]: 'Work',
  [Category.Cycling]: 'Cycling',
};

export const Categories = Object.freeze(defaultCategories);
