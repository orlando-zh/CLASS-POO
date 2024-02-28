// Se crea una clase padre "Producto"
class Producto {
    constructor(id, nombre, descripcion, precio) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  
    // Método para obtener el precio total del producto
    getPrecioTotal() {
      return this.precio;
    }
  
    // Método para agregar el producto al pedido
    agregarAlPedido() {
      // Implementar la lógica para agregar el producto al pedido
      console.log(`Se ha agregado ${this.nombre} a tu pedido.`);
    }
  }
  
  // Clases hijas que heredan de la clase "Producto"
  
  class HamburguesaConPapas extends Producto {
    constructor(id, nombre, descripcion, precio) {
      super(id, nombre, descripcion, precio);
    }
  }
  
  class TacosDeBirria extends Producto {
    constructor(id, nombre, descripcion, precio) {
      super(id, nombre, descripcion, precio);
    }
  }
  
  class Nachos extends Producto {
    constructor(id, nombre, descripcion, precio) {
      super(id, nombre, descripcion, precio);
    }
  }
  
  class Bebidas extends Producto {
    constructor(id, nombre, descripcion, precio) {
      super(id, nombre, descripcion, precio);
    }
  }
  
  // Función para obtener el producto seleccionado
  function obtenerProductoSeleccionado(id) {
    switch (id) {
      case 1:
        return new HamburguesaConPapas(1, "Hamburguesa con papas", "Deliciosa hamburguesa con carne de res, queso, lechuga, tomate y cebolla, acompañada de papas fritas.", 5.00);
      case 2:
        return new TacosDeBirria(2, "Tacos de Birria", "Jugosos tacos de birria con carne de res, consomé y cebolla.", 4.00);
      case 3:
        return new Nachos(3, "Nachos", "Crujientes nachos con queso, jalapeños, pico de gallo y guacamole.", 3.00);
      case 4:
        return new Bebidas(4, "Bebidas", "Variedad de bebidas de Coca-Cola, Fanta y Uva.", 1.50);
    }
  }
  
  // Se obtienen los botones para agregar productos
  const btnAgregar = document.querySelectorAll(".btn-agregar");
  
  // Se agrega un evento click a cada botón
  btnAgregar.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Se obtiene el ID del producto
      const id = parseInt(btn.parentNode.getAttribute("data-id"));
  
      // Se obtiene el producto seleccionado
      const producto = obtenerProductoSeleccionado(id);
  
      // Se agrega el producto al pedido
      producto.agregarAlPedido();
  
      // Se actualiza la lista de productos agregados en el DOM
      actualizarListaPedido(producto);
    });
  });
  
  // Función para actualizar la lista de productos agregados en el DOM
  function actualizarListaPedido(producto) {
    // Se obtiene la lista de productos agregados del DOM
    const listaPedido = document.querySelector(".pedido-list");
  
    // Se crea un elemento para el producto
    const itemPedido = document.createElement("li");
    itemPedido.classList.add("pedido-item");
  
    // Se agrega el nombre del producto al elemento
    const nombreProducto = document.createElement("span");
    nombreProducto.classList.add("nombre-producto");
    nombreProducto.textContent = producto.nombre;
    itemPedido.appendChild(nombreProducto);
  
    // Se agrega el precio del producto al elemento
    const precioProducto = document.createElement("span");
    precioProducto.classList.add("precio-producto");
    precioProducto.textContent = `$${producto.precio}`;
    itemPedido.appendChild(precioProducto);
  
    // Se agrega el elemento a la lista
    listaPedido.appendChild(itemPedido);
  }