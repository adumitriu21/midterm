/* 
  File Name: controllers/index.js
  Author: Adrian Dumitriu
  Student ID: 300566849
  Web App Name: Favourite Books
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
