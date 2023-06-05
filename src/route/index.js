// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/cssLesson10', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('cssLesson10', {
    layout: 'cssLesson10',
    page: {
      title: 'CSS | Lesson10',
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/cssLesson11', function (req, res) {
  const data = {
    cards: [
      {
        name: 'Відображення',
        text: 'display — це CSS властивість, яка визначає відображення елемента на веб-сторінці',
        code: `
        .example {
          display: none;
          display: block;
          display: inline;
          display: inline-block;
        }
        `,
      },

      {
        name: 'Зовнішній відступ',
        text: 'margin — це CSS властивість, яка задає зовнішні відступи елементу, відносно сусідніх елементів',
        code: `
        .example {
          margin: 10px;
        }
        `,
      },

      {
        name: 'Внутрішній відступ',
        text: 'padding — це CSS властивість, яка задає відступи від країв батьківського елементу (внутрішні відступи)',
        code: `
        .example {
          padding: 20px;
        }
        `,
      },

      {
        name: 'Ширина',
        text: 'width - це властивість CSS, яка визначає ширину елемента. Ця властивість не застосовується до лінійних елементів',
        code: `
        .example {
          width: 250px;
        }
        `,
      },

      {
        name: 'Висота',
        text: 'height - це CSS властивість, яка визначає висоту елемента.',
        code: `
        .example {
          height: max-content;
        }
        `,
      },

      {
        name: 'Мінімальна ширина',
        text: 'min-width — це властивість CSS, яка встановлює мінімальну ширину елемента.',
        code: `
        .example {
          min-width: 150px;
        }
        `,
      },

      {
        name: 'Максимальна ширина',
        text: 'max-width — це властивість CSS, яка встановлює максимальну ширину елемента.',
        code: `
        .example {
          max-width: 300px;
        }
        `,
      },

      {
        name: 'Мінімальна висота',
        text: 'min-height — це властивість CSS, яка встановлює мінімальну висоту елемента.',
        code: `
        .example {
          min-height: 150px;
        }
        `,
      },

      {
        name: 'Максимальна висота',
        text: 'max-height — це властивість CSS, яка встановлює максимальну висоту елемента.',
        code: `
        .example {
          max-height: 300px;
        }
        `,
      },

      {
        name: 'Розмір коробки',
        text: 'box-sizing — це CSS властивість, яка визначає як розраховувати розмір елемента',
        code: `
        .example {
          box-sizing: content-box;
        }
        `,
      },
      // Other card objects
    ],
  }

  // Render the 'cssLesson11' template and pass the 'data' object
  res.render('cssLesson11', {
    layout: 'cssLesson11',
    page: {
      title: 'CSS | Lesson11',
    },
    data: data, // Pass the 'data' object to the template
  })
})
//                  ↑↑ сюди вводимо JSON дані

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/cssLesson12', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('cssLesson12', {
    layout: 'cssLesson12',
    page: {
      title: 'CSS | Lesson12',
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
