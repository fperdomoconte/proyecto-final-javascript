// LISTADO DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "Patio Bonito",
        origen: "Colombia",
        altitud: "1650 msnm",
        puntaje: 88.75,
        metodo: "Espresso",
        precio: 13.00
    },
    {
        id: 2,
        nombre: "Laurel",
        origen: "Honduras",
        altitud: "1600 msnm",
        puntaje: 87.5,
        metodo: "Moka",
        precio: 14.50
    },
    {
        id: 3,
        nombre: "Bukonzo Fly",
        origen: "Uganda",
        altitud: "2100 msnm",
        puntaje: 86.0,
        metodo: "Francesa",
        precio: 16.00
    },
    {
        id: 4,
        nombre: "Koke Shalaye",
        origen: "Etiopía",
        altitud: "2200 msnm",
        puntaje: 88.0,
        metodo: "Aeropress",
        precio: 18.00
    },
    {

        id: 5,
        nombre: "Cascavel Vermelha",
        origen: "Brasil",
        altitud: "1100 msnm",
        puntaje: 86.5,
        metodo: "V80",
        precio: 12.50
    },
    {
        id: 6,
        nombre: "Dimtu",
        origen: "Etiopía",
        altitud: "2100 msnm",
        puntaje: 87.75,
        metodo: "Filtro",
        precio: 14.80
    },
    {
        id: 7,
        nombre: "Santa Alina",
        origen: "Brasil",
        altitud: "1200 msnm",
        puntaje: 85.5,
        metodo: "Moka",
        precio: 14.80
    },
    {
        id: 8,
        nombre: "El Balar",
        origen: "Costa Rica",
        altitud: "1500 msnm",
        puntaje: 88.5,
        metodo: "Filtro",
        precio: 12.00
    },
    {
        id: 9,
        nombre: "Valle de Oro",
        origen: "El Salvador",
        altitud: "1500 msnm",
        puntaje: 87.0,
        metodo: "Moka",
        precio: 16.50
    },
    {
        id: 10,
        nombre: "Muthuthuini",
        origen: "Kenia",
        altitud: "1700 msnm",
        puntaje: 89.0,
        metodo: "Francesa",
        precio: 14.50
    },
    {
        id: 11,
        nombre: "Rongo",
        origen: "Kenia",
        altitud: "1600 msnm",
        puntaje: 88.25,
        metodo: "Aeropress",
        precio: 13.00
    },
    {
        id: 12,
        nombre: "Popayan Descafeinado",
        origen: "Colombia",
        altitud: "1700 msnm",
        puntaje: 86.0,
        metodo: "Espresso",
        precio: 12.80
    }
];

// Cargar carrito desde localStorage o inicializar vacío
let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

//Traet la lista de productos en el carrito
const listaCarrito = document.getElementById("products-list");
const botonVaciarCarrito = document.getElementById("empty-cart");

//Funcion para agregar productos al carrito
function agregarCarrito(event) {
    const productId = parseInt(event.target.dataset.id);
    const productoSeleccionado = productos.find(producto => producto.id === productId);

    if (productoSeleccionado) {
        carritoCompras.push(productoSeleccionado);
        guardarCarrito();
        actualizarCarrito(); 
    }
}

// guarda carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
}

// vaciar el carrito LS
function vaciarCarrito() {
    carritoCompras = [];
    guardarCarrito();
    actualizarCarrito();
}

// actualizar la lista de productos
function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    carritoCompras.forEach(producto => {
        let li = document.createElement("li");
        li.innerText = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });
}

// event "Agregar al carro"
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito(); // Cargar carrito al iniciar la página

    const botonesAgregar = document.querySelectorAll(".product-add");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    });

    // Event listener para el botón "Vaciar Carrito"
    botonVaciarCarrito.addEventListener("click", vaciarCarrito);
});