# Modelos y Simulación

A continuación, se presenta un compendio estructurado sobre los conceptos fundamentales de modelos y simulación, representación de sistemas dinámicos, análisis de estabilidad, y teorías avanzadas como el caos y los sistemas no lineales.

---

## 1. Introducción a Modelos y Simulación

### **1.1. ¿Qué es un Modelo?**
Un modelo es una representación simplificada y abstracta de un proceso o sistema del mundo real. Su propósito principal es permitir el estudio y análisis del comportamiento del sistema bajo diferentes condiciones de operación sin necesidad de experimentar directamente sobre el sistema real.

*   **Sistema:** Un conjunto de elementos interconectados que funcionan como un todo.
*   **Proceso:** Una secuencia de operaciones que conducen a un resultado específico.

### **1.2. ¿Por qué Modelar?**
La creación de modelos es fundamental para:
*   **Costos:** Analizar y optimizar procesos sin incurrir en los altos costos de la experimentación real.
*   **Seguridad:** Estudiar escenarios peligrosos o de alto riesgo en un entorno virtual seguro.
*   **Practicidad:** Investigar sistemas que aún no existen (prototipos) o que son inaccesibles.
*   **Gemelo Digital:** Generar una réplica digital de un sistema o proceso para su monitoreo, análisis y optimización en tiempo real.

### **1.3. Simulación**
La simulación es el proceso de diseñar un modelo y realizar experimentos con él, con el objetivo de entender el comportamiento del sistema o evaluar estrategias para su funcionamiento. Permite realizar análisis de sensibilidad, donde se varían distintos parámetros para determinar cuán sensible es un sistema a los cambios.

### **1.4. Etapas de un Proceso de Simulación**
Un proyecto de simulación típicamente sigue los siguientes pasos:
1.  **Definición del Sistema:** Fase preliminar donde se identifican el problema, las variables clave y sus interacciones.
2.  **Formulación del Modelo:** Construcción del modelo conceptual y matemático que representa el sistema.
3.  **Colección de Datos:** Recopilación de los datos necesarios para alimentar y calibrar el modelo.
4.  **Implementación en Software:** Traducción del modelo matemático a un programa de computadora.
5.  **Validación:** Proceso que verifica si el modelo representa el sistema real con la precisión requerida. Si el modelo no es válido, se regresa a la etapa de formulación.
6.  **Experimentación:** Ejecución de la simulación bajo diferentes escenarios para generar datos.
7.  **Interpretación:** Análisis de los resultados obtenidos para extraer conclusiones y tomar decisiones.
8.  **Documentación:** Registro detallado del modelo, los experimentos y los resultados para su uso futuro y replicabilidad.

---

## 2. Representación de Sistemas en el Espacio de Estados

El enfoque del espacio de estados es una metodología para construir un modelo matemático a partir de las leyes físicas que rigen un sistema. Permite describir la dinámica interna de un sistema mediante un conjunto de variables de estado.

### **2.1. Conceptos Clave**
*   **Estado:** El conjunto mínimo de variables (variables de estado) que, junto con el conocimiento de las futuras entradas, determina completamente el comportamiento futuro del sistema.
*   **Vector de Estado (x):** Un vector cuyas componentes son las variables de estado.
*   **Espacio de Estados:** El espacio n-dimensional donde reside el vector de estado. La trayectoria del vector de estado en este espacio describe la evolución dinámica del sistema.

La cantidad de variables de estado generalmente depende del número de elementos almacenadores de energía en el sistema (ej. capacitores, inductores, masas, resortes).

### **2.2. Ecuaciones de Estado**
Un sistema lineal e invariante en el tiempo (LTI) se describe mediante dos ecuaciones matriciales:

1.  **Ecuación de Estado:**
    $$ \dot{x}(t) = A \cdot x(t) + B \cdot u(t) $$
2.  **Ecuación de Salida:**
    $$ y(t) = C \cdot x(t) + D \cdot u(t) $$

