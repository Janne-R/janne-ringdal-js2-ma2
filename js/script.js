import { saveToStorage, getFromStorage } from "./components/localStorage.js";
import { createList } from "./components/createList.js";
import { listKey } from "./constants/settings.js";

const listInput = document.querySelector("input");
const button = document.querySelector("button");

const todos = getFromStorage(listKey);
createList(todos);

const addToList = () => {
  const itemValue = listInput.value.trim();
  if (itemValue.length >= 1) {
    const newItem = { id: Date.now(), name: itemValue };
    todos.push(newItem);
    listInput.value = "";
    listInput.focus();

    createList(todos);
    saveToStorage(listKey, todos);
  }
  console.log(todos);

}

button.addEventListener("click", addToList);