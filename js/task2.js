const text = document.getElementById("text");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function() {
    text.textContent = "The text was changed!";
});