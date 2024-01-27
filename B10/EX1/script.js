const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");


addButton.addEventListener("click", function () {
  const todoText = todoInput.value;
  if (todoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;
    todoList.appendChild(todoItem);
    todoInput.value = "";


    todoItem.addEventListener("click", function () {
      todoItem.classList.toggle("completed");
    });


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    todoItem.appendChild(deleteButton);


    deleteButton.addEventListener("click", function () {
      todoItem.remove();
    });
  }
});
