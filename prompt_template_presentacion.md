### **Prompt Mejorado: Generación de Guía de Estudio Interactiva con Reveal.js**

#### **1. Rol y Misión Principal**

Actúa como un experto en pedagogía computacional y desarrollador de software senior. Tu misión es generar una guía de estudio interactiva y autocontenida en un único archivo `index.html` para la **[numero de unidad]: Introducción a los Sistemas, Modelos y Simulación** de una materia de 5º año de Ingeniería en Informática.

El objetivo final es crear una herramienta que me permita estudiar de manera efectiva, comprender a fondo los conceptos y estar preparado para demostrar mi conocimiento. El contenido debe ser rigurosamente fiel a los materiales de la cátedra.

#### **2. Fuentes de Conocimiento (Input)**

Tu análisis debe basarse *exclusivamente* en los siguientes materiales. La fidelidad al contenido de la cátedra es el requisito más importante. Lee y sintetiza la información de:

*   **Plan de Estudio General:** `@/plan_de_la_materia.md`
*   **Documentación Teórica Principal:** `documentacion_catedra/teoria/`
*   **Resúmenes de Referencia:** `manus_ai/resumenes/`
*   **Textos de Apoyo:** `libros/texts/`
*   **Perspectivas Adicionales:** `resumenes_alumnos/`

#### **3. Requisitos Técnicos: `index.html` con Reveal.js**

Genera un único archivo `index.html` que cumpla con las siguientes especificaciones:

*   **Dependencias Externas:** Carga Reveal.js y los plugins `Math`, `Notes`, `Markdown` y `Highlight` directamente desde un CDN (ej. unpkg o jsDelivr). No incluyas archivos locales de la librería.
*   **Renderizado Matemático:** Configura e inicializa `RevealMath.KaTeX` para asegurar un renderizado impecable de todas las ecuaciones y fórmulas LaTeX.
*   **Configuración de Reveal.js:** En el script de inicialización, establece:
    ```javascript
    Reveal.initialize({
        width: 1024,
        height: 768,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,
        slideNumber: 'c/t', // Muestra diapositiva actual / total
        progress: true,     // Muestra la barra de progreso
        history: true,
        center: true,
        transition: 'convex',
        backgroundTransition: 'fade'
    });
    ```

#### **4. Requisitos de Estilo y Diseño Visual (CSS)**

Implementa un tema visual personalizado y profesional dentro de una etiqueta `<style>` en el `<head>`. No uses los temas predefinidos de Reveal.js.

*   **Filosofía de Diseño:** Utiliza la paleta **"Material Palenight"** para crear una estética moderna, enfocada en la legibilidad del código y el texto, y que reduzca la fatiga visual durante largas sesiones de estudio.
*   **Variables CSS:** Define la siguiente paleta en `:root`.
    ```css
    :root {
      --background-color: #292D3E;
      --main-text-color: #A6ACCD;
      --header-color: #82aaff;
      --highlight-color: #ffcb6b;
      --link-color: #89ddff;
      --control-color: #c792ea;
      --contrast-bg-color: #202331;
    }
    ```
*   **Aplicación de Estilos:** Asegúrate de que estas variables se apliquen correctamente a los elementos de la presentación (`.reveal`, `body`, `h1, h2, h3`, `strong`, `a`, la barra de progreso, las flechas de control, etc.).

#### **5. Estructura Pedagógica y de Contenido**

Esta es la directiva más importante. La presentación debe ser una **guía de estudio didáctica**, no una simple sucesión de diapositivas con viñetas. El flujo debe guiar al estudiante desde el panorama general hasta los detalles técnicos, fomentando el aprendizaje activo.

**Foco Temático de la [numero de unidad]:**
*   Definición y diferencia entre Sistema, Modelo y Simulación.
*   Clasificación de modelos.
*   Concepto de Variables de Estado.
*   Proceso de modelado: desde la descripción del sistema hasta la obtención de las ecuaciones de estado.

**Estructura de la Presentación:**

1.  **Diapositiva de Título:** "Modelos y Simulación - [numero de unidad]: Fundamentos". Usa una transición de entrada `data-transition="zoom"`.
2.  **El Panorama General:** Una diapositiva con un mapa conceptual simple (puede ser ASCII art o texto con flechas como `-->`, `==>`) que muestre la relación entre *Sistema Real -> Modelo Matemático -> Ecuaciones de Estado -> Simulación*.
3.  **Secciones Conceptuales:** Divide la unidad en secciones lógicas (ej. "Conceptos Fundamentales", "Variables de Estado", "Modelado de Sistemas Físicos").
    *   **Preguntas Clave:** Cada sección debe comenzar con una diapositiva titulada "¿Qué responderemos en esta sección?" que liste 2-3 preguntas fundamentales.
    *   **Variedad Visual:** Alterna entre diapositivas de una columna, dos columnas (para comparar/contrastar, ej. modelo determinístico vs. estocástico) y citas destacadas.
    *   **Resaltar lo Crucial:** Utiliza elementos `<blockquote>` con el fondo de contraste (`--contrast-bg-color`) para enmarcar definiciones, ecuaciones o conclusiones clave.
4.  **Ejemplos Animados (`data-auto-animate`):**
    *   Para ilustrar el proceso de obtener las ecuaciones de estado de un sistema (ej. un circuito RLC simple), dedica varias diapositivas consecutivas que usen `data-auto-animate`.
    *   **Paso 1:** Muestra el diagrama del sistema.
    *   **Paso 2:** Presenta la primera ecuación física (ej. LVK), con un texto explicativo breve ("Aplicamos la Ley de Voltaje de Kirchhoff...").
    *   **Paso 3:** Reordena la ecuación para aislar una variable, resaltando el cambio.
    *   **Paso 4:** Construye la matriz de estado paso a paso. La animación es clave para entender la derivación.
5.  **Manejo de Gráficos y Diagramas:**
    *   Para diagramas simples (flujos, bloques), represéntalos con texto y caracteres ASCII dentro de un bloque `<pre><code>`.
    *   Si un diagrama complejo es necesario (ej. un esquema de un sistema mecánico complejo), inserta un `div` con borde y un texto descriptivo claro: `<!-- [IMAGEN REQUERIDA: Diagrama esquemático de un sistema masa-resorte-amortiguador] -->`.
6.  **Autoevaluación (Active Recall):**
    *   Antes del resumen final, incluye una sección titulada "Pon a Prueba tu Comprensión".
    *   Crea 2-3 diapositivas con una pregunta en cada una.
    *   La siguiente diapositiva (usando `class="fragment"`) debe revelar la respuesta detallada.
7.  **Diapositiva de Resumen:** Concluye con una diapositiva que sintetice los 3-4 puntos más importantes de la unidad, vinculándolos con las "Preguntas Clave" del inicio.

#### **6. Resultado Final y Ejecución**

El producto final debe ser un **único archivo `index.html`** que se pueda abrir en cualquier navegador moderno sin necesidad de servidores locales o dependencias externas. Una vez generado, ejecuta `open index.html` para una revisión inmediata.