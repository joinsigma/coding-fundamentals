// import fetch from "./node-fetch"

// const main = document.querySelector(".main");
const content = document.querySelector(".content");
// const card = document.querySelector(".card");
// const img__container = document.querySelector(".img__container");
// const img = document.querySelector(".img");
// const nonimg__container = document.querySelector(".nonimg__container");
// const name = document.querySelector(".name");
// const cat__name = document.querySelector(".cat__name");
// const description = document.querySelector(".description");
// const text = document.querySelector(".text");
// const button = document.querySelector(".button");

const API_URL = "https://api.thecatapi.com/v1/breeds";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    let output = "";
    // let result = "";
    // let image = "";
    // let link = [];
    // let extra = "";
    // let another = "";
    // let img__src = "";

    data.forEach(getData);
    function getData(data) {

    //   function getImage(data) {
    //     result = Object.entries(data);
    //     // console.log(data.image.url)
    //     Object.keys(result).forEach((key) => {
    //       link = result[key];
    //       image = Object.values(link);

    //       if (typeof image[1] === "object") {
    //         extra = image[1];
    //       }

    //       Object.values(extra).forEach((val) => {
    //         another = val;
    //         getURL(another);
    //       });

    //       function getURL(another) {
    //         let string = "";
    //         try {
    //           string = new URL(another);
    //         } catch (_) {
    //           return false;
    //         }

    //         if (string.protocol === "https:" || string.protocol === "http:")
    //           img__src = another;
    //       }
    //     });

    //     return img__src;
    //   }

      output += `

            <div class="card">
                <div class="img__container">
                    <img class="img" src="${data?.image?.url}">
                </div>

                <div class="nonimg__container">
                    <div class="name">
                        <h3 class="cat__name">${data?.name}</h3>
                    </div>

                    <div class="description">
                        <p class="text">
                            ${data?.description}
                        </p>
                    </div>
                </div>

                <button class="button">
                    <a href="#">Profile</a>
                </button>
            </div>
    
        `;
    }
    content.innerHTML = output;
  })
  .catch((error) => console.log(error));
