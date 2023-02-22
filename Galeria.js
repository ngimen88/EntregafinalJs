/*class fotografiasretrato {
    constructor(identification, tamaño, categoria, precio, imagen) {
        this.identification = identification;
        this.tamaño = tamaño;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
    }
}

class fotografiasreportaje {
    constructor(identification, tamaño, categoria, precio,imagen) {
        this.identification = identification;
        this.tamaño = tamaño;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
    }
}

class fotografiaspaisajes {
    constructor(identification, tamaño, categoria, precio,imagen) {
        this.identification = identification;
        this.tamaño = tamaño;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
    }
}*/
//--------- Array de objetos --------------------------------
const todasLasfotos = [
    {
        id: "fotografiasretrato01",
        tamaño: "Grande",
        categoria: "fotografía de moda",
        precio: 50000,
        imagen: "./moda.jpg",
        tipo: {
            nombre: "Fotos Retrato",
            id: "retratos"
        }
    },
    {
        id: "fotografiasretrato02",
        tamaño: "Grande",
        categoria: "fotografía de eventos sociales",
        precio: 15000,
        imagen: "./eventosocial.jpg",
        tipo: {
            nombre: "Fotos Retrato",
            id: "retratos"
        }
    },
    {
        id: "fotografiasretrato03",
        tamaño: "Grande",
        categoria: "fotografía deportiva",
        precio: 8000,
        imagen: "./deportiva.jpg",
        tipo: {
            nombre: "Fotos Retrato",
            id: "retratos"
        }
    },
    {
        id: "fotografiasreportaje01",
        tamaño: "Grande",
        categoria: "fotografía de prensa",
        precio: 11000,
        imagen: "./prensa.jpg",
        tipo: {
            nombre: "Fotos Reportaje",
            id: "reportajes"
        }
    },
    {
        id: "fotografiasreportaje02",
        tamaño: "Grande",
        categoria: "fotografía de guerra",
        precio: 70000,
        imagen: "./guerra.jpg",
        tipo: {
            nombre: "Fotos Reportaje",
            id: "reportajes"
        }
    },
    {
        id: "fotografiasreportaje03",
        tamaño: "Grande",
        categoria: "fotografía documental",
        precio: 25000,
        imagen: "./documental.jpg",
        tipo: {
            nombre: "Fotos Reportaje",
            id: "reportajes"
        }
    },
    {
        id: "fotografiaspaisajes01",
        tamaño: "Grande",
        categoria: "fotografía de arquitectura",
        precio: 30000,
        imagen: "./arquitectura.jpg",
        tipo: {
            nombre: "Fotos Paisajes",
            id: "paisajes"
        }
    },
    {
        id: "fotografiaspaisajes02",
        tamaño: "Grande",
        categoria: "fotografía aérea",
        precio: 20000,
        imagen: "./aerea.jpg",
        tipo: {
            nombre: "Fotos Paisajes",
            id: "paisajes"
        }
    },
    {
        id: "fotografiaspaisajes03",
        tamaño: "Grande",
        categoria: "fotografía de la Naturaleza",
        precio: 10000,
        imagen: "./Naturaleza.jpg",
        tipo: {
            nombre: "Fotos Paisajes",
            id: "paisajes"
        }
    },
    {
        id: "fotografiaspaisajes04",
        tamaño: "Grande",
        categoria: "fotografía submarina",
        precio: 40000,
        imagen: "submarina.jpg",
        tipo: {
            nombre: "Fotos Paisajes",
            id: "paisajes"
        }
    }
]
//--------------------------DOOM--------------------------------
/*
const contenedorDefoto = document.querySelector("#contenedor_de_foto");
const menuCategoria = document.querySelectorAll(".menucategoria");
let agregarFotos = document.querySelectorAll(".agregar-foto")
const contador = document.querySelector("#contador")

function cargarFotos(fotoselegidas) {

    contenedorDefoto.innerHTML = "";


    fotoselegidas.forEach((foto) => {
        const div = document.createElement("div");
        div.classList.add("foto");
        div.innerHTML = `
        <img class="imagen-foto" src="${foto.imagen} alt="">
        <div class="detalle-foto">
            <h3 class="titulo-foto">${foto.id}</h3>
            <p class="precio-foto">${foto.precio}</p>
            <p class="precio-foto">${foto.categoria}</p>
            <button class="agregar-foto" id="${foto.id}">Agregar</button>
        </div>
        `;

        contenedorDefoto.append(div);
    });
}

cargarFotos(todasLasfotos);

menuCategoria.forEach((opcion) => {
    opcion.addEventListener("click", (e) => {

        if (e.currentTarget.id != "todos") {
            const fotoseleccionada = todasLasfotos.filter(
                foto => foto.tipo.id === e.currentTarget.id
            );

            cargarFotos(fotoseleccionada);
        }
        else {
            cargarFotos(todasLasfotos)
        }
    })

    botonesActualizado()
});

function botonesActualizado() {
    agregarFotos = document.querySelectorAll(".agregar-foto")
    agregarFotos.forEach(boton => { boton.addEventListener("click", comprarFotos)});
}

const fotosCompradas = []

function comprarFotos(e){

    const idBotonagregar = e.currentTarget.id;
    const fotosAgregadas = todasLasfotos.find(fotos => fotos.id === idBotonagregar)

    if(fotosCompradas.some(fotos => fotos.id === idBotonagregar )){
        const index = fotosCompradas.findIndex(fotos => fotos.id ===idBotonagregar);
        fotosCompradas[index].cantidad++;
    }
        else{
        fotosAgregadas.cantidad = 1 ;
        fotosCompradas.push(fotosAgregadas) ;
    }

    console.log(fotosCompradas)

    actualizarContador()

    localStorage.setItem("fotos-en-carritos-de-compra",JSON.stringify(fotosCompradas))
}

function actualizarContador(){
    let newcontador = fotosCompradas.reduce((acc,fotos)=> acc + fotos.cantidad, 0);
    contador.innerText = newcontador;
}

*/
/*--------------------------------NUEVO____________________*/


