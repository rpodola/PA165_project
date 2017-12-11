import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBurnedCalories} from '../../interfaces/IBurnedCalories';

@Component({
  selector: 'app-burned-calories-list',
  templateUrl: './burned-calories-list.component.html',
  styleUrls: ['./burned-calories-list.component.css']
})
export class BurnedCaloriesListComponent implements OnInit {

  @Input() burnedCaloriesList: IBurnedCalories[];
  @Output() addBurnedCalories = new EventEmitter<IBurnedCalories>();
  @Output() removeBurnedCalories = new EventEmitter<IBurnedCalories>();

  upperWeightBoundary = 1;
  amount = 1;

  constructor() { }

  addBurnedCaloriesToList() {
    const burnedCalories: IBurnedCalories = {
      upperWeightBoundary: this.upperWeightBoundary,
      amount: this.amount,
    };

    this.addBurnedCalories.emit(burnedCalories);
  }

  removeBurnedCaloriesFromList(burnedCalories: IBurnedCalories) {
    this.removeBurnedCalories.emit(burnedCalories);
  }

  ngOnInit() {
  }

}
