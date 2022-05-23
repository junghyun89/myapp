'use strict';

const toggleBtn = document.querySelector(".toggleBtn");
const calculator = document.querySelector(".calBox");
const outputBox = document.querySelector('#forms input[name=output]');
const calBtns = document.querySelectorAll('#forms input[type=button]');
const multipleBtn = document.querySelector('#forms input[value="*"]');
const divideBtn = document.querySelector('#forms input[value="/"]');
const cancleBtn = document.querySelector('#forms input[value=C]');
const minusBtn = document.querySelector('#forms input[value="-"]');
const dotBtn = document.querySelector(".dot");
const plusBtn = document.querySelector('#forms input[value="+"]');
const equalBtn = document.querySelector('#forms input[value="="]');

const RESULTVALUE_KEY = "resultValue"

toggleBtn.addEventListener("click", () => {
    calculator.classList.toggle("active");
});

function showResult() {
    outputBox.value = eval(outputBox.value);
    localStorage.removeItem(RESULTVALUE_KEY);
    localStorage.setItem(RESULTVALUE_KEY, outputBox.value);
}

document.addEventListener("DOMContentLoaded", () => {outputBox.value = localStorage.getItem(RESULTVALUE_KEY)})
multipleBtn.addEventListener("click", () => {outputBox.value += multiple});
divideBtn.addEventListener("click", () => {outputBox.value += "/"});
cancleBtn.addEventListener("click", () => {outputBox.value = ""});
minusBtn.addEventListener("click", () => {outputBox.value += "-"});
dotBtn.addEventListener("click", () => {outputBox.value += "."});
plusBtn.addEventListener("click", () => {outputBox.value += "+"});
equalBtn.addEventListener("click", showResult);
calBtns.forEach(button => button.addEventListener("click", () => {outputBox.focus()}));

