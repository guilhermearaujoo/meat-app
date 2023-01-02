import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { ModuleWithProviders } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notifications.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, ReactiveFormsModule, BrowserAnimationsModule],
  exports: [InputComponent, RadioComponent, CommonModule, ReactiveFormsModule, RatingComponent, SnackbarComponent],
})
export class SharedModule {
  static forRoot() : ModuleWithProviders {
    return {
      ngModule : SharedModule, providers: [ShoppingCartService, RestaurantService, OrderService, NotificationService ]
    }
  }
}
