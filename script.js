function abrir(opcion) {

    const contenido =
        document.getElementById("contenido");

    if (opcion === "👤 Mi Perfil") {

        contenido.innerHTML = `
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

                    ⭐ GENERAL

                    <strong id="generalJugador">
                        0
                    </strong>

                </div>

                <button onclick="guardarPerfil()">
                    💾 GUARDAR PERFIL
                </button>

            </div>
        `;

        cargarPerfil();

    } else {

        contenido.innerHTML = `
            <h2>${opcion}</h2>
            <p>🚧 Próximamente...</p>
        `;

    }
}


function guardarPerfil() {

    const nombre =
        document.getElementById("nombreJugador").value;

    const posicion =
        document.getElementById("posicionJugador").value;

    localStorage.setItem(
        "mhnNombre",
        nombre
    );

    localStorage.setItem(
        "mhnPosicion",
        posicion
    );

    alert("💾 ¡PERFIL GUARDADO!");
}


function cargarPerfil() {

    const nombreGuardado =
        localStorage.getItem("mhnNombre");

    const posicionGuardada =
        localStorage.getItem("mhnPosicion");

    if (nombreGuardado !== null) {

        document.getElementById("nombreJugador").value =
            nombreGuardado;

    }

    if (posicionGuardada !== null) {

        document.getElementById("posicionJugador").value =
            posicionGuardada;

    }
}