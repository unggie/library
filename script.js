const container = document.querySelector('.container');

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

// const story = new Book('The meditation', 'Marcus Aurelius', '120');
// // console.log(story);
// createAppendElement(story);