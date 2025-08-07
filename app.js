
//Array para guardar los nombres de amigos
let amigos = [];
//función para agregar amigos
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


    // Obtener y eliminar el nombre sorteado
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    //  Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
     const item = document.createElement("li");
    item.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    resultado.appendChild(item);

    // Eliminar el <li> correspondiente de la lista visual
    const lista = document.getElementById("listaAmigos");
    const items = lista.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === amigoSorteado) {
            lista.removeChild(items[i]);
            break; // solo uno coincide, así que salimos del bucle
        }
    }


    // Si ya no quedan más amigos, mostrar alerta
    if (amigos.length === 0) {
        alert("Todos los amigos fueron sorteados.");
    }
}


