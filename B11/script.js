// Cau1: Vi du ve hoisting bien 
// var x = 5;
// console.log(x + y); // NaN
// var y = 10;


// Cau2:
// const math = require('./math.js');
// console.log(math.tong(1, 2)); // 3
// console.log(math.hieu(1, 2)); // -1
// console.log(math.tich(1, 2)); // 2
// console.log(math.thuong(1, 2)); // 0.5

// Cau9: 
// const dataJSON = `{
//     "name": "Lê Văn A",
//     "age": 20,
//     "email": "levana@gmail.com",
//     "address": {
//       "street": "Số 123, đường ABC",
//       "city": "Hà Nội",
//       "country": "Việt Nam"
//     }
//   }`;

// const dataJS = JSON.parse(dataJSON);
// console.log(dataJS.name);
// console.log(dataJS.email);
// console.log(dataJS.address.city);

// Cau10
// const dataJSON = `
//   [
//     {
//       "name": "Lê Văn A",
//       "age": 30,
//       "skills": ["JavaScript", "HTML", "CSS"]
//     },
//     {
//       "name": "Nguyễn Thị B",
//       "age": 25,
//       "skills": ["Python", "Java", "C++"]
//     },
//     {
//       "name": "Đỗ Văn C",
//       "age": 35,
//       "skills": ["Ruby", "PHP", "SQL"]
//     }
//   ]
// `;

// const dataJS = JSON.parse(dataJSON);
// const res = dataJS.map((obj) => obj.name);
// console.log(res);

// Cau11
// const ordersJSON = `
//   [
//     {
//       "id": 1,
//       "items": [
//         {
//           "productId": 1,
//           "quantity": 2
//         },
//         {
//           "productId": 2,
//           "quantity": 1
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "items": [
//         {
//           "productId": 3,
//           "quantity": 3
//         }
//       ]
//     }
//   ]
// `;


// const productsJSON = `
//   [
//     {
//       "id": 1,
//       "name": "iPhone 12",
//       "price": 1200
//     },
//     {
//       "id": 2,
//       "name": "Samsung Galaxy S21",
//       "price": 1000
//     },
//     {
//       "id": 3,
//       "name": "Google Pixel 5",
//       "price": 900
//     }
//   ]
// `;

// const ordersJS = JSON.parse(ordersJSON);
// const productsJS = JSON.parse(productsJSON);

// function calculateOrderTotal(orderID) {
//     const order = ordersJS.find((item) => item.id === orderID);
//     if (order) {
//         let total = 0;
//         for (const item of order.items) {
//             const product = productsJS.find((p) => p.id === item.productId);
//             if (product) {
//                 total += product.price * item.quantity;
//             }
//         }
//         return total;
//     }
//     else return "404 Not Found";
// }

// console.log(calculateOrderTotal(1)); // 3400 (Vì: 2 * 1200 + 1 * 1000)
// console.log(calculateOrderTotal(2)); // 2700 (Vì: 3 * 900)
// console.log(calculateOrderTotal(3)); // Không tìm thấy đơn hàng.


// Cau 12
// let productsJSON = `
//   [
//     {
//       "id": 1,
//       "name": "iPhone 12",
//       "price": 1200
//     },
//     {
//       "id": 2,
//       "name": "Samsung Galaxy S21",
//       "price": 1000
//     },
//     {
//       "id": 3,
//       "name": "Google Pixel 5",
//       "price": 900
//     }
//   ]
// `;

// let productsJS = JSON.parse(productsJSON);

// function deleteProduct(productID) {
//     productsJS = productsJS.filter(item => item.id != productID);
//     productsJSON = JSON.stringify(productsJS);
// }

// deleteProduct(2);
// console.log(productsJSON)

// Cau 13
const productsJSON = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "quantity": 5
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "quantity": 8
    }
  ]
`;

const productsJS = JSON.parse(productsJSON);

function calculateQuantity() {
    const totalQuantity = productsJS.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    return totalQuantity;
}

console.log(calculateQuantity());