const button = document.querySelector(".button");
const input = document.querySelector(".input");
const Figure = document.querySelector(".figure");
const Name = document.querySelector(".name");
const Bio = document.querySelector(".bio");
const Joined_date = document.querySelector(".date");

const API_URL = "https://api.github.com/users";
button.addEventListener("click", getContent);

function getContent(e) {
  e.preventDefault();
  fetch(`${API_URL}/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let figure = data.avatar_url;
      let name = data.name;
      let bio = data.bio;
      let date = data.created_at;
      date=date.slice(0,10)

      Figure.setAttribute("src", figure);
      Name.innerHTML = name;
      Bio.innerHTML = bio;
      Joined_date.innerHTML = date;
    })
    .catch((error) => console.log(error));
}
