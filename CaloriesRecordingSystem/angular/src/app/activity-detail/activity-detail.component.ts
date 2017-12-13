import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {ActivityDetail} from '../_classes/ActivityDetail';
import {BurnedCalories} from '../_classes/BurnedCalories';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity: ActivityDetail;

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

  onAddBurnedCalories(burnedCalories: BurnedCalories) {
    const burned = this.activity.burnedCaloriesList.filter(bc => bc.upperWeightBoundary === burnedCalories.upperWeightBoundary);

    if (burned.length > 0) {
      burned[0].amount = burnedCalories.amount;
    } else {
      this.activity.burnedCaloriesList.push(burnedCalories);
      this.activity.burnedCaloriesList.sort((bc1, bc2) => bc1.upperWeightBoundary - bc2.upperWeightBoundary);
    }
  }

  onRemoveBurnedCalories(burnedCalories: BurnedCalories) {
    this.activity.burnedCaloriesList = this.activity.burnedCaloriesList.filter(bc => bc !== burnedCalories);
  }
}
