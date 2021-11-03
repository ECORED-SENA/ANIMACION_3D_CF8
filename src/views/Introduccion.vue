<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.bg-color1.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        .row.justify-content-center
          .col-lg-10
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema_1/img_2.png')})`}"
              )
              .bloque-texto-g__texto.p-5
                br
                br
                p.mb-5 En este contenido formativo se verá el #[i rig] como el proceso aplicado a un sistema de huesos, que ayudará a dar movimiento y deformación a una malla, modificando en ella los #[i weights] (pesos) y creando controladores para que se conecten a los huesos y puedan tener control sobre el movimiento. Además, se verá cómo generar #[i blendshapes] con los que se podrán crear las expresiones faciales de los personajes y, finalmente, hacer los ajustes finales necesarios para que el modelo quede listo para ser animado.
                br
                br
                


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
