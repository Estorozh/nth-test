export class Router {
  constructor(selector, routes) {
      if (!selector) {
          throw new Error('Please provide selector in Router')
      }
      this.el = document.querySelector(selector)
      this.routes = routes
      this.page = null
      this.changePageHandler = this.changePageHandler.bind(this)
      this.init()
  }

  init() {
      window.addEventListener('hashchange', this.changePageHandler)
      this.changePageHandler()
  }

  changePageHandler() {
      if (this.page) {
          this.page.destroy()
      }
      this.el.innerHTML = ""

      const Page = ActiveRoute.path.includes('form') ? this.routes.form : this.routes.about
      this.page = new Page(ActiveRoute.param)

      this.el.append(this.page.getRoot())

      this.page.afterRender()
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
} 

class ActiveRoute {
  static get path() {
      return window.location.hash.slice(1)
  }

  static get param() {
      return ActiveRoute.path.split('/')[1]
  }

  static navigate(path) {
      window.location.hash = path
  }
} 

