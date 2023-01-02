export class Order {
  constructor(
    public address : string,
    public email : string,
    public emailConfirmation : string,
    public name : string,
    public number: number,
    public optional: string,
    public paymentOption: string,
    public orderItems : OrderItem[]
  ){}
}

export class OrderItem {
  constructor(public quantity : number, public menuId : string){}
}
