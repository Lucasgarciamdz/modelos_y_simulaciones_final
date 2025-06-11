import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { BookOpen, FileText, Download, ChevronRight, GraduationCap, Brain, Calculator, Zap, TrendingUp, Infinity, Settings, Home, ChevronDown, ChevronUp, ArrowLeft, Eye, BookMarked, HelpCircle } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import './App.css'

const units = [
  {
    id: 1,
    title: "Introducción al Espacio de Estados",
    description: "Conceptos fundamentales de modelos y simulación, tipos de modelos matemáticos y análisis por variables de estado.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-blue-500",
    topics: ["Modelos y Simulación", "Variables de Estado", "Ecuaciones de Estado", "Ejemplos Prácticos"],
    slides: [
      { id: "introduccion", title: "Introducción a Modelos y Simulación" },
      { id: "simulacion", title: "Simulación y sus Etapas" },
      { id: "tipos_modelos", title: "Tipos de Modelos Matemáticos" },
      { id: "variables_estado", title: "Análisis por Variables de Estado" },
      { id: "ecuaciones_estado", title: "Ecuaciones de Estado" },
      { id: "ejemplos", title: "Ejemplos Prácticos" }
    ]
  },
  {
    id: 2,
    title: "Resolución y Reconstrucción de Estado",
    description: "Métodos para resolver modelos de estado, interconexión de sistemas y observadores de estado.",
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-green-500",
    topics: ["Matriz de Transición", "Interconexión", "Observabilidad", "Observadores de Luenberger"],
    slides: [
      { id: "resolucion_modelo", title: "Resolución del Modelo de Estado" },
      { id: "matriz_transicion", title: "Matriz de Transición de Estado" },
      { id: "interconexion", title: "Interconexión de Sistemas" },
      { id: "observabilidad", title: "Observabilidad de Sistemas" },
      { id: "observadores", title: "Observadores de Estado" },
      { id: "ganancia_optima", title: "Ganancia Óptima y Ruido" }
    ]
  },
  {
    id: 3,
    title: "Análisis de Sistemas No Lineales",
    description: "Metodología de análisis, plano de fase, puntos críticos y estabilidad de sistemas no lineales.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-purple-500",
    topics: ["Sistemas No Lineales", "Plano de Fase", "Puntos Críticos", "Método de Lyapunov"],
    slides: [
      { id: "modelacion_no_lineales", title: "Modelación de Problemas No Lineales" },
      { id: "metodologia_analisis", title: "Metodología de Análisis" },
      { id: "plano_fase", title: "Análisis en el Plano de Fase" },
      { id: "clasificacion_puntos", title: "Clasificación de Puntos Críticos" },
      { id: "ejemplo_pendulo", title: "Aplicación: Análisis del Péndulo" },
      { id: "estabilidad_lyapunov", title: "Estabilidad y Método de Lyapunov" }
    ]
  },
  {
    id: 4,
    title: "Modelos Poblacionales",
    description: "Modelo depredador-presa de Lotka-Volterra y modelo de especies en competencia.",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-orange-500",
    topics: ["Lotka-Volterra", "Especies en Competencia", "Puntos de Equilibrio", "Análisis de Estabilidad"],
    slides: [
      { id: "lotka_volterra", title: "Modelo Depredador-Presa (Lotka-Volterra)" },
      { id: "especies_competencia", title: "Modelo de Especies en Competencia" }
    ]
  },
  {
    id: 5,
    title: "Distribuciones y Simulación Estocástica",
    description: "Aleatorización de variables, generación de distribuciones y software de simulación.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-500",
    topics: ["Distribuciones", "Números Aleatorios", "Pruebas de Bondad", "Software Vissim"],
    slides: [
      { id: "distribuciones", title: "Distribuciones y Aleatorización" },
      { id: "generacion_distribuciones", title: "Generación de Distribuciones Aleatorias" },
      { id: "pruebas_bondad_ajuste", title: "Pruebas de Bondad de Ajuste" },
      { id: "software_simulacion", title: "Software de Simulación" }
    ]
  },
  {
    id: 6,
    title: "Teoría del Caos y Fractales",
    description: "Conceptos fundamentales del caos, sistemas caóticos, ecuación logística y fractales.",
    icon: <Infinity className="w-6 h-6" />,
    color: "bg-red-500",
    topics: ["Teoría del Caos", "Atractores Extraños", "Ecuación Logística", "Dimensión Fractal"],
    slides: [
      { id: "teoria_caos", title: "Teoría del Caos: Conceptos Fundamentales" },
      { id: "sistemas_caoticos", title: "Sistemas y Comportamientos Caóticos" },
      { id: "ecuacion_logistica", title: "Ecuación Logística y Bifurcación" },
      { id: "fractales", title: "Fractales y Dimensión Fractal" }
    ]
  },
  {
    id: 7,
    title: "Optimización No Lineal",
    description: "Análisis de sistemas no lineales con perturbaciones, linealización y resortes no lineales.",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-indigo-500",
    topics: ["Optimización", "Linealización", "Resorte No Lineal", "Separatrices"],
    slides: [
      { id: "optimizacion_no_lineal", title: "Optimización No Lineal" },
      { id: "linealizacion", title: "Linealización de Sistemas" },
      { id: "resorte_no_lineal", title: "Resorte No Lineal: Duro y Blando" },
      { id: "separatrices", title: "Separatrices" }
    ]
  }
]

