import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // private _cart = { items: [] };
  itemsQuantity = 0;
  cart: Cart = { items: [] }


  onClearCart():void {}
}
