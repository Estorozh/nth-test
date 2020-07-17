import {Router} from './utils/Router.js'
import {About} from './pages/About.js'
import {Form} from './pages/Form.js'

window.data = {}

new Router('#content', {
  about: About,
  form: Form
})