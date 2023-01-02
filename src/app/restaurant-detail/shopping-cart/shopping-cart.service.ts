import { MenuItem } from "../menu/menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";
import { NotificationService } from "app/shared/messages/notifications.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingCartService {
  items : CartItem[] = []

  constructor(private notificationsService : NotificationService){}

  add(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
    this.notificationsService.notify(`Você adicionou o item ${item.name}`)
  }

  increaseQty(item : CartItem) {
    item.quantity = item.quantity + 1
  }

  decreaseQty(item : CartItem) {
    item.quantity = item.quantity - 1
    if(item.quantity === 0) this.remove(item)
  }

  remove(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
    this.notificationsService.notify(`Você removeu o item ${item.menuItem.name}`)
  }

  clear() {
    this.items = []
  }

  total() : number {
    return this.items.map(item => item.value()).reduce((prev, curr) => prev + curr, 0)
  }
}
