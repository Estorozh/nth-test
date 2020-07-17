export class Request {
  constructor() {
    super()
    this.form = form
    this.formData = new FormData(this.form);
  }

  send() {
    let request = new XMLHttpRequest();
    request.open('POST', 'request.php');
    request.addEventListener('readystatechange', function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        for (var key in data) {
          console.log(key, data[key])
        }

      }
    })
    console.log(this.formData.get('email'))
    // отправляем запрос на сервер
    request.send(this.formData);
  }
}