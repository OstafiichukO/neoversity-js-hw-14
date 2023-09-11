"use script";

/*
? Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/

const refs = {
    inputEl: document.querySelector("#name-input"),
    outputEl: document.querySelector("#name-output"),
};

function onChangeInput(event) {
    refs.outputEl.textContent = event.currentTarget.value;
    if (refs.outputEl.textContent === "") {
        refs.outputEl.textContent = "Anonymous";
    }
}

refs.inputEl.addEventListener("input", onChangeInput);
