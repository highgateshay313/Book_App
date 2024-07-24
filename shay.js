
const form = document.querySelector(".bookBtn");
const books = document.querySelector(".addbook")
const cancel = document.querySelector(".cancel");
const viewLibrary = document.querySelector(".library");
const inputValues = document.querySelector(".inputData");
const inputText = document.getElementById("title");
const displayBook = document.querySelector(".btn");
const show = document.querySelector(".book-form");
const library = document.querySelector("a");
const cardTitle = document.querySelector(".card-title")
const bookname = document.querySelector(".bookName")
const authorPara = document.querySelector(".authorName")
const authorname = document.querySelector("#author")
const pageNum = document.querySelector("#pages")

const myLibrary = [];

function Book() {

}

function addbookToLibrary() {

}

function getCard() {
   let title = document.createElement("h4")
   let titlePara = document.createElement("p")
   let author = document.createElement("h4")
   let authorPara = document.createElement("p")
   let pageCount = document.createElement("h4")
   let pagePara = document.createElement("p")
   inputValues.style.display = "flex"
   inputValues.style.paddingLeft = "20px"
   inputValues.style.paddingTop = "7px"
   inputValues.style.fontWeight = "bold"
   inputValues.style.color = "white"
   cardTitle.appendChild(title)
   title.textContent = "Title:"
   cardTitle.appendChild(titlePara)
   titlePara.textContent = inputText.value
   cardTitle.appendChild(author)
   author.textContent = "Author:"
   cardTitle.appendChild(authorPara)
   authorPara.textContent = authorname.value
   cardTitle.appendChild(pageCount)
   pageCount.textContent = "Pages:"
   cardTitle.appendChild(pagePara)
   pagePara.textContent = pageNum.value


}

function getForm() {
    show.style.display = "block"
    inputValues.style.display = "none"
    books.style.display = "none"
    library.style.display = "none"
}

// function getValues() {
//     bookname.textContent = inputText.value
//     inputValues.append(bookname.textContent)
//     inputValues.innerText = bookname.textContent
// }

displayBook.addEventListener("click", getCard)
books.addEventListener("click", getForm)
















