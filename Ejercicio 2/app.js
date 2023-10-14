import NumerosAleatorios from './numerosAleatorios.js';

const generarNumerosBoton = document.getElementById('generar-numeros');
const listaCompleta = document.getElementById('list-complet');
const listaPares = document.getElementById('list-par');
const listaImpares = document.getElementById('list-impar');

generarNumerosBoton.addEventListener('click', () => {
    const cantidadNumeros = 25;
    const numerosAleatorios = new NumerosAleatorios(cantidadNumeros);
    const todoLosNumero = numerosAleatorios.numeros;
    const pares = numerosAleatorios.obtenerPares();
    const impares = numerosAleatorios.obtenerImpares();

        listaCompleta.innerHTML = '';
        listaPares.innerHTML = '';
        listaImpares.innerHTML = '';

        todoLosNumero.forEach((numero) => {
        const listItem = document.createElement('li');
        listItem.textContent = numero;
        listaCompleta.appendChild(listItem);
    })

    pares.forEach((numero) => {
        const listItem = document.createElement('li');
        listItem.textContent = numero;
        listaPares.appendChild(listItem);
    });

    impares.forEach((numero) => {
        const listItem = document.createElement('li');
        listItem.textContent = numero;
        listaImpares.appendChild(listItem);
    })
})