export class Request {
  constructor(form) {
    this.formData = new FormData(form);
    this.response = {}
    this.errServ = 'Ошибка при обращению к файлу на сервере.<br> Возможно такого файла не существует.'
  }  

  send() {
    fetch('https://ahilis.ru/request.php', {
          method: "POST",
          body: this.formData
        })
        .then(this.checkStatus)
        .then(res => res.json())
        .then(data => this.response = data)
        .catch((err) => {
            this.response.err = this.errServ;
            console.log('Error: ' + err.message);
        })
  }

  checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
        return res;
    } 
    this.response.err = this.errServ;
    throw this.response
  }

  getResponse() {
    return this.response
  }
}