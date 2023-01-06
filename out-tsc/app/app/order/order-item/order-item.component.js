var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
var OrderItemComponent = /** @class */ (function () {
    function OrderItemComponent() {
        this.increaseQty = new EventEmitter();
        this.decreaseQty = new EventEmitter();
        this.remove = new EventEmitter();
    }
    OrderItemComponent.prototype.ngOnInit = function () {
    };
    OrderItemComponent.prototype.emitIncreaseQty = function (item) {
        this.increaseQty.emit(item);
    };
    OrderItemComponent.prototype.emitDecreaseQty = function (item) {
        this.decreaseQty.emit(item);
    };
    OrderItemComponent.prototype.removeItem = function (item) {
        this.remove.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], OrderItemComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItemComponent.prototype, "increaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItemComponent.prototype, "decreaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItemComponent.prototype, "remove", void 0);
    OrderItemComponent = __decorate([
        Component({
            selector: 'mt-order-item',
            templateUrl: './order-item.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], OrderItemComponent);
    return OrderItemComponent;
}());
export { OrderItemComponent };
//# sourceMappingURL=order-item.component.js.map