// Datos de resúmenes embebidos para evitar problemas de carga
const summaryData = {
  1: `# Resumen de la Unidad 1: Introducción al Espacio de Estados

## 1. Conceptos Fundamentales de Modelos y Simulación

### Teoría
- **Modelo:** Descripción analítica y abstracta de un sistema, proceso o circuito para estudiar su comportamiento. También conocido como **gemelo digital**.
- **Propósito de la Modelación:** Crucial cuando la experimentación directa es inconveniente (seguridad, costo, practicidad). Permite ensayos virtuales y análisis de prototipos.
- **Evolución del Modelado:** De ecuaciones diferenciales a modelos algorítmicos con computadoras digitales, mejorando velocidad y exactitud.
- **Campos de Aplicación:** Investigación científica, industria, economía, biología, logística, actividades militares.
- **Simulación:** Proceso de diseñar, desarrollar y experimentar con un modelo programable para analizar su comportamiento bajo distintas condiciones. Técnica numérica computarizada.

### Etapas de un Proceso de Simulación
1.  **Definición del sistema y formulación del problema:** Identificar variables, interrelaciones, restricciones y objetivos.
2.  **Formulación del modelo:** Construcción conceptual y matemática.
3.  **Recolección de datos:** Obtención de datos históricos, de expertos o experimentales.
4.  **Implementación en software:** Traducción del modelo a código o uso de software especializado.
5.  **Validación:** Asegurar que el modelo se comporta como el sistema real.
6.  **Experimentación:** Ejecución de la simulación con diferentes escenarios.
7.  **Interpretación:** Análisis de resultados para extraer conclusiones.
8.  **Documentación:** Elaboración de informes técnicos y manuales.

### FAQ
- **¿Cuál es la diferencia entre un modelo y una simulación?**
  Un modelo es la representación abstracta de un sistema, mientras que la simulación es el proceso de ejecutar ese modelo para observar su comportamiento a lo largo del tiempo.
- **¿Por qué es preferible modelar y simular antes de experimentar en la realidad?**
  Permite reducir costos, evitar riesgos de seguridad, probar escenarios extremos y optimizar diseños antes de la implementación física.

## 2. Tipos de Modelos Matemáticos

### Teoría
- **Ecuaciones Diferenciales:** Tradicional, pero compleja para sistemas no lineales o multivariables.
- **Función de Transferencia:** Proporciona información de estabilidad, pero oculta la arquitectura interna.
- **Variables de Estado (Espacio de Estados):** Moderno y versátil, apto para sistemas lineales y no lineales, SISO (Single Input Single Output) y MIMO (Multiple Input Multiple Output). Preferencial por su detalle y facilidad de simulación computacional.

### FAQ
- **¿Cuál es la ventaja principal de la representación por variables de estado?**
  Su aplicabilidad universal a diferentes tipos de sistemas (lineales, no lineales, SISO, MIMO) y su facilidad para la implementación computacional y el análisis.

## 3. Análisis por Variables de Estado

### Teoría
- **Estado:** Descripción completa de la condición dinámica de un sistema en un instante dado. Determina el comportamiento futuro conociendo las entradas.
- **Espacio de Estados:** Espacio n-dimensional donde cada eje es una variable de estado. Un punto en este espacio representa el estado del sistema.
- **Variables de Estado:** Conjunto mínimo de parámetros que definen el estado del sistema. Se asocian a elementos almacenadores de energía (inductores, capacitores, masas, resortes).
- **Trayectoria de Estado:** Secuencia de puntos en el espacio de estados que muestra la evolución del sistema.
- **Vector de Estado:** Vector que une el origen con el punto que representa el estado del sistema.
- **Orden del Sistema:** Número de elementos almacenadores de energía, igual al número de variables de estado (n) y al orden de la ecuación diferencial.
- **Puntos de Equilibrio:** Estado donde las derivadas de todas las variables de estado son cero, indicando una condición estacionaria. Pueden ser estables o inestables.

### Ecuaciones Clave
- **Ecuación de Estado:** \`ẋ(t) = A x(t) + B u(t)\`
- **Ecuación de Salida:** \`y(t) = C x(t) + D u(t)\`
  - \`x(t)\`: vector de estado
  - \`u(t)\`: vector de entrada
  - \`y(t)\`: vector de salida
  - \`A, B, C, D\`: matrices de coeficientes que describen la dinámica del sistema.

### Ventajas de la Representación por Variables de Estado
- Análisis simplificado.
- Aplicabilidad universal.
- Implementación computacional.

### Ejemplos
- **Circuito RLC en Serie:** Variables de estado: corriente en el inductor (iL) y tensión en el capacitor (vC).
- **Sistema Mecánico Masa-Resorte-Amortiguador:** Variables de estado: posición (x) y velocidad (v) de la masa.

### FAQ
- **¿Qué representa un punto en el espacio de estados?**
  Un punto en el espacio de estados representa el estado completo del sistema en un instante de tiempo específico, es decir, los valores de todas sus variables de estado en ese momento.
- **¿Cómo se determina el orden de un sistema en la representación por variables de estado?**
  El orden del sistema es igual al número de variables de estado independientes necesarias para describir completamente su dinámica, lo que a menudo coincide con el número de elementos almacenadores de energía.`,

  2: `# Resumen de la Unidad 2: Resolución y Reconstrucción de Estado

## 1. Resolución del Modelo de Estado

### Teoría
La resolución del modelo de estado implica encontrar el vector de estado \`x(t)\` a partir de la ecuación diferencial de estado \`ẋ(t) = A x(t) + B u(t)\`.

### Métodos
- **Método de la Transformada de Laplace:** Convierte las ecuaciones diferenciales en algebraicas, facilitando la solución en el dominio de la frecuencia.
- **Método de la Matriz Exponencial (Matriz de Transición de Estado \`Φ(t)\`):** Permite resolver la ecuación homogénea y la solución completa del sistema.

### Ecuaciones Clave
- **Solución en el Dominio de Laplace:**
  \`X(s) = [sI – A]⁻¹[x(0)] + [sI – A]⁻¹[B][U(s)]\`
  Donde \`[sI – A]\` es la **Matriz Característica**.

- **Matriz de Transición de Estado (\`Φ(t)\`):**
  \`Φ(t) = e^(At) = I + At + (A²t²)/2! + (A³t³)/3! + ...\`

- **Solución Completa del Modelo de Estado:**
  \`x(t) = e^(At) * x(0) + ∫[0,t] e^(A(t-τ)) * B * u(τ) dτ\`

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
  \`G_eq(s) = G₁(s) * G₂(s)\`

- **Función de Transferencia Equivalente (Realimentación Unitaria Negativa):**
  \`G_eq(s) = G(s) / (1 + G(s)H(s))\`

### FAQ
- **¿Por qué es importante la interconexión de sistemas?**
  Permite analizar y diseñar sistemas complejos de manera modular, facilitando la comprensión de su comportamiento global y el diseño de controladores.

## 3. Reconstrucción de Estado (Observadores)

### Teoría
Un **observador de estado** es un sistema auxiliar que estima el estado interno de un sistema cuando no todas sus variables son medibles directamente, utilizando las entradas y salidas disponibles.

### Conceptos Clave
- **Observabilidad:** Propiedad de un sistema que indica si es posible determinar completamente su estado interno a partir de las mediciones de su salida en un intervalo de tiempo finito.
  - Se verifica con la **matriz de observabilidad \`[Mo]\`**; si su rango es igual al orden del sistema \`n\`, el sistema es observable.
- **Observador de Orden Completo (Luenberger):** Reconstruye todas las variables de estado. Su diseño implica elegir una ganancia \`K\` para asegurar la convergencia del error de estimación.
- **Error de Reconstrucción:** La diferencia entre el estado real y el estado estimado (\`e(t) = x(t) - x̂(t)\`). La dinámica de este error debe ser estable para que el observador funcione correctamente.
- **Ganancia Óptima (K₀):** Se elige para minimizar el error de estimación, a menudo considerando el ruido presente en las mediciones. El **Filtro de Kalman** es un observador óptimo para sistemas lineales con ruido gaussiano.

### Ecuaciones Clave
- **Ecuación del Observador de Luenberger:**
  \`ẋ̂(t) = (A - KC)x̂(t) + Bu(t) + Ky(t)\`
  Donde \`K\` es la **matriz de ganancia del observador**.

- **Dinámica del Error de Reconstrucción:**
  \`ė(t) = (A - KC)e(t)\`

### FAQ
- **¿Cuándo se necesita un observador de estado?**
  Cuando no todas las variables de estado de un sistema pueden ser medidas directamente debido a limitaciones físicas, costos o inaccesibilidad.
- **¿Qué es el Filtro de Kalman?**
  Es un algoritmo recursivo que estima el estado de un sistema dinámico a partir de una serie de mediciones ruidosas. Es un observador óptimo en el sentido de que minimiza la varianza del error de estimación.`,

  3: `# Resumen de la Unidad 3: Análisis de Sistemas No Lineales y Estabilidad

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
- **Sistemas Autónomos:** Aquellos cuyas ecuaciones diferenciales no contienen explícitamente la variable independiente (tiempo). Tienen la forma: \`dx/dt = F(x, y)\` y \`dy/dt = G(x, y)\`.
- **Puntos Críticos o de Equilibrio:** Puntos en el plano de fase donde las derivadas de todas las variables de estado se anulan simultáneamente. Corresponden a una condición estacionaria del sistema.
  - En sistemas lineales, el único punto crítico es el origen \`(0,0)\`.
  - En sistemas no lineales, pueden existir múltiples puntos críticos.

### Clasificación de Puntos Críticos (Sistemas Lineales)
La estabilidad y el comportamiento de las trayectorias cerca del punto crítico se determinan a partir de los **autovalores** (\`λ\`) de la matriz de coeficientes del sistema linealizado.
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
- **Estabilidad de Sistemas LTI (Lineales e Invariantes en el Tiempo):** Depende de los autovalores (polos) de la matriz de estado \`A\`.
  - **Re(λ) < 0:** Estable (respuesta decae exponencialmente).
  - **Re(λ) > 0:** Inestable (respuesta crece exponencialmente).
  - **Re(λ) = 0:** Marginalmente estable (oscilatorio sostenido) o inestable (si hay raíces repetidas en el eje imaginario).
- **Método de Lyapunov:** Permite analizar la estabilidad de un punto de equilibrio de un sistema no lineal sin resolver explícitamente las ecuaciones. Se basa en encontrar una **función de Lyapunov \`V(x)\`** (análoga a la energía del sistema) que sea siempre positiva y cuya derivada en el tiempo sea siempre negativa. Si se cumple, el punto de equilibrio es estable.

### Ecuaciones Clave
- **Criterio de Estabilidad de Lyapunov:**
  - \`V(x) > 0\` para \`x ≠ 0\` y \`V(0) = 0\`.
  - \`dV(x)/dt ≤ 0\` a lo largo de las trayectorias del sistema.

### FAQ
- **¿Cuál es la ventaja del método de Lyapunov sobre otros métodos de estabilidad?**
  Permite determinar la estabilidad global o local de un sistema no lineal sin necesidad de linealizarlo o resolver sus ecuaciones, lo que es muy útil para sistemas complejos.`,

  4: `# Resumen de la Unidad 4: Modelos Poblacionales

## 1. Modelo Depredador-Presa (Lotka-Volterra)

### Teoría
El modelo de Lotka-Volterra describe la dinámica de dos especies que interactúan: una presa y un depredador. Es uno de los modelos más fundamentales en ecología matemática.

### Ecuaciones del Modelo
- **Ecuación de la Presa:** \`dx/dt = ax - bxy\`
- **Ecuación del Depredador:** \`dy/dt = -cy + dxy\`

Donde:
- \`x\`: población de presas
- \`y\`: población de depredadores
- \`a\`: tasa de crecimiento natural de las presas
- \`b\`: tasa de depredación
- \`c\`: tasa de mortalidad natural de los depredadores
- \`d\`: eficiencia de conversión de presas en depredadores

### Puntos de Equilibrio
1. **Punto de extinción:** (0, 0) - Ambas poblaciones se extinguen
2. **Punto de coexistencia:** (c/d, a/b) - Ambas poblaciones coexisten

### Características del Modelo
- Las soluciones son **órbitas cerradas** en el plano de fase
- Las poblaciones oscilan periódicamente
- El modelo conserva una cantidad llamada **integral primera**
- No hay convergencia a un punto de equilibrio estable

### FAQ
- **¿Por qué las poblaciones oscilan en el modelo Lotka-Volterra?**
  Porque el modelo asume que no hay factores limitantes adicionales. Cuando hay muchas presas, los depredadores crecen; cuando hay muchos depredadores, las presas disminuyen, lo que eventualmente reduce los depredadores, permitiendo que las presas crezcan nuevamente.

## 2. Modelo de Especies en Competencia

### Teoría
Este modelo describe la dinámica de dos especies que compiten por los mismos recursos limitados. Es fundamental para entender la **exclusión competitiva**.

### Ecuaciones del Modelo
- **Especie 1:** \`dx₁/dt = r₁x₁(1 - x₁/K₁ - α₁₂x₂/K₁)\`
- **Especie 2:** \`dx₂/dt = r₂x₂(1 - x₂/K₂ - α₂₁x₁/K₂)\`

Donde:
- \`x₁, x₂\`: poblaciones de las especies 1 y 2
- \`r₁, r₂\`: tasas de crecimiento intrínseco
- \`K₁, K₂\`: capacidades de carga
- \`α₁₂, α₂₁\`: coeficientes de competencia

### Puntos de Equilibrio
1. **Extinción total:** (0, 0)
2. **Supervivencia de especie 1:** (K₁, 0)
3. **Supervivencia de especie 2:** (0, K₂)
4. **Coexistencia:** Punto interior (si existe)

### Principio de Exclusión Competitiva
- Si la competencia es muy fuerte, una especie excluye a la otra
- La coexistencia estable requiere condiciones específicas
- La especie "más fuerte" domina y excluye a la "más débil"

### Análisis de Estabilidad
La estabilidad de los puntos de equilibrio depende de los coeficientes de competencia:
- **Coexistencia estable:** α₁₂ < K₁/K₂ y α₂₁ < K₂/K₁
- **Exclusión competitiva:** Una de las condiciones anteriores no se cumple

### FAQ
- **¿Qué determina cuál especie sobrevive en competencia?**
  La combinación de la tasa de crecimiento, la capacidad de carga y los coeficientes de competencia. La especie con mayor "ventaja competitiva" tiende a excluir a la otra.
- **¿Puede haber coexistencia estable en competencia?**
  Sí, pero requiere que cada especie inhiba más su propio crecimiento que el de la especie competidora, lo que es menos común en la naturaleza.

## Aplicaciones y Limitaciones

### Aplicaciones
- **Conservación:** Predicción de dinámicas poblacionales
- **Control biológico:** Introducción de depredadores naturales
- **Gestión pesquera:** Modelos de explotación sostenible
- **Ecología:** Comprensión de interacciones entre especies

### Limitaciones
- **Simplificaciones:** No considera factores ambientales, migración, estructura de edades
- **Parámetros constantes:** En realidad, los parámetros pueden variar con el tiempo
- **Interacciones simples:** Las interacciones reales son más complejas

### FAQ
- **¿Son realistas estos modelos?**
  Son simplificaciones útiles que capturan dinámicas esenciales, pero la realidad es más compleja. Sirven como punto de partida para modelos más sofisticados.`,

  5: `# Resumen de la Unidad 5: Distribuciones y Simulación Estocástica

## 1. Distribuciones y Aleatorización

### Teoría
- **Aleatorización de Variables:** Proceso de introducir variabilidad aleatoria en las variables de un modelo para representar la incertidumbre inherente en los sistemas reales.
- **Distribuciones de Frecuencia:** Describen cómo se distribuyen los valores de una variable aleatoria. Pueden ser discretas o continuas.
- **Distribuciones Acumuladas:** Función que da la probabilidad de que una variable aleatoria tome un valor menor o igual a un valor específico.

### Tipos de Distribuciones Comunes
- **Distribución Uniforme:** Todos los valores en un intervalo tienen la misma probabilidad
- **Distribución Normal (Gaussiana):** Distribución en forma de campana, muy común en fenómenos naturales
- **Distribución Exponencial:** Modela tiempos entre eventos en procesos de Poisson
- **Distribución de Poisson:** Modela el número de eventos en un intervalo de tiempo fijo

### FAQ
- **¿Por qué es importante la aleatorización en simulación?**
  Porque los sistemas reales tienen incertidumbre y variabilidad. La aleatorización permite modelar esta variabilidad y obtener resultados más realistas.

## 2. Generación de Distribuciones Aleatorias

### Métodos de Generación
- **Método de la Transformada Inversa:** Utiliza la función de distribución acumulada inversa para generar números aleatorios con una distribución específica
- **Método de Aceptación-Rechazo:** Genera números aleatorios de una distribución compleja usando una distribución más simple
- **Método de Box-Muller:** Específico para generar números aleatorios con distribución normal

### Generación de Distribuciones Específicas
- **Distribución Uniforme:** Base para generar otras distribuciones
- **Distribución Normal:** Usando transformación de Box-Muller o método polar
- **Distribuciones Arbitrarias:** Usando métodos de transformada inversa o tablas de lookup

### Ecuaciones Clave
- **Transformada Inversa:** Si U ~ Uniforme(0,1), entonces X = F⁻¹(U) tiene distribución F
- **Box-Muller:** Z₁ = √(-2ln(U₁))cos(2πU₂), Z₂ = √(-2ln(U₁))sin(2πU₂)

### FAQ
- **¿Cómo se verifica que los números generados siguen la distribución deseada?**
  Mediante pruebas estadísticas como las pruebas de bondad de ajuste (Kolmogorov-Smirnov, Chi-cuadrado).

## 3. Pruebas de Bondad de Ajuste

### Propósito
Verificar si una muestra de datos sigue una distribución teórica específica o si los números generados por un algoritmo son verdaderamente aleatorios.

### Pruebas Principales
- **Prueba de Kolmogorov-Smirnov:** Compara la función de distribución empírica con la teórica
- **Prueba de Chi-cuadrado:** Compara frecuencias observadas con frecuencias esperadas
- **Prueba de Anderson-Darling:** Más sensible a las colas de la distribución
- **Pruebas de Aleatoriedad:** Verifican patrones no deseados en secuencias aleatorias

### Criterios de Evaluación
- **Nivel de significancia:** Típicamente α = 0.05
- **Estadístico de prueba:** Valor calculado que se compara con valores críticos
- **p-valor:** Probabilidad de obtener un resultado al menos tan extremo como el observado

### FAQ
- **¿Qué significa que una prueba de bondad de ajuste "falle"?**
  Significa que hay evidencia estadística de que los datos no siguen la distribución propuesta, pero no indica cuál es la distribución correcta.

## 4. Software de Simulación

### Software Comercial
- **VISSIM:** Software de simulación de tráfico microscópico
  - Modela el comportamiento individual de vehículos
  - Permite análisis de flujo de tráfico, semáforos, intersecciones
  - Incluye elementos estocásticos para modelar variabilidad del comportamiento humano

### Características de Software de Simulación Estocástica
- **Generadores de números aleatorios:** Algoritmos para producir secuencias pseudoaleatorias
- **Bibliotecas de distribuciones:** Funciones predefinidas para distribuciones comunes
- **Análisis estadístico:** Herramientas para analizar resultados de múltiples corridas
- **Visualización:** Capacidades gráficas para mostrar resultados

### Aplicaciones
- **Simulación de tráfico:** Modelado de flujos vehiculares y peatonales
- **Simulación de colas:** Análisis de sistemas de servicio (bancos, hospitales)
- **Simulación financiera:** Modelado de mercados y riesgos
- **Simulación de manufactura:** Optimización de procesos productivos

### FAQ
- **¿Cuál es la diferencia entre simulación determinística y estocástica?**
  La simulación determinística produce siempre los mismos resultados para las mismas entradas, mientras que la estocástica incluye elementos aleatorios que producen resultados diferentes en cada corrida.

## Conceptos Clave para el Examen

### Ecuaciones Importantes
- **Función de Distribución Acumulada:** F(x) = P(X ≤ x)
- **Función de Densidad:** f(x) = dF(x)/dx
- **Esperanza:** E[X] = ∫ x f(x) dx
- **Varianza:** Var(X) = E[X²] - (E[X])²

### Aplicaciones Prácticas
- Modelado de incertidumbre en sistemas de ingeniería
- Análisis de riesgo en proyectos
- Optimización bajo incertidumbre
- Validación de modelos mediante comparación con datos reales`,

  6: `# Resumen de la Unidad 6: Teoría del Caos y Fractales

## 1. Teoría del Caos: Conceptos Fundamentales

### Antecedentes Históricos
- **Edward Lorenz (1963):** Descubrimiento del comportamiento caótico en modelos meteorológicos
- **"Efecto Mariposa":** Pequeñas variaciones en condiciones iniciales pueden llevar a grandes diferencias en el comportamiento futuro
- **Paradigma Científico:** Cambio de la visión determinística clásica a la comprensión de sistemas complejos

### Definición de Caos
El caos es un comportamiento aparentemente aleatorio que surge de sistemas determinísticos no lineales. Se caracteriza por:
- **Sensibilidad a condiciones iniciales**
- **Comportamiento aperiódico**
- **Determinismo subyacente**

### Características del Comportamiento Caótico
- **Impredecibilidad a largo plazo:** Aunque el sistema es determinístico
- **Dependencia sensible:** Pequeños cambios → grandes efectos
- **Mezcla topológica:** Las trayectorias se separan exponencialmente
- **Densidad de órbitas periódicas:** Infinitas órbitas periódicas inestables

### FAQ
- **¿Cómo puede un sistema determinístico ser impredecible?**
  Aunque las ecuaciones son determinísticas, la sensibilidad extrema a las condiciones iniciales hace que errores minúsculos de medición se amplifiquen exponencialmente, volviendo imposible la predicción a largo plazo.

## 2. Sistemas y Comportamientos Caóticos

### Atractores
- **Atractor Lineal:** Punto fijo o ciclo límite hacia el cual convergen las trayectorias
- **Atractor Caótico (Extraño):** Conjunto fractal que atrae trayectorias pero dentro del cual el comportamiento es caótico

### Ejemplos de Atractores Extraños
- **Atractor de Lorenz:** Forma de "mariposa" en el espacio tridimensional
- **Atractor de Rössler:** Estructura en forma de banda retorcida
- **Atractor de Hénon:** Mapa bidimensional con estructura fractal

### Características de Sistemas Caóticos
- **No linealidad:** Esencial para el comportamiento caótico
- **Dimensionalidad:** Mínimo de 3 dimensiones para flujos continuos
- **Parámetros críticos:** El caos aparece para ciertos valores de parámetros

### Rutas al Caos
- **Cascada de bifurcaciones:** Secuencia de duplicaciones de período
- **Intermitencia:** Alternancia entre comportamiento regular y caótico
- **Crisis:** Aparición súbita o desaparición del atractor caótico

### FAQ
- **¿Todos los sistemas no lineales son caóticos?**
  No. La no linealidad es necesaria pero no suficiente. Se requieren condiciones específicas de parámetros y dimensionalidad.

## 3. Ecuación Logística y Bifurcación

### La Ecuación Logística
**Forma discreta:** xₙ₊₁ = rxₙ(1 - xₙ)

Donde:
- x: población normalizada (0 ≤ x ≤ 1)
- r: parámetro de crecimiento (0 ≤ r ≤ 4)

### Comportamiento según el Parámetro r
- **0 < r < 1:** Extinción (x → 0)
- **1 < r < 3:** Convergencia a punto fijo estable
- **3 < r < 1+√6 ≈ 3.45:** Oscilación de período 2
- **3.45 < r < 3.54:** Cascada de bifurcaciones (períodos 4, 8, 16, ...)
- **r > 3.57:** Comportamiento caótico con ventanas de periodicidad

### Diagrama de Bifurcación
- **Bifurcación de Horquilla:** Duplicación del período
- **Constante de Feigenbaum:** δ ≈ 4.669... (razón entre intervalos de bifurcación)
- **Universalidad:** Muchos sistemas muestran la misma secuencia de bifurcaciones

### Análisis de Estabilidad
- **Punto fijo:** x* = (r-1)/r para r > 1
- **Criterio de estabilidad:** |f'(x*)| < 1
- **Pérdida de estabilidad:** En r = 3 (primera bifurcación)

### FAQ
- **¿Por qué es importante la ecuación logística?**
  Es uno de los ejemplos más simples que muestra la ruta al caos, y su comportamiento es universal en muchos sistemas no lineales.

## 4. Fractales y Dimensión Fractal

### Definición de Fractales
Los fractales son objetos geométricos que exhiben:
- **Autosimilaridad:** Partes similares al todo a diferentes escalas
- **Dimensión fractal:** Dimensión no entera
- **Complejidad infinita:** Detalle a todas las escalas

### Ejemplos Clásicos
- **Conjunto de Cantor:** Dimensión fractal ≈ 0.631
- **Curva de Koch:** Dimensión fractal ≈ 1.262
- **Triángulo de Sierpinski:** Dimensión fractal ≈ 1.585
- **Conjunto de Mandelbrot:** Frontera con dimensión fractal = 2

### Cálculo de la Dimensión Fractal

#### Dimensión de Hausdorff-Besicovitch
D = lim(ε→0) [log N(ε) / log(1/ε)]

Donde N(ε) es el número de cajas de tamaño ε necesarias para cubrir el fractal.

#### Dimensión de Autosimilaridad
Para fractales autosimilares: D = log(N) / log(1/r)
- N: número de copias
- r: factor de escala

### Aplicaciones de Fractales
- **Modelado de formas naturales:** Costas, montañas, nubes
- **Compresión de imágenes:** Algoritmos basados en autosimilaridad
- **Análisis de señales:** Caracterización de ruido y turbulencia
- **Medicina:** Análisis de estructuras biológicas (pulmones, vasos sanguíneos)

### FAQ
- **¿Qué significa que algo tenga dimensión fractal 1.5?**
  Significa que el objeto es más complejo que una línea (dimensión 1) pero menos que una superficie (dimensión 2). Llena el espacio de manera intermedia.

## Relación entre Caos y Fractales

### Conexiones Fundamentales
- **Atractores extraños:** Tienen estructura fractal
- **Conjuntos de Julia:** Fronteras fractales en dinámicas complejas
- **Cuencas de atracción:** Pueden tener fronteras fractales
- **Sensibilidad a condiciones iniciales:** Relacionada con la estructura fractal del espacio de fases

### Aplicaciones Conjuntas
- **Análisis de series temporales:** Detección de caos mediante dimensión fractal
- **Modelado de turbulencia:** Estructuras fractales en flujos caóticos
- **Sistemas biológicos:** Dinámicas caóticas con atractores fractales

### FAQ
- **¿Todos los sistemas caóticos tienen atractores fractales?**
  La mayoría sí. Los atractores extraños típicamente tienen dimensión fractal, lo que está relacionado con la complejidad del comportamiento caótico.`,

  7: `# Resumen de la Unidad 7: Optimización No Lineal y Análisis de Sistemas

## 1. Optimización No Lineal

### Conceptos Clave
- **Sistemas No Lineales con Perturbaciones Constantes:** Muchos sistemas reales están sujetos a perturbaciones externas. En sistemas no lineales, el efecto de estas perturbaciones puede ser complejo y no lineal, alterando los puntos de equilibrio y la estabilidad.
- **Ecuaciones Funcionales:** Ecuaciones donde la incógnita es una función. Surgen al modelar sistemas con retardo o al buscar soluciones de equilibrio. Su solución a menudo requiere métodos numéricos o aproximaciones.

### FAQ
- **¿Qué es la optimización no lineal?**
  Es la rama de la optimización que busca encontrar los valores óptimos de variables en un sistema donde las relaciones entre las variables y la función objetivo no son lineales. Esto es común en ingeniería, economía y ciencias naturales.
- **¿Por qué es importante considerar las perturbaciones en sistemas no lineales?**
  Las perturbaciones pueden cambiar drásticamente el comportamiento de un sistema no lineal, incluso si son pequeñas. Su análisis es crucial para diseñar sistemas robustos y predecir su comportamiento en condiciones reales.

## 2. Linealización de Sistemas

### Métodos y Aplicaciones
- **¿Por qué Linealizar?:** Los sistemas no lineales son difíciles de analizar matemáticamente. La linealización permite aproximar el comportamiento del sistema alrededor de un punto de operación (punto de equilibrio) mediante un modelo lineal, lo que facilita el uso de herramientas de análisis de sistemas lineales.
  - Simplifica el análisis de estabilidad.
  - Permite el diseño de controladores lineales.
  - Válida para pequeñas desviaciones alrededor del punto de operación.
- **Método de Linealización (Serie de Taylor):** Se utiliza la expansión en serie de Taylor de las funciones no lineales alrededor del punto de equilibrio, truncando los términos de orden superior.
  - **Fórmula General (para una función f(x) alrededor de x₀):** \`f(x) ≈ f(x₀) + f'(x₀)(x - x₀)\`
  - Para sistemas con múltiples variables, se utiliza la matriz Jacobiana.
  - El punto de equilibrio (x₀) es donde la derivada del sistema es cero.

### Ecuaciones Clave
- **Linealización de un sistema dinámico no lineal \`ẋ = f(x)\` alrededor de un punto de equilibrio \`x₀\`:**
  \`ẋ ≈ A(x - x₀)\` donde \`A\` es la matriz Jacobiana evaluada en \`x₀\`.

### FAQ
- **¿Cuándo es válida la linealización?**
  La linealización es una aproximación válida solo para pequeñas desviaciones alrededor del punto de operación o equilibrio. Fuera de esta región, el comportamiento del sistema puede diferir significativamente del modelo linealizado.
- **¿Qué es la matriz Jacobiana en este contexto?**
  Es una matriz de las derivadas parciales de primer orden de una función vectorial. En la linealización, la Jacobiana se evalúa en el punto de equilibrio para obtener la matriz del sistema linealizado.

## 3. Resorte No Lineal: Duro y Blando

### Comportamiento y Modelado
- **Resorte Lineal vs. No Lineal:**
  - **Resorte Lineal (Ley de Hooke):** La fuerza de restauración es directamente proporcional al desplazamiento (F = -kx).
  - **Resorte Duro (Hard Spring):** La fuerza de restauración aumenta más rápidamente que linealmente con el desplazamiento (ej. F = -kx - αx³, con α > 0).
  - **Resorte Blando (Soft Spring):** La fuerza de restauración aumenta más lentamente que linealmente con el desplazamiento (ej. F = -kx + αx³, con α > 0).
- **Diagrama de Fase:** El diagrama de fase para un oscilador con resorte no lineal muestra trayectorias que no son elipses perfectas. Los puntos de equilibrio y la estabilidad pueden variar.
  - **Ecuación Diferencial General:** \`m(d²x/dt²) + c(dx/dt) + f(x) = 0\`
    - \`f(x)\`: Fuerza de restauración no lineal.
  - La forma de las trayectorias en el plano de fase (posición vs. velocidad) revela el comportamiento dinámico del sistema.

### FAQ
- **¿Por qué es importante estudiar los resortes no lineales?**
  Muchos sistemas mecánicos reales exhiben comportamiento no lineal debido a las propiedades de los materiales o la geometría. Entender los resortes no lineales es crucial para predecir fenómenos como la resonancia, la fatiga y la estabilidad en estructuras y máquinas.
- **¿Cómo se ve un diagrama de fase para un resorte no lineal?**
  Las trayectorias en el plano de fase (posición vs. velocidad) no serán elipses perfectas, sino curvas distorsionadas que reflejan la relación no lineal entre la fuerza y el desplazamiento. Pueden aparecer múltiples puntos de equilibrio o ciclos límite complejos.

## 4. Separatrices

### Definición y Función
- **Definición:** Las separatrices son trayectorias especiales en el diagrama de fase que actúan como fronteras, dividiendo el espacio de fase en regiones donde las trayectorias tienen comportamientos cualitativamente diferentes.
  - A menudo, las separatrices conectan puntos de silla o se extienden al infinito.
  - Determinan las cuencas de atracción de diferentes atractores o el escape del sistema.

### Importancia en el Análisis de Sistemas
- El estudio de las separatrices es crucial para comprender la dinámica global de los sistemas no lineales, especialmente en la presencia de múltiples puntos de equilibrio o atractores.
  - Permiten identificar regiones de estabilidad y de inestabilidad.
  - Ayudan a predecir si el sistema convergerá a un estado particular o si exhibirá un comportamiento más complejo (ej. oscilaciones, caos).
  - Son fundamentales en el análisis de bifurcaciones y transiciones de fase.

### FAQ
- **¿Qué es un punto de silla en un diagrama de fase?**
  Es un tipo de punto de equilibrio inestable donde las trayectorias se acercan al punto a lo largo de ciertas direcciones y se alejan a lo largo de otras. Las separatrices a menudo pasan por los puntos de silla.
- **¿Cómo se relacionan las separatrices con el caos?**
  En sistemas caóticos, las separatrices pueden plegarse y estirarse de manera compleja, formando estructuras fractales que contribuyen a la sensibilidad a las condiciones iniciales y al comportamiento impredecible.`
}

