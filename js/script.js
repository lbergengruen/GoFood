$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

var recibo = "";

var lista = ["Colita Cuadril", "Peceto", "Bife al Vacío", "Bife ancho", "Nalga feteada y tiernizada", "Arañita",
  "Entraña fina", "Bola de lomo", "Asado Premium", "Asado Angus", "Asado Feedlot", "Chorizo Parrillero",
  "Chorizo Doña Coca", "Chorizo con Morrón y Queso", "Salchicha Parrillera", "Salchicha con Queso",
  "Morcilla Dulce", "Morcilla Salada", "Chinchulin", "Riñon", "Choto Parrillero", "Asado de Cerdo (Español)",
  "Matambrito", "Bondiola", "Pamplona", "Chuleta de Cerdo", "Panceta Ahumada", "Lechon", "Milanesa de Carne",
  "Milanesa de Pollo", "Milanesa de Jamon y Queso", "Pamplona de Pollo", "Arrollado de Pollo", "Brochettes de Pollo",
  "Supremas Congeladas", "Filet Merluza", "Filet Pescadilla Calada", "Filet Pescadilla de Red", "Salmon", "Filet Palometa", "Filet Anchoas",
  "Filet Brótola", "Filet Lenguado", "Filet Corvina Fresca","Filet Cazón", "Filet Panga", 
  "Filet Corvina Congelado", "Filet Abadejo", "Pez Espada", "Medallones Merluza", "Milanesa de Merluza",
  "Chiripirones Limpios", "Pulpitos", "Pulpa Camarón", "Pulpa de Mejillones", "Mix Mariscos", "Pulpa Langostinos",
  "Pulpa Berberechos", "Langostinos Enteros"];
var precios = [289, 269, 319, 299, 339, 279, 269, 279, 259, 199, 369, 229, 239, 269, 299, 329, 199, 199, 169, 139, 239, 299,
    209, 179, 369, 289, 299, 269, 289, 259, 249, 339, 349, 459, 249, 269, 269, 279, 719, 269, 279, 449, 449, 319, 265, 209, 319,
    449, 579, 259, 289, 339, 379, 579, 289, 279, 579, 329, 679];


function insertHtml(selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

if(document.querySelector(".submit") !== null){
  document.querySelector(".submit").addEventListener("click", ingresarRecibo);
};

function ingresarRecibo(window){
  
  precioTotal = 0;
  // console.log(document.getElementById("i1").value);
  // console.log(document.querySelector(".cantidad").);
  
  for (i=1; i<=lista.length; i++) { 
    // console.log(i);
    c = parseInt(document.getElementById("i"+ i).value);
    // console.log(c);
    if(i==1){
      recibo=recibo+"<br>GOMEAT<br>"
    }
    if(i==36){
      recibo=recibo+"<br>GOFISH<br>"
    }
    if(c!==0){
      precio = precios[i-1]*c;
      precioTotal = precioTotal+precio;
      recibo = recibo+lista[i-1]+"("+c+" Unidad/es): $"+precio+"<br>";
    }

  } 
  recibo = recibo + "<hr class='separador2'> TOTAL: $"+precioTotal;
  insertHtml("#pedidoHecho", recibo);
  window.recibo = recibo;
};

var checkedValue = []; 
var inputElements = document.getElementsByClassName('messageCheckbox');
var j=0;
var opcionesCarne = ["Carne con Hueso", "Carne sin hueso", "Chorizo", "Morcilla", "Riñon", "Chinchulin", "Choto",
                    "Salchicha", "Pamplona", "Matambrito"];
var proporciones = [6,5,1,1,1,1,1,2,3,3];


if(document.querySelector(".subCalcBotton") !== null){
  document.querySelector(".subCalcBotton").addEventListener("click", chequearLista);
}

function chequearLista() {
  var calculo = "";
  var hombre = 0.7;
  var mujer = 0.5;
  var niño = 0.35;
  var puntosTotal = 0;
  
  for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].checked){
        checkedValue[j] = (inputElements[i]).value;
        puntosTotal = puntosTotal + proporciones[i];
        ++j;
    }
  }
  for(var i=0; i<=checkedValue.length; ++i){
    if(checkedValue){

    }
  }
  insertHtml("#calculoRealizado", calculo);
  
};

// (function (global) {

//   var dc = {};

