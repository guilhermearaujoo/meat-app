import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { ModuleWithProviders } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";

@NgModule({
  declarations: [InputComponent, RadioComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, CommonModule, ReactiveFormsModule],
})
export class SharedModule {
  static forRoot() : ModuleWithProviders {
    return {
      ngModule : SharedModule, providers: [ShoppingCartService, RestaurantService, OrderService ]
    }
  }
}
