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
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantService.restaurantMenu(this.route.parent.snapshot.params['id'])
            .subscribe(function (menu) { return _this.menu = menu; });
    };
    MenuComponent = __decorate([
        Component({
            selector: 'mt-menu',
            templateUrl: './menu.component.html'
        }),
        __metadata("design:paramtypes", [RestaurantService, ActivatedRoute])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map