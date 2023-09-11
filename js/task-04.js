"use strict";

/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
3. Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const refs = {
    incrementBtn: document.querySelector("[data-action='increment']"),
    decrementBtn: document.querySelector("[data-action='decrement']"),
    counter: document.querySelector("#value"),
};

const { incrementBtn, decrementBtn, counter } = refs;

let counterValue = 0;

const handleIncrement = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

const handleDecrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);
