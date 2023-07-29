import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart = { items: [] };
  displayedColumns: string[] = ['product', 'name', 'quantity', 'total', 'action', 'price'];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;

  constructor() {}

  getTotal(items: CartItem[]): number {
    //some logic here
    return 1
  }

  onAddQuantity(item: CartItem): void {}

  onRemoveFromCart(item: CartItem):void {

  }

  onRemoveQuantity(item: CartItem): void {}

  onClearCart():void {

  }

  onCheckout(): void {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
