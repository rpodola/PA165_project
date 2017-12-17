import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../_services/activity.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {IActivityDetail} from '../_interfaces/IActivityDetail';
import {BurnedCalories} from '../_classes/BurnedCalories';

@Component({
  selector: 'app-activity-detail-static',
  templateUrl: './activity-detail-static.component.html',
  styleUrls: ['./activity-detail-static.component.css']
})
export class ActivityDetailStaticComponent implements OnInit {

  activity: IActivityDetail;

  constructor(
    private activityService: ActivityService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.activityService
      .getActivityDetail(id)
      .subscribe(activity => {
        this.activity = activity;
      });
  }
}
