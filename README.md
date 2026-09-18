```markdown
# 🌤️ App del Clima

## Resumen del Proyecto
Esta es una aplicación web sencilla e interactiva que permite a los usuarios consultar el clima actual de cualquier ciudad del mundo. Está construida utilizando tecnologías web estándar (HTML5, CSS3 y JavaScript Vanilla) y emplea un enfoque modular para separar la lógica de las peticiones de red y la manipulación de la interfaz.

## Instrucciones de Instalación
Al ser un proyecto creado con Vanilla JavaScript, no requiere la instalación de dependencias complejas (como Node.js o npm). Para ejecutarlo:

1. Clona este repositorio o descarga los archivos en tu computadora.
   ```bash
   git clone [https://github.com/tu-usuario/weather-app.git](https://github.com/tu-usuario/weather-app.git)

```

2. Abre la carpeta del proyecto en Visual Studio Code (o tu editor favorito).
3. Abre el archivo `index.html` directamente en tu navegador web.
* *Recomendación:* Si usas VS Code, puedes instalar la extensión **Live Server** y hacer clic derecho en `index.html` > "Open with Live Server" para ver los cambios en tiempo real.



## Guía de Uso

1. Al abrir la aplicación, verás una interfaz minimalista con un campo de texto.
2. Haz clic en el campo y escribe el nombre de una ciudad (por ejemplo, "Bogotá", "Suaza", "Tokio").
3. Haz clic en el botón **"Buscar"** o presiona la tecla **Enter**.
4. La aplicación mostrará el nombre de la ciudad confirmada, un emoji representativo del estado del clima (soleado, lluvioso, nublado, etc.) y la temperatura actual en grados Celsius.

## Ejemplo de Resultados

**Vista en Pantalla:**

```text
[ Input: "Bogotá" ] [ Buscar ]

Bogotá
⛅
18°C

```

**Estructura de datos interna (Lo que devuelve nuestra función de API):**

```json
{
  "ciudad": "Bogotá",
  "temperatura": 18.5,
  "codigoClima": 3
}

```

## Funcionalidades

* **Búsqueda global:** Soporta la búsqueda de prácticamente cualquier ciudad gracias al servicio de geocodificación.
* **Iconografía dinámica:** Convierte los códigos meteorológicos oficiales en emojis visuales automáticos (☀️, 🌧️, ❄️, etc.).
* **Arquitectura modular:** Código JavaScript dividido en `api.js` (comunicaciones) y `main.js` (DOM y eventos) para facilitar la escalabilidad.
* **Diseño Responsivo:** Interfaz construida con CSS Flexbox, adaptable a dispositivos móviles y pantallas de escritorio.
* **Soporte de teclado:** Permite realizar búsquedas cómodamente presionando la tecla "Enter".

## Manejo de Errores

La aplicación está preparada para no romperse ante imprevistos, manejando diferentes escenarios:

* **Entradas vacías:** Si el usuario intenta buscar sin escribir nada, se muestra un mensaje en pantalla pidiendo que ingrese una ciudad.
* **Ciudades inexistentes:** Si se ingresa una cadena de texto sin sentido (ej. "asdasd") y la API de geocodificación no encuentra resultados, la app captura el error y le avisa al usuario amigablemente.
* **Bloques "Try/Catch":** Las peticiones a la API están envueltas en bloques `try...catch` para manejar errores de red o caídas del servidor sin mostrar alertas molestas en la consola del navegador.

## Información de la API

Este proyecto consume de forma gratuita la [API de Open-Meteo](https://open-meteo.com/?utm_source=gemini). El proceso se realiza en dos etapas:

1. **Geocoding API:** (`https://geocoding-api.open-meteo.com/...`) Se envía el nombre de la ciudad en formato de texto y se obtienen sus coordenadas exactas (Latitud y Longitud).
2. **Weather Forecast API:** (`https://api.open-meteo.com/...`) Se envían las coordenadas obtenidas en el paso anterior para recuperar la temperatura actual y el `weathercode` (código de estado meteorológico de la OMM).

## Mejoras Futuras

* 📅 Agregar un pronóstico extendido de los próximos 3 a 7 días.
* 🌬️ Mostrar datos adicionales como la velocidad del viento, la humedad y la sensación térmica.
* 📍 Implementar el uso del GPS del navegador para mostrar el clima local automáticamente al abrir la app.
* 🌙 Añadir un interruptor de Modo Oscuro / Modo Claro.

```

```
