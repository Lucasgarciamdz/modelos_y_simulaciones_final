# Modelos y Simulación

## Unidad I – Modelos en el espacio de estado

### ¿Qué es un modelo?

Un **modelo** es una descripción analítica de un sistema, proceso o circuito determinado, formulada para realizar estudios sobre el comportamiento del mismo, bajo diferentes condiciones de operación o regímenes de funcionamiento. En estos distintos estudios o ensayos que se realizan, deben poder cuantificarse las variaciones de los parámetros establecidos, contemplando sus interrelaciones correspondientes.

Elaborar un modelo consiste en crear una **representación digital, lógica y matemática**, de un proceso o sistema, para poder ajustarlos (aprovechando las posibilidades de iterar operaciones).

### ¿Para qué se implementa un modelo?

Generalmente, un modelo se implementa para hacer experimentaciones en forma “abstraída” sobre un sistema, sin requerir realizarlas sobre el sistema real. Esto se debe a razones de **seguridad** (sistemas sobre los que no se puede probar en forma segura), **costo** (sistemas que requieren elementos/materiales/circunstancias costosas de generar) o **practicidad** (sistemas que requieren un gran esfuerzo para lograr ser fieles a lo “verdadero”). Muchas veces es inconveniente hacer pruebas en la realidad, especialmente cuando se desea estudiar su comportamiento bajo condiciones extremas.

### ¿De qué formas puede establecerse un modelo matemático?

Típicamente, un modelo matemático de un determinado sistema o proceso puede establecerse de tres formas diferentes:

| Característica | Ecuaciones Diferenciales de Equilibrio (E.D.) | Función de Transferencia (F. de T.) | Variables de Estado (Var. de Estado) |
| :--- | :--- | :--- | :--- |
| **Descripción** | • Ecuaciones matemáticas que relacionan una función con sus derivadas.<br>• Utilizadas para modelar sistemas dinámicos que cambian continuamente¹ con el tiempo.<br>• Método más tradicional y antiguo. | • Funciones que representan la relación entre la entrada y la salida de un sistema lineal e invariante en el tiempo, expresada en el dominio de la frecuencia. | • Conjunto de variables que describen completamente el estado de un sistema en un momento dado.<br>• Los modelos basados en ellas utilizan ecuaciones diferenciales para describir su evolución con el tiempo. |
| **Ventajas** | ✓ Permiten describir con precisión la dinámica de sistemas complejos.<br>✓ Aplicables a una amplia variedad de problemas. | ✓ Simplifican el análisis de sistemas lineales en el dominio de la frecuencia.<br>✓ Brindan información inmediata sobre el comportamiento del sistema en cuanto a su estabilidad. | ✓ Adecuadas tanto para sistemas lineales como no lineales, sin importar su complejidad.<br>✓ Ofrecen una descripción completa del sistema.<br>✓ Fáciles de traducir en forma algorítmica y ser simuladas. |
| **Desventajas** |  Limitaciones para sistemas no lineales (los cuales carecen de solución única).<br> Requieren un amplio conocimiento del sistema y de la matemática para ser formuladas.<br> Mayor complejidad y trabajo conforme mayor sea la complejidad del sistema. |  No aportan información respecto de la arquitectura interna ni de los parámetros característicos del sistema.<br> No son adecuadas para sistemas no lineales. |  Más complejas de formular y resolver que las funciones de transferencia.<br> Requieren un conocimiento detallado del sistema para identificar las más adecuadas. |

En función de todo lo expresado, el modelo que se estudiará predominantemente será aquel que se establece a partir de **variables de estado**.

> ¹ Un sistema **discreto** es aquel en el que las variables involucradas cambian instantáneamente en puntos separados de tiempo, mientras que, en un sistema **continuo**, las variables cambian continuamente con respecto al tiempo.

### ¿Qué es una simulación?

Una **simulación** es un modelo programable (generalmente, a través de un software) de un sistema o proceso, para poder realizar experimentos y mediciones sobre él, con el fin de analizar su comportamiento en distintas condiciones de operación.

De esa forma, “**simular**” es el proceso de diseñar y desarrollar dicha programación del modelo, aunque también puede referir, en un sentido más acotado, a la técnica numérica empleada para conducir experimentos sobre una computadora. Estos últimos deben involucrar descripciones matemáticas y estructuras lógicas que describan el comportamiento del sistema y sean comprensibles por la máquina.

A través de estos modelos informáticos, una simulación permite explorar escenarios hipotéticos, analizar el impacto de posibles cambios e identificar oportunidades de mejora y superación de estándares sobre los procesos y los sistemas representados; esto, incluso antes de la existencia, en la realidad, del sistema, y sin requerir interrumpir operaciones en curso.

### ¿Qué pasos deben seguirse para desarrollar una simulación?

Los pasos que deben tenerse en cuenta a la hora de desarrollar una simulación son los siguientes:

1.  **Definición del sistema o formulación del problema**:
    *   Realizar un análisis preliminar del sistema para conocer sus variables, las relaciones entre ellas y su interacción con otros sistemas.
    *   Evaluar las restricciones del sistema, las variables que interactúan, las medidas de efectividad y los resultados que se esperan obtener.

2.  **Formulación del modelo**:
    *   Definir y construir el modelo según los requerimientos del estudio a efectuar, tal que su formulación contenga y exprese todas las variables presentes y sus relaciones, para obtener los resultados deseados.
    *   Establecer las variables que forman parte del modelo y sus relaciones lógicas, describiendo en forma completa la operación del sistema (empleando, por ejemplo, diagramas de flujo).

3.  **Recolección de datos**:
    *   Definir con claridad y exactitud los datos que el modelo requerirá para producir los resultados deseados.
    *   Pueden obtenerse a partir de registros previos, opiniones de expertos e, incluso, la experimentación.

