import { createList } from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./components/localStorage.js";
import { listKey } from "./constants/settings.js";

const listInput = document.querySelector("input");
const button = document.querySelector("button");

let initialItems = getFromStorage(listKey);
createList(initialItems);

const addToList = () => {
  let storedItems = getFromStorage(listKey);
  const newItem = listInput.value.trim();

  if (newItem.length >= 1) {
    storedItems.push(newItem);

    createList(storedItems);
    saveToStorage(listKey, storedItems);

    listInput.value = "";
    listInput.focus();
  }
}

button.addEventListener("click", addToList);





