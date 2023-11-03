const button = document.querySelector('.fa-bars')
const sidebar = document.querySelector('.sidebar')
const arrows = document.querySelectorAll('.arrow')

button.addEventListener('click', () => {
  sidebar.classList.toggle('close')
})

for (const arrow of arrows) {
  arrow.addEventListener('click', e => {
    const arrowParent = e.target.parentElement.parentElement
    arrowParent.classList.toggle('show')
  })
}