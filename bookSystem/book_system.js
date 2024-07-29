let books = [];
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {

            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        books.push(book);
        showBooks();
        clearInputs();
        //we used the keyword book to pass/pass the object created above to the books array. i.e we created a named object(book)
    }
    else {
        alert(`Please fill out all fields!`);
    }
}


function showBooks() {

    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong> ${book.name}</p>
     <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`);
    document.getElementById('books').innerHTML = booksDiv.join('');
    // join() yahan bhi use hosakta or map k end pe bhi no issue
}


function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}