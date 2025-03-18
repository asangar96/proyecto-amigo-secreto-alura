let amigos = JSON.parse(localStorage.getItem("amigos")) || [];

// Elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Elementos del popup
const popup = document.getElementById("popup");
const mensajePopup = document.getElementById("mensajePopup");

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }

    amigos.push(nombre);
    localStorage.setItem("amigos", JSON.stringify(amigos));
    mostrarLista();
    inputAmigo.value = ""; // Limpiar el input
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    localStorage.setItem("amigos", JSON.stringify(amigos));
    mostrarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length <= 1) {
        // Si hay uno o menos amigos, mostrar la alerta de restricción
        alert("Para sortear, debe haber al menos dos nombres en la lista.");
        return; // Detener la ejecución de la función si hay solo un nombre
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el popup con el ganador
    mensajePopup.textContent = `🎉 El amigo secreto es: ${amigoSorteado} 🎉`;
    popup.style.display = "flex"; // Usamos "flex" para activar el popup centrado

    // Reiniciar el juego después de 4 segundos
    setTimeout(() => {
        reiniciarJuego();
    }, 4000); // Espera 4 segundos antes de reiniciar el juego
}

// Función para cerrar el popup
function cerrarPopup() {
    popup.style.display = "none"; // Ocultar el popup
    reiniciarJuego(); // Reiniciar el juego cuando se cierre el popup
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos
    localStorage.removeItem("amigos"); // Eliminar el almacenamiento local
    mostrarLista(); // Actualizar la lista visual
    resultado.innerHTML = ""; // Limpiar el resultado mostrado
}

// Mostrar la lista si hay datos en localStorage
mostrarLista();
