# Modelos Poblacionales

Los modelos poblacionales son herramientas matemáticas y estadísticas que nos permiten comprender, analizar y predecir la dinámica de poblaciones, ya sean de naturaleza biológica o de cualquier otro sistema cuyos componentes varíen en el tiempo.

En esencia, son modelos matemáticos que describen la interacción entre diferentes poblaciones que coexisten en un mismo sistema. A través del análisis de las ecuaciones que definen estas interacciones, es posible extraer conclusiones sobre la evolución temporal de cada población.

Las poblaciones estudiadas pueden ser muy diversas, desde especies animales que compiten por un territorio o se depredan entre sí, hasta microorganismos, bacterias o incluso variables económicas y sociales que interactúan bajo ciertas reglas.

---

## El Modelo Depredador-Presa (Lotka-Volterra)

Un ejemplo clásico y fundamental en la modelización de poblaciones es el **Modelo Depredador-Presa**. Este modelo, también conocido como las ecuaciones de Lotka-Volterra, describe la coexistencia de dos especies antagónicas en un hábitat bien delimitado.

Para ilustrarlo, podemos imaginar una población de conejos (las presas) y una población de lobos (los depredadores) en un bosque aislado. En el modelo, identificaremos:

*   **x(t):** La población de presas en un instante de tiempo *t*.
*   **y(t):** La población de depredadores en un instante de tiempo *t*.

El objetivo del modelo es estudiar cómo la presencia y tamaño de cada población impacta en la evolución de la otra a lo largo del tiempo.

### Hipótesis de Simplificación del Modelo

Para que las ecuaciones diferenciales del modelo sean manejables y representen una situación ideal, se parte de las siguientes suposiciones:

> *   **Recursos de las Presas:** El alimento para las presas es ilimitado y siempre está disponible en el hábitat.
> *   **Recursos de los Depredadores:** El único alimento de los depredadores son las presas.
> *   **Ausencia de Factores Externos:** No existen plagas, enfermedades, cazadores u otras especies que puedan alterar a las poblaciones. El sistema es cerrado.
> *   **Causas de Muerte:** Las presas solo mueren al ser cazadas por los depredadores. Los depredadores solo mueren por causas naturales (inanición) debido a la falta de presas.
> *   **Eficacia de Caza:** Cada encuentro entre un depredador y una presa resulta en la muerte de la presa. La eficacia de caza es del 100%.

Cualquier cambio en estas condiciones requeriría modificar las ecuaciones para incluir nuevos términos que contemplen los factores omitidos.

### Las Ecuaciones de Lotka-Volterra

El modelo se describe mediante un sistema de dos ecuaciones diferenciales autónomas, desarrolladas independientemente por Alfred Lotka y Vito Volterra.

Para simplificar la notación, usaremos `x'` para `dx/dt` y `y'` para `dy/dt`.

```
{ x' = ax - bxy
{ y' = cxy - ky
```

Donde los coeficientes son constantes positivas que representan:

*   **a:** Tasa de crecimiento intrínseco de la población de presas (x).
*   **b:** Tasa de depredación. Mide la efectividad con la que los depredadores cazan a las presas.
*   **c:** Tasa de conversión. Mide la eficiencia con la que los depredadores convierten las presas consumidas en nuevos depredadores.
*   **k:** Tasa de mortalidad intrínseca de la población de depredadores (y).

**Análisis de las ecuaciones:**

1.  **Ecuación de las Presas (`x' = ax - bxy`)**:
    *   El término `ax` indica que, sin depredadores, la población de presas crecería exponencialmente.
    *   El término `-bxy` representa la disminución de la población de presas debido a los encuentros con depredadores. Es proporcional al producto de ambas poblaciones.

2.  **Ecuación de los Depredadores (`y' = cxy - ky`)**:
    *   El término `cxy` indica que la población de depredadores aumenta en función de la cantidad de presas que consumen.
    *   El término `-ky` representa la muerte de depredadores por falta de alimento. Si no hay presas (`x=0`), la población de depredadores decae exponencialmente (`y' = -ky`).

### Análisis del Sistema

#### Puntos Críticos

Los puntos críticos (o de equilibrio) del sistema son aquellos donde ambas derivadas son cero (`x' = 0` y `y' = 0`), lo que significa que las poblaciones no cambian.

1.  **Punto Crítico Trivial:** `(0, 0)`
    *   Corresponde a la extinción de ambas especies.

2.  **Punto Crítico de Coexistencia:** `(k/c, a/b)`
    *   Este punto representa un estado de equilibrio estable donde ambas poblaciones coexisten con un tamaño constante.

#### Comportamiento en los Ejes (Condiciones de Contorno)

*   **Caso A: Sin Depredadores (`y(0) = 0`)**
    *   La ecuación de las presas se simplifica a `x' = ax`.
    *   La solución es `x(t) = x₀ * e^(at)`, un crecimiento exponencial.
    *   Sin depredadores, las presas, con alimento ilimitado, crecen sin control.

