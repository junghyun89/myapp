'use strict';

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

toDoInput.placeholder = Number(localStorage.getItem("sum")).toLocaleString();

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));    
}

function deleteClick(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    sum()
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = Number(newTodo.text).toLocaleString();
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteClick);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function sum() {
    let output = localStorage.getItem("todos");
    let arr = JSON.parse(output);
    const valueArr = arr.map(row => Number(row.text));
    let inputPlaceholder = valueArr.reduce((prev, curr) => prev + curr, 0);
    localStorage.setItem("sum", inputPlaceholder);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    sum()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;    
    parsedToDos.forEach(paintToDo);
}