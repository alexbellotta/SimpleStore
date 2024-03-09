import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../models/products'

@Component({
  selector: 'app-products-alert',
  templateUrl: './products-alert.component.html',
  styleUrls: ['./products-alert.component.scss']
})
export class ProductsAlertComponent {
  @Input() product: Product | undefined;
  @Output() notifyEvent = new EventEmitter();

  notify(): void{
    this.notifyEvent.emit();
  }
}
