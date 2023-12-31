import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });


  constructor(private _snackBar: MatSnackBar) { }
  addToCart(item: CartItem):void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find(({ id }) => id === item.id);

      if(itemInCart) {
        itemInCart.quantity += 1;
      } else {
        items.push(item)
      }

    this.cart.next({ items });
    this._snackBar.open('1 item adicionado do carrinho.', 'Ok', { duration: 3000 });
  }

  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.items
      .filter(({ id }) => id !== item.id);

      if(updateCart) {
        this.cart.next({ items: filteredItems });
        this._snackBar.open('1 item removido do carrinho', 'Ok', { duration: 3000 });
      }

      return filteredItems;
  }

  decreaseQuantity(item: CartItem): void {
    let itemForRemoval!: CartItem;

    let filteredItems = this.cart.value.items.map((_item) => {
      if(_item.id === item.id) {
        _item.quantity --;
        if(_item.quantity === 0) {
          itemForRemoval = _item
        }
      }
      return _item;
    });

    if(itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removido do carrinho', 'Ok', { duration: 3000 });
  }

  clearCart():void {
    this.cart.next({ items: [] });
    this._snackBar.open('Carrinho foi esvaziado', 'Ok', { duration: 3000 });
  }

  getTotal(items: CartItem[]): number {
    return items
            .map(({ price, quantity }) => price * quantity )
            .reduce((prev, acc) => prev + acc, 0);
  }
}
