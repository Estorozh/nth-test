import {Page} from "./Routing/Page.js"

export class Form extends Page {
  getRoot() {
    const form = document.createElement('form')
    form.classList.add('form')
    form.innerHTML = `
        <input type="text" class="formField" name="fullName" placeholder="ФИО">
        <input type="text" class="formField" name="email" placeholder="example@gmail.com">
        <input type="text" class="formField" name="phone" placeholder="89999999999">
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
    console.log(form, formData.get('phone'))
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
  }
}

