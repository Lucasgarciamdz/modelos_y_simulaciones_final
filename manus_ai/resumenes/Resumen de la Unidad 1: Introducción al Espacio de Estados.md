# Resumen de la Unidad 1: Introducción al Espacio de Estados

## 1. Conceptos Fundamentales de Modelos y Simulación

### Teoría
- **Modelo:** Descripción analítica y abstracta de un sistema, proceso o circuito para estudiar su comportamiento. También conocido como **gemelo digital**.
- **Propósito de la Modelación:** Crucial cuando la experimentación directa es inconveniente (seguridad, costo, practicidad). Permite ensayos virtuales y análisis de prototipos.
- **Evolución del Modelado:** De ecuaciones diferenciales a modelos algorítmicos con computadoras digitales, mejorando velocidad y exactitud.
- **Campos de Aplicación:** Investigación científica, industria, economía, biología, logística, actividades militares.
- **Simulación:** Proceso de diseñar, desarrollar y experimentar con un modelo programable para analizar su comportamiento bajo distintas condiciones. Técnica numérica computarizada.

### Etapas de un Proceso de Simulación
1.  **Definición del sistema y formulación del problema:** Identificar variables, interrelaciones, restricciones y objetivos.
2.  **Formulación del modelo:** Construcción conceptual y matemática.
3.  **Recolección de datos:** Obtención de datos históricos, de expertos o experimentales.
4.  **Implementación en software:** Traducción del modelo a código o uso de software especializado.
5.  **Validación:** Asegurar que el modelo se comporta como el sistema real.
6.  **Experimentación:** Ejecución de la simulación con diferentes escenarios.
7.  **Interpretación:** Análisis de resultados para extraer conclusiones.
8.  **Documentación:** Elaboración de informes técnicos y manuales.

### FAQ
- **¿Cuál es la diferencia entre un modelo y una simulación?**
  Un modelo es la representación abstracta de un sistema, mientras que la simulación es el proceso de ejecutar ese modelo para observar su comportamiento a lo largo del tiempo.
- **¿Por qué es preferible modelar y simular antes de experimentar en la realidad?**
  Permite reducir costos, evitar riesgos de seguridad, probar escenarios extremos y optimizar diseños antes de la implementación física.

## 2. Tipos de Modelos Matemáticos

### Teoría
- **Ecuaciones Diferenciales:** Tradicional, pero compleja para sistemas no lineales o multivariables.
- **Función de Transferencia:** Proporciona información de estabilidad, pero oculta la arquitectura interna.
- **Variables de Estado (Espacio de Estados):** Moderno y versátil, apto para sistemas lineales y no lineales, SISO (Single Input Single Output) y MIMO (Multiple Input Multiple Output). Preferencial por su detalle y facilidad de simulación computacional.

### FAQ
- **¿Cuál es la ventaja principal de la representación por variables de estado?**
  Su aplicabilidad universal a diferentes tipos de sistemas (lineales, no lineales, SISO, MIMO) y su facilidad para la implementación computacional y el análisis.

## 3. Análisis por Variables de Estado

### Teoría
- **Estado:** Descripción completa de la condición dinámica de un sistema en un instante dado. Determina el comportamiento futuro conociendo las entradas.
- **Espacio de Estados:** Espacio n-dimensional donde cada eje es una variable de estado. Un punto en este espacio representa el estado del sistema.
- **Variables de Estado:** Conjunto mínimo de parámetros que definen el estado del sistema. Se asocian a elementos almacenadores de energía (inductores, capacitores, masas, resortes).
- **Trayectoria de Estado:** Secuencia de puntos en el espacio de estados que muestra la evolución del sistema.
- **Vector de Estado:** Vector que une el origen con el punto que representa el estado del sistema.
- **Orden del Sistema:** Número de elementos almacenadores de energía, igual al número de variables de estado (n) y al orden de la ecuación diferencial.
- **Puntos de Equilibrio:** Estado donde las derivadas de todas las variables de estado son cero, indicando una condición estacionaria. Pueden ser estables o inestables.

### Ecuaciones Clave
- **Ecuación de Estado:** `ẋ(t) = A x(t) + B u(t)`
- **Ecuación de Salida:** `y(t) = C x(t) + D u(t)`
  - `x(t)`: vector de estado
  - `u(t)`: vector de entrada
  - `y(t)`: vector de salida
  - `A, B, C, D`: matrices de coeficientes que describen la dinámica del sistema.

### Ventajas de la Representación por Variables de Estado
- Análisis simplificado.
- Aplicabilidad universal.
- Implementación computacional.

### Ejemplos
- **Circuito RLC en Serie:** Variables de estado: corriente en el inductor (iL) y tensión en el capacitor (vC).
- **Sistema Mecánico Masa-Resorte-Amortiguador:** Variables de estado: posición (x) y velocidad (v) de la masa.

### FAQ
- **¿Qué representa un punto en el espacio de estados?**
  Un punto en el espacio de estados representa el estado completo del sistema en un instante de tiempo específico, es decir, los valores de todas sus variables de estado en ese momento.
- **¿Cómo se determina el orden de un sistema en la representación por variables de estado?**
  El orden del sistema es igual al número de variables de estado independientes necesarias para describir completamente su dinámica, lo que a menudo coincide con el número de elementos almacenadores de energía.

## Imágenes Representativas

**[Imagen 1: Diagrama de flujo de las etapas de un proceso de simulación]**
*(Descripción: Un diagrama de flujo que ilustra las 8 etapas del proceso de simulación, desde la definición del problema hasta la documentación.)*

**[Imagen 2: Comparación gráfica de un sistema SISO y un sistema MIMO]**
*(Descripción: Dos diagramas de bloques simples, uno mostrando una única entrada y una única salida (SISO), y otro mostrando múltiples entradas y múltiples salidas (MIMO).)*

**[Imagen 3: Esquema de un circuito RLC en serie con variables de estado indicadas]**
*(Descripción: Un diagrama de un circuito RLC en serie, con la corriente en el inductor y la tensión en el capacitor claramente etiquetadas como variables de estado.)*

**[Imagen 4: Esquema de un sistema masa-resorte-amortiguador con variables de estado indicadas]**
*(Descripción: Un diagrama de un sistema masa-resorte-amortiguador, con la posición y la velocidad de la masa claramente etiquetadas como variables de estado.)*


