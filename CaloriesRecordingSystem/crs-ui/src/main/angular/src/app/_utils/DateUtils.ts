import {IMyDate} from 'ngx-mydatepicker';

export const dateToDDMMYYYY = (date: Date) => {
  return [date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + (date.getDate())).slice(-2),
  ].join('-');
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
