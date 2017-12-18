import { Component, OnInit } from '@angular/core';
import {Record} from '../_classes/Record';
import {RecordService} from '../_services/record.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityService} from '../_services/activity.service';
import {IActivity} from '../_interfaces/IActivity';
import {dateToDDMMYYYMMHH} from '../_utils/DateUtils';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {

  record = new Record();
  activities: IActivity[];

  selectedDate: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy HH:mm',
  };

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService,
    private activityService: ActivityService,
    private router: Router,
  ) {
    this.record.duration = 1;
    this.record.distance = 1;
    this.record.atTime = dateToDDMMYYYMMHH(this.selectedDate);
  }

  onDateSelect(date: Date) {
    this.record.atTime = dateToDDMMYYYMMHH(date);
  }

  getAllActivities() {
    this.activityService
      .getAllActivities()
      .subscribe(activities => {
        this.activities = activities;

        if (activities) {
          this.record.activityId = activities[0].id;
        }
      });
  }

  createNewRecord() {
    this.recordService
      .createNewRecord(this.record)
      .subscribe(() => this.router.navigateByUrl('/records/'));
  }

  getRecord() {
    const routeId = this.route.snapshot.paramMap.get('id');

    if (routeId) {
      const id = +routeId;
      this.recordService
        .getRecordForUpdate(id)
        .subscribe(record => this.record = record);
    }
  }

  ngOnInit() {
    this.getRecord();
    this.getAllActivities();
  }

}
