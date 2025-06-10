# Interconexión de Sistemas Lineales

## 1. Introducción a las Interconexiones de Sistemas

En el ámbito de los sistemas de control, las interconexiones son un elemento fundamental. Un sistema o proceso a controlar, denominado genéricamente **planta**, a menudo es el resultado de la combinación de múltiples subsistemas. Estas conexiones se pueden organizar de diversas formas, siendo las más comunes en **serie**, en **paralelo** o con **retroalimentación**.

La planta no solo abarca el proceso principal, sino también sus componentes asociados como sensores, actuadores, interfaces y el propio subsistema de control. Los modelos matemáticos que se utilizan representan estos elementos de forma idealizada e incluso pueden incorporar componentes para simular incertidumbres, como la introducción de ruido o perturbaciones.

La principal ventaja de este enfoque modular es que permite descomponer problemas de gran complejidad en partes más manejables, para luego integrar sus soluciones y analizar el comportamiento del conjunto.

### ¿Qué sucede al conectar varios sistemas?

Cuando se interconectan dos o más sistemas lineales, cada uno con sus propios parámetros y vector de estado, es posible analizar el conjunto como una única entidad. Para lograrlo, se emplea la técnica del **aumento de estado**, que consiste en definir un nuevo vector de estado "aumentado" para el sistema global.

Este estado aumentado es una construcción teórica que se define en función de los parámetros de los subsistemas constituyentes y de la forma en que están conectados. El objetivo es combinar adecuadamente los parámetros de cada componente para obtener un modelo matemático único que represente la interconexión.

> **Ejemplo práctico:** Una interconexión simple es la que se da entre la salida de video de una PC y la entrada de un proyector. Aunque son dos subsistemas distintos (uno digital y otro óptico), funcionan como un único sistema con el propósito de realizar una presentación.

A continuación, se analizarán las configuraciones más comunes, utilizando para mayor simplicidad dos subsistemas (S1 y S2), aunque los principios son extensibles a un número mayor.

## 2. Tipos de Interconexión

### 2.1. Conexión en Serie (Cascada)

En una conexión en serie, la salida de un sistema se convierte en la entrada del siguiente.



Para analizar esta configuración, partimos de las ecuaciones de estado de cada subsistema.

**Ecuaciones de Estado Individuales:**

*   **Sistema 1 (S1):**
    *   Ecuación de estado: `ẋ₁(t) = A₁(t)x₁(t) + B₁(t)u₁(t)`
    *   Ecuación de salida: `y₁(t) = C₁(t)x₁(t) + D₁(t)u₁(t)`

*   **Sistema 2 (S2):**
    *   Ecuación de estado: `ẋ₂(t) = A₂(t)x₂(t) + B₂(t)u₂(t)`
    *   Ecuación de salida: `y₂(t) = C₂(t)x₂(t) + D₂(t)u₂(t)`

> **Nota sobre el modelo:** Estas ecuaciones incluyen la matriz **D**, conocida como matriz de proalimentación o de alimentación directa, que representa una conexión directa entre la entrada `u(t)` y la salida `y(t)` del sistema.

**Derivación del Estado Aumentado:**

El vector de estado aumentado `x(t)` del sistema combinado se define como la concatenación de los vectores de estado individuales:

```
      [x₁(t)]
x(t) = [x₂(t)]
```

La clave de la conexión en serie es que la entrada del segundo sistema es la salida del primero: `u₂(t) = y₁(t)`. Sustituyendo esta relación en la ecuación de estado de S2, obtenemos:

`ẋ₂(t) = A₂x₂(t) + B₂y₁(t)`
`ẋ₂(t) = A₂x₂(t) + B₂[C₁x₁(t) + D₁u₁(t)]`
`ẋ₂(t) = B₂C₁x₁(t) + A₂x₂(t) + B₂D₁u₁(t)`

Ahora, podemos escribir las ecuaciones de estado del sistema combinado en forma matricial para obtener la **ecuación de estado aumentado**:

> ```
> [ẋ₁] = [ A₁    0  ] [x₁] + [  B₁  ] u₁(t)
> [ẋ₂]   [B₂C₁   A₂ ] [x₂]   [B₂D₁ ]
> ```

La salida global del sistema interconectado es la salida del último sistema, `y(t) = y₂(t)`. Sustituyendo las relaciones anteriores:

`y(t) = y₂(t) = C₂x₂(t) + D₂u₂(t)`
`y(t) = C₂x₂(t) + D₂[C₁x₁(t) + D₁u₁(t)]`
`y(t) = D₂C₁x₁(t) + C₂x₂(t) + D₂D₁u₁(t)`

En forma matricial, la **ecuación de salida del sistema interconectado** es:

> ```
> y(t) = [D₂C₁   C₂] [x₁] + [D₂D₁] u₁(t)
>                    [x₂]
> ```

#### Función de Transferencia Equivalente (Caso LTI)

Para sistemas lineales e invariantes en el tiempo (LTI), donde las matrices A, B, C y D son constantes, podemos usar la Transformada de Laplace para encontrar una función de transferencia equivalente `H(s)`.

*   `Y₁(s) = H₁(s)U₁(s)`
*   `Y₂(s) = H₂(s)U₂(s)`

Dado que `U₂(s) = Y₁(s)`, podemos sustituir:

`Y₂(s) = H₂(s) [H₁(s)U₁(s)] = H₁(s)H₂(s)U₁(s)`

La función de transferencia total `H(s)` es la relación entre la salida final y la entrada inicial:

> **H(s) = Y₂(s) / U₁(s) = H₁(s)H₂(s)**

Este resultado es consistente con la teoría de diagramas de bloques: la función de transferencia de sistemas en cascada es el producto de sus funciones de transferencia individuales.

