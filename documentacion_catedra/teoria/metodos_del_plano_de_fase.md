# Método del Plano de Fase para Sistemas Dinámicos

## 1. Introducción al Método del Plano de Fase

El **Método del Plano de Fase (MPF)** es una técnica de análisis gráfico utilizada para evaluar sistemas dinámicos, tanto lineales como no lineales. Proporciona información cualitativa valiosa sobre la respuesta temporal y la estabilidad del sistema sin necesidad de resolver explícitamente las ecuaciones diferenciales que lo gobiernan.

#### Conceptos Fundamentales:

*   **Plano de Fase (PdF):** También conocido como mapa de fase, es un plano cartesiano donde los ejes representan dos variables de estado del sistema que dependen del tiempo y guardan una relación de fase entre sí (por ejemplo, una variable y su derivada, como posición y velocidad).
*   **Trayectoria de Fase:** En cada instante de tiempo, los valores de las variables de estado definen un punto en el plano. La secuencia de estos puntos a lo largo de un intervalo de tiempo forma una curva llamada trayectoria.
*   **Retrato de Fase (o Diagrama de Fase):** Es el conjunto de todas las trayectorias posibles del sistema dinámico, mostrando una visión global de su comportamiento.

#### Alcance y Limitaciones:

El método es ideal para **sistemas de primer y segundo orden**, ya que sus estados pueden representarse en un plano bidimensional. Aunque podría extenderse a un espacio de fase tridimensional para sistemas de tercer orden, para órdenes superiores se requeriría un hiperespacio, lo que complica enormemente la visualización y el análisis gráfico.

---

## 2. Clasificación de Puntos Críticos en Sistemas Lineales

Un punto crítico (también llamado punto de equilibrio o punto fijo) es un punto en el plano de fase donde el sistema se encuentra en estado estacionario, es decir, las derivadas de las variables de estado son cero.

Consideremos un sistema lineal de ecuaciones diferenciales de segundo orden:

```
x' = ax + by
y' = cx + dy
```

Donde `a`, `b`, `c` y `d` son coeficientes reales. Si el determinante `ad – bc` es distinto de cero, el único punto crítico del sistema es el origen (0, 0).

