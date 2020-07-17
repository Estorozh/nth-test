export const formHTML = `
<div class="formField">
  <!-- RegExpом предусмотрел мне кажется все возможные варианты, например, Анна-Мария или Жан-Клод без тройных вложенностей. -->
  <input type="text" 
    class="formField__input" 
    name="name" 
    pattern="^[A-ZА-ЯЁ]{1}[a-zа-яё]+(\\s[A-ZА-ЯЁ]{1}[a-zа-яё]+){2}"
    title="Фио - должно содержать только фамилию имя и отчество, должны быть указаны полностью (не инициалы), должны быть написаны с заглавной буквы и состоять только из букв"
    autocomplete="off"
    value=""
    required 
  >
  <span class="bar"></span>
  <label class="formField__label">ФИО</label>
</div>
<div class="formField">
  <input type="text" 
    class="formField__input" 
    name="email"  
    pattern="^[a-zA-Z0-9]{1,}(([.\\-_]{1})?[a-zA-Z0-9]+){1,}@gmail.com$" 
    title="Email должен быть в целом валиден и принадлежать домену gmail.com. Допустимо использовать только латинские буквы, цифры, знак подчеркивания, точку и минус. Почта должна начинаться с буквы или цифры. Нельзя использовать спецсимволы подряд."
    maxlength="254"
    value=""
    required
  >
  <span class="bar"></span>
  <label class="formField__label">Электронная почта</label>
</div>
<div class="formField">
  <input type="text" 
    class="formField__input" 
    name="phone" 
    required 
    value=""
  >
  <span class="bar"></span>
  <label class="formField__label">Номер телефона</label>
</div>
<button type="submit" class="btn btn-bubbles">Отправить</button>
`;