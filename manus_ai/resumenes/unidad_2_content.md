


# UNIDAD 2: Resolución y Reconstrucción de Estado

## 2.1. Resolución del Modelo de Estado

Resolver la ecuación diferencial de estado (`ẋ(t) = A x(t) + B u(t)`) implica encontrar el vector de estado `x(t)`. Esto se puede lograr principalmente de dos maneras:

### Método de la Transformada de Laplace
Se aplica la Transformada de Laplace a la ecuación de estado, convirtiendo las ecuaciones diferenciales en ecuaciones algebraicas. La solución en el dominio de Laplace es:

`X(s) = [sI – A]⁻¹[x(0)] + [sI – A]⁻¹[B][U(s)]`

Donde `[sI – A]` es la **Matriz Característica** del sistema. Luego, se aplica la antitransformada de Laplace para obtener `x(t)`.

### Método de la Matriz Exponencial (Solución Homogénea)
Para la ecuación homogénea (`ẋ = Ax`), la solución es `x(t) = e^(At) * x(0)`. La matriz `e^(At)` es la **Matriz de Transición de Estado** (`Φ(t)`), que se puede calcular como una serie de potencias:

`e^(At) = I + At + (A²t²)/2! + (A³t³)/3! + ...`

La solución completa (homogénea + particular) es:

`x(t) = e^(At) * x(0) + ∫[0,t] e^(A(t-τ)) * B * u(τ) dτ`

## 2.2. Interconexión de Sistemas Lineales

Cuando dos sistemas lineales se interconectan, el sistema resultante puede describirse combinando sus modelos de estado.

### Conexión en Serie
La salida del primer sistema es la entrada del segundo. El vector de estado del sistema combinado se forma con los vectores de estado de los subsistemas. La función de transferencia equivalente es el producto de las funciones de transferencia individuales: `G_eq(s) = G₁(s) * G₂(s)`.

### Conexión Realimentada
La salida de un sistema se "realimenta" y se combina con la entrada de referencia. La función de transferencia equivalente para una realimentación unitaria negativa es: `G_eq(s) = G(s) / (1 + G(s)H(s))`.

## 2.3. Reconstrucción de Estado (Observadores)

A menudo, no todas las variables de estado de un sistema son medibles directamente. Un **observador de estado** es un sistema dinámico auxiliar que estima el vector de estado `x(t)` a partir de las entradas `u(t)` y salidas `y(t)` medibles.

### Observabilidad
Un sistema es **observable** si es posible determinar completamente su estado interno `x(t)` a partir de las mediciones de su salida `y(t)` en un intervalo de tiempo finito. Se verifica mediante la **matriz de observabilidad `[Mo]`**; si su rango es igual al orden del sistema `n`, es observable.

### Observador de Orden Completo (Luenberger)
Un observador de Luenberger de orden completo reconstruye todas las variables de estado. Su ecuación es:

`ẋ̂(t) = (A - KC)x̂(t) + Bu(t) + Ky(t)`

Donde `K` es la **matriz de ganancia del observador**.

### Error de Reconstrucción
El error `e(t) = x(t) - x̂(t)` sigue la dinámica: `ė(t) = (A - KC)e(t)`. La matriz `K` se elige para que los autovalores de `(A - KC)` tengan parte real negativa, asegurando la convergencia del error a cero.

### Ganancia Óptima (K₀)
La **ganancia óptima (K₀)** busca un compromiso entre la velocidad de convergencia y la sensibilidad al ruido de medición. Se calcula para minimizar el Error Cuadrático Medio (MSE) de la estimación, a menudo utilizando la **Ecuación Algebraica de Riccati** (Filtro de Kalman).


