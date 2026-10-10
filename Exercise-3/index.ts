export {};

function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("Yusuf", "Abdi"));

function registerUser(username: string, isAdmin?: boolean, language: string = "en"): void {
  console.log(`Username: ${username}, Admin: ${isAdmin || false}, Language: ${language}`);
}

registerUser("yusuf");
registerUser("amina", true);
registerUser("ali", false, "so");

function average(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((a, b) => a + b, 0);
  return total / scores.length;
}

console.log(average(90, 80, 100));
console.log(average(70, 80, 90, 60, 100));
