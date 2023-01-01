import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { MEAT_API } from "app.api";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class OrderService {

  constructor(public cartService: ShoppingCartService, public http: Http) {}

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.remove(item);
  }

  items(): CartItem[] {
    return this.cartService.items;
  }

  clear() {
    this.cartService.clear()
  }

  total() : number {
    return this.cartService.total()
  }
  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map((response) => response.json())
      .map((order) => order.id);
  }
}
