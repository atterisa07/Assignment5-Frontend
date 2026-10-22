const list = document.getElementById("list");

document.getElementById("addBtn").addEventListener("click", function() {
    const item = document.createElement("li");
    item.textContent = "New Item";
    list.appendChild(item);
});

document.getElementById("removeBtn").addEventListener("click", function() {
    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }
});