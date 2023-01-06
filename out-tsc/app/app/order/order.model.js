var Order = /** @class */ (function () {
    function Order(address, email, emailConfirmation, name, number, optional, paymentOption, orderItems, id) {
        this.address = address;
        this.email = email;
        this.emailConfirmation = emailConfirmation;
        this.name = name;
        this.number = number;
        this.optional = optional;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
        this.id = id;
    }
    return Order;
}());
export { Order };
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());
export { OrderItem };
//# sourceMappingURL=order.model.js.map