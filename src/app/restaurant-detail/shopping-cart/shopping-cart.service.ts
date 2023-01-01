import { MenuItem } from "../menu/menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService {
  items : CartItem[] = []

  add(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
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
  }

  clear() {
    this.items = []
  }

  total() : number {
    return this.items.map(item => item.value()).reduce((prev, curr) => prev + curr, 0)
  }
}
