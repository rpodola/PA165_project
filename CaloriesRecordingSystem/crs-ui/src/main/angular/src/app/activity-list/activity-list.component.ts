import {Component, OnInit} from '@angular/core';
import {IActivity} from '../_interfaces/IActivity';
import {ActivityService} from '../_services/activity.service';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activitiesCache: IActivity[];
  activities: IActivity[];

  selectedCategoryIds: number[] = [];

  nameFilter = '';

  showCategories: boolean;
  isUserAdmin: boolean;

  constructor(
    private activityService: ActivityService,
    private authService: AuthenticationService,
  ) {
    this.isUserAdmin = authService.isUserAdmin();
  }

  filterChanged() {
    if (this.selectedCategoryIds.length === 0) {
      this.activities = this.activitiesCache.filter(activity => activity.name.includes(this.nameFilter));
    } else {
      this.activities = this.activitiesCache.filter(activity => activity.name.includes(this.nameFilter) && this.selectedCategoryIds.includes(activity.category.id));
    }
  }

  getActivitiesFromCategories(categoryIds: number[]) {
    this.selectedCategoryIds = categoryIds;

    this.filterChanged();
  }

  loadAllActivitesFromServer() {
    this.activityService
      .getAllActivities()
      .subscribe(activities => {
        this.activitiesCache = activities;
        this.filterChanged();
      });
  }

  showHide() {
    this.showCategories = !this.showCategories;
  }

  onSubmitText(text: string) {
    this.nameFilter = text;

    this.filterChanged();
  }

  ngOnInit() {
    this.loadAllActivitesFromServer();
  }

}
