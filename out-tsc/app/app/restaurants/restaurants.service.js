var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MEAT_API } from "app.api";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
var RestaurantService = /** @class */ (function () {
    function RestaurantService(http) {
        this.http = http;
    }
    RestaurantService.prototype.restaurants = function (search) {
        var params = undefined;
        if (search) {
            params = new HttpParams().set('q', search);
        }
        return this.http
            .get("".concat(MEAT_API, "/restaurants"), { params: params });
    };
    RestaurantService.prototype.restaurantsById = function (id) {
        return this.http.get("".concat(MEAT_API, "/restaurants/").concat(id));
    };
    RestaurantService.prototype.restaurantReviews = function (id) {
        return this.http
            .get("".concat(MEAT_API, "/restaurants/").concat(id, "/reviews"));
    };
    RestaurantService.prototype.restaurantMenu = function (id) {
        return this.http
            .get("".concat(MEAT_API, "/restaurants/").concat(id, "/menu"));
    };
    RestaurantService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RestaurantService);
    return RestaurantService;
}());
export { RestaurantService };
//# sourceMappingURL=restaurants.service.js.map