import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "./restaurants.service";
import { Restaurant } from "./restaurant/restaurant.model";
import {
  style,
  animate,
  state,
  transition,
  trigger,
} from "@angular/animations";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";
import { Observable } from "rxjs";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  animations: [
    trigger("toggleSearch", [
      state(
        "hidden",
        style({
          opacity: 0,
          "max-height": "0px",
        })
      ),
      state(
        "visibile",
        style({
          opacity: 1,
          "max-height": "70px",
          "margin-top": "20px",
        })
      ),
      transition("* => *", animate("250ms 0s ease-in-out")),
    ]),
  ],
})
export class RestaurantsComponent implements OnInit {
  constructor(
    public restaurantService: RestaurantService,
    private formBuilder: FormBuilder
  ) {}

  searchForm: FormGroup;
  searchControl: FormControl;

  searchBarState: string = "hidden";

  restaurants: Restaurant[];

  ngOnInit() {
    this.searchControl = this.formBuilder.control("");
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl,
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((searchTerm) =>
        this.restaurantService
          .restaurants(searchTerm)
          .catch((error) => Observable.from([]))
      )
      .subscribe((restaurants) => (this.restaurants = restaurants));

    this.restaurantService
      .restaurants()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }

  toggleSearch() {
    this.searchBarState =
      this.searchBarState === "hidden" ? "visibile" : "hidden";
  }
}
