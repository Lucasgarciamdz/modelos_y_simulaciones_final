# RECONSTRUCCIÓN DE ESTADO

## Reconstrucción Óptima Lineal de Estado

### ¿Qué significa reconstruir el estado?

En el análisis de sistemas mediante el Modelo de Estado, comúnmente se asume que el vector de estado `{x}` puede ser medido de forma completa y precisa en cualquier momento. Sin embargo, esta suposición no siempre es válida en la práctica.

Con frecuencia, es imposible acceder a ciertos componentes internos de un sistema para medir directamente las variables que definen su estado. Las razones para esta limitación son variadas:

*   **Inaccesibilidad física:** Componentes sellados en módulos herméticos o encapsulados en resina.
*   **Protocolos de seguridad:** Restricciones diseñadas para proteger el sistema o al personal.
*   **Complejidad o costo:** Dificultades técnicas o económicas que hacen inviable la medición directa.
*   **Falta de documentación:** Ausencia de diagramas de circuito o esquemas de interconexión, especialmente en equipos antiguos.

Cuando la arquitectura interna es desconocida, el sistema se comporta como una "caja negra". Esto implica que en la ecuación diferencial de estado:

```
ẋ = [A] {x} + [b] u
```

Es imposible determinar el vector de estado `{x}` porque los parámetros de la matriz de estado `[A]` son desconocidos. Esta es una situación habitual para ingenieros de mantenimiento que deben reparar equipos obsoletos sin planos o dispositivos modernos con módulos sellados.

A pesar de estas limitaciones, la entrada `u(t)` y la salida `y(t)` del sistema son casi siempre accesibles. Estas pueden ser señales eléctricas, flujos de fluidos, movimientos mecánicos, o cualquier otra magnitud física, dependiendo de la naturaleza del sistema.


*Aunque los componentes internos sean inaccesibles, la entrada y la salida generales del sistema siempre están disponibles para su medición y análisis.*

Incluso si el sistema es completamente accesible, puede ser más conveniente o eficiente determinar sus estados internos a través de mediciones realizadas únicamente en su salida. La relación entre la salida y el estado está definida por la ecuación de estado de salida:

```
y(t) = [C] {x(t)}
```

El objetivo es desarrollar métodos para estimar el vector de estado desconocido `{x(t)}` a partir del conocimiento de la variable de salida observada `{y(t)}`. Este proceso se denomina **reconstrucción de estado**. Se busca un vector funcional `F` tal que:

**`x̂(t) = F[y(τ), τ]`**

donde `t₀ ≤ τ ≤ t`.

El vector `x̂(t)` (leído como "x sombrero") es el **vector de estado reconstruido** y representa una aproximación del estado real `x(t)`. Este funcional depende únicamente de las observaciones pasadas y presentes de la salida `y(τ)`, no de valores futuros.

Una vez que se ha reconstruido el estado, se pueden aplicar las técnicas de control por realimentación de estado, utilizando `x̂(t)` en lugar del estado real `x(t)`. Un enfoque común es emplear un **observador**, que es un sistema dinámico auxiliar diseñado para que su propio estado converja al estado del sistema original.

---

### Observabilidad

La **observabilidad** es una propiedad fundamental de los sistemas de control que determina si es posible conocer el estado interno completo de un sistema a partir de la información de sus salidas.

> Un sistema es **completamente observable** si, para cualquier estado inicial desconocido `x(t₀)`, es posible determinar dicho estado a partir de la observación de la salida `y(t)` durante un intervalo de tiempo finito.

Según el **Criterio de Kalman**, la observabilidad se puede verificar mediante la **matriz de observabilidad `[Mo]`**. Un sistema es completamente observable si el rango de esta matriz es igual al orden del sistema `n`.

`Rango [Mo] = n`

Esto es equivalente a que el determinante de la matriz de observabilidad sea distinto de cero:

`|Mo| ≠ 0`

Para un sistema de orden `n`, la matriz de observabilidad se construye de la siguiente manera:

```
Mo =
  [ C      ]
  [ CA     ]
  [ CA²    ]
  [ ...    ]
  [ CAⁿ⁻¹  ]
```

Alternativamente, se puede expresar utilizando matrices transpuestas:

```
Mo = [Cᵀ | AᵀCᵀ | (Aᵀ)²Cᵀ | ... | (Aᵀ)ⁿ⁻¹Cᵀ]
```

---

## Observadores

Un **observador de estados** es un sistema dinámico que se diseña para estimar el estado interno de otro sistema (la planta) utilizando únicamente las mediciones de la entrada y la salida de dicha planta. El estado del observador, `x̂`, converge asintóticamente al estado real de la planta, `x`.

