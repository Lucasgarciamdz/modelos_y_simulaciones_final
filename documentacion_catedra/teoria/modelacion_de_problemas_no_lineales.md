# Modelación de Problemas No Lineales

La principal dificultad en el estudio de los **Sistemas No Lineales (SNL)** radica en la ausencia de un método general para resolver las ecuaciones diferenciales (ED) no lineales que los describen. Mientras que algunos tipos simples de estas ecuaciones tienen solución exacta, la gran mayoría, especialmente las que modelan sistemas físicos reales, solo pueden resolverse mediante aproximaciones. Estas soluciones aproximadas, además, únicamente son válidas bajo las condiciones limitadas que se impusieron para realizar dicha aproximación.

Debido a esta falta de un método universal, cada sistema no lineal puede requerir un enfoque de análisis particular, comúnmente basado en diversas técnicas de linealización.

## ¿Qué es el Comportamiento No Lineal?

Es fundamental entender qué significa que un sistema posea un **comportamiento no lineal**. Un mismo dispositivo puede operar de forma lineal bajo ciertas condiciones y exhibir un comportamiento no lineal bajo otras.

Frecuentemente, en sistemas físicos, el comportamiento es lineal cuando se opera con bajos niveles de energía. Sin embargo, al incrementar la energía procesada por el sistema, este comienza a manifestar su naturaleza no lineal. Este principio es la base de muchas hipótesis de simplificación en física, que permiten modelar un sistema como si fuera lineal. Esto se logra al descartar ciertos términos en las ecuaciones diferenciales, asumiendo, por ejemplo:
*   No existe rozamiento ni fricción.
*   No hay disipación de calor.
*   Los elementos son rígidos e indeformables.
*   Los materiales son perfectamente homogéneos.
*   Los movimientos se realizan a baja velocidad.
*   Los fluidos son incompresibles.

Cuando las condiciones de operación del sistema impiden hacer estas suposiciones (generalmente en regímenes de alta energía), los términos que antes se despreciaban se vuelven significativos, y las ecuaciones diferenciales completas se tornan no lineales.

Por ejemplo, al analizar un elemento mecánico que gira a alta velocidad, no se puede ignorar la dilatación del material causada by la aceleración centrífuga. El componente, antes considerado rígido, ahora debe ser tratado como un cuerpo deformable.

### Características de los Sistemas No Lineales

Para resumir, un sistema con comportamiento no lineal se caracteriza por las siguientes particularidades:

*   **No cumple el principio de superposición**: A diferencia de los sistemas lineales, la respuesta a una suma de entradas no es igual a la suma de las respuestas a cada entrada individual. Esta es la propiedad fundamental que define la no linealidad.
*   **Genera nuevas frecuencias**: Si la entrada es una señal senoidal pura, la salida contendrá la frecuencia original y, además, múltiples armónicos. Por ello, la señal de salida debe representarse mediante una serie de Fourier.
*   **Parámetros variables**: Los parámetros que definen el sistema pueden cambiar dependiendo del nivel de la señal de entrada o excitación.
*   **Fenómenos complejos**: Pueden presentar comportamientos como oscilaciones subarmónicas y auto-oscilaciones sostenidas, conocidas como **ciclos límite**.

## Metodología de Análisis para Sistemas No Lineales

Existen cuatro métodos comúnmente utilizados para analizar sistemas no lineales:

1.  **Función Descriptiva**: Un método de análisis en el dominio de la frecuencia, estudiado en profundidad en la teoría de Sistemas de Control.
2.  **Plano de Fase**: Un procedimiento gráfico muy completo que proporciona información sobre la respuesta temporal y la estabilidad del sistema. Su principal limitación es que se aplica directamente a sistemas de primer y segundo orden. Es posible extenderlo a tercer orden usando un espacio de fase tridimensional, pero para órdenes superiores se requieren hiperespacios y representaciones estadísticas.
3.  **Método de Lyapunov**: Se aplica para determinar la estabilidad de un sistema en torno a un punto de equilibrio sin necesidad de resolver explícitamente las ecuaciones diferenciales. Es especialmente útil en sistemas cuasilineales (sistemas no lineales que pueden ser aproximados por un modelo lineal más una pequeña perturbación no lineal).
4.  **Simulación por Software**: Utiliza métodos numéricos y algoritmos computacionales para modelar y obtener la respuesta temporal del sistema, aproximando la solución de sus ecuaciones.

## Análisis mediante el Plano de Fase: Sistemas Autónomos

Antes de profundizar en el método del Plano de Fase, es necesario introducir el concepto de **sistemas autónomos**.

### Definición de Sistemas Autónomos

Un sistema autónomo es aquel cuyas ecuaciones diferenciales no contienen explícitamente la variable independiente, en este caso, el tiempo (`t`). El tiempo se encuentra implícito en las variables de estado. Las ecuaciones tienen la siguiente forma:

