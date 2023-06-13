var currentUrl = window.location.pathname // Отримуємо поточний URL-адрес

var navLinks = document.querySelectorAll('.nav-link') // Вибираємо всі елементи з класом .nav-link

for (var i = 0; i < navLinks.length; i++) {
  var linkUrl = navLinks[i].getAttribute('href') // Отримуємо URL-адресу кожного посилання

  if (linkUrl === currentUrl) {
    navLinks[i].classList.add('active') // Додаємо клас .active до активного елемента
    break // Зупиняємо цикл, якщо знайдено активний елемент
  }
}

var toggleBtn = document.getElementById('toggleBtn')
var body = document.body

toggleBtn.addEventListener('change', function () {
  if (toggleBtn.checked) {
    body.classList.add('dark')
  } else {
    body.classList.remove('dark')
  }
})
