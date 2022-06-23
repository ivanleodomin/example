//Lista de alfajores || precio

class Alfajor {
  constructor(marca, precio, id) {
    this.marca = marca;
    this.precio = precio;
    this.id = id;
  }
}

const alfGuaymallen = new Alfajor("Guaymallen", 10, "1");
const alfJorgito = new Alfajor("Jorgito", 150, "2");
const alfOreo = new Alfajor("oreo", 500, "3");
const alfMilka = new Alfajor("milka", 100, "4");
const alfAguila = new Alfajor("aguila", 1000, "5");

let gastoTotal = 0;

const sumarProducto = (producto) => (gastoTotal += producto);

function comprar() {
  let continuar = true;
  alert("Bienvenido a la fabrica de alfajores, mira nuestro catalogo");

  while (continuar) {
    let producto = prompt(`
    Catalogo de alfajores:
    ${alfGuaymallen.id} - ${alfGuaymallen['marca']} $${alfGuaymallen.precio}
    ${alfJorgito.id} - ${alfJorgito.marca} $${alfJorgito.precio}
    ${alfOreo.id} - ${alfOreo.marca} $${alfOreo.precio}
    ${alfMilka.id} - ${alfMilka.marca} $${alfMilka.precio}
    ${alfAguila.id} - ${alfAguila.marca} $${alfAguila.precio}
    6 - Salir
    Ingrese el numero de la izquierda para comprar

    Gastaste: $${gastoTotal}
    `);


    switch (producto) {
      case "1":
        sumarProducto(alfGuaymallen.precio);
        break;
      case "2":
        sumarProducto(alfJorgito.precio);
        break;
      case "3":
        sumarProducto(alfOreo.precio);
        break;
      case "4":
        sumarProducto(alfMilka.precio);
        break;
      case "5":
        sumarProducto(alfAguila.precio);
        break;
      case "6":
        continuar = false;
        break;
      default:
        alert("El valor ingresado no es valido");
        break;
    }

    if (producto != "6") continuar = confirm("Desea seguir?");
  }

  alert(`Me debes $${gastoTotal}`);
}

comprar();
