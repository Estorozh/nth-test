import {Page} from "./TemplatePage.js"
import { aboutHTML } from "./components/aboutHTML.js"

export class About extends Page {
  getRoot() {
    const div = document.createElement('div')
    div.classList.add('about')
    div.innerHTML = aboutHTML
    return div
  }
}