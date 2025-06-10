# Modelos en el Espacio de Estados

## Modelos Matemáticos y sus Limitaciones

En ingeniería, el uso de ecuaciones diferenciales ha sido tradicionalmente el método principal para crear modelos matemáticos de sistemas. La resolución de estas ecuaciones permite describir el comportamiento temporal de dichos sistemas. Sin embargo, este enfoque presenta varias limitaciones fundamentales:

*   **No aplicabilidad a sistemas no lineales:** No es posible obtener una solución única para sistemas que no se comportan de manera lineal.
*   **Dificultad en el procesamiento digital:** Las soluciones matemáticas obtenidas a menudo son complejas de procesar utilizando herramientas digitales.
*   **Complejidad en sistemas de alto orden:** El análisis matemático se vuelve excesivamente laborioso cuando se trata de sistemas complejos.
*   **Información limitada:** No proporcionan información profunda sobre el sistema a menos que se obtengan soluciones completas y detalladas, lo cual requiere un conocimiento previo exhaustivo del sistema.

En resumen, el método de modelado mediante ecuaciones diferenciales es principalmente eficaz para sistemas lineales e invariantes en el tiempo con una sola entrada y una sola salida (SISO). Se complica notablemente con sistemas que varían en el tiempo, no lineales o con múltiples entradas y salidas (MIMO).

## Análisis por Variables de Estado

El análisis en el **espacio de estados** es una metodología que supera estas limitaciones. Permite modelar y analizar sistemas lineales o no lineales, invariantes o variantes en el tiempo, y tanto MIMO como SISO. Este enfoque se desarrolla en el dominio del tiempo, y sus resultados, expresados en ecuaciones diferenciales de estado, son fácilmente procesables por software.

La técnica consiste en desarrollar un método analítico para determinar el estado de un sistema en cualquier instante.

### Conceptos Fundamentales

Para comprender el análisis por variables de estado, es necesario definir algunos conceptos clave:

*   **Estado:** Es una descripción completa de la condición dinámica de un sistema en un instante específico ($t_0$). Conocer el estado en $t_0$ y las entradas para todo $t \geq t_0$ es suficiente para determinar el comportamiento futuro del sistema. Representa la energía acumulada en los elementos activos (almacenadores de energía) del sistema.
*   **Espacio de estados:** Es un espacio n-dimensional donde cada eje coordenado corresponde a una variable de estado. Un punto en este espacio define el estado del sistema en un instante determinado.
*   **Variables de estado:** Son el conjunto más pequeño de variables que definen completamente el estado de un sistema en cualquier momento. Cada variable aporta parte de la información necesaria para describir el comportamiento del sistema.
*   **Trayectoria de estado:** Es la secuencia de puntos en el espacio de estados que representa la evolución del estado del sistema a lo largo del tiempo, trazando su historial dinámico.
*   **Vector de estado:** Es un vector que une el origen del espacio de estados con el punto que representa el estado del sistema en un instante. Resume matricialmente las coordenadas de dicho estado. Por ejemplo, para un estado $E_1$ en el instante $t_1$:
    $V_1 = \begin{Bmatrix} x_1 \\ y_1 \end{Bmatrix}$, donde $x_1 = x(t_1)$ e $y_1 = y(t_1)$.
*   **Orden del sistema:** Corresponde al número de elementos almacenadores de energía en el sistema, que a su vez es igual al número (n) de variables de estado necesarias para describirlo. Este número también coincide con el orden de la ecuación diferencial que representa al sistema.

### Descripción por Variables de Estado

La elección de las variables de estado se asocia comúnmente con los elementos que almacenan energía en el sistema.

*   **En sistemas eléctricos:** Los inductores (L) y capacitores (C) son los elementos almacenadores de energía. La energía se almacena en forma de campo magnético y carga eléctrica, respectivamente. Las variables de estado naturales son la corriente en el inductor y el voltaje en el capacitor. La resistencia (R) es un elemento disipativo.
*   **En sistemas mecánicos:** La masa (que almacena energía potencial) y el resorte (que almacena energía elástica) son los elementos almacenadores. El amortiguador es un elemento de fricción que disipa energía.

Para un sistema complejo, puede existir más de un conjunto de variables de estado que lo describan adecuadamente. La selección debe ser tal que, conociendo el valor de estas variables, se pueda calcular la energía acumulada en cada elemento del sistema en cualquier instante.

Un **punto de equilibrio** (también llamado punto crítico o singular) es un estado en el que las derivadas de todas las variables de estado son cero, lo que significa que el sistema se encuentra en una condición estacionaria. Estos puntos pueden ser estables o inestables.

## Ecuaciones de Estado

La representación de un sistema en el espacio de estados se formaliza mediante un conjunto de ecuaciones diferenciales de primer orden, conocidas como **ecuaciones de estado**.

### Forma General

La forma estándar de las ecuaciones de estado es la siguiente:

**Ecuación de Estado:**
$$ \dot{\mathbf{x}}(t) = \mathbf{A} \mathbf{x}(t) + \mathbf{B} \mathbf{u}(t) $$

