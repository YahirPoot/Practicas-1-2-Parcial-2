export default class NumerosAleatorios {
    constructor(cantidad) {
        this.numeros = [];
        for(let i = 0; i < cantidad; i++) {
            this.numeros.push(Math.floor(Math.random() * 50) + 1);
        }
    }

    obtenerPares() {
        return this.numeros.filter((numero) => numero % 2 === 0);
    }

    obtenerImpares() {
        return this.numeros.filter((numero) => numero % 2 !== 0);
    }
}