*   **Caso B: Sin Presas (`x(0) = 0`)**
    *   La ecuación de los depredadores se simplifica a `y' = -ky`.
    *   La solución es `y(t) = y₀ * e^(-kt)`, un decaimiento exponencial.
    *   Sin su única fuente de alimento, los depredadores mueren de inanición.

Esto demuestra que los ejes `x` e `y` son trayectorias del sistema. Por lo tanto, cualquier trayectoria que comience con ambas poblaciones siendo positivas nunca podrá cruzar los ejes, lo que significa que **ninguna población se extinguirá por completo** en este modelo ideal.

#### Comportamiento Cerca del Punto de Coexistencia

Al linealizar el sistema en torno al punto crítico `(k/c, a/b)`, se encuentra que las raíces de la ecuación característica son **imaginarias puras** (`λ = ±j√ak`).

Esto implica que el punto crítico es un **centro**. Para el sistema no lineal, esto significa que las trayectorias son curvas cerradas que orbitan alrededor del punto de equilibrio. Este comportamiento corresponde a **soluciones periódicas y cíclicas**: las poblaciones de presas y depredadores fluctúan en un ciclo sin fin.

La solución implícita del sistema no lineal original se puede escribir como:

`yᵃ * xᵏ = K * e^(cx + by)`

Donde `K` es una constante determinada por las condiciones iniciales. Esta ecuación describe una familia de curvas cerradas en el plano de fase. Las curvas muy cercanas al punto crítico son casi elípticas, deformándose a medida que se alejan de él.

### Interpretación del Ciclo Depredador-Presa

El comportamiento cíclico se puede visualizar en un **retrato de fase**, donde se grafica la población de depredadores (y) contra la población de presas (x). Cada ciclo completo se puede dividir en cuatro regiones.



*   **Región I (Punto A → Punto B):**
    *   Las presas son abundantes, aunque su población empieza a decrecer debido a la creciente amenaza.
    *   Los depredadores, con mucho alimento disponible, aumentan rápidamente.

*   **Región II (Punto B → Punto C):**
    *   La población de depredadores ha alcanzado su máximo. La intensa depredación causa un drástico descenso en la población de presas.
    *   La escasez de presas ahora provoca que la población de depredadores también comience a disminuir por falta de alimento.

*   **Región III (Punto C → Punto D):**
    *   La población de presas está en su mínimo.
    *   La falta de alimento provoca una fuerte caída en la población de depredadores. La baja presión de depredación permite que la población de presas comience a recuperarse lentamente.

*   **Región IV (Punto D → Punto A):**
    *   Los depredadores están en su mínimo.
    *   Con pocos depredadores, la población de presas se recupera y crece rápidamente, reiniciando el ciclo.

#### Comportamiento Temporal

Si graficamos las poblaciones en función del tiempo, observamos dos ondas desfasadas. Un máximo en la población de presas es seguido por un máximo en la población de depredadores. De igual manera, un mínimo de presas es seguido por un mínimo de depredadores.



---

### Ejemplo de Aplicación: La Industria Pesquera

Este modelo no se limita a la biología; también puede describir sistemas económicos y sociales. Un caso real fue el análisis de la pesca intensiva de la merluza en Argentina.

*   **Presas `x(t)`:** Población de merluza disponible.
*   **Depredadores `y(t)`:** Empleos en la industria pesquera (pescadores, trabajadores de factorías).



1.  **Auge (Punto 1 → M):** Una gran disponibilidad de merluza (`x` alta) impulsa un aumento en la actividad pesquera y el empleo (`y` crece).
2.  **Sobreexplotación (M → 2):** El máximo de actividad pesquera diezma la población de merluza (`x` cae drásticamente).
3.  **Crisis (2 → 3):** La escasez de peces (`x` mínima) provoca el cierre de factorías y la pérdida masiva de empleos (`y` cae).
4.  **Recuperación (3 → 1):** Con una actividad pesquera mínima, la población de merluza comienza a recuperarse, sentando las bases para reiniciar el ciclo.

El modelo ayudó a entender que, para evitar el colapso social y económico (`y` llegando a un mínimo), era necesario intervenir. La solución propuesta fue **gestionar la actividad pesquera**. En lugar de permitir el despido masivo, se incentivó la reasignación de trabajadores a otras tareas (mantenimiento, procesamiento de otras especies) durante los períodos de veda.

Esta estrategia, representada por la línea punteada, buscaba "redondear" la trayectoria, evitando los mínimos drásticos de ambas poblaciones. Al reducir la presión de "depredación" antes de que la población de merluza colapsara, se permitió su recuperación, garantizando la sostenibilidad a largo plazo tanto del recurso natural como de la industria.