4.  **Implementación en software**:
    *   Implementar el modelo en un lenguaje de programación apropiado que permita su procesamiento en una computadora.
    *   Puede optarse por desarrollar el software requerido desde cero o adquirir un paquete preexistente para las necesidades de la simulación a realizar (software enlatado).

5.  **Validación**:
    *   Establecer posibles deficiencias en la formulación del modelo o insuficiencias en los datos recogidos.
    *   Comúnmente, un modelo suele validarse a partir de opiniones de expertos sobre los resultados de la simulación, la exactitud de las predicciones obtenidas, el éxito y fallo del modelo al aportarle datos que se saben correctos e incorrectos (respectivamente), y la aceptación y confianza (en términos tanto subjetivos como estadísticos) de parte del usuario que empleará los resultados de la simulación.

6.  **Experimentación**:
    *   Iniciar la operación con distintos datos y medir y registrar los resultados, bajo diferentes condiciones de funcionamiento.
    *   Analizar la sensibilidad de los distintos indicadores frente a las variaciones propuestas.

7.  **Interpretación**:
    *   Estudiar e interpretar los diversos resultados obtenidos, para posibilitar alguna toma de decisión respecto del sistema que ha sido modelado.
    *   Si bien la simulación provee información valiosa para optimizar los procesos y sistemas, las decisiones tomadas a partir de la misma siguen cayendo en manos de quienes, externamente, operan la simulación.

8.  **Documentación**:
    *   Elaborar la documentación técnica que exponga las conclusiones obtenidas, junto con su fundamentación respectiva.
    *   Elaborar la documentación de uso de la simulación, con toda la información necesaria para facilitar su aplicación a distintos usuarios futuros (manual de usuario).

### Análisis por variables de estado

La modelización en el **espacio de estados**, como se mencionó anteriormente, es un método para la creación de modelos que permite evaluar tanto sistemas lineales o no lineales, invariantes o variantes en el tiempo, con múltiples entradas y salidas (sistemas **MIMO**, o *Multiple Input Multiple Output*) o con entrada y salida única (sistemas **SISO**, o *Single Input Single Output*). Además de solucionar gran parte de los problemas antes descritos para los otros métodos (particularmente, el de E.D.), tiene la ventaja de ejecutarse en el dominio del tiempo y arrojar resultados fácilmente procesables utilizando software.

Esencialmente, el análisis por variables de estado busca desarrollar una técnica que permita determinar, analíticamente, el estado de un sistema.

#### Conceptos fundamentales del análisis por variables de estado

El análisis por variables de estado se sustenta en los siguientes conceptos fundamentales:

*   **Estado**: Comportamiento dinámico de un sistema en un instante de tiempo $t_0$ dado, tal que su conocimiento, junto con el de la entrada para todo $t \ge t_0$, determina las características principales del sistema. Estas características responden a una determinada distribución de energía acumulada en los elementos activos del mismo.
*   **Elemento activo**: Cualquier elemento almacenador de energía dentro del sistema en estudio.
*   **Espacio de estados**: Espacio $n$-dimensional definido por un sistema de coordenadas, donde cada eje corresponde a una variable de estado diferente. Cada punto en este espacio constituye una combinación única de valores de las variables de estado (es decir, un estado único), que a su vez corresponde a un instante determinado de tiempo en el modelo ($E_n(t_n)$ representa el estado del sistema en el instante $t_n$).
*   **Variables de estado**: Menor conjunto posible de parámetros que definen el estado del sistema en un instante de tiempo particular.
*   **Trayectoria de estado**: Sucesión de puntos correspondientes a diferentes estados del modelo, representados en el espacio de estados para distintos instantes.
*   **Vector de estado**: Representación vectorial de un estado determinado en un instante de tiempo particular; constituye el vector que une el origen del sistema de coordenadas con el punto de estado en el espacio.

Para un modelo con $n$ variables de estado, el vector de estado en un instante de tiempo determinado $t_i$ se representa:
$$
V_i = \begin{Bmatrix} a_i \\ b_i \\ \vdots \\ n_i \end{Bmatrix}
$$
donde, gráficamente, cada una de las $n$ variables conforma un eje en el espacio (constituyen una dimensión adicional), y su valor para un instante de tiempo $t$ cualquiera viene dado por su función respectiva:
$$
a=a(t) \implies a_i = a(t_i)
$$
$$
b=b(t) \implies b_i = b(t_i)
$$
$$
\vdots
$$
$$
n=n(t) \implies n_i = n(t_i)
$$
y el vector $V_i$ es aquel que une el origen del espacio de estados con el punto $(a_i, b_i, \dots, n_i)$ (coordenadas de estado para $t_i$ o $E_i$).

#### Orden del sistema

Es la cantidad de elementos almacenadores de energía que posee el sistema, equivalente al número $n$ de variables de estado (las cuales se eligen en función de los elementos activos). Coincide con el orden de la ecuación diferencial de equilibrio del sistema en la representación por E.D (un sistema de orden $n$ tendrá como ecuación de equilibrio a una E.D de $n$-ésimo orden y poseerá $n$ elementos activos o almacenadores de energía).

Cabe destacar que, si la cantidad de variables de estado es mayor a 3, ya no es posible representar el modelo en un plano o espacio y se debe recurrir a un hiperespacio en forma de representación estadística.

#### Descripción mediante variables de estado

Al intentar modelar un sistema determinado con cierto grado de complejidad, existirá más de un posible grupo de variables de estado que lo describan. Cuando se pretende determinar qué variables son más apropiadas para esta representación, es necesario tener en cuenta que el conjunto elegido debe permitir calcular la cantidad de energía acumulada en cada uno de los elementos activos del sistema en cualquier instante, conocido el valor de todas las variables.

Esta descripción del sistema, como cabría esperar, no es estática; dentro de un sistema dinámico, a medida que transcurre del tiempo, los valores de las variables de estado sufrirán variaciones (como resultado de la variación de la energía contenida en los elementos activos), provocando un desplazamiento del punto de estado $E$. Como se mencionó anteriormente, este recorrido geométrico producido se denomina **trayectoria de estado**.

