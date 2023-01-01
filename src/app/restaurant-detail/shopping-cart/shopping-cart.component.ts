import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
  }

  items() : CartItem[] {
    return this.shoppingCartService.items
  }

  removeItem(item : CartItem) {
    this.shoppingCartService.remove(item)
  }

  total() : number{
    return this.shoppingCartService.total()
  }

  addItem(item : MenuItem) {
    this.shoppingCartService.add(item)
  }

  clear() {
    this.shoppingCartService.clear()
  }
}
