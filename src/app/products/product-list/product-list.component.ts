import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  selectedProduct = ''

  products = ['Webcam', 'Microphone', 'Wireless Keyboard']

  onBuy() {
    window.alert(`You bought: ${this.selectedProduct}`);
  }
}
