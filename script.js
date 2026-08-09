function abrir(opcion) {

    const contenido = document.getElementById("contenido");

    if (opcion === "👤 Mi Perfil") {

        contenido.innerHTML = `
            <div class="perfil">

                <h2>👤 MI PERFIL</h2>

                <div class="avatar">⚽</div>

                <input
                    id="nombreJugador"
                    type="text"
                    placeholder="Nombre del jugador"
                >

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
                    <strong id="generalJugador">0</strong>
                </div>

                <h3>🧠 MENTALIDAD</h3>

                <label>Templanza: <span id="v1">0</span></label>
                <input id="templanza" type="range" min="0" max="100" value="0">

                <label>Estabilidad: <span id="v2">0</span></label>
                <input id="estabilidad" type="range" min="0" max="100" value="0">

                <h3>💪 FÍSICO</h3>

                <label>Velocidad: <span id="v3">0</span></label>
                <input id="velocidad" type="range" min="0" max="100" value="0">

                <label>Resistencia: <span id="v4">0</span></label>
                <input id="resistencia" type="range" min="0" max="100" value="0">

                <h3>🎯 TÉCNICA</h3>

                <label>Regate: <span id="v5">0</span></label>
                <input id="regate" type="range" min="0" max="100" value="0">

                <label>Pase: <span id="v6">0</span></label>
                <input id="pase" type="range" min="0" max="100" value="0">

                <label>Tiro: <span id="v7">0</span></label>
                <input id="tiro" type="range" min="0" max="100" value="0">

                <br><br>

                <button onclick="guardarPerfil()">
                    💾 GUARDAR PERFIL
                </button>

            </div>
        `;

        activarEstadisticas();
        return;
    }

    contenido.innerHTML = `
        <h2>${opcion}</h2>
        <p>🚧 Próximamente...</p>
    `;
}


function activarEstadisticas() {

    const datos = [
        ["templanza","v1"],
        ["estabilidad","v2"],
        ["velocidad","v3"],
        ["resistencia","v4"],
        ["regate","v5"],
        ["pase","v6"],
        ["tiro","v7"]
    ];

    datos.forEach(function(dato) {

        document.getElementById(dato[0])
        .addEventListener("input", function() {

            document.getElementById(dato[1]).textContent =
                this.value;

            calcularGeneral();
        });
    });
}


function calcularGeneral() {

    const datos = [
        "templanza",
        "estabilidad",
        "velocidad",
        "resistencia",
        "regate",
        "pase",
        "tiro"
    ];

    let total = 0;

    datos.forEach(function(id) {
        total += Number(document.getElementById(id).value);
    });

    document.getElementById("generalJugador").textContent =
        Math.round(total / datos.length);
}


function guardarPerfil() {

    const nombre =
        document.getElementById("nombreJugador").value;

    const posicion =
        document.getElementById("posicionJugador").value;

    localStorage.setItem("mhnNombre", nombre);
    localStorage.setItem("mhnPosicion", posicion);

    alert("✅ ¡PERFIL GUARDADO!");
}