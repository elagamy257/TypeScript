// let name: string = "elagamy"
// let age: number = 20
// let hire: boolean = true
// let all: any 

// all = 10
// all = "hello"
// all = true

// arr

// let arr: string[] = ["hello", "world"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]?.repeat(2));
// }

// multi arr

// let arrNum:  number[] = [ 10,  20, 30, 40, 50]
// let arrStr: string [] = ["hello", "world", "typescript" ]
// let multi: (string | number)[] = ["hello", 10, "world", 20]
// let multi1: (string | number | string [])[] = ["hello", 10, "world", ["typescript", "javascript"]]
// let multi2: (string | number)[][] = [["hello", 10], ["world", 20], ["typescript", 30]]  

// func

// let show= true
// function showName(name: string, age: number): string {
//     if (show) {
//       return `My name is ${name} and I am ${age} years old.`
//     }

//     return `Information is hidden.`
// }

// console.log(showName('aya',21))

// function showName(name: string, age: number, country?: string): string {
//   return ` ${name} ${age} `
// }
// console.log(showName('aya', 21)) // Output: aya 21

// func rest

// function addNumbers(...numbers: number[]) {
//     let res=0;
    // for (let i = 0; i < numbers.length; i++) {
    //     res += numbers[i];
    // }

    // for (const num of numbers) {
    //     res += num;
    // }
//     numbers.forEach(num => {
//         res += num;
//     });

//     return res;
// }
// console.log(addNumbers(1, 2, 3, 4, 5, 10.6, +true)); 


// - Anonymous Function

// const add = function(num1: number, num2: number) : number {
//     return num1 + num2;
// }
// console.log(add(10, 20));

// const addWithArrow = (num1: number, num2: number) : number => num1 + num2;
// console.log(addWithArrow(10, 20));

/*
  Data Types
  - Type Alias
*/

// type st = string;
// let theName: st = "elagamy";
// theName = "aya";

// type standnum = string | number;
// let all: standnum = 10;
// all = 100;
// all = "Osama";


// type Buttons = {
//   up: string,
//   right: string,
//   down: string,
//   left: string
// }

// type Last = Buttons & {
//   x: boolean
// }

// function getActions(btns: Last) {
//   console.log(`Action For Button Up Is ${btns.up}`);
//   console.log(`Action For Button Right Is ${btns.right}`);
//   console.log(`Action For Button Down Is ${btns.down}`);
//   console.log(`Action For Button Left Is ${btns.left}`);
// }

// getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });

// type User = {
//   name: string,
//   age: number,
//   country?: string
// }
// function showUserInfo(user: User) {
//   console.log(`Name: ${user.name}`);
//   console.log(`Age: ${user.age}`);
//   if (user.country) {
//     console.log(`Country: ${user.country}`);
//   } else {
//     console.log("Country: Not Provided");
//   }
// }
// showUserInfo({ name: "elagamy", age: 21 });


/*
  Data Types
  - Literal Types
*/

// type nums = 0 | 1 | -1;

// function compare(num1: number, num2: number) : nums {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1

// let myNumber: nums = 1;


/*
  Data Types
  - Tuple
*/

// let article: readonly [number, string, boolean] = [11, "Title One", true];
// article = [12, "Title Two", false];
// // article.push(100);
// console.log(article);

// const [id, title, published] = article;
// console.log(id);
// console.log(title);
// console.log(published);


/*
  Data Types
  - Void
  - Never
*/

// function logging(msg: string) : void {
//   console.log(msg);
//   return;
// }

// console.log(logging("Iam A Message"));
// console.log("Test");

// const fail = (msg: string) => {
//   throw new Error(msg);
//   // return 10;
// }

// function alwaysLog(name: string) : never {
//   while(true) {
//     console.log(name);
//   }
// }

// alwaysLog("elagamy");
// // console.log("Test");

/*
  Data Types
  - Enums => Enumerations
*/

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// enum Level {
//   Kids = 15,
//   Easy = 9,
//   Medium = 6,
//   Hard = 3
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
// }

/*
  Data Types
  - Enums => Enumerations
*/

function getHardSeconds() : number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15
}

enum Level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds()
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}




