// Câu 01. Kiểm tra số nguyên dương.
// Đề bài:
// Theo lý thuyết thì số nguyên dương là tập hợp những số chia hết cho 1 và lớn hơn 0. Tức là dãy số 1, 2, 3 ,4 ,5 ,6 ... chính là các số nguyên dương.
// Dùng hàm prompt để tạo ô nhập và lấy ra giá trị từ ô nhập đó.
// Viết một hàm kiểm tra số nhập vào có phải số nguyên dương hay không? 
// Nếu đúng alert ra YES.
// Nếu sai alert ra NO.
// function checkNumber(value) {
//     return value > 0 && value % 1 == 0;
// }

// var input = prompt("Nhập vào một số nguyên dương: ");
// input = parseInt(input);

// if (isNaN(input)) {
//     alert("Type again!");
// } else {
//     let result = checkNumber(input);
//     if (result == true) alert("YES");
//     else alert("NO");
// }

// Câu 02: Kiểm tra có phải là một hình?
// Đề bài:
// Một hình gồm n cạnh và n góc. Nhập vào số n và một mảng gồm n phần tử chứa các góc (độ) của một hình (hình tam giác, hình vuông,…).
// Ví dụ:
// Hình tam giá có 3 cạnh, và các góc lần lượt là 80°, 70° và 30°.
// Vậy ta có n = 3 và array=[80, 70, 30]

// Cho người dùng nhập vào n và một mảng gồm n phần tử là các góc. Viết một hàm kiểm tra xem từ số n và mảng đó có thỏa mãn là một hình vẽ hay không?
// Nếu thỏa mãn trả ra true
// Nếu không thỏa mãn trả ra false
// Lưu ý:
// Trả về false nếu n < 3.
// Tổng các góc trong là (n - 2) x 180°.
// const sum = (array) => {
//     return array.reduce((a, b) => a + b, 0);
// }

// const isShape = (n, angles) => {
//     if (n < 3) return false;
//     if (angles.some((angle) => angle <= 0 || angle >= 180)) return false;
//     return sum(angles) === (n - 2) * 180;
// }

// const test1 = isShape(4, [90, 90, 90, 90]);
// console.log(test1); // true

// B3 
// const abbreviate = (str, n) => {
//     // const array = str.split(" ");
//     // return array.map((word) => word[0].toUpperCase()).join("");
//     const array = str.split(" ");
//     let arrayFilter = array.filter((word) => word.length >= n);
//     let arrayChar = arrayFilter.map((word) => word[0].toUpperCase());
//     return arrayChar.join("");
// }

// console.log("B3: " + abbreviate("Hello Xin chao tat ca cac ban", 3));

//B4
// const solve = (string) => {
//     let cnt = 0;
//     let array = string.split("");
//     let newArr = array.map((character) => {
//         if (character == " ") return character;
//         cnt += 1;
//         if (cnt % 2 == 0) return character.toLowerCase();
//         else return character.toUpperCase();
//     });
//     return newArr.join("");
// }

// const test1 = solve("Khá Bảnh");
// console.log(test1); // KhÁ bẢnH

// // B5
// const sum = (arr) => {
//     return arr.reduce((total, num) => total + num, 0);
//   };
  
  
//   const mean = (arr) => {
//     return sum(arr) / arr.length;
//   };
  
  
//   const median = (arr) => {
//     const numberBefore = arr[Math.floor((arr.length - 1) / 2)];
//     const numberAfter = arr[Math.ceil((arr.length - 1) / 2)];
  
  
//     return mean([numberBefore, numberAfter]);
//   };
  
// B6
// const getBirthday = (name, age) => {
//     const char = age % 2 === 0 ? '#' : '*';
//     const ans = `${char} ${age} Happy birthday ${name}! ${age} ${char}`;
//     const edge = char.repeat(ans.length);
//     return `${edge}\n${ans}\n${edge}`;
// }

// console.log(getBirthday("Thanh", 20));

// B7 
// const sum = (array) => {
//     return array.reduce((a, b) => a + b, 0);
// }

// const getTotalPrice = (array) => {
//     const arrayTotal = array.map((item) => item.quantity * item.price);
//     return sum(arrayTotal);
// };

