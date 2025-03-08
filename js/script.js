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
    new Producto(1, "Los Rodriguez", "Bolivia", "1650 msnm", 88.75, "Espresso", 13.00, "./assets/images/losRodriguez.jpg"),
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

        <a href="#" class="btn btn-dark" onclick="agregarCarrito(${producto.id})">Agregar al carrito</a>
    </div>
      `;

        productContainer.appendChild(card);
    });
}

/* cargar los prodcutos al cargar la pagina */
document.addEventListener("DOMContentLoaded", crearProducto);


// Cargar carrito desde localStorage o inicializar vacío
let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

//agregar productos al carrito
const listaCarrito = document.getElementById("lista-carrito");

function agregarCarrito(productoId) {
    const productoSeleccionado = productos.find(producto => producto.id === productoId);

    if (productoSeleccionado) {
        carritoCompras.push(productoSeleccionado);
        guardarCarrito();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto agregado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });

    }
}

// actualizar la lista de productos
function actualizarCarrito() {
    
    listaCarrito.innerHTML = "";

    if (carritoCompras.length === 0) {
        let li = document.createElement("li");
        li.innerText = "Actualmente tu carrito esta vacio";
        listaCarrito.appendChild(li);
    } else {/* 
        listaCarrito.innerHTML = ""; */

        carritoCompras.forEach(producto => {
            let li = document.createElement("li");
            li.innerText = `${producto.nombre}: $${producto.precio}`;
            listaCarrito.appendChild(li);
        });


    }
}

document.querySelector(".tdc-cart").addEventListener("click", function () {

    let offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvas'));

    offcanvas.show();

    actualizarCarrito();

});

document.getElementById("shop-more").addEventListener("click", function () {
        let offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas'));
    
    if (!offcanvas) {
        offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvas'));
    }

    
    offcanvas.hide();
});

// guarda carrito en LS
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
};

// vaciar el carrito LS
function vaciarCarrito() {
    carritoCompras = [];
    guardarCarrito(); 
    actualizarCarrito();
}

const botonVaciarCarrito = document.getElementById("empty-cart");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);