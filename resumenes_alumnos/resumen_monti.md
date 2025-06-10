Claro, aquí tienes el contenido que enviaste, mejorado, ordenado y formateado en Markdown.

***

# Teoría de Modelado y Simulación de Sistemas

## INTRODUCCIÓN

### Modelo
Un **modelo** es una descripción analítica de un sistema, proceso o circuito, formulado para realizar estudios sobre el mismo y analizar su comportamiento bajo diferentes condiciones.

**¿Por qué utilizar un modelo?**
Experimentar directamente sobre un sistema real puede ser costoso, inseguro y poco práctico. Los modelos permiten un análisis eficiente y seguro.

### Simulación
La **simulación** es el proceso de diseñar y desarrollar un modelo programable de un sistema o proceso con el fin de experimentar y medir su comportamiento.

### Procedimiento de Simulación
El proceso general para llevar a cabo una simulación consta de los siguientes pasos:

1.  **Definir el sistema:** Realizar un análisis exhaustivo para conocer las variables del sistema, sus interrelaciones, restricciones, etc. Esto se suele representar mediante diagramas de flujo.
2.  **Formular el modelo:** Establecer las ecuaciones y relaciones matemáticas que describen el sistema.
3.  **Recolectar datos:** Obtener información necesaria, que puede incluir opiniones de expertos o datos empíricos.
4.  **Implementar en software:** Traducir el modelo matemático a un programa informático.
5.  **Verificar:** Asegurarse de que el software implementado no tiene fallos, utilizando datos de prueba cuyos resultados son conocidos.
6.  **Validar:** Comprobar que el modelo representa fielmente el sistema real.
7.  **Experimentar:** Ejecutar la simulación con múltiples conjuntos de datos y registrar los resultados.
8.  **Interpretar:** Analizar los resultados obtenidos para extraer conclusiones sobre el comportamiento del sistema.
9.  **Documentar:** Elaborar la documentación técnica del modelo, el proceso y las conclusiones finales.

---

## Modelos Matemáticos

Existen tres formas clásicas de establecer un modelo matemático:

*   **Ecuaciones diferenciales de equilibrio:** Es el método tradicional, pero está limitado en Sistemas Eléctricos No Lineales (SENL).
*   **Función de transferencia:** Proporciona información sobre la estabilidad, pero no sobre la arquitectura interna del sistema.
*   **Variable de estado (Modelización en el espacio de estados):** Es un método versátil aplicable tanto a Sistemas Eléctricos Lineales (SEL) como a No Lineales (SENL). Este es el enfoque principal de estudio.

### Modelización en el Espacio de Estados

Este enfoque es ideal para evaluar sistemas:
*   Lineales (SEL) o No Lineales (SENL).
*   Invariantes o variantes en el tiempo.
*   MIMO (Múltiples Entradas, Múltiples Salidas) o SISO (Única Entrada, Única Salida).

Su principal ventaja es que opera en el dominio del tiempo y puede ser representado y ejecutado fácilmente mediante software. Consiste en analizar el **estado** de un sistema.

#### Conceptos Clave

*   **Estado:** Es el comportamiento de un sistema en un instante dado (`t₀`) que, junto a su entrada (`u(t₀)`), determina las características del sistema, respondiendo a la distribución energética acumulada en sus elementos activos.
*   **Variables de estado:** Es el menor conjunto de parámetros que describe completamente el estado del sistema en un momento dado.
*   **Espacio de estados:** Es un espacio n-dimensional donde cada eje corresponde a una variable de estado. Un punto en este espacio define un estado del sistema.
*   **Trayectoria de estado:** Es el conjunto de puntos de estado que el sistema recorre en distintos instantes de tiempo dentro del espacio de estados.
*   **Orden del sistema (n):** Corresponde a la cantidad de elementos almacenadores de energía del sistema y al orden de la ecuación diferencial que lo describe. Una ecuación diferencial de 2º orden tendrá 2 elementos almacenadores de energía.
*   **Vector de estado (x):** Es un vector que une el origen de coordenadas con el punto correspondiente al estado del sistema en un instante dado. Resume matricialmente las coordenadas de estado.
    *   Para un sistema de orden n, el vector de estado es: `x(t) = [x₁(t), x₂(t), ..., xₙ(t)]ᵀ`
*   **Representación gráfica:** Solo es posible visualizar directamente sistemas de segundo orden (un plano) y de tercer orden (un espacio tridimensional). Órdenes superiores corresponden a hiperespacios.
*   **Punto de equilibrio (o punto crítico):** Es el punto donde las derivadas de todas las variables de estado son nulas. En este punto, los valores del sistema no varían en el tiempo.
    *   En un sistema lineal, el punto crítico siempre está en el origen.
    *   Un punto de equilibrio puede ser **estable** (si el sistema retorna a él tras una perturbación) o **inestable** (si no retorna).

