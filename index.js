import {Router} from './Routing/Route.js'
import {About} from './About.js'
import {Form} from './Form.js'

// addEventListener('hashchange', (e)=> {document.querySelector(".locale").innerHTML = "Вы сейчас на " + e.newURL })// window.location.href

new Router('#content', {
  about: About,
  form: Form
})