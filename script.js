// ==========================================
// PROJECT MHN - SCRIPT.JS
// ==========================================

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


// ==========================================
// ABRIR SECCIONES
// ==========================================

function abrir(opcion) {

    const contenido = document.getElementById("contenido");

    if (!contenido) return;


    // ======================================
    // MI PERFIL
    // ======================================

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

                <strong id="generalJugador">
                    0
                </strong>

            </div>


            ${crearCategoria("🧠 MENTALIDAD", [

               