### 2.2. Conexión Retroalimentada (Lazo Cerrado)

En esta configuración, la salida de un sistema se "realimenta" y se combina con la señal de entrada de referencia, formando un lazo cerrado.



Las relaciones clave en esta interconexión son:

*   `y₁(t) = u₂(t)`
*   `u₁(t) = r(t) – y₂(t)` (considerando un sumador con retroalimentación negativa)

Para evitar la complejidad de las ecuaciones implícitas, se asume que el primer sistema (en la trayectoria directa) no tiene enlace directo, es decir, `D₁ = 0`.

**Ecuaciones de Estado Individuales:**

*   **Sistema 1 (S1):**
    *   Ecuación de estado: `ẋ₁(t) = A₁(t)x₁(t) + B₁(t)u₁(t)`
    *   Ecuación de salida: `y₁(t) = C₁(t)x₁(t)`

*   **Sistema 2 (S2):**
    *   Ecuación de estado: `ẋ₂(t) = A₂(t)x₂(t) + B₂(t)u₂(t)`
    *   Ecuación de salida: `y₂(t) = C₂(t)x₂(t) + D₂(t)u₂(t)`

**Derivación del Estado Aumentado:**

Sustituimos las relaciones del lazo en las ecuaciones de estado:

1.  `ẋ₁ = A₁x₁ + B₁u₁ = A₁x₁ + B₁[r(t) – y₂(t)]`
2.  `ẋ₂ = A₂x₂ + B₂u₂ = A₂x₂ + B₂y₁(t)`

Expandimos las ecuaciones sustituyendo `y₁` e `y₂`:

1.  `ẋ₁ = A₁x₁ + B₁r – B₁[C₂x₂ + D₂u₂] = A₁x₁ + B₁r – B₁C₂x₂ – B₁D₂y₁`
    `ẋ₁ = A₁x₁ + B₁r – B₁C₂x₂ – B₁D₂C₁x₁ = (A₁ – B₁D₂C₁)x₁ – B₁C₂x₂ + B₁r`
2.  `ẋ₂ = A₂x₂ + B₂C₁x₁`

Reordenando y expresando en forma matricial, se obtiene la **ecuación de estado para la interconexión retroalimentada**:

> ```
> [ẋ₁] = [A₁-B₁D₂C₁   -B₁C₂ ] [x₁] + [B₁] r(t)
> [ẋ₂]   [   B₂C₁        A₂  ] [x₂]   [ 0]
> ```

La salida del sistema combinado es `y(t) = y₁(t)`, por lo que la **ecuación de salida** es:

> ```
> y(t) = [C₁   0] [x₁]
>               [x₂]
> ```

#### Función de Transferencia Equivalente (Caso LTI)

Aplicando la Transformada de Laplace a las relaciones de señal:

*   `Y₁(s) = H₁(s)U₁(s)`
*   `U₁(s) = R(s) – Y₂(s)`
*   `Y₂(s) = H₂(s)U₂(s)`
*   `U₂(s) = Y₁(s)`

Sustituyendo para encontrar `Y₁(s)` en función de `R(s)`:

`Y₁(s) = H₁(s)[R(s) – Y₂(s)]`
`Y₁(s) = H₁(s)[R(s) – H₂(s)U₂(s)]`
`Y₁(s) = H₁(s)[R(s) – H₂(s)Y₁(s)]`
`Y₁(s) = H₁(s)R(s) – H₁(s)H₂(s)Y₁(s)`

Agrupando los términos con `Y₁(s)`:

`Y₁(s) + H₁(s)H₂(s)Y₁(s) = H₁(s)R(s)`
`[I + H₁(s)H₂(s)]Y₁(s) = H₁(s)R(s)`

Donde `I` es la matriz identidad, utilizada para generalizar el caso de sistemas MIMO (Múltiples Entradas, Múltiples Salidas).

Finalmente, la función de transferencia del lazo cerrado `H(s)` es:

> **H(s) = Y₁(s) / R(s) = [I + H₁(s)H₂(s)]⁻¹ H₁(s)**

### 2.3. Matriz de Diferencia de Retorno

La expresión `J(s) = I + H₁(s)H₂(s)` se denomina **Matriz de Diferencia de Retorno**. Su nombre proviene del siguiente análisis:

1.  Se anula la entrada del sistema (`R(s) = 0`).
2.  Se "abre" el lazo justo antes del bloque `H₂`.
3.  Se inyecta una señal de prueba `U₂(s)` en este punto.
4.  Se analiza la señal que "retorna" al otro lado de la apertura, que es `-Y₁(s)` (el signo negativo proviene del sumador).

La señal de retorno `-Y₁(s)` se calcula como:

`-Y₁(s) = -U₁(s)H₁(s)`

Dado que `R(s)=0`, la entrada al primer bloque es `U₁(s) = -Y₂(s)`. Y la salida del segundo bloque es `Y₂(s) = H₂(s)U₂(s)`. Combinando todo:

`Retorno = -Y₁(s) = -[-Y₂(s)]H₁(s) = Y₂(s)H₁(s) = [H₂(s)U₂(s)]H₁(s) = H₁(s)H₂(s)U₂(s)`

La **diferencia de retorno** es la señal de prueba inyectada menos la señal que retorna:

`Diferencia = U₂(s) - (Retorno) = U₂(s) - [-H₁(s)H₂(s)U₂(s)]`
`Diferencia = U₂(s) + H₁(s)H₂(s)U₂(s)`

Sacando factor común `U₂(s)`:

`Diferencia = [I + H₁(s)H₂(s)] U₂(s)`

El término entre corchetes es precisamente la matriz de diferencia de retorno `J(s)`.