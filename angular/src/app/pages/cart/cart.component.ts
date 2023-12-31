import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { loadStripe, } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart = { items: [] };
  displayedColumns: string[] = ['product', 'name', 'quantity', 'total', 'action', 'price'];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;

  constructor(
    private _cartService: CartService,
    private _http: HttpClient
    ) {}

  getTotal(items: CartItem[]): number {
    return items
        .map(({price, quantity}) => price * quantity )
        .reduce((prev, acc) => prev + acc, 0);
  }

  onAddQuantity(item: CartItem): void {
    this._cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem):void {
    this._cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this._cartService.decreaseQuantity(item);
  }

  onClearCart():void {
    this._cartService.clearCart();
  }

  onCheckout(): void {
    this._http.post(environment.paymentUrl, {
      items: this.cart.items
    })
    .subscribe(async (res: any) => {
      const stripe = await loadStripe(environment.secretStripe);
      stripe?.redirectToCheckout({
        sessionId: res.id
      });
    });
  }

  ngOnInit(): void {
    this.cartSubscription = this._cartService
      .cart.subscribe((_cart: Cart) => {
        this.cart = _cart;
        this.dataSource = _cart.items;
      });
  }

  ngOnDestroy(): void {
    if(this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
