export function changeValue(formInput) {
  function getStorage(el) {
    let key = el.name ? el.name : el.target.name
    let result = localStorage.getItem(key) === null ? '' : localStorage.getItem(key)
    return result
  }

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
      console.log('вставлены данне', e)
      afterPaste(e.target)
    })
  } )
}
