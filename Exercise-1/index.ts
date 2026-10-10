export {};

let productName: string = "Laptop";
let price: number = 850;
let discountAvailable: boolean = true;

productName = "Gaming Laptop";
price = 900;
discountAvailable = false;

console.log(productName, price, discountAvailable);

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(price, 0.2));

function printLength(x: unknown): void {
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log("This value has no length");
  }
}

printLength("Hello");
printLength(123);
