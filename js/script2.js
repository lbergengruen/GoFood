function insertHtml(selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};
  
if(document.querySelector(".enviar") !== null){
    document.querySelector(".enviar").addEventListener("click", chequearYenviarMail);
}

function chequearYenviarMail(window){
    var mensaje = "";
    r = document.getElementById("pedidoHecho").innerHTML;
    console.log(r);
    // // console.log(document.querySelector(".cantidad").);



    // insertHtml("#pedidoHecho", recibo);
    // window.recibo = recibo;
};