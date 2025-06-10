# **Resolución del Modelo de Estado**

Como ya se ha expresado, resolver la ecuación diferencial de estado significa encontrar el **vector de estado** `x(t)`, el cual representa el comportamiento temporal del sistema modelizado.

> ẋ(t) = A x(t) + B u(t)

Es fundamental tener en cuenta que esta es una ecuación diferencial vectorial (matricial). Por ello, su solución se puede hallar principalmente de dos maneras:
1.  Utilizando un método operacional como la **Transformada de Laplace**.
2.  Resolviendo una ecuación diferencial escalar análoga y luego extrapolando el resultado al caso vectorial.

Adoptaremos el primer método con un enfoque matricial.

## **Solución Vectorial Mediante Transformada de Laplace**

Para resaltar la naturaleza vectorial de la ecuación, usamos la notación simplificada:

> **[ẋ] = [A] [x] + [B] [u]** ①

Donde:
*   **[A]**: Es una matriz cuadrada de orden (n x n), donde `n` es el orden del sistema y el número de variables de estado.
*   **[x]**: Es el vector de estado, una matriz columna de `n` elementos.
*   **[B]**: Es una matriz columna con tantos elementos como entradas tenga el sistema.
*   **[u]**: Es una magnitud escalar para sistemas de una sola entrada (SISO) o un vector para sistemas con múltiples entradas (MIMO).

Aplicando la Transformada de Laplace a ambos miembros de la ecuación ①, obtenemos:

> ℒ[ẋ] = ℒ{[A] [x(t)]} + ℒ{[B] [u(t)]} ②

---

### **Breve Reseña: La Transformada de Laplace**

La Transformada de Laplace es una herramienta matemática que convierte una función en el dominio del tiempo, `f(t)`, a una función en el dominio de la variable compleja, `F(s)`.

> s = σ + jω

La función resultante `F(s)` se comporta como un operador aplicado a `f(t)`:

> ℒ[f(t)] = F(s)

Este método es invaluable para resolver ecuaciones diferenciales, ya que las transforma en ecuaciones algebraicas, y para analizar sistemas de control al independizar las relaciones entrada-salida de la variable tiempo.

**Definición:** La relación entre `f(t)` y `F(s)` se define por la integral:

> **F(s) = ∫₀<sup>∞</sup> f(t)℮<sup>-st</sup> dt**

Esta relación es biunívoca. Si `F(s)` existe, se puede volver a la función original `f(t)` mediante la **Antitransformada de Laplace**:

> **f(t) = ℒ⁻¹[F(s)]**

#### **Transformadas de Funciones Simples**

1.  **Función Constante:** `f(t) = C`
    > **ℒ[C] = C/s**
    > Para un escalón unitario (C=1), **ℒ[u₋₁(t)] = 1/s**

2.  **Función Rampa:** `f(t) = Kt`
    > **ℒ[Kt] = K/s²**
    > Para una rampa unitaria (K=1), **ℒ[t] = 1/s²**

3.  **Función Exponencial:** `f(t) = K℮ᵃᵗ`
    > **ℒ[K℮ᵃᵗ] = K/(s-a)**
    > Para una exponencial decreciente `f(t) = K℮⁻ᵇᵗ`, el resultado es **ℒ[K℮⁻ᵇᵗ] = K/(s+b)**

4.  **Función Coseno:** `f(t) = cos(at)`
    > **ℒ[cos(at)] = s/(s²+a²)**

5.  **Función Seno:** `f(t) = sen(bt)`
    > **ℒ[sen(bt)] = b/(s²+b²)**

