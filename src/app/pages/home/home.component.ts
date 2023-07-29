import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';

const  ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3: 335, 4:350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined
  count = '12';
  sort = 'desc';
  category: string | undefined;
  productsSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onItemsCountChange(count: number):void {
    this.count = count.toString();
    this.getProducts();
  }

  onSortChange(newSort: string):void {
    this.sort = newSort;
    this.getProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  };

  getProducts():void {};

  onAddToCart(product: Product): void {};

  ngOnDestroy(): void {}


}
