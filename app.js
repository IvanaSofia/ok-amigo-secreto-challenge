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

function sortearAmigo() {
    //  Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Agregá al menos un amigo para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre en ese índice
    const amigoSorteado = amigos[indiceAleatorio];

    //  Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}