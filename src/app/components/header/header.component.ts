import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  constructor(private _cartService: CartService) {}

  @Input() get cart(): Cart {
    return this._cart
  }

  set cart(cart: Cart){
    this._cart = cart;

    this.itemsQuantity = cart.items
        .map(({quantity}) => quantity)
        .reduce((prev, acc) => prev + acc, 0);
  }


  getTotal(items: CartItem[]):number {
    return this._cartService.getTotal(items);
  }

  onClearCart():void {
    this._cartService.clearCart();
  }
}
