import {IMyDate} from 'ngx-mydatepicker';
import * as moment from 'moment';

export const dateToDDMMYYYMMHH = (date: Date) => {
  return moment(date).format('DD-MM-YYYY HH:mm');
};

export const stringDateTimeToDate = (dateTime: string) => {
  return moment(dateTime, 'DD-MM-YYYY HH:mm').toDate();
};

export const dateToDDMMYYYMMHH = (date: Date) => {
  const datePart = [date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + (date.getDate())).slice(-2),
  ].join('-');

  const timePart = date.getHours() + ':' + date.getMinutes();

  return datePart + ' ' + timePart;
};

export const dateToIMyDate = (date: Date) => {
  const myDate: IMyDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate() + 1,
  };

  return myDate;
};
