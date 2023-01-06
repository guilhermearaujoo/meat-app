var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderItem } from './order.model';
import { OrderService } from './order.service';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, route, formBuilder) {
        this.orderService = orderService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.deliveryValue = 8;
        this.optional = "name";
        this.paymentOptions = [
            { label: "Dinheiro", value: "MON" },
            { label: "Cartão de Débito", value: "CAD" },
            { label: "Cartão Refeição", value: "CAR" },
        ];
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.prototype.ngOnInit = function () {
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
        }, { validator: OrderComponent_1.equalsTo });
    };
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderService.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderService.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderService.remove(item);
    };
    OrderComponent.prototype.items = function () {
        return this.orderService.items();
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        console.log(order);
        order.orderItems = this.items().map(function (item) { return new OrderItem(item.quantity, item.menuItem.id); });
        this.orderService.checkOrder(order).subscribe(function (orderId) {
            _this.route.navigate(["/order-summary", orderId]);
            console.log("Compra com o id: ".concat(orderId, " realizada com sucesso!"));
        });
        this.orderService.clear();
    };
    OrderComponent.prototype.total = function () {
        return this.orderService.total();
    };
    var OrderComponent_1;
    OrderComponent = OrderComponent_1 = __decorate([
        Component({
            selector: 'mt-order',
            templateUrl: './order.component.html'
        }),
        __metadata("design:paramtypes", [OrderService, Router, FormBuilder])
    ], OrderComponent);
    return OrderComponent;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map