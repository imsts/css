var codeVisible = false
var codeElement = document.getElementById('hiddenCode')

function toggleCodeVisibility() {
  if (codeVisible) {
    codeElement.style.display = 'none'
    document.querySelector('button').textContent =
      'Показати код'
  } else {
    codeElement.style.display = 'block'
    document.querySelector('button').textContent =
      'Приховати код'
  }

  codeVisible = !codeVisible
}

const btn = document.querySelector('.toggleBtn')
const moveBtn = document.querySelector('.bgMove')
const fa = document.querySelector('.fa-solid')
const faMoon = document.querySelector('.fa-moon')

btn.addEventListener('click', function () {
  moveBtn.classList.toggle('active')

  fa.classList.toggle('dark')

  faMoon.classList.toggle('active')
  if (moveBtn.classList == 'active') {
    faMoon.classList.add('moon-active')
  } else {
    faMoon.classList.remove('moon-active')
  }

  if (moveBtn.classList.contains('active')) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})