**Ecuación de Salida:**
$$ \mathbf{y}(t) = \mathbf{C} \mathbf{x}(t) + \mathbf{D} \mathbf{u}(t) $$

Donde:
*   `x(t)` es el **vector de estado**, cuyas componentes son las variables de estado.
*   `ẋ(t)` es el vector de las derivadas de las variables de estado.
*   `u(t)` es el **vector de entrada** o de control.
*   `y(t)` es el **vector de salida**.
*   `A` es la **matriz de estado** o matriz del sistema. Sus elementos son constantes y parámetros propios del sistema.
*   `B` es la **matriz de entrada** o matriz de control.
*   `C` es la **matriz de salida**.
*   `D` es la **matriz de transmisión directa** o de proalimentación (a menudo es cero en muchos sistemas).

### Ventajas de esta representación

*   **Análisis simplificado:** Se pueden extraer conclusiones sobre el sistema examinando las propiedades de las matrices.
*   **Aplicabilidad universal:** El método es válido para sistemas de orden superior, no lineales y con múltiples entradas/salidas.
*   **Implementación computacional:** Facilita el desarrollo de algoritmos para la resolución numérica y la simulación por software.

---

### Ejemplo 1: Circuito Eléctrico RLC en Serie

Consideremos un circuito RLC en serie, un sistema de segundo orden con dos elementos almacenadores de energía (L y C).



**Variables de estado:**
Se eligen asociadas a los elementos almacenadores de energía:
1.  Corriente en el inductor:  $x_1(t) = i(t)$
2.  Tensión en el capacitor:  $x_2(t) = v_o(t)$

**Ecuaciones del sistema (Leyes de Kirchhoff):**
Aplicando la ley de voltajes de Kirchhoff a la malla:
$$ v_i(t) = L \frac{di(t)}{dt} + R i(t) + v_o(t) $$
La corriente a través del capacitor es:
$$ i(t) = C \frac{dv_o(t)}{dt} $$

**Formulación en espacio de estados:**
Reordenando las ecuaciones en términos de las derivadas de las variables de estado:
$$ \frac{dx_1}{dt} = \dot{x}_1 = -\frac{R}{L}x_1 - \frac{1}{L}x_2 + \frac{1}{L}v_i $$
$$ \frac{dx_2}{dt} = \dot{x}_2 = \frac{1}{C}x_1 $$

**Representación matricial:**
$$
\begin{Bmatrix} \dot{x}_1 \\ \dot{x}_2 \end{Bmatrix} = 
\begin{bmatrix} -\frac{R}{L} & -\frac{1}{L} \\ \frac{1}{C} & 0 \end{bmatrix}
\begin{Bmatrix} x_1 \\ x_2 \end{Bmatrix} +
\begin{Bmatrix} \frac{1}{L} \\ 0 \end{Bmatrix} v_i(t)
$$

Si la salida del sistema es la tensión en el capacitor, la ecuación de salida es:
$$ y(t) = v_o(t) = x_2(t) $$
En forma matricial:
$$ y(t) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{Bmatrix} x_1 \\ x_2 \end{Bmatrix} $$

---

### Ejemplo 2: Sistema Mecánico Masa-Resorte-Amortiguador

Se considera un cuerpo de masa `m` suspendido de un resorte (constante `k`) y conectado a un amortiguador viscoso (coeficiente `B`). Se aplica una fuerza `u(t)` y se mide el desplazamiento `y(t)`.



**Ecuación de equilibrio (Segunda Ley de Newton):**
$$ \sum F = m a \implies u(t) - k y(t) - B \frac{dy(t)}{dt} = m \frac{d^2y(t)}{dt^2} $$

Reordenando la ecuación:
$$ \frac{d^2y(t)}{dt^2} = -\frac{k}{m} y(t) - \frac{B}{m} \frac{dy(t)}{dt} + \frac{1}{m} u(t) $$

**Variables de estado:**
1.  Posición de la masa: $x_1(t) = y(t)$
2.  Velocidad de la masa: $x_2(t) = \frac{dy(t)}{dt} = \dot{y}(t)$

**Formulación en espacio de estados:**
A partir de las definiciones:
$$ \dot{x}_1 = x_2 $$
$$ \dot{x}_2 = \frac{d^2y(t)}{dt^2} = -\frac{k}{m} x_1 - \frac{B}{m} x_2 + \frac{1}{m} u(t) $$

**Representación matricial:**
$$
\begin{Bmatrix} \dot{x}_1 \\ \dot{x}_2 \end{Bmatrix} =
\begin{bmatrix} 0 & 1 \\ -\frac{k}{m} & -\frac{B}{m} \end{bmatrix}
\begin{Bmatrix} x_1 \\ x_2 \end{Bmatrix} +
\begin{Bmatrix} 0 \\ \frac{1}{m} \end{Bmatrix} u(t)
$$

Si la salida es el desplazamiento de la masa, la ecuación de salida es:
$$ y(t) = x_1(t) $$
En forma matricial:
$$ y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{Bmatrix} x_1 \\ x_2 \end{Bmatrix} $$