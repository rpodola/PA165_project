import { Component, OnInit } from '@angular/core';
import {RecordService} from '../_services/record.service';
import {IRecord} from '../_interfaces/IRecord';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  userRecordsCached: IRecord[];
  userRecords: IRecord[];

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
