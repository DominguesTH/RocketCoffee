/* Open navigation - burguer and x */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* Close navigation menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* scroll header stylle */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }
  else {
    header.classList.remove('scroll')
  }
}


/* Place carousel swiper */
const swiper = new Swiper('.swiper', {
 slidesPerView: 1,
 pagination: {
  el:'.swiper-pagination'
 },
 mousewheel: true,
 keyboard: true
})

/* ScrolReveal*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
` #home h1, #home .button, #home .image, 
#coffees .title, #coffees .card, 
#place .swiper,
#about .title, #about .text,
#contact .title, #contact .button, #contact .links,
footer .copyright, footer .social
`,{ interval: 100})

/* Back to top*/


function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  } else {
   backToTopButton.classList.remove('show')
}
}

/* When Scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
 })
