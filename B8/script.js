// Cau1: Lay URL hien tai cua trang 
// de bai: Viet mot chuong trinh de lay URL hien tai cua trang va in ra man hinh console 
// var currentURL = window.location.href;
// console.log(currentURL);

// Cau2: Lay phan thong tin (protocol, hostname, port) tu URL 
// de bai: Viet mot chuong trinh de lay phan thong tin cua URL (bao gom protocol, hostname, port) va in ra man hinh console
// var protocol = window.location.protocol;
// var hostname = window.location.hostname; 
// var port = window.location.port; 

// console.log(protocol);
// console.log((hostname));
// console.log(port);

// Cau 3: Chuyen huong trang web 
// De bai: Viet mot chuong trinh de chuyen huong nguoi dung den mot URL khac sau mot khoang thoi gian nhat dinh 
// function redirect(url, delay) {
//     setTimeout(function() {
//       window.location.href = url;
//     }, delay);
//   }
  
  
//   // Chuyển hướng sau 3 giây
//   redirect("<https://daca.vn/>", 3000);

// Cau4 Reload trang 
// debai: Viet mot chuong trinh de reload(tai lai) trang web sau mot khoang thoi gian nhat dinh 
// function reloadPage(delay) {
//     setTimeout(function() {
//         window.location.reload();
//     }, delay);
// }

// reloadPage(3000);

// Cau5: Kiem tra Https 
// Đề bài: Viết một chương trình JavaScript để kiểm tra xem trang web có đang chạy trên giao thức an toàn (HTTPS) hay không và in kết quả ra màn hình console.
// var isSecure = window.location.protocol === "https:";
// console("An toan" + isSecure);

// Cau7
// var seconds = 10;
// function countDown() {
//     if (seconds >= 0) {
//         console.log(seconds);
//         seconds -= 1;
//         setTimeout(countDown, 1000);
//     }
//     else console.log("Happy New Year!");
// }

// countDown();

// Cau 8: 
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// Cau 9: 
// console.log(window.screenX);
// console.log(window.screenY);

// Cau 10: 
// document.querySelector("#myButton").addEventListener("click", function() {
//     window.open (
//         "https://daca.vn", 
//         "myWindow", 
//         "width=1200, height=600, top=100, left=100"
//     )
// });

//Cau11: Lấy thông tin về tên trình duyệt
// console.log(navigator.userAgent);

//Cau12: Ngôn ngữ của trình duyệt
// console.log(navigator.language); // Ngôn ngữ được đặt trong trình duyệt

//Cau13:  Độ phân giải màn hình
// console.log(window.screen.width);
// console.log(window.screen.height);