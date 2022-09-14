const btn = document.querySelector('.btn')

//escharemos el click event
btn.onclick = function (e) {
  //creamos el span que ya veran el efecto que hara
  let ripple = document.createElement('span')

  //añadimos la clase "ripple" al span
  ripple.classList.add('ripple')

  //agregamos el span al boton
  this.appendChild(ripple)

  //y esto hara que aparezca en diferentes posiciones
  // cuando clickeamos
  let x = e.clientX - e.target.offsetLeft

  let y = e.clientY - e.target.offsetTop

  //posicionamos el span
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  //agregamos un timeout para darle un efecto de delay

  setTimeout(() => {
    ripple.remove()
  }, 2000)
}
