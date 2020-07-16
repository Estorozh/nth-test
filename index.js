import {Router} from './Routing/Route.js'
import {About} from './About.js'
import {Form} from './Form.js'

addEventListener('hashchange', (e)=> {document.querySelector(".locale").innerHTML = "Вы сейчас на " + e.newURL })// window.location.href
function animate(e) {
  e.preventDefault;
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function() {
    e.target.classList.remove('animate');
  }, 700);
}

new Router('#content', {
  about: About,
  form: Form
})

document.querySelector(".btn-bubbles").addEventListener('click', (e)=> {animate(e)})