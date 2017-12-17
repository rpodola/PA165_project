import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordService} from '../_services/record.service';
import {IRecordDetail} from '../_interfaces/IRecordDetail';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {

  record: IRecordDetail;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService,
  ) { }

  ngOnInit(): void {
    this.getRecord();
  }

  getRecord(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recordService
      .getRecordDetail(id)
      .subscribe(record => {
        this.record = record;
      });
  }

  saveRecordDetails() {
    this.recordService
      .updateRecord(this.record)
      .subscribe(record => {
        const { activity, ...other } = record;
        this.record = Object.assign({}, { ...other, activityId: activity.id });
      });
  }

}
