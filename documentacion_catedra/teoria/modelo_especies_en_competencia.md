# Modelos Poblacionales de Lotka-Volterra

## 1. Modelo de Especies en Competencia

El modelo de especies en competencia, también conocido como modelo de especies competitivas, forma parte de los modelos poblacionales clásicos de Lotka-Volterra. Su objetivo es analizar la evolución temporal de dos poblaciones de especies diferentes que compiten por un recurso escaso, así como la forma en que interactúan entre sí.

A diferencia del modelo depredador-presa, en este caso el comportamiento de las poblaciones no implica que una sea depredadora de la otra. Se trata de dos especies independientes que compiten por el mismo recurso o disponibilidad, como alimento, espacio, luz, agua o hábitat.

Planteado de esta manera, la presencia de cada población influye negativamente en la evolución de la otra, ya que la condición del modelo es que el alimento o el espacio son limitados para ambas.

Una situación típica podría ser la de dos poblaciones de hongos o microorganismos que parasitan simultáneamente a un mismo animal o planta, por ejemplo, un molusco. Como la clave del modelo es que el alimento es limitado para que lo compartan ambas especies parásitas, no pueden coexistir ambas en crecimiento simultáneo e indefinido; si una crece, la otra debe necesariamente decrecer.

Las poblaciones se designan como $x(t)$ e $y(t)$, representando a las especies que compiten en un mismo entorno por un único alimento. Las ecuaciones diferenciales (ED) del modelo son:

$$
\begin{cases}
x' = ax - bxy \\
y' = ky - cxy
\end{cases}
\qquad \text{①}
$$

Los términos no lineales se restan en ambas ecuaciones, indicando la reducción de población que implica para cada especie la competencia con la otra. En este caso, los términos no lineales no representan encuentros, como en el modelo depredador-presa, sino que resumen la influencia o presencia negativa de la otra especie en el mismo hábitat.

Las especies parásitas que actúan sobre el molusco no se depredan entre sí, pero ambas se alimentan de su organismo, por lo tanto, disponen de una misma fuente de alimento que es limitada. Otro ejemplo simple podría ser el de dos poblaciones de peces diferentes en un estanque que no son hostiles entre sí, pero comparten un mismo alimento escaso.

Las restantes consideraciones generales responden a la misma filosofía que en el modelo depredador-presa: no hay influencia de factores externos que puedan diezmar las poblaciones, y ambas son crecientes mientras dispongan de alimento suficiente.

Al igual que en el modelo depredador-presa, existen dos puntos críticos: el origen $(x=0, y=0)$ y el punto $(x=k/c; y=a/b)$. Para cualquiera de estos dos pares de valores, las ecuaciones ① se anulan simultáneamente:

**Para $(0,0)$:**
$$
\begin{cases}
x' = a(0) - b(0)(0) = 0 \\
y' = k(0) - c(0)(0) = 0
\end{cases}
$$

**Para $(k/c, a/b)$:**
$$
\begin{cases}
x' = a(k/c) - b(k/c)(a/b) = ak/c - ak/c = 0 \\
y' = k(a/b) - c(k/c)(a/b) = ka/b - ka/b = 0
\end{cases}
$$

Si se traslada el origen de un sistema de coordenadas auxiliar hacia este segundo punto crítico y se definen las coordenadas traslacionales:

$$
X = x - \frac{k}{c}
$$

$$
Y = y - \frac{a}{b}
$$

Luego, las ecuaciones referidas al sistema trasladado quedan:

$$
X' = -b\frac{k}{c}Y - bXY
$$

$$
Y' = -c\frac{a}{b}X - cXY
$$

Este es un sistema cuasilineal, cuyo sistema lineal asociado, conforme a las condiciones de Lyapunov, es:

$$
\begin{cases}
X' = -\frac{bk}{c}Y \\
Y' = -\frac{ca}{b}X
\end{cases}
\qquad \text{②}
$$

Por lo tanto, la ecuación característica resulta:

$$
\text{det} ([A] - \lambda I) = 0
$$

$$
\text{det} \left( \begin{bmatrix} 0 & -\frac{bk}{c} \\ -\frac{ca}{b} & 0 \end{bmatrix} - \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix} \right) = 0
$$

