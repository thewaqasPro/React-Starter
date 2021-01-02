import isEmail from 'validator/lib/isEmail'
import tripleMe from './tripleMe'

console.log(isEmail('waqas@mail.com'));
console.log(tripleMe(2000));

document.querySelector("h1").innerText = 'Muhammad Waqas Asghar'


if (module.hot) {
    module.hot.accept()
}