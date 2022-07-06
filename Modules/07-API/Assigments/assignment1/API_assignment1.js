// import fetch from "./node-fetch"

function test(e){
    e.preventDefault()
    console.log('A')

}

const button = document.querySelector('.button')
const text__content = document.querySelector('.content')
const text__author = document.querySelector('#author')

const API_URL = "https://api.quotable.io/random"
button.addEventListener('click', getContent)


function getContent(e) {
  e.preventDefault()
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      let content = data.content
      let author = data.author

      console.log(content, author)

      text__content.innerHTML = content
      text__author.innerHTML = author
    })
    .catch((error) => console.log(error))
}
