function cambiarColorFondo() {
  const colores = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

  document.body.style.backgroundColor = colorAleatorio;

  const texto = document.getElementById("colorActual");
  texto.innerText = `Color actual: ${colorAleatorio}`;
}
