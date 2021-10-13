<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Alistamiento del modelo

    .row.mb-5(data-aos="zoom-in")
      .col-lg-12.mb-5
        .row.mb-5
          .col-lg-6.d-none.d-lg-block 
            img.mb-5.img-a.img_b(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen')

        .row.align-items-center.bg-color5.p-5.tex-ali.mb-5
          .col-lg-12.mb-4.mb-lg-0.mb-5.d-none.d-lg-block 
            .row
              .col-lg-6
                p Una vez el modelo se encuentra en condiciones óptimas para realizar el proceso de #[i rigging] y, antes de crear el sistema de huesos, es necesario hacer una especie de lista de chequeo para evitar errores. 
                p.mb-0 Aquí cabe una recomendación: que el modelo esté centrado, que tenga la correcta dimensión, las transformaciones limpias y nomenclatura son algunos de los pasos previos a la creación del esqueleto, los que se podrán ver a través del siguiente video: 

      .row.align-items-center.bg-color5.p-5.d-block.d-lg-none.mb-5
        .col-lg-12.mb-4.mb-lg-0
          p Una vez el modelo se encuentra en condiciones óptimas para realizar el proceso de #[i rigging] y, antes de crear el sistema de huesos, es necesario hacer una especie de lista de chequeo para evitar errores. 
          p.mb-0 Aquí cabe una recomendación: que el modelo esté centrado, que tenga la correcta dimensión, las transformaciones limpias y nomenclatura son algunos de los pasos previos a la creación del esqueleto, los que se podrán ver a través del siguiente video: 

    figure.mt-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Iu8wOH2uApY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    

    
    
    

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
