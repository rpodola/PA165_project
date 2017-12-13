import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BurnedCalories} from '../_classes/BurnedCalories';

@Component({
  selector: 'app-burned-calories-list',
  templateUrl: './burned-calories-list.component.html',
  styleUrls: ['./burned-calories-list.component.css']
})
export class BurnedCaloriesListComponent implements OnInit {

  @Input() burnedCaloriesList: BurnedCalories[];
  @Output() addBurnedCalories = new EventEmitter<BurnedCalories>();
  @Output() removeBurnedCalories = new EventEmitter<BurnedCalories>();

  upperWeightBoundary = 1;
  amount = 1;

  constructor() { }

  addBurnedCaloriesToList() {
    const burnedCalories: BurnedCalories = {
      upperWeightBoundary: this.upperWeightBoundary,
      amount: this.amount,
    };

    this.addBurnedCalories.emit(burnedCalories);
  }

  removeBurnedCaloriesFromList(burnedCalories: BurnedCalories) {
    this.removeBurnedCalories.emit(burnedCalories);
  }

  ngOnInit() {
  }

}
