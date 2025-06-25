function saludar() {
    var input = document.getElementById("nombre");
    var salida = document.getElementById("saludo");
    if (input && salida) {
        var nombre = input.value.trim();
        salida.innerText = nombre ? "\u00A1Hola, ".concat(nombre, "!") : "Por favor, escribe tu nombre.";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementById("btnSaludar");
    if (boton) {
        boton.addEventListener("click", saludar);
    }
});
