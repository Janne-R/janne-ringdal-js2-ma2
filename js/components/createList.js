import { listKey } from "../constants/settings.js";
import { saveToStorage } from "./localStorage.js";

export const createList = (listItems) => {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  if (listItems.length === 0) {
    listContainer.innerHTML = "The list is empty.";
  }

  listItems.forEach((item) => {
    listContainer.innerHTML += `
    <li><span>${item}</span><i class="fas fa-trash" data-item="${item}"></i></li>
    `;
  });

  const removeFromList = (event) => {

    const deleteItem = event.target.dataset.item;
    console.log(deleteItem);

    const newList = listItems.filter((item) => {
      if (deleteItem !== item) {
        return true;
      }

    });

    createList(newList);
    saveToStorage(listKey, newList);
  }

  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach((can) => {
    can.addEventListener("click", removeFromList);
  });
}