const bcrypt = require('bcrypt');

const saltRounds = 10;

const plainPassword1 = 'HelloWorld';
const plainPassword2 = 'HelloWorld';

const salt = bcrypt.genSaltSync(saltRounds);
const hash1 = bcrypt.hashSync(plainPassword1, salt);
const hash2 = bcrypt.hashSync(plainPassword2, salt);

console.log('password 1', hash1);
console.log('password 2', hash2);
