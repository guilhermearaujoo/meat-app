import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app.api";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Restaurant } from "./restaurant/restaurant.model";
import { ErrorHandler } from "app/app.error-handler";
@Injectable()
export class RestaurantService {
  constructor(public http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantsById(id : string) : Observable<Restaurant> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }
}
