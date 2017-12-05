import {IUserSettings} from './IUserSettings';

export interface IUser extends IUserSettings {
  id: number;
  birthDate: string;
  gender: string;
}
