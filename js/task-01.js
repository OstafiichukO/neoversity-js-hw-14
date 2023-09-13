"use strict";

/*
? Напиши скрипт, який:
  1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
  2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
*/

const categoriesList = document.querySelector("ul#categories")
const numberOfCategories = document.querySelectorAll("ul#categories .item");
console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach((category) => {
    const categoryName = category.children[0].textContent;
    const categoryElementsCount = category.children[1].children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElementsCount}`);
});
