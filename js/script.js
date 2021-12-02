import { books } from "./constants/dataList.js";
let myBooks = books;

export const createList = () => {
  const bookList = document.querySelector(".book-list");

  myBooks.forEach((book) => {
    bookList.innerHTML += `
    <li>
    <span>Title: ${book.title}</span>
    <i class="fas fa-trash" data-title="${book.title}"></i >
    </li >
  `;

  });


  const removeFromList = (event) => {
    console.log(event);

    const deleteBook = event.target.dataset.title;

    const newList = myBooks.filter((title) => {
      if (deleteBook !== title) {
        return true;
      }
    });

    myBooks = newList;

  }

  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach((can) => {
    can.addEventListener("click", removeFromList);

  });
}

createList();
