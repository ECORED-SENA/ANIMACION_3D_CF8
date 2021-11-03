<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Creación de esqueleto y sistemas de control

    .row.justify-content-center.d-none.d-lg-block.mb-5(data-aos="slide-left")
      .col-lg-10

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(style="left: 612px;")(
            :style="{'background-image': `url(${require('@/assets/curso/tema_4/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5(style="right: 310px;")
            p Una vez realizado un análisis a conciencia de la geometría y las transformaciones de los objetos, se puede iniciar el proceso de construcción del #[i rig]. A continuación, se estructura un esqueleto para un bípedo, que es la estructura más usada en la industria de la animación y dará las bases suficientes para profundizar más adelante.

    .row.justify-content-center.d-block.d-lg-none
      .col-lg-10.d-block.d-lg-none

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema_4/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Una vez realizado un análisis a conciencia de la geometría y las transformaciones de los objetos, se puede iniciar el proceso de construcción del #[i rig]. A continuación, se estructura un esqueleto para un bípedo, que es la estructura más usada en la industria de la animación y dará las bases suficientes para profundizar más adelante.

    p.mb-5(data-aos="flip-up") Para iniciar, se debe segmentar el proceso de construcción debido a que este es complejo y las funcionalidades de cada parte del sistema de #[i rig] presentan desafíos distintos. A continuación, se podrán conocer algunos de los elementos que debe tener en cuenta al realizar la actividad en el #[i software], por lo que se invita a revisar los siguientes videos:

    .row.align-items-center.bg-color4.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        h5.mb-5 Creación de esqueleto y sistemas de control

        .tarjeta.tarjeta_ro.p-4.mb-5
          SlyderA
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p 
                  strong La columna
                p Es la primera parte que suele construirse, pues allí se encuentra el centro de gravedad del personaje y la raíz del esqueleto.  
            
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/CixyvQt0_0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 la Columna
            .row.justify-content-center
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Orientaciones en los huesos 
                p No es una estructura del #[i rig], pero es fundamental tenerla claro para la construcción de las siguientes partes.  
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/F2KbWBoZNhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Orientaciones de huesos
            .row.justify-content-center
              .col-md-4.mb-4.mb-md-0
                p 
                  strong El brazo y los layers 
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/_Yc8GKDN5II" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 El brazo y los layers 
            .row.justify-content-center
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Enlace entre cadena FK y DEF  
                p Por medio de #[i constraints] vamos a enlazar estas dos cadenas.  
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/iUoZV3SfUIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Enlace entre cadena FK y DEF
            .row.justify-content-center
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Creación de sistema IK 
                p Por medio de un #[i constraint] de tipo IK se tendrá la posibilidad de controlar de manera inversa la cadena del brazo.   
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/rYuHxsySABQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5

    p.mb-5(data-aos="flip-up") Luego se realizará el enlace de la cadena IK a la cadena DEF y la creación de un #[i Switch IK/FK], que es un sistema de encendido. También se refleja el sistema construido de los brazos y, finalmente, se pasará a la creación del sistema de huesos de los dedos de la mano, enlazándolos a la cadena de enlace de los brazos, por lo que se invita a revisar los siguientes videos:

    h2.mb-5 Creación de esqueleto y sistemas de control

    TabsA.color-primario.mb-5(data-aos="slide-left")      
      .tarjeta.bg_tar01.p-4(titulo="Enlace cadena IK a cadena DEF")
        h4 Enlace cadena IK a cadena DEF 
        p Se debe realizar el mismo proceso que se hizo entre la cadena DEF y la cadena FK, pero ahora será la cadena IK la que se enlazará.  

        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wpm2q_D-18s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Enlace cadena IK a cadena DEF

      .tarjeta.bg_tar01.p-4(titulo="Creación de un <em>SWITCH IK/FK</em> ")
        h4 Creación de un #[i SWITCH IK/FK] 
        p Dado que la cadena de deformadores está controlada por los sistemas IK y FK, es necesario crear un #[i SWITCH] o interruptor que indique cuándo un sistema está encendido y cuándo el otro está apagado.  

        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/AmwZZVxcUxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Creación de un #[i Switch IK/FK]
      .tarjeta.bg_tar01.p-4(titulo="Reflejo del sistema de brazos")
        h4 Reflejo del sistema de brazos
        p Por medio de la herramienta SIMMETRIZE se obtendrá un reflejo exacto de todo lo construido hasta ahora; además, se hace necesario ajustar ciertos detalles a la parte reflejada.  
        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PxJerjaoSdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Reflejo del sistema de brazos
      .tarjeta.bg_tar01.p-4(titulo="Crear los dedos")
        h4 Crear los dedos 
        p Al momento de crear los huesos de los dedos se debe prestar especial atención a la posición, las orientaciones y a la nomenclatura.
        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/AhAZ0uSkz0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Crear los dedos
      .tarjeta.bg_tar01.p-4(titulo="Enlace de los dedos con la cadena del brazo")
        h4 Enlace de los dedos con la cadena del brazo 
        p Tras haber creado y ajustado cada una de las articulaciones de los dedos, se procede a conectarlos por medio de #[i constraints] a las cadenas DEF y de CONTROL.  
        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/pFWKTRwCdhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Enlace de los dedos con la cadena del brazo 

    p.mb-5(data-aos="flip-up") Enseguida, se realizará la cadena de control de la espalda y el enlace con los brazos. Posteriormente, se construirá el sistema DEF y FK de las piernas. Luego, la creación del IK de la pierna y el #[i Foot Roll]. Así mismo, el enlace de cadenas de la pierna y un #[i switch] de encendido de los sistemas de cadena. Por último, se ajustará el sistema del centro de gravedad COG, todo el proceso se puede ver en el siguiente recurso de aprendizaje.

    h2.mb-5 Creación de esqueleto y sistemas de control

    TabsC.color-primario.mb-5(data-aos="slide-right")
      .py-3.py-md-4(titulo="Cadena CTRL espalda y enlace con brazos")
        h4 Cadena CTRL espalda y enlace con brazos
        p Terminando el tren superior del bípedo, se debe construir la cadena de controles y enlazarla a los sistemas de brazos.
        .row.justify-content-center.mt-5
          .col-lg-10  
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/VlcYu_05vnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Cadena CTRL espalda y enlace con brazos

      .py-3.py-md-4(titulo="Construcción de pierna DEF y FK")
        h4 Construcción de pierna DEF y FK
        p A partir del hueso pelvis se debe crear la extremidad inferior, teniendo en cuenta los loops de la geometría y ajustando las orientaciones de cada hueso. La cadena DEF y la FK son iguales, por lo que se abordan en el siguiente video.  
        .row.justify-content-center.mt-5
          .col-lg-10  
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/yt6qyOIBk68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Ver vídeo Construcción de pierna DEF y FK

      .py-3.py-md-4(titulo="Creación de pierna IK y <em>Foot Roll</em>")
        h4 Creación de pierna IK y #[i Foot Roll] 
        p Dentro de la construcción de una pierna IK se debe desarrollar un subsistema conocido como el #[i Reverse Foot o Foot Roll] que permitirá realizar el conjunto de movimientos especiales con el que cuenta el pie.  
        .row.justify-content-center.mt-5
          .col-lg-10  
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/gEeN-TPRtGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Ver video Creación de pierna IK y Foot Roll

      .py-3.py-md-4(titulo="Enlace de cadenas de la pierna y <em>Switch IK/FK</em>")
        h4 Enlace de cadenas de la pierna y #[i Switch IK/FK]
        p Finalizando la construcción de las piernas, se deben enlazar las diferentes cadenas por medio de #[i constraints] y crear el interruptor, al igual que se hizo en los brazos, para elegir qué sistema manipulará la geometría. 
        .row.justify-content-center.mt-5
          .col-lg-10  
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/O9DCc65APFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption Ver video Enlace de cadenas de la pierna y #[i Switch IK/FK]

      .py-3.py-md-4(titulo="Ajuste del COG")
        h4 Ajuste del COG
        p El centro de gravedad o COG (por sus siglas en inglés) se convierte en el centro de manipulación de todo el esqueleto. Para esto, se debe hacer un pequeño ajuste a las cadenas de Control y Deformadores.  
        .row.justify-content-center.mt-5
          .col-lg-10  
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/i4cJJH1xsQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                figcaption




    
    
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
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
