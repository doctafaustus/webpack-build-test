import css from './styles/v1.scss';
import test from './mods/test';


$('head').append(`<style>${css}</style>`);

test();

let x = 1111;
console.log(x);

let y = x + 'This is a test';
console.log('y', y);

const user = {
  firstName: 'Billy',
  lastName: 'Coloe2',
  age: 32,
  city: 'Austin',
};

const {age, ...userWithoutAge} = user;
console.log({userWithoutAge}); // Logs all user properties except age

