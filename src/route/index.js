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

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ сюди вводимо назву файлу з container
  res.render('template-1', {
    layout: 'template-1',
    page: {
      title: 'template-1 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    hero: {
      title: 'Pricing',
      text: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
    },
    plans: [
      {
        name: 'Free',
        price: 0,
        features: [
          '10 users included',
          '2 GB of storage',
          'Email support',
          'Help center access',
        ],
        button: 'Sign up for free',
      },
      {
        name: 'Pro',
        price: 15,
        features: [
          '20 users included',
          '4 GB of storage',
          'Priority email support',
          'Help center access',
        ],
        button: 'Get started',
      },
      {
        name: 'Enterprise',
        price: 30,
        features: [
          '30 users included',
          '15 GB of storage',
          'Phone and email support',
          'Help center access',
        ],
        button: 'Contact us',
      },
    ],
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-2', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-2', {
    layout: 'template-2',
    page: {
      title: 'template-2 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    hero: {
      title: 'Pricing',
      text: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
      button: {
        text: 'Get started',
        url: 'https://example.com/get-started',
      },
    },
    preview: [
      {
        date: 'Oct 24',
        title: 'Latest post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 1,
            text: 'World',
          },
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 26',
        title: 'Featured story',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 2,
            text: 'Sport',
          },
        ],
      },
      {
        date: 'Oct 28',
        title: 'Popular post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 30',
        title: 'Trending topic',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 4,
            text: 'Fashion',
          },
        ],
      },
    ],
    categories: [
      {
        id: 1,
        text: 'World',
      },
      {
        id: 2,
        text: 'Sport',
      },
      {
        id: 3,
        text: 'Hot',
      },
      {
        id: 4,
        text: 'Fashion',
      },
    ],
    news: [
      {
        title: 'New blog post',
        date: 'February 14',
        author: 'John',
        description:
          'This blog post discusses various topics related to web development and design, including best practices and emerging trends.',
      },
      {
        title: 'Latest blog post',
        date: 'March 1',
        author: 'Emily',
        description:
          'This blog post covers a range of topics, from productivity tips to personal development strategies, with the aim of helping readers lead more fulfilling lives.',
      },
      {
        title: 'Popular blog post',
        date: 'April 7',
        author: 'David',
        description:
          'This blog post focuses on the importance of networking and building relationships in business, providing tips and insights for professionals of all levels.',
      },
      {
        title: 'Top blog post',
        date: 'May 12',
        author: 'Sophie',
        description:
          'This blog post examines the latest trends and innovations in the field of marketing, with a particular focus on social media and content marketing strategies.',
      },
    ],
    about:
      'We are a dynamic team of experienced journalists, dedicated to delivering the latest news and up-to-date analysis on a range of topics. With our finger on the pulse of global affairs, we strive to provide an objective and insightful perspective on the events shaping our world. Our team comprises individuals with diverse backgrounds and expertise, allowing us to provide comprehensive coverage across all sectors.',
    archive: [
      {
        text: 'March 2014',
        url: 'https://example.com/march-2014',
      },
      {
        text: 'February 2014',
        url: 'https://example.com/february-2014',
      },
      {
        text: 'January 2014',
        url: 'https://example.com/january-2014',
      },
      {
        text: 'December 2013',
        url: 'https://example.com/december-2013',
      },
      {
        text: 'November 2013',
        url: 'https://example.com/november-2013',
      },
      {
        text: 'October 2013',
        url: 'https://example.com/october-2013',
      },
      {
        text: 'September 2013',
        url: 'https://example.com/september-2013',
      },
    ],
    social: [
      {
        text: 'Instagram',
        url: 'https://www.instagram.com/',
      },
      {
        text: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        text: 'Google',
        url: 'https://www.instagram.com/',
      },
    ],
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
