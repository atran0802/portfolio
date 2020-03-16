const navSlide = () => {
  const closed = document.querySelector('.hamburger')
  const nav = document.querySelector('.nav-menu')

  closed.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    closed.classList.toggle('nav-close')
  })
}

navSlide()