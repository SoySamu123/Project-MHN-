// ==========================================
// PROJECT MHN
// ==========================================


// ==========================================
// ESTADÍSTICAS DEL JUGADOR
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
// ABRIR SECCIONES
// ==========================================

function abrir(opcion) {

    const contenido =
        document.getElementById("contenido");


    // ======================================
    // MI PERFIL
    // ======================================

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


                <h3>📊 ESTADÍSTICAS</h3>


                ${crearEstadistica(
                    "velocidad",
                    "Velocidad"
                )}

                ${crearEstadistica(
                    "pase",
                    "Pase"
                )}

                ${crearEstadistica(
                    "regate",
                    "Regate"
                )}

                ${crearEstadistica(
                    "tiro",
                    "Tiro"
                )}

                ${crearEstadistica(
                    "resistencia",
                    "Resistencia"
                )}

                ${crearEstadistica(
                    "agilidad",
                    "Agilidad"
                )}

                ${crearEstadistica(
                    "control",
                    "Control"
                )}


                <br>

                <button onclick="guardarPerfil()">
                    💾 GUARDAR PERFIL
                </button>

            </div>

        `;


        cargarPerfil();

        activarEstadisticas();

        return;
    }


    // ======================================
    // MI CLUB
    // ======================================

    if (opcion === "🏟️ Mi Club") {

        contenido.innerHTML = `

            <div class="perfil">

                <h2>🏟️ MI CLUB</h2>

                <div class="avatar">
                    🛡️
                </div>


                <h3>🏷️ Nombre del club</h3>

                <input
                    id="nombreClub"
                    type="text"
                    placeholder="Escribe el nombre de tu club"
                >


                <h3>🌎 País</h3>

                <input
                    id="paisClub"
                    type="text"
                    placeholder="Escribe el país"
                >


                <h3>🎨 Color principal</h3>

                <input
                    id="colorClub"
                    type="text"
                    placeholder="Ejemplo: Azul"
                >


                <div class="general">

                    ⭐ NIVEL DEL CLUB

                    <strong>1</strong>

                </div>


                <div class="general">

                    💰 PRESUPUESTO

                    <strong>1000</strong>

                </div>


                <button onclick="guardarClub()">
                    💾 GUARDAR CLUB
                </button>


                <hr style="
                    margin:30px 0;
                    opacity:0.3;
                ">


                <h2>👥 PLANTILLA</h2>


                <button onclick="mostrarCrearJugador()">
                    ➕ AÑADIR JUGADOR
                </button>


                <div id="plantilla">

                </div>


                <div id="crearJugador">

                </div>

            </div>

        `;


        cargarClub();

        mostrarPlantilla();

        return;
    }


    // ======================================
    // OTRAS SECCIONES
    // ======================================

    contenido.innerHTML = `

        <h2>${opcion}</h2>

        <p>🚧 Próximamente...</p>

    `;

}


// ==========================================
// CREAR ESTADÍSTICA
// ==========================================

function crearEstadistica(id, nombre) {

    return `

        <div style="
            margin:18px 0;
            text-align:left;
        ">

            <label>

                ${nombre}:

                <span id="${id}Valor">
                    0
                </span>

            </label>


            <input
                id="${id}"
                type="range"
                min="0"
                max="100"
                value="0"
                style="width:100%;"
            >

        </div>

    `;
}


// ==========================================
// ACTIVAR ESTADÍSTICAS
// ==========================================

function activarEstadisticas() {

    estadisticas.forEach(function(id) {

        const slider =
            document.getElementById(id);

        const valor =
            document.getElementById(
                id + "Valor"
            );


        if (!slider || !valor) {
            return;
        }


        slider.addEventListener(
            "input",
            function() {

                valor.textContent =
                    this.value;

                calcularGeneral();

            }
        );

    });

}


// ==========================================
// GENERAL
// ==========================================

function calcularGeneral() {

    let total = 0;

    let cantidad = 0;


    estadisticas.forEach(function(id) {

        const slider =
            document.getElementById(id);


        if (!slider) {
            return;
        }


        total +=
            Number(slider.value);

        cantidad++;

    });


    if (cantidad === 0) {
        return;
    }


    const general =
        Math.round(
            total / cantidad
        );


    const elemento =
        document.getElementById(
            "generalJugador"
        );


    if (elemento) {

        elemento.textContent =
            general;

    }

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

        const slider =
            document.getElementById(id);


        if (slider) {

            datos.estadisticas[id] =
                slider.value;

        }

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


    const nombre =
        document.getElementById(
            "nombreJugador"
        );


    const posicion =
        document.getElementById(
            "posicionJugador"
        );


    if (nombre) {

        nombre.value =
            datos.nombre || "";

    }


    if (posicion) {

        posicion.value =
            datos.posicion ||
            "Centrocampista";

    }


    estadisticas.forEach(function(id) {

        const slider =
            document.getElementById(id);


        const valor =
            document.getElementById(
                id + "Valor"
            );


        if (!slider) {
            return;
        }


        const numero =
            datos.estadisticas &&
            datos.estadisticas[id] !== undefined
                ? datos.estadisticas[id]
                : 0;


        slider.value =
            numero;


        if (valor) {

            valor.textContent =
                numero;

        }

    });


    calcularGeneral();

}


// ==========================================
// GUARDAR CLUB
// ==========================================

function guardarClub() {

    const club = {

        nombre:
            document.getElementById(
                "nombreClub"
            ).value,

        pais:
            document.getElementById(
                "paisClub"
            ).value,

        color:
            document.getElementById(
                "colorClub"
            ).value

    };


    localStorage.setItem(
        "projectMHNClub",
        JSON.stringify(club)
    );


    alert("💾 ¡CLUB GUARDADO!");

}


// ==========================================
// CARGAR CLUB
// ==========================================

function cargarClub() {

    const guardado =
        localStorage.getItem(
            "projectMHNClub"
        );


    if (!guardado) {
        return;
    }


    const club