// Cau 1
// function consoleLog(item) {
//     console.log(item);
// }

// function forEachTest(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }

// const arrayTest1 = [1, 2, 3, 4, 5];
// forEachTest(arrayTest1, consoleLog);
// // Trả về:
// // 1, 2, 3, 4, 5


// const arrayTest2 = ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"];
// forEachTest(arrayTest2, consoleLog);
// // Trả về:
// // Lê Văn A
// // Nguyễn Thị B
// // Đỗ Thị C


// // Cau 2: 
// function consoleLog(a, b) {
//     console.log(a + b);
// }

// function forEachPair(array, callback) {
//     for (let i = 0; i < array.length - 1; i++) {
//         callback(array[i], array[i + 1]);
//     }
// }

// const arrayTest1 = [1, 2, 3, 4, 5];
// forEachPair(arrayTest1, consoleLog); // 3, 5, 7, 9


// const arrayTest2 = [5, 20, 30, 60, 90];
// forEachPair(arrayTest2, consoleLog); // 25, 50, 90, 150

// Cau3 : 
// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//         const randomNumber = Math.floor(Math.random() * 10) + 1;
//         if (randomNumber) resolve(randomNumber);
//         else reject("Can not implement");
//     });
// }

// getRandomNumber().then((number) => {
//     console.log("So ngau nhien:", number);
// })
// .catch((error) => {
//     console.error("Error: ", error);
// })

// Cau 4
// function getEvenNumber(numbers) {
//     return new Promise((resolve, reject) => {
//         const evenNumber = numbers.filter((number) => number % 2 === 0);
//         if (evenNumber.length > 0) resolve(evenNumber);
//         else reject("");
//     });
// }

// const numbersTest1 = [1];
// getEvenNumber(numbersTest1)
// .then((evenNumber) => {
//     console.log(evenNumber);
// })
// .catch((error) => {
//     console.error("Error: ", error);
// })

// Cau 5 
// const fetchApi = async (api) => {
//     const response = await fetch(api);
//     const result = await response.json();
//     return result;
//   };
  
  
//   fetchApi("https://restcountries.com/v2/all").then((data) => {
//     let htmls = data.map((item) => {
//       return `
//           <div class="inner-item">
//             <div class="inner-box">
//               <img class="inner-image" src="${item.flag}" alt="${item.capital} - ${item.name}" />
//               <div class="inner-title">
//                 ${item.capital} - ${item.name}
//               </div>
//             </div>
//           </div>
//         `;
//     });
  
  
//     htmls = htmls.join("");
    
//     console.log(htmls);
  
//     const divCountry = document.querySelector("#country");
//     divCountry.innerHTML = htmls;
//   });  


// Cau 6

const fetchapi = async (api) => {
  const response = await fetch(api);
  const result = await response.json();
  return result;
}

fetchapi("https://api.ipify.org?format=json")
.then((data) => {
  console.log(data.ip);
})
.catch((error) => {
  console.error("Error: ", error);
});

