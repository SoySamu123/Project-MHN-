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

            </div>
        `;

    } else {

        contenido.innerHTML = `
            <h2>${opcion}</h2>
            <p>🚧 Próximamente...</p>
        `;

    }
}