const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n)=>n.addEventListener("click", closeMenu)
);
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
$(function() {
    $("#hero-text-invite").hover(function() {
        $("#stories-hero-overlay").css("background-color", "yellow");
    }, function() {
        // on mouseout, reset the background colour
        $("#stories-hero-overlay").css("background-color", "black");
    });
});
function switchPrice() {
    let basic = document.getElementsByClassName('cost')[0];
    let basicTime = document.getElementsByClassName('time-frame')[0];
    if (basic.innerHTML === "$19.00") {
        basic.innerHTML = "$190.00";
        basicTime.innerHTML = "per year";
    } else {
        basic.innerHTML = "$19.00";
        basicTime.innerHTML = "per month";
    }
}

//# sourceMappingURL=index.643c084b.js.map
