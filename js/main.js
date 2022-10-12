'use strict'

console.log('controller')

function onInit() {
  renderPortfolio()
}

function renderPortfolio() {
  const portfolio = getPortfolio()
  var strHtmls = portfolio.map(
    (article) =>
      `
    
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a onclick="updateModal('${article.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${article.id}.jpeg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${article.name}</h4>
            <p class="text-muted">${article.title}</p>
          </div>
        </div>
            `
  )

  document.querySelector('.portfolio-articles').innerHTML = strHtmls.join('')
}
// function renderPortfolio() {
//   const portfolio = getPortfolio()
//   var strHtmls = portfolio.map(
//     (article) =>
//       `
//     <div class="row">
//         <div class="col-md-4 col-sm-6 portfolio-item">
//           <a onclick="updateModal('${article.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
//             <div class="portfolio-hover">
//               <div class="portfolio-hover-content">
//                 <i class="fa fa-plus fa-3x"></i>
//               </div>
//             </div>
//             <img class="img-fluid" src="img/portfolio/${article.id}.jpeg" alt="">
//           </a>
//           <div class="portfolio-caption">
//             <h4>${article.name}</h4>
//             <p class="text-muted">${article.title}</p>
//           </div>
//         </div>
//             `
//   )

//   document.querySelector('.portfolio-articles').innerHTML = strHtmls.join('')
// }

function updateModal(projId) {
  const currProject = getArticleById(projId)
  console.log(currProject)
  document.querySelector('.modal-body h2').innerHTML = currProject.name
  document.querySelector('.modal-body .item-intro').innerHTML =
    currProject.title
  document.querySelector(
    '.modal-body .article-img'
  ).innerHTML = `<img class="img-fluid d-block mx-auto" src="img/portfolio/${currProject.id}.jpeg" alt="">`
  document.querySelector('.modal-body p').innerHTML = currProject.desc
  document.querySelector('.modal-body .article-date').innerHTML =
    'Date :  ' + currProject.publishedAt
  document.querySelector('.modal-body .article-category').innerHTML =
    'Category : ' + currProject.labels

  document.querySelector(
    '.modal-body .git-link'
  ).innerHTML = `<a href="${currProject.url}" target="_blank"> go play</a>`
}

function onSendEmail() {
  const ADRESS = document.querySelector('.message-email').value
  const SUBJECT = document.querySelector('.message-subject').value
  const MESSAGE = document.querySelector('.message-body').value
  sendEmail(ADRESS, SUBJECT, MESSAGE)
}
