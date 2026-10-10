export {};

function echo<T>(input: T): T {
  return input;
}

const text = echo("hello");
const year = echo(2026);
const colors = echo(["red", "green", "blue"]);
const student = echo({ name: "Hamza", age: 28 });

console.log(text.toUpperCase());
console.log(year.toFixed(1));
console.log(colors.length);
console.log(student.name);

interface ApiResult<T> {
  status: string;
  data: T;
}

const messageResult: ApiResult<string> = {
  status: "success",
  data: "Profile updated",
};

const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: { id: 1, name: "Amina" },
};

console.log(messageResult.data);
console.log(userResult.data.name);

function first<T>(items: T[]): T {
  const item = items[0];

  if (item === undefined) {
    throw new Error("The array is empty");
  }

  return item;
}

console.log(first([10, 20, 30]));
console.log(first(["Ali", "Amina", "Hamza"]));
console.log(first([{ id: 1, title: "Phone" }, { id: 2, title: "Laptop" }]));
