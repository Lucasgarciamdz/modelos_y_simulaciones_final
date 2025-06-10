# Modelos y Simulación

## ¿Qué es un modelo?

Un modelo es una descripción analítica de un sistema, proceso o circuito. Se formula con el fin de estudiar su comportamiento bajo diversas condiciones de operación. Esta descripción debe permitir cuantificar las variaciones de sus parámetros y sus interrelaciones durante los estudios.

## ¿Por qué se modela un sistema?

La modelización de un sistema es necesaria para experimentar en él, ya que hacerlo sobre el sistema real podría ser inconveniente por razones de seguridad, costo o practicidad.

*   **Seguridad:** Experimentar directamente puede ser riesgoso. Ejemplos incluyen ensayos destructivos en estructuras o la investigación de efectos de la radioactividad.
*   **Costo:** Realizar pruebas en el sistema real puede ser extremadamente caro.
*   **Practicidad:** Ciertas experimentaciones pueden ser inviables en el mundo real, como evaluar la variación de la frecuencia cardíaca humana en condiciones extremas de temperatura.

Modelar un sistema implica crear un gemelo digital, lógico y matemático, que permite ajustar valores e iterar operaciones. Muchos sistemas, como los biológicos y económicos, se modelan para profundizar su estudio y conocimiento.

Históricamente, los modelos matemáticos se basaban en ecuaciones diferenciales de equilibrio. Sin embargo, estos métodos presentan limitaciones al tratar con sistemas complejos, multivariables o no lineales, debido a la dificultad del análisis matemático y la falta de soluciones únicas para ecuaciones no lineales. El advenimiento de las computadoras digitales ha simplificado este proceso, permitiendo el uso de software para modelos algorítmicos con gran velocidad y exactitud.

Los campos de aplicación de la modelación son variados, incluyendo:

*   Investigación científica
*   Manufactura industrial
*   Economía
*   Biología
*   Actividades lúdicas
*   Plataformas de negocios
*   Lógica organizacional
*   Actividades militares

## Simulación

La simulación es el proceso de diseñar y desarrollar un modelo programable de un sistema o proceso. Su objetivo es realizar experimentos y mediciones para analizar el comportamiento del sistema bajo diferentes condiciones de operación. En un sentido más estricto, la simulación se refiere a la técnica numérica empleada para conducir experimentos en computadora, utilizando modelos matemáticos y estructuras lógicas que describen el comportamiento del sistema.

La simulación es una herramienta poderosa para el análisis y optimización de procesos. Permite explorar escenarios hipotéticos, analizar el impacto de posibles cambios e identificar oportunidades de mejora sin interrumpir las operaciones en curso.

Aunque no se especifica explícitamente, los sistemas modelados pueden ser de variación temporal continua o discreta, siendo más sencilla la digitalización en estos últimos.

El procedimiento completo para realizar una simulación comprende las siguientes etapas:

### 1. Definición del sistema o formulación del problema

Esta fase implica un análisis preliminar del sistema para identificar sus variables, las relaciones entre ellas y su interacción con otros sistemas. También se evalúan las restricciones del sistema, las variables que interactúan, las medidas de efectividad y los resultados esperados.

### 2. Formulación del modelo

Basándose en los requerimientos del estudio, se construye el modelo. Su formulación debe contener y expresar todas las variables presentes y sus relaciones para obtener los resultados deseados. Es esencial definir todas las variables del sistema y sus relaciones lógicas, comenzando con diagramas de flujo que describan la operación completa del sistema.

### 3. Recolección de datos

El modelo debe estar diseñado para permitir la medición o determinación de los valores que adoptarán las variables y otra información necesaria. Estos datos pueden compararse con registros previos, opiniones de expertos o resultados de experimentación.

### 4. Implementación en software

El modelo debe ser compatible con programas informáticos adecuados. Existen dos alternativas principales: desarrollar el software requerido o adquirir un paquete de software existente ("software enlatado"). Algunos ejemplos conocidos de estos últimos son Simulink, Stateflow, Simscape, Anylogic, Openfoam, Gazebo, Simscale, Promodel y FlexSim.

