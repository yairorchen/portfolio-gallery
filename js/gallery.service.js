'use strict'

console.log('gallery service')

var gProjects

function addProjects() {
  const projects = [
    {
      id: 'mine-sweeper',
      name: 'mine sweeper',
      title: 'save yourself from the mine!',
      desc: makeLorem(15),
      url: 'projs/mine-sweeper',
      publishedAt: 'september 2022',
      labels: ['matrixes', 'keyboard event'],
    },
    {
      id: 'touch-nums',
      name: 'touch numbers',
      title: 'touch numbers by place!',
      desc: makeLorem(15),
      url: 'projs/touch-nums',
      publishedAt: 'september 2022',
      labels: ['matrixes', 'keyboard event'],
    },
    {
      id: 'book-shop',
      name: 'book shop',
      title: 'manage your book shop!',
      desc: makeLorem(15),
      url: 'projsq/book-shop',
      publishedAt: 'september 2022',
      labels: ['matrixes', 'keyboard event'],
    },
  ]
  gProjects = projects
  return projects
}

function getPortfolio() {
  addProjects()
  console.log(gProjects)
  return gProjects
}

getPortfolio()
