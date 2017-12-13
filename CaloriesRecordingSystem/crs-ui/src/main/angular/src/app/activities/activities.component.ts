import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../_classes/Activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  @Input() activities: Activity[];
  @Input() hideCategory: boolean;
  @Input() useButtonForActivityLink: boolean;

  constructor() {}

  ngOnInit(): void {}

}
