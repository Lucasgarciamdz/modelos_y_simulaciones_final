# Resumen de la Unidad 5: Distribuciones y Simulación Estocástica

## 1. Distribuciones y Aleatorización

### Conceptos Clave
- **Aleatorización de Variables:** Proceso de incorporar la variabilidad y la incertidumbre en los modelos de simulación para obtener resultados realistas. Puede ser inicial (al inicio de la simulación) o en tiempo real (durante la ejecución).
- **Relevamiento de Distribuciones de Frecuencia:** Recolección de datos históricos para determinar la distribución de probabilidad que mejor describe el comportamiento de una variable.
  - **Distribución de Frecuencia:** Muestra la ocurrencia de cada valor.
  - **Densidad de Frecuencia:** Para variables continuas, probabilidad por unidad de intervalo.
  - **Distribución Acumulada de Frecuencias (CDF):** Probabilidad de que una variable tome un valor menor o igual a un punto dado. Es crucial para la generación de números aleatorios.

### FAQ
- **¿Por qué es importante la aleatorización en la simulación?**
  Es fundamental para reflejar la realidad de los sistemas, donde la mayoría de los procesos tienen un componente aleatorio. Permite analizar el comportamiento del sistema bajo diferentes escenarios y obtener resultados más robustos.
- **¿Cómo se elige qué variables aleatorizar?**
  Se eligen aquellas variables que presentan variabilidad significativa y que impactan el comportamiento del sistema, como tiempos de llegada, tiempos de servicio, fallas de equipos, etc.

## 2. Generación de Distribuciones Aleatorias

### Métodos para Generar Números Aleatorios
- **Distribución Uniforme (U(0,1)):** Base para todas las demás distribuciones. Se generan números pseudoaleatorios entre 0 y 1.
  - **Métodos:**
    - **Von Neumann (Cuadrados Medios):** Histórico, pero con problemas de periodicidad y degeneración.
    - **Fibonacci:** Mejora la aleatoriedad, pero aún puede tener limitaciones.
    - **Congruenciales (Lineales, Multiplicativos, Aditivos):** Los más utilizados en la práctica por su eficiencia y buenas propiedades estadísticas.

- **Distribución Normal (Gaussiana):** Común en fenómenos naturales. Se puede generar a partir de números uniformes.
  - **Métodos:**
    - **Box-Muller:** Transforma dos variables uniformes en dos variables normales.
    - **Teorema del Límite Central:** La suma de un gran número de variables aleatorias independientes (incluso no normales) tiende a una distribución normal.

- **Distribuciones Arbitrarias:** Para datos que no se ajustan a distribuciones conocidas.
  - **Método de la Transformada Inversa:** Utiliza la función de distribución acumulada inversa (CDF⁻¹) para mapear números uniformes a la distribución deseada.
  - **Método de Aceptación-Rechazo:** Genera puntos aleatorios y los acepta o rechaza según la forma de la función de densidad de probabilidad.

### Ecuaciones Clave
- **Método Congruencial Lineal:** `X_n+1 = (aX_n + c) mod m`
  - `X_n`: Semilla o valor anterior
  - `a`: Multiplicador
  - `c`: Incremento
  - `m`: Módulo

### FAQ
- **¿Qué es un número pseudoaleatorio?**
  Es un número generado por un algoritmo determinista que simula la aleatoriedad. Aunque no son verdaderamente aleatorios, si el algoritmo es bueno, pasan las pruebas estadísticas de aleatoriedad.
- **¿Por qué es importante la calidad de los generadores de números aleatorios?**
  La validez de los resultados de una simulación depende directamente de la calidad de los números aleatorios. Un generador deficiente puede introducir sesgos y patrones no deseados.

## 3. Pruebas de Bondad de Ajuste

### Tipos de Pruebas
- **Pruebas de Aleatoriedad:** Verifican si una secuencia de números generados es verdaderamente aleatoria.
  - **Prueba de Frecuencia:** Comprueba si cada número aparece con la frecuencia esperada.
  - **Prueba de Series:** Examina la independencia de pares o tríos de números.
  - **Prueba de Corridas:** Analiza la longitud de secuencias de números ascendentes o descendentes.

- **Pruebas de Bondad de Ajuste a Distribuciones:** Determinan si un conjunto de datos se ajusta a una distribución teórica.
  - **Prueba de Chi Cuadrado (χ²):** Compara las frecuencias observadas con las esperadas.
    - **Fórmula:** `χ² = Σ [(Oᵢ - Eᵢ)² / Eᵢ]`
      - `Oᵢ`: Frecuencia observada
      - `Eᵢ`: Frecuencia esperada
  - **Prueba de Kolmogorov-Smirnov (K-S):** Compara la función de distribución acumulada (CDF) empírica con la teórica.
  - **Prueba de Anderson-Darling:** Similar a K-S, pero más sensible a las colas de la distribución.

### FAQ
- **¿Cuándo se usan estas pruebas?**
  Se usan para validar la calidad de los generadores de números aleatorios y para determinar qué distribución de probabilidad se ajusta mejor a un conjunto de datos reales.
- **¿Qué significa un buen ajuste?**
  Significa que no hay evidencia estadística para rechazar la hipótesis de que los datos provienen de la distribución teórica propuesta.

## 4. Software de Simulación

### Herramientas Comunes
- **Programas Comerciales:** Entornos gráficos y librerías para construir y ejecutar modelos de simulación.
  - **Sistemas Estocásticos:** Arena, AnyLogic, FlexSim, Simulink (con extensiones).
  - **Sistemas Determinísticos:** MATLAB, Simulink, LabVIEW.

- **Vissim (Visual Simulation):** Software de microsimulación de tráfico.
  - **Aplicaciones:** Análisis de intersecciones, planificación de transporte, evaluación de infraestructuras viales.
  - **Características:** Modelado detallado de comportamiento de vehículos y peatones, semáforos, etc.

### FAQ
- **¿Cómo se elige el software de simulación adecuado?**
  Depende del tipo de sistema a simular, la complejidad del modelo, los objetivos del análisis, el presupuesto y la experiencia del usuario.
- **¿Qué ventajas ofrecen los programas comerciales?**
  Facilitan la construcción de modelos complejos, ofrecen visualizaciones avanzadas, y permiten realizar análisis estadísticos y optimización de manera eficiente.

## Imágenes Representativas

**[Imagen 1: Gráfico de una Distribución Acumulada de Frecuencias (CDF)]**
*(Descripción: Un gráfico que muestra una curva sigmoide, representando la probabilidad acumulada de una variable aleatoria. Ejes X e Y etiquetados adecuadamente.)*

**[Imagen 2: Diagrama de un Generador Congruencial Lineal Simple]**
*(Descripción: Un diagrama de bloques simple que ilustra el funcionamiento de un generador congruencial lineal, con la fórmula Xn+1 = (aXn + c) mod m.)*

**[Imagen 3: Gráfico de una Prueba de Chi Cuadrado (barras observadas vs. esperadas)]**
*(Descripción: Un gráfico de barras donde se comparan las frecuencias observadas (barras sólidas) con las frecuencias esperadas (barras transparentes o contornos) para diferentes categorías.)*

**[Imagen 4: Captura de pantalla de la interfaz de Vissim (ejemplo de simulación de tráfico)]**
*(Descripción: Una captura de pantalla que muestra una simulación de tráfico en Vissim, con vehículos moviéndose en una red vial y semáforos.)*


