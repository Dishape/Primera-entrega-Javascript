// Crear un algoritmo con un condicional.
// Crear un algoritmo utilizando un ciclo.
// Armar un simulador interactivo,, al estructura final de tu proyecto integrador.

// El objetivo del programa es simular, en modo jocoso, el comportamiento de una aseguradora que unicamente permite asegurarte en el plan mas costoso.

function Capitalizer(str) {
  const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  let properEnglish = str.toLowerCase();
  return capitalize(properEnglish);
}
let nombre = prompt("Ingrese su nombre");
nombre = Capitalizer(nombre);
let apellido = prompt("Ingrese su apellido");
apellido = Capitalizer(apellido);

let mayoriaEdad = true;

function malaAseguradora() {
  // La funcion entra en un bucle infinito hasta que la persona eliga el plan mas caro.

  let eligioPlan = false;
  while (!eligioPlan) {
    let tipoPlan = prompt("Prefiere el paquete basico, premium o deluxe?");
    switch (tipoPlan.toLowerCase()) {
      case "basico":
        alert(`Podria esforzarse un poco mas, no ${nombre}?`);
        break;
      case "premium":
        alert("Buena eleccion, pero tan poco vale su vida?");
        break;
      case "deluxe":
        eligioPlan = true;
        alert(
          `Excelente eleccion ${nombre} ${apellido}. El plan deluxe es por $500 anuales con un recargo de 5% si es fumador.`
        );
        let fumador = prompt("Es usted fumador?");
        fumador = fumador.toLowerCase();
        if (fumador === "si") {
          alert("El costo anual sera de " + 500 * 1.05);
        } else if (fumador === "no") {
          alert("El costo anual sera de $500.");
        } else {
          alert("Debe ingresar SI o NO. Por favor reconfirme sus datos.");
          malaAseguradora();
        }
        break;
      default:
        alert("Debe elegir un plan para cotizar su seguro.");
    }
  }
}
while (mayoriaEdad) {
  let esMayor = prompt("Es usted mayor de 18?");
  if (esMayor.toLowerCase() === "si") {
    mayoriaEdad = false;
    let quiereCotizar = prompt("Quiere cotizar un seguro?");
    if (quiereCotizar.toLowerCase() === "si") {
      let eligioSeguro = true;
      while (eligioSeguro) {
        let tipoSeguro = prompt(
          "Por favor seleccione que tipo de seguro desea. Puede elegir VIDA, ACCIDENTES PERSONALES o ELECTRO"
        );
        switch (tipoSeguro.toLowerCase()) {
          case "vida":
            eligioSeguro = false;
            malaAseguradora();
            break;
          case "accidentes personales":
            eligioSeguro = false;
            malaAseguradora();

          case "electro":
            eligioSeguro = false;
            malaAseguradora();
            break;
          default:
            alert(
              'Puede elegir las opciones "VIDA", "ACCIDENTES PERSONALES" o "ELECTRO"'
            );
        }
      }
    } else {
      alert(
        `Lamentamos no poder ayudarle ${nombre}. Siempre es bienvenido cuando desee.`
      );
    }
  } else if (esMayor.toLowerCase() === "no") {
    alert(
      `Estimado ${nombre} ${apellido}. Usted no tiene la edad suficiente para cotizar un seguro.`
    );
    mayoriaEdad = false;
  } else {
    alert("Por favor ingrese SI o NO.");
  }
}
