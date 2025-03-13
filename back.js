function Producto(nombre,stock, precio) {
    this.nombre = nombre
    this.stock = stock;
    this.precio = precio;
}

let manzana = new Producto("Manzana",200, 16);
let platano = new Producto("Planano",150, 10);
let naranja = new Producto("Naranja",250, 18);

function ActualizarEtiquetas() {
    document.getElementById("stock-manzana").innerHTML.textContent = manzana.stock;
    document.getElementById("stock-platano").innerHTML.textContent = platano.stock;
    document.getElementById("stock-naranja").innerHTML.textContent = naranja.stock;   
}

function Actualizartock(cantidad_manzana, cantidad_platano, cantidad_naranja) {
    manzana.stock -= cantidad_manzana;
    platano.stock -= cantidad_platano;
    naranja.stock -= cantidad_naranja;
}

let carrito = []; 

function agregarAlCarrito(nombre, precio, cantidad) {
    // Agregar producto al carrito
    carrito.push({ nombre, precio, cantidad });

    // Actualizar la vista
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let totalElemento = document.getElementById("totalCarrito");

    // Limpiar la lista antes de actualizar
    lista.innerHTML = "";

    let total = 0;

    // Recorrer el carrito y mostrar los productos
    carrito.forEach(producto => {
        let item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        lista.appendChild(item);
        total += producto.precio;
    });

    // Actualizar el total
    totalElemento.textContent = total;
}