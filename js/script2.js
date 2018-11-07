function insertHtml(selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};
  
if(document.querySelector(".enviar") !== null){
    document.querySelector(".enviar").addEventListener("click", chequearYenviarMail);
}

function chequearYenviarMail(window){
    var mensaje = "";
    nombre = document.getElementById("nombreCompleto").value;
    direccion = document.getElementById("direccion").value;
    celular = document.getElementById("celular").value;
    correo = document.getElementById("correo").value;    
    comentarios = document.getElementById("comentarios").value;

    if(recibo === "" || recibo ==="<br>GOMEAT<br><br>GOFISH<br><hr class='separador2'> TOTAL: $0"){
        mensaje = "<p style='color:red; font-weight: bold;'>Por favor arme su Pedido.<p>";
    }else if(nombre === "" || direccion === "" || celular === "" || correo === "") {
        mensaje = "<p style='color:red; font-weight: bold;'>Por favor Ingrese todos los datos.<p>";
    }else{
        mensaje = "<p style='color:green; font-weight: bold;'>Su pedido ha sido enviado.<p>";
    }

    // // console.log(document.querySelector(".cantidad").);



    insertHtml("#mensaje", mensaje);
    // window.recibo = recibo;
};

if(document.querySelector(".contBotton") !== null){
    document.querySelector(".contBotton").addEventListener("click", contactar);
}

function contactar(){
    var mensaje = "";
    nombre = document.getElementById("insert_nombre").value;
    msj = document.getElementById("insert_msj").value;
    
    if(nombre != "Nombre" && msj != "Su mensaje va aqui..."){
        mensaje = "<p style='color:green; font-weight: bold;'>Su mensaje ha sido enviado.<p>";
    }

    document.getElementById("insert_nombre").value = "Nombre";
    document.getElementById("insert_msj").value = "Su mensaje va aqui...";



    insertHtml("#mensaje", mensaje);
    // window.recibo = recibo;
};