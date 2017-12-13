import { Component, OnInit } from '@angular/core';
import {RecordService} from '../_services/record.service';
import {Record} from '../_classes/Record';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  userRecordsCached: Record[];
  userRecords: Record[];

  constructor(
    private recordService: RecordService
  ) { }

  loadAllUserRecordsFromServer() {
    this.recordService
      .getAllRecordsOfUser()
      .subscribe(userRecords => this.userRecordsCached = userRecords);
  }

  getAllUserRecords() {
    this.userRecords = this.userRecordsCached;
  }

  ngOnInit() {
    this.loadAllUserRecordsFromServer();
    this.getAllUserRecords();
  }

}
