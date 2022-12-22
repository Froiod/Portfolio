const menuBtn = document.getElementById('menu-btn')
const menuItem = document.getElementById('menu')
const aboutBtn = document.getElementById('aboutBtn')
const btnDown = document.getElementById('btnDown')
const about = document.getElementById('about')
const hero = document.getElementById('hero')
const popUp = document.getElementById('popUp')
const pop = document.getElementById('pop')


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  menuItem.classList.toggle('hidden')
  menuItem.classList.toggle('flex')
})
menuItem.addEventListener('click', () => {
  menuItem.classList.toggle('hidden')
  menuItem.classList.toggle('flex')
  menuBtn.classList.toggle('open')
})

aboutBtn.addEventListener('click', () => {
  hero.classList.toggle('upDown')
  about.classList.toggle('downUp')
  about.classList.toggle('-z-20')
})
btnDown.addEventListener('click', () => {
  hero.classList.toggle('upDown')
  about.classList.toggle('downUp')
  about.classList.toggle('-z-20')
})

popUp.addEventListener('click', () => {
  hero.classList.toggle('upDown')
  about.classList.toggle('downUp')
  about.classList.toggle('-z-20')
})

pop.addEventListener('click', () => {
  hero.classList.toggle('upDown')
  about.classList.toggle('downUp')
  about.classList.toggle('-z-20')
})