Particularmente, en un sistema sin fuentes ni generadores de energía, se denominará **punto de equilibrio**, **punto crítico** o **punto singular** a aquel en el cual todas las derivadas de las variables de estado respecto del tiempo $t$ sean simultáneamente nulas, lo cual indica que, llegado el modelo a ese estado, no habrá nuevas variaciones de sus valores a excepción de que se introduzca una perturbación externa.

Los puntos de equilibrio corresponden a condiciones estacionarias del sistema, y se clasifican en **estables** e **inestables**. Se habla de un punto crítico estable cuando, al producirse una perturbación en el sistema y, como resultado, un ligero desplazamiento del vector de estado $V$ respecto del mismo, las mismas condiciones del sistema generan una reacción que tiende a retornarlo al punto de equilibrio; por el contrario, hablamos de un punto inestable si la perturbación lleva a que el sistema tienda a alejar al vector cada vez más del punto de equilibrio, sin retornarlo al mismo. En un sistema lineal sin fuentes, el único punto de equilibrio existente es el origen del sistema de coordenadas, mientras que en los sistemas no lineales puede existir más de un punto de equilibrio.

### Obtención de las ecuaciones de estado

Las **ecuaciones de estado** son ecuaciones matemáticas que describen la evolución de las variables de estado de un sistema dinámico a lo largo del tiempo, y facilitan la predicción de cómo variará el estado del sistema en respuesta a entradas y condiciones iniciales diferentes. Dentro del análisis de variables de estado, determinar estas ecuaciones trae aparejado una serie de beneficios:

*   Permiten extraer conclusiones incluso antes de su resolución, por la simple examinación de sus propiedades y morfología.
*   Son aplicables a sistemas de orden superior y a sistemas no lineales (SNL).
*   Posibilitan el desarrollo de métodos de resolución algorítmicos implementables en software para la búsqueda de soluciones.

Usualmente, las ecuaciones de estado se expresan colocando en el primer miembro la derivada de sólo una de las variables de estado, mientras que en el segundo miembro se desarrolla la formulación que contiene al resto de las variables de estado, las fuentes y los generadores; en este segundo miembro, no debe aparecer ninguna derivada.

El vector de estado tendrá por componentes a las $n$ variables de estado, definiendo unívocamente el estado del sistema. De esta forma, la ecuación general de estado del sistema de orden $n$ quedará definida por un conjunto de ecuaciones diferenciales lineales que describen al sistema.

Planteando el desarrollo teórico necesario para obtener las ecuaciones de estado de un sistema SISO lineal con $n$ variables de estado, donde $x_i(t)$ representará el valor de la $i$-ésima variable de estado respecto al tiempo $t$, $y(t)$ la salida del sistema respecto al tiempo, y $u(t)$ la entrada, señal de entrada o referencia del mismo respecto al tiempo:

$$
x_1(t) = y(t)
$$
$$
x_2(t) = \frac{dy(t)}{dt}
$$
$$
x_3(t) = \frac{d^2y(t)}{dt^2}
$$
$$
\vdots
$$
$$
x_n(t) = \frac{d^{n-1}y(t)}{dt^{n-1}}
$$

Se define la ecuación de la primera variable de estado $x_1(t)$ como igual a la ecuación de salida $y(t)$, que representará lo que se esperaría obtener del sistema para cada instante de tiempo, y cada una de las variables de estado subsiguientes como la derivada de orden $i-1$ de dicha salida. Observando que cada variable de estado es, entonces, equivalente a la derivada de la variable anterior (con excepción de la primera), y simplificando a través de la notación:

$$
\dot{x}_i = \frac{dx_i(t)}{dt}
$$

las ecuaciones de estado pueden representarse como:
$$
x_1(t) = y(t)
$$
$$
x_2(t) = \dot{x}_1
$$
$$
x_3(t) = \dot{x}_2
$$
$$
\vdots
$$
$$
x_n(t) = \dot{x}_{n-1}
$$

y, además, se sabe que, por ser un sistema lineal, la ecuación diferencial original del mismo se expresa, en forma extendida, como:

$$
u(t) = \frac{d^ny(t)}{dt^n} + a_{n-1}\frac{d^{n-1}y(t)}{dt^{n-1}} + a_{n-2}\frac{d^{n-2}y(t)}{dt^{n-2}} + \dots + a_1\frac{dy(t)}{dt} + a_0y(t)
$$

tal que la ecuación de la derivada de la última variable de estado $(\dot{x}_n)$ es igual a $\frac{d^ny(t)}{dt^n}$, y, partiendo del procedimiento anteriormente realizado, puede despejarse para ser expresada, en forma compactada:

$$
\dot{x}_n = -a_{n-1}\dot{x}_{n-1} - a_{n-2}\dot{x}_{n-2} - \dots - a_1\dot{x}_1 - a_0x_1 + u(t)
$$
$$
\dot{x}_n = -a_{n-1}x_n - a_{n-2}x_{n-1} - \dots - a_1x_2 - a_0x_1 + u(t)
$$

De esta forma, el sistema de ecuaciones de estado para nuestro modelo SISO puede notarse, matricialmente, de la siguiente forma:

$$
\begin{Bmatrix} \dot{x}_1 \\ \dot{x}_2 \\ \vdots \\ \dot{x}_{n-1} \\ \dot{x}_n \end{Bmatrix} =
\begin{bmatrix}
0 & 1 & 0 & \cdots & 0 & 0 \\
0 & 0 & 1 & \cdots & 0 & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & 0 & \cdots & 0 & 1 \\
-a_0 & -a_1 & -a_2 & \cdots & -a_{n-2} & -a_{n-1}
\end{bmatrix}
\begin{Bmatrix} x_1 \\ x_2 \\ \vdots \\ x_{n-1} \\ x_n \end{Bmatrix} +
\begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ 1 \end{pmatrix} u(t)
$$

