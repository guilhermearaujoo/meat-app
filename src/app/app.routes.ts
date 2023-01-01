import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewComponent } from "./restaurant-detail/review/review.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "order", loadChildren: './order/order.module#OrderModule' },
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent, children: [
    { path: "", redirectTo: "menu", pathMatch: "full" },
    { path: "menu", component: MenuComponent },
    { path: "review", component: ReviewComponent },
  ]}
];
