const saveBtn = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");

function getRanDomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const myTodo = {
      id: getRanDomInt(1, 10000000),
      name: inputTodo.value,
    };
    const currentTodoStr = localStorage.getItem("todo");
    // ton tai todo truoc do
    if (currentTodoStr) {
      //convert tu string ve object
      const currentTodo = JSON.parse(currentTodoStr); // chuyen Str ve dang object
      //push them todo
      currentTodo.push(myTodo);
      localStorage.setItem("todo", JSON.stringify(currentTodo));
    } else {
      localStorage.setItem("todo", JSON.stringify([myTodo])); // chuyen object ve string de luu vao storage
    }
    //success
    window.location.href = "index.html";
  });
}
const generateTodoTable = () => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);
    // console.log(todoList);
    const tbody = document.querySelector("#todoList tbody");
    if (todoList && todoList.length) {
      todoList.forEach((todo, index) => {
        tbody.innerHTML += `
       <tr>
        <td>${todo.id}</td>
        <td>${todo.name}</td>
        <td><button data-id = "${todo.id}" class="btn-delete">Xóa</button></td>
      </tr>
      `;
      });
    }
  }
};
generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");
if (deleteBtns) {
  deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      handleDeleteToto(id);
    });
  });
}
const handleDeleteToto = (id) => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    todoList = JSON.parse(todoListStr);
    const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);
    localStorage.setItem("todo", JSON.stringify(newTodo));
    window.location.reload();
  }
};
