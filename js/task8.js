let tasks = [];

function addTask() {
    let title = document.getElementById("taskInput").value;
    let description = document.getElementById("description").value;

    if (title.trim() === "") {
        alert("Please enter a title");
        return;
    }

    tasks.push({
        title: title,
        description: description
    });

    showTasks();

    document.getElementById("taskInput").value = "";
    document.getElementById("description").value = "";
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let item = document.createElement("li");

        let title = document.createElement("h3");
        title.textContent = tasks[i].title;

        let description = document.createElement("p");
        description.textContent = tasks[i].description;

        let done = document.createElement("button");
        done.textContent = "Done";

        done.onclick = function() {
            title.style.textDecoration = "line-through";
            description.style.textDecoration = "line-through";
        };

        let del = document.createElement("button");
        del.textContent = "Delete";

        del.onclick = function() {
            tasks.splice(i, 1);
            showTasks();
        };

        item.appendChild(title);
        item.appendChild(description);
        item.appendChild(done);
        item.appendChild(del);

        list.appendChild(item);
    }
}