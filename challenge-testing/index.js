class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    let total = 0
    for (let item of this.carrito) total += item.valor * item.cantidad;
    return total;
  }

  aplicarDescuento(porcentaje) {
    let total = this.calcularTotal()
    if (total <= 0 || porcentaje < 0) {
      throw Error("Error: Precio o porcentaje de descuento invalido");
    } else {
      const descuento = (total * porcentaje) / 100;
      const precioConDescuento = total - descuento;
      return precioConDescuento;
    }
  }
}


module.exports = CarritoCompra
