import {Page} from "./TemplatePage.js"
import {loader} from "./components/loaderHTML.js"
import {formHTML} from "./components/formHTML.js"
import {Request} from "../utils/Request.js"
import {changeValue} from "../utils/changeValue.js"

export class Form extends Page {
  constructor() {
    super()
    this.formInput = document.getElementsByClassName('formField__input')
  }

  getRoot() {
    const form = document.createElement('form')
    form.classList.add('form')
    form.innerHTML = formHTML
    return form
  }
  
  animate(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
  
    e.target.classList.add('animate');
    setTimeout(function() {
      e.target.classList.remove('animate');
    }, 700);
  }

  submit(event, form) {
    event.preventDefault()
    const formResponse = document.querySelector('.formResponse')
    let req = new Request(form)
    req.send()

    formResponse.innerHTML = loader

    const now = Date.now()
    let date =  new Date(now)
    date = date.toLocaleDateString() + ' в ' + date.toLocaleTimeString()

    setTimeout(()=>{
      const response = JSON.parse(req.getResponse())
      formResponse.innerHTML = `
        <h4>Запрос был отправлен ${date}</h4>
        <p>${response.name}</p>
        <p>${response.email}</p>
        <p>${response.phone}</p>
      `
    },2000)

    localStorage.clear()
    Array.from(this.formInput).forEach(el=>{
      data[el.name] = el.value
      el.setAttribute('value', '')
      el.value = ''
    })
  }

  afterRender() {
    let btnBubbles = document.querySelector(".btn-bubbles")
    if (btnBubbles){
      btnBubbles.addEventListener('click', (e)=> {this.animate(e);})
    }

    let form = document.querySelector('form')
    if (form) {
      form.addEventListener('submit', (event)=>{this.submit(event, form)})
    }

    changeValue(this.formInput)
  }
}

