Imaginemos un sistema de control de la temperatura de una habitación. Nuestro objetivo es mantener la habitación a una temperatura deseada.

En este ejemplo, los componentes del sistema se pueden representar de la siguiente manera:

*   **Entrada u(t):** Es la potencia que le suministramos al sistema de calefacción. Por ejemplo, un valor que va de 0 a 100%.
*   **Salida y(t):** Es la temperatura actual de la habitación, lo que queremos medir y controlar.
*   **Variable de Estado x:** Es una variable interna que describe la "energía térmica" acumulada en la habitación. No es la temperatura directamente, pero está íntimamente relacionada. En un sistema simple como este, podríamos tener una sola variable de estado.

Ahora, asociemos esto con las matrices del diagrama:

*   **Matriz A (Matriz de estado):** Representa cómo la energía térmica actual (nuestro estado `x`) se disipa naturalmente en el tiempo. Por ejemplo, el calor se pierde a través de las paredes. `A` podría ser un número negativo que indica esta pérdida.
*   **Matriz B (Matriz de entrada):** Relaciona la potencia del calefactor (nuestra entrada `u(t)`) con el aumento de la energía térmica en la habitación (el cambio en el estado `ẋ`).
*   **Matriz C (Matriz de salida):** Convierte la variable de estado "energía térmica" (`x`) en la temperatura que medimos en el termómetro (la salida `y(t)`). Es un factor de conversión.
*   **Matriz D (Matriz de proalimentación):** Este es un camino directo desde la entrada a la salida. En nuestro ejemplo, podría representar el efecto inmediato que tiene encender el calefactor sobre el sensor de temperatura, quizás por una corriente de aire caliente que le llega directamente.

### **Formulando las Ecuaciones**

Siguiendo el diagrama, podemos construir las ecuaciones del sistema.

1.  **Ecuación de Estado:** Describe cómo cambia la energía térmica en la habitación.
    *   El calefactor añade energía: `B * u(t)`
    *   La habitación pierde energía en función de la que ya tiene: `A * x`
    *   El cambio total de energía (la derivada del estado `ẋ`) es la suma de ambos:
        **`ẋ = Ax + Bu`**

2.  **Ecuación de Salida:** Describe la temperatura que medimos.
    *   La temperatura depende de la energía térmica acumulada: `C * x`
    *   Hay un efecto directo del calefactor sobre el sensor: `D * u(t)`
    *   La temperatura medida final (`y(t)`) es la suma de estos dos efectos:
        **`y(t) = Cx + Du`**

### **Ejemplo Numérico Sencillo**

Para que sea aún más claro, asignemos valores simples (suponiendo que son sistemas de una sola variable, es decir, escalares en lugar de matrices):

*   A = -0.1 (La habitación pierde el 10% de su energía térmica por unidad de tiempo).
*   B = 0.8 (Por cada 1% de potencia, la energía aumenta en 0.8 unidades).
*   C = 0.5 (La temperatura es la mitad del valor de la energía térmica).
*   D = 0.05 (Un pequeño efecto directo de la potencia del calefactor en la medición de temperatura).

**Ecuación de Salida Concreta:**

Con estos valores, la ecuación de salida del sistema sería:

**`y(t) = 0.5 * x + 0.05 * u(t)`**

**¿Qué nos dice esta ecuación?**

Nos dice que para saber la temperatura de la habitación (`y(t)`) en cualquier momento, necesitamos dos cosas:

1.  Conocer el valor de la variable de estado `x` (la energía térmica acumulada) en ese instante y multiplicarla por 0.5.
2.  Conocer el valor de la entrada `u(t)` (la potencia del calefactor) en ese mismo instante y multiplicarla por 0.05.

Así, si en un momento dado la energía térmica acumulada (`x`) es de 40 unidades y estamos usando el calefactor al 50% de su potencia (`u(t)` = 50), la temperatura de salida sería:

`y(t) = (0.5 * 40) + (0.05 * 50) = 20 + 2.5 = 22.5 grados`

En resumen, la **ecuación de salida** es una fórmula final que combina el estado interno del sistema (`x`) y la entrada actual (`u(t)`) para darnos el resultado medible (`y(t)`) que nos interesa. El término `Cx` representa la salida que depende del estado interno del sistema, mientras que el término `Du` representa la parte de la salida que es un reflejo directo e instantáneo de la entrada, característico de los sistemas con proalimentación (o *feedforward*).