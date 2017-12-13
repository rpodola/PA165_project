import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Record} from '../app/_classes/Record';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RecordDetail} from '../app/_classes/RecordDetail';

@Injectable()
export class RecordService {

  records: RecordDetail[] = [
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

  constructor(
    private http: HttpClient,
  ) {
  }

  getAllRecordsOfUser(userId: number = 0): Observable<Record[]> {
    return of(
      this.records.filter(record => record.userId === userId)
    );
  }

  getRecorDetail(recordId: number): Observable<RecordDetail> {
    return of(
      this.records.find(record => record.id === recordId)
    );
  }
}
