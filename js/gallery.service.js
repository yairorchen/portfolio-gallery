'use strict'

console.log('gallery service')

var gProjects

function createProjects() {
  const projects = [
    {
      id: 'mine-sweeper',
      name: 'mine sweeper',
      title: 'save yourself from the mine!',
      desc: makeLorem(15),
      url: 'https://yairorchen.github.io/mine-sweeper-casep22-step1/',
      publishedAt: 'september 2022',
      labels: ['matrixes', 'keyboard event'],
    },
    {
      id: 'touch-nums',
      name: 'touch numbers',
      title: 'touch numbers by place!',
      desc: makeLorem(15),
      url: 'https://yairorchen.github.io/touch-num/',
      publishedAt: 'september 2022',
      labels: ['matrixes', 'keyboard event'],
    },
    {
      id: 'book-shop',
      name: 'book shop',
      title: 'manage your book shop!',
      desc: makeLorem(15),
      url: 'https://yairorchen.github.io/book-shop/',
      publishedAt: 'september 2022',
      labels: ['matrixes', 'keyboard event'],
    },
  ]
  gProjects = projects
  return projects
}

function getPortfolio() {
  createProjects()
  return gProjects
}

function getArticleById(articleId) {
  var article = gProjects.find((article) => articleId === article.id)
  return article
}

function sendEmail(adress, subject, message) {
  var strEMAIL =
    'https://mail.google.com/mail/?view=cm&fs=1&to=' +
    adress +
    '&su=' +
    subject +
    '&body=' +
    message +
    ''
  console.log(JSON.stringify(strEMAIL))
  console.log(strEMAIL)
}
