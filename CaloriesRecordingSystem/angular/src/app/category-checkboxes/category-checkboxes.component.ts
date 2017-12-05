import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Category} from '../../classes/Category';
import {CategoryService} from '../../services/category.service';
import {CategoryEnum} from '../../enums/CategoryEnum';

@Component({
  selector: 'app-category-checkboxes',
  templateUrl: './category-checkboxes.component.html',
  styleUrls: ['./category-checkboxes.component.css']
})
export class CategoryCheckboxesComponent implements OnInit, OnChanges {

  categories: {
    category: Category,
    checked: boolean,
  }[];

  @Input() selectedCategory: CategoryEnum;
  @Output() filterChange = new EventEmitter<CategoryEnum[]>();

  selectedAll = false;

  constructor(
    private categoryService: CategoryService,
  ) { }

  filterChanged() {
    const selectedCategories = this.categories
      .filter(category => category.checked)
      .map(cat => cat.category.category);

    this.filterChange.emit(selectedCategories);
    this.selectedAll = this.categories.every(cat => cat.checked === true);
  }

  selectAll() {
    this.categories.forEach(cat => cat.checked = this.selectedAll);
    this.filterChanged();
  }

  getAllCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe(categories =>
        this.categories = categories.map(cat => ({
          category: cat ,
          checked: false,
        })));
  }

  ngOnInit() {
    this.getAllCategories();
  }

  ngOnChanges() {
    if (this.selectedCategory) {
      this.categories.forEach(cat => cat.checked = cat.category.category === this.selectedCategory);
      this.filterChange.emit([this.selectedCategory]);
    }
  }

}
