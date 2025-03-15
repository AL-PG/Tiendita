function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio;
}

let pretzel = new Producto("Pretzel", 18);
let donut = new Producto("Donut", 10);
let Churros = new Producto("Churros", 21);
let frappe = new Producto("Frappe", 28);

function cantidadMas(boton) {
    let idSpan = boton.getAttribute("data-target"); 
    document.getElementById(idSpan).textContent = parseInt(document.getElementById(idSpan).textContent) + 1;

}

function cantidadMenos(boton) {
    let idSpan = boton.getAttribute("data-target"); 
    if(parseInt(document.getElementById(idSpan).textContent) == 0) {
        return;
    }
    document.getElementById(idSpan).textContent = parseInt(document.getElementById(idSpan).textContent) - 1;   
}

function añadir(boton) {
    let padre = boton.parentElement;
    let id = boton.getAttribute("data-target");

    switch (padre.id) {
        case "pretzel":
            if(document.getElementById("span-p").textContent == "0") {return}  
            document.getElementById("precio-p").textContent = "$"+ pretzel.precio * parseInt(document.getElementById("span-p").textContent);
            document.getElementById("span-p-c").textContent = document.getElementById("span-p").textContent;
            break;
        case "donut":
            if(document.getElementById("span-d").textContent == "0") {return}  
            document.getElementById("precio-d").textContent = "$"+ donut.precio * parseInt(document.getElementById("span-d").textContent);
            document.getElementById("span-d-c").textContent = document.getElementById("span-d").textContent;
            break;
        case "churro":
            if(document.getElementById("span-c").textContent == "0") {return}  
            document.getElementById("precio-c").textContent = "$"+ Churros.precio * parseInt(document.getElementById("span-c").textContent);
            document.getElementById("span-c-c").textContent = document.getElementById("span-c").textContent;
            break;
        case "frappe":
            if(document.getElementById("span-f").textContent == "0") {return}  
            document.getElementById("precio-f").textContent = "$"+ frappe.precio * parseInt(document.getElementById("span-f").textContent)
            document.getElementById("span-f-c").textContent = document.getElementById("span-f").textContent;
            break;
    }
    document.getElementById(id).style.display = "grid";
    document.getElementById("buy-id").style.display = "block";
    document.getElementById("id-empty").style.display = "none";
    total();   
}

function total() {
    let suma = 0;
    let spans = document.querySelectorAll(".spans-total");

    spans.forEach(span => {
      suma += parseInt(span.textContent.substring(1)); 
    });

    document.getElementById("Total").textContent = "$" + suma;
}

function pagar() {
    let cart = document.querySelectorAll(".cart-element");

    cart.forEach(element => {
       let id = element.id
      document.getElementById(id).style.display = "none";
    });

    document.getElementById("precio-p").textContent = "$0";
    document.getElementById("span-p-c").textContent = 0;
    document.getElementById("precio-d").textContent = "$0";
    document.getElementById("span-d-c").textContent = 0;
    document.getElementById("precio-c").textContent = "$0";
    document.getElementById("span-c-c").textContent = 0;
    document.getElementById("precio-f").textContent = "$0";
    document.getElementById("span-f-c").textContent = 0;

    total();
    document.getElementById("buy-id").style.display = "none";
    document.getElementById("id-empty").style.display = "block";
}


function eliminar(boton) {
    let id = boton.getAttribute("data-target"); 
    document.getElementById(id).style.display = "none";

    let padre = boton.parentElement?.parentElement?.parentElement;

    switch (padre.id) {
        case "pretzel-cart":
            document.getElementById("precio-p").textContent = "$0";
            document.getElementById("span-p-c").textContent = 0;
            break;
        case "donut-cart":
            document.getElementById("precio-d").textContent = "$0";
            document.getElementById("span-d-c").textContent = 0;
            break;
        case "churro-cart":
            document.getElementById("precio-c").textContent = "$0";
            document.getElementById("span-c-c").textContent = 0;
            break;
        case "frappe-cart":
            document.getElementById("precio-f").textContent = "$0";
            document.getElementById("span-f-c").textContent = 0;
            break;
    }
    
    if (getComputedStyle(document.getElementById("frappe-cart")).display == "none" && 
        getComputedStyle(document.getElementById("pretzel-cart")).display == "none" &&
        getComputedStyle(document.getElementById("donut-cart")).display == "none" && 
        getComputedStyle(document.getElementById("churro-cart")).display == "none") {

        
        document.getElementById("buy-id").style.display = "none";
        document.getElementById("id-empty").style.display = "block";
    }

    total();
}