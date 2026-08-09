// ================================
// PROJECT MHN - SCRIPT PRINCIPAL
// ================================

function abrir(opcion) {

    const contenido = document.getElementById("contenido");

    // ================================
    // MI PERFIL
    // ================================

    if (opcion === "👤 Mi Perfil") {

        contenido.innerHTML = `

        <div class="perfil">

            <h2>👤 MI PERFIL</h2>

            <div class="avatar">
                ⚽
            </div>

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


            <!-- GENERAL -->

            <div class="general">

                <span>⭐ GENERAL</span>

                <strong id="generalJugador">0</strong>

            </div>


            <!-- MENTALIDAD -->

            <h3>🧠 MENTALIDAD</h3>

            <label>
                Templanza:
                <span id="tempValor">0</span>
            </label>

            <input
                id="templanza"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Estabilidad:
                <span id="estaValor">0</span>
            </label>

            <input
                id="estabilidad"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Percepción ofensiva:
                <span id="poValor">0</span>
            </label>

            <input
                id="percepcionOfensiva"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Percepción defensiva:
                <span id="pdValor">0</span>
            </label>

            <input
                id="percepcionDefensiva"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Trabajo en equipo:
                <span id="teValor">0</span>
            </label>

            <input
                id="trabajoEquipo"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <!-- FÍSICO -->

            <h3>💪 FÍSICO</h3>

            <label>
                Resistencia:
                <span id="resValor">0</span>
            </label>

            <input
                id="resistencia"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Velocidad:
                <span id="velValor">0</span>
            </label>

            <input
                id="velocidad"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Agilidad:
                <span id="agiValor">0</span>
            </label>

            <input
                id="agilidad"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Aceleración:
                <span id="aceValor">0</span>
            </label>

            <input
                id="aceleracion"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <!-- TÉCNICA -->

            <h3>🎯 TÉCNICA</h3>

            <label>
                Regate:
                <span id="regValor">0</span>
            </label>

            <input
                id="regate"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Pase:
                <span id="pasValor">0</span>
            </label>

            <input
                id="pase"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <label>
                Tiro:
                <span id="tirValor">0</span>
            </label>

            <input
                id="tiro"
                type="range"
                min="0"
                max="100"
                value="0"
            >


            <br>

            <button onclick="guardarPerfil()">
                💾 GUARDAR PERFIL
            </button>

        </div>

        `;

        activarEstadisticas();

        return;
    }


    // ================================
    // MI CLUB
    // ================================

    if (opcion === "🏟️ Mi Club") {

        contenido.innerHTML = `
            <h2>🏟️ MI CLUB</h2>
            <p>🚧 Próximamente...</p>
        `;

        return;
    }


    // ================================
    // ESTADÍSTICAS
    // ================================

    if (opcion === "📊 Estadísticas") {

        contenido.innerHTML = `
            <h2>📊 ESTADÍSTICAS</h2>
            <p>🚧 Próximamente...</p>
        `;

        return;
    }


    // ================================
    // IA MHN
    // ================================

    if (opcion === "🤖 IA MHN") {

        contenido.innerHTML = `
            <h2>🤖 IA MHN</h2>
            <p>🚧 Próximamente...</p>
        `;

        return;
    }
}


// ====================================
// ACTIVAR ESTADÍSTICAS
// ====================================

function activarEstadisticas() {

    const estadisticas = [

        ["templanza", "tempValor"],
        ["estabilidad", "estaValor"],
        ["percepcionOfensiva", "poValor"],
        ["percepcionDefensiva", "pdValor"],
        ["trabajoEquipo", "teValor"],

        ["resistencia", "resValor"],
        ["velocidad", "velValor"],
        ["agilidad", "agiValor"],
        ["aceleracion", "aceValor"],

        ["regate", "regValor"],
        ["pase", "pasValor"],
        ["tiro", "tirValor"]

    ];


    estadisticas.forEach(function(item) {

        const slider = document.getElementById(item[0]);
        const numero = document.getElementById(item[1]);


        slider.addEventListener("input", function() {

            numero.textContent = slider.value;

            calcularGeneral();

        });

    });

}


// ====================================
// CALCULAR GENERAL
// ====================================

function calcularGeneral() {

    const estadisticas = [

        "templanza",
        "estabilidad",
        "percepcionOfensiva",
        "percepcionDefensiva",
        "trabajoEquipo",

        "resistencia",
        "velocidad",
        "agilidad",
        "aceleracion",

        "regate",
        "pase",
        "tiro"

    ];


    let total = 0;


    estadisticas.forEach(function(id) {

        const elemento = document.getElementById(id);

        total += Number(elemento.value);

    });


    const general =
        Math.round(total / estadisticas.length);


    document.getElementById("generalJugador").textContent =
        general;

}


// ====================================
// GUARDAR PERFIL
// ====================================

function guardarPerfil() {

    const nombre =
        document.getElementById("nombreJugador").value;

    const posicion =
        document.getElementById("posicionJugador").value;


    if (nombre.trim() === "") {

        alert("⚠️ Escribe tu nombre primero.");

        return;

    }


    localStorage.setItem(
        "mhnNombre",
        nombre
    );


    localStorage.setItem(
        "mhnPosicion",
        posicion
    );


    alert(
        "✅ ¡PERFIL GUARDADO!\n\n" +
        "Jugador: " + nombre +
        "\nPosición: " + posicion
    );

}