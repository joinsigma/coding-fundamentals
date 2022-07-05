// // URL = "https://partner.shopeemobile.com/api/v1/item/get";
// URL = "https://shopee.com.my/api/v4/pages/is_short_url/?path=Samsung-Galaxy-S22-5G-(S901)-(8GB-128GB-8GB-256GB)-i.37587911.15346388251";
// //https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=xxxxxx&token=xxxxxxxxxxxx&redirect=xxxxxx.com

const cards = document.querySelector(".cards");
const receipt = document.querySelector(".receipt");
const search = document.querySelector("#input");

let imageArray = [];
let checkoutImg = "";
let checkoutName = "";
let mainContent = "";
let checkoutContent = "";
var index = "";
var cardsLength = 0;
var number = 0

URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    // cardsLength = data.length
    // console.log(cardsLength)
    data.forEach(getData);
    // console.log(data)
    getData(data);
  })
  .catch((error) => console.log(error));

function getData(data) {
  mainContent += `
    <div class="card">
      <a>
        <div class="image"  onclick="Item(${data?.id})">
          <img
            src=${data?.image_link}
          />
        </div>
      </a>
  
      <div class="upper__content"  onclick="Item(${data?.id})">
        <div class="title">
          ${data?.name}
        </div>
        <div class="tag">Rating: ${checkRating(data)}</div>
      </div>
  
      <div class="lower__content">
        <div class="price">RM <span class="ringgit">${(
          data?.price * 100
        ).toFixed(2)}</span></div>
        <button onClick="addToCart(${data?.id}, ${
    data?.price
  })" type="button" class="button">Add to cart</button>
      </div>
    </div>
    `;
  cards.innerHTML = mainContent;
  // search.addEventListener('focus', searchItem)
  // const card = document.querySelector(".card")
}

function Item(id) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(id);
      index = data.findIndex((object) => object.id === id);
      localStorage.setItem("itempage", JSON.stringify(data[index]));
      window.location.href = "./item.html";
    })
    .catch((error) => console.log(error));
}

function checkRating(data) {
  if (data?.rating === null) return "4.8";
  else return data?.rating;
}

function addToCart(data_id, data_price, data3) {


  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
   
      getProduct(data_id, data);
      
      data[index].currency = 1

      localStorage.setItem(data_id, JSON.stringify(data[index]));

    })
    .catch((error) => console.log(error));
}

function getProduct(data_id, data) {
  index = data.findIndex((object) => object.id === data_id);

}

// function getImg(data) {
//   // console.log(data)
//   // return data.forEach((object) =>
//   //   // data.id === id?checkoutImg = object.image_link:null
//   // // })
//   return (checkoutImg = data.image_link);
// }

// function getName(data, id) {
//   // return data.forEach((object) => (checkoutName = object.name));
// }

window.onload = function () {
  const checkoutBtn = document.querySelector("#checkoutBtn");
  checkoutBtn.addEventListener("click", gotoCheckout);
};

function gotoCheckout(e) {
  e.preventDefault();
  // console.log('bb')
  localStorage.removeItem('itempage');
  window.location.href = "./checkout.html";
}

// function searchItem(data){
//    // Declare variables
//    var input, filter, title, ul, li, a, i, txtValue;
//    input = document.getElementById('input');
//    filter = input.value.toUpperCase();
//    title = document.querySelector(".title")
//   //  ul = document.getElementById("myUL");
//   //  li = ul.getElementsByTagName('li');
//   console.log(data?.name)

//    // Loop through all list items, and hide those who don't match the search query
//   //  for (i = 0; i < 54; i++) {
//   //    a = li[i].getElementsByTagName("a")[0];
//   //    txtValue = a.textContent || a.innerText;
//   //    if (txtValue.toUpperCase().indexOf(filter) > -1) {
//   //      li[i].style.display = "";
//   //    } else {
//   //      li[i].style.display = "none";
//   //    }
//   //  }
// }