y, de manera compacta:
$$
\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) \quad \text{o} \quad \dot{\mathbf{x}} = \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{u}
$$

donde $\dot{\mathbf{x}}$ es el vector de las derivadas de las variables de estado; $\mathbf{A}$ es una matriz cuadrada de orden $n \times n$ y se denomina **matriz de estado** o de coeficientes; $\mathbf{x}$ es el **vector de estado**; y $\mathbf{B}$ es una matriz columna de orden $n \times 1$ denominada **matriz de control** o de entrada. Como ya se mencionó previamente, $u(t)$ conforma la señal de entrada, la cual es una magnitud escalar para sistemas SISO y una matriz para sistemas MIMO.

### Obtención de la ecuación de salida

La **ecuación de salida** es una ecuación algebraica que relaciona las variables de estado $x_i$ y la entrada $u(t)$ de nuestro sistema con la salida $y(t)$ del mismo. Proveyendo una entrada y un conjunto de valores específicos para las variables de estado, nos indicará cuál es la salida que el sistema arrojaría.

Continuando con el desarrollo teórico previo, si se considera que el vector de estado $\mathbf{x}$ contiene la salida esperada $y(t)$ y sus primeras $n-1$ derivadas, podríamos expresar la ecuación de salida, en forma matricial, como:

$$
y(t) = \mathbf{C}\mathbf{x}(t)
$$

donde $\mathbf{C}$ se conoce como la **matriz de salida**, la cual contiene los parámetros vinculados a la respuesta final del sistema y determina qué es lo que, en última instancia, se obtiene.

Cuando se habla de un sistema con **proalimentación** (*feedforward*), la ecuación de salida adopta una forma más completa:

$$
y(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)
$$

donde $\mathbf{D}$ se denomina **matriz de proalimentación** o alimentación directa, la cual envía directamente un término proporcional a la entrada hacia la salida (sin pasar por el sistema). En aquellos casos donde no existe proalimentación, el término $\mathbf{D}\mathbf{u}(t)$ puede obviarse, puesto que $\mathbf{D}$ es equivalente a la matriz nula. Si se considera esta adición, la ecuación resultante puede representarse a través del siguiente esquema:

(El esquema representa un diagrama de bloques donde la entrada $u(t)$ se multiplica por $B$ y se suma a la señal $A \cdot x(t)$. El resultado, $\dot{x}(t)$, se integra para obtener $x(t)$. A su vez, $x(t)$ se multiplica por $C$ y se suma con la señal $D \cdot u(t)$ para producir la salida $y(t)$.)

### Interconexión de sistemas lineales

Si se considera el caso en el que se interconectan dos o más dispositivos o sistemas lineales distintos entre sí, cada uno con sus propios parámetros y vector de estado, la interconexión puede ser tratada como un sistema único. Este nuevo sistema, por lo tanto, tendrá su propio vector de estado, el cual puede obtenerse mediante la que se denomina **técnica de aumento de estado**. Es importante destacar que el estado aumentado es teórico (constituye una construcción elaborada para resolver, de esta forma, el problema) y se define en función de los parámetros de los subsistemas constituyentes.

Para encontrarlo, los parámetros de cada uno de los subsistemas componentes de la interconexión deberán ser adecuadamente combinados, dependiendo del modo de conexión empleado entre ellos. Por simplicidad, las demostraciones a desarrollar se analizarán sobre un conjunto de dos subsistemas, aunque son extensibles a interconexiones de $n$ subsistemas.

#### Ecuaciones para la interconexión en serie

En una interconexión en **serie** o **cascada**, los subsistemas involucrados componen una cadena, donde la salida $y_i(t)$ del $i$-ésimo dispositivo vinculado ingresa como la entrada $u_{i+1}(t)$ del dispositivo siguiente. Para una interconexión de 2 subsistemas, el esquema que modeliza la situación es el siguiente:
`u1(t) -> [S1] -> y1(t) = u2(t) -> [S2] -> y2(t)`

De esta manera, el vector de estado aumentado $\mathbf{x}$ que se buscará construir será el resultado de obtener y reunir todas las componentes de estado (vectores $\mathbf{x}_1(t)$ y $\mathbf{x}_2(t)$) aportadas por los distintos subsistemas:

$$
\mathbf{x} = \begin{Bmatrix} \mathbf{x}_1(t) \\ \mathbf{x}_2(t) \end{Bmatrix}
$$

Primeramente, las ecuaciones diferenciales de estado y de salida para $S_1$ y $S_2$, en forma individual, serán equivalentes a²:

$$
S_1: \begin{cases} \dot{\mathbf{x}}_1 = \mathbf{A}_1\mathbf{x}_1 + \mathbf{B}_1\mathbf{u}_1 \\ \mathbf{y}_1 = \mathbf{C}_1\mathbf{x}_1 + \mathbf{D}_1\mathbf{u}_1 \end{cases}
\quad
S_2: \begin{cases} \dot{\mathbf{x}}_2 = \mathbf{A}_2\mathbf{x}_2 + \mathbf{B}_2\mathbf{u}_2 \\ \mathbf{y}_2 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{u}_2 \end{cases}
$$

> ² Se debe tener en cuenta que la notación simplificada solo se utiliza por el hecho de que todos los parámetros dependen del tiempo $t$, lo cual siempre ocurrirá, con excepción de sistemas invariantes en el tiempo.

