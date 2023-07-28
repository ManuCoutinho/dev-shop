import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // private _cart = { items: [] };
  itemsQuantity = 0;
  cart = { items: [] }
}
