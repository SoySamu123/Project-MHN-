function abrir(opcion) {

    if (opcion === "👤 Mi Perfil") { 

function abrir(opcion) {

    // tu código nuevo...
}function abrir(opcion) {

    if (opcion === "👤 Mi Perfil") {

        document.getElementById("contenido").innerHTML = `
            <div class="perfil">

                <h2>👤 MI PERFIL</h2>

                <div class="avatar">⚽</div>

                <h3>Nombre del jugador</h3>

                <input
                    id="nombreJugador"
                    type="text"
                    placeholder="Escribe tu nombre"
                >

                <h3>⚽ Posición</h3>

                <select id="posicionJugador">
                    <option>Centrocampista</option>
                    <option>Delantero</option>
                    <option>Extremo derecho</option>
                    <option>Extremo izquierdo</option>
                    <option>Defensa</option>
                    <option>Portero</option>
                </select>

                <div class="general">
                    <span>⭐ GENERAL</span>
                    <strong>79</strong>
                </div>

                <button onclick="guardarPerfil()">
                    💾 GUARDAR PERFIL
                </button>

            </div>
        `;

    } else {

        document.getElementById("contenido").innerHTML =
            `<h2>${opcion}</h2><p>🚧 Próximamente...</p>`;

    }
}


function guardarPerfil() {

    const nombre =
        document.getElementById("nombreJugador").value;

    const posicion =
        document.getElementById("posicionJugador").value;

    if (nombre.trim() === "") {

        alert("⚠️ Escribe tu nombre primero.");

        return;
    }

    alert(
        "✅ Perfil creado\n\n" +
        "Jugador: " + nombre +
        "\nPosición: " + posicion
    );
}