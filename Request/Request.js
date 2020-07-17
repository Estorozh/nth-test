export class Request {
  constructor(form) {
    this.form = form
    this.formData = new FormData(this.form);
    this.response
  }

  checkStatus(response) {
    if(response.ok) {
      return response
    }
    this.response = new Error(response.statusText)
    throw this.response
  }

  async send() {
    let response = await fetch('request.php', {
      method: "POST",
      body: this.formData
    })
    this.checkStatus(response)
    response = await response.json()
    this.response = JSON.stringify(response)
  }

  getResponse() {
    return this.response
  }
}