let fotos = [];

fetch("./fotos.json")
    .then(response => response.json())
    .then(data => {
        fotos = data;
        cargarFotos(fotos);
    })


const contenedorDefoto = document.querySelector("#contenedor_de_foto");
const menuCategoria = document.querySelectorAll(".menucategoria");
let agregarFotos = document.querySelectorAll(".agregar-foto")
const contador = document.querySelector("#contador");
/*const tituloPrincipal = document.querySelector("#titulo-principal");
    

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
*/





function cargarFotos(fotoselegidas) {

    contenedorDefoto.innerHTML = "";

    fotoselegidas.forEach(foto => {

        const div = document.createElement("div");
        div.classList.add("foto");
        div.innerHTML = `
        <img class="imagen-foto" src=${foto.imagen} alt="">
        <div class="detalle-foto">
            <h3 class="titulo-foto">${foto.id}</h3>
            <p class="precio-foto">${foto.precio}$</p>
            <p class="precio-foto">${foto.categoria}</p>
            <button class="agregar-foto" id="${foto.id}"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
            <path d="M15 6h6m-3 -3v6" />
            </svg></button>
        </div>
        `;

        contenedorDefoto.append(div);
    });

    botonesActualizado()
}

menuCategoria.forEach((opcion) => {
    opcion.addEventListener("click", (e) => {

        if (e.currentTarget.id != "todos") {
            const fotoseleccionada = todasLasfotos.filter(
                foto => foto.tipo.id === e.currentTarget.id
            );

            cargarFotos(fotoseleccionada);
        }
        else {
            cargarFotos(fotos)
        }
    })

    botonesActualizado()
});

function botonesActualizado() {
    agregarFotos = document.querySelectorAll(".agregar-foto")
    agregarFotos.forEach(boton => { boton.addEventListener("click", comprarFotos) });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("fotos-en-carritos-de-compra");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarContador();
} else {
    productosEnCarrito = [];
}

function comprarFotos(e) {

    Toastify({
        text: "FOTO agregada",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();

    const idBotonagregar = e.currentTarget.id;
    const fotoAgregada = fotos.find(foto => foto.id === idBotonagregar);

    if (productosEnCarrito.some(foto => foto.id === idBotonagregar)) {
        const index = productosEnCarrito.findIndex(foto => foto.id === idBotonagregar);
        productosEnCarrito[index].cantidad++;
    } else {
        fotoAgregada.cantidad = 1;
        productosEnCarrito.push(fotoAgregada);
    }

    actualizarContador();

    localStorage.setItem("fotos-en-carritos-de-compra", JSON.stringify(productosEnCarrito));
}

/*

function comprarFotos(e){

    const idBotonagregar = e.currentTarget.id;
    const fotosAgregadas = todasLasfotos.find(fotos => fotos.id === idBotonagregar)

    if(fotosCompradas.some(fotos => fotos.id === idBotonagregar )){
        const index = fotosCompradas.findIndex(fotos => fotos.id ===idBotonagregar);
        fotosCompradas[index].cantidad++;
    }
        else{
        fotosAgregadas.cantidad = 1 ;
        fotosCompradas.push(fotosAgregadas) ;
    }

    console.log(fotosCompradas)

*/

function actualizarContador() {
    let newcontador = productosEnCarrito.reduce((acc, foto) => acc + foto.cantidad, 0);
    contador.innerText = newcontador;
}