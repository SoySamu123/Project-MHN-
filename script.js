function abrir(opcion) {

    const contenido = {

        "👤 Mi Perfil": `
        <div class="perfil">

            <h2>👤 MI PERFIL</h2>

            <div class="tarjeta-jugador">

                <div class="avatar">⚽</div>

                <h3 id="nombreJugador">Samuel</h3>

                <p>⚽ Posición: <span id="posicionJugador">Centro campista</span></p>

                <div class="general">
                    <strong id="generalJugador">79</strong>
                    <span>GENERAL</span>
                </div>

            </div>

            <h3>✏️ Personalizar jugador</h3>

            <input
                id="nombreInput"
                type="text"
                placeholder="Escribe tu nombre"
            >

            <select id="posicionInput">
                <option>Centro campista</option>
                <option>Extremo derecho</option>
                <option>Extremo izquierdo</option>
                <option>Delantero</option>
                <option>Defensa</option>
                <option>Portero</option>
            </select>

            <h3>🧠 Mental</h3>

            <label>Templanza: <span id="tempValor">70</span></label>
            <input id="templanza" type="range" min="0" max="100" value="70">

            <label>Agresividad: <span id="agresValor">80</span></label>
            <input id="agresividad" type="range" min="0" max="100" value="80">

            <label>Estabilidad: <span id="estaValor">80</span></label>
            <input id="estabilidad" type="range" min="0" max="100" value="80">

            <label>Percepción ofensiva: <span id="poValor">50</span></label>
            <input id="percepcionOfensiva" type="range" min="0" max="100" value="50">

            <label>Percepción defensiva: <span id="pdValor">50</span></label>
            <input id="percepcionDefensiva" type="range" min="0" max="100" value="50">

            <label>Trabajo en equipo: <span id="teValor">90</span></label>
            <input id="trabajoEquipo" type="range" min="0" max="100" value="90">

            <label>Comprensión táctica: <span id="ctValor">92</span></label>
            <input id="comprensionTactica" type="range" min="0" max="100" value="92">


            <h3>💪 Físico</h3>

            <label>Resistencia: <span id="resValor">80</span></label>
            <input id="resistencia" type="range" min="0" max="100" value="80">

            <label>Velocidad máxima: <span id="velValor">80</span></label>
            <input id="velocidad" type="range" min="0" max="100" value="80">

            <label>Agilidad: <span id="agiValor">80</span></label>
            <input id="agilidad" type="range" min="0" max="100" value="80">

            <label>Aceleración: <span id="aceValor">80</span></label>
            <input id="aceleracion" type="range" min="0" max="100" value="80">


            <h3>🎯 Técnica</h3>

            <label>Regate: <span id="regValor">75</span></label>
            <input id="regate" type="range" min="0" max="100" value="75">

            <label>Pase: <span id="pasValor">80</span></label>
            <input id="pase" type="range" min="0" max="100" value="80">

            <label>Tiro: <span id="tirValor">70</span></label>
            <input id="tiro" type="range" min="0" max="100" value="70">

            <button onclick="guardarPerfil()">
                💾 GUARDAR PERFIL
            </button>

        </div>
        `,


        "🏟️ Mi Club": `
            <h2>🏟️ Mi Club</h2>
            <p>Aún no perteneces a ningún club.</p>
            <button>Crear Club</button>
        `,


        "📊 Estadísticas": `
            <h2>📊 Estadísticas</h2>
            <p>⚡ Velocidad: 80</p>
            <p>🎯 Tiro: 70</p>
            <p>🎮 Regate: 75</p>
            <p>🧠 Visión: 78</p>
        `,


        "🤖 IA MHN": `
            <h2>🤖 IA MHN</h2>
            <p>Bienvenido al sistema de inteligencia de Project MHN.</p>
        `
    };


    document.querySelector(".menu").innerHTML = contenido[opcion];

    if (opcion === "👤 Mi Perfil") {
        activarSliders();
    }
}


function activarSliders() {

    const sliders = [
        ["templanza", "tempValor"],
        ["agresividad", "agresValor"],
        ["estabilidad", "estaValor"],
        ["percepcionOfensiva", "poValor"],
        ["percepcionDefensiva", "pdValor"],
        ["trabajoEquipo", "teValor"],
        ["comprensionTactica", "ctValor"],
        ["resistencia", "resValor"],
        ["velocidad", "velValor"],
        ["agilidad", "agiValor"],
        ["aceleracion", "aceValor"],
        ["regate", "regValor"],
        ["pase", "pasValor"],
        ["tiro", "tirValor"]
    ];

    sliders.forEach(([slider, texto]) => {

        const elemento = document.getElementById(slider);
        const valor = document.getElementById(texto);

        elemento.addEventListener("input", () => {
            valor.textContent = elemento.value;
            calcularGeneral();
        });

    });
}


function calcularGeneral() {

    const valores = [
        "templanza",
        "agresividad",
        "estabilidad",
        "percepcionOfensiva",
        "percepcionDefensiva",
        "trabajoEquipo",
        "comprensionTactica",
        "resistencia",
        "velocidad",
        "agilidad",
        "aceleracion",
        "regate",
        "pase",
        "tiro"
    ];

    let total = 0;

    valores.forEach(id => {
        total += Number(document.getElementById(id).value);
    });

    const general = Math.round(total / valores.length);

    document.getElementById("generalJugador").textContent = general;
}


function guardarPerfil() {

    const nombre = document.getElementById("nombreInput").value;
    const posicion = document.getElementById("posicionInput").value;

    if (nombre.trim() !== "") {
        document.getElementById("nombreJugador").textContent = nombre;
    }

    document.getElementById("posicionJugador").textContent = posicion;

    localStorage.setItem("mhnNombre", nombre);
    localStorage.setItem("mhnPosicion", posicion);

    alert("✅ ¡Perfil guardado!");

}