var currentUrl = window.location.pathname // Отримуємо поточний URL-адрес

var navLinks = document.querySelectorAll('.nav-link') // Вибираємо всі елементи з класом .nav-link

for (var i = 0; i < navLinks.length; i++) {
  var linkUrl = navLinks[i].getAttribute('href') // Отримуємо URL-адресу кожного посилання

  if (linkUrl === currentUrl) {
    navLinks[i].classList.add('active') // Додаємо клас .active до активного елемента
    break // Зупиняємо цикл, якщо знайдено активний елемент
  }
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
