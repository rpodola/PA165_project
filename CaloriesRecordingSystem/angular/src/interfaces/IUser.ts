import {IUserSettings} from './IUserSettings';

export interface IUser extends IUserSettings {
  id: number;
  birthdate: string;
  gender: string;
}
