const form = document.querySelector('form');
const title = document.querySelector('input[name="title"]');
const author = document.querySelector('input[name="author"]');
const genre = document.querySelector('select[name="category"]');
const bookList = document.querySelector('.books');

let books = [];

loadBooks();
updateList();

form.addEventListener('submit', e => {
    e.preventDefault();

    let book = {
        title: title.value,
        author: author.value,
        genre: genre.value,
    };

    books.push(book);
    saveBooks();
    updateList();
    clearForm();
});

function clearForm() {
    title.value = '';
    author.value = '';
    genre.value = '';
}

function updateList() {
    bookList.innerHTML = '';
    for (let book of books) {
        let bookNode = document.createElement('li');
        bookNode.textContent = `${book.title} / ${book.author}`;
        bookList.appendChild(bookNode);
    }
}

function loadBooks() {
    try {
        let booksJson = localStorage.getItem('books') || '[]';
        books = JSON.parse(booksJson);
    } catch (err) {
        console.error(err);
    }
}

function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}