Donde:
*   `x(t)`: Vector de estado.
*   `\dot{x}(t)`: Vector de derivadas de las variables de estado.
*   `u(t)`: Vector de entrada o control.
*   `y(t)`: Vector de salida.
*   `A`: Matriz de estado (o del sistema).
*   `B`: Matriz de entrada (o de control).
*   `C`: Matriz de salida.
*   `D`: Matriz de transmisión directa (o de realimentación).

### **2.3. Ejemplo: Sistema Masa-Resorte-Amortiguador**
Consideremos un cuerpo de masa `m` suspendido de un resorte (constante `k`) y un amortiguador (coeficiente `B`), sobre el cual actúa una fuerza externa `u(t)`.

La ecuación de equilibrio, por la Segunda Ley de Newton, es:
$$ m \cdot \frac{d^2y}{dt^2} + B \cdot \frac{dy}{dt} + k \cdot y = u(t) $$

Para representarlo en el espacio de estados, elegimos las variables:
*   $x_1 = y$ (posición)
*   $x_2 = \dot{y} = \frac{dy}{dt}$ (velocidad)

Derivando las variables de estado y reordenando, obtenemos la forma matricial:
$$
\begin{bmatrix} \dot{x_1} \\ \dot{x_2} \end{bmatrix}
=
\begin{bmatrix} 0 & 1 \\ -k/m & -B/m \end{bmatrix}
\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}
+
\begin{bmatrix} 0 \\ 1/m \end{bmatrix}
u(t)
$$
Si la salida es la posición, $y = x_1$, la ecuación de salida es:
$$
y(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}
$$

---

## 3. Estabilidad y Puntos de Equilibrio

La estabilidad es una propiedad deseable en la mayoría de los sistemas. Un sistema es estable si, ante una perturbación, sus variables tienden a regresar a un estado de equilibrio.

*   **Punto de Equilibrio:** Es un estado en el que las derivadas de las variables de estado son nulas ($\dot{x} = 0$). En sistemas lineales, si la matriz A es no singular, el único punto de equilibrio es el origen.

### **3.1. Estabilidad de Sistemas LTI**
La estabilidad de un sistema LTI depende exclusivamente de los autovalores (también llamados polos) de la matriz de estado `A`. Estos autovalores se obtienen de la **Ecuación Característica**:
$$ \det(\lambda I - A) = 0 $$
Un sistema LTI es asintóticamente estable si y solo si la parte real de todos sus autovalores es negativa.

*   **Re(λ) < 0:** La respuesta del sistema decae exponencialmente (estable).
*   **Re(λ) > 0:** La respuesta del sistema crece exponencialmente (inestable).
*   **Re(λ) = 0:** La respuesta puede ser oscilatoria sostenida (marginalmente estable) o crecer linealmente si hay raíces repetidas en el eje imaginario (inestable).

---

## 4. Interconexión y Análisis de Sistemas

### **4.1. Interconexión de Sistemas**
Los sistemas complejos se construyen a menudo interconectando subsistemas más simples. Las configuraciones más comunes son:
*   **Conexión en Serie (Cascada):** La salida de un sistema es la entrada del siguiente. La función de transferencia equivalente es el producto de las funciones de transferencia individuales: $H_{eq}(s) = H_2(s)H_1(s)$.
*   **Conexión con Realimentación (Lazo Cerrado):** Parte de la señal de salida se resta de una señal de referencia para generar la entrada del sistema. Esto es fundamental en sistemas de control para reducir errores y mejorar la estabilidad. La función de transferencia de un lazo cerrado con realimentación unitaria negativa es:
    $$ H_{eq}(s) = \frac{H_1(s)}{1 + H_1(s)H_2(s)} $$

### **4.2. Observadores de Estado**
En muchos casos, no es posible medir directamente todas las variables de estado. Un **observador** (u estimador de estado) es un sistema dinámico que proporciona una aproximación del vector de estado, $\hat{x}$, a partir de las mediciones de las entradas `u(t)` y las salidas `y(t)` del sistema original.

