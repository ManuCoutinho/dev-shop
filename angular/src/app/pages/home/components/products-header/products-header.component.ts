import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() showCategory = new EventEmitter<string>();
  itemsShowCount = 12;
  sort = 'desc';
  category = 'all'

  onColumnUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

  onItemsUpdated(count: number):void {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onSortUpdated(newSort: string):void {
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }

  onShowCategory(newCategory: string):void {
    this.showCategory.emit(newCategory);
    this.category = newCategory;
  }
}
