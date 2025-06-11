


# UNIDAD 4: Modelos Poblacionales

## 4.1. Modelo Depredador-Presa (Lotka-Volterra)

Describe la dinámica de dos especies donde una es la presa (`x`) y la otra el depredador (`y`).

### Ecuaciones de Lotka-Volterra
*   `dx/dt = ax - bxy` (Crecimiento de presas, limitado por encuentros con depredadores)
*   `dy/dt = cxy - ky` (Crecimiento de depredadores por alimento, limitado por muerte natural)

Donde `a, b, c, k` son constantes positivas que representan tasas de crecimiento, depredación, conversión y mortalidad.

### Análisis del Sistema
*   **Puntos Críticos:**
    1.  `(0, 0)`: Extinción de ambas especies (punto de silla).
    2.  `(k/c, a/b)`: Coexistencia de ambas especies (centro).
*   **Comportamiento Cíclico:** El sistema exhibe un comportamiento cíclico y oscilatorio. Las trayectorias en el plano de fase son curvas cerradas alrededor del punto de coexistencia, indicando que las poblaciones de presas y depredadores fluctúan perpetuamente. Un aumento en las presas es seguido por un aumento en los depredadores, lo que causa una disminución de las presas, seguido por una disminución de los depredadores, reiniciando el ciclo.

## 4.2. Modelo de Especies en Competencia

Describe dos especies (`x`, `y`) que compiten por un recurso limitado. La presencia de cada especie afecta negativamente el crecimiento de la otra.

### Ecuaciones
*   `dx/dt = r₁x(1 - x/K₁) - α₁₂xy`
*   `dy/dt = r₂y(1 - y/K₂) - α₂₁xy`

Donde `r` son tasas de crecimiento, `K` capacidades de carga y `α` coeficientes de competencia.

### Análisis del Sistema
El análisis de este sistema revela puntos críticos que pueden ser **nodos estables** (coexistencia) o **sillas de montar**. Un punto de silla de montar implica que, dependiendo de las condiciones iniciales, una de las especies eventualmente dominará y llevará a la otra a la extinción. Este resultado se conoce como el **principio de exclusión competitiva**.


