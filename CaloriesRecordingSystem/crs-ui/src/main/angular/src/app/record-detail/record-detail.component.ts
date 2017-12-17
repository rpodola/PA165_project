import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordService} from '../_services/record.service';
import {IRecordDetail} from '../_interfaces/IRecordDetail';
import {IActivity} from "../_interfaces/IActivity";
import {ActivityService} from "../_services/activity.service";

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {

  record: IRecordDetail;
  activities: IActivity[];

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.getRecord();
    this.getAllActivities();
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
        this.record = record;
      });
  }

  getAllActivities(){
    this.activityService
      .getAllActivities()
      .subscribe(activities => {
        this.activities = activities;
        if(activities){
          this.record.activityId = activities[0].id
        }
      })
  }

}
