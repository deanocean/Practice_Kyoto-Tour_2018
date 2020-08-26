window.onload = scroll;

function scroll(){
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("index_navList")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;


var logo = document.getElementsByClassName("logo")[0];

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    logo.style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    logo.style.display = "none";
  }
}
}