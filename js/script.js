import { saveToStorage, getFromStorage } from "./components/localStorage.js";
import { listKey } from "./constants/settings.js";

const listInput = document.querySelector("input");
const button = document.querySelector("button");

const createList = () => {
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
    listItems = newList;
    createList();
    saveToStorage(listKey, listItems);
  }

  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach((can) => {
    can.addEventListener("click", removeFromList);
  });
}

let listItems = getFromStorage(listKey);
createList(listItems);


const addToList = () => {
  const newBook = listInput.value.trim();

  if (newBook.length >= 1) {
    listItems.push(newBook);
    createList();
    saveToStorage(listKey, listItems);
    listInput.value = "";
    listInput.focus();
  }
}

button.addEventListener("click", addToList);





