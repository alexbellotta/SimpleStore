import { Injectable } from '@angular/core';
import { Product } from '../../../models/products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: Product[] = [];
  constructor(private httpClient: HttpClient) { }

  addToCart(product: Product): void{
    this.items.push(product);
  }

  getItems(): Product[]{
    return this.items;
  }

  clearCart(): Product[]{
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.httpClient.get<{type: string, price: number}[]>('assets/shipping.json');
  }
}
