import { Component, OnInit } from '@angular/core';
import {IActivity} from '../../interfaces/IActivity';
import {ActivityService} from '../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService
      .getActivities()
      .subscribe(activities => this.activities = activities);
  }

}
