function library(input) {

    let books = input[0].split('&');
    let indexedBook = '';

    for (let i = 1; i < input.length; i++) {
        let [oper, book, secBook] = input[i].split(' | ');

        if (oper === 'Done') {
            break;
        } else {
            switch (oper) {
                case 'Add Book':
                    if (!books.includes(book)) {
                        books.unshift(book);
                    } break;
                case 'Take Book': books = books.filter(x => x !== book); break;
                case 'Swap Books':
                    if (books.includes(book) && books.includes(secBook)) {
                        books.splice(books.indexOf(secBook), 1, book);
                        books.splice(books.indexOf(book), 1, secBook);
                    }
                    break;
                case 'Insert Book':
                    if (!books.includes(book)) {
                        books.push(book);
                    }
                    break;
                case 'Check Book':
                    if(books.indexOf(books[Number(book)]) !== -1){
                        indexedBook = books[Number(book)]
                    }
                    break;
            }
        }

    }

    console.log(indexedBook);
    console.log(books.join(', ')); 
}