const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const Book = require('../models/Book');

mongoose.connect('mongodb://localhost/miBiblio', { useNewUrlParser: true });

const books = Array.from({ length: 40 }, () => ({
  title: faker.hacker.phrase(),
  description: faker.lorem.sentences(3),
  author: faker.name.firstName(),
  rating: faker.random.number(1, 5),
}));

Book.collection
  .drop()
  .then(() => {
    console.log('deleted db');
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => Book.insertMany(books))
  .then(() => {
    console.log('inserted fake data');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });
