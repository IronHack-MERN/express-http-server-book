/* eslint-disable no-underscore-dangle */
const express = require('express');
const Book = require('../models/Book');

const router = express.Router();
const checkIfLoggedIn = require('../middlewares/auth');

/* GET books listing. */
router.get('/', (req, res, next) => {
  Book.find()
    .then((books) => {
      // console.log('books', books);
      res.render('books', { books });
    })
    .catch(next);
});

router.get('/new', checkIfLoggedIn, (req, res) => {
  res.render('new');
});

router.get('/:bookId', checkIfLoggedIn, (req, res, next) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .then((book) => {
      if (book) {
        const rating = [];
        for (let i = 0; i < book.rating; i++) {
          rating.push('⭐️');
        }
        res.render('bookDetail', { book, rating });
      } else {
        const error = new Error('nada por aqui');
        Error.status = 404;
        // next(error);
        throw error;
      }
    })
    .catch(next);
});

router.post('/', checkIfLoggedIn, (req, res, next) => {
  const {
    title, author, description, rating,
  } = req.body;
  Book.create({
    title,
    author,
    description,
    rating,
  })
    .then((book) => {
      res.redirect(`/books/${book._id}`);
    })
    .catch(next);
});

router.get('/:bookId/update', checkIfLoggedIn, (req, res, next) => {
  const { bookId } = req.params;
  Book.findById(bookId)
    .then((book) => {
      res.render('edit', book);
    })
    .catch(next);
});

router.post('/:bookId', checkIfLoggedIn, (req, res, next) => {
  const { bookId } = req.params;
  const {
    title, author, description, rating,
  } = req.body;
  Book.findByIdAndUpdate(bookId)
    .then((book) => {
      // console.log('book in update', book);
      res.redirect(`/books/${bookId}`);
    })
    .catch(next);
});

router.post('/:bookId/delete', checkIfLoggedIn, (req, res, next) => {
  const { bookId } = req.params;
  Book.findByIdAndDelete(bookId)
    .then(() => {
      res.redirect('/books');
    })
    .catch(next);
});

module.exports = router;
