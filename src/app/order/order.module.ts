import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderItemComponent } from "./order-item/order-item.component";
import { OrderComponent } from "./order.component";

const ROUTES = [
  {path: '', component: OrderComponent}
]
@NgModule({
  declarations: [OrderComponent, OrderItemComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {
}
