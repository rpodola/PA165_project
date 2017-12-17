import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRecord} from '../_interfaces/IRecord';
import {Observable} from 'rxjs/Observable';
import {IRecordDetail} from '../_interfaces/IRecordDetail';
import {Record} from "../_classes/Record";

const prefix = '/records/';

const allRecords = prefix + 'allRecords';
const recordDetail = prefix;
const createRecord = prefix + 'create';
const updateRecord = prefix + 'update';

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

  createNewRecord(record: Record): Observable<number>{
    return this.http
      .post<number>(createRecord, { record })
  }

  updateRecord(record: number): Observable<number> {
    return this.http
      .post<number>(updateRecord, { record });
  }
}
