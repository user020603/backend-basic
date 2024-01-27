function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").textContent = result;
}


function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2;
    document.getElementById("result").textContent = result;
}


function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2;
    document.getElementById("result").textContent = result;
}


function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 / num2;
    document.getElementById("result").textContent = result;
}

function remainder() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 % num2;
    document.getElementById("result").textContent = result;
}

const ip = document.querySelectorAll(".ip");
for (let i = 0; i < ip.length; i++) {
    ip[i].addEventListener("mouseover", function() {
        ip[i].style.background = "#5b5b";
    });
}

for (let i = 0; i < ip.length; i++) {
    ip[i].addEventListener("mouseout", function() {
        ip[i].style.background = "#fff";
    })
}
