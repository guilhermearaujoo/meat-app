import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewComponent } from "./restaurant-detail/review/review.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { LoginComponent } from "./security/login/login.component";
export var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'order-summary/:id', component: OrderSummaryComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent, children: [
            { path: "", redirectTo: "menu", pathMatch: "full" },
            { path: "menu", component: MenuComponent },
            { path: "review", component: ReviewComponent },
        ] },
    { path: "about", loadChildren: "./about/about.module#AboutModule" },
    { path: "order", loadChildren: './order/order.module#OrderModule' },
    { path: 'login', component: LoginComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: '**', component: NotFoundComponent }
];
//# sourceMappingURL=app.routes.js.map