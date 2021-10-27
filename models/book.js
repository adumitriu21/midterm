
let mongoose = require('mongoose');

/* 
  File Name: models/book.js
  Author: Adrian Dumitriu
  Student ID: 300566849
  Web App Name: Favourite Books
*/


// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: String,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);