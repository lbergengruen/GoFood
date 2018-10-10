$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});



(function (global) {

var dc = {};

var homeHtml = "../snipets/home_snipet.html";
var allCategoriesUrl = "#";
var pedidoHtml = "../snipets/pedido_snipet.html";
var calculadoraHtml = "../snipets/calculadora_snippet.html";

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<div class='loader'></div>";
  insertHtml(selector, html);
};

// Remove the class 'active' from home and switch to Menu button
var switchHomeToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navMenuButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navMenuButton").className = classes;

  classes = document.querySelector("#navCalculadoraButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navCalculadoraButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navHomeButton").className;
  if (classes.indexOf("active") === -1) {
    classes += " active";
    document.querySelector("#navHomeButton").className = classes;
  }
};

var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  classes = document.querySelector("#navCalculadoraButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navCalculadoraButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
  if (classes.indexOf("active") === -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};

var switchCalculadoraToActive = function () {
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  classes = document.querySelector("#navMenuButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navMenuButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navCalculadoraButton").className;
  if (classes.indexOf("active") === -1) {
    classes += " active";
    document.querySelector("#navCalculadoraButton").className = classes;
  }
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
  buildAndShowHomeHTML();
});

document.getElementById("navHomeButton").addEventListener("click", function(){
  buildAndShowHomeHTML();
});

document.getElementById("navMenuButton").addEventListener("click", function(){
  buildAndShowPedidosHTML();
});

document.getElementById("navCalculadoraButton").addEventListener("click", function(){
  buildAndShowCalculadoraHTML();
});


function buildAndShowHomeHTML () {

  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (homeHtml) {
      switchHomeToActive();
      insertHtml("#main-content", homeHtml);
    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}


function buildAndShowPedidosHTML () {
  $ajaxUtils.sendGetRequest(
    pedidoHtml,
    function (pedidoHtml) {
      switchMenuToActive();
      insertHtml("#main-content", pedidoHtml);
    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
  

}


function buildAndShowCalculadoraHTML () {
  switchCalculadoraToActive();
  insertHtml("#main-content", calculadoraHtml);
}


global.$dc = dc;

})(window);


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("mySign");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
      y[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    y[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}
