function guardarPerfil() {

    const datos = {
        nombre: document.getElementById("nombreJugador").value,
        posicion: document.getElementById("posicionJugador").value,
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


function cargarPerfil() {

    const guardado =
        localStorage.getItem("projectMHNPerfil");

    if (!guardado) {
        calcularGeneral();
        return;
    }

    const datos = JSON.parse(guardado);

    // Nombre
    document.getElementById("nombreJugador").value =
        datos.nombre || "";

    // Posición
    document.getElementById("posicionJugador").value =
        datos.posicion || "Centrocampista";

    // Estadísticas
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