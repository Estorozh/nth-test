import {Page} from "./TemplatePage.js"
import {loader} from "./components/loaderHTML.js"
import {formHTML} from "./components/formHTML.js"
import {Request} from "../Request/Request.js"

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
        <p>${response.phone}</p>
        <p>${response.email}</p>
      `
    },2000)

    localStorage.clear()
    Array.from(this.formInput).forEach(el=>{
      el.setAttribute('value', '')
      el.value = ''
    })
  }

  changeValue() {
    function getStorage(el) {
      let key = el.name ? el.name : el.target.name
      let result = localStorage.getItem(key) === null ? '' : localStorage.getItem(key)
      return result
    }

    Array.from(this.formInput).forEach(el =>{
      el.value = getStorage(el)
      // выставляю атрибут value у инпут для внешки
      el.setAttribute('value', getStorage(el))

      el.addEventListener('input', (e)=>{
        // validation
        let text = getStorage(e)
        if (!!e.data) {
          text += e.data
          e.target.setAttribute('value', text)
        }
        localStorage.setItem(e.target.name, e.target.value)
      })

      el.addEventListener('change', (e) => {
        e.target.setAttribute('value', getStorage(e))
        data[e.target.name] = e.target.value
      })
    } )
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

    this.changeValue()
  }
}