El error de reconstrucción, $e = x - \hat{x}$, sigue la dinámica:
$$ \dot{e}(t) = (A - KC)e(t) $$
Para que el error tienda a cero, el observador debe ser estable. Esto se logra diseñando la matriz de ganancia del observador `K` de tal forma que los autovalores de la matriz `(A - KC)` tengan todos parte real negativa.

---

## 5. Análisis en el Plano de Fase

El plano de fase es una herramienta gráfica para analizar el comportamiento de sistemas de segundo orden, tanto lineales como no lineales. Representa las trayectorias de las variables de estado (por ejemplo, posición vs. velocidad) a lo largo del tiempo.

### **5.1. Puntos Críticos en Sistemas Lineales**
El comportamiento de las trayectorias cerca del punto crítico (generalmente el origen) está determinado por los autovalores de la matriz `A`:
*   **Raíces Reales, Mismo Signo:**
    *   **Nodo Estable:** (λ₁, λ₂ < 0) Todas las trayectorias convergen al origen.
    *   **Nodo Inestable:** (λ₁, λ₂ > 0) Todas las trayectorias divergen del origen.
*   **Raíces Reales, Signo Opuesto:**
    *   **Punto de Silla:** (λ₁ < 0 < λ₂) Inestable. Las trayectorias se acercan por una dirección y se alejan por otra.
*   **Raíces Complejas Conjugadas:**
    *   **Foco Estable:** (Re(λ) < 0) Las trayectorias son espirales que convergen al origen.
    *   **Foco Inestable:** (Re(λ) > 0) Las trayectorias son espirales que divergen del origen.
*   **Raíces Imaginarias Puras:**
    *   **Centro:** (Re(λ) = 0) Las trayectorias son elipses cerradas alrededor del origen (oscilaciones sostenidas).

### **5.2. Sistemas Cuasilineales**
Un sistema no lineal puede aproximarse por un sistema lineal cerca de un punto crítico, siempre que los términos no lineales sean suficientemente pequeños. Este proceso se conoce como **linealización**. El comportamiento del sistema no lineal cerca del punto crítico suele ser cualitativamente el mismo que el de su aproximación lineal.

---

## 6. Modelos de Dinámica de Poblaciones

### **6.1. Modelo Depredador-Presa (Lotka-Volterra)**
Este modelo describe la interacción entre una población de presas `x(t)` y una de depredadores `y(t)`. Las ecuaciones son:
$$ \frac{dx}{dt} = ax - bxy \quad \text{(Presas)} $$
$$ \frac{dy}{dt} = cxy - ky \quad \text{(Depredadores)} $$
*   `a`: Tasa de crecimiento de las presas.
*   `b`: Tasa de depredación.
*   `c`: Tasa de crecimiento de los depredadores por alimentarse.
*   `k`: Tasa de mortalidad de los depredadores.

Este sistema presenta dos puntos de equilibrio: la extinción total `(0,0)` y un punto de coexistencia `(k/c, a/b)`. Alrededor del punto de coexistencia, las poblaciones oscilan de forma periódica: un aumento de presas lleva a un aumento de depredadores, lo que a su vez causa una disminución de presas, seguido de una disminución de depredadores, reiniciando el ciclo.

### **6.2. Modelo de Especies en Competencia**
Describe la interacción entre dos especies que compiten por los mismos recursos limitados. La competencia interespecífica tiene un efecto negativo en ambas poblaciones. Las ecuaciones del modelo son:
$$ \frac{dx}{dt} = r_1 x \left(1 - \frac{x + \alpha_{12}y}{K_1}\right) $$
$$ \frac{dy}{dt} = r_2 y \left(1 - \frac{y + \alpha_{21}x}{K_2}\right) $$
El resultado de la competencia (coexistencia o exclusión de una especie) depende de la fuerza de la competencia intraespecífica frente a la interespecífica.

