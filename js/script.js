// LISTADO DE PRODUCTOS
class Producto {
    constructor(id, nombre, origen, altitud, puntaje, metodo, precio, imagen) {
        this.id = id,
            this.nombre = nombre;
            this.origen = origen;
            this.altitud = altitud;
            this.puntaje = puntaje;
            this.metodo = metodo;
            this.precio = precio;
            this.imagen = imagen;
    }
}

const productos = [
    new Producto(1, "Los Rodriguez", "Bolivia", "1650 msnm",88.75, "Espresso", 13.00, "./assets/images/losRodriguez.jpg"),
    new Producto(2, "Laurel", "Honduras", "1600 msnm", 87.5, "Moka", 14.50, "./assets/images/laurel.jpg"),
    new Producto(3, "Bukonzo Fly", "Uganda", "2100 msnm", 86.0, "Francesa", 16.00, "./assets/images/bukonzoFly.jpg"),
    new Producto(4, "Koke Shalaye", "Etiopía", "2200 msnm", 88.0, "Aeropress", 18.00, "./assets/images/kokeShalaye.jpg"),
    new Producto(5, "Cascavel Vermelha", "Brasil", "1100 msnm", 86.5, "V80", 12.50, "./assets/images/cascavelVermelha.jpg"),
    new Producto(6, "Dimtu", "Etiopía", "2100 msnm", 87.75, "Filtro", 14.80, "./assets/images/dimtu.jpg"),
    new Producto(7, "Rita de Cassia", "Brasil", "1200 msnm", 85.5, "Moka", 14.80, "./assets/images/ritaCassia.jpg"),
    new Producto(8, "Cajamarca", "Peru", "1500 msnm", 88.5, "Filtro", 12.00, "./assets/images/cajamarca.jpg"),
    new Producto(9, "Wanja Kersa", "Ethiopia", "1500 msnm", 87.0, "Moka", 16.50, "./assets/images/wanjaKersa.jpg"),
    new Producto(10, "Greengo", "Ruanda", "1700 msnm", 89.0, "Francesa", 14.50, "./assets/images/greengo.jpg"),
    new Producto(11, "Rongo", "Kenia", "1600 msnm", 88.25, "Aeropress", 13.00, "./assets/images/rongo.jpg"),
    new Producto(12, "Caldas Descafeinado", "Colombia", "1700 msnm", 86.0, "Espresso", 12.80, "./assets/images/caldasDescafeinado.jpg")
];

function crearProducto() {
    const productContainer = document.querySelector(".product-container")

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>

        <p class="card-text">Origen: ${producto.origen} <br> Altitud: ${producto.altitud} <br> Puntaje: ${producto.puntaje} <br> Método: ${producto.metodo}</p>

        <p class="card-precio">Precio: €${producto.precio.toFixed(2)}</p>

        <a href="#" class="btn btn-dark">Agregar al carrito</a>

      </div>
      `;

      productContainer.appendChild(card);    
    });
}

document.addEventListener("DOMContentLoaded", crearProducto);

/* // Cargar carrito desde localStorage o inicializar vacío
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
}); */