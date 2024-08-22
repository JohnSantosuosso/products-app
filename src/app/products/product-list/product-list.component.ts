import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  selectedProduct: Product | undefined
  products: Product[] = [];
  private productService: ProductsService; //defines type

  constructor() {
    this.productService = new ProductsService();
    // alternative way to write: productService: ProductsService
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy() {
    window.alert(`You bought: ${this.selectedProduct?.name}`);
  }
}
