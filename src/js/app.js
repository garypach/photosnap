const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

$(function () {
  $("#hero-text-invite").hover(
    function () {
      $("#stories-hero-overlay").css("background-color", "yellow");
    },
    function () {
      // on mouseout, reset the background colour
      $("#stories-hero-overlay").css("background-color", "black");
    }
  );
});

function switchPrice() {
  let basic = document.getElementsByClassName('cost')[0];
  let basicTime = document.getElementsByClassName('time-frame')[0];
  let pro = document.getElementsByClassName('cost')[1];
  let proTime = document.getElementsByClassName('time-frame')[1];
  let business = document.getElementsByClassName('cost')[2];
  let businessTime = document.getElementsByClassName('time-frame')[2];
  if (basic.innerHTML === "$19.00") {
    basic.innerHTML = "$190.00";
    basicTime.innerHTML = "per year";

    pro.innerHTML = "$390.00";
    proTime.innerHTML = "per year";

    business.innerHTML = "$990.00";
    businessTime.innerHTML = "per year";

    document.getElementsByClassName('yearly')[0].style.opacity = "1"
    document.getElementsByClassName('monthly')[0].style.opacity = ".5"

  } else {
    basic.innerHTML = "$19.00";
    basicTime.innerHTML = "per month"
    pro.innerHTML = "$39.00";
    proTime.innerHTML = "per month"
    business.innerHTML = "$99.00";
    businessTime.innerHTML = "per month"
    document.getElementsByClassName('yearly')[0].style.opacity = ".5"
    document.getElementsByClassName('monthly')[0].style.opacity = "1"

  }

 
} 