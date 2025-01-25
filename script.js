//SALUDO
alert("Bienvenido/a al simulador! Haz click en 'Aceptar' para empezar")

// LISTADO DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "Patio Bonito",
        origen: "Colombia",
        altitud: "1650 msnm",
        puntaje: 88.75,
        metodo: "Espresso"
    },
    {
        id: 2,
        nombre: "Laurel",
        origen: "Honduras",
        altitud: "1600 msnm",
        puntaje: 87.5,
        metodo: "Moka"
    },
    {
        id: 3,
        nombre: "Bukonzo Fly",
        origen: "Uganda",
        altitud: "2100 msnm",
        puntaje: 86.0,
        metodo: "Francesa"
    },
    {
        id: 4,
        nombre: "Koke Shalaye",
        origen: "Etiopía",
        altitud: "2200 msnm",
        puntaje: 88.0,
        metodo: "Aeropress"
    },
    {

        id: 5,
        nombre: "Cascavel Vermelha",
        origen: "Brasil",
        altitud: "1100 msnm",
        puntaje: 86.5,
        metodo: "V80"
    },
    {
        id: 6,
        nombre: "Dimtu",
        origen: "Etiopía",
        altitud: "2100 msnm",
        puntaje: 87.75,
        metodo: "Filtro"
    },
    {
        id: 7,
        nombre: "Santa Alina",
        origen: "Brasil",
        altitud: "1200 msnm",
        puntaje: 85.5,
        metodo: "Moka"
    },
    {
        id: 8,
        nombre: "El Balar",
        origen: "Costa Rica",
        altitud: "1500 msnm",
        puntaje: 88.5,
        metodo: "Filtro"
    },
    {
        id: 9,
        nombre: "Valle de Oro",
        origen: "El Salvador",
        altitud: "1500 msnm",
        puntaje: 87.0,
        metodo: "Moka"
    },
    {
        id: 10,
        nombre: "Muthuthuini",
        origen: "Kenia",
        altitud: "1700 msnm",
        puntaje: 89.0,
        metodo: "Francesa"
    },
    {
        id: 11,
        nombre: "Rongo",
        origen: "Kenia",
        altitud: "1600 msnm",
        puntaje: 88.25,
        metodo: "Aeropress"
    },
    {
        id: 12,
        nombre: "Popayan Descafeinado",
        origen: "Colombia",
        altitud: "1700 msnm",
        puntaje: 86.0,
        metodo: "Espresso"
    }
];

//Array donde se guadaran los productos seleccionados como objetos
const carritoCompras = [];

//Funcion para mostrar la lista de productos concatenado datos como texto
function mostrarProductos() {
    let productosTexto = "Listado de productos disponibles:\n\n";
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        productosTexto += `Codigo: ${producto.id}\n`;
        productosTexto += `Nombre: ${producto.nombre}\n`;
        productosTexto += `Origen: ${producto.origen}\n`;
        productosTexto += `Altitud: ${producto.altitud}\n`;
        productosTexto += `Puntaje (Cupping Score): ${producto.puntaje}\n`;
        productosTexto += `Método: ${producto.metodo}\n`;
        productosTexto += "_________________________________________\n"
        
    }
    console.log(productosTexto);

    /* if (inicio == "VER") {
        let productosTexto = "Listado de productos disponibles:\n\n";

        for (let i = 0; i < productos.length; i++) {
            const producto = productos[i];
            productosTexto += `Codigo: ${producto.id}\n`;
            productosTexto += `Nombre: ${producto.nombre}\n`;
            productosTexto += `Origen: ${producto.origen}\n`;
            productosTexto += `Altitud: ${producto.altitud}\n`;
            productosTexto += `Puntaje (Cupping Score): ${producto.puntaje}\n`;
            productosTexto += `Método: ${producto.metodo}\n`;
            productosTexto += "----------------------\n"
        }
        console.log(productosTexto);

    } else if (inicio == "SALIR") {
        alert("Adios! Gracias por tu visita");
    } else {
        alert(inicio + " no es una opción válida. Inténtalo de nuevo.");
        mostrarProductos();
    } */
}

//Funcion para agregar productos al carrito
function agregarCarrito() /* parametro */ {

    //Bucle para ir agregando los productos
    let agregaCarrito;
    do {
        agregaCarrito = parseInt(prompt("Ingresa el Codigo del producto que quieras agregar, o '0' para salir"));

        //Bucle for para comparar ids y agregar al array de carrito
        for (const producto of productos) {
            if (producto.id === agregaCarrito) {
                carritoCompras.push(producto);
                break;
            }
        }

    } while (agregaCarrito !== 0);

    //MOstrasr los productos
    let carritoTexto = "En tu carrito:\n\n";
    for (let i = 0; i < carritoCompras.length; i++) {
        const producto = carritoCompras[i];
        carritoTexto += `Nombre: ${producto.nombre}\n`;
        carritoTexto += `Código: ${producto.id}\n`;
        productosTexto += "_________________________________________\n"
    }
    console.log(carritoTexto);

    /* console.log("Productos en el carrito:");
    console.log(carritoCompras); */

}

//Llamada a la funcion
let inicio = prompt("Deseas ver los productos disponibles? Si es asi, click en 'VER'. De lo contrario ingresa 'SALIR'")

if (inicio == "VER") {
    mostrarProductos();

    let verificaCompra = prompt("Deseas agregar productos al carrito?, Ingresa SI o cualquier tecla para salir");

    if (verificaCompra == "SI") {
        //Llamada a la funcion 
        agregarCarrito();
    } else {
        alert("Adios! Gracias por tu visita");
    }

} else if (inicio == "SALIR") {
    alert("Adios! Gracias por tu visita");

} else {
    alert(inicio + " no es una opción válida. Inténtalo de nuevo.");
    mostrarProductos();
}

