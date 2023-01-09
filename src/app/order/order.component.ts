import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-otion.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  constructor(public orderService: OrderService, public route: Router, public formBuilder: FormBuilder) { }

  orderId: string
  deliveryValue: number = 8
  orderForm: FormGroup
  optional: string = "name";
  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "CAD" },
    { label: "Cartão Refeição", value: "CAR" },
  ];
  emailPattern =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      emailConfirmation: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      address: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      number: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.numberPattern),
      ]),
      optional: this.formBuilder.control(""),
      paymentOption: this.formBuilder.control("", [Validators.required]),
    }, { validator: OrderComponent.equalsTo });
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation) {
      return undefined
    }
    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true }
    }
    return undefined
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

  items(): CartItem[] {
    return this.orderService.items()
  }

  checkOrder(order: Order) {
    order.orderItems = this.items().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.orderService.checkOrder(order)
      .do((orderId: string) => {
        this.orderId = orderId
      })
      .subscribe((orderId) => {
        this.route.navigate(["/order-summary", orderId]);
        console.log(`Compra com o id: ${orderId} realizada com sucesso!`);
      });
    this.orderService.clear();
  }

  total(): number {
    return this.orderService.total();
  }

  isOrderCompleted() : boolean {
    return this.orderId !== undefined
  }
}
