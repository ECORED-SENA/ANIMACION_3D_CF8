<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 #[i Skinning] avanzado

    .row.align-items-center.bg-color6.p-5.mb-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        p El skinning o pesado se define como el proceso de acoplar la geometría de un modelo 3D al esqueleto o sistema de rig, de tal manera que, al mover este último, el personaje también se moverá o deformará. Esto significa que las cadenas de huesos tendrán influencia sobre los vértices del modelo; en esencia este creará una relación de parentesco, donde los huesos mandan sobre la geometría. 
        figure.mt-5
          img.img-a(src='@/assets/curso/tema_5/img_2.png', alt='Texto que describa la imagen')

    
    .row.bg-color7.p-5.mb-5
      .col-lg-12.mb-5(data-aos="slide-left")
        .row.mb-5
          .col-lg-6.d-none.d-lg-block.mb-5
            img.mb-5.img-a.img_b(src='@/assets/curso/tema_5/img_4.png', alt='Texto que describa la imagen')
        .row.align-items-center.bg-color5.p-5.tex-ali1.mb-5
          .col-lg-12.mb-4.mb-lg-0.mb-5.d-none.d-lg-block 
            .row
              .col-lg-6
                p La dificultad surge en el hecho de que un rig se compone por varios huesos individuales y la mayoría de estos necesitarán influenciar tan solo ciertas partes de la geometría. Por ejemplo, se busca que el control de la muñeca solo afecte los vértices de esa área en la geometría, pero podría darse que afecte también ciertas áreas del antebrazo e incluso del hombro, lo cual no sería correcto. (Pluralsight, 2014). Por lo anterior, se invita a ver la siguiente figura para identificar el modo Weight Paint en Blender.

      .row.align-items-center.bg-color5.p-5.d-block.d-lg-none.mb-5
        .col-lg-12.mb-4.mb-lg-0
          p La dificultad surge en el hecho de que un rig se compone por varios huesos individuales y la mayoría de estos necesitarán influenciar tan solo ciertas partes de la geometría. Por ejemplo, se busca que el control de la muñeca solo afecte los vértices de esa área en la geometría, pero podría darse que afecte también ciertas áreas del antebrazo e incluso del hombro, lo cual no sería correcto. (Pluralsight, 2014). Por lo anterior, se invita a ver la siguiente figura para identificar el modo Weight Paint en Blender.

      img.mb-5.img-a.d-block.d-lg-none(src='@/assets/curso/tema_5/img_4.png', alt='Texto que describa la imagen')

      .row.mb-5.mt-5
        .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left")
          p Existen diferentes tipos de parentescos que se pueden crear entre los huesos y la geometría, pero generalmente se usa aquel donde el programa por defecto asigna valores de influencia a cada vértice basado en la proximidad de estos a las diferentes estructuras del esqueleto. Usualmente, el resultado es bueno, pero no el mejor, dado que el ordenador no sabe en realidad cómo debería deformarse la geometría. 
        .col-lg-6.mb-4.mb-lg-0(data-aos="slide-right")
          .bloque-texto-c.tarjeta_ro.p-4
            i.fas.fa-quote-right
            h2.mb-2 Es allí donde comienza la parte más importante del proceso de skinning conocido como pintado de pesos 
            span.mb-0 (Pluralsight, 2014). 

      .row.justify-content-center.mb-5(data-aos="flip-up")
        .col-lg-10.d-none.d-lg-block
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(style="left: 612px;")(
              :style="{'background-image': `url(${require('@/assets/curso/tema_5/img_5.png')})`}"
            )
            .bloque-texto-g__texto.p-5(style="right: 320px;")
              p El pintar los pesos permite asignar manualmente la influencia que cada hueso tiene sobre la geometría. Esta tarea suele tomar tiempo, puesto que siempre se deben buscar deformaciones adecuadas para el personaje y no existen reglas exactas para definir los valores de influencia. Tal vez no suene muy técnico, pero es un juego de prueba y error hasta lograr lo que se busca. De nada sirve que la configuración del sistema de rig sea la mejor; si el pesado no es el adecuado, todo se verá afectado.

      .row.justify-content-center
        .col-lg-10.d-block.d-lg-none
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema_5/img_5.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              p El pintar los pesos permite asignar manualmente la influencia que cada hueso tiene sobre la geometría. Esta tarea suele tomar tiempo, puesto que siempre se deben buscar deformaciones adecuadas para el personaje y no existen reglas exactas para definir los valores de influencia. Tal vez no suene muy técnico, pero es un juego de prueba y error hasta lograr lo que se busca. De nada sirve que la configuración del sistema de rig sea la mejor; si el pesado no es el adecuado, todo se verá afectado.

      .row.justify-content-center(data-aos="flip-up")
        .col-lg-10
          p En los siguientes videos se explica cómo se realiza el proceso de skinning al personaje que se viene trabajando, por lo que se invita a ver el siguiente recurso de aprendizaje:
        
    .row.align-items-center.bg-color4.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        h5.mb-5 #[i Skinnig]

        .tarjeta.tarjeta_ro.p-4.mb-5
          SlyderA
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Introducción al skinning parte I 
                p Como parte del aprendizaje, debes conocer el proceso para el #[i skinning], por lo que puedes ver los dos siguientes videos.  
            
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/c3oKyxjKgQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: Introducción al Skinning parte I 
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Introducción al #[i skinning] parte II  
            
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/oQnpOXrPOWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: Introducción al Skinning parte II 
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Pintado de pesos parte I  
                p Adicionalmente de formar competencias en la técnica de pintado de objetos 3D, mediante este #[i software], te invitamos a ver los dos videos que a continuación se presentan.            
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/XX-FMdQoEuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: Pintado de pesos parte I  
            .row.justify-content-center.mt-5
              .col-md-4.mb-4.mb-md-0
                p 
                  strong Pintado de pesos parte II            
              .col-md-6
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/SC89rlmXWco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Ver video: Pintado de pesos parte II  
    




    
    
    

</template>

<script>
export default {
  name: 'Tema5',
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
