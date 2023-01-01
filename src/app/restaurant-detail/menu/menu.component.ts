import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { MenuItem } from './menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private restaurantService : RestaurantService, private route : ActivatedRoute) { }

  menu : MenuItem[]
  ngOnInit() {
    this.restaurantService.restaurantMenu(this.route.parent.snapshot.params['id'])
    .subscribe(menu => this.menu = menu)
  }
}
