import {Component, Input, OnInit} from '@angular/core';
import {IActivity} from '../../interfaces/IActivity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() activity: IActivity;

  constructor() { }

  ngOnInit() {
  }

}
