let listItems = [];

const listInput = document.querySelector("input");
const button = document.querySelector("button");

const createList = () => {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach((item) => {
    listContainer.innerHTML += `
    <li><span>${item}</span><i class="fas fa-trash"></i></li>
    `;
  });

}

const addToList = () => {
  const newBook = listInput.value.trim();

  if (newBook.length >= 1) {
    listItems.push(newBook);
    createList();
    listInput.value = "";
    listInput.focus();
  }


}

button.addEventListener("click", addToList);



