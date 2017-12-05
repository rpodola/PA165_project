import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRecord} from '../../interfaces/IRecord';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {IRecordDetail} from '../../interfaces/IRecordDetail';

@Injectable()
export class RecordService {

  records: IRecordDetail[] = [
    {
      activityId: 0,
      activityName: 'First activity',
      burnedCalories: 500,
      id: 0,
      userId: 0,
      date: '5.12.2017 8:50',
      distance: 500,
      duration: 20,
      weight: 56,
    },
    {
      activityId: 1,
      activityName: 'Second activity',
      burnedCalories: 566,
      id: 1,
      userId: 0,
      date: '5.12.2017 15:25',
      distance: 125,
      duration: 80,
      weight: 56,
    },
  ];

  constructor(private http: HttpClient,) {
  }

  getAllRecordsOfUser(userId: number = 0): Observable<IRecord[]> {
    return of(
      this.records.filter(record => record.userId === userId)
    );
  }

  getRecorDetail(recordId: number): Observable<IRecordDetail> {
    return of(
      this.records.find(record => record.id === recordId)
    );
  }
}
