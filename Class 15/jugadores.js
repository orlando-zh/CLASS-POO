class Jugador {
  constructor(nombre, posicion) {
    this.nombre = nombre;
    this.posicion = posicion;
  }

  mostrarPosicion() {
    return `El jugador ${this.nombre} juega en la posición ${this.posicion}`;
  }
}

class Jugador1 extends Jugador {
  mostrarPosicion() {
    return `El jugador ${this.nombre} juega en la posición ${this.posicion}`;
  } 
}

class Jugador2 extends Jugador {
  mostrarPosicion() {
    return `El jugador ${this.nombre} juega en la posición ${this.posicion}`;
  } 
}

const messi = new Jugador1('Messi', 'Delantero');
const magicoGonzalez = new Jugador2('El Mágico González', 'Mediocampista ofensivo');

console.log(messi.mostrarPosicion());
console.log(magicoGonzalez.mostrarPosicion());
