const ul = document.querySelector("ul");
const liItems = document.querySelectorAll("li");
const btnAdd = document.querySelector("button");
const newInput = document.getElementById("newTodo");

btnAdd.addEventListener("click", () => {
  const taskText = newInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", toggleTaskCompletion);
    ul.appendChild(li);
    newInput.value = "";
    btnAdd.disabled = true;
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    toggleTaskCompletion(e.target);
  }
});

function toggleTaskCompletion(taskItem) {
  taskItem.style.textDecoration = taskItem.style.textDecoration
    ? ""
    : "line-through";
}

function handleInputChange() {
  const taskText = newInput.value.trim();
  btnAdd.disabled = taskText === "";
}

newInput.addEventListener("input", handleInputChange);
btnAdd.disabled = true;