6.  **Transformada de una Derivada:**
    > **ℒ[f'(t)] = sF(s) – f(0)**
    > Donde `f(0)` es el valor de la función `f(t)` en `t=0`.

---

### **Continuación de la Solución Vectorial**

Retomando la ecuación ② y aplicando la propiedad de la transformada de una derivada, obtenemos:

> s[X(s)] – [x(0)] = [A][X(s)] + [B][U(s)]

Agrupando los términos con [X(s)]:

> s[X(s)] – [A][X(s)] = [x(0)] + [B][U(s)]

Sacando [X(s)] como factor común, es necesario introducir la matriz identidad [I]:

> **{s[I] – [A]}[X(s)] = [x(0)] + [B][U(s)]** ③

La matriz `{s[I] – [A]}` se conoce como la **Matriz Característica** del sistema. Para despejar [X(s)], premultiplicamos ambos miembros por la inversa de la matriz característica:

> **X(s) = [sI – A]⁻¹[x(0)] + [sI – A]⁻¹[B][U(s)]** ④

La solución en el dominio del tiempo, `x(t)`, es la antitransformada de Laplace de `X(s)`:

> **x(t) = ℒ⁻¹[X(s)]**

### **Ejemplo: Circuito RLC Serie**

Se busca formular el modelo de estado para el siguiente circuito RLC serie.

**1. Ecuaciones del Sistema:**
Las ecuaciones de equilibrio del circuito son:

```
iR + L(di/dt) + v_c = v_i
C(dv_c/dt) = i
```

Despejando las derivadas:

```
di/dt = (-R/L)i - (1/L)v_c + (1/L)v_i
dv_c/dt = (1/C)i
```

**2. Variables de Estado:**
Se eligen las variables de los elementos que almacenan energía:
*   `x₁ = i(t)` (corriente en el inductor L)
*   `x₂ = v_c(t)` (tensión en el capacitor C)

**3. Modelo de Estado Matricial:**
Sustituyendo las variables de estado, el sistema se expresa como:

```
[ẋ₁] = [-R/L   -1/L] [x₁] + [1/L] v_i
[ẋ₂]   [1/C      0 ] [x₂]   [ 0 ]
```

**4. Resolución con Valores Numéricos:**
Se adoptan los siguientes valores:
*   R = 2, L = 1, C = 1/2
*   Entrada: Impulso unitario `v_i(t) = δ(t)`, cuya transformada es `U(s) = 1`.
*   Condiciones iniciales: `x₁(0) = i(0) = 0`, `x₂(0) = v_c(0) = 2V`.

Las matrices del sistema son:

*   `[A] = [-2  -1]`
    `      [ 2   0]`
*   `[B] =`
    `     `

La **matriz característica** es:

> `[sI - A] = [s  0] - [-2  -1] = [s+2   1]`
> `           [0  s]   [ 2   0]   [-2    s]`

El **polinomio característico** (determinante de la matriz característica) es:

> `Δ(s) = (s+2)s - (1)(-2) = s² + 2s + 2`

La **inversa de la matriz característica** `[sI - A]⁻¹` se calcula como la adjunta de la transpuesta dividida por el determinante:

> `[sI - A]⁻¹ = (1/Δ(s)) * [s   -1]`
> `                       [2  s+2]`

Sustituyendo en la ecuación de la solución `X(s)`:

> `[X₁(s)] = [s/Δ  -1/Δ] {0} + [s/Δ  -1/Δ] * 1`
> `[X₂(s)]   [2/Δ (s+2)/Δ] {2}   [2/Δ (s+2)/Δ]`

Resolviendo las operaciones matriciales:

> `[X₁(s)] = [-2/Δ(s) + s/Δ(s)]     = [(s-2)/(s²+2s+2)]`
> `[X₂(s)]   [(2s+4)/Δ(s) + 2/Δ(s)]   [(2s+6)/(s²+2s+2)]`

**5. Obtención de la Solución Temporal (Antitransformada):**
Las soluciones para cada variable de estado en el dominio de Laplace son:
*   `X₁(s) = (s-2)/(s²+2s+2)`
*   `X₂(s) = (2s+6)/(s²+2s+2)`

Para encontrar `x₂(t) = v_c(t)`, se antitransforma `X₂(s)`:

> `X₂(s) = (2(s+3))/((s+1)²+1) = (2(s+1)+4)/((s+1)²+1) = 2 * (s+1)/((s+1)²+1) + 4 * 1/((s+1)²+1)`

Aplicando las tablas de antitransformadas:

> `x₂(t) = ℒ⁻¹[X₂(s)] = 2℮⁻ᵗcos(t) + 4℮⁻ᵗsen(t)`
> **`v_c(t) = 2℮⁻ᵗ(cos(t) + 2sen(t))`**

Para `x₁(t) = i(t)`, en lugar de antitransformar `X₁(s)`, podemos usar la relación `i(t) = C * dv_c/dt`:

> `i(t) = (1/2) * d/dt [2℮⁻ᵗ(cos(t) + 2sen(t))]`
> `i(t) = d/dt [℮⁻ᵗ(cos(t) + 2sen(t))]`
> `i(t) = -℮⁻ᵗ(cos(t) + 2sen(t)) + ℮⁻ᵗ(-sen(t) + 2cos(t))`
> **`i(t) = ℮⁻ᵗ(cos(t) - 3sen(t))`**

## **Solución Escalar de la Ecuación de Estado Vectorial**

Un método alternativo consiste en resolver una Ecuación Diferencial (ED) escalar análoga y luego generalizar el resultado al caso vectorial.

Consideremos la ED escalar de primer orden:

> **ẋ = ax + bu** con condición inicial `x(t₀) = x₀`

La solución se compone de una solución homogénea (`x_h`) y una particular (`x_p`).

### **Solución Homogénea (xh)**
La ecuación homogénea es `ẋ_h = ax_h`. Proponiendo una solución en serie de potencias:

> `x_h = a₀ + a₁t + a₂t² + ...`

Se demuestra que los coeficientes siguen un patrón que reproduce el desarrollo en serie de la función exponencial. La solución resulta ser:

> **x_h = ℮ᵃᵗ x₀**

### **Solución General Escalar**
La solución completa, incluyendo la parte particular (calculada por convolución), es:

> **x(t) = ℮ᵃᵗ x₀ + ∫₀ᵗ ℮ᵃ⁽ᵗ⁻𝜏⁾ bu(𝜏) d𝜏**

### **Generalización al Caso Vectorial**

Extrapolando esta lógica al sistema vectorial `ẋ = Ax`, la solución homogénea se escribe de forma análoga. El desarrollo en serie de potencias ahora involucra matrices:

> **x_h(t) = (I + At + (A²t²)/2! + (A³t³)/3! + ...) x₀**

La serie entre paréntesis es la definición de la **exponencial de una matriz**:

> **℮<sup>[A]t</sup> = I + At + (A²t²)/2! + ...**

Esta matriz se denomina **Matriz de Transición** o Matriz Fundamental, y se designa como `Φ(t)`.

Por lo tanto, la solución homogénea vectorial es:

> **x_h(t) = Φ(t) x₀**

La matriz de transición `Φ(t)` actúa como un operador que, aplicado al estado inicial `x₀`, determina el estado del sistema homogéneo en cualquier instante `t`.

## **Propiedades de la Matriz de Transición Φ(t)**

1.  **Derivada:**
    > `dΦ(t)/dt = A * ℮ᴬᵗ = A * Φ(t)`

2.  **Suma en el Argumento:**
    > `Φ(t₁ + t₂) = Φ(t₁) * Φ(t₂)`

3.  **Inversa:**
    > `Φ(t) * Φ⁻¹(t) = Φ(t) * Φ(-t) = I` (Matriz Identidad)

4.  **Valor en t=0:**
    > `Φ(0) = I`

5.  **Argumento Negativo:**
    > `Φ(-t) = Φ⁻¹(t)`

6.  **Potenciación:**
    > `[Φ(t)]ⁿ = Φ(nt)`

7.  **Producto de Intervalos:**
    > `Φ(t₃ - t₂) * Φ(t₂ - t₁) = Φ(t₃ - t₁)`