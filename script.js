function abrir(opcion) {

    const contenido = document.getElementById("contenido");

    if (opcion === "👤 Mi Perfil") {

        contenido.innerHTML = `

        <div style="
            background:rgba(0,0,0,0.20);
            padding:20px;
            border-radius:20px;
            margin:20px auto;
            width:90%;
            max-width:600px;
        ">

            <h2>👤 MI PERFIL</h2>

            <div style="font-size:70px;">⚽</div>

            <input
                id="nombreJugador"
                type="text"
                placeholder="Nombre del jugador"
                style="
                    padding:12px;
                    width:90%;
                    border-radius:10px;
                    border:none;
                    margin:8px;
                    font-size:16px;
                "
            >

            <select
                id="posicionJugador"
                style="
                    padding:12px;
                    width:95%;
                    border-radius:10px;
                    margin:8px;
                    font-size:16px;
                "
            >
                <option>Centrocampista</option>
                <option>Delantero</option>
                <option>Extremo derecho</option>
                <option>Extremo izquierdo</option>
                <option>Defensa</option>
                <option>Portero</option>
            </select>

            <div style="
                background:white;
                color:#003366;
                padding:15px;
                border-radius:15px;
                margin:20px 0;
            ">
                <div>⭐ GENERAL</div>
                <strong
                    id="generalJugador"
                    style="font-size:45px;"
                >0</strong>
            </div>

            ${crearCategoria("🧠 MENTALIDAD", [
                ["templanza","Templanza"],
                ["agresividad","Agresividad"],
                ["estabilidad","Estabilidad"],
                ["percepcionOfensiva","Percepción ofensiva"],
                ["percepcionDefensiva","Percepción defensiva"],
                ["trabajoEquipo","Trabajo en equipo"],
                ["comprensionTactica","Comprensión táctica"]
            ])}

            ${crearCategoria("💪 FÍSICO", [
                ["resistencia","Resistencia"],
                ["velocidadMaxima","Velocidad máxima"],
                ["agilidad","Agilidad"],
                ["aceleracion","Aceleración"],
                ["salto","Salto"],
                ["agudezaVisual","Agudeza visual"],
                ["equilibrio","Equilibrio"]
            ])}

            ${crearCategoria("🎯 TÉCNICA", [
                ["regate","Regate"],
                ["pase","Pase"],
                ["tiro","Tiro"],
                ["controlBalon","Control del balón"],
                ["entrada","Entrada"],
                ["barrida","Barrida"],
                ["juegoDirecto","Juego directo"],
                ["posicionamiento","Posicionamiento"],
                ["campoVision","Campo de visión"],
                ["finta","Finta"],
                ["cabeceo","Cabeceo"]
            ])}

            <button
                onclick="guardarPerfil()"
                style="
                    width:100%;
                    margin-top:20px;
                    background:#00aaff;
                    color:white;
                "
            >
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


// ========================================
// CREAR CATEGORÍA
// ========================================

function crearCategoria(titulo, lista) {

    let html = `<h3>${titulo}</h3>`;

    lista.forEach(function(stat) {

        html += `

        <div style="margin:18px 0;text-align:left;">

            <div style="
                display:flex;
                justify-content:space-between;
                font-weight:bold;
            ">
                <span>${stat[1]}</span>
                <span id="${stat[0]}Valor">0</span>
            </div>

            <input
                id="${stat[0]}"
                type="range"
                min="0"
                max="100"
                value="0"
                style="width:100%;"
            >

            <div style="
                height:8px;
                background:rgba(255,255,255,0.25);
                border-radius:10px;
                overflow:hidden;
            ">
                <div
                    id="${stat[0]}Barra"
                    style="
                        width:0%;
                        height:100%;
                        background:white;
                        transition:width .2s;
                    "
                ></div>
            </div>

        </div>

        `;
    });

    return html;
}


// ========================================
// TODAS LAS ESTADÍSTICAS
// ========================================

const estadisticas = [

    "templanza",
    "agresividad",
    "estabilidad",
    "percepcionOfensiva",
    "percepcionDefensiva",
    "trabajoEquipo",
    "comprensionTactica",

    "resistencia",
    "velocidadMaxima",
    "agilidad",
    "aceleracion",
    "salto",
    "agudezaVisual",
    "equilibrio",

    "regate",
    "pase",
    "tiro",
    "controlBalon",
    "entrada",
    "barrida",
    "juegoDirecto",
    "posicionamiento",
    "campoVision",
    "finta",
    "cabeceo"
];


// ========================================
// ACTIVAR BARRAS
// ========================================

function activarEstadisticas() {

    estadisticas.forEach(function(id) {

        const slider = document.getElementById(id);

        slider.addEventListener("input", function() {

            document.getElementById(id + "Valor")
                .textContent = this.value;

            document.getElementById(id + "Barra")
                .style.width = this.value + "%";

            calcularGeneral();

        });

    });
}


// ========================================
// GENERAL
// ========================================

function calcularGeneral() {

    let total = 0;

    estadisticas.forEach(function(id) {

        total += Number(
            document.getElementById(id).value
        );

    });

    const general = Math.round(
        total / estadisticas.length
    );

    document.getElementById("generalJugador")
        .textContent = general;
}


// ========================================
// GUARDAR
// ========================================

function guardarPerfil() {

    const datos = {

        nombre:
            document.getElementById("nombreJugador").value,

        posicion:
            document.getElementById("posicionJugador").value,

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

    alert("✅ ¡PERFIL GUARDADO!");
}


// ========================================
// CARGAR
// ========================================

function cargarPerfil() {

    const guardado =
        localStorage.getItem("projectMHNPerfil");

    if (!guardado) {

        calcularGeneral();

        return;
    }

    const datos = JSON.parse(guardado);

    document.getElementById("nombreJugador").value =
        datos.nombre || "";

    document.getElementById("posicionJugador").value =
        datos.posicion || "Centrocampista";

    estadisticas.forEach(function(id) {

        const valor =
            datos.estadisticas[id] || 0;

        const slider =
            document.getElementById(id);

        slider.value = valor;

        document.getElementById(id + "Valor")
            .textContent = valor;

        document.getElementById(id + "Barra")
            .style.width = valor + "%";

    });

    calcularGeneral();
}