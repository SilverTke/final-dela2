
# 🎨 Prueba módulo 2: CSS Avanzado

¡Bienvenid@ a mi proyecto para la prueba del módulo 2 “CSS Avanzado” del curso
de desarrollo _full stack_ en Desafío Latam!

## 📁 Estructura del proyecto

El sitio es una galería estática dividida en dos secciones
(“Algunas fotos” y “Más fotos”) y enlaces a redes sociales en el pie.
Está construido con **Lume** (generador estático para Deno) y se organiza así:

- `deno.json` 🧰
  Define dependencias, permisos de seguridad y tareas (`build` / `serve`).

- `_config.ts` ⚙️
  Configura Lume añadiendo plugins de UnoCSS, iconos e inline.

- `_includes/base.vto` 🖼
  Plantilla base que arma el HTML, rellenando imágenes y
  enlaces desde `index.yml`.

- `assets/css/style.css` 🎯
  Estilos con diseño responsive: grid areas + media-query a 576 px.

- `index.yml` 📸
  Provee los datos de imágenes y enlaces sociales que usa la plantilla.

- `.gitignore` y `dprint.json` 🧹
  Ignoran carpetas de salida y formatean el código automáticamente
