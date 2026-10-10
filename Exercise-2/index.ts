export {};

let names: string[] = ["Ali", "Amina", "Yusuf"];
let grades: number[] = [90, 85, 100];
let status: boolean[] = [true, false, true];

names.push("Hamza");
grades.push(75);
status.push(false);

console.log(names, grades, status);

let products: string[] = ["Phone", "Laptop", "Tablet"];
products.push("Headphones");

console.log(products);

let location: [string, number, number] = ["Mogadishu", 2.0469, 45.3182];
location = ["Hargeisa", 9.56, 44.065];

console.log(location);
