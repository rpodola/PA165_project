import {Component, Input, OnInit} from '@angular/core';
import {IActivity} from '../../interfaces/IActivity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  @Input() activities: IActivity[];
  @Input() hideCategory: boolean;
  @Input() useButtonForActivityLink: boolean;

  constructor() {}

  ngOnInit(): void {}

}