### 5. Validación

Esta etapa busca identificar deficiencias en la formulación del modelo o insuficiencias en los datos recogidos. Se intenta determinar la exactitud en la predicción de comportamientos futuros o la confirmación de resultados esperados. Las formas comunes de validación incluyen:

*   Opiniones de expertos sobre los resultados de la simulación.
*   Verificación de la exactitud con la que se evalúan datos históricos y se predice el futuro.
*   Verificación de la falla del modelo al utilizar datos que causan una falla concordante en el sistema real.
*   Aceptación y confianza (como intervalo de tolerancia estadística) por parte del usuario de los resultados del experimento de simulación.

### 6. Experimentación

Una vez validado el modelo, se inicia la operación con diferentes datos para medir y registrar los resultados bajo distintas condiciones. Se analiza la sensibilidad de los indicadores frente a las variaciones de la operación.

### 7. Interpretación

Esta etapa consiste en el estudio y análisis de los resultados obtenidos para facilitar la toma de decisiones respecto al sistema modelado. La información proporcionada por el software ayuda a tomar mejores decisiones.

### 8. Documentación

En la fase final, se elabora la documentación técnica que expone las conclusiones con su fundamentación respectiva y toda la información necesaria para facilitar su aplicación a futuros usuarios, a modo de un manual de usuario.

El objeto de la asignatura "Modelos y Simulación" se centra fundamentalmente en el desarrollo de las etapas 1 (Definición del sistema) y 2 (Formulación del modelo). El resto de las etapas corresponden al estudio de otras materias como Estadística Aplicada, Programación y Análisis de Sistemas.

El proceso de simulación puede representarse a través de un diagrama de flujo (no proporcionado).

Una utilidad fundamental de la simulación es que permite simular la operación de un sistema incluso antes de que este exista, lo que la convierte en una herramienta para el diseño previo o la síntesis de sistemas, además del análisis y el entrenamiento.

Las primeras etapas de un ensayo de simulación implican la definición del sistema a modelar y su descripción en términos de relaciones lógicas para sus variables y diagramas de flujo. Posteriormente, el modelo debe ser descrito en un lenguaje compatible con la computadora.

Como se mencionó, existen dos posibilidades principales: desarrollar el software necesario o adquirir y adaptar un software existente (un lenguaje de programación de propósitos especiales). El primer caso requiere el auxilio de ingenieros informáticos diseñadores y programadores, mientras que el segundo demanda un buen analista para asesorar sobre la aplicación del software.

Ejemplos de usos de la técnica de simulación incluyen:

*   Estudio de sistemas de inventarios.
*   Análisis de proyectos de inversión.
*   Evaluación de sistemas económicos para la toma de decisiones monetarias, cambiarias o impositivas.
*   Análisis de estados financieros para la expansión y diversificación de organizaciones.
*   Control de procesos industriales.
*   Otras operaciones secuenciales.

En relación con los sistemas físicos, esta técnica permite la construcción de prototipos que, mediante ensayos y experimentos, conducen al perfeccionamiento del modelo definitivo.

## Modelos matemáticos

Las formas clásicas de establecer modelos matemáticos de un sistema o proceso en Ingeniería son:

*   **Ecuaciones diferenciales de equilibrio:** Es el método más tradicional y antiguo. Puede tener limitaciones con sistemas complejos, no lineales o multivariables, requiriendo un gran conocimiento matemático por parte del analista.
*   **Función de transferencia:** Proporciona información inmediata sobre la estabilidad del sistema, pero no sobre su arquitectura interna o parámetros característicos.
*   **Variable de estado (espacio de estados):** Este método es apto para sistemas lineales o no lineales, simples o complejos, y brinda suficiente información. Además, es adecuado para su traducción algorítmica y simulación por software, por lo que será el método preferencial de estudio.

H. B. 2025