// const test1 = getTotalPrice([
// 	{ product: "Sữa", quantity: 1, price: 7000 }
// ]);
// console.log(test1); // 7000

// B8
// const Standard = (str) => {
//     return str.slice(0, 1).toUpperCase() + str.slice(1);
// }

// const Mix = (str) => {
//     return str.split(" ").map(substr => Standard(substr)).join(" ");
// }

// const test1 = Mix("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// console.log(test1);

// B10
// const chooseFuse = (fuses, current) => {
//     const num = parseFloat(current);
//     const feasibleFuses = fuses.map(parseFloat).filter((fuse) => fuse >= num);
//     // const possibleFuses = fuses.map(parseFloat).filter((fuse) => fuse >= num);
//     return  `${Math.min(...feasibleFuses)}V`
// }

// const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
// console.log(test1); // 5V

//B11 
// const countOne = (array) => {
//     return array.reduce((total, row) => total + row.filter(cell => cell === 1).length, 0);
// }

// const test1 = countOne([
//     [1, 0],
//     [0, 0],
//   ]);
//   console.log(test1); // 1

//   const test2 = countOne([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1],
//   ]);
//   console.log(test2); // 7
  
// Cau 14: 
// const solve = (string) => {
//     const newString = string.split("").map(item => (isNaN(parseInt(item)) ? item : "")).join("");
//     return newString;
// }

// const str = "asdasdasd11212";
// console.log(solve(str));

//Cau 15: 
// const solve = (string, number)  => {
//     const newString = string.split(" ").filter((substr) => substr.length <= number).join(" ");
//     return newString;
// }
// const test1 = "I Love Foood Code Too Playing Much";
// console.log(solve(test1, 4));

// B16 
// Cach 1
// const sum = (array) => {
//     return array.reduce((a, b) => a + b, 0);
// }

// const getPrice = (array) => {
//     const ans = array.map((item) => item.price * item.quantity);
//     return sum(ans);
// }

// const cart = [
//     { name: "iPhone", price: 1000, quantity: 5 },
//     { name: "iPad", price: 500, quantity: 2 },
//     { name: "MacBook", price: 2000, quantity: 1 },
//   ];

// // Cach 2 
// const getPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity, 0
// )

// console.log(getPrice);

//Cau 17 
// const students = [
//     { hoTen: "Le Van A", gioiTinh: "Nam" },
//     { hoTen: "Do Van B", gioiTinh: "Nam" },
//     { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
//     { hoTen: "Dao Van D", gioiTinh: "Nam" },
//     { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
//     { hoTen: "Vu Van F", gioiTinh: "Nam" },
//   ];

// const groupStudent = students.reduce((groups, item) => {
//     if (groups[item.gioiTinh]) {
//         groups[item.gioiTinh].push(item.hoTen);
//     }
//     else {
//         groups[item.gioiTinh] = [item.hoTen];
//     }
//     return groups;
// }, {})

// console.log(groupStudent)

// Cau 19 
// const sum = (arr) => {
//     return arr.reduce((a, b) => a + b, 0);
// }

// const solve = (array) => {
//     const newArr = array.map((item) => sum(item));
//     return newArr;
// }

// const numbers = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ];

//   console.log(solve(numbers));

// Cau 20
// const students = [
//     { hoTen: "Le Van A", lop: "A", diem: 7.5 },
//     { hoTen: "Do Van B", lop: "B", diem: 6.8 },
//     { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
//     { hoTen: "Dao Van D", lop: "C", diem: 9 },
//     { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
//     { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
//   ];
  
// const sumByClass = students.reduce((totalByClass, item) => {
//     const lop = item.lop;
//     if (!totalByClass[lop]) totalByClass[lop] = 0;
//     totalByClass[lop] += item.diem;
//     return totalByClass;
// }, {});

// const total1 = {};
// for (let i = 0; i < students.length; i++) {
//     const lop = students[i].lop;
//     if (!total1[lop]) total1[lop] = 0;
//     total1[lop] += students[i].diem;
// }

// const myAns = students.reduce((total, item) => {
//     let lop = item.lop;
//     if (!total[lop]) total[lop] = 0;
//     total[lop] += item.diem;
//     return total;
// }, {});

// console.log(sumByClass);
// console.log(total1);