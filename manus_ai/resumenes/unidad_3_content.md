


# UNIDAD 3: Análisis de Sistemas No Lineales y Estabilidad

## 3.1. Modelación de Problemas No Lineales

La principal dificultad en el estudio de los **Sistemas No Lineales (SNL)** radica en la ausencia de un método general para resolver las ecuaciones diferenciales (ED) no lineales que los describen. Cada sistema no lineal puede requerir un enfoque de análisis particular, comúnmente basado en diversas técnicas de linealización.

### ¿Qué es el Comportamiento No Lineal?
Un sistema puede operar de forma lineal bajo ciertas condiciones (bajos niveles de energía) y exhibir comportamiento no lineal bajo otras (altos niveles de energía). Las suposiciones de linealidad (no rozamiento, elementos rígidos, etc.) dejan de ser válidas en regímenes de alta energía.

### Características de los Sistemas No Lineales
*   **No cumple el principio de superposición**: La respuesta a una suma de entradas no es igual a la suma de las respuestas individuales.
*   **Genera nuevas frecuencias**: Una entrada senoidal puede producir una salida con múltiples armónicos.
*   **Parámetros variables**: Los parámetros del sistema pueden cambiar según el nivel de la señal de entrada.
*   **Fenómenos complejos**: Pueden presentar oscilaciones subarmónicas y auto-oscilaciones sostenidas (ciclos límite).

## 3.2. Metodología de Análisis para Sistemas No Lineales

Existen cuatro métodos comúnmente utilizados:
1.  **Función Descriptiva**: Análisis en el dominio de la frecuencia.
2.  **Plano de Fase**: Procedimiento gráfico para sistemas de primer y segundo orden, que proporciona información sobre la respuesta temporal y la estabilidad.
3.  **Método de Lyapunov**: Determina la estabilidad de un sistema en torno a un punto de equilibrio sin resolver explícitamente las ecuaciones diferenciales.
4.  **Simulación por Software**: Utiliza métodos numéricos para obtener la respuesta temporal del sistema.

## 3.3. Análisis en el Plano de Fase

El plano de fase es una herramienta gráfica para analizar el comportamiento de sistemas dinámicos, especialmente útil para sistemas autónomos de segundo orden. Representa las trayectorias de las variables de estado (ej. posición vs. velocidad) a lo largo del tiempo.

### Definición de Sistemas Autónomos
Un sistema autónomo es aquel cuyas ecuaciones diferenciales no contienen explícitamente la variable independiente (tiempo). Las ecuaciones tienen la forma: `dx/dt = F(x, y)` y `dy/dt = G(x, y)`.

### Puntos Críticos o de Equilibrio
Un **punto crítico** (o de equilibrio) es un punto en el plano de fase donde las derivadas de todas las variables de estado se anulan simultáneamente. Corresponde a una condición estacionaria del sistema.
*   En sistemas lineales, el único punto crítico es el origen `(0,0)`.
*   En sistemas no lineales, pueden existir múltiples puntos críticos.

### Clasificación de Puntos Críticos (Sistemas Lineales)
La estabilidad y el comportamiento de las trayectorias cerca del punto crítico se determinan a partir de los **autovalores** (`λ`) de la matriz de coeficientes del sistema linealizado. Los tipos principales son:

1.  **Nodo (Estable/Inestable):** Raíces reales con el mismo signo. Las trayectorias convergen (estable) o divergen (inestable) del punto.
2.  **Punto de Silla (Inestable):** Raíces reales de signos opuestos. Las trayectorias se asemejan a hipérbolas.
3.  **Foco o Espiral (Estable/Inestable):** Raíces complejas conjugadas con parte real no nula. Las trayectorias son espirales que convergen (estable) o divergen (inestable).
4.  **Centro (Marginalmente Estable):** Raíces imaginarias puras. Las trayectorias son curvas cerradas (elipses) alrededor del punto, indicando oscilaciones perpetuas.

### Aplicación: Análisis del Péndulo
*   **Péndulo Ideal (sin fricción):** Su retrato de fase es un **centro**, con trayectorias elípticas cerradas que representan oscilaciones armónicas perpetuas.
*   **Péndulo Real (con fricción):** Su retrato de fase es un **foco estable**, con trayectorias en espiral que convergen al origen, reflejando oscilaciones amortiguadas hasta el reposo.

## 3.4. Estabilidad de Sistemas LTI

La estabilidad de un sistema lineal e invariante en el tiempo (LTI) depende de los autovalores (polos) de la matriz de estado `A`. Un sistema LTI es asintóticamente estable si la parte real de todos sus autovalores es negativa.
*   **Re(λ) < 0:** Estable (respuesta decae exponencialmente).
*   **Re(λ) > 0:** Inestable (respuesta crece exponencialmente).
*   **Re(λ) = 0:** Marginalmente estable (oscilatorio sostenido) o inestable (si hay raíces repetidas en el eje imaginario).

## 3.5. Método de Lyapunov

Permite analizar la estabilidad de un punto de equilibrio de un sistema no lineal sin resolver explícitamente las ecuaciones. Se basa en encontrar una **función de Lyapunov `V(x)`** (análoga a la energía del sistema) que sea siempre positiva y cuya derivada en el tiempo sea siempre negativa. Si se cumple, el punto de equilibrio es estable. 