### Observador de Orden Completo (Luenberger)

Para un sistema original descrito por:

1.  `ẋ = Ax + Bu`
2.  `y = Cx`

Se propone un observador de orden completo cuya dinámica está dada por:

`ẋ̂(t) = Fx̂(t) + Gy(t) + Hu(t)`

El objetivo es que el estado reconstruido `x̂(t)` sea una buena aproximación del estado real `x(t)`. Para lograrlo, las matrices del observador `[F]`, `[G]` y `[H]` deben cumplir las siguientes condiciones:

*   `[H] = [B]`
*   `[G] = [K]` (Matriz de ganancia del observador)
*   `[F] = [A] - [K][C]`

Donde `[K]` es una matriz de ganancia que se diseña para asegurar la estabilidad del error de estimación. Sustituyendo estas relaciones, la ecuación del observador queda:

**`ẋ̂ = (A - KC)x̂ + Bu + Ky`**

#### Esquema del Observador

El observador es un sistema que opera en paralelo a la planta original. Se alimenta con la misma señal de entrada `u(t)` que la planta y, además, con la señal de salida `y(t)` de la planta. La salida del observador es el vector de estado reconstruido `x̂`.


*Diagrama de bloques que muestra la interconexión entre el sistema original (planta) y el sistema observador.*

El término `K(y - Cx̂)` actúa como un término de corrección. La diferencia `y - ŷ` (donde `ŷ = Cx̂` es la salida estimada) es el error de estimación de la salida. El observador utiliza este error, ponderado por la ganancia `K`, para corregir su propia dinámica y forzar a que `x̂` converja a `x`.


*Arquitectura interna del observador, destacando cómo utiliza las señales de entrada y salida de la planta para generar el estado reconstruido.*

---

### Error de Reconstrucción

El **error de reconstrucción**, `e(t)`, se define como la diferencia entre el estado real y el estado reconstruido:

`e(t) = x(t) - x̂(t)`

Para analizar la dinámica de este error, derivamos la ecuación anterior y sustituimos las dinámicas del sistema y del observador:

`ė(t) = ẋ(t) - ẋ̂(t)`
`ė(t) = (Ax + Bu) - ((A - KC)x̂ + Bu + Ky)`

Sustituyendo `y = Cx`:

`ė(t) = Ax + Bu - Ax̂ + KCx̂ - Bu - KCx`
`ė(t) = A(x - x̂) - KC(x - x̂)`

Lo que nos lleva a la ecuación diferencial del error:

**`ė(t) = (A - KC)e(t)`**

La solución a esta ecuación diferencial homogénea es:

**`e(t) = e^[(A-KC)t] * e(0)`**

Para que el error de reconstrucción `e(t)` converja a cero con el tiempo, el sistema `ė = (A - KC)e` debe ser estable. Esto significa que todos los autovalores de la matriz `(A - KC)` deben tener parte real negativa.

La clave del diseño del observador reside en elegir la matriz de ganancia `[K]` de tal forma que los autovalores de `(A - KC)`, también conocidos como los **polos del observador**, se ubiquen en posiciones deseadas en el semiplano izquierdo del plano complejo, garantizando una convergencia del error tan rápida como se desee.

---

### Ganancia Óptima y Ruido

En teoría, podríamos hacer la convergencia del error arbitrariamente rápida eligiendo una ganancia `[K]` muy grande. Sin embargo, en la práctica, esto presenta un problema: el ruido.

Las mediciones del mundo real siempre están contaminadas por ruido. Un modelo más realista del sistema incluye el ruido del proceso `w₁(t)` (perturbaciones internas) y el ruido de medición `w₂(t)` (errores en los sensores):

`ẋ(t) = Ax + Bu + w₁(t)`
`y(t) = Cx + w₂(t)`

Una ganancia `[K]` elevada hace que el observador sea muy sensible al ruido de medición `w₂(t)`, lo que puede amplificarlo y degradar la calidad de la estimación `x̂(t)`.

Por lo tanto, la elección de `[K]` implica un compromiso:

*   **`K` pequeña:** Respuesta lenta del observador, pero buen rechazo al ruido.
*   **`K` grande:** Respuesta rápida del observador, pero alta sensibilidad al ruido.

La **ganancia óptima `[K₀]`** es aquella que encuentra el mejor equilibrio entre la velocidad de convergencia del error y la minimización de los efectos perjudiciales del ruido. Esta ganancia se calcula para minimizar el **Error Cuadrático Medio (MSE)** de la estimación.