$$
\text{det} \begin{bmatrix} -\lambda & -\frac{bk}{c} \\ -\frac{ca}{b} & -\lambda \end{bmatrix} = \lambda^2 - \left(-\frac{bk}{c}\right)\left(-\frac{ca}{b}\right) = 0
$$

$$
\lambda^2 - ak = 0
$$

Y de aquí las raíces son:

$$
\lambda_{1,2} = \pm \sqrt{ak}
$$

Estas son dos raíces reales iguales y de signo opuesto. En el plano complejo se verían así:

```
Imaginario
   ^
   |
   +----- +sqrt(ak) (real)
   |
---+---+----- Real
   |   0
   |
   +----- -sqrt(ak) (real)
   |
```

Esto significa que el punto crítico en el origen del sistema trasladado será un **punto Silla de Montar** o **punto Montura**, tanto para el sistema linealizado como para el sistema cuasilineal.

Igual que se había hecho antes, las soluciones para el sistema linealizado trasladado se pueden obtener a partir de las ecuaciones implícitas:

$$
\frac{dX}{dt} = -\frac{bk}{c}Y
$$

$$
\frac{dY}{dt} = -\frac{ca}{b}X
$$

De aquí, despejando:

$$
\frac{dX}{dY} = \frac{-\frac{bk}{c}Y}{-\frac{ca}{b}X} = \frac{b^2kY}{ac^2X}
$$

$$
ac^2 X dX = b^2 k Y dY
$$

Entonces, integrando miembro a miembro:

$$
\int ac^2 X dX = \int b^2 k Y dY
$$

$$
\frac{1}{2}ac^2 X^2 = \frac{1}{2}b^2 k Y^2 + K_1'
$$

$$
ac^2 X^2 = b^2 k Y^2 + K_1
$$

Donde $K_1$ es una constante arbitraria, positiva, de integración. Esta solución representa una familia de hipérbolas con centro de simetría en el origen del sistema trasladado, que dependen paramétricamente del valor de $K_1$.

En el sistema cuasilineal, las ecuaciones dan lugar a trayectorias ligeramente deformadas, particularmente porque las asíntotas dejan de ser rectilíneas y pasan a ser curvas.

Si se pretende encontrar la solución correspondiente al sistema cuasilineal, hay que retornar a las ecuaciones ① y dividirlas miembro a miembro:

$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{ky - cxy}{ax - bxy} = \frac{y(k - cx)}{x(a - by)}
$$

$$
\frac{a - by}{y} dy = \frac{k - cx}{x} dx
$$

Integrando miembro a miembro resulta:

$$
\int \left(\frac{a}{y} - b\right) dy = \int \left(\frac{k}{x} - c\right) dx
$$

$$
a \ln |y| - by = k \ln |x| - cx + C_1
$$

Donde $C_1$ es una constante arbitraria de integración. Operando:

$$
a \ln y - k \ln x = by - cx + C_1
$$

$$
\ln \left(\frac{y^a}{x^k}\right) = by - cx + C_1
$$

$$
\frac{y^a}{x^k} = e^{by - cx + C_1}
$$

$$
\frac{y^a}{x^k} = e^{by} e^{-cx} e^{C_1}
$$

Donde $K = e^{C_1}$. Entonces:

$$
\frac{y^a}{x^k} = K e^{by} e^{-cx}
$$

$$
y^a = K x^k e^{by} e^{-cx}
$$

$$
y^a e^{-by} = K x^k e^{-cx} \qquad \text{③}
$$

Con mayor precisión, se puede calcular el valor de la constante $K$ en función de las condiciones iniciales, siendo $x(0) = x_0$ e $y(0) = y_0$:

$$
K = \frac{y_0^a e^{-by_0}}{x_0^k e^{-cx_0}}
$$

### Retrato Fásico

El diagrama de fase se encuentra claramente en el primer cuadrante, dado que ninguna de las poblaciones puede ser negativa. El punto de cruce de las asíntotas coincide con el punto crítico, de manera que se encuentra en las coordenadas:

$$
x_0 = \frac{k}{c}
$$

$$
y_0 = \frac{a}{b}
$$

Las líneas que pueden trazarse desde las coordenadas del punto crítico y paralelas a cada eje dividen al primer cuadrante en cuatro regiones: (I, II, III y IV).

