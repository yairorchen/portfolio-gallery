'use strict'

console.log('controller')
console.log(document.querySelector('.portfolio-articles'))

renderPortfolio()
function renderPortfolio() {
  const portfolio = getPortfolio()
  console.log(portfolio)
  var strHtmls = portfolio.map(
    (article) => `
    <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${article.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${article.id}.png" alt="">
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
renderModals()
function renderModals() {
  const portfolio = getPortfolio()
  console.log(portfolio)
  var strHtmls = portfolio.map(
    (article) => `
      <div class="portfolio-modal modal fade" id="portfolioModal${article.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${article.name}</h2>
                <p class="item-intro text-muted">${article.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${article.id}.png" alt="">
                <p>${article.desc}</p>
                <ul class="list-inline">
                  <li class="article-date" >Date:${article.publishedAt}</li>
                  <li>Client: Threads</li>
                  <li class="article-category">Category:${article.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            `
  )

  document.querySelector('.modals-container').innerHTML = strHtmls.join('')
}

// document.querySelector('.modal-body h2').innerHTML=article.name
// //                 <h2>${article.name}</h2>

// document.querySelector('.modal-body p .item-intro').innerHTML=article.title
// //                 <p class="item-intro text-muted">${article.title}</p>

// document.querySelector('.modal-body p .article-img').innerHTML =
//   //                 <img class="img-fluid d-block mx-auto" src="img/portfolio/${article.id}.png" alt="">

//   document.querySelector('.modal-body p').innerHTML = article.desc
// //                 <p>${article.desc}</p>

// document.querySelector('.modal-body li .article-date').innerHTML = article.publishedAt
// //                   <li>Date:${article.publishedAt}</li>

// document.querySelector('.modal-body li .article-category').innerHTML =article.labels
// //                   <li>Category:${article.labels}</li>
