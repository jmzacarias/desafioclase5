class Cliente {
    constructor(nroCliente, nombre, cuit, domicilio) {
        this.nroCliente = nroCliente;
        this.nombre = nombre.toUpperCase();
        this.cuit = cuit;
        this.domicilio= domicilio;
    }
    confirmacion() {
        alert(`Bienvenido/a ${this.nombre}.\n
        Tu empresa fue incorporada con el nro de cliente: ${this.nroCliente}.\n
        Confirmá tus datos:\n
        CUIT: ${this.cuit}.-\n
        Domicilio: ${this.domicilio}.-`);
    }
    }

let nombre = prompt('Ingresá tu nombre o el de tu empresa');
let cuit = prompt('Ingresá tu número de CUIT');
let domicilio = prompt('Ingresá tu domicilio');


const cliente1 = new Cliente(1, nombre, cuit, domicilio);

cliente1.confirmacion();