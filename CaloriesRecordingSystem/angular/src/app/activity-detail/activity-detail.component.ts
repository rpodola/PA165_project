import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {IActivityDetail} from '../../interfaces/IActivityDetail';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

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
      .subscribe(activity => this.activity = activity);
  }
}
