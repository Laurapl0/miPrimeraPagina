function saludar(): void {
  const input = document.getElementById("nombre") as HTMLInputElement;
  const salida = document.getElementById("saludo");

  if (input && salida) {
    const nombre = input.value.trim();
    salida.innerText = nombre ? `¡Hola, ${nombre}!` : "Por favor, escribe tu nombre.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnSaludar");
  if (boton) {
    boton.addEventListener("click", saludar);
  }
});
