
/*const fotosCompradas = JSON.parse(localStorage.getItem("fotos-en-carritos-de-compra"));
console.log(fotosCompradas)

const contenedorCarritovacio = document.querySelector("#carrito-vacio");
const contenedorCarritofotos= document.querySelector("#carrito-fotos");
const contenedorCarritoacciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")


if (fotosCompradas){


    contenedorCarritovacio.classList.add("disabled");
    contenedorCarritofotos.classList.remove("disabled");
    contenedorCarritoacciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled")
}
else
{

}
*/


/*-----------------------------------------CARRO---------------------*/
let productosEnCarrito = localStorage.getItem("fotos-en-carritos-de-compra");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(foto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${foto.imagen}" alt="${foto.id}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${foto.categoria}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${foto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${foto.precio}$</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${foto.precio * foto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${foto.id}"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg></button>
            `;

            contenedorCarritoProductos.append(div);
        })

        actualizarBotonesEliminar();
        actualizarTotal();

    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "Foto eliminada",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
        },
        onClick: function () { }
    }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(foto => foto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("fotos-en-carritos-de-compra", JSON.stringify(productosEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnCarrito.reduce((acc, foto) => acc + foto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("fotos-en-carritos-de-compra", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
    })
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, foto) => acc + (foto.precio * foto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("fotos-en-carritos-de-compra", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}