URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const cards = document.querySelector(".cards");
let mainContent = "";
var id = localStorage.getItem("itempage");
let ItemImg = "";
let ItemName = "";
let price = "";
let ItemContent = "";
let ItemID = "";
let Itemrating = "";
let ItemDescription = "";
// let number = "";
// let sum = 0;
// var convertedPrice = 0;

function getFromLocalStorage() {
  const reference1 = localStorage.getItem("itempage");
  // const reference2 = localStorage.getItem("id");

  if (reference1) {
    ItemContent = JSON.parse(reference1);
    price = (ItemContent.price * 100).toFixed(2);
    ItemImg = ItemContent.image_link;
    ItemName = ItemContent.name;
    ItemID = ItemContent.id;
    Itemrating = ItemContent.rating;
    ItemDescription = ItemContent.description;
    // number = 1;
    //   receipt.innerHTML += ItemContent;
  }

  // if (reference2) {
  //   id = JSON.parse(reference2);
  //   deletedList.innerHTML += deleted;
  // }
  getData(price, ItemImg, ItemID, ItemName, Itemrating, ItemDescription);
}

function getData(
  price,
  ItemImg,
  ItemID,
  ItemName,
  Itemrating,
  ItemDescription
) {
  mainContent += `
  <div class="card")">
  <a>
    <div class="image">
      <img src=${ItemImg} />
    </div>
  </a>

  <div class="upper__content">
    <div class="title">${ItemName}</div>
    <br/>
    <div class="description">${ItemDescription}</div>
    <br/>
    <div class="tag">Rating: ${checkRating(Itemrating)}</div>
    <br/>
    <br/>
    <div class="free">This product is free shipping. No more than one order is allowed.</div>
  </div>

  <div class="lower__content">
    <div class="price">
      RM <span class="ringgit">${price}</span>
    </div>
    <button
      onClick="addToCart()"
      type="button"
      class="button"
    >
      Add to cart
    </button>
  </div>
</div>
    `;
  cards.innerHTML = mainContent;
  // search.addEventListener('focus', searchItem)
  // const card = document.querySelector(".card")
}

function checkRating(rating) {
  if (rating === null) return "4.8";
  else return rating;
}

function addToCart(data_id, data_price, data3) {
  // console.log(data_id, data_price)

  const reference = localStorage.getItem("itempage");
  // const reference2 = localStorage.getItem("id");

  if (reference) {
    ItemContent = JSON.parse(reference);
    ItemID = ItemContent.id;
    localStorage.setItem(ItemID, JSON.stringify(ItemContent));
  }  

}


getFromLocalStorage();
// localStorage.removeItem('itempage');

window.onload = function () {
  const checkoutBtn = document.querySelector("#checkoutBtn");
  checkoutBtn.addEventListener("click", gotoCheckout);
};

function gotoCheckout(e) {
  e.preventDefault();
  localStorage.removeItem("itempage");
  // console.log('bb')
  window.location.href = "./checkout.html";
}
