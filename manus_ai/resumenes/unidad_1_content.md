


# UNIDAD 1: Introducción al Espacio de Estados

## 1.1. Conceptos Fundamentales de Modelos y Simulación

### ¿Qué es un Modelo?
Un modelo es una descripción analítica y abstracta de un sistema, proceso o circuito, formulada para estudiar su comportamiento bajo diferentes condiciones de operación. Permite cuantificar las variaciones de sus parámetros y entender sus interrelaciones. En la actualidad, se le conoce también como **gemelo digital**.

### ¿Por qué Modelar un Sistema?
La modelación es crucial cuando la experimentación directa es inconveniente por razones de **seguridad, costo o practicidad**. Permite realizar ensayos destructivos virtualmente, investigar sistemas en condiciones extremas o analizar prototipos antes de su existencia física.

### Evolución del Modelado
Históricamente, se basaba en ecuaciones diferenciales, pero las **computadoras digitales** y el **modelo algorítmico** han simplificado y ampliado su alcance, permitiendo mayor velocidad y exactitud.

### Campos de Aplicación
El modelado es versátil, aplicable en investigación científica, industria, economía, biología, logística y actividades militares.

### ¿Qué es la Simulación?
La simulación es el proceso de diseñar, desarrollar y experimentar con un modelo programable para analizar su comportamiento bajo distintas condiciones. Es una técnica numérica que utiliza computadoras para conducir experimentos sobre modelos matemáticos y lógicos.

### Etapas de un Proceso de Simulación
1.  **Definición del sistema y formulación del problema:** Identificar variables, interrelaciones, restricciones y objetivos.
2.  **Formulación del modelo:** Construir el modelo conceptual y matemático, a menudo con diagramas de flujo.
3.  **Recolección de datos:** Obtener datos históricos, de expertos o experimentales para alimentar y calibrar el modelo.
4.  **Implementación en software:** Traducir el modelo a un lenguaje de programación o usar software especializado (Simulink, Anylogic, etc.).
5.  **Validación:** Asegurar que el modelo se comporta como el sistema real, comparando con datos históricos y opiniones de expertos.
6.  **Experimentación:** Ejecutar la simulación con diferentes escenarios para analizar la sensibilidad del sistema.
7.  **Interpretación:** Analizar resultados para extraer conclusiones y fundamentar decisiones.
8.  **Documentación:** Elaborar informes técnicos y manuales de usuario para uso futuro.

## 1.2. Tipos de Modelos Matemáticos

En ingeniería, las formas clásicas de modelado son:
*   **Ecuaciones Diferenciales:** Tradicional, pero compleja para sistemas no lineales o multivariables.
*   **Función de Transferencia:** Proporciona información de estabilidad, pero no de arquitectura interna.
*   **Variables de Estado (Espacio de Estados):** Moderno y versátil, apto para sistemas lineales y no lineales, SISO y MIMO. Es el método preferencial por su detalle y facilidad de simulación por software.

## 1.3. Análisis por Variables de Estado

Este método permite modelar y analizar sistemas en el dominio del tiempo, con resultados fácilmente procesables por software.

### Conceptos Fundamentales
*   **Estado:** Descripción completa de la condición dinámica de un sistema en un instante dado. Determina el comportamiento futuro conociendo las entradas.
*   **Espacio de estados:** Espacio n-dimensional donde cada eje es una variable de estado. Un punto representa el estado del sistema.
*   **Variables de estado:** Conjunto mínimo de parámetros que definen el estado del sistema. Se asocian a elementos almacenadores de energía (inductores, capacitores, masas, resortes).
*   **Trayectoria de estado:** Secuencia de puntos en el espacio de estados que muestra la evolución del sistema.
*   **Vector de estado:** Vector que une el origen con el punto que representa el estado del sistema.
*   **Orden del sistema:** Número de elementos almacenadores de energía, igual al número de variables de estado (n) y al orden de la ecuación diferencial.

### Puntos de Equilibrio
Un **punto de equilibrio** (o crítico) es un estado donde las derivadas de todas las variables de estado son cero, indicando una condición estacionaria. Pueden ser estables (el sistema retorna tras una perturbación) o inestables (el sistema se aleja).

### Ecuaciones de Estado
Formalizan la representación del sistema:
*   **Ecuación de Estado:** `ẋ(t) = A x(t) + B u(t)`
*   **Ecuación de Salida:** `y(t) = C x(t) + D u(t)`

Donde `x(t)` es el vector de estado, `u(t)` la entrada, `y(t)` la salida, y `A, B, C, D` son matrices de coeficientes.

### Ventajas de la Representación por Variables de Estado
*   **Análisis simplificado:** Conclusiones por propiedades de las matrices.
*   **Aplicabilidad universal:** Para sistemas de orden superior, no lineales y MIMO.
*   **Implementación computacional:** Facilita algoritmos y simulación.

### Ejemplos
*   **Circuito RLC en Serie:** Variables de estado: corriente en el inductor y tensión en el capacitor.
*   **Sistema Mecánico Masa-Resorte-Amortiguador:** Variables de estado: posición y velocidad de la masa.


