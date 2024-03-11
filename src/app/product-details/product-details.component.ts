import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../../models/products'
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product | undefined;
  public productsList: Product[] = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: ''
    }
  ];
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = this.productsList.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