```
dx/dt = F(x, y)
dy/dt = G(x, y)
```
donde `x = x(t)` y `y = y(t)`.

Cualquier solución de este sistema, `x = φ(t)` e `y = ψ(t)`, define una **trayectoria** en el plano de fase, donde el tiempo es el parámetro que describe la curva. Si la solución es constante, `φ(t) = cte` y `ψ(t) = cte`, la trayectoria se reduce a un único punto en el plano.

### Ejemplo de Resolución de un Sistema Autónomo

Consideremos el siguiente sistema autónomo lineal:

```
x' = x + y
y' = 2x
```
Este sistema de dos ecuaciones se puede resolver de varias formas. Un método simple consiste en derivar la primera ecuación:
`x'' = x' + y'`

Luego, se sustituye `y'` usando la segunda ecuación:
`x'' = x' + 2x`

Reordenando los términos, obtenemos una Ecuación Diferencial Ordinaria (EDO) homogénea de 2° orden:
`x'' - x' - 2x = 0`

La solución de esta EDO es conocida y tiene la forma:
`x(t) = c₁℮⁻ᵗ + c₂℮²ᵗ`

Para encontrar `y(t)`, podemos usar la segunda ecuación original `y' = 2x`:
`y' = 2 * (c₁℮⁻ᵗ + c₂℮²ᵗ)`

Integrando esta expresión, se obtiene:
`y(t) = -2c₁℮⁻ᵗ + c₂℮²ᵗ + c₃`

Para determinar la constante de integración `c₃`, sustituimos `x(t)` e `y(t)` en la primera ecuación `x' = x + y`. Tras realizar las operaciones y comparar con la derivada directa de `x(t)`, se concluye que `c₃ = 0`.

Por lo tanto, la solución general del sistema es:

```
x(t) = φ(t) = c₁℮⁻ᵗ + c₂℮²ᵗ
y(t) = ψ(t) = -2c₁℮⁻ᵗ + c₂℮²ᵗ
```

Para cada par de valores de las constantes `c₁` y `c₂` (determinados por las condiciones iniciales), las funciones `x(t)` e `y(t)` son las ecuaciones paramétricas de una curva en el plano `(x, y)`. Estas curvas son las **trayectorias** del sistema.

Por ejemplo, si `c₁ = 0` y `c₂ = 1`, la solución se simplifica a:
`x(t) = ℮²ᵗ`
`y(t) = ℮²ᵗ`

En este caso, `x(t) = y(t)`, lo que representa una recta a 45° en el primer cuadrante que se aproxima al origen `(0,0)` cuando `t → -∞`.

## Propiedades de las Trayectorias en el Plano de Fase

1.  **Invariancia ante traslación temporal**: Si `(φ(t), ψ(t))` es una trayectoria, entonces `(φ(t+b), ψ(t+b))`, donde `b` es una constante, también es una trayectoria. Esto significa que la forma de la trayectoria no depende del instante inicial.

2.  **Unicidad de las trayectorias**: Por un punto `(x₀, y₀)` del plano de fase solo puede pasar una única trayectoria. Si dos trayectorias parecen pasar por el mismo punto, en realidad son la misma trayectoria recorrida en diferentes instantes de tiempo.

3.  **Direccionalidad**: Las trayectorias tienen un sentido, que corresponde a la dirección de movimiento del punto `(x(t), y(t))` a medida que el tiempo `t` aumenta.

4.  **No auto-intersección**: Una trayectoria no puede cruzarse a sí misma, a menos que sea una curva cerrada. Una trayectoria cerrada representa una **solución periódica** del sistema (un ciclo).

El conjunto de todas las trayectorias de un sistema en el plano `(x,y)` se denomina **diagrama de fase** o **retrato fásico**.

## Puntos Críticos o de Equilibrio

Un **punto crítico** (también llamado punto de equilibrio o punto singular) es un punto `(x₀, y₀)` del plano de fase donde las derivadas de todas las variables de estado se anulan simultáneamente.

```
x' = F(x₀, y₀) = 0
y' = G(x₀, y₀) = 0
```
Un punto crítico corresponde a una **condición estacionaria** del sistema. Si el sistema se encuentra en un punto crítico, permanecerá allí indefinidamente. La trayectoria correspondiente a un punto crítico es el propio punto.

*   En los **sistemas lineales**, si existe, el único punto crítico es el origen `(0,0)`.
*   En los **sistemas no lineales**, pueden existir múltiples puntos críticos distribuidos en diferentes lugares del plano.

Las trayectorias cercanas a un punto crítico se aproximan o se alejan de él, pero nunca lo tocan en un tiempo finito. La clasificación de los puntos críticos según el comportamiento de las trayectorias a su alrededor es fundamental para entender la estabilidad y la dinámica global del sistema.

***
*H. B. 2020*