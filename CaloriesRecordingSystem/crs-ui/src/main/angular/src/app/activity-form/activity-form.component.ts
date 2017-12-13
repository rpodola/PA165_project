import { Component, OnInit } from '@angular/core';
import {Activity2} from '../_classes/Activity2';
import {Category} from '../_classes/Category';
import {CategoryService} from '../_services/category.service';
import {ActivityService} from '../_services/activity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  activity = new Activity2();
  categories: Category[];

  activityNameExists: boolean;

  constructor(
    private categoryService: CategoryService,
    private activityService: ActivityService,
    private router: Router
  ) { }

  getAllCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe(categories => {
        this.categories = categories;

        if (categories) {
          this.activity.categoryId = categories[0].id;
        }
      });
  }

  createNewActivity() {
    this.activityService
      .createNewActivity(this.activity)
      .subscribe(newActivityId => {
        if (!newActivityId) {
          this.activityNameExists = true;
        } else {
          this.router.navigateByUrl('activities/' + newActivityId);
        }
      });
  }

  ngOnInit() {
    this.getAllCategories();
  }

}
