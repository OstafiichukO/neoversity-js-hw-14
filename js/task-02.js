"use strict";

/*
? Напиши скрипт, який для кожного елемента масиву ingredients:
  1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
  2. Додасть назву інгредієнта як його текстовий вміст.
  3. Додасть елементу клас item.
  4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const listOfIngridients = ingredients.map((ingredient) => {
    let item = document.createElement("li");
    item.classList.add("item");
    item.textContent = ingredient;
    return item;
});

ingredientsList.append(...listOfIngridients);
