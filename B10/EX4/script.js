const openButton = document.querySelector("#open-modal-button");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-button");

openButton.addEventListener("click", function () {
    modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});