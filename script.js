// ==========================================
// PROJECT MHN
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
// ABRIR
// ==========================================

function abrir(opcion) {

    const contenido = document.getElementById("contenido");

    // ================================
    // MI PERFIL
    // ================================

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

                ${crearEstadistica("velocidad", "Velocidad")}
                ${crearEstadistica("pase", "Pase")}
                ${crearEstadistica("regate", "Regate")}
                ${crearEstadistica("tiro", "Tiro")}
                ${crearEstadistica("resistencia", "Resistencia")}
                ${crearEstadistica("agilidad", "Agilidad")}
                ${crearEstadistica("control", "Control")}

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


    // ================================
    // MI CLUB
    // ================================

    if (opcion === "🏟️ Mi Club") {

        contenido.innerHTML = `
            <div class="perfil">

                <h2>🏟️ MI CLUB</h2>

                <div class="avatar">🛡️</div>

                <h3>🏷️ Nombre del club</h3>

                <input
                    id="nombreClub"
                    type="text"
                    placeholder="Nombre del club"
                >

                <h3>🌎 País</h3>

                <input
                    id="paisClub"
                    type="text"
                    placeholder="País"
                >

                <h3>🎨 Color principal</h3>

                <input
                    id="colorClub"
                    type="text"
                    placeholder="Color"
                >

                <div class="general">
                    ⭐ NIVEL
                    <strong>1</strong>
                </div>

                <div class="general">
                    💰 PRESUPUESTO
                    <strong>1000</strong>
                </div>

                <button onclick="guardarClub()">
                    💾 GUARDAR CLUB
                </button>

                <hr>

                <h2>👥 PLANTILLA</h2>

                <button onclick="mostrarFormularioJugador()">
                    ➕ AÑADIR JUGADOR
                </button>

                <div id="formularioJugador"></div>

                <div id="plantilla"></div>

            </div>
        `;

        cargarClub();
        mostrarPlantilla();

        return;
    }


    // ================================
    // OTRAS OPCIONES
    // ================================

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
        <div style="margin:18px 0;text-align:left;">

            <label>
                ${nombre}:
                <span id="${id}Valor">0</span>
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

        const slider = document.getElementById(id);
        const valor = document.getElementById(id + "Valor");

        if (!slider || !valor) return;

        slider.oninput = function() {

            valor.textContent = slider.value;

            calcularGeneral();

        };

    });

}


// ==========================================
// GENERAL
// ==========================================

function calcularGeneral() {

    let total = 0;
    let cantidad = 0;

    estadisticas.forEach(function(id) {

        const slider = document.getElementById(id);

        if (!slider) return;

        total += Number(slider.value);
        cantidad++;

    });

    if (cantidad === 0) return;

    const general = Math.round(total / cantidad);

    const elemento =
        document.getElementById("generalJugador");

    if (elemento) {
        elemento.textContent = general;
    }

}


// ==========================================
// GUARDAR PERFIL
// ==========================================

function guardarPerfil() {

    const datos = {
        nombre:
            document.getElementById("nombreJugador").value,

        posicion:
            document.getElementById("posicionJugador").value,

        estadisticas: {}
    };


    estadisticas.forEach(function(id) {

        const slider = document.getElementById(id);

        if (slider) {
            datos.estadisticas[id] = slider.value;
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
        localStorage.getItem("projectMHNPerfil");

    if (!guardado) {
        calcularGeneral();
        return;
    }


    try {

        const datos = JSON.parse(guardado);


        document.getElementById("nombreJugador").value =
            datos.nombre || "";


        document.getElementById("posicionJugador").value =
            datos.posicion || "Centrocampista";


        estadisticas.forEach(function(id) {

            const slider =
                document.getElementById(id);

            const valor =
                document.getElementById(id + "Valor");


            if (!slider) return;


            let numero = 0;

            if (
                datos.estadisticas &&
                datos.estadisticas[id] !== undefined
            ) {
                numero = Number(datos.estadisticas[id]);
            }


            slider.value = numero;


            if (valor) {
                valor.textContent = numero;
            }

        });


        calcularGeneral();

    } catch (error) {

        console.error(
            "Error cargando perfil:",
            error
        );

    }

}


// ==========================================
// GUARDAR CLUB
// ==========================================

function guardarClub() {

    const club = {

        nombre:
            document.getElementById("nombreClub").value,

        pais:
            document.getElementById("paisClub").value,

        color:
            document.getElementById("colorClub").value

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

   