Las asíntotas, como ocurre siempre para una silla de montar, son dos pares de líneas, uno de ellos convergente hacia el punto de cruce y el otro divergente. Por tratarse de un sistema no lineal, las asíntotas no son semirrectas sino líneas curvadas.

En las dos ramas de hipérbolas que se observan en la región (I), ambas poblaciones comienzan, a la derecha del gráfico, con un valor alto de individuos. Pero en los dos casos las poblaciones son decrecientes, es decir, en esta zona del retrato tienen pendiente negativa. Esto es consecuencia de la competencia entre ambas, y por tratarse de poblaciones numerosas, el alimento compartido resulta escaso para las dos, por lo cual se produce una elevada mortandad de individuos de ambas especies.

Sin embargo, al ingresar en la región (II), la población $x(t)$ sigue decreciendo, pero la $y(t)$ comienza a crecer a partir de la inflexión de la curva superior en coincidencia con la coordenada del punto crítico. Desde el punto de vista modélico, se interpreta que la población $y(t)$ se vuelve dominante y, por lo tanto, prevalece sobre $x(t)$, manteniendo esta última su decrecimiento. Los individuos de $y(t)$ se alimentan bien y la especie aumenta en número, en detrimento de la población $x(t)$, que sigue disminuyendo. El fenómeno se conoce como **dominancia**, en este caso de la especie $y(t)$ sobre la $x(t)$.

Si se hubiera observado la otra rama que comenzó en (I), la cual ingresa en la región (IV) al superar la coordenada correspondiente del punto crítico, se puede ver el efecto contrario en cuanto a población, aunque similar en cuanto a comportamiento. Aquí la población $x(t)$ comienza a crecer, revirtiendo su tendencia inicial, mientras que la $y(t)$ sigue decreciendo. La dominancia en esta parte corresponde a $x(t)$.

En cada región del diagrama, la dominancia se alterna, de manera que $x(t)$ prevalece en dos regiones e $y(t)$ en las dos regiones restantes.

En general, la ubicación de cada especie en las distintas regiones del diagrama y la dominancia dependen de los valores de los coeficientes $[a, b, c, k]$, que son determinados por la población inicial, la tasa de reproducción, el volumen de alimento consumido y la velocidad de ingestión de alimento. También la conformación de las regiones está determinada por los valores de los coeficientes $[a, b, c, k]$ y la constante $(K)$.

Una situación recíproca a la de la región (I) se produce en la región (III), en la cual ambas poblaciones comienzan a evolucionar desde un número muy bajo de individuos y, por lo tanto, ambas son crecientes por abundancia de alimento disponible. Pero al llegar a la coordenada del punto crítico, en ambos casos hay una población que sigue creciendo mientras que la otra comienza a decrecer, repitiéndose el fenómeno de la dominancia de manera alternada.

El efecto depresor de una especie se expresa como la "proporción de individuos" de la población competidora que "sustituye" a los individuos de la especie considerada (Lotka-Volterra).

En general, el modelo prevé tres posibles resultados como escenario final:

*   **Exclusión de una especie por otra:** Una especie elimina a la otra del hábitat.
*   **Cambio en las densidades iniciales:** Las poblaciones se ajustan a nuevas densidades.
*   **Coexistencia estable:** Ambas especies logran coexistir de forma pacífica y sostenida.

## 2. Modelo Epidemiológico (SIR)

Una aplicación muy interesante de los modelos poblacionales es el Modelo Epidemiológico o Modelo SIR, un modelo dinámico determinístico desarrollado por los biólogos matemáticos Kermack y Mc Kendrick en 1927. Este modelo permite analizar la velocidad de propagación de una enfermedad infecciosa cuando un pequeño grupo de personas infectadas se introduce en una población más grande.

En este caso, el modelo poblacional analiza la interacción entre tres conjuntos o "especies" de pobladores diferentes, que son:

*   **Susceptibles (S):** Individuos que no poseen la enfermedad pero pueden adquirirla y, en consecuencia, volverse infecciosos. Un individuo vacunado deja de pertenecer a esta clase.
*   **Infectados (I):** Cantidad de individuos que transmiten la enfermedad ("infectados activos").
*   **Recuperados (R):** Individuos que murieron por la enfermedad, se recuperaron y son inmunes, o fueron aislados y tratados hasta adquirir inmunidad permanente (incluyendo vacunados cuando la vacuna es confiable).

