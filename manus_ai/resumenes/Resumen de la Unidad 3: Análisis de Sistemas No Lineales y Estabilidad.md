# Resumen de la Unidad 3: Análisis de Sistemas No Lineales y Estabilidad

## 1. Modelación de Problemas No Lineales

### Teoría
- La principal dificultad en el estudio de los **Sistemas No Lineales (SNL)** es la ausencia de un método general para resolver sus ecuaciones diferenciales (ED) no lineales. Cada SNL puede requerir un enfoque de análisis particular, a menudo basado en técnicas de linealización.
- **Comportamiento No Lineal:** Un sistema puede operar linealmente bajo ciertas condiciones (bajos niveles de energía) y exhibir comportamiento no lineal bajo otras (altos niveles de energía).

### Características de los SNL
- **No cumple el principio de superposición:** La respuesta a una suma de entradas no es la suma de las respuestas individuales.
- **Genera nuevas frecuencias:** Una entrada senoidal puede producir una salida con múltiples armónicos.
- **Parámetros variables:** Los parámetros del sistema pueden cambiar según el nivel de la señal de entrada.
- **Fenómenos complejos:** Pueden presentar oscilaciones subarmónicas y auto-oscilaciones sostenidas (ciclos límite).

### FAQ
- **¿Por qué es tan difícil analizar los sistemas no lineales?**
  Principalmente porque no existe una teoría matemática unificada para resolver todas las ecuaciones diferenciales no lineales, a diferencia de los sistemas lineales. Esto obliga a usar métodos aproximados o numéricos.
- **¿Qué es un ciclo límite?**
  Es una órbita periódica aislada en el espacio de fase a la que las trayectorias cercanas convergen o divergen. Representa una oscilación sostenida en el sistema.

## 2. Metodología de Análisis para Sistemas No Lineales

### Métodos Comúnmente Utilizados
1.  **Función Descriptiva:** Análisis en el dominio de la frecuencia, útil para sistemas con una única no linealidad.
2.  **Plano de Fase:** Procedimiento gráfico para sistemas de primer y segundo orden, que proporciona información sobre la respuesta temporal y la estabilidad.
3.  **Método de Lyapunov:** Determina la estabilidad de un punto de equilibrio sin resolver explícitamente las ecuaciones diferenciales, basándose en una función de energía.
4.  **Simulación por Software:** Utiliza métodos numéricos para obtener la respuesta temporal del sistema, siendo la herramienta más versátil para sistemas complejos.

### FAQ
- **¿Cuál es la ventaja del método del plano de fase?**
  Permite visualizar el comportamiento dinámico de sistemas de bajo orden y entender cualitativamente su estabilidad y las interacciones entre las variables de estado.

## 3. Análisis en el Plano de Fase

### Teoría
- **Plano de Fase:** Herramienta gráfica para analizar el comportamiento de sistemas dinámicos, especialmente útil para sistemas autónomos de segundo orden. Representa las trayectorias de las variables de estado (ej. posición vs. velocidad) a lo largo del tiempo.
- **Sistemas Autónomos:** Aquellos cuyas ecuaciones diferenciales no contienen explícitamente la variable independiente (tiempo). Tienen la forma: `dx/dt = F(x, y)` y `dy/dt = G(x, y)`.
- **Puntos Críticos o de Equilibrio:** Puntos en el plano de fase donde las derivadas de todas las variables de estado se anulan simultáneamente. Corresponden a una condición estacionaria del sistema.
  - En sistemas lineales, el único punto crítico es el origen `(0,0)`.
  - En sistemas no lineales, pueden existir múltiples puntos críticos.

### Clasificación de Puntos Críticos (Sistemas Lineales)
La estabilidad y el comportamiento de las trayectorias cerca del punto crítico se determinan a partir de los **autovalores** (`λ`) de la matriz de coeficientes del sistema linealizado.
1.  **Nodo (Estable/Inestable):** Raíces reales con el mismo signo. Trayectorias convergen (estable) o divergen (inestable).
2.  **Punto de Silla (Inestable):** Raíces reales de signos opuestos. Trayectorias se asemejan a hipérbolas.
3.  **Foco o Espiral (Estable/Inestable):** Raíces complejas conjugadas con parte real no nula. Trayectorias son espirales que convergen (estable) o divergen (inestable).
4.  **Centro (Marginalmente Estable):** Raíces imaginarias puras. Trayectorias son curvas cerradas (elipses), indicando oscilaciones perpetuas.

### Aplicación: Análisis del Péndulo
- **Péndulo Ideal (sin fricción):** Su retrato de fase es un **centro**, con trayectorias elípticas cerradas que representan oscilaciones armónicas perpetuas.
- **Péndulo Real (con fricción):** Su retrato de fase es un **foco estable**, con trayectorias en espiral que convergen al origen, reflejando oscilaciones amortiguadas hasta el reposo.

### FAQ
- **¿Qué información se obtiene del plano de fase?**
  Permite visualizar la estabilidad de los puntos de equilibrio, la existencia de ciclos límite, y cómo las trayectorias del sistema evolucionan en el tiempo.

## 4. Estabilidad de Sistemas LTI y Método de Lyapunov

### Teoría
- **Estabilidad de Sistemas LTI (Lineales e Invariantes en el Tiempo):** Depende de los autovalores (polos) de la matriz de estado `A`.
  - **Re(λ) < 0:** Estable (respuesta decae exponencialmente).
  - **Re(λ) > 0:** Inestable (respuesta crece exponencialmente).
  - **Re(λ) = 0:** Marginalmente estable (oscilatorio sostenido) o inestable (si hay raíces repetidas en el eje imaginario).
- **Método de Lyapunov:** Permite analizar la estabilidad de un punto de equilibrio de un sistema no lineal sin resolver explícitamente las ecuaciones. Se basa en encontrar una **función de Lyapunov `V(x)`** (análoga a la energía del sistema) que sea siempre positiva y cuya derivada en el tiempo sea siempre negativa. Si se cumple, el punto de equilibrio es estable.

### Ecuaciones Clave
- **Criterio de Estabilidad de Lyapunov:**
  - `V(x) > 0` para `x ≠ 0` y `V(0) = 0`.
  - `dV(x)/dt ≤ 0` a lo largo de las trayectorias del sistema.

### FAQ
- **¿Cuál es la ventaja del método de Lyapunov sobre otros métodos de estabilidad?**
  Permite determinar la estabilidad global o local de un sistema no lineal sin necesidad de linealizarlo o resolver sus ecuaciones, lo que es muy útil para sistemas complejos.

## Imágenes Representativas

**[Imagen 1: Gráfico de un sistema no lineal vs. lineal]**
*(Descripción: Un gráfico que muestra la diferencia en la respuesta de un sistema lineal (línea recta) y un sistema no lineal (curva) a una entrada creciente.)*

**[Imagen 2: Retrato de fase de un péndulo ideal (centro)]**
*(Descripción: Un gráfico del plano de fase de un péndulo ideal, mostrando trayectorias elípticas cerradas alrededor del punto de equilibrio.)*

**[Imagen 3: Retrato de fase de un péndulo real (foco estable)]**
*(Descripción: Un gráfico del plano de fase de un péndulo real, mostrando trayectorias en espiral que convergen al origen.)*

**[Imagen 4: Representación conceptual de una función de Lyapunov disminuyendo con el tiempo]**
*(Descripción: Un gráfico que muestra una función V(x) que disminuye continuamente a medida que el sistema evoluciona hacia el punto de equilibrio, ilustrando el concepto de estabilidad de Lyapunov.)*


