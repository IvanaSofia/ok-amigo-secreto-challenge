
//Array para guardar los nombres de amigos
let amigos = [];

//función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);

    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agregá al menos un amigo para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const item = document.createElement("li");
    item.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    resultado.appendChild(item);

    const lista = document.getElementById("listaAmigos");
    const items = lista.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === amigoSorteado) {
            lista.removeChild(items[i]);
            break;
        }
    }

    // Si ya no quedan más amigos
    if (amigos.length === 0) {
        alert("Todos los amigos fueron sorteados.");

        // Borra el último nombre sorteado de pantalla
        resultado.innerHTML = "";

        // Oculta "Sortear amigo" y muestra "Sortear de nuevo"
        document.getElementById("btnSortear").style.display = "none";
        document.getElementById("btnReiniciar").style.display = "block";
    }
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Oculta botón de reinicio y vuelve a mostrar el de sortear
    document.getElementById("btnReiniciar").style.display = "none";
    document.getElementById("btnSortear").style.display = "block";
}

// Estado inicial
document.getElementById("btnReiniciar").style.display = "none";
