var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderItemComponent } from "./order-item/order-item.component";
import { OrderComponent } from "./order.component";
var ROUTES = [
    { path: '', component: OrderComponent }
];
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        NgModule({
            declarations: [OrderComponent, OrderItemComponent, DeliveryCostsComponent],
            imports: [SharedModule, RouterModule.forChild(ROUTES)]
        })
    ], OrderModule);
    return OrderModule;
}());
export { OrderModule };
//# sourceMappingURL=order.module.js.map