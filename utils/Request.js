export class Request {
  constructor(form) {
    this.formData = new FormData(form);
    this.response = {}
  }

  type = {
    errServ: 'Ошибка при обращению к файлу на сервере. Возможно такого файла не существует.',
    template: {
      name: '',
      email: '',
      phone: '',
    }
  }

  checkStatus(response) {
    if(response.status == 200) {
      return response
    }
    this.response = {...{err: (response.status ? response.statusText : this.type.errServ)}}
    throw this.response.err 
  }

  async send() {
    try {
      let response = await fetch('https://ahilis.ru/request.php', {
        method: "POST",
        body: this.formData
      })
      this.checkStatus(response)
      this.response = await response.json()
    } catch {
      this.response.err = this.type.errServ; 
      throw this.response.err;
    }
  }

  getResponse() {
    return this.response
  }
}