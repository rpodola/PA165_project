import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ICategory} from '../../interfaces/ICategory';
import {isNumber} from 'util';

@Component({
  selector: 'app-category-checkboxes',
  templateUrl: './category-checkboxes.component.html',
  styleUrls: ['./category-checkboxes.component.css']
})
export class CategoryCheckboxesComponent implements OnInit, OnChanges {

  categoriesSelection: {
    category: ICategory,
    checked: boolean,
  }[];

  @Input() selectedCategoryId: number;
  @Output() filterChange = new EventEmitter<number[]>();

  selectedAll = false;

  constructor(
    private categoryService: CategoryService,
  ) { }

  filterChanged() {
    this.selectedCategoryId = undefined;
    const selectedCategories = this.categoriesSelection
      .filter(selection => selection.checked)
      .map(selection => selection.category.id);

    this.filterChange.emit(selectedCategories);
    this.selectedAll = this.categoriesSelection.every(selection => selection.checked === true);
  }

  selectAll() {
    this.selectedCategoryId = undefined;
    this.categoriesSelection.forEach(selection => selection.checked = this.selectedAll);
    this.filterChanged();
  }

  getAllCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe(categories =>
        this.categoriesSelection = categories.map(cat => ({
          category: cat,
          checked: false,
        })));
  }

  ngOnInit() {
    this.getAllCategories();
  }

  ngOnChanges() {
    if (isNumber(this.selectedCategoryId)) {
      this.categoriesSelection.forEach(selection => selection.checked = selection.category.id === this.selectedCategoryId);
      this.filterChanged();
    }
  }

}
