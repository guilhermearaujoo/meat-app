import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-rastaurant',
  templateUrl: './rastaurant.component.html'
})
export class RastaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() restaurant : Restaurant
}
