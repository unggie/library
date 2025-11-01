const container = document.querySelector('.container');
const submit = document.querySelector(".submit");
const form = document.querySelector(".form")
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");

const bookCollection = [];


form.addEventListener('click', (event) => {
    event.preventDefault();
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;

    switch (event.target.id) {
        case "submit" :
            if (!title || title.trim == '') {
                alert("Fill in book title");
                return;
            } else if (!author || author.trim == '') {
                alert("Fill in book author");
                return;
            } else if (!pages) {
                alert("Fill number of pages");
                return;
            }
            addBookToLibrary(title, author, pages);

            form.style.display = "none";
            container.style.display = "grid";
            
            container.replaceChildren();
            createAddBtn();

            bookCollection.forEach(book => {
                createAppendElement(book);
            })
            title = bookTitle.value = '';
            author = bookAuthor.value = '';
            pages = bookPages.value = '';
            break;
            
        case "cancel" :
            form.style.display = "none";
            container.style.display = "grid";
            title = bookTitle.value = '';
            author = bookAuthor.value = '';
            pages = bookPages.value = '';
            break;
        default:
            console.log("Error somewhere");
            break;
    }
})

container.addEventListener('click', (event) => {
    const card = document.querySelector(".card");
    event.preventDefault();
    switch (event.target.id) {
        case "add-book":
            form.style.display = "flex";
            container.style.display = "none";
            break;
        case "read":
            bookCollection.forEach(book => {
                if (event.target.dataset.id == book.id) {
                    if (book.state == false) {
                        event.target.textContent = "read(YES)";
                        book.state = true;
                    } else {
                        event.target.textContent = "read(NO)";
                        book.state = false;
                    }
                }
            })
            break;
        case "remove":
            bookCollection.forEach(book => {
                if (book.id == card.id) {
                    const bookIndex = bookCollection.indexOf(book);
                    bookCollection.splice(bookIndex, bookIndex + 1);
                }
                container.replaceChildren();
            })
            createAddBtn();
            bookCollection.forEach(book => createAppendElement(book));
            break;
        default:
            console.log("Error somewhere in the container event handler");
            break;
    }
})

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.state = false;
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
    card.setAttribute("id", `${book.id}`);
    top.classList.add("top")
    bottom.classList.add("bottom");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("number-of-pages");
    readbtn.classList.add("btn", "read");
    readbtn.setAttribute("id", "read");
    readbtn.setAttribute("data-id", `${book.id}`);
    removebtn.classList.add("btn", "remove");
    removebtn.setAttribute("id", "remove");

    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `No of pages: ${book.pages}`;
    removebtn.textContent = `remove`;
    if (book.state == false) {
        readbtn.textContent = `read (NO)`;
    } else {
        readbtn.textContent = `read (YES)`;
    }

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

function createAddBtn(){
    const addBtn  = document.createElement("button");
    addBtn.classList.add("add-book");
    addBtn.setAttribute("id", "add-book");
    addBtn.textContent = "Add book +";
    container.appendChild(addBtn);
}

addBookToLibrary("48 Law of power", "Robert Greene", "659");
addBookToLibrary("Atomic Habits", "James Clear", "250");
addBookToLibrary("Meditations", "Marcus Aurelius", "200");

bookCollection.forEach(book => {
    createAppendElement(book);
})

console.log(bookCollection);