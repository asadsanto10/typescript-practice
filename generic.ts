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

function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(45));
console.log(identity<string>("asd"));
