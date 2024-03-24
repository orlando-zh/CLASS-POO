// Definición de las clases
class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.log("La edad debe ser un número positivo.");
        }
    }
}

class Empleado {
    constructor(nombre, salario) {
        this._nombre = nombre;
        this._salario = salario;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get salario() {
        return this._salario;
    }

    set salario(nuevoSalario) {
        this._salario = nuevoSalario;
    }
}

class Departamento {
    constructor(nombre) {
        this._nombre = nombre;
        this._empleados = [];
    }

    agregarEmpleado(empleado) {
        this._empleados.push(empleado);
    }

    calcularSalarioTotal() {
        let salarioTotal = 0;
        this._empleados.forEach(empleado => {
            salarioTotal += empleado.salario;
        });
        return salarioTotal;
    }
}

function agregarEmpleado() {
    const nombreEmpleado = document.getElementById('nombreEmpleado').value;
    const salarioEmpleado = parseFloat(document.getElementById('salarioEmpleado').value);
    const departamentoSeleccionado = document.getElementById('departamentoEmpleado').value;

    const empleado = new Empleado(nombreEmpleado, salarioEmpleado);
    empleado.departamento = departamentoSeleccionado;

    departamento.agregarEmpleado(empleado);

    mostrarEmpleadoYDepartamento(nombreEmpleado, departamentoSeleccionado);
    mostrarSalarioTotal();
}

function mostrarEmpleadoYDepartamento(nombreEmpleado, departamentoSeleccionado) {
    document.getElementById('nombreNuevoEmpleado').textContent = "Nuevo Empleado: " + nombreEmpleado;
    document.getElementById('nombreDepartamentoEmpleado').textContent = "Departamento: " + departamentoSeleccionado;
}

function mostrarSalarioTotal() {
    const salarioTotal = departamento.calcularSalarioTotal();
    document.getElementById('salarioTotal').textContent = "Salario total de departamentos: " + salarioTotal;
}


const persona = new Persona('Juan', 30);
const empleado = new Empleado('Pedro', 0);
const departamento = new Departamento('Ventas');
departamento.agregarEmpleado(empleado);

