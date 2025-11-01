const container = document.querySelector('.container');
const submit = document.querySelector(".submit");
const form = document.querySelector(".form")
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");

form.addEventListener('click', (event) => {
    event.preventDefault();
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;

    switch (event.target.id) {
        case "submit" :
            if (title.trim() === '' || title === null || title === undefined) {
                alert("Can't submit empty form");
                return;
            }

            addBookToLibrary(title, author, pages);
        
            form.style.display = "none";
            container.style.display = "grid";
            
            bookCollection.forEach(book => {
                createAppendElement(book);
            })
            break;

        case "cancel" :
            form.style.display = "none";
            container.style.display = "grid";
            break;
        default:
            console.log("Error somewhere");
            break;
    }

})

container.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    switch (event.target.id) {
        case "add-book":
            form.style.display = "flex";
            container.style.display = "none";
            break;
        case "remove":
            // container.removeChild(event.target)

            break;
        default:
            console.log("Error somewhere in the container event handler");
            break;
    }
})

const bookCollection = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function createAppendElement(book){
    const card = document.createElement("div");
    const top = document.createElement("div");
    const bottom = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const readbtn = document.createElement("button");
    const removebtn = document.createElement("button")

    card.classList.add("card");
    top.classList.add("top")
    bottom.classList.add("bottom");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("number-of-pages");
    readbtn.classList.add("btn", "read");
    removebtn.classList.add("btn", "remove");
    removebtn.setAttribute("id", "remove");


    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `No of pages: ${book.pages}`;
    readbtn.textContent = `read`;
    removebtn.textContent = `remove`;

    top.appendChild(title);
    top.appendChild(author);
    top.appendChild(pages);

    bottom.appendChild(readbtn);
    bottom.appendChild(removebtn);

    card.appendChild(top);
    card.appendChild(bottom);

    container.appendChild(card);

}

function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages);
    bookCollection.push(book);
}

const story = new Book('Meditations', 'Marcus Aurelius', '120');
addBookToLibrary("48 Law of power", "Robert Greene", "659");
createAppendElement(story);