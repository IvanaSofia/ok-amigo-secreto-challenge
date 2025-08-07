//Array para guardar los nombres de amigos
const amigos = [];

function agregarAmigo() {
    //  Capturar el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // trim() elimina espacios al principio y al final

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //hacer que el nombre no se repita  
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    //  Agregar el nombre al array
    amigos.push(nombre);

    //  Mostrar el nombre en la lista de amigos
    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);

    //  Limpiar el campo de entrada
    input.value = "";


}