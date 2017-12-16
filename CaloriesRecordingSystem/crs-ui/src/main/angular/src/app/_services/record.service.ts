import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Record} from '../_classes/Record';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RecordDetail} from '../_classes/RecordDetail';

const prefix = '/records/';

const allRecords = prefix + 'allRecords';
const recordDetail = prefix;

@Injectable()
export class RecordService {
  constructor(
    private http: HttpClient,
  ) {}

  getAllRecordsOfUser(): Observable<Record[]> {
    return this.http
      .get<{ records: Record[] }>(allRecords)
      .map(response => response.records);
  }

  getRecorDetail(recordId: number): Observable<RecordDetail> {
    return this.http
      .get<{ record: RecordDetail }>(recordDetail + recordId)
      .map(response => response.record);
  }
}
