const CarritoCompra = require("../index");

describe("Probando la funcion CarritoCompra", () => {
  let carrito;
  const producto1 = { nombre: "Camiseta", valor: 20, cantidad: 3 };
  const producto2 = { nombre: "Pantalón", valor: 35, cantidad: 2 };
  const producto3 = { nombre: "Zapatillas", valor: 50, cantidad: 1 };

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it("Debe ser una clase nuestro carrito compra", ()=>{
    expect(typeof CarritoCompra.prototype.constructor).toBe("function")
  })

  it("Inicializa el carrito como un array vacio", () => {
    expect(carrito.carrito).toEqual([]);
  });

  it("Recibe un objeto representando un producto y lo agrega al carrito.", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);

    expect(carrito.carrito).toContain(producto1);
    expect(carrito.carrito).toContain(producto2);
    expect(carrito.carrito).toContain(producto3);
  });

  it("Calcula el total de la compra sumando los precios de todos los productos en el carrito.", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);

    expect(carrito.calcularTotal()).toBe(180);
  });

  it("Aplica un descuento al total de la compra según el porcentaje especificado.", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);

    expect(carrito.aplicarDescuento(20)).toBe(144);
  });
});
