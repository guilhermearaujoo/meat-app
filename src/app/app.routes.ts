import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewComponent } from "./restaurant-detail/review/review.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { LoggedInGuard } from "./security/loggedin.guard";
import { LoginComponent } from "./security/login/login.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'order-summary/:id', component: OrderSummaryComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent, children: [
    { path: "", redirectTo: "menu", pathMatch: "full" },
    { path: "menu", component: MenuComponent },
    { path: "review", component: ReviewComponent },
  ]},
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "order", loadChildren: './order/order.module#OrderModule', canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: '**', component: NotFoundComponent}
];
