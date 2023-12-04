const botonComenzar = document.getElementById('btnComenzar');
const enviarInput = document.getElementById("enviar");
const btnEnviar = document.getElementById("btnEnviar");

let numero;
let intentos = 0;
 // generar un número aleatorio
 function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }
// iniciar jueago
function iniciarJuego() {
    numero = generarNumeroAleatorio();
    intentos = 0;
    alert("Número mágico generado. ¡Adivina el número!");
    console.log(numero)
}

// Función para verificar el número ingresado por el usuario
function verificarNumero() {
    const numeroUsuario = parseInt(enviarInput.value);

    if (isNaN(numeroUsuario)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }

    intentos++;

    if (numeroUsuario === numero) {
        alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        iniciarJuego();
      } else if (numeroUsuario < numero) {
        alert("El número ingresado es menor. Intenta nuevamente.");
      } else {
        alert("El número ingresado es mayor. Intenta nuevamente.");
      }
  
      enviarInput.value = "";
    }

// comenzar el juego
botonComenzar.addEventListener("click", iniciarJuego);
// verificar el número ingresado
btnEnviar.addEventListener("click", verificarNumero);