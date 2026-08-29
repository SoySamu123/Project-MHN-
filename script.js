// ==========================================
// PROJECT MHN - MI PERFIL
// ==========================================

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

                    <strong id="generalJugador">0</strong>

                </div>


                <h3>📊 ESTADÍSTICAS</h3>


                <label>
                    Velocidad:
                    <span id="velocidadValor">0</span>
                </label>

                <input
                    id="velocidad"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >


                <label>
                    Pase:
                    <span id="paseValor">0</span>
                </label>

                <input
                    id="pase"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >


                <label>
                    Regate:
                    <span id="regateValor">0</span>
                </label>

                <input
                    id="regate"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >


                <label>
                    Tiro:
                    <span id="tiroValor">0</span>
                </label>

                <input
                    id="tiro"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >


                <label>
                    Resistencia:
                    <span id="resistenciaValor">0</span>
                </label>

                <input
                    id="resistencia"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >


                <label>
                    Agilidad:
                    <span id="agilidadValor">0</span>
                </label>

                <input
                    id="agilidad"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >


                <label>
                    Control:
                    <span id="controlValor">0</span>
                </label>

                <input
                    id="control"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >


                <br><br>


                <button onclick="guardarPerfil()">
                    💾 GUARDAR PERFIL
                </button>

            </div>
        `;

        cargarPerfil();

        activarEstadisticas();

        return;
    }


    contenido.innerHTML = `
        <h2>${opcion}</h2>
        <p>🚧 Próximamente...</p>
    `;
}


// ==========================================
// ESTADÍSTICAS
// ==========================================

const estadisticas = [

    "velocidad",
    "pase",
    "regate",
    "tiro",
    "resistencia",
    "agilidad",
    "control"

];


// ==========================================
// ACTIVAR ESTADÍSTICAS
// ==========================================

function activarEstadisticas() {

    estadisticas.forEach(function(id) {

        const slider =
            document.getElementById(id);

        const valor =
            document.getElementById(id + "Valor");


        slider.addEventListener("input", function() {

            valor.textContent =
                this.value;

            calcularGeneral();

        });

    });

}


// ==========================================
// CALCULAR GENERAL
// ==========================================

function calcularGeneral() {

    let total = 0;


    estadisticas.forEach(function(id) {

        const slider =
            document.getElementById(id);

        total += Number(slider.value);

    });


    const general =
        Math.round(
            total / estadisticas.length
        );


    document.getElementById(
        "generalJugador"
    ).textContent = general;

}


// ==========================================
// GUARDAR PERFIL
// ==========================================

function guardarPerfil() {

    const datos = {

        nombre:
            document.getElementById(
                "nombreJugador"
            ).value,

        posicion:
            document.getElementById(
                "posicionJugador"
            ).value,

        estadisticas: {}

    };


    estadisticas.forEach(function(id) {

        datos.estadisticas[id] =
            document.getElementById(id).value;

    });


    localStorage.setItem(
        "projectMHNPerfil",
        JSON.stringify(datos)
    );


    alert("💾 ¡PERFIL GUARDADO!");

}


// ==========================================
// CARGAR PERFIL
// ==========================================

function cargarPerfil() {

    const guardado =
        localStorage.getItem(
            "projectMHNPerfil"
        );


    if (!guardado) {

        calcularGeneral();

        return;

    }


    const datos =
        JSON.parse(guardado);


    document.getElementById(
        "nombreJugador"
    ).value =
        datos.nombre || "";


    document.getElementById(
        "posicionJugador"
    ).value =
        datos.posicion ||
        "Centrocampista";


    estadisticas.forEach(function(id) {

        const valor =
            datos.estadisticas &&
            datos.estadisticas[id]
            ? datos.estadisticas[id]
            : 0;


        document.getElementById(id).value =
            valor;


        document.getElementById(
            id + "Valor"
        ).textContent =
            valor;

    });


    calcularGeneral();

}