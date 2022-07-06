const button = document.querySelector(".button");
const input = document.querySelector(".input");
const upper = document.querySelector(".upper")
const Name = document.querySelector(".name")
const Age = document.querySelector(".age")
const Hobby = document.querySelector(".hobby")
var content = ''

{/* <script src="https://gist.github.com/Jacksonant/0ff9a7407914c7d3575ee5a4e67bb422.js"></script> */}
const API_URL = "https://api.github.com/gists/0ff9a7407914c7d3575ee5a4e67bb422";
button.addEventListener("click", getContent);

function getContent(e) {
  e.preventDefault();
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let file = data?.files["me.json"]?.content
      file = JSON.parse(file)
      console.log(file)

      let name = file.name
      let age = file.age
      let hobby = file.hobby
      console.log(name)
      console.log(age)
      console.log(hobby)

      content = `
      <h1 class="name"><span>Name: ${name}</span></h1>
      <p class="age">Age: ${age}</p>
      <ul class="hobby">
        <li>${hobby[0]}</li>
        <li>${hobby[1]}</li>
        <li>${hobby[2]}</li>
      </ul>
      `
      upper.innerHTML = content
    })
    .catch((error) => console.log(error));
}
