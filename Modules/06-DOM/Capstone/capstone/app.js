// Select the header element
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
const headerWidth = header.getBoundingClientRect().width;
                
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header
window.addEventListener("scroll", toggleNav);

function toggleNav() {
  if(window.scrollY > 0) {
    header.style.top = "0";
  } else {
    header.style.top = `-${headerHeight}px`;
  }
}

// Event listener: Mouse move                
// When user hovers around the top area, show the header    
window.addEventListener("mousemove", showNav);

function showNav(event) {
  console.log(event.clientX, event.clientY)
  if (event.clientY < headerHeight && event.clientX < headerWidth) {
    header.style.top = "-10px";
  } else {
    header.style.top = `-${headerHeight}px`;
  }
}