// Componente para la página principal
function HomePage() {
  const navigate = useNavigate()

  const downloadSummary = (unitId) => {
    // Crear contenido del archivo
    const content = summaryData[unitId] || `# Resumen de la Unidad ${unitId}\n\nContenido no disponible.`
    
    // Crear blob y descargar
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `resumen_unidad_${unitId}.md`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Modelos y Simulación
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Bioingeniería - Cuarto Año - Código 5044
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Info */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Información del Curso</span>
              </CardTitle>
              <CardDescription>
                La asignatura brinda elementos de modelación matemática y simulación de procesos y sistemas variados, 
                permitiendo estudiar y analizar el comportamiento de sistemas sin compromiso de seguridad, costo o integridad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">7</div>
                  <div className="text-sm text-gray-600">Unidades</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">60</div>
                  <div className="text-sm text-gray-600">Horas Reloj</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4</div>
                  <div className="text-sm text-gray-600">Horas Semanales</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Study Tips */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-800 dark:text-blue-200">
                <BookMarked className="w-5 h-5" />
                <span>Guía de Estudio - 3 Semanas para el Final</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">Semana 1</div>
                  <div className="text-sm text-gray-600">Unidades 1-3</div>
                  <div className="text-xs text-gray-500 mt-1">Fundamentos y Sistemas Lineales</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="text-lg font-bold text-green-600">Semana 2</div>
                  <div className="text-sm text-gray-600">Unidades 4-5</div>
                  <div className="text-xs text-gray-500 mt-1">Modelos Poblacionales y Estocásticos</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">Semana 3</div>
                  <div className="text-sm text-gray-600">Unidades 6-7 + Repaso</div>
                  <div className="text-xs text-gray-500 mt-1">Caos, Optimización y Repaso General</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <Card key={unit.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${unit.color} text-white`}>
                    {unit.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">
                      Unidad {unit.id}
                    </CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {unit.topics.length} temas
                    </Badge>
                  </div>
                </div>
                <CardDescription className="mt-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {unit.title}
                  </h3>
                  <p className="text-sm">{unit.description}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {unit.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => navigate(`/unidad/${unit.id}`)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Estudiar
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => downloadSummary(unit.id)}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Resumen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <div className="border-t pt-8">
            <p className="text-sm">
              Material de estudio para la materia Modelos y Simulación - Bioingeniería
            </p>
            <p className="text-xs mt-2">
              Profesor Titular: Ing. HUGO BIRITOS | Profesor Asociado: Dr. Ing. MARIO MOLINA
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

// Componente para la página de cada unidad
function UnitPage({ unitId }) {
  const navigate = useNavigate()
  const unit = units.find(u => u.id === parseInt(unitId))
  const [openSections, setOpenSections] = useState({})
  const summaryContent = summaryData[parseInt(unitId)] || `# Resumen de la Unidad ${unitId}\n\nContenido no disponible.`

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const openSlide = (slideId) => {
    const slidePath = `/src/assets/presentacion_unidad_${unitId}/${slideId}.html`
    window.open(slidePath, '_blank')
  }

  const downloadSummary = () => {
    const content = summaryData[parseInt(unitId)] || `# Resumen de la Unidad ${unitId}\n\nContenido no disponible.`
    
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `resumen_unidad_${unitId}.md`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  if (!unit) {
    return <div>Unidad no encontrada</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/')} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div className={`p-2 rounded-lg ${unit.color} text-white`}>
              {unit.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Unidad {unit.id}: {unit.title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {unit.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="slides">Presentaciones</TabsTrigger>
            <TabsTrigger value="concepts">Conceptos Clave</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Resumen de la Unidad</span>
                  <Button onClick={downloadSummary} size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  <ReactMarkdown>{summaryContent}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="slides" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unit.slides.map((slide, index) => (
                <Card key={slide.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{index + 1}. {slide.title}</span>
                      <Button size="sm" onClick={() => openSlide(slide.id)}>
                        <Eye className="w-4 h-4 mr-2" />
                        Ver
                      </Button>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="mt-6">
            <div className="space-y-4">
              {unit.topics.map((topic, index) => (
                <Card key={index}>
                  <Collapsible 
                    open={openSections[`concept-${index}`]} 
                    onOpenChange={() => toggleSection(`concept-${index}`)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                        <CardTitle className="flex items-center justify-between">
                          <span>{topic}</span>
                          {openSections[`concept-${index}`] ? 
                            <ChevronUp className="w-4 h-4" /> : 
                            <ChevronDown className="w-4 h-4" />
                          }
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          Contenido detallado sobre {topic}. Aquí se incluirían las explicaciones específicas, 
                          ecuaciones importantes y ejemplos prácticos relacionados con este concepto.
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5" />
                  <span>Preguntas Frecuentes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">¿Cuáles son los conceptos más importantes de esta unidad?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Los conceptos clave incluyen: {unit.topics.join(', ')}.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">¿Qué debo memorizar para el examen?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Enfócate en las ecuaciones fundamentales, definiciones clave y la aplicación práctica de los conceptos.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">¿Cómo se relaciona esta unidad con las demás?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Esta unidad proporciona las bases para entender los conceptos más avanzados que se desarrollan en las unidades posteriores.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unidad/:unitId" element={<UnitPageWrapper />} />
      </Routes>
    </Router>
  )
}

function UnitPageWrapper() {
  const { unitId } = useParams()
  return <UnitPage unitId={unitId} />
}

export default App

