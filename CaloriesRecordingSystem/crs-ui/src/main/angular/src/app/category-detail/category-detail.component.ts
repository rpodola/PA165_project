import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {ICategory} from '../_interfaces/ICategory';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {IActivity} from '../_interfaces/IActivity';
import {ActivityService} from '../_services/activity.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: ICategory;
  activitiesInCategory: IActivity[];

  constructor(
    private categoryService: CategoryService,
    private activityService: ActivityService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  setCategory(cat: ICategory) {
    this.category = cat;

    this.activityService
      .getActivities([cat.id])
      .subscribe(activities => {
        this.activitiesInCategory = activities;
      });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService
      .getCategory(id)
      .subscribe(cat => this.setCategory(cat));
  }

}
