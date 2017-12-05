import { Component, OnInit } from '@angular/core';
import {IActivity} from '../../interfaces/IActivity';
import {ActivityService} from '../../services/activity.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activitiesCache: IActivity[];
  activities: IActivity[];

  constructor(
    private activityService: ActivityService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  getActivity(category: number) {
    this.getActivitiesFromCategories([category]);
  }

  getActivitiesFromCategories(categories: number[]) {
    this.activities = this.activitiesCache.filter(activity => categories.includes(activity.category.category));
    /*
    this.activityService
      .getActivities(categories)
      .subscribe(activities => this.activitiesCache = activities);
      */
  }

  loadAllAcitivitesFromServe() {
    this.activityService
      .getAllActivities()
      .subscribe(activities => this.activitiesCache = activities);
  }

  getAllActivities() {
    this.activities = this.activitiesCache;
  }

  ngOnInit() {
    this.loadAllAcitivitesFromServe();

    const { category } = this.route.snapshot.queryParams;

    if (category) {
      const categories = category
        .split(';')
        .map(a => parseInt(a, 10));

      this.getActivitiesFromCategories(categories);
    } else {
      this.getAllActivities();
    }

    /*
    if (category) {
     const categories = category
       .split(';')
       .map(cat => parseInt(cat, 10));

      this.getActivitiesFromCategories(categories);
    } else {
      this.getAllActivities();
    }
    */
  }

}
