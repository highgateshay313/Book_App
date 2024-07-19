
const form = document.querySelector(".bookBtn");
const books = document.querySelector(".addbook")
const cancel = document.querySelector(".cancel");
const viewLibrary = document.querySelector(".library");
const inputValue = document.querySelector(".inputData");
const inputText = document.getElementById("title");
const displayBook = document.querySelector(".show-Books");
const show = document.querySelector(".book-form");
let para = document.createElement("p")






const myLibrary = [];


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addToLibrary() {
    
}

function showForm() {
    para.textContent = "this is a test"
    inputValue.appendChild(para)
    inputValue.textContent = para.innerText

}

function cancelForm() {
    show.style.display = "none"
    form.style.display = "block"
}

displayBook.addEventListener("click", (e) => {
  inputValue.textContent = "test"
    
})










books.addEventListener("click", showForm)
cancel.addEventListener("click", cancelForm)


let a, b, rest;
[a, b] = [5, 10];


[a, b, ...rest] = [5, 10, 3, "This is a test", 25];

function displayIt() {
    let seeIt = rest[1];
    inputValue.textContent = seeIt;

}

displayIt()

