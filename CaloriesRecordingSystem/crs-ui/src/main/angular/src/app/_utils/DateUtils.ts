import {IMyDate} from 'ngx-mydatepicker';
import * as moment from 'moment';

export const dateToDDMMYYYMMHH = (date: Date) => {
  return moment(date).format('DD-MM-YYYY HH:mm');
};

export const stringDateTimeToDate = (dateTime: string) => {
  return moment(dateTime, 'DD-MM-YYYY HH:mm').toDate();
};

export const dateToIMyDate = (date: Date) => {
  const myDate: IMyDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate() + 1,
  };

  return myDate;
};
