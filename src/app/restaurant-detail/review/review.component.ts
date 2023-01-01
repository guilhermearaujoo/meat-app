import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Review } from './review.model';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  constructor(private restaurantService : RestaurantService, private route : ActivatedRoute) { }

  reviews : Review[]
  ngOnInit() {
    this.restaurantService.restaurantReviews(this.route.parent.snapshot.params['id'])
    .subscribe(reviews => this.reviews = reviews)
  }

}
