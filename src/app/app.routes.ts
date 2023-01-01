import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  {path: 'restaurants', component: RestaurantsComponent}
];
