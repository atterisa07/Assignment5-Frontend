const box = document.getElementById("mouseBox");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "pink";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "lightblue";
});