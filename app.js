/ Array para guardar los nombres de amigos
const amigos = [];

function agregarAmigo() {
    // 1. Capturar el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // trim() elimina espacios al principio y al final

    // 2. Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 3. Agregar el nombre al array
    amigos.push(nombre);

    // 4. Mostrar el nombre en la lista de amigos
    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);

    // 5. Limpiar el campo de entrada
    input.value = "";
}