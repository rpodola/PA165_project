import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRecord} from '../_interfaces/IRecord';
import {Observable} from 'rxjs/Observable';
import {IRecordDetail} from '../_interfaces/IRecordDetail';
import {Record2} from "../_classes/Record2";

const prefix = '/records/';

const allRecords = prefix + 'allRecords';
const recordDetail = prefix;
const createRecord = prefix + 'create';

@Injectable()
export class RecordService {
  constructor(
    private http: HttpClient,
  ) {}

  getAllRecordsOfUser(): Observable<IRecord[]> {
    return this.http
      .get<IRecord[]>(allRecords);
  }

  getRecordDetail(recordId: number): Observable<IRecordDetail> {
    return this.http
      .get<IRecordDetail>(recordDetail + recordId);
  }

  createNewRecord(record: Record2): Observable<number>{
    return this.http
      .post<number>(createRecord, { record })
  }
}