---

## Obtención de las Ecuaciones de Estado

La forma general de las ecuaciones de estado se expresa colocando la derivada de una única variable de estado en el primer miembro, mientras que el segundo miembro contiene una combinación lineal del resto de las variables de estado y las entradas, sin derivadas.

Para un sistema de orden `n`, el modelo de estado se define por un conjunto de ecuaciones diferenciales lineales.

#### Ecuación de Estado
La forma compacta y más habitual es:
**`ẋ(t) = A x(t) + B u(t)`**

Donde:
*   `ẋ(t)`: Vector de derivadas de las variables de estado (n x 1).
*   `x(t)`: Vector de estado (n x 1).
*   `u(t)`: Vector o señal de entrada (p x 1).
*   `A`: Matriz de estado o del sistema (n x n). Contiene los coeficientes del sistema.
*   `B`: Matriz de entrada o de control (n x p).

#### Ecuación de Salida
Complementa el modelo describiendo cómo se genera la salida del sistema:
**`y(t) = C x(t) + D u(t)`**

Donde:
*   `y(t)`: Vector de salida (q x 1).
*   `C`: Matriz de salida (q x n).
*   `D`: Matriz de transmisión directa o de realimentación (q x p). Responde a una conexión directa entre la entrada y la salida.



*El bloque "Subsistema Integrador" representa la integración de `ẋ(t)` para obtener `x(t)`.*

---

## Interconexión de Sistemas Lineales

### Conexión en Serie

Se consideran dos sistemas, S1 y S2, donde la salida de S1, `y₁(t)`, es la entrada de S2, `u₂(t)`.

*   **Sistema 1 (S1):**
    *   `ẋ₁(t) = A₁x₁(t) + B₁u₁(t)`
    *   `y₁(t) = C₁x₁(t) + D₁u₁(t)`
*   **Sistema 2 (S2):**
    *   `ẋ₂(t) = A₂x₂(t) + B₂u₂(t)`
    *   `y₂(t) = C₂x₂(t) + D₂u₂(t)`

Dado que `u₂(t) = y₁(t)`, podemos combinar las ecuaciones para obtener el modelo de estado del sistema aumentado:

*   **Ecuación de estado del sistema combinado:**
    ```
    [ ẋ₁ ] = [ A₁    0   ] [ x₁ ] + [  B₁   ] u₁(t)
    [ ẋ₂ ]   [ B₂C₁  A₂  ] [ x₂ ]   [ B₂D₁  ]
    ```

*   **Ecuación de salida del sistema combinado:**
    `y₂(t) = [D₂C₁   C₂] [x₁; x₂] + D₂D₁ u₁(t)`

#### Función de Transferencia Equivalente (Serie)
Para sistemas lineales e invariantes en el tiempo (LTI), la función de transferencia total `H(s)` es el producto de las funciones de transferencia individuales.
**`H(s) = Y₂(s) / U₁(s) = H₂(s) * H₁(s)`**

### Conexión Retroalimentada

En una configuración de lazo cerrado, parte de la señal de salida se resta de una señal de referencia `r(t)` para generar la entrada del sistema.



Las relaciones entre señales son:
*   `u₁(t) = r(t) - y₂(t)`
*   `u₂(t) = y₁(t)`

Asumiendo `D₁ = 0` (no hay realimentación directa en S1), el sistema combinado tiene la siguiente ecuación de estado:

*   **Ecuación de estado del sistema retroalimentado:**
    ```
    [ ẋ₁ ] = [ A₁ - B₁D₂C₁   -B₁C₂ ] [ x₁ ] + [ B₁ ] r(t)
    [ ẋ₂ ]   [      B₂C₁         A₂   ] [ x₂ ]   [ 0  ]
    ```

*   **Ecuación de salida del sistema combinado:**
    `y₁(t) = [C₁   0] [x₁; x₂]`

#### Función de Transferencia Equivalente (Retroalimentación)
La salida `Y₁(s)` en función de la referencia `R(s)` viene dada por:

`Y₁(s) = [I + H₂(s)H₁(s)]⁻¹ H₁(s) R(s)`

La función de transferencia de lazo cerrado `H(s)` es:

**`H(s) = Y₁(s) / R(s) = [I + H₂(s)H₁(s)]⁻¹ H₁(s)`**

