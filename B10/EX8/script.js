const slider = document.getElementById("slider");
const valueDisplay = document.getElementById("valueDisplay");

slider.addEventListener("input", function() {
    valueDisplay.innerHTML = slider.value;
})