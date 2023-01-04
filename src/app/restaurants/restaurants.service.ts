import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MEAT_API } from "app.api";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Restaurant } from "./restaurant/restaurant.model";
import { ErrorHandler } from "app/app.error-handler";
import { Review } from "app/restaurant-detail/review/review.model";
import { MenuItem } from "app/restaurant-detail/menu/menu-item/menu-item.model";
@Injectable()
export class RestaurantService {
  constructor(public http: HttpClient) {}

  restaurants(search? : string): Observable<Restaurant[]> {
    let params : HttpParams = undefined
    if(search){
      params = new HttpParams().set('q', search)
    }
    return this.http
      .get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
  }

  restaurantsById(id : string) : Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  restaurantReviews(id : string) : Observable<Review[]> {
    return this.http
      .get<Review[]>(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  restaurantMenu(id: string) : Observable<MenuItem[]> {
    return this.http
      .get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }
}
