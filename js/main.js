// 1. Seleccionar los elementos del HTML
const inputCiudad = document.getElementById('inputCiudad');
const btnBuscar = document.getElementById('btnBuscar');
const resultadoClima = document.getElementById('resultadoClima');

// 2. Función que se ejecuta al intentar buscar
async function buscarClima() {
    // Obtener lo que escribió el usuario y quitar espacios extra
    const ciudad = inputCiudad.value.trim();

    // Validar que el campo no esté vacío
    if (ciudad === "") {
        resultadoClima.innerHTML = "<p>Por favor, escribe el nombre de una ciudad.</p>";
        return;
    }

    // Mostrar un mensaje de carga mientras espera la API
    resultadoClima.innerHTML = "<p>Buscando...</p>";

    // Llamar a la función que creamos en api.js
    // ... dentro de tu función buscarClima()
    const resultado = await obtenerTemperatura(ciudad);

    // 3. Mostrar el resultado en la pantalla
    if (resultado) {
        // Obtener el icono correspondiente al código
        const icono = obtenerIconoClima(resultado.codigoClima);

        resultadoClima.innerHTML = `
            <h2>${resultado.ciudad}</h2>
            <div style="font-size: 4rem; margin: 10px 0;">${icono}</div> <!-- Ícono grande -->
            <p class="temperatura">${resultado.temperatura}°C</p>
        `;
    } else {
        resultadoClima.innerHTML = "<p>No se pudo encontrar la ciudad. Intenta de nuevo.</p>";
    }
    // ...
}

// 4. Escuchar el evento 'click' del botón
btnBuscar.addEventListener('click', buscarClima);

// Opcional: Permitir buscar presionando la tecla "Enter"
inputCiudad.addEventListener('keypress', (evento) => {
    if (evento.key === "Enter") {
        buscarClima();
    }
});

// Función para convertir el código de Open-Meteo en un icono/emoji
function obtenerIconoClima(codigo) {
    if (codigo === 0) return "☀️"; // Despejado
    if (codigo === 1 || codigo === 2 || codigo === 3) return "⛅"; // Nublado o parcialmente nublado
    if (codigo >= 45 && codigo <= 48) return "🌫️"; // Niebla
    if (codigo >= 51 && codigo <= 67) return "🌧️"; // Lluvia o llovizna
    if (codigo >= 71 && codigo <= 77) return "❄️"; // Nieve
    if (codigo >= 80 && codigo <= 82) return "🌦️"; // Aguaceros
    if (codigo >= 85 && codigo <= 86) return "🌨️"; // Aguaceros de nieve
    if (codigo >= 95 && codigo <= 99) return "⛈️"; // Tormenta eléctrica
    return "🌡️"; // Icono por defecto si el código no coincide
}