//   var homeHtml = "https://lbergengruen.github.io/GoFood/snipets/home_snipet.html";
//   var pedidoHtml = "https://lbergengruen.github.io/GoFood/snipets/pedido_snipet.html";
//   var calculadoraHtml = "https://lbergengruen.github.io/GoFood/snipets/calculadora_snippet.html";

//   var insertHtml = function (selector, html) {
//     var targetElem = document.querySelector(selector);
//     targetElem.innerHTML = html;
//   };

//   var showLoading = function (selector) {
//     var html = "<div class='text-center'>";
//     html += "<div class='loader'></div>";
//     insertHtml(selector, html);
//   };

//   // Remove the class 'active' from home and switch to Menu button
//   var switchHomeToActive = function () {
//     // Remove 'active' from home button
//     var classes = document.querySelector("#navMenuButton").className;
//     classes = classes.replace(new RegExp("active", "g"), "");
//     document.querySelector("#navMenuButton").className = classes;

//     classes = document.querySelector("#navCalculadoraButton").className;
//     classes = classes.replace(new RegExp("active", "g"), "");
//     document.querySelector("#navCalculadoraButton").className = classes;

//     // Add 'active' to menu button if not already there
//     classes = document.querySelector("#navHomeButton").className;
//     if (classes.indexOf("active") === -1) {
//       classes += " active";
//       document.querySelector("#navHomeButton").className = classes;
//     }

//     document.getElementById("pedirBoton").addEventListener("click", function(){
//       buildAndShowPedidosHTML();
//     });
//   };

//   var switchMenuToActive = function () {
//     // Remove 'active' from home button
//     var classes = document.querySelector("#navHomeButton").className;
//     classes = classes.replace(new RegExp("active", "g"), "");
//     document.querySelector("#navHomeButton").className = classes;

//     classes = document.querySelector("#navCalculadoraButton").className;
//     classes = classes.replace(new RegExp("active", "g"), "");
//     document.querySelector("#navCalculadoraButton").className = classes;

//     // Add 'active' to menu button if not already there
//     classes = document.querySelector("#navMenuButton").className;
//     if (classes.indexOf("active") === -1) {
//       classes += " active";
//       document.querySelector("#navMenuButton").className = classes;
//     }
//   };

//   var switchCalculadoraToActive = function () {
//     var classes = document.querySelector("#navHomeButton").className;
//     classes = classes.replace(new RegExp("active", "g"), "");
//     document.querySelector("#navHomeButton").className = classes;

//     classes = document.querySelector("#navMenuButton").className;
//     classes = classes.replace(new RegExp("active", "g"), "");
//     document.querySelector("#navMenuButton").className = classes;

//     // Add 'active' to menu button if not already there
//     classes = document.querySelector("#navCalculadoraButton").className;
//     if (classes.indexOf("active") === -1) {
//       classes += " active";
//       document.querySelector("#navCalculadoraButton").className = classes;
//     }
//   };

//   // On page load (before images or CSS)
//   document.addEventListener("DOMContentLoaded", function (event) {
//     buildAndShowHomeHTML();
//   });

//   document.getElementById("navHomeButton").addEventListener("click", function(){
//     buildAndShowHomeHTML();
//   });

//   document.getElementById("navMenuButton").addEventListener("click", function(){
//     buildAndShowPedidosHTML();
//   });

//   document.getElementById("navCalculadoraButton").addEventListener("click", function(){
//     buildAndShowCalculadoraHTML();
//   });


//   function buildAndShowHomeHTML () {

//     $ajaxUtils.sendGetRequest(
//       homeHtml,
//       function (homeHtml) {
//         insertHtml("#main-content", homeHtml);
//         switchHomeToActive();
//       },
//       false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
//   }


//   function buildAndShowPedidosHTML () {
//     $ajaxUtils.sendGetRequest(
//       pedidoHtml,
//       function (pedidoHtml) {
//         switchMenuToActive();
//         insertHtml("#main-content", pedidoHtml);
//       },
//       false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
    

//   }


//   function buildAndShowCalculadoraHTML () {
//     switchCalculadoraToActive();
//     insertHtml("#main-content", calculadoraHtml);
//   }


//   global.$dc = dc;

// })(window);


var slideIndex = 0;
if(document.getElementById("myCarousel") !== null){
  carousel();
}

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

var coll = document.getElementsByClassName("collapsibleA");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("activeB");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll = document.getElementsByClassName("collapsibleA");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeB");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

