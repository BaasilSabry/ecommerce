const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
//admin//

document.addEventListener("DOMContentLoaded", function() {
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");
  
    toggleButton.addEventListener("click", function() {
      el.classList.toggle("toggled");
    });
  });


function home() {
    window.location.href = 'index.html';
}


function register() {
    window.location.href = 'register.html';
}

function login() {
    window.location.href = 'user.html';
}

function cart() {
    window.location.href = 'cart.html';
}

function adashboard() {
    window.location.href = 'adashboard.html';
}

function admin() {
    window.location.href = 'adminlogin.html';
}

function iphone() {
    window.location.href = 'iphone.html';
}

function ipad() {
    window.location.href = 'ipad.html';
}
function iwatch() {
    window.location.href = 'iwatch.html';
}
function amax() {
    window.location.href = 'amax.html';
}
function mac() {
    window.location.href = 'mac.html';
}
function airpod() {
    window.location.href = 'airpod.html';
}
function homepod() {
    window.location.href = 'homepod.html';
}
function quest() {
    window.location.href = 'quest.html';
}

function checkout() {
    window.location.href = 'checkout.html';
}
function invoice() {
    window.location.href = 'invoice.html';
}
function watchlist() {
    window.location.href = 'watchlist.html';
}

