'use strict';

const calculator = document.querySelector("#calculator");
const main = document.querySelector("#main");
const calToggle = document.querySelector(".calToggle");
const liToggle = document.querySelector(".liToggle");

calToggle.addEventListener("click", () => {calculator.classList.toggle("active")});
liToggle.addEventListener("click", () => {main.classList.toggle("active")})