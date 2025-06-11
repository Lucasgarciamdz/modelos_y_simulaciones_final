# Resumen de la Unidad 2: Resolución y Reconstrucción de Estado

## 1. Resolución del Modelo de Estado

### Teoría
La resolución del modelo de estado implica encontrar el vector de estado `x(t)` a partir de la ecuación diferencial de estado `ẋ(t) = A x(t) + B u(t)`.

### Métodos
- **Método de la Transformada de Laplace:** Convierte las ecuaciones diferenciales en algebraicas, facilitando la solución en el dominio de la frecuencia.
- **Método de la Matriz Exponencial (Matriz de Transición de Estado `Φ(t)`):** Permite resolver la ecuación homogénea y la solución completa del sistema.

### Ecuaciones Clave
- **Solución en el Dominio de Laplace:**
  `X(s) = [sI – A]⁻¹[x(0)] + [sI – A]⁻¹[B][U(s)]`
  Donde `[sI – A]` es la **Matriz Característica**.

- **Matriz de Transición de Estado (`Φ(t)`):**
  `Φ(t) = e^(At) = I + At + (A²t²)/2! + (A³t³)/3! + ...`

- **Solución Completa del Modelo de Estado:**
  `x(t) = e^(At) * x(0) + ∫[0,t] e^(A(t-τ)) * B * u(τ) dτ`

### FAQ
- **¿Qué es la matriz de transición de estado?**
  Es una matriz que describe cómo el estado de un sistema lineal homogéneo evoluciona en el tiempo. Permite calcular el estado futuro del sistema a partir de su estado inicial sin necesidad de resolver la ecuación diferencial.
- **¿Cuándo se utiliza el método de la transformada de Laplace y cuándo el de la matriz exponencial?**
  La transformada de Laplace es útil para sistemas con entradas complejas o para análisis en el dominio de la frecuencia. La matriz exponencial es más directa para la solución en el dominio del tiempo y para entender la evolución natural del sistema.

## 2. Interconexión de Sistemas Lineales

### Teoría
La interconexión de sistemas lineales permite modelar sistemas complejos a partir de subsistemas más simples.

### Tipos de Conexión
- **Conexión en Serie:** La salida de un sistema es la entrada del siguiente. La función de transferencia equivalente es el producto de las funciones de transferencia individuales.
- **Conexión Realimentada:** La salida de un sistema se retroalimenta y se combina con la entrada de referencia. Común en sistemas de control.

### Ecuaciones Clave
- **Función de Transferencia Equivalente (Serie):**
  `G_eq(s) = G₁(s) * G₂(s)`

- **Función de Transferencia Equivalente (Realimentación Unitaria Negativa):**
  `G_eq(s) = G(s) / (1 + G(s)H(s))`

### FAQ
- **¿Por qué es importante la interconexión de sistemas?**
  Permite analizar y diseñar sistemas complejos de manera modular, facilitando la comprensión de su comportamiento global y el diseño de controladores.

## 3. Reconstrucción de Estado (Observadores)

### Teoría
Un **observador de estado** es un sistema auxiliar que estima el estado interno de un sistema cuando no todas sus variables son medibles directamente, utilizando las entradas y salidas disponibles.

### Conceptos Clave
- **Observabilidad:** Propiedad de un sistema que indica si es posible determinar completamente su estado interno a partir de las mediciones de su salida en un intervalo de tiempo finito.
  - Se verifica con la **matriz de observabilidad `[Mo]`**; si su rango es igual al orden del sistema `n`, el sistema es observable.
- **Observador de Orden Completo (Luenberger):** Reconstruye todas las variables de estado. Su diseño implica elegir una ganancia `K` para asegurar la convergencia del error de estimación.
- **Error de Reconstrucción:** La diferencia entre el estado real y el estado estimado (`e(t) = x(t) - x̂(t)`). La dinámica de este error debe ser estable para que el observador funcione correctamente.
- **Ganancia Óptima (K₀):** Se elige para minimizar el error de estimación, a menudo considerando el ruido presente en las mediciones. El **Filtro de Kalman** es un observador óptimo para sistemas lineales con ruido gaussiano.

### Ecuaciones Clave
- **Ecuación del Observador de Luenberger:**
  `ẋ̂(t) = (A - KC)x̂(t) + Bu(t) + Ky(t)`
  Donde `K` es la **matriz de ganancia del observador**.

- **Dinámica del Error de Reconstrucción:**
  `ė(t) = (A - KC)e(t)`

### FAQ
- **¿Cuándo se necesita un observador de estado?**
  Cuando no todas las variables de estado de un sistema pueden ser medidas directamente debido a limitaciones físicas, costos o inaccesibilidad.
- **¿Qué es el Filtro de Kalman?**
  Es un algoritmo recursivo que estima el estado de un sistema dinámico a partir de una serie de mediciones ruidosas. Es un observador óptimo en el sentido de que minimiza la varianza del error de estimación.

## Imágenes Representativas

**[Imagen 1: Diagrama de bloques de un sistema en serie]**
*(Descripción: Un diagrama de bloques que muestra dos sistemas G1(s) y G2(s) conectados en serie, con la salida de G1(s) como entrada de G2(s).)*

**[Imagen 2: Diagrama de bloques de un sistema con realimentación negativa]**
*(Descripción: Un diagrama de bloques que muestra un sistema G(s) con una realimentación negativa a través de un bloque H(s).)*

**[Imagen 3: Diagrama de bloques de un observador de Luenberger]**
*(Descripción: Un diagrama de bloques que ilustra la estructura de un observador de Luenberger, mostrando las entradas, salidas, el sistema y el observador estimando el estado.)*

**[Imagen 4: Gráfico de la convergencia del error de estimación de un observador]**
*(Descripción: Un gráfico que muestra cómo el error entre el estado real y el estado estimado disminuye con el tiempo, convergiendo a cero.)*


