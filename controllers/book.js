/* 
  File Name: controllers/book.js 
  Author: Adrian Dumitriu
  Student ID: 300566849
  Web App Name: Favourite Books
*/


// create a reference to the model
let Book = require('../models/book');

// Gets all books from the Database and renders the page to list all books.
module.exports.bookList = function(req, res, next) {  
    Book.find((err, bookList) => {
        console.log(bookList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('book/list', {
                title: 'Book List', 
                books: bookList
            })            
        }
    });
}

// Gets a book by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    Book.findById(id, (err, bookToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/details', {
                title: 'Book Details', 
                book: bookToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template (MODIFIED TO add_book.ejs!!!)
module.exports.displayAddPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE        
    res.render('book/add_book', {title: 'Add Book'})
}

// Processes the data submitted from the Add form to create a new book (MODIFIED TO add_book.ejs!!!)
module.exports.processAddPage = (req, res, next) => {

    // ADD YOUR CODE HERE
    let newBook = Book({
        "Title": req.body.Title,
        "Description": req.body.Description,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre
    });

    Book.create(newBook, (err, Book) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //redirect to updated book list
            res.redirect('/book/list');
        }
    });
}

// Gets a book by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // render the edit page
            res.render('book/edit_book', {title: 'Edit Book', book: bookToEdit})
        }
    });
}

// Processes the data submitted from the Edit form to update a book
module.exports.processEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;
    
    let updatedBook = Book({
        "_id": id,
        "Title": req.body.Title,
        "Description": req.body.Description,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre
    });

    Book.updateOne({_id: id}, updatedBook, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // got back to the now updated book list
            res.redirect('/book/list')
        }
    })
}

// Deletes a book based on its id.
module.exports.performDelete = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh book list page
            res.redirect('/book/list')
        }
    })
}