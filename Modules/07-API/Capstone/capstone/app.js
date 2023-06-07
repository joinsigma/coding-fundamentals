const hero = document.querySelector(".feed");

const CATS_API = "https://api.thecatapi.com/v1/breeds";
const imageURL = "https://cdn2.thecatapi.com/images"

window.addEventListener("load", displayCatCard);

async function getCatsData() {
  const response = await fetch(CATS_API);
  const data = await response.json();
  return data;
}

async function displayCatCard() {
  const cats = await getCatsData();
  cats.forEach((cat) => {
    const catCard = document.createElement("section");
    catCard.classList.add("card");
    catCard.innerHTML = `
      <div class="image-container">
        <img src="${imageURL}/${cat["reference_image_id"
      ]}.jpg" alt="cat" onerror="this.onerror=null; this.src='./images/missing-cat.avif'">
      </div>
      <div class="descp">
        <h3>${cat["name"]}</h3>
        <p>${cat["description"]}</p>
      </div>
      <button class="btn">Profile</button>
    
    `;
    hero.appendChild(catCard);
  });
}
