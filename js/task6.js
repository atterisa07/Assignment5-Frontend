const input = document.getElementById("inputText");
const result = document.getElementById("result");

input.addEventListener("keyup", function() {
    result.textContent = input.value;
});