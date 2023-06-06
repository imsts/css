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
  const data = {
    cards: [
      {
        name: 'Внутрішня рамка',
        text: 'border — це CSS властивість, яка використовується для встановлення стилів внутрішньої рамки елемента',
        code: `
        .example {
          border: 1px solid #000000;
          border-width: 1px;
          border-style: solid;
          border-color: #000000;
          }
        `,
      },

      {
        name: 'Внутрішня рамка верхньої сторони',
        text: 'border-top — це CSS властивість, яка використовується для встановлення стилів внутрішньої верхньої рамки елемента',
        code: `
        .example {
          border-top: 2px dotted red;
          border-top-width: 2px;
          border-top-style: dotted;
          border-top-color: red;
          }
        `,
      },

      {
        name: 'Внутрішня рамка правої сторони',
        text: 'border-right — це CSS властивість, яка використовується для встановлення стилів внутрішньої правої рамки елемента',
        code: `
        .example {
          border-right: 3px groove blue;
          border-right-width: 3px;
          border-right-style: groove;
          border-right-color: blue;
          }
        `,
      },

      {
        name: 'Внутрішня рамка нижньої сторони',
        text: 'border-bottom — це CSS властивість, яка використовується для встановлення стилів внутрішньої нижньої рамки елемента',
        code: `
        .example {
          border-bottom: 1px dashed blue;
          border-bottom-width: 1px;
          border-bottom-style: dashed;
          border-bottom-color: blue;
          }
        `,
      },

      {
        name: 'Внутрішня рамка лівої сторони',
        text: 'border-left — це CSS властивість, яка використовується для встановлення стилів внутрішньої лівої рамки елемента',
        code: `
        .example {
          border-left: 1px dashed blue;
          border-left-width: 1px;
          border-left-style: dashed;
          border-left-color: blue;
          }
        `,
      },

      {
        name: 'Зовнішня рамка',
        text: 'outline — це CSS властивість, яка використовується для встановлення зовнішньої рамки елемента.',
        code: `
        .example {
          outline: 2px solid red;
          outline-width: 2px;
          outline-style: solid;
          outline-color: red;
          }
        `,
      },

      {
        name: 'Зсув зовнішньої рамки',
        text: 'outline-offset — це CSS властивість, яка встановлює відступ зовнішньої рамки від межі елемента',
        code: `
        .example {
          outline-offset: 5px;
          }
        `,
      },

      {
        name: 'Радіус закруглення рамки',
        text: 'border-radius — це CSS властивість, яка використовується для встановлення стилів закруглення рамки елемента',
        code: `
        .example {
          border-radius: 10% 30% 50% 70%;
          border-top-left-radius: 10%;
          border-top-right-radius: 30%;
          border-bottom-right-radius: 50%;
          border-bottom-left-radius: 70%;
          border-start-start-radius: 50%;
          border-start-end-radius: 70%;
          border-end-start-radius: 50%;
          border-end-end-radius: 70%;
          }
        `,
      },

      {
        name: 'Тінь тексту',
        text: 'text-shadow — це CSS властивість, яка дозволяє додавати тінь до тексту.',
        code: `
        h1 {
          text-shadow: 2px 2px 2px #d63384;
          }
        `,
      },

      {
        name: 'Тінь блоку',
        text: 'box-shadow — це CSS властивість, яка дозволяє додавати тінь до блоку.',
        code: `
        h1 {
          box-shadow: 5px 5px 10px 0px #d63384;
          }
        `,
      },

      {
        name: 'Висота рядка',
        text: 'line-height — це CSS властивість, яка вказує на висоту одного рядка тексту та допомагає вказати відступи між рядками тексту елемента',
        code: `
        .example {
          line-height: 1.5;
          }
        `,
      },

      {
        name: 'Вертикальне вирівнювання',
        text: 'vertical-align — це властивість CSS, яка використовується для вертикального вирівнювання елементів відносно їх батьківського тегу. Вона застосовується до лінійних елементів',
        code: `
        .example {
          vertical-align: baseline;
          }
        `,
      },

      {
        name: 'Курсор',
        text: 'cursor — це CSS властивість, яка використовується для встановлення вигляду курсора миші при наведенні на елемент.',
        code: `
        .example {
          cursor: pointer;
          }
        `,
      },
      // Other card objects
    ],
  }

  // Render the 'cssLesson11' template and pass the 'data' object
  res.render('cssLesson12', {
    layout: 'cssLesson12',
    page: {
      title: 'CSS | Lesson12',
    },
    data: data, // Pass the 'data' object to the template
  })
})
//                  ↑↑ сюди вводимо JSON дані

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/cssLesson13', function (req, res) {
  const data = {
    cards: [
      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },

      {
        name: 'Назва',
        text: 'Пояснення',
        code: `
        .example {

          }
        `,
      },
      // Other card objects
    ],
  }

  // Render the 'cssLesson11' template and pass the 'data' object
  res.render('cssLesson13', {
    layout: 'cssLesson13',
    page: {
      title: 'CSS | Lesson13',
    },
    data: data, // Pass the 'data' object to the template
  })
})
//                  ↑↑ сюди вводимо JSON дані

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
