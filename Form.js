import {Page} from "./Routing/Page.js"

export class Form extends Page {
  getRoot() {
    const now = Date.now().toString()
    const div = document.createElement('div')
    div.innerHTML = `
        <h1>сейчас - ${now}</h1>
        <a href="#" class="btn btn-bubbles">Отправить</a>
    `
    return div
  }
}