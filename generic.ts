// function pickObjectKey<T extends Object, K extends keyof T>(obj: T, keys: K[]) {
//   let result = {} as Pick<T, K>;
//   for (const key of keys) {
//     if (key in obj) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

const pickObjectKey = <T extends Object, K extends keyof T>(
  obj: T,
  keys: K[]
): Object => {
  let result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

const objc = {
  name: "typeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};
const avs = pickObjectKey(objc, ["name", "extensions"]);
// console.log(avs);

// Using Generics with Functions

// function identity<T>(value: T): T {
//   return value;
// }

const identity = <T>(value: T): T => {
  return value;
};
// console.log(identity<number>(45));
// console.log(identity<{ name: string }>({ name: "asad" }));

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
// Passing Type Parameters Directly

// async function fetchApi<ResultType>(): Promise<ResultType> {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//   return response.json();
// }

// (async () => {
//   const callApi = await fetchApi<Todo[]>();
//   console.log(callApi?.userId);
// })();

// Default Type Parameters
async function fetchApi<
  ResultType = Record<string, any>
>(): Promise<ResultType> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  return response.json();
}

// (async () => {
//   const callApi = await fetchApi();
//   console.log(callApi.userId);
// })();

// Type Parameters Constraints

const stringifyObjectKeyValues = <T extends Record<string, any>>(obj: T) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: JSON.stringify(obj[key]),
    }),
    {} as { [k in keyof T]: string }
  );
};

const stringifiedValues = stringifyObjectKeyValues({
  a: "1",
  b: 2,
  c: true,
  d: [1, 2, 3],
});

// console.log(stringifiedValues);

// Using Generics with Interfaces, Classes, and Types