Puesto que la interconexión entre subsistemas es de tipo serie, se tiene que la salida de $S_1$ constituye la entrada de $S_2$:
$$
\mathbf{y}_1 = \mathbf{u}_2
$$
Luego, se puede reescribir la ecuación de estado de $S_2$ como:
$$
\dot{\mathbf{x}}_2 = \mathbf{A}_2\mathbf{x}_2 + \mathbf{B}_2\mathbf{y}_1 = \mathbf{A}_2\mathbf{x}_2 + \mathbf{B}_2(\mathbf{C}_1\mathbf{x}_1 + \mathbf{D}_1\mathbf{u}_1)
$$
de lo que, aplicando propiedad distributiva, se puede plantear el par de ecuaciones diferenciales de estado de $S_1$ y $S_2$ como:
$$
\begin{cases}
\dot{\mathbf{x}}_1 = \mathbf{A}_1\mathbf{x}_1 + \mathbf{B}_1\mathbf{u}_1 \\
\dot{\mathbf{x}}_2 = \mathbf{B}_2\mathbf{C}_1\mathbf{x}_1 + \mathbf{A}_2\mathbf{x}_2 + \mathbf{B}_2\mathbf{D}_1\mathbf{u}_1
\end{cases}
$$
y, en forma matricial:
$$
\begin{Bmatrix} \dot{\mathbf{x}}_1 \\ \dot{\mathbf{x}}_2 \end{Bmatrix} =
\begin{bmatrix} \mathbf{A}_1 & \mathbf{0} \\ \mathbf{B}_2\mathbf{C}_1 & \mathbf{A}_2 \end{bmatrix}
\begin{Bmatrix} \mathbf{x}_1 \\ \mathbf{x}_2 \end{Bmatrix} +
\begin{pmatrix} \mathbf{B}_1 \\ \mathbf{B}_2\mathbf{D}_1 \end{pmatrix} \mathbf{u}_1(t)
$$
Que es la compactación de la ecuación de estado aumentado del sistema resultante.

En el caso de la ecuación de salida, se parte de la salida de $S_2$ ($y_2(t)$), puesto que representa lo obtenido de todo el sistema interconectado. Recordando que $y_1 = u_2$:
$$
\mathbf{y}_2 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{u}_2 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{y}_1 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2(\mathbf{C}_1\mathbf{x}_1 + \mathbf{D}_1\mathbf{u}_1)
$$
de lo que se obtiene:
$$
\mathbf{y}_2 = \mathbf{D}_2\mathbf{C}_1\mathbf{x}_1 + \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{D}_1\mathbf{u}_1
$$
y, matricialmente:
$$
\mathbf{y}_2 = \begin{pmatrix} \mathbf{D}_2\mathbf{C}_1 & \mathbf{C}_2 \end{pmatrix}
\begin{Bmatrix} \mathbf{x}_1 \\ \mathbf{x}_2 \end{Bmatrix} +
(\mathbf{D}_2\mathbf{D}_1) \mathbf{u}_1
$$
que es la compactación de la ecuación de salida de un sistema resultante de la interconexión serie.

#### Función de transferencia equivalente en la interconexión serie

Para sistemas lineales invariantes en el tiempo (LTI) interconectados en serie, se puede recurrir a la obtención de las funciones de transferencia (para sistemas SISO).

Considerando que el desarrollo corresponde a una entrada $u_1(t)$ y una salida $y_2(t)$ escalares y únicas, se trabajará con dos funciones de transferencia $H_1(s)$ y $H_2(s)$, donde, aplicando las respectivas transformadas de Laplace³ a todas las señales, se obtiene:
$$
Y_1(s) = H_1(s) U_1(s)
$$
$$
Y_2(s) = H_2(s) U_2(s)
$$
y, por ser una interconexión serie:
$$
Y_1(s) = U_2(s)
$$
Por consiguiente, la salida de $S_2$ puede reescribirse como:
$$
Y_2(s) = H_2(s) Y_1(s) = H_2(s) H_1(s) U_1(s)
$$
Y la función de transferencia equivalente será la salida total del conjunto $Y_2(s)$ dividida por la entrada total $U_1(s)$ del mismo, es decir:
$$
H(s) = \frac{Y_2(s)}{U_1(s)} = H_2(s) H_1(s)
$$
> ³ Una explicación más detallada de la transformada de Laplace se ofrece luego del apartado de “Resolución del modelo de estado”.

#### Ecuaciones para la interconexión realimentada

En una interconexión **realimentada**, los subsistemas involucrados componen un lazo cerrado, donde la salida de un bloque puede afectar a su propia entrada a través de otro bloque. Para una interconexión de 2 subsistemas con realimentación negativa:
`r(t) -> (+) -> e(t)=u1(t) -> [S1] -> y1(t)=u2(t) -> [S2] -> y2(t) -> (-) ->` (la salida y2(t) se resta de la referencia r(t)).

Individualmente, las ecuaciones para $S_1$ y $S_2$ son:
$$
S_1: \begin{cases} \dot{\mathbf{x}}_1 = \mathbf{A}_1\mathbf{x}_1 + \mathbf{B}_1\mathbf{u}_1 \\ \mathbf{y}_1 = \mathbf{C}_1\mathbf{x}_1 \end{cases}
\quad
S_2: \begin{cases} \dot{\mathbf{x}}_2 = \mathbf{A}_2\mathbf{x}_2 + \mathbf{B}_2\mathbf{u}_2 \\ \mathbf{y}_2 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{u}_2 \end{cases}
$$
donde $S_1$ se adopta sin proalimentación ($\mathbf{D}_1=0$) para evitar ecuaciones implícitas.

