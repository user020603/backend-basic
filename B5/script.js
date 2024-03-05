 // Đề bài: 
// // Cau 1: Tính toán các phép tính sau và phỏng đoán kết quả của console.log().
// var x = 5;
// var y = 3;
// // addition 
// console.log(x + y);
// //substraction
// console.log(x - y);
// //multiplication 
// console.log(x * y);
// //division
// console.log(x / y);
// //remainder
// console.log(x % y);
// // increment
// console.log("++x = ", ++x);
// console.log("x++ = ", x++);
// console.log("x = ", x);
// // decrement
// console.log("--x = ", --x);
// console.log("x-- = ", x--);
// console.log("x = ", x);
// //exponentiation
// console.log(x ** y);


// Câu 02: Comparison (Toán tử so sánh)
// Đề bài: Tính toán các phép tính sau và phỏng đoán kết quả của console.log().
// equal operator
// console.log(5 == "5");
// console.log(5 == 5);
// not equal operator
// console.log(3 != 2);
// console.log('Hello' != 'Hello');
// strict equal operator
// console.log(5 === "5");
// console.log(2 === 2);
// strict not equal operator
// console.log(5 !== "5");
// console.log(2 !== 2);
// Câu 03: Logical (Toán tử logic)
// De bai: Tính toán các phép tính sau và phỏng đoán kết quả của console.log().
// AND operator
// console.log(true && true);
// console.log(true && false);
// OR operator
// console.log(true || true);
// NOT operator
// console.log(!true);

// Cau 4 : String (Chuỗi)
// Đề bài: Phong đoán kết quả của console.log().
// console.log("hello" + "world");
// var a = "Javascript";
// a += " " + "is awesome";
// console.log(a);

//Cau 5: Swapping variables (Hoán đổi giá trị)
// var value1 = "one";
// var value2 = "two";

// console.log("Gia tri ban dau: ", value1);
// console.log("Gia tri ban dau: ", value2);
// // Hoan doi gia tri
// var value3 = value1;
// value1 = value2;
// value2 = value3;
// console.log("Gia tri sau khi hoan doi: ", value1);
// console.log("Gia tri sau khi hoan doi: ", value2);


//Cau 6
// function solve(a) {
//     return 2 * a ** 2;
// }

// console.log(solve(5));
// console.log(solve(6));
// console.log(solve(7));

// Cau 7 : Chech palindrome
// function check(s) {
//     let res = s.split("").reverse().join("");
//     return s == res;
// }
// console.log(check("racecar"));

// Cau 8 : Data types
// console.log(typeof("Le Van A"));
// console.log(typeof(5000));
// console.log(typeof(5000.99));
// console.log(typeof([10, 29, 2003]));
// console.log(typeof({name: "Le Van A", age: 18}));
// console.log(typeof(true));
// console.log(typeof(false));
// console.log(typeof(undefined));
// console.log(typeof(null));

// Cau 9: Template Literals
// var img = "<https://cdn.pixabay.com/photo/2024/01/08/17/54/wren-8496039_640.jpg>"
// var title = "JS TIPS - Mot so cach viet JS ngan gon hon";
// var desc = "Real Madrid is the best club in the world";
// var url = "<https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon>";
// var string = `
//   <div class="article">
//     <a href="${url}">
//     <div class="inner-image">
//       <img src="${img}" />
//     </div>
//     <div class="inner-content">
//       <h2 class="inner-title">${title}</h2>
//       <p class="inner-desc">${desc}</p>
//     </div>
//     </a>
//   </div>
// `;


// console.log(string);

// Câu 10: Type Coercion (Ép kiểu)
// Đề bài: Phỏng đoán kết quả của console.log().
// var a = "100";
// var b = 20;
// var c = true;


// console.log(+a + b + c);
// Đáp án:
// var a = "100";
// var b = 20;
// var c = true;

// console.log(+a + b + c);
// // Trả về: 121
// // Giải thích:
// // +a: có dấu cộng ở trước biến a thì JS sẽ chuyển string "100" thành số 100
// // b: 20
// // c: là kiểu boolean, nếu c = true tương đương với 1, nếu c = false tương đương với 0



// Câu 13: Math Object
// Đề bài:
// Tìm hiểu thêm một số hàm toán học sau:
// round() => Làm tròn lên hoặc xuống.
// ceil() => Làm tròn lên.
// floor() => Làm tròn xuống.
// min() => Lấy số nhỏ nhất.
// max() => Lấy số lớn nhất.
// pow() => Lũy thừa.
// random() => Tạo số thập phân ngẫu nhiên từ 0 đến 1.
// trunc() => Xóa số thập phân.
// Phỏng đoán kết quả của console.log().

// console.log(Math.round(9.7));
// console.log(Math.ceil(9.1));
// console.log(Math.floor(9.7));
// console.log(Math.min(9, 7, 8, 9, 10));
// console.log(Math.max(9, 7, 8, 9, 10));
// console.log(Math.pow(2, 3));
// console.log(Math.random());
// console.log(Math.trunc(9.7));

// Câu 15: String Methods (2)
// Đề bài: Phỏng đoán kết quả của console.log().
// var a = "Daca.vn - Professional Web Design Services.";


// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 24));
// console.log(a.indexOf("vn"));


// console.log(a.lastIndexOf("Design"));


// console.log(a.slice(10, 22));
// console.log(a.slice(-16, -10));


// console.log(a.split("", 7));
// Đáp án:
// var a = "Daca.vn - Professional Web Design Services.";


// console.log(a.indexOf("Web")); // 23
// console.log(a.indexOf("Web", 24)); // -1
// console.log(a.indexOf("vn")); // 5


// console.log(a.lastIndexOf("Design")); // 27


// console.log(a.slice(10, 22)); // Professional
// console.log(a.slice(-16, -10)); // Design


// console.log(a.split("", 7));
// // ["D", "a", "c", "a", ".", "v", "n"]

// Cau 18: Add and Remove Items from an Array
const arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.shift();
// console.log(arr);
arr.pop();
console.log(arr);