El modelo dinámico tiene en cuenta las tres "especies" epidemiológicas generadas y la circulación de individuos entre cada una de ellas. Un ejemplo reciente y muy difundido públicamente fue el de la epidemia global o pandemia causada por el Virus Corona COVID-19.

Las variaciones de cada grupo respecto del tiempo dan las ecuaciones del modelo SIR o epidemiológico, que son las siguientes:

$$
\begin{cases}
\frac{dS}{dt} = -aSI \\
\frac{dI}{dt} = aSI - bI \\
\frac{dR}{dt} = bI
\end{cases}
$$

También pueden designarse las derivadas en su versión más abreviada como $S'$, $I'$, y $R'$.

Estas tres ecuaciones diferenciales se pueden interpretar conceptualmente del siguiente modo:

*   **Para $S' = -aSI$:** La variación en el tiempo de la población susceptible es proporcional, a través de un coeficiente $(a)$, al número de pobladores susceptibles y a la población de infectados. El signo negativo indica que la población susceptible disminuye a medida que se infecta.
*   **Para $I' = aSI - bI$:** La variación de infectados en el tiempo se debe a la adición de nuevos infectados (proporcional a $aSI$) y la sustracción de aquellos que se recuperan o retiran (proporcional a $bI$).
*   **Para $R' = bI$:** La variación de los recuperados depende de la cantidad de infectados que se retiran de la clase infectiva.

Donde los coeficientes de proporcionalidad son:

*   $(a)$: Tasa de infección (constante positiva)
*   $(b)$: Tasa de retiro (constante positiva)

La población total es:

$$
N = S(t) + I(t) + R(t)
$$

Como dato del modelo, se supone que la población total $N$ permanece constante durante el proceso de la epidemia, a pesar del crecimiento vegetativo u otra circunstancia que no se tiene en cuenta en un período tan corto (aproximadamente 120 días).

La transmisión es por contacto directo, en la generalidad de las epidemias. Para transmitir la infección, un individuo infeccioso hace contacto con $aN$ individuos por unidad de tiempo. La probabilidad de contacto entre un infeccioso y un susceptible es $S/N$, luego el número de nuevas infecciones por unidad de tiempo viene dado por:

$$
(aN) \left(\frac{S}{N}\right) I = aSI
$$

Es decir, un infeccioso transmite la enfermedad con una tasa de contagio $(a)$, según la ley de acción de masas. Esto significa que los cambios en la población susceptible también se comportan según esta ley. La ley de acción de masas es un principio enunciado en química, que establece que la velocidad de reacción es proporcional al producto de las concentraciones de los elementos. Por lo tanto, la velocidad de contagio se comporta de acuerdo con esta ley, dependiendo de la concentración de infectados.

Además, una fracción $(b)$ de los infectados por unidad de tiempo deja esa clase para convertirse en recuperados con inmunidad permanente. Esto conduce al sistema de ecuaciones diferenciales del modelo SIR.

Una vez que una cantidad inicial no nula de individuos infecciosos entra a la comunidad en el tiempo inicial, comienza a desatarse la dinámica del modelo que puede conducir o no a un brote epidémico.

El símbolo de la derivada se puede interpretar como cambios por unidad de tiempo de los susceptibles, infectados o recuperados, según la ecuación específica. Sin embargo, la variación de infectados por unidad de tiempo, $dI(t)/dt$, particularmente, tiene un significado importante en epidemiología, pues representa la **incidencia**, concebida como el número de casos nuevos de la enfermedad por unidad de tiempo.

Es interesante señalar que, en la primera ecuación, a medida que pasa el tiempo, su primer miembro $dS(t)/dt$ toma siempre valores negativos, ya que $S(t)$ e $I(t)$ son poblaciones y, por lo tanto, cantidades positivas, al igual que la tasa $(a)$. Esto significa que la cantidad de susceptibles $S(t)$ del primer compartimento decrece. El mismo razonamiento puede hacerse para la ecuación 3, para la cual los recuperados $R(t)$ del último compartimento son siempre crecientes. Esto es lo natural, ya que en el modelo epidémico los susceptibles comienzan con una cantidad $S=N$, pero esa cantidad $S$ va decreciendo a medida que se van infectando, cambiando así a infectados. Por el contrario, al inicio de la epidemia no hay recuperados, pero una vez pasado el período infeccioso empiezan a aparecer y se hacen cada vez más numerosos.

