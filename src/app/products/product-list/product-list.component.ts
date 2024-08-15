import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  selectedProduct: Product | undefined

  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name: 'Microphone',
      price: 200
    },
    {
      name: 'Wireless Keyboard',
      price: 85
    }
  ]

  onBuy() {
    window.alert(`You bought: ${this.selectedProduct?.name}`);
  }
}
