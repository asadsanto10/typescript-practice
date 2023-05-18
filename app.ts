const a = "asad";
const b = 45;

const total = (num1: string, num2: number) => {
  return num1 + num2;
};

// array
const ar: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arg: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ars: Array<string> = ["asad", "santo"];

const user = {
  firstName: "asad",
  lastName: "santo",
  role: "admin",
};

// console.log(user);

//=========>>>>>>>>>>>>>>>>>> alius usre
type User = {
  name: string;
  role: string;
  id: number;
  address?: string; //optional
};

const userInfo: User = {
  id: 4545,
  name: "asad",
  role: "admin",
};

// function login(userData: User): User {
//   return userData;
// }

// console.log(login(userInfo));

// =========>>>>>>>>>>>>>>>>>> interface

interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 121,
  payeeAccountNumber: 454,
};
const transaction2: Transaction = {
  payerAccountNumber: 158,
  payeeAccountNumber: 564,
};

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "asad santo",
  balance: 4000,
  isActive: true,
  transactions: [transaction1, transaction2],
};

// =========>>>>>>>>>>>>>>>>>> interface extends =========

interface Book {
  name: string;
  price: number;
}

interface Ebook extends Book {
  filesize: number;
  formate: string;
}

interface AudioBook extends Ebook {
  duration: number;
}

const book: AudioBook = {
  name: "test book",
  price: 100,
  filesize: 5,
  formate: "pdf",
  duration: 10,
};

// =========>>>>>>>>>>>>>>>>>> marge two interface
interface NewUser {
  name: string;
  id: number;
}

interface NewUser {
  createDate: string;
}
//? same name interface auto marge
const newUser: NewUser = {
  name: "asad santor",
  id: 1554,
  createDate: "2020-01-01",
};

// =========>>>>>>>>>>>>>>>>>> unions
type ID = string | number | Array<string>;
const idTest: ID = ["asdasd", "asdsad"];

// =========>>>>>>>>>>>>>>>>>> Narrowing

type NarrowTest = number | string;

const narrowTest = (data: NarrowTest) => {
  if (typeof data === "string") {
    // console.log(data.toUpperCase());
  }
  //   console.log(data);
};
narrowTest("1");

// =========>>>>>>>>>>>>>>>>>> Generic

const logAnything = <T>(arg: T): T => {
  //   console.log(arg);

  return arg;
};

logAnything([1, 2]);

interface HasAge {
  age: number;
}

const getOldest = <T extends HasAge>(people: T[]): T => {
  return people.sort((a, b) => b.age - a.age)[0];
};

const people: HasAge[] = [{ age: 25 }, { age: 23 }, { age: 27 }];

// getOldest(age);

interface Players {
  name: string;
  age: number;
}

const players: Players[] = [
  {
    name: "asad",
    age: 25,
  },
  {
    name: "santo",
    age: 21,
  },
  {
    name: "santo10",
    age: 22,
  },
];

// wrong way
// const ab = getOldest(players) as Players;
// ab.

// right way

const ab = getOldest(people);

// generic example
