import {IRecord} from './IRecord';

export interface IRecordDetail extends IRecord {
  distance: number;
  duration: number;
  weight: number;
}