Considerando las relaciones de la realimentación:
$$
\mathbf{u}_1 = \mathbf{r} - \mathbf{y}_2 \quad \text{y} \quad \mathbf{y}_1 = \mathbf{u}_2
$$
El sistema de ecuaciones puede reexpresarse como:
$$
\begin{cases}
\dot{\mathbf{x}}_1 = \mathbf{A}_1\mathbf{x}_1 + \mathbf{B}_1(\mathbf{r} - \mathbf{y}_2) \\
\dot{\mathbf{x}}_2 = \mathbf{A}_2\mathbf{x}_2 + \mathbf{B}_2\mathbf{y}_1
\end{cases}
$$
Sustituyendo $\mathbf{y}_1$ y $\mathbf{y}_2$ por sus expresiones en función de los estados:
$$
\mathbf{y}_1 = \mathbf{C}_1\mathbf{x}_1
$$
$$
\mathbf{y}_2 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{u}_2 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{y}_1 = \mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{C}_1\mathbf{x}_1
$$
Reemplazando en las ecuaciones de estado:
$$
\begin{cases}
\dot{\mathbf{x}}_1 = \mathbf{A}_1\mathbf{x}_1 + \mathbf{B}_1(\mathbf{r} - (\mathbf{C}_2\mathbf{x}_2 + \mathbf{D}_2\mathbf{C}_1\mathbf{x}_1)) \\
\dot{\mathbf{x}}_2 = \mathbf{A}_2\mathbf{x}_2 + \mathbf{B}_2(\mathbf{C}_1\mathbf{x}_1)
\end{cases}
$$
Agrupando términos:
$$
\begin{cases}
\dot{\mathbf{x}}_1 = (\mathbf{A}_1 - \mathbf{B}_1\mathbf{D}_2\mathbf{C}_1)\mathbf{x}_1 - \mathbf{B}_1\mathbf{C}_2\mathbf{x}_2 + \mathbf{B}_1\mathbf{r} \\
\dot{\mathbf{x}}_2 = \mathbf{B}_2\mathbf{C}_1\mathbf{x}_1 + \mathbf{A}_2\mathbf{x}_2
\end{cases}
$$
Y en forma matricial:
$$
\begin{Bmatrix} \dot{\mathbf{x}}_1 \\ \dot{\mathbf{x}}_2 \end{Bmatrix} =
\begin{bmatrix} \mathbf{A}_1 - \mathbf{B}_1\mathbf{D}_2\mathbf{C}_1 & -\mathbf{B}_1\mathbf{C}_2 \\ \mathbf{B}_2\mathbf{C}_1 & \mathbf{A}_2 \end{bmatrix}
\begin{Bmatrix} \mathbf{x}_1 \\ \mathbf{x}_2 \end{Bmatrix} +
\begin{pmatrix} \mathbf{B}_1 \\ \mathbf{0} \end{pmatrix} \mathbf{r}(t)
$$
Considerando que $\mathbf{y}_1(t)$ es la salida del conjunto:
$$
\mathbf{y}_1 = \begin{pmatrix} \mathbf{C}_1 & \mathbf{0} \end{pmatrix}
\begin{Bmatrix} \mathbf{x}_1 \\ \mathbf{x}_2 \end{Bmatrix}
$$

#### Función de transferencia equivalente en la interconexión realimentada

Para un sistema LTI realimentado (SISO), en el dominio de Laplace:
$$
Y_1(s) = H_1(s) U_1(s)
$$
$$
Y_2(s) = H_2(s) U_2(s)
$$
Con las relaciones de la realimentación:
$$
U_1(s) = R(s) - Y_2(s) \quad \text{y} \quad U_2(s) = Y_1(s)
$$
Sustituyendo:
$$
Y_1(s) = H_1(s) (R(s) - Y_2(s)) = H_1(s) (R(s) - H_2(s) U_2(s)) = H_1(s) (R(s) - H_2(s) Y_1(s))
$$
Operando matemáticamente:
$$
Y_1(s) = H_1(s)R(s) - H_1(s)H_2(s)Y_1(s)
$$
$$
Y_1(s) + H_1(s)H_2(s)Y_1(s) = H_1(s)R(s)
$$
$$
(I + H_1(s)H_2(s)) Y_1(s) = H_1(s)R(s)
$$
Donde $I$ es la matriz identidad (o 1 en el caso SISO). La función de transferencia equivalente $H(s) = Y_1(s)/R(s)$ es:
$$
H(s) = (I + H_1(s)H_2(s))^{-1} H_1(s)
$$

### Resolución del modelo de estado

Para lograr resolver la ecuación diferencial de estado:
$$
\dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t)
$$
se debe encontrar la función $\mathbf{x}(t)$ o vector de estado que satisface la igualdad.

#### Transformada y antitransformada de Laplace

La **transformación de Laplace** es una operación que convierte a una función existente en el dominio del tiempo, $f(t)$, a una en el dominio de una variable compleja $s = \sigma + j\omega$. Esta nueva función $F(s)$ se conoce como transformada de Laplace:
$$
\mathcal{L}[f(t)] = F(s) = \int_0^\infty f(t)e^{-st} dt
$$
La relación es biunívoca, y la operación inversa se denomina **antitransformación de Laplace**:
$$
\mathcal{L}^{-1}[F(s)] = f(t) = \frac{1}{2\pi j} \int_{a-j\infty}^{a+j\infty} F(s)e^{st} ds
$$

#### Resolución operacional (mediante Laplace)

