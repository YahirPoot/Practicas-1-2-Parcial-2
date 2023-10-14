import Producto from './producto.js';
import { Almacen } from './almacen.js';

const almacen = new Almacen();
const availableProductsList = document.getElementById('available-products');
const removedProductsList = document.getElementById('removed-products');
const totalAddedElement = document.getElementById('total-added');
const totalRemovedElement = document.getElementById('total-removed');
const totalRemovedQuantityElement = document.getElementById('total-removed-quantity');

let totalAgregados = 0;
let totalRetirados = 0;
let totalCantidadesRetiradas = 0;

const addProductButton = document.getElementById('add-product');

addProductButton.addEventListener('click', () => {
    const producto = new Producto();
    almacen.agregarProducto(producto);
    totalAgregados++;

    const listItem = document.createElement('li');
    const productoInfo = document.createElement('span');
    productoInfo.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}, Precio: $${producto.precio.toFixed(2)}`;
    const botonnRetirar = document.createElement('button');
    botonnRetirar.textContent = 'Retirar';

    listItem.appendChild(productoInfo);
    listItem.appendChild(botonnRetirar);

    availableProductsList.appendChild(listItem);

    botonnRetirar.addEventListener('click', () => {
        const cantidadAEliminar = parseInt(prompt(`Cantidad a retirar de ${producto.nombre}:`, 1));

        if (!isNaN(cantidadAEliminar) && cantidadAEliminar > 0) {
            if (cantidadAEliminar <= producto.cantidad) {
                producto.cantidad -= cantidadAEliminar;
                productoInfo.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}, Precio: $${producto.precio.toFixed(2)}`;
                totalCantidadesRetiradas += cantidadAEliminar;
            } else {
                alert('La cantidad es insuficiente. No se pueden retirar más productos de los disponibles.');
            }
    
            if (producto.cantidad === 0) {
                totalAgregados--;
                totalRetirados++;
                availableProductsList.removeChild(listItem);
                listItem.removeChild(botonnRetirar); 
                removedProductsList.appendChild(listItem);
            }
        }
        actualizarTotales();
    });

    actualizarTotales();
});

function actualizarTotales() {
    totalAddedElement.textContent = totalAgregados;
    totalRemovedElement.textContent = totalRetirados;
    totalRemovedQuantityElement.textContent = totalCantidadesRetiradas; 
}
