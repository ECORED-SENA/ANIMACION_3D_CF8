<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 #[i Rig] facial y #[i blendshapes]
 
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
        p Existen diferentes técnicas para desarrollar un #[i rig] facial. Dentro de ellos se encuentra el uso de cadenas de huesos, los #[i blendshapes] o modificadores de tipo deformación. La decisión dependerá directamente de los requerimientos de la producción, así como también del tiempo y presupuesto disponibles; no obstante, el mejor camino para desarrollar un #[i rig] facial es combinar las técnicas, como se puede observar en la siguiente figura.

        p Un #[i blendshape] es un deformador que permite a un objeto cambiar su forma, basado en las duplicaciones que se hagan del objeto base (#[i Morph Target o Shape Key]). Esta técnica resulta bastante útil a la hora de realizar el #[i rig] facial por su simplicidad y expresividad.

        p Cada uno de los gestos faciales debe modelarse o esculpirse, lo que demanda paciencia y una continua búsqueda del #[i appeal] en el personaje. Aquí, puede surgir la pregunta: ¿qué gestos o expresiones son las que deben modelarse? Pues existe una variedad infinita y que se deben categorizar en dos grupos:
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        .row.justify-content-center
          .col-lg-4
            p.BorTit1 #[strong Figura 26] #[br] #[i Blendshapes]
        img.img-a(src='@/assets/curso/tema_7/img_1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="slide-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema_7/img_2.svg' alt='AvatarTop')
          .tarjeta.tarjeta_ro
            .p-4
              h4.mb-0.txt_bg1 Las expresiones
      .col-lg-4(data-aos="slide-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema_7/img_3.svg' alt='AvatarTop')
          .tarjeta.tarjeta_ro
            .p-4
              h4.mb-0.txt_bg1 Los visemas


    .row.justify-content-center.mb-5
      .col-lg-10.d-none.d-lg-block
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-out")
          .bloque-texto-g__img(style="left: 452px;")(
            :style="{'background-image': `url(${require('@/assets/curso/tema_7/img_4.png')})`}"
          )
          .bloque-texto-g__texto.p-5(style="right: 320px;")
            p Las expresiones principales que se deben trabajar son: alegría, tristeza, enojo, sorpresa, disgusto y temor. 
            br
            br

    .row.justify-content-center
      .col-lg-10.d-block.d-lg-none
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema_7/img_4.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Las expresiones principales que se deben trabajar son: alegría, tristeza, enojo, sorpresa, disgusto y temor. 

    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0.d-flex(data-aos="slide-left")
        .cajon.color-acento-contenido.p-5
          p.mt-5 Una excelente fuente de información y referencia para este proceso es la que se encuentra en el material complementario a través de la página 
            a(href="https://www.ttamayo.com/2021/01/dibujar-el-rostro-y-las-expresiones-faciales/" target="_blank").link-color Artnatomy.net.
            |  Esta es una herramienta interactiva que ilustra diferentes gestos faciales y cada uno de los grupos musculares que entran en acción en cada caso, como se observa en la siguiente figura.
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-right")
        .row.justify-content-center
          .col-lg-7
            p.BorTit1 #[strong Figura 27] #[br] #[i Algunas expresiones faciales universales]
        img.img-a(src='@/assets/curso/tema_7/img_5.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left")
        .row.justify-content-center
          .col-lg-5
            p.BorTit1 #[strong Figura 28] #[br] #[i Ejemplo de formas bucales]
        img.img-a(src='@/assets/curso/tema_7/img_6.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-4.mb-lg-0.d-flex(data-aos="slide-right")
        .cajon.color-primario.p-5
          p Por otro lado, los visemas son formas significantes o visuales construidas por los labios. Usualmente se conocen como fonemas; sin embargo, es importante aclarar que los fonemas son sonidos, los visemas son formas (Osipa, 2010), como se observa en la figura 28.
          p Los visemas son usados al momento de realizar el trabajo de sincronización labial o mejor conocido como #[i lip sync]. A diferencia de los fonemas, los visemas se basan en los ciclos que juegan entre sí:

          .list.mb-0
            .list__item
              .list__item__icon
                  img.img-a(src="@/assets/curso/tema_7/img_7.svg").img-fluid  
            .list__txt    
              p.m-top Boca abierta/cerrada.
          .list
            .list__item
              .list__item__icon
                  img.img-a(src="@/assets/curso/tema_7/img_7.svg").img-fluid  
            .list__txt    
              p.m-top.mb-0 Labios contraídos/estirados. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="slide-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema_7/img_8.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            br
            p Los fonemas funcionan muy bien para la animación 2D, pero en el 3D se requiere un análisis de aquellos visemas o formas bucales esenciales para “vender” la idea de un diálogo. 
            br
            br
        .row(data-aos="slide-left")
          .col-lg-8
            p De nuevo la idea “menos es más” (Principio Kiss) cobra relevancia al momento de trabajar en la construcción de #[i blendshapes], pues la mayoría de las expresiones faciales y visemas complejos se forman a partir de la unión de otros más básicos. Por ejemplo, es posible formar el visema de la letra “o” uniendo los de boca abierta y labios contraídos.

            p En los siguientes videos puede profundizar en el tema, por lo que se presenta el proceso de construcción de un #[i rig] facial, haciendo uso de huesos, #[i blendshapes] y algunos deformadores en el siguiente recurso de aprendizaje.
          .col-lg-4
            img.img-a(src='@/assets/curso/tema_7/img_9.png', alt='Texto que describa la imagen')

    .row.align-items-center.bg-color4.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        h5.mb-5 #[i Rig] facial y #[i blendshapes]

        .tarjeta.tarjeta_ro.p-4.mb-5
          SlyderA
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p En los siguientes videos podrás aprender diferentes herramientas que permitirán realizar el proceso facial en la construcción de un personaje.
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/S8ETVkQkRKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: Mandíbula parte I
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p Mandíbula parte 2
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/lqiWDiCbzTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: Mandíbula parte 2
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p Ojos
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/bDwXAaXz418" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: #[i Rig] Facial - Ojos
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p #[i Blendshapes] parte l
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/qabf9G2PlmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: #[i Blendshapes] parte l
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p #[i Blendshapes] parte II
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/-zHxxIeRuNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: Ver video: #[i Blendshapes] Parte 2




</template>

<script>
export default {
  name: 'Tema6',
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
