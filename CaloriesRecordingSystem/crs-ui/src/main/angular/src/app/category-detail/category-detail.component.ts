import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {Category} from '../_classes/Category';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Activity} from '../_classes/Activity';
import {ActivityService} from '../_services/activity.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: Category;
  activitiesInCategory: Activity[];

  constructor(
    private categoryService: CategoryService,
    private activityService: ActivityService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  setCategory(cat: Category) {
    this.category = cat;

    this.activityService
      .getActivities([cat.id])
      .subscribe(activities => this.activitiesInCategory = activities);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService
      .getCategory(id)
      .subscribe(cat => this.setCategory(cat));
  }

}
