"use strict";

let numOne = "";
let operator = "";
const RESULT_VALUE_KEY = "resultValue";
let numTwo = localStorage.getItem(RESULT_VALUE_KEY);
const $operator = document.querySelector("#operator");
const toggleBtn = document.querySelector(".calToggle");
const $forms = document.querySelector("#forms");
const outputBox = document.querySelector("#forms input[name=output]");
const $buttons = document.querySelectorAll("button");

function showResult(event) {
  event.preventDefault();
  if (!localStorage.getItem(RESULT_VALUE_KEY)) {
    numTwo = 0;
  } else {
    numOne = outputBox.value;
    switch (operator) {
      case "+":
        outputBox.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        outputBox = numOne - numTwo;
        break;
      case "*":
        outputBox = numOne * numTwo;
        break;
      case "/":
        outputBox = numOne / numTwo;
        break;
    }
  }
  localStorage.removeItem(RESULT_VALUE_KEY);
  localStorage.setItem(RESULT_VALUE_KEY, outputBox.value);
}

const onClickOperator = (op) => (event) => {
  event.preventDefault();
  operator = op;
  $operator.value = op;
};

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem(RESULT_VALUE_KEY)) {
    outputBox.placeholder = 0;
  } else {
    outputBox.placeholder = localStorage.getItem(RESULT_VALUE_KEY);
  }
});
document
  .querySelector("#multiple")
  .addEventListener("click", onClickOperator("*"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document.querySelector("#plus").addEventListener("click", onClickOperator("+"));

document.querySelector("#cancle").addEventListener("click", () => {
  outputBox.value = "";
  $operator.value = "";
  outputBox.placeholder = localStorage.getItem(RESULT_VALUE_KEY);
});
document.querySelector("#equal").addEventListener("click", showResult);

$buttons.forEach((button) =>
  button.addEventListener("click", () => {
    outputBox.focus();
  })
);
