class Personas {
  constructor(nombre) {
    this.nombre = nombre;
  }
  comprarMedicamento(medicamento) {
    console.log(`${this.nombre} compra el medicamento ${medicamento.nombre}`);
  }
}

class PersonaA extends Personas {
  comprarMedicamento(medicamento) {
    console.log(`${this.nombre} compra el medicamento ${medicamento.nombre}`);
  }
}

class PersonaB extends Personas {
  comprarMedicamento(medicamento) {
    console.log(`${this.nombre} compra el medicamento ${medicamento.nombre}`);
  }
}

class Medicamento {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

let Pancracio = new PersonaA('Pancracio');
let Manolo = new PersonaB('Manolo');
let paracetamol = new Medicamento('Paracetamol');
let ibuprofeno = new Medicamento('Ibuprofeno');

Pancracio.comprarMedicamento(paracetamol);
Manolo.comprarMedicamento(ibuprofeno);
