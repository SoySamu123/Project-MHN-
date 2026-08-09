// ============================================
// PROJECT MHN — MI PERFIL
// ============================================

const estadisticas = [
    ["templanza", "Templanza", "tempValor"],
    ["estabilidad", "Estabilidad", "estaValor"],
    ["percepcionOfensiva", "Percepción ofensiva", "poValor"],
    ["percepcionDefensiva", "Percepción defensiva", "pdValor"],
    ["trabajoEquipo", "Trabajo en equipo", "teValor"],

    ["resistencia", "Resistencia", "resValor"],
    ["velocidad", "Velocidad", "velValor"],
    ["agilidad", "Agilidad", "agiValor"],
    ["aceleracion", "Aceleración", "aceValor"],

    ["regate", "Regate", "regValor"],
    ["pase", "Pase", "pasValor"],
    ["tiro", "Tiro", "tirValor"]
];


// ============================================
// ABRIR MENÚ
// ============================================

function abrir(opcion) {

    const contenido = document.getElementById("contenido");

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


            <div class="general">

                <span>⭐ GENERAL</span>

                <strong id="generalJugador">0</strong>

            </div>


            <h3>🧠 MENTALIDAD</h3>

            ${crearEstadisticas([
                estadisticas[0],
                estadisticas[1],
                estadisticas[2],
                estadisticas[3],
                estadisticas[4]
            ])}


            <h3>💪 FÍSICO</h3>

            ${crearEstadisticas([
                estadisticas[5],
                estadisticas[6],
                estadisticas[7],
                estadisticas[8]
            ])}


            <h3>🎯 TÉCNICA</h3>

            ${crearEstadisticas([
                estadisticas[9],
                estadisticas[10],
                estadisticas[11]
            ])}


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


    if (opcion === "🏟️ Mi Club") {

        contenido.innerHTML = `
            <h2>🏟️ MI CLUB</h2>
            <p>🚧 Próximamente...</p>
        `;

        return;
    }


    if (opcion === "📊 Estadísticas") {

        contenido.innerHTML = `
            <h2>📊 ESTADÍSTICAS</h2>
            <p>🚧 Próximamente...</p>
        `;

        return;
    }


    if (opcion === "🤖 IA MHN") {

        contenido.innerHTML = `
            <h2>🤖 IA MHN</h2>
            <p>🚧 Próximamente...</p>
        `;

        return;
    }
}


// ============================================
// CREAR ESTADÍSTICA
// ============================================

function crearEstadistica(stat) {

    const id = stat[0];
    const nombre = stat[1];
    const valorId = stat[2];

    return `

        <div class="estadistica">

            <div style="
                display:flex;
                justify-content:space-between;
                margin-top:15px;
            ">

                <span>${nombre}</span>

                <strong id="${valorId}">0</strong>

            </div>


            <input
                id="${id}"
                type="range"
                min="0"
                max="100"
                value="0"
                style="width:100%;"
            >


            <div style="
                width:100%;
                height:8px;
                background:rgba(255,255,255,0.25);
                border-radius:10px;
                overflow:hidden;
            ">

                <div
                    id="${id}Barra"
                    style="
                        width:0%;
                        height:100%;
                        background:white;
                        border-radius:10px;
                        transition:width 0.2s;
                    "
                ></div>

            </div>

        </div>

    `;
}


// ============================================
// ACTIVAR ESTADÍSTICAS
// ============================================

function activarEstadisticas() {

    estadisticas.forEach(function(stat) {

        const slider = document.getElementById(stat[0]);
        const numero = document.getElementById(stat[2]);
        const barra = document.getElementById(stat[0] + "Barra");


        slider.addEventListener("input", function() {

            numero.textContent = slider.value;

            barra.style.width = slider.value + "%";

            calcularGeneral();

        });

    });

}


// ============================================
// CALCULAR GENERAL
// ============================================

function calcularGeneral() {

    let total = 0;

    estadisticas.forEach(function(stat) {

        const elemento = document.getElementById(stat[0]);

        total += Number(elemento.value);

    });


    const general = Math.round(
        total / estadisticas.length
    );


    document.getElementById("generalJugador").textContent =
        general;
}


// ============================================
// GUARDAR PERFIL
// ============================================

function guardarPerfil() {

    const nombre =
        document.getElementById("nombreJugador").value;

    const posicion =
        document.getElementById("posicionJugador").value;


    const datos = {

        nombre: nombre,

        posicion: posicion,

        estadisticas: {}

    };


    estadisticas.forEach(function(stat) {

        datos.estadisticas[stat[0]] =
            document.getElementById(stat[0]).value;

    });


    localStorage.setItem(
        "projectMHNPerfil",
        JSON.stringify(datos)
    );


    alert("✅ ¡PERFIL GUARDADO!");

}


// ============================================
// CARGAR PERFIL
// ============================================

function cargarPerfil() {

    const datosGuardados =
        localStorage.getItem("projectMHNPerfil");


    if (!datosGuardados) {

        calcularGeneral();

        return;

    }


    const datos =
        JSON.parse(datosGuardados);


    document.getElementById("nombreJugador").value =
        datos.nombre || "";


    document.getElementById("posicionJugador").value =
        datos.posicion || "Centrocampista";


    estadisticas.forEach(function(stat) {

        const id = stat[0];

        const valor =
            datos.estadisticas[id] || 0;


        const slider =
            document.getElementById(id);

        const numero =
            document.getElementById(stat[2]);

        const barra =
            document.getElementById(id + "Barra");


        slider.value = valor;

        numero.textContent = valor;

        barra.style.width = valor + "%";

    });


    calcularGeneral();

}