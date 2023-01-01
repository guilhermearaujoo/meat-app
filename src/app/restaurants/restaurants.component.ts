import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  constructor(public restaurantService : RestaurantService) { }

  restaurants : Restaurant[]

  ngOnInit() {
    this.restaurantService.restaurants()
    .subscribe(restaurants => {
      this.restaurants = restaurants
      console.log(restaurants);
    })
  }
}
