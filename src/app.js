import { Producto } from './producto.js';
import { Inventario } from './inventario.js';

// eventos
const inventario = new Inventario();


function mostrarProductos() {
    inventario.ordenarLista();
    document.getElementById("product-list").innerHTML = "";
    let lista = inventario.devolverLista();
    for (let i = 0; i < lista.length; i++) {
        const listaProducto = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${lista[i].codigo}
                <strong>Nombre</strong>: ${lista[i].nombre}
                <strong>Precio</strong>: ${lista[i].precio}
                <strong>Cantidad</strong>: ${lista[i].cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}

function listarInvertida() {
    document.getElementById("product-list").innerHTML = "";
    let lista = inventario.devolverLista();
    for (let i = lista.length; i > 0; i--) {
        const listaProducto = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${lista[i].codigo}
                <strong>Nombre</strong>: ${lista[i].nombre}
                <strong>Precio</strong>: ${lista[i].precio}
                <strong>Cantidad</strong>: ${lista[i].cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}

function buscarUnProducto(codigo) {
    let buscar = inventario.buscarProducto(codigo);
    document.getElementById("product-list").innerHTML = "";
    const listaProducto = document.getElementById('product-list');
    const element = document.createElement('div');
    if (buscar === "Producto no encontrado") {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>${buscar}</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    } else {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${buscar.codigo}
                <strong>Nombre</strong>: ${buscar.nombre}
                <strong>Precio</strong>: ${buscar.precio}
                <strong>Cantidad</strong>: ${buscar.cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}

function eliminarProducto(codigo) {
    let eliminar = inventario.eliminarProducto(codigo);
    document.getElementById("product-list").innerHTML = "";
    const listaProducto = document.getElementById('product-list');
    const element = document.createElement('div');
    if (eliminar === "Producto no encontrado") {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>${eliminar}</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    } else {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto eliminado</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}


document.getElementById('producto-form')
    .addEventListener('submit', function (e) {
        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const cantidad = document.getElementById('cantidad').value;

        const producto = new Producto(codigo, nombre, precio, cantidad);

        if (codigo === "" || nombre === "" || precio === "" || cantidad === "") {
            alert("Por favor llene todos los campos");
        } else {
            if (inventario.buscarProducto(codigo) === "Producto no encontrado") {
                inventario.addProducto(producto);
                mostrarProductos();
            } else {
                alert("El producto ya existe");
            }
        }
        e.preventDefault();
    });

document.getElementById('producto-Eliminar')
    .addEventListener('submit', function (e) {
        const codigoEliminar = document.getElementById('codigoEliminar').value;

        eliminarProducto(codigoEliminar);

        e.preventDefault();
    });

document.getElementById('producto-Buscar')
    .addEventListener('submit', function (e) {
        const codigoBuscar = document.getElementById('codigoBuscar').value;
        buscarUnProducto(codigoBuscar);
        e.preventDefault();
    });

document.getElementById('producto-Mostrar')
    .addEventListener('submit', function (e) {
        mostrarProductos();
        e.preventDefault();
    });

document.getElementById('producto-invertir')
    .addEventListener('submit', function (e) {
        listarInvertida();
        e.preventDefault();
    });
