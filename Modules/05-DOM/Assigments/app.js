//link
const add__button = document.querySelector('.add__button')
const notification_hidden = document.querySelector('.notification__hidden')
const show = document.querySelector('.show')
const card__cta = document.querySelector('.card__cta')

//show notification if button is clicked
add__button.addEventListener('click', addItem)

function addItem(e){
    e.preventDefault()

    notification_hidden.classList.add('show')

}

//close notification if 'X'' button is clicked
card__cta.addEventListener('click', closeWindow)

function closeWindow(e){
    e.preventDefault()

    notification_hidden.classList.remove('show')
}
