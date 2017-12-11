import {Component, OnInit} from '@angular/core';
import {IActivity} from '../../interfaces/IActivity';
import {ActivityService} from '../../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activitiesCache: IActivity[];
  activities: IActivity[];

  selectedCategoryIds: number[];

  showCategories: boolean;

  constructor(
    private activityService: ActivityService,
  ) { }

  getActivitiesFromCategories(categoryIds: number[]) {
    this.selectedCategoryIds = categoryIds;

    if (categoryIds.length === 0) {
      this.activities = this.activitiesCache;
    } else {
      this.activities = this.activitiesCache.filter(activity => categoryIds.includes(activity.category.id));
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

  showHide() {
    this.showCategories = !this.showCategories;
  }

  ngOnInit() {
    this.loadAllActivitesFromServer();
    this.getAllActivities();
  }

}