Partiendo de la ecuación de estado, se aplica la transformada de Laplace miembro a miembro:
$$
\mathcal{L}[\dot{\mathbf{x}}] = \mathcal{L}[\mathbf{A}\mathbf{x}] + \mathcal{L}[\mathbf{B}\mathbf{u}]
$$
Utilizando la propiedad de la derivada, $\mathcal{L}[f'(t)] = sF(s) - f(0)$:
$$
s\mathbf{X}(s) - \mathbf{x}(0) = \mathbf{A}\mathbf{X}(s) + \mathbf{B}\mathbf{U}(s)
$$
Trabajando algebraicamente:
$$
s\mathbf{X}(s) - \mathbf{A}\mathbf{X}(s) = \mathbf{x}(0) + \mathbf{B}\mathbf{U}(s)
$$
$$
(s\mathbf{I} - \mathbf{A})\mathbf{X}(s) = \mathbf{x}(0) + \mathbf{B}\mathbf{U}(s)
$$
La matriz $(s\mathbf{I} - \mathbf{A})$ se denomina **matriz característica** del sistema. Premultiplicando por su inversa:
$$
\mathbf{X}(s) = (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{x}(0) + (s\mathbf{I} - \mathbf{A})^{-1}\mathbf{B}\mathbf{U}(s)
$$
Aplicando la antitransformada de Laplace a $\mathbf{X}(s)$ se obtiene la solución en el dominio del tiempo $\mathbf{x}(t)$.

#### Resolución escalar

La solución de la ecuación diferencial vectorial $\dot{\mathbf{x}} = \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{u}$ es análoga a la de la ecuación escalar $\dot{x} = ax + bu$. La solución de esta última es la suma de una solución homogénea ($u=0$) y una particular.

La solución homogénea de $\dot{x}_h = ax_h$ con condición inicial $x(0) = x_0$ es:
$$
x_h(t) = x_0 e^{at}
$$
Por analogía, la solución homogénea de la ecuación vectorial $\dot{\mathbf{x}}_h = \mathbf{A}\mathbf{x}_h$ con $\mathbf{x}(0) = \mathbf{x}_0$ es:
$$
\mathbf{x}_h(t) = e^{\mathbf{A}t} \mathbf{x}_0
$$
donde $e^{\mathbf{A}t}$ es la **matriz de transición de estado** o **matriz fundamental**, $\Phi(t)$, definida por la serie de potencias:
$$
e^{\mathbf{A}t} = \Phi(t) = \mathbf{I} + \mathbf{A}t + \frac{\mathbf{A}^2t^2}{2!} + \frac{\mathbf{A}^3t^3}{3!} + \dots
$$
La solución particular se obtiene mediante la integral de convolución. La solución general completa en el dominio del tiempo es:
$$
\mathbf{x}(t) = e^{\mathbf{A}t}\mathbf{x}(0) + \int_0^t e^{\mathbf{A}(t-\tau)} \mathbf{B}\mathbf{u}(\tau) d\tau
$$
El primer término es la **respuesta de entrada cero** (depende del estado inicial) y el segundo es la **respuesta de estado cero** (depende de la entrada).

---

## Unidad III – Sistemas no lineales

### Comportamiento no lineal

Un sistema se denomina **lineal** si cumple con dos propiedades fundamentales:
*   **Principio de superposición**: La respuesta a una suma de entradas es la suma de las respuestas a cada entrada individual.
*   **Principio de homogeneidad**: La respuesta a una entrada escalada es la respuesta original escalada por el mismo factor.

Un **sistema no lineal** es aquel que no cumple con, al menos, una de estas propiedades. Se caracterizan por:
*   "Crean" frecuencias: la salida puede contener frecuencias que no estaban en la entrada.
*   Sus parámetros varían con el nivel de excitación.
*   Pueden presentar oscilaciones subarmónicas y auto-mantenidas.

### Metodología de análisis

No existe un método general para analizar todos los sistemas no lineales. Las técnicas se basan en aproximaciones y linealizaciones válidas bajo condiciones limitadas. Los métodos principales son:
1.  **Función descriptiva**.
2.  **Plano de fase**.
3.  **Método de Lyapunov**.
4.  **Simulaciones por software**.

### Método de plano de fase

Es un procedimiento de análisis gráfico que ofrece información sobre la respuesta temporal y la estabilidad del sistema. Se aplica a sistemas de 1er y 2do orden.

En el **plano de fase**, cada eje corresponde a una variable de estado. La evolución del sistema en el tiempo traza una curva llamada **trayectoria**. El conjunto de todas las trayectorias posibles es el **diagrama de fase** o **retrato fásico**.

#### Punto crítico en los sistemas autónomos

Un **punto crítico** (o de equilibrio) es un punto en el espacio de estado donde las derivadas de todas las variables de estado son cero. En estos puntos, el sistema permanece estacionario a menos que sea perturbado.
Las trayectorias se aproximan o alejan de los puntos críticos, pero no pueden cruzarlos.

#### Clasificación de puntos críticos

Para un sistema lineal de 2do orden $\dot{\mathbf{x}} = \mathbf{A}\mathbf{x}$, los puntos críticos se clasifican según las raíces (valores propios) de la matriz $\mathbf{A}$, que se obtienen de la ecuación característica $\det(\lambda\mathbf{I} - \mathbf{A}) = 0$.

*   **Nodo**: Raíces reales del mismo signo.
    *   **Estable**: Ambas raíces negativas. Todas las trayectorias convergen al origen.
    *   **Inestable**: Ambas raíces positivas. Todas las trayectorias divergen del origen.
*   **Silla de montar**: Raíces reales de signos opuestos. Es siempre inestable. Las trayectorias se asemejan a hipérbolas.
*   **Foco (o espiral)**: Raíces complejas conjugadas con parte real no nula.
    *   **Estable**: Parte real negativa. Las trayectorias espirales convergen al origen.
    *   **Inestable**: Parte real positiva. Las trayectorias espirales divergen del origen.
*   **Centro**: Raíces imaginarias puras. El sistema es marginalmente estable. Las trayectorias son elipses cerradas alrededor del origen. Representa una oscilación sostenida.

### Método de Lyapunov

Este método analiza la estabilidad de sistemas no lineales cerca de un punto de equilibrio sin necesidad de resolver explícitamente las ecuaciones diferenciales. Es particularmente útil para sistemas **cuasilineales**:
$$
\begin{cases}
\dot{x} = ax + by + P(x,y) \\
\dot{y} = cx + dy + Q(x,y)
\end{cases}
$$
donde $P(x,y)$ y $Q(x,y)$ son términos no lineales. Si estos términos son "pequeños" cerca del origen (el punto de equilibrio), el comportamiento del sistema no lineal es similar al de su aproximación lineal.

La condición de Lyapunov establece que esto es válido si $P$ y $Q$ tienden a cero más rápido que $\sqrt{x^2+y^2}$ cuando $(x,y) \to (0,0)$.

### Modelos poblacionales

Son modelos matemáticos que describen la interacción entre poblaciones de diferentes especies.

#### Modelo depredador-presa (Lotka-Volterra)

Describe la dinámica entre una población de presas $x(t)$ y una de depredadores $y(t)$. Las ecuaciones de Lotka-Volterra son:
$$
\begin{cases}
\frac{dx}{dt} = ax - bxy & \text{(presas)} \\
\frac{dy}{dt} = cxy - ky & \text{(depredadores)}
\end{cases}
$$
*   $a$: tasa de crecimiento de las presas.
*   $b$: tasa de depredación.
*   $c$: eficiencia de los depredadores para convertir presas en nuevos depredadores.
*   $k$: tasa de mortalidad de los depredadores.

Este sistema no lineal tiene dos puntos de equilibrio:
1.  $(0,0)$: Extinción de ambas especies.
2.  $(k/c, a/b)$: Coexistencia.

El análisis de linealización alrededor del punto de coexistencia muestra que es un **centro**, lo que implica que las poblaciones oscilan cíclicamente. Las trayectorias en el plano de fase son curvas cerradas alrededor del punto de coexistencia.

#### Modelo de especies en competencia

Describe la dinámica entre dos especies $x(t)$ e $y(t)$ que compiten por los mismos recursos limitados.
$$
\begin{cases}
\frac{dx}{dt} = ax - bxy \\
\frac{dy}{dt} = ky - cxy
\end{cases}
$$
En este caso, el término de interacción $-bxy$ y $-cxy$ es perjudicial para ambas especies. El análisis de su punto de equilibrio de coexistencia revela que es un **punto de silla**, lo que implica que la coexistencia es inestable. Dependiendo de las condiciones iniciales, una especie terminará dominando y llevando a la otra a la extinción.

#### Modelo epidemiológico (SIR)

Modela la propagación de una enfermedad en una población, dividiéndola en tres compartimentos:
*   **S(t)**: Susceptibles (pueden contagiarse).
*   **I(t)**: Infectados (pueden transmitir la enfermedad).
*   **R(t)**: Recuperados (inmunes o fallecidos).

Las ecuaciones del modelo son:
$$
\begin{cases}
\frac{dS}{dt} = -aSI \\
\frac{dI}{dt} = aSI - bI \\
\frac{dR}{dt} = bI
\end{cases}
$$
*   $a$: tasa de infección.
*   $b$: tasa de recuperación/retiro.
El modelo predice el curso de una epidemia, mostrando un aumento en el número de infectados hasta alcanzar un pico, seguido de una disminución a medida que aumenta el número de recuperados y disminuye el de susceptibles.

---

## Unidad VI – Teoría del Caos

### Concepto de caos

El **caos determinista** se refiere al comportamiento complejo, aperiódico y aparentemente aleatorio que se observa en sistemas dinámicos deterministas (cuyas futuras evoluciones están completamente determinadas por sus condiciones iniciales, sin elementos de azar).

Una característica fundamental del caos es la **sensibilidad a las condiciones iniciales**, popularmente conocida como el **efecto mariposa**. Esto significa que dos trayectorias que comienzan infinitesimalmente cerca una de la otra divergirán exponencialmente con el tiempo, haciendo imposible la predicción a largo plazo.

### Atractores

Un **atractor** es un conjunto de estados hacia el cual un sistema tiende a evolucionar. En los sistemas caóticos, las trayectorias están confinadas a una región del espacio de fases, pero nunca se repiten exactamente ni se asientan en un punto fijo o una órbita periódica. A este tipo de atractor se le llama **atractor extraño**.

*   **Atractor de Lorenz**: Descubierto por Edward Lorenz, tiene una forma característica de mariposa y fue uno de los primeros ejemplos de un atractor extraño. Las trayectorias orbitan alrededor de dos puntos focales de manera impredecible.
*   **Atractor de Hénon**: Es otro atractor extraño clásico, generado por un mapa bidimensional simple. Se obtiene mediante operaciones de estiramiento y plegado del espacio de fases.

### Fractales

Un **fractal** es un objeto geométrico cuya estructura básica, fragmentada o irregular, se repite a diferentes escalas. La propiedad clave es la **autosimilaridad**: si se amplía una parte del fractal, se observa una réplica (aproximada o exacta) del todo.

La relación entre caos y fractales es profunda: los atractores extraños son fractales. La trayectoria de un sistema caótico, aunque contenida, tiene una longitud infinita y una estructura detallada en todas las escalas.

#### Prefractales
Son construcciones que muestran autosimilaridad en un número finito de iteraciones.
*   **Conjunto de Cantor**: Se crea eliminando repetidamente el tercio central de un segmento de línea.
*   **Curva de Koch**: Se genera reemplazando el tercio medio de un segmento por dos lados de un triángulo equilátero. Su longitud es infinita.
*   **Tamiz de Sierpinski**: Se construye eliminando repetidamente el triángulo central de un triángulo más grande.

#### Dimensión fractal

Es una medida que cuantifica la complejidad de un fractal, indicando cómo llena el espacio. A diferencia de la dimensión topológica (que es 1 para una línea, 2 para una superficie), la dimensión fractal puede ser un número no entero.

Para la **curva de Koch**, si en cada paso se reemplaza 1 segmento de longitud $L$ por 4 segmentos de longitud $L/3$, su dimensión fractal $D$ satisface la relación $4 \times (1/3)^D = 1$. Resolviendo para $D$:
$$
4 = 3^D
$$
$$
\log(4) = D \cdot \log(3)
$$
$$
D = \frac{\log(4)}{\log(3)} \approx 1.2618
$$
Esto indica que la curva es más compleja que una línea unidimensional, pero no llena un plano bidimensional.