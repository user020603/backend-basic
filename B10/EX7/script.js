const data = [10, 20, 15, 30, 25];
const chart = document.getElementById("chart");

for (let i = 0; i < data.length; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = data[i] + "px";
    chart.appendChild(bar);
}