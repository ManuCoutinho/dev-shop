import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // private _cart = { items: [] };
  itemsQuantity = 0;
  cart: Cart = { items: [
    {
      name: 'item 1',
      price: '200.00',
      quantity: 2
    },
    {
      name: 'item 2',
      price: '400.00',
      quantity: 1
    },
    {
      name: 'item 3',
      price: '100.00',
      quantity: 20
    }
  ] }


  onClearCart():void {}
}
