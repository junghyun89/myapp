'use strict';

const randomWords = [
    {
        key: '이름',
        value: '정현'
    },
    {
        key: '나이',
        value: '28'
    },
    {
        key: '거주',
        value: '인천'
    },
    {
        key: '이멜',
        value: 'wjdgus8970@naver.com'
    },
    {
        key: '취뽀',
        value: '조만간'
    },
]

const key = document.querySelector("#randomMe span:first-child");
const value = document.querySelector("#randomMe span:last-child");

const aboutMe = randomWords[Math.floor(Math.random() * randomWords.length)];

key.innerText = aboutMe.key;
value.innerText = aboutMe.value;