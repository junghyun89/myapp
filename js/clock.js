'use strict';

const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const today = new Date();
    const weekday = new Array(7);
    weekday[0] = "일";
    weekday[1] = "월";
    weekday[2] = "화";
    weekday[3] = "수";
    weekday[4] = "목";
    weekday[5] = "금";
    weekday[6] = "토";

    const day = weekday[today.getDay()];
    date.innerText = `${today.getMonth()+1}월 ${today.getDate()}일 ${day}요일`;
}

getDate();
getClock();
setInterval(getClock, 1000);
