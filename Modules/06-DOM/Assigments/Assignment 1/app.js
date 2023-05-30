const add = document.querySelector(".add__button");
const notificationDiv = document.querySelector(".notification");
// const close = document.querySelector(".cta__button");

add.addEventListener("click", showNotification);
// close.addEventListener("click", hideNotification);


function showNotification() {
  notificationDiv.classList.add("show");
}

function hideNotification() {
  notificationDiv.classList.remove("show");
}

// matches() method check if the event.target matches the cta button
//  closest() method looks for closet matching parent to notificationDiv selected

document.addEventListener("click", (event) => {
  /* if the event.target is the close button OR
    if the event.target's parent is not the notificationDIv (i.e outside of the notificationDIv) AND event.target is not the add button
  */
  if (event.target.matches(".icon__close") || event.target.parentNode != notificationDiv && !event.target.matches(".add__button")
  ) {
    hideNotification() 
  }
});