Donde el término `J(s) = I + H₂(s)H₁(s)` se conoce como **Matriz Diferencia de Retorno**.

---

## Reconstrucción Óptima Lineal de Estado

En muchos casos prácticos (sistemas de tipo "caja negra"), el vector de estado interno `x(t)` no se puede medir directamente. Sin embargo, las entradas `u(t)` y las salidas `y(t)` sí son observables. El objetivo es reconstruir o estimar el vector de estado `x(t)` utilizando únicamente estas señales observables.

Se busca un **vector de estado reconstruido `✰(t)`** que se aproxime lo máximo posible al vector real `x(t)`. Un método común es utilizar un **observador de estado**.

### Observabilidad
Un sistema es **observable** si es posible determinar completamente su estado interno `x(t)` a partir de las mediciones de su salida `y(t)` en un intervalo de tiempo finito.

*   **Criterio de Observabilidad:** Un sistema es completamente observable si el rango de su **matriz de observabilidad (Mₒ)** es igual al orden del sistema `n`.
    *   `Rango[Mₒ] = n` (lo que implica que `det(Mₒ) ≠ 0` para matrices cuadradas).

*   **Matriz de Observabilidad (Mₒ):** Para un sistema de orden `n`, se construye como:
    ```
       [   C   ]
    Mₒ = [  CA   ]
       [  CA²  ]
       [  ...  ]
       [ CAⁿ⁻¹ ]
    ```

### Observador de Luenberger (Observador Completo)

Un observador es un sistema dinámico que utiliza las entradas y salidas del sistema original para generar una estimación del estado, `✰(t)`. El observador completo reconstruye todo el vector de estado.

Su ecuación diferencial de estado es:
**`✰̇(t) = A✰(t) + Bu(t) + K[y(t) - ŷ(t)]`**

Donde:
*   `ŷ(t) = C✰(t)` es la salida estimada.
*   `K` es la **matriz de ganancia del observador**, que se diseña para que el error de estimación converja a cero.

Sustituyendo `ŷ(t)`, la ecuación del observador queda:
**`✰̇(t) = (A - KC)✰(t) + Bu(t) + Ky(t)`**



### Error de Reconstrucción

El error `e(t)` es la diferencia entre el estado real y el estimado: `e(t) = x(t) - ✰(t)`. La dinámica de este error viene dada por la siguiente ecuación diferencial homogénea:

**`ė(t) = (A - KC) e(t)`**

La solución a esta ecuación es:
**`e(t) = e^[(A - KC)t] * e(0)`**

Para que el error converja a cero (`e(t) → 0`), los autovalores de la matriz `(A - KC)` deben tener parte real negativa. La matriz `K` se elige para ubicar estos autovalores en posiciones deseadas del semiplano izquierdo, asegurando una convergencia rápida y estable.

### Ganancia Óptima (Kₒ)

Aumentar la ganancia `K` acelera la convergencia del error, pero también hace que el observador sea más sensible al ruido de medición presente en la salida `y(t)`.

*   **Bajo `K`:** Convergencia lenta, pero baja sensibilidad al ruido.
*   **Alto `K`:** Convergencia rápida, pero alta sensibilidad al ruido.

La **ganancia óptima (Kₒ)** representa un equilibrio entre la velocidad de convergencia y la sensibilidad al ruido. Para encontrarla, se modelan las perturbaciones del sistema (ruido de proceso `w₁(t)`) y del sensor (ruido de medición `w₂(t)`) y se busca minimizar el **error cuadrático medio (MSE)** de la estimación.

`ẋ(t) = Ax(t) + Bu(t) + w₁(t)`
`y(t) = Cx(t) + w₂(t)`

El cálculo de `Kₒ` se realiza a menudo de forma recursiva utilizando la **Ecuación Algebraica de Riccati**, un pilar de la teoría de control óptimo (Filtro de Kalman).

---

## Modelación de Problemas No Lineales

Los sistemas no lineales (SENL) no tienen un método de resolución general y presentan comportamientos complejos:

*   **No cumplen el principio de superposición.**
*   **Pueden generar nuevas frecuencias:** Una entrada senoidal puede producir una salida con múltiples armónicos.
*   **Pueden presentar auto-oscilaciones (ciclos límite).**

Métodos de análisis incluyen la Función Descriptiva, el **Plano de Fase**, y el Método de Lyapunov.

### Método del Plano de Fase (PDF)

El plano de fase es un retrato gráfico que permite visualizar las trayectorias de las soluciones de un sistema en el espacio de estados. Es especialmente útil para sistemas autónomos de segundo orden.