### **6.3. Modelo Epidemiológico SIR**
Este modelo describe la propagación de una enfermedad en una población, dividiéndola en tres compartimentos:
*   **S(t): Susceptibles:** Individuos sanos que pueden infectarse.
*   **I(t): Infectados:** Individuos que tienen la enfermedad y pueden transmitirla.
*   **R(t): Retirados/Recuperados:** Individuos que se han recuperado y adquirido inmunidad, o han fallecido.

Las ecuaciones diferenciales son:
$$ \frac{dS}{dt} = - \beta SI $$
$$ \frac{dI}{dt} = \beta SI - \gamma I $$
$$ \frac{dR}{dt} = \gamma I $$
La suma `S + I + R = N` (población total) se mantiene constante. El modelo permite predecir la evolución de una epidemia, como el pico de infecciones.

---

## 7. Teoría del Caos y Fractales

### **7.1. Sistemas Caóticos**
La teoría del caos estudia sistemas dinámicos deterministas cuyo comportamiento a largo plazo es impredecible debido a su alta sensibilidad a las condiciones iniciales. Pequeñísimas variaciones en el estado inicial pueden generar resultados drásticamente diferentes.

*   **Efecto Mariposa:** Metáfora que ilustra esta sensibilidad: "el aleteo de una mariposa puede provocar un huracán al otro lado del mundo".
*   **Atractor de Lorenz:** Un ejemplo clásico de sistema caótico, derivado de un modelo simplificado de la convección atmosférica. Sus trayectorias forman una figura similar a una mariposa, un atractor extraño en el que el sistema evoluciona sin repetirse nunca.
    $$ \dot{x} = \sigma(y-x) $$
    $$ \dot{y} = x(\rho-z)-y $$
    $$ \dot{z} = xy - \beta z $$

### **7.2. Fractales**
Un fractal es un objeto geométrico cuya estructura básica, fragmentada o irregular, se repite a diferentes escalas. Esta propiedad se conoce como **autosimilitud**. Las trayectorias de los sistemas caóticos a menudo son fractales.

*   **Dimensión Fractal:** Es un número (a menudo no entero) que mide la complejidad o "rugosidad" de un fractal. Indica cómo el objeto llena el espacio.
*   **Curva de Koch:** Un ejemplo clásico de fractal. Se construye iterativamente a partir de un segmento de línea, reemplazando el tercio central por dos lados de un triángulo equilátero. Su longitud es infinita, pero encierra un área finita. Su dimensión fractal es $D = \frac{\log 4}{\log 3} \approx 1.26$.

---

## 8. Oscilaciones No Lineales

Los sistemas oscilatorios reales a menudo presentan comportamientos no lineales, especialmente para grandes amplitudes.

### **8.1. El Resorte No Lineal (Oscilador de Duffing)**
A diferencia de la Ley de Hooke ($F = -kx$), un resorte no lineal tiene una fuerza restauradora que depende de potencias superiores del desplazamiento, por ejemplo:
$$ F(x) = -kx - \beta x^3 $$
La ecuación del movimiento (ecuación de Duffing) es:
$$ m\ddot{x} + kx + \beta x^3 = 0 $$
El comportamiento del sistema depende del signo de `β`:
*   **Resorte Duro (β > 0):** La fuerza restauradora es mayor que en el caso lineal. El período de oscilación disminuye al aumentar la amplitud.
*   **Resorte Blando (β < 0):** La fuerza restauradora es menor. El sistema puede presentar múltiples puntos de equilibrio y trayectorias complejas, incluyendo una **separatriz** que divide las trayectorias acotadas (oscilatorias) de las no acotadas.

El análisis de estos sistemas a través de la conservación de la energía ($E = \frac{1}{2}m\dot{x}^2 + V(x)$) y el plano de fase revela una rica variedad de dinámicas que no se encuentran en los sistemas lineales.