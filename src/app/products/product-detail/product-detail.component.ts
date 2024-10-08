import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product']
    if(!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;

      console.log(`Product changes from ${oldValue} to ${newValue}`)
    }
  }

  buy() {
    this.bought.emit();
  }
}
