import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CategoryService} from '../_services/category.service';
import {Category} from '../_classes/Category';

@Component({
  selector: 'app-category-checkboxes',
  templateUrl: './category-checkboxes.component.html',
  styleUrls: ['./category-checkboxes.component.css']
})
export class CategoryCheckboxesComponent implements OnInit, OnChanges {

  categoriesSelection: {
    category: Category,
    checked: boolean,
  }[];

  @Input() selectedCategoryIds: number[];
  @Output() filterChange = new EventEmitter<number[]>();

  selectedAll = false;

  constructor(
    private categoryService: CategoryService,
  ) { }

  filterChanged() {
    this.selectedCategoryIds = undefined;

    const selectedCategories = this.categoriesSelection
      .filter(selection => selection.checked)
      .map(selection => selection.category.id);

    this.filterChange.emit(selectedCategories);
    this.selectedAll = this.categoriesSelection.every(selection => selection.checked === true);
  }

  selectAll() {
    this.selectedCategoryIds = undefined;
    this.categoriesSelection.forEach(selection => selection.checked = this.selectedAll);
    this.filterChanged();
  }

  getAllCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe(categories => {
        this.categoriesSelection = categories.map(cat => ({
          category: cat,
          checked: false,
        }));
      });
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.categoriesSelection) {
      this.getAllCategories();
    }

    if (this.selectedCategoryIds) {
      this.categoriesSelection
        .forEach(selection => selection.checked = this.selectedCategoryIds.includes(selection.category.id));

      this.filterChanged();
    }
  }
}
