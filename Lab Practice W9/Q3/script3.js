// Function to initialize the to-do list functionality
document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");

    // Add a new to-do item
    addButton.addEventListener("click", function () {
        const task = todoInput.value.trim();
        if (task) {
            addTodoItem(task);
            todoInput.value = "";
        }
    });

    // Function to create and add a new to-do item
    function addTodoItem(task) {
        const listItem = document.createElement("li");
        const taskText = document.createElement("span");
        const deleteButton = document.createElement("button");

        taskText.textContent = task;
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        // Mark task as completed when clicked
        taskText.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });

        // Delete task when delete button is clicked
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(listItem);
        });
    }
});
