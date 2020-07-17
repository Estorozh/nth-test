export function changeValue(formInput) {
  Array.from(formInput).forEach(el =>{
    el.value = getStorage(el)
    // выставляю атрибут value у инпут для внешки
    el.setAttribute('value', getStorage(el))

    el.addEventListener('input', (e)=>{
      // validation
      let text = getStorage(e)
      if (!!e.data) {
        text += e.data
        e.target.setAttribute('value', text)
      }
      localStorage.setItem(e.target.name, e.target.value)
    })

    el.addEventListener('change', (e) => {
      e.target.setAttribute('value', getStorage(e))
    })

    el.addEventListener('paste', (e)=> {
      let paste = e.clipboardData.getData('text')

      eventPaste(e.target, paste)

      e.preventDefault()
    })
  } )
}

function getStorage(el) {
  let key = el.name ? el.name : el.target.name
  let result = localStorage.getItem(key) === null ? '' : localStorage.getItem(key)
  return result
}

const type = {
  name: new RegExp('[^a-zA-Zа-яёА-ЯЁ ]','g'),
  email: {
    re: new RegExp('[^a-z\\.\\-\\_]','ig'),
    fn(symbol) {
      if(symbol == '@' && !type.email.at) {
        type.email.at = true;
        return '@'
      }
      return ''
    },
    at: false
  },
  phone: new RegExp('')
}

function eventPaste(el, text) {
  let result = text.replace((type[el.name].re || type[el.name]), (type[el.name].fn || ''))
  el.setRangeText(result)
  localStorage.setItem(el.name, el.value)
  type.email.at = false
}