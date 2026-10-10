export {};

interface User {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

function login(user: User): void {
  console.log(`${user.username} logged in. Email: ${user.email || "not provided"}`);
}

const user1: User = {
  id: 1,
  username: "yusuf",
  password: "secret123",
};

const user2: User = {
  id: 2,
  username: "amina",
  password: "pass456",
  email: "amina@example.com",
};

login(user1);
login(user2);