En forma matricial, el sistema se expresa como:
$$
\begin{Bmatrix} x' \\ y' \end{Bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{Bmatrix} x \\ y \end{Bmatrix}
$$
La estabilidad y el comportamiento de las trayectorias cerca del punto crítico se determinan a partir de los **autovalores** (o raíces `λ`) de la matriz de coeficientes, que se obtienen de la ecuación característica:
$$
\lambda^2 - (a+d)\lambda + (ad-bc) = 0
$$
Los autovalores `λ₁,₂` se calculan con la fórmula de la ecuación de segundo grado. La naturaleza de estas raíces (reales, complejas, sus signos y si su parte real es positiva, negativa o nula) define el tipo de punto crítico.

Existen cuatro posibilidades principales para las raíces, que dan lugar a los siguientes tipos de puntos críticos:

*   **Nodo:** Raíces reales con el mismo signo.
*   **Punto de Silla (o Montura):** Raíces reales con signos opuestos.
*   **Foco (o Espiral):** Raíces complejas conjugadas.
*   **Centro:** Raíces imaginarias puras.

### 2.1. Nodo

Un punto crítico es un **nodo** cuando los autovalores son reales y tienen el mismo signo.
*   **Nodo Estable:** Si ambos autovalores son negativos (`λ₁ < 0`, `λ₂ < 0`), todas las trayectorias convergen hacia el punto crítico a medida que el tiempo avanza. El sistema tiende al reposo. Esto ocurre cuando la parte real de los autovalores es negativa.
*   **Nodo Inestable:** Si ambos autovalores son positivos (`λ₁ > 0`, `λ₂ > 0`), todas las trayectorias divergen desde el punto crítico. El sistema es inestable. Esto corresponde a una parte real positiva en los autovalores.

Las trayectorias son curvas que, o bien concurren en el origen (estable), o emanan de él (inestable).

### 2.2. Punto de Silla (o Montura)

Este punto crítico ocurre cuando los autovalores son reales pero de signos opuestos (`λ₁ < 0 < λ₂`).
*   **Estabilidad:** Un punto de silla es **siempre inestable**, ya que siempre habrá un autovalor con parte real positiva, lo que provoca que las trayectorias se alejen del punto en esa dirección.
*   **Trayectorias:** Las trayectorias tienen forma de hipérbolas. Existen dos trayectorias especiales (llamadas separatrices) que se aproximan al origen y otras dos que se alejan de él.

### 2.3. Foco (o Espiral)

Un punto crítico es un **foco** (o espiral) cuando los autovalores son complejos conjugados (`λ = α ± iβ`).
*   **Foco Estable:** Si la parte real es negativa (`α < 0`), las trayectorias son espirales que convergen hacia el punto crítico. Esto corresponde a un sistema oscilatorio amortiguado, donde las oscilaciones disminuyen hasta que el sistema alcanza el equilibrio.
*   **Foco Inestable:** Si la parte real es positiva (`α > 0`), las trayectorias son espirales que divergen desde el punto crítico. Esto representa un sistema con oscilaciones cuya amplitud crece exponencialmente, típico de sistemas con realimentación positiva.

### 2.4. Centro

El punto crítico es un **centro** cuando los autovalores son imaginarios puros y conjugados (`λ = ± iβ`), es decir, su parte real es cero.
*   **Estabilidad:** Este punto se encuentra en el límite de la estabilidad. No es ni estable ni inestable en el sentido de Liapunov, sino **orbitalmente estable**. Las trayectorias no convergen ni divergen, sino que orbitan alrededor del punto crítico.
*   **Trayectorias:** Son una familia de curvas cerradas (generalmente elipses) concéntricas alrededor del punto crítico. Esto corresponde a un sistema oscilatorio armónico (sin amortiguamiento), donde las oscilaciones se mantienen constantes indefinidamente.

---

## 3. Aplicación: Análisis del Péndulo

### Péndulo Ideal

Un péndulo ideal, donde se desprecia el rozamiento y cualquier pérdida de energía, es un ejemplo clásico de un sistema cuyo retrato de fase es un **centro**.
*   **Variables de estado:** Ángulo (`θ`) y velocidad angular (`ω = dθ/dt`).
*   **Comportamiento:** Cuando el péndulo alcanza su altura máxima (ángulo máximo), su velocidad es cero. Cuando pasa por el punto más bajo (ángulo cero), su velocidad es máxima. Este intercambio continuo y sin pérdidas entre energía potencial y cinética se representa en el plano de fase como una trayectoria elíptica cerrada. El sistema repite el mismo ciclo indefinidamente, correspondiendo a un comportamiento oscilatorio armónico.

### Péndulo Real

En un péndulo real, la fricción con el aire y en el pivote disipa energía.
*   **Comportamiento:** Las oscilaciones se van amortiguando progresivamente: tanto el ángulo máximo como la velocidad máxima disminuyen en cada ciclo.
*   **Retrato de Fase:** El punto crítico es un **foco estable**. Las trayectorias son espirales que convergen hacia el origen (la posición de reposo), lo que refleja cómo el péndulo pierde energía hasta detenerse.

---

## 4. Sistemas No Lineales

A diferencia de los sistemas lineales, los sistemas no lineales pueden presentar comportamientos más complejos.
*   **Múltiples Puntos Críticos:** Un sistema no lineal puede tener más de un punto de equilibrio, y estos no tienen por qué estar en el origen.
*   **Análisis Local:** El comportamiento cerca de cada punto crítico puede analizarse linealizando el sistema en ese punto. El tipo de punto crítico (nodo, silla, foco, etc.) suele coincidir con el del sistema linealizado, aunque hay excepciones (por ejemplo, un centro en la linealización puede ser un foco en el sistema no lineal).
*   **Retrato de Fase Complejo:** El diagrama de fase global de un sistema no lineal puede mostrar una rica combinación de diferentes tipos de puntos críticos, ciclos límite (órbitas periódicas aisladas) y otras dinámicas complejas. Por ejemplo, los modelos de dinámica poblacional, que son inherentemente no lineales, suelen tener sus puntos de equilibrio en el primer cuadrante, ya que las poblaciones no pueden ser negativas.