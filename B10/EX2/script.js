const htmlEditor = document.getElementById("html-editor");
const previewButton = document.getElementById("preview-button");
const preview = document.getElementById("preview");

previewButton.addEventListener("click", function() {
    const htmlCode = htmlEditor.value;
    preview.innerHTML = htmlCode;
})
