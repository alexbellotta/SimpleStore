import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import {Product} from '../../models/products'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items: Product[] = [];
  public checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.items = this.cartService.getItems();
  }

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
