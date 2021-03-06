export function changeValue(formInput) {
  Array.from(formInput).forEach(el =>{
    setValue(el)

    el.addEventListener('input', (e)=>{
      let text = getStorage(e)
      if (!!e.data) {
        text += e.data
        e.target.setAttribute('value', text)
      }
      localStorage.setItem(e.target.name, e.target.value)
    })

    el.addEventListener('change', setValue)

    el.addEventListener('paste', (e)=> {
      let paste = e.clipboardData.getData('text')
      eventPaste(e.target, paste)
      e.preventDefault()
    })
  } )
}

function setValue(el) {
  const target = el.target || el
  const value = getStorage(target).trim()
  target.value = value
  target.setAttribute('value', value)
  localStorage.setItem(target.name, value)
}

function getStorage(el) {
  let key = el.name ? el.name : el.target.name
  let result = localStorage.getItem(key) === null ? '' : localStorage.getItem(key)
  return result
}

function eventPaste(el, text) {
  let result = text.replace((type[el.name].re || type[el.name]), (type[el.name].fn || ''))
  el.setRangeText(result)
  localStorage.setItem(el.name, el.value)
  type.switcher = false
}

const type = {
  name: new RegExp('[^a-zA-Zа-яёА-ЯЁ ]','g'),
  email: {
    re: new RegExp('[^a-z\\.\\-\\_]','ig'),
    fn: (symbol) => type.matcher(symbol, '@')
  },
  phone: {
    re: new RegExp('[^0-9]','g'),
    fn: (symbol, index) => index == 0 ? type.matcher(symbol, '+') : ''
  },
  matcher(symbol,replacementSymbol) {
    if(symbol == replacementSymbol && !type.switcher) {
      type.switcher = true;
      return replacementSymbol
    }
    return ''
  },
  switcher: false
}