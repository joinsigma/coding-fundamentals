URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

var id = localStorage.getItem("id");
const receipt = document.querySelector(".receipt");
const sumFig = document.querySelector(".sumFig");
let checkoutImg = "";
let checkoutName = "";
let price = "";
let checkoutContent = "";
let number = "";
let sum = 0;
var convertedPrice = 0;
var itemID= ''
var index  = ''
var total = ''

function gotoCheckout() {
  // if (input.value === 0)  ownNumber = number
  // data_id = id
  if(number !== 0){
  checkoutContent = `
    <div class="card">
            <div class="upper__content">
              <a>
                <div class="image">
                  <img
                    src=${checkoutImg}
                  />
                </div>
              </a>
  
              <div class="content">
                <div class="title">
                  ${checkoutName}
                </div>
                <div class="tag">Free shipping</div>
                <div class="number">
                  <button type="button" onclick="decrease(${itemID}, ${number})">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAM1BMVEX///8dHRsDAwCEhIQAAAD19fX5+fne3t5OTk45OTmHh4eurq2dnZwPDwxkZGPs7OwUFBHtYr+bAAAAeklEQVR4nO3USQ7CMBBFwRg6iTPn/qeFPV4hpDZS1QmevuweBgAAAAAAAAAAAAB+ZdrWZ551m9pZc4145ImocytrXKLkimVsdO3ZWe+wvTHXeWRnleP8HOyqd3ZWuev1N3v1+r66/Y+93q9u7z0AAAAAAAAAAAAAX3gBLQAKcHaWwQwAAAAASUVORK5CYII="
                    />
                  </button>
                  <input type="text" id="text" value=${number} />
                  <button type="button" onclick="increase(${itemID}, ${number})">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAG1BMVEX///8AAABzc3N+fn6lpaV6enp2dnZvb28zMzMS9ParAAAAmElEQVR4nO3aywqFIBRA0fLZ/3/xnUTOEqJbB1p7LLhGRxGXRZIkSZIknVRq3qvlVUhfj/qrkDQgCQQEBAQEBAQEBAQEBAQEBOTB2oC0P25TejqvbQOytcnifv1Nqa63Vi9D8r2QDAIC8j1ImIEWZsTPe+jQmxfmGgACAgICAgICAgICAgICAvI1SJhPk2G+kUqSJEmSFL4fnmcI1ZPgmx0AAAAASUVORK5CYII="
                    />
                  </button>
                </div>
              </div>
            </div>
  
            <div class="lower__content">
              <div class="price">
                Total price: RM <span class="ringgit">${total = price * number}</span>
              </div>
            </div>
          </div>
    `;
  receipt.innerHTML += checkoutContent;

  convertedPrice = +total;
  sum += convertedPrice;
  }
}

function decrease(itemID, number) {
  number--;
  SaveNumberChange(itemID, number);
  if (number ===0){
    localStorage.removeItem(itemID)
    location.reload()
  }
}

function increase(itemID, number) {
  number++;
  SaveNumberChange(itemID, number);
  
}

function SaveNumberChange(itemID, number) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      getProduct(itemID, data);
      console.log(data[index]);

      data[index].currency = number;

      localStorage.setItem(itemID, JSON.stringify(data[index]));
      location.reload()
    })
    .catch((error) => console.log(error));
}

function getProduct(id, data) {
  index = data.findIndex((object) => object.id === id);
  console.log(index)
}

function getFromLocalStorage(id) {
  const reference1 = localStorage.getItem(id);
  // const reference2 = localStorage.getItem("id");

  if (reference1) {
    checkoutContent = JSON.parse(reference1);
    price = (checkoutContent.price * 100).toFixed(2);
    checkoutImg = checkoutContent.image_link;
    checkoutName = checkoutContent.name;
    number = checkoutContent.currency;
    itemID = checkoutContent.id
    //   receipt.innerHTML += checkoutContent;
  }

  // if (reference2) {
  //   id = JSON.parse(reference2);
  //   deletedList.innerHTML += deleted;
  // }
}

function listAllItems() {
  for (i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    // console.log(key);
    getFromLocalStorage(key);
    gotoCheckout();
    sumFig.innerHTML = sum.toFixed(2);
    // alert(localStorage.getItem(key));
  }
}

// window.onload();
listAllItems();
