import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { RestaurantService } from "app/restaurants/restaurants.service";

@Component({
  selector: "mt-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
})
export class RestaurantDetailComponent implements OnInit {
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}
  restaurant: Restaurant;

  ngOnInit() {
    this.restaurantService
      .restaurantsById(this.route.snapshot.params["id"])
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
