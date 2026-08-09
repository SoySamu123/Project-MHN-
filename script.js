function abrir(opcion) {

    const contenido = document.getElementById("contenido");

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
                    <span>⭐ GENERAL</span>
                    <strong id="generalJugador">0</strong>
                </div>

                <h3>🧠 MENTALIDAD</h3>

                <label>Templanza: <span id="temp">0</span></label>
                <input id="templanza" type="range" min="0" max="100" value="0">

                <label>Estabilidad: <span id="est">0</span></label>
                <input id="estabilidad" type="range" min="0" max="100" value="0">

                <h3>💪 FÍSICO</h3>

                <label>Velocidad: <span id="vel">0</span></label>
                <input id="velocidad" type="range" min="0" max="100" value="0">

                <label>Resistencia: <span id="res">0</span></label>
                <input id="resistencia" type="range" min="0" max="100" value="0">

                <h3>🎯 TÉCNICA</h3>

                <label>Regate: <span id="reg">0</span></label>
                <input id="regate" type="range" min="0" max="100" value="0">

                <label>Pase: <span id="pas">0</span></label>
                <input id="pase" type="range" min="0" max="100" value="0">

                <label>Tiro: <span id="tir">0</span></label>
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
        ["templanza", "temp"],
        ["estabilidad", "est"],
        ["velocidad", "vel"],
        ["resistencia", "res"],
        ["regate", "reg"],
        ["pase", "pas"],
        ["tiro", "tir"]
    ];

    datos.forEach(function(dato) {

        const slider = document.getElementById(dato[0]);
        const numero = document.getElementById(dato[1]);

        slider.addEventListener("input", function() {

            numero.textContent = slider.value;

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

        total += Number(
            document.getElementById(id).value
        );

    });

    const general = Math.round(total / datos.length);

    document.getElementById("generalJugador").textContent = general;
}


function guardarPerfil() {

    const nombre =
        document.getElementById("nombreJugador").value;

    const posicion =
        document.getElementById("posicionJugador").value;

    localStorage.setItem("mhnNombre", nombre);
    localStorage.setItem("mhnPosicion", posicion);

    alert("✅ ¡Perfil guardado!");
}