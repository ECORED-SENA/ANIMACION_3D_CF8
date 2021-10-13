<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Curvas de control


    .row.bg-color7.p-5.mb-5
      .col-lg-12.mb-5(data-aos="fade-up")
        .row.mb-5
          .col-lg-6.d-none.d-lg-block.mb-5
            img.mb-5.img-a.img_b(src='@/assets/curso/tema_6/img_1.png', alt='Texto que describa la imagen')
        .row.align-items-center.bg-color5.p-5.tex-ali1.mb-5
          .col-lg-12.mb-4.mb-lg-0.mb-5.d-none.d-lg-block
            .row
              .col-lg-6
                p Una vez se han ajustado las influencias y dedicado tiempo en deformaciones adecuadas para el personaje, se procede a crear cada una de las curvas que controlarán las cadenas (imagen de curvas de control) de huesos de tipo CTRL. Esta es una labor sencilla y muy mecánica una vez se reconoce el proceso; sin embargo, se debe dedicar tiempo para que se cumplan las condiciones:
    
      .row.align-items-center.bg-color5.p-5.d-block.d-lg-none.mb-5
        .col-lg-12.mb-4.mb-lg-0
          p Una vez se han ajustado las influencias y dedicado tiempo en deformaciones adecuadas para el personaje, se procede a crear cada una de las curvas que controlarán las cadenas (imagen de curvas de control) de huesos de tipo CTRL. Esta es una labor sencilla y muy mecánica una vez se reconoce el proceso; sin embargo, se debe dedicar tiempo para que se cumplan las condiciones:

      .row.mb-5
        .col-lg-6.d-block.d-lg-none
          img(src='@/assets/curso/tema_6/img_1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_6/img_2.svg', alt='Texto que describa la imagen')

      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_6/img_3.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 El siguiente video ilustra el proceso que se debe seguir para la creación de curvas de control:
          h5.mb-0 Curvas de control

    figure.mb-5(data-aos="zoom-out-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NBk5OtTqwcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 A continuación, puede obtener los archivos fuente que fueron utilizados durante el proceso:

    .row.justify-content-center
      .col-lg-6(data-aos="slide-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Eleven.blend')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p.mb-0 Eleven (rig del personaje)
            p Archivo principal .blend, en el cual se encuentra el personaje con el rig.
      .col-lg-6(data-aos="slide-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Orient_custom_shape.zip')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p.mb-0 Addon (Orient custom shape.zip)
            p Este es un archivo complementario que se instala en Blender en la sección de preferencias – Addons.
    
    

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
