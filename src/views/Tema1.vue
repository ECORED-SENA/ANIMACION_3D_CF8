<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Construcción automática del #[i rigging] 

    p.mb-5 El #[i rigging] es el proceso mediante el cual se crean estructuras de esqueletos y de control para animar y deformar geometrías. Podría decirse que está formado por un componente técnico y otro artístico: técnico por el desarrollo de código y la construcción de estructuras complejas, y artístico por la búsqueda de deformaciones que luzcan agradables (appeal) y, al mismo tiempo, sean creíbles, como se puede observar en la figura 1.

    .row.align-items-center.bg-color2.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        .row.justify-content-center
          .col-lg-2
            p.BorTit #[strong Figura 1]#[br] #[i Técnicas de rigging]
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='Texto que describa la imagen')

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_1.h2 1.1 #[i Addon Rigify]

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Blender facilita hacer el rig a partir del uso de addons propios del programa, utilizando una malla utilizando el Addon Rigify; en el siguiente recurso de aprendizaje se podrá ver la forma de implementarlo.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-2
        p.BorTit1 #[strong Vídeo] #[br] #[i Riggify]
    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5DqlxXSJjM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="flip-up") Blender facilita el rig a partir del uso de addons propios del programa, para poder utilizar la malla se deberán activar de la siguiente manera:

    LineaTiempoD.color-primario(data-aos="flip-up")
      .row(numero="1" titulo="paso 1") 
        .col-lg-12
          p.mb-5 Ir a la pestaña edit - preferences y buscar addons en la pestaña addons, en el buscador escribir rigg, y aparecerá rigging: rigify, el cual se activa, esto se muestra en la figura que aparece a continuación. 

          .row.justify-content-center.mb-3
            .col-lg-2
              p.BorTit1 #[strong Figura 2] #[br] #[i Add on rigify Blender]

          img(src='@/assets/curso/tema_1/img_5.png', alt='Texto que describa la imagen')
        
      .row(numero="2" titulo="Paso 2")
        .col-lg-12
          p.mb-5 El paso siguiente es ir al modo objeto y dar clic en la pestaña add – armatura – basic- mbasic metarigg, con esto, se agrega un esqueleto humanoide a la escena, dicho proceso se puede observar en la siguiente figura.

          .row.justify-content-center.mb-3
            .col-lg-4
              p.BorTit1 #[strong Figura 3] #[br] #[i Agregando el sistema de huesos]

          img(src='@/assets/curso/tema_1/img_6.png', alt='Texto que describa la imagen')

      .row(numero="3" titulo="Paso 3")
        .col-lg-12
          p.mb-5 Ahora se escala y se mueve para acomodarlo en la malla, como se puede ver en la siguiente figura.

          .row.justify-content-center.mb-3
            .col-lg-4
              p.BorTit1 #[strong Figura 4] #[br] #[i Acomodando el esqueleto en Blender]

          img(src='@/assets/curso/tema_1/img_7.png', alt='Texto que describa la imagen')
      .row(numero="4" titulo="Paso 4")
        .col-lg-12
          p.mb-5 Luego en el modo edición, se acomodan los huesos para que compaginen con las partes del cuerpo del personaje, esto se realiza seleccionando el hueso que se quiere modificar y se le da mover con la tecla G. Hay que tener en cuenta que si se activa en las opciones de tool x-axis mirror, lo que se haga en un lado se replicará en el otro, por ende, se ahorra la tarea de acomodar los huesos en la otra mitad del cuerpo, este proceso se muestra en la figura 5.

          .row.justify-content-center.mb-3
            .col-lg-5
              p.BorTit1 #[strong Figura 5] #[br] #[i Generando acciones reflejadas para el esqueleto en Blender]

          img.img-a(src='@/assets/curso/tema_1/img_8.png', alt='Texto que describa la imagen')
      .row(numero="5" titulo="Paso 5")
        .col-lg-12
          p.mb-5 Una vez se tengan acomodados los huesos del personaje se revisa que esté todo en orden y alineado tanto en vista frontal como lateral (figuras 6 y 7).

          .row.justify-content-center.mb-3
            .col-lg-7
              p.BorTit1 #[strong Figura 6] #[br] #[i Acomodando según la estructura de la malla los huesos en Blender en vista frontal]

          img.mb-5(src='@/assets/curso/tema_1/img_9.png', alt='Texto que describa la imagen')

          .row.justify-content-center.mb-3
            .col-lg-7
              p.BorTit1 #[strong Figura 7] #[br] #[i Acomodando según la estructura de la malla los huesos en Blender en vista lateral]

          img(src='@/assets/curso/tema_1/img_10.png', alt='Texto que describa la imagen')

      .row(numero="6" titulo="Paso 6")
        .col-lg-12
          p.mb-5 Una vez se tenga todo acomodado, se selecciona el esqueleto en #[i object mode], y se le aplica en la pestaña #[i Armature], el botón #[i generate rig]; para aclarar el tema se puede revisar la siguiente figura.

          .row.justify-content-center.mb-3
            .col-lg-4
              p.BorTit1 #[strong Figura 8] #[br] #[i Generando el rig a la malla en Blender]

          img.mb-5.img-a(src='@/assets/curso/tema_1/img_11.png', alt='Texto que describa la imagen')

          p A partir del paso 6 se crearán los controladores necesarios para la animación de los huesos del personaje, cabe resaltar que podrían aparecer en escala más pequeña, por lo que se deberán acomodar, usando los elementos mover y escalar se podrá ir a #[i Object mode]. 

      .row(numero="7" titulo="Paso 7")
        .col-lg-12
          p.mb-5 En #[i Object mode] se selecciona primero la malla y luego el controlador global del personaje, con clic derecho se busca Parent – #[i with automatic weights]. De esa forma, se tendrá listo el personaje con #[i rigg] gracias al #[i Addon rigify], se puede revisar el resultado en la siguiente figura.

          .row.justify-content-center.mb-3
            .col-lg-4
              p.BorTit1 #[strong Figura 9] #[br] #[i Personaje con controladores Blender]

          img.mb-5.img-a(src='@/assets/curso/tema_1/img_12.png', alt='Texto que describa la imagen')

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_2.h2 1.2 Autorig
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p.mb-0 Se puede generar rig automatizado mediante el uso de programas externos, en este caso se utilizará, Mixamo de Adobe, esta es una plataforma en línea a la que se deben subir los modelados para allí asignarles el rig y el skinning. En el siguiente video sobre “Autorig Mixamo” se podrá encontrar información que permitirá profundizar en el tema y adquirir los conocimientos necesarios para poder con la práctica desarrollar las competencias que requiere. 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-2
        p.BorTit1 #[strong Vídeo] #[br] #[i Autorig Mixamo]
    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6xNC2AXB-_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 A continuación, se revisan los pasos importantes para autoriggear un personaje a través de la herramienta Mixamo de Adobe: 

    LineaTiempoD.color-primario(data-aos="flip-up")
      .row(numero="1" titulo="paso 1") 
        .col-lg-12
          p.mb-5 Para iniciar, se debe copiar el enlace en el navegador, ir a la página   
            a(href="https://www.blender.org/" target="_blank").link-color https://www.mixamo.com  
            |  y registrarse para acceder a la herramienta (figura 10). 

          .row.justify-content-center.mb-3
            .col-lg-5
              p.BorTit1 #[strong Figura 10] #[br] #[i Acceso a Mixamo a través de la web]

          img(src='@/assets/curso/tema_1/img_13.png', alt='Texto que describa la imagen')
        
      .row(numero="2" titulo="Paso 2")
        .col-lg-12
          p.mb-5 Al estar en el software se debe ingresar al panel para subir el modelo en fbx sin esqueletos, es decir solo la malla, luego hacer clic donde dice upload character; para aclarar los conceptos se pueden revisar las figuras 11 y 12.
          SlyderE(indicadores="derecha")
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-3
                  .col-lg-2
                    p.BorTit1 #[strong Figura 11] #[br] #[i Carga del personaje]
                .row.justify-content-center
                  .col-lg-10
                    img.mb-3(src='@/assets/curso/tema_1/img_14.png', alt='Texto que describa la imagen')
                    p En esta imagen se observa el botón para cargar el modelo, al cual se le agrega el rig automático.
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-3
                  .col-lg-3
                    p.BorTit1 #[strong Figura 12] #[br] #[i Personaje listo para rig]
                .row.justify-content-center
                  .col-lg-10
                    img.mb-3(src='@/assets/curso/tema_1/img_15.png', alt='Texto que describa la imagen')
                    p.mb-0 Aquí se observa que el personaje se ha cargado en la página y está listo para realizarle el proceso de autorig.
                    p Luego se hace clic en next y emergerá una pantalla con herramientas circulares, esos puntos son los que se deben acomodar en el personaje según la figura 13 que aparece como ejemplo. 
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-3
                  .col-lg-4
                    p.BorTit1 #[strong Figura 13] #[br] #[i Acomodando círculos para rig]
                .row.justify-content-center
                  .col-lg-10
                    img.mb-3(src='@/assets/curso/tema_1/img_16.png', alt='Texto que describa la imagen')
                    p Con las herramientas circulares se señalan los puntos de las articulaciones, como se mostró en la figura anterior.
                    p Después debe hacer nuevamente clic sobre next y Mixamo empezará el trabajo de rig. Se debe esperar mientras se surte el proceso, una vez terminado se podrá ver que el personaje aparece con una animación idle de prueba, así se constata que quedó completo el rig. Se invita a revisar la figura 14 para verificar la ubicación de los elementos en la herramienta.
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-3
                  .col-lg-4
                    p.BorTit1 #[strong Figura 14] #[br] #[i Personaje con rig en estado de reposo]
                .row.justify-content-center
                  .col-lg-10
                    img.mb-3(src='@/assets/curso/tema_1/img_17.png', alt='Texto que describa la imagen')
                    p En esta imagen se comprueba el estado idle (reposo) del personaje, al cual ya le se podrán asignar diversos movimientos preestablecidos.
                    p Mixamo tiene animaciones prediseñadas, simplemente se hace clic en la que desea utilizar y se verá aplicada en el personaje; una vez seleccionada, se hace clic en el botón download y se tendrá el rigg con la animación en un archivo fbx, a continuación, se muestra una figura que ayudará a entender el proceso.
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-3
                  .col-lg-3
                    p.BorTit1 #[strong Figura 15] #[br] #[i Personaje listo para exportar]
                .row.justify-content-center
                  .col-lg-10
                    img.mb-3(src='@/assets/curso/tema_1/img_18.png', alt='Texto que describa la imagen')
                    p En esta imagen se ve el personaje con movimientos preestablecidos, y el botón de descarga, el cual generará un archivo .fbx.

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_3.h2 1.3 #[i Skinning] básico
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En algunos casos se podrá notar que la malla, a pesar de que se está deformando para generar movimiento, puede que no se deforme correctamente. Para ello, se trabajará el peso de los huesos en la piel del personaje, por lo que se invita a ver el siguiente video en el que se conocerá la técnica para el uso de esta herramienta. 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-2
        p.BorTit1 #[strong Vídeo] #[br] #[i Autorig Mixamo]
    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8BGAl7vWAc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 A continuación, se verá el proceso de asignación de pasos a la malla después de haberse aplicado rig mediante rigify:

    LineaTiempoD.color-acento-contenido(data-aos="flip-up")
      .row(numero="1" titulo="paso 1") 
        .col-lg-12
          h5 Skinning y pesos para Addon Rigify
          p.mb-5 En algunos casos se podrá notar que la malla, a pesar de que se está deformando para generar movimiento, puede que no se deforme correctamente. Para ello se puede trabajar el peso de los huesos sobre la malla, seleccionando en #[i object mode] en la malla, y luego clicando el menú #[i Weight Paint], como se observa en la figura 16. 

          .row.justify-content-center.mb-3
            .col-lg-5
              p.BorTit1 #[strong Figura 16] #[br] #[i Skinning en Blender: pintando pesos en vértices]

          img(src='@/assets/curso/tema_1/img_19.png', alt='Texto que describa la imagen')
        
      .row(numero="2" titulo="Paso 2")
        .col-lg-12
          p.mb-5 Primero se debe ir a #[i Preferences – Addons], y allí se activa el #[i script] interface: #[i Copy attributes menu], para copiar información de pesos y pegarla donde se necesite, en la siguiente figura se observa el manejo.

          .row.justify-content-center.mb-3
            .col-lg-4
              p.BorTit1 #[strong Figura 17] #[br] #[i Addon script interface]

          img(src='@/assets/curso/tema_1/img_20.png', alt='Texto que describa la imagen')
      .row(numero="3" titulo="Paso 3")
        .col-lg-12
          p.mb-5 Luego, se debe seleccionar la malla desde el menú #[i Object mode], dando clic izquierdo sobre ella, como se observa en la figura 18.

          .row.justify-content-center.mb-3
            .col-lg-3
              p.BorTit1 #[strong Figura 18] #[br] #[i Selección Object mode]

          img.mb-3(src='@/assets/curso/tema_1/img_21.png', alt='Texto que describa la imagen')

          p.mb-0 Estando elegida la malla se vuelve a la selección de menú y hace clic en #[i Weight paint] para así utilizar las herramientas de peso malla. En ella se puede ver un selector de herramientas del lado izquierdo. 
      .row(numero="4" titulo="Paso 4")
        .col-lg-12
          p Con la herramienta Draw se comienzan a pintar los pesos de la malla; cuando se pinta lo que se ve más rojo es lo que tiene mayor peso, lo que está en azul tiene peso nulo y lo que está en verde posee peso moderado. 

          p.mb-5 Para pintar con más peso se deben aumentar los valores del weight; si quiere restar peso, el weight debe estar en 0. En la siguiente figura se podrá ver la afectación del peso en la muñeca del personaje Flynn, donde el verde representa el peso de afectación media, y en el antebrazo se degrada hasta azul para mostrar una transición en la que el movimiento de la muñeca afectará mínimamente el antebrazo.

          .row.justify-content-center.mb-3
            .col-lg-3
              p.BorTit1 #[strong Figura 19] #[br] #[i Pintando pesos]

          img(src='@/assets/curso/tema_1/img_22.png', alt='Texto que describa la imagen')
      .row(numero="5" titulo="Paso 5")
        .col-lg-12
          p.mb-5 De esta manera, el proceso se repite para cada uno de los huesos, teniendo en cuenta la jerarquía, como en la figura 20 donde el hueso principal debe ser afectado bastante y los huesos siguientes deben tener una afectación mínima, casi nula.

          .row.justify-content-center.mb-3
            .col-lg-3
              p.BorTit1 #[strong Figura 20] #[br] #[i Pesos huesos por huesos]

          img(src='@/assets/curso/tema_1/img_23.png', alt='Texto que describa la imagen')
      .row(numero="6" titulo="Paso 6")
        .col-lg-12
          p.mb-5 Al acomodar los pesos en los huesos se tendrá el personaje listo para ser animado. A continuación, se muestran dos figuras (21 y 22) de referencia del objeto: uno en estado de reposo y el otro en pose de salto.

          .row.justify-content-center.mb-3
            .col-lg-3
              p.BorTit1 #[strong Figura 21] #[br] #[i Estado de reposo]

          img.mb-5(src='@/assets/curso/tema_1/img_24.png', alt='Texto que describa la imagen')

          .row.justify-content-center.mb-3
            .col-lg-3
              p.BorTit1 #[strong Figura 22] #[br] #[i Pose de salto]

          img.mb-5(src='@/assets/curso/tema_1/img_25.png', alt='Texto que describa la imagen')






  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
