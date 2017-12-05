import {CategoryEnum} from '../enums/CategoryEnum';

const defaultCategories = {
  [CategoryEnum.Exercise]: 'Exercise',
  [CategoryEnum.Aerobics]: 'Aerobics',
  [CategoryEnum.Dancing]: 'Dancing',
  [CategoryEnum.Hobby]: 'Hobby',
  [CategoryEnum.Running]: 'Running',
  [CategoryEnum.Swimming]: 'Swimming',
  [CategoryEnum.Walking]: 'Walking',
  [CategoryEnum.Work]: 'Work',
  [CategoryEnum.Cycling]: 'Cycling',
};

export const Categories = Object.freeze(defaultCategories);
