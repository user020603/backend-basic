// Cau 1: Max of two numbers (Tìm số lớn nhất trong hai số)
// function findMax(a, b) {
//     if (a > b) return a;
//     return b;
// }
// function findMax2(a, b) {
//     return a > b ? a : b;
// }
// const checkMax1 = findMax(5, 6);
// console.log(checkMax1);
// const checkMax2 = findMax2(5, 6);
// console.log(checkMax2);


// Cau 2 : FizzBuzz
// function fizzBuzz(inp) {
//     if (typeof(inp) !== "number") return "Invalid input";
//     if (inp % 3 == 0 && inp % 5 == 0) return "FizzBuzz";
//     else if (inp % 3 == 0) return "Fizz";
//     else if (inp % 5 == 0) return "Buzz";
//     return inp;
// }
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));

// Cau 3: Speed Limit
// const SPLIMIT = 70;
// const KMPERPOINT = 5;
// const MONEY = 30000;

// function checkSpeed(inp) {
//     if (inp <= SPLIMIT) return "Safe";
//     else {
//         let point = Math.floor((inp - SPLIMIT) / KMPERPOINT);
//         if (point < 10) return "Fine: " + point * MONEY;
//         else return "License suspended";
//     }
// }

// console.log(checkSpeed(70));
// console.log(checkSpeed(75));
// console.log(checkSpeed(1000));

// Cau 4: Print key and value of an object
// const person = {
//     name: "Nguyen Van A",
//     age: 20, 
//     height: 170, 
//     country: "Vietnam", 
//     job: "Software Engineer"
// }; 

// function showStringProperties(curObj) {
//     for (let key in curObj) {
//       if (typeof curObj[key] === "string") {
//         console.log(key, ":", curObj[key]);
//       }
//     }
//   }  

// function printObj(obj) {
//     for (let key in obj) {
//         console.log(key, obj[key]);
//     }
// }

// printObj(person);
// showStringProperties(person);

// Cau 6: 24h to 12h
// function convertTime(str) {
//     const time = str.slice(0, -2);
//     const period = str.slice(-2);
//     const units = time.split(":");

//     let hour = units[0];
//     let minute = units[1];
//     let second = units[2];

//     if (hour === "12") hour = "00";
//     if (period === "PM") hour = parseInt(hour) + 12;

//     return [hour, minute, second].join(":");
// }

// console.log(convertTime("12:05:45AM"));
// console.log(convertTime("07:05:45PM"));