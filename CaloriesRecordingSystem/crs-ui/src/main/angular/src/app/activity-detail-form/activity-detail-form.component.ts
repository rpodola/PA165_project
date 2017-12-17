import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../_services/activity.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {ActivityDetail} from '../_classes/ActivityDetail';
import {BurnedCalories} from '../_classes/BurnedCalories';
import {Category} from '../_classes/Category';
import {CategoryService} from '../_services/category.service';

@Component({
  selector: 'app-activity-detail-form',
  templateUrl: './activity-detail-form.component.html',
  styleUrls: ['./activity-detail-form.component.css']
})
export class ActivityDetailFormComponent implements OnInit {

  activity: ActivityDetail;
  categories: Category[];

  constructor(
    private activityService: ActivityService,
    private categoryService: CategoryService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getActivity();
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  getActivity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.activityService
      .getActivityDetail(id)
      .subscribe(activity => {
        const { category, ...other } = activity;
        this.activity = Object.assign({}, { ...other, categoryId: category.id });
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

  saveActivityDetails() {
    this.activityService
      .updateActivity(this.activity)
      .subscribe(activity => {
        const { category, ...other } = activity;
        this.activity = Object.assign({}, { ...other, categoryId: category.id });
      });
  }

  onRemoveBurnedCalories(burnedCalories: BurnedCalories) {
    this.activity.burnedCaloriesList = this.activity.burnedCaloriesList.filter(bc => bc !== burnedCalories);
  }
}
