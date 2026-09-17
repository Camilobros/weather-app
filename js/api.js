async function obtenerTemperatura(ciudad) {
    try {
        // 1. Convertir el nombre de la ciudad a coordenadas
        const urlGeocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=1&language=es&format=json`;
        const respuestaGeo = await fetch(urlGeocoding);
        const datosGeo = await respuestaGeo.json();

        // Validar si la ciudad existe en los resultados
        if (!datosGeo.results) {
            throw new Error("Ciudad no encontrada");
        }

        const { latitude, longitude, name } = datosGeo.results[0];

        // 2. Obtener el clima usando la latitud y longitud
        const urlClima = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const respuestaClima = await fetch(urlClima);
        const datosClima = await respuestaClima.json();

        // Retornar un objeto limpio con los datos que necesitas
        return {
            ciudad: name,
            temperatura: datosClima.current_weather.temperature,
            codigoClima: datosClima.current_weather.weathercode // <-- NUEVA LÍNEA
        };

    } catch (error) {
        console.error("Error al obtener el clima:", error);
        return null;
    }
}