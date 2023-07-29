import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html'
})
export class ProductsBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter<Product>();


  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