*   **Sistema Autónomo:** Un sistema cuyas ecuaciones diferenciales no dependen explícitamente del tiempo.
    *   `ẋ = F(x, y)`
    *   `ẏ = G(x, y)`

*   **Punto Crítico:** Un punto `(x₀, y₀)` donde las derivadas son nulas (`F(x₀, y₀) = 0` y `G(x₀, y₀) = 0`). Representa un estado de equilibrio.

#### Clasificación de Puntos Críticos (Sistemas Lineales)
La naturaleza de un punto crítico en el origen `(0,0)` para un sistema lineal se determina a partir de las raíces (autovalores `λ₁, λ₂`) de la ecuación característica de la matriz `A`.

1.  **Nodo (Raíces reales, mismo signo):**
    *   **Estable:** Si `λ₁, λ₂ < 0`. Todas las trayectorias convergen al origen.
    *   **Inestable:** Si `λ₁, λ₂ > 0`. Todas las trayectorias divergen del origen.

2.  **Silla de Montar (Raíces reales, signos opuestos):**
    *   Siempre **inestable**. Las trayectorias se acercan al origen en una dirección y se alejan en otra, como hipérbolas.

3.  **Foco o Espiral (Raíces complejas conjugadas con parte real no nula):**
    *   **Estable:** Si `Re(λ) < 0`. Las trayectorias son espirales que convergen al origen.
    *   **Inestable:** Si `Re(λ) > 0`. Las trayectorias son espirales que divergen del origen.

4.  **Centro (Raíces imaginarias puras):**
    *   **Marginalmente estable**. Las trayectorias son órbitas cerradas (elipses) alrededor del origen. El sistema oscila perpetuamente.

#### Ejemplo: El Péndulo
*   **Péndulo Ideal (sin fricción):** El sistema conserva la energía. Su plano de fase muestra un **centro** en el origen. Las trayectorias son elipses cerradas que representan una oscilación armónica perpetua.
*   **Péndulo Real (con fricción):** La energía se disipa. Su plano de fase muestra un **foco estable**. La trayectoria es una espiral que converge al punto de reposo (el origen), representando una oscilación amortiguada.

### Método de Lyapunov

Este método permite analizar la estabilidad de un punto de equilibrio de un sistema no lineal (cuasilineal) sin necesidad de resolver las ecuaciones diferenciales. Se basa en encontrar una función escalar `V(x)`, llamada **función de Lyapunov**, análoga a la energía del sistema.

*   Si se puede encontrar una `V(x)` que es siempre positiva (`V(x) > 0`) y cuya derivada en el tiempo a lo largo de las trayectorias es siempre negativa (`V̇(x) < 0`), entonces el punto de equilibrio es **estable**.

---

## Modelos Poblacionales

### Modelo Depredador-Presa (Ecuaciones de Lotka-Volterra)

Este modelo describe la dinámica de dos especies que interactúan, una presa `x(t)` y un depredador `y(t)`.

*   **Ecuación de la Presa:** `ẋ = ax - bxy`
    *   La población de presas crece exponencialmente (`ax`) pero disminuye debido a los encuentros con depredadores (`-bxy`).
*   **Ecuación del Depredador:** `ẏ = cxy - ky`
    *   La población de depredadores crece en proporción a los encuentros con presas (`cxy`) pero disminuye por muerte natural (`-ky`).

Este sistema tiene dos puntos críticos:
1.  **Origen `(0, 0)`:** Extinción de ambas especies. Es un punto de tipo **silla de montar**.
2.  **Punto de coexistencia `(k/c, a/b)`:** Un estado de equilibrio donde las poblaciones se mantienen constantes. Es un **centro**.

El resultado es un comportamiento cíclico y oscilatorio. Las trayectorias en el plano de fase son órbitas cerradas alrededor del punto de coexistencia, indicando que las poblaciones de presas y depredadores fluctúan perpetuamente.



### Modelo de Especies en Competencia

Este modelo describe dos especies que compiten por los mismos recursos limitados. La presencia de cada especie afecta negativamente el crecimiento de la otra.

*   `ẋ₁ = a₁x₁ - b₁₁x₁² - b₁₂x₁x₂`
*   `ẋ₂ = a₂x₂ - b₂₂x₂² - b₂₁x₁x₂`

El análisis de este sistema revela puntos críticos que pueden ser **nodos estables** (coexistencia) o **sillas de montar**. Un punto de silla de montar implica que, dependiendo de las condiciones iniciales, una de las especies eventualmente dominará y llevará a la otra a la extinción. Este resultado se conoce como el **principio de exclusión competitiva**.