El cálculo de `K₀` se realiza mediante la solución de una **Ecuación Algebraica de Riccati** en el contexto de un **Filtro de Kalman**, que es, en esencia, un observador de estado óptimo para sistemas estocásticos (sistemas con ruido).

La ganancia óptima viene dada por:

**`K₀(τ) = Q(τ)Cᵀ(τ)[W₀(τ)]⁻¹`**

Donde `Q(τ)` es la matriz de covarianza del error de estimación y `W₀(τ)` es la matriz de covarianza del ruido de medición. Un observador diseñado con esta ganancia se conoce como **filtro de Kalman** y proporciona la mejor estimación lineal posible en el sentido del mínimo error cuadrático medio.

---

### Ejercicio de Aplicación

**Problema:** Diseñar un observador de orden completo para el siguiente sistema de segundo orden.

Dadas las matrices del sistema:

`A = [ 2  3 ]`
`    [-1  4 ]`

`B = [ 0 ]`
`    [ 1 ]`

`C = [ 1  0 ]`

**1. Verificar Observabilidad:**

Calculamos la matriz de observabilidad `Mo`:

`Mo = [ C  ]`
`     [ CA ]`

`CA = [1 0] * [ 2  3 ] = [2 3]`
`             [-1  4 ]`

`Mo = [ 1  0 ]`
`     [ 2  3 ]`

El determinante de `Mo` es `(1*3) - (0*2) = 3`. Como `det(Mo) ≠ 0`, el sistema es **completamente observable**.

**2. Definir la Dinámica Deseada del Observador:**

Se desea que los polos del observador (autovalores de `A-KC`) tengan una dinámica con una relación de amortiguamiento `ξ = 0.8` y una frecuencia natural no amortiguada `ωn = 10 rad/s`.

La ecuación característica deseada es:

`λ² + 2ξωnλ + ωn² = 0`
`λ² + 2(0.8)(10)λ + 10² = 0`
**`λ² + 16λ + 100 = 0`**

**3. Calcular la Ecuación Característica del Observador:**

La ecuación característica del observador es `det(λI - (A - KC)) = 0`.
Sea la matriz de ganancia `K = [K₁; K₂]`.

`KC = [ K₁ ] * [1 0] = [ K₁  0 ]`
`     [ K₂ ]          [ K₂  0 ]`

`A - KC = [ 2  3 ] - [ K₁  0 ] = [ 2-K₁   3 ]`
`         [-1  4 ]   [ K₂  0 ]   [-1-K₂  4 ]`

`λI - (A - KC) = [ λ   0 ] - [ 2-K₁   3 ] = [ λ-(2-K₁)  -3     ]`
`                 [ 0   λ ]   [-1-K₂  4 ]   [ 1+K₂       λ-4    ]`

Calculamos el determinante:

`det = (λ - (2 - K₁))(λ - 4) - (-3)(1 + K₂)`
`det = λ² - 4λ - (2 - K₁)λ + 4(2 - K₁) + 3 + 3K₂`
`det = λ² - 4λ - 2λ + K₁λ + 8 - 4K₁ + 3 + 3K₂`
**`det = λ² + (K₁ - 6)λ + (11 - 4K₁ + 3K₂) = 0`**

**4. Igualar Coeficientes y Resolver para K:**

Comparamos la ecuación característica del observador con la ecuación deseada:

*   Término de `λ`: `K₁ - 6 = 16`  =>  **`K₁ = 22`**
*   Término independiente: `11 - 4K₁ + 3K₂ = 100`

Sustituimos `K₁ = 22`:

`11 - 4(22) + 3K₂ = 100`
`11 - 88 + 3K₂ = 100`
`-77 + 3K₂ = 100`
`3K₂ = 177`
**`K₂ = 59`**

**5. Resultado:**

La matriz de ganancia del observador es:

`K = [ 22 ]`
`    [ 59 ]`

La ecuación final del observador es:

`ẋ̂ = (A - KC)x̂ + Bu + K(y - ŷ)`
`ẋ̂ = Ax̂ + Bu + K(y - Cx̂)`

Sustituyendo `ŷ = Cx̂ = [1 0]x̂ = x̂₁`:

**`ẋ̂ = [ 2  3 ]x̂ + [ 0 ]u(t) + [ 22 ](y - x̂₁)`**
**`    [-1  4 ]    [ 1 ]        [ 59 ]`**

Este sistema dinámico tomará la entrada `u(t)` y la salida `y(t)` del sistema original y generará una estimación `x̂` de los estados `x₁` y `x₂`, con una dinámica de error que converge según los polos deseados.