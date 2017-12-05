import { Component, OnInit } from '@angular/core';
import {IActivity} from '../../interfaces/IActivity';
import {ActivityService} from '../../services/activity.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CategoryEnum} from '../../enums/CategoryEnum';
import {Category} from '../../classes/Category';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activitiesCache: IActivity[];
  activities: IActivity[];

  selectedCategory: CategoryEnum;

  constructor(
    private activityService: ActivityService,
  ) { }

  selectCategory(category: number) {
    this.selectedCategory = category;
    //  this.getActivitiesFromCategories([category]);
  }

  getActivitiesFromCategories(categories: number[]) {
    if (categories.length === 0) {
      this.activities = this.activitiesCache;
    } else {
      this.activities = this.activitiesCache.filter(activity => categories.includes(activity.category.category));
    }
  }

  loadAllActivitesFromServer() {
    this.activityService
      .getAllActivities()
      .subscribe(activities => this.activitiesCache = activities);
  }

  getAllActivities() {
    this.activities = this.activitiesCache;
  }

  ngOnInit() {
    this.loadAllActivitesFromServer();
    this.getAllActivities();
  }

}
