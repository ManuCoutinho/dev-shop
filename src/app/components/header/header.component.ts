import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  cartSubscription: Subscription | undefined;


  constructor(private _cartService: CartService) {}

  @Input() quantity: 'item' | 'items' = 'item';
  @Input()
    get cart(): Cart {
      return this._cart
    }

    set cart(cart: Cart){
      this._cart = cart;

      this.itemsQuantity = cart.items
      .map(({quantity}) => quantity)
      .reduce((prev, acc) => prev + acc, 0);
      this.quantity = cart.items.length < 2 ? 'item' : 'items'
    }


    getTotal(items: CartItem[]):number {
    return this._cartService.getTotal(items);
  }

  onClearCart():void {
    this._cartService.clearCart();
  }

    ngOnInit(): void {
    this.cartSubscription = this._cartService
      .cart.subscribe((_cart: Cart) => this.cart = _cart);
  }


  ngOnDestroy(): void {
      if(this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
