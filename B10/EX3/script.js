const colorPicker = document.getElementById("color-picker");
const colorPreview = document.getElementById("color-preview");
const pre = document.querySelector("#pre");

colorPicker.addEventListener("change", function() {
    const selectedColor = colorPicker.value; 
    colorPreview.style.backgroundColor = selectedColor;
    pre.style.color = selectedColor;
})