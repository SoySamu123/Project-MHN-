function guardarPerfil() {

    try {

        const datos = {
            nombre: document.getElementById("nombreJugador").value,
            posicion: document.getElementById("posicionJugador").value,
            estadisticas: {}
        };

        estadisticas.forEach(function(id) {

            const elemento = document.getElementById(id);

            if (elemento) {
                datos.estadisticas[id] = elemento.value;
            }

        });

        localStorage.setItem(
            "projectMHNPerfil",
            JSON.stringify(datos)
        );

        alert("💾 ¡PERFIL GUARDADO!");

    } catch (error) {

        console.error("Error guardando perfil:", error);

        alert("⚠️ No se pudo guardar el perfil.");

    }
}


function cargarPerfil() {

    try {

        const guardado =
            localStorage.getItem("projectMHNPerfil");

        if (!guardado) {
            calcularGeneral();
            return;
        }

        const datos = JSON.parse(guardado);

        const nombre =
            document.getElementById("nombreJugador");

        const posicion =
            document.getElementById("posicionJugador");

        if (nombre) {
            nombre.value = datos.nombre || "";
        }

        if (posicion) {
            posicion.value =
                datos.posicion || "Centrocampista";
        }

        const guardadas =
            datos.estadisticas || {};

        estadisticas.forEach(function(id) {

            const slider =
                document.getElementById(id);

            if (!slider) return;

            const valor =
                Number(guardadas[id]) || 0;

            slider.value = valor;

            const numero =
                document.getElementById(id + "Valor");

            const barra =
                document.getElementById(id + "Barra");

            if (numero) {
                numero.textContent = valor;
            }

            if (barra) {
                barra.style.width = valor + "%";
            }

        });

        calcularGeneral();

    } catch (error) {

        console.error("Error cargando perfil:", error);

        // Si existe un dato guardado corrupto,
        // PM no se rompe completo.
        localStorage.removeItem("projectMHNPerfil");

        calcularGeneral();

    }
} {

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