Se puede demostrar que el período infeccioso está relacionado con el parámetro $(b)$ del modelo y concretamente es la inversa de $(b)$, es decir, $1/b$, que para el COVID-19 se estimó en 14 días.

Este análisis sobre el crecimiento o decrecimiento que se explica de manera sencilla para los compartimentos de recuperados y susceptibles, no es tan fácil para el compartimento de infectados. Para establecer cómo es el crecimiento o decrecimiento de la prevalencia, es decir, de los infectados del compartimento central, o lo que es lo mismo, saber si la incidencia es positiva o negativa, habría que utilizar herramientas del cálculo diferencial e integral que no se incluyen en el presente estudio.

Conociendo los valores de $S(t)$ e $I(t)$ es posible evaluar $R(t)$, dado que debe verificarse que:

$$
\frac{d(S+I+R)}{dt} = 0
$$

Dado que la suma de los tres grupos debe permanecer constante por ser la población total disponible, que permanece constante mientras se desarrolla el modelo. Por lo tanto:

$$
N = \text{constante}
$$

Luego:

$$
R(t) = N - S(t) - I(t)
$$

Dividiendo miembro a miembro las dos primeras ecuaciones del Modelo SIR resulta:

$$
\frac{dI}{dS} = \frac{aSI - bI}{-aSI} = \frac{I(aS - b)}{-aSI} = -\frac{aS - b}{aS} = -1 + \frac{b}{aS}
$$

$$
dI = \left(-1 + \frac{b}{aS}\right) dS
$$

E integrando miembro a miembro:

$$
\int dI = \int \left(-1 + \frac{b}{aS}\right) dS
$$

$$
I = \int -dS + \int \frac{b}{a} \frac{1}{S} dS
$$

$$
I = -S + \frac{b}{a} \ln|S| + C_1
$$

Siendo:

*   $c = b/a$ (una nueva constante)
*   $C_1$ = constante arbitraria de integración

Resumiendo todas las constantes arbitrarias de integración en una sola, que podemos llamar $K_1$, resulta:

$$
I(t) = K_1 - S(t) + \frac{b}{a} \ln S(t)
$$

La familia de curvas correspondientes a la solución de este modelo adopta formas como las siguientes, donde en un principio el número de infectados es creciente y luego de un pico pasa a ser decreciente.

Este es el comportamiento que se verifica en muchas epidemias y es bastante similar a lo que aconteció en la Pandemia de Virus Corona (COVID-19) en 2020. Después de un pico producido aproximadamente a los 60 días, la cantidad de casos de infectados $(I)$ comienza a disminuir, lo que se explica por el aumento de los Recuperados (inmunidad) y la disminución de los Susceptibles (vacunas).

La evolución de las tres poblaciones se puede ver en el siguiente gráfico:

```
        ^ Población
        |
    S(t)  \        /
           \      /
            \    /
             \  /
              \/
        ------+--------------------> Tiempo
       /       \
      /         \
     /           \
    I(t) -------- (Pico)
   /             \
  /               \
 /                 \
--------------------
   R(t) -------------------------
```

Sin embargo, la epidemia de Virus Corona COVID-19 demuestra que la realidad responde solo aproximadamente al modelo matemático y con plazos diferentes y variables. Que no lo haga exactamente depende de la aparición de nuevas cepas y mutaciones del virus original, así como de las dificultades para lograr la vacunación universal. Las dificultades para generalizar la aplicación de vacunas dependen de las limitaciones logísticas y culturales que caracterizan a diferentes sociedades. Las logísticas están relacionadas con la acción de los gobiernos y la organización del Estado, y las culturales están vinculadas con la aparición de prejuicios como los de grupos antivacunas y gente reticente a vacunarse por motivos religiosos o personales.

En todo caso, las curvas de los eventos reales deberían ser evaluadas a lo largo de períodos más prolongados de tiempo para obtener conclusiones válidas, pero el Modelo estudiado teóricamente es una muy buena aproximación de la realidad.

*HB 2025*