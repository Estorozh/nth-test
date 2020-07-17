import {Page} from "./TemplatePage.js"

export class Form extends Page {
  constructor() {
    super()
    this.formInput = document.getElementsByClassName('formField__input')
  }

  getRoot() {
    const form = document.createElement('form')
    form.classList.add('form')
    form.innerHTML = `
      <div class="formField">
        <input type="text" class="formField__input" name="fullName" required>
        <span class="bar"></span>
        <label class="formField__label">ФИО</label>
      </div>
      <div class="formField">
        <input type="text" class="formField__input" name="email" required>
        <span class="bar"></span>
        <label class="formField__label">Электронная почта</label>
      </div>
      <div class="formField">
        <input type="text" class="formField__input" name="phone" required>
        <span class="bar"></span>
        <label class="formField__label">Номер телефона</label>
      </div>
      <button type="submit" class="btn btn-bubbles">Отправить</button>
    `;
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

  send(event, form) {
    event.preventDefault()
    let formData = new FormData(form); // должен автоматически забрать в себя объекты формы с полем name
    // formData.set(name, value)
    // formData.has(name)
    const formResponse = document.querySelector('.formResponse')
    const now = Date.now()
    const date =  new Date(now).toLocaleString()
    const formRequest = `<h3>Запрос был отправлен в ${date}</h3>`
    formResponse.innerHTML = formRequest;

    localStorage.clear()
    Array.from(this.formInput).forEach(el=>el.value="")
  }

  afterRender() {
    let btnBubbles = document.querySelector(".btn-bubbles")
    if (btnBubbles){
      btnBubbles.addEventListener('click', (e)=> {this.animate(e);})
    }

    let form = document.querySelector('form')
    if (form) {
      form.addEventListener('submit', (event)=>{this.send(event, form)})
    }

    Array.from(this.formInput).forEach(el =>{
      el.value = localStorage.getItem(el.name)
      el.addEventListener('input', (e)=>{localStorage.setItem(e.target.name, e.target.value)})
    } )
  }
}

