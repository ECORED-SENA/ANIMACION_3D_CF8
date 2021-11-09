<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Ajustes finales y #[i scripting]


    .row.bg-color7.p-5.mb-5
      .col-lg-12.mb-5(data-aos="fade-up")
        .row.mb-5
          .col-lg-6.d-none.d-lg-block.mb-5
            img.mb-5.img-a.img_b(src='@/assets/curso/tema_8/img_1.png', alt='Texto que describa la imagen')
        .row.align-items-center.bg-color5.p-5.tex-ali1.mb-5
          .col-lg-12.mb-4.mb-lg-0.mb-5.d-none.d-lg-block
            .row
              .col-lg-6
                p El proceso de #[i scripting] se puede definir como el desarrollo de una serie de líneas de código (#[i figura de Python Script]) que son ejecutadas dentro de un #[i software] que pueden automatizar o extender las funciones de ciertos componentes, por lo que se invita a revisar la figura 29 que es un ejemplo de un #[i script] en #[i Python]. 
    
      .row.align-items-center.bg-color5.p-5.d-block.d-lg-none.mb-5
        .col-lg-12.mb-4.mb-lg-0
          p El proceso de #[i scripting] se puede definir como el desarrollo de una serie de líneas de código (#[i figura de Python Script]) que son ejecutadas dentro de un #[i software] que pueden automatizar o extender las funciones de ciertos componentes, por lo que se invita a revisar la figura 29 que es un ejemplo de un #[i script] en #[i Python]. 

      .row.mb-5
        .col-lg-6.d-block.d-lg-none
          img(src='@/assets/curso/tema_8/img_1.png', alt='Texto que describa la imagen')

      .row.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
          img(src='@/assets/curso/tema_8/img_2.png', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
          p El proceso de #[i rigging] se complementa con el #[i scripting] que se puede definir como el desarrollo de una serie de líneas de código ejecutadas dentro de un #[i software] que pueden automatizar o extender las funciones de ciertos componentes. 
          p En el caso puntual del desarrollo del #[i scripting], se identifica como un paso necesario para mejorar, simular o extender las funciones del #[i rig], lo que de otras maneras no sería posible. Un ejemplo podría ser el programar funciones en el #[i rig] de un automóvil para que, al moverse a lo largo del suelo, las ruedas giren automáticamente. 

    .row.justify-content-center.mb-5(data-aos="slide-left")
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 En los siguientes videos se muestran los últimos detalles que se deben ajustar al #[i rig] para finalizar el proceso y organizar ciertas capas para construir un panel de selección o interfaz de usuario (#[i UI - User Interface]) para un #[i rig], lo que facilitará el trabajo del equipo de animación.

    TabsC.color-primario.mb-5(data-aos="slide-right")
      .py-3.py-md-4(titulo="Ajustes finales")
        h4 Ajustes finales
        .row.justify-content-center.mt-5
          .col-lg-10  
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/voPYNPvQkEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .py-3.py-md-4(titulo="<em>Scripting</em>")
        h4 #[i Scripting]
        .row.justify-content-center.mt-5
          .col-lg-10  
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vr8Sxu_57Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-6(data-aos="slide-left")
        p Como parte de este proceso de aprendizaje, se invita a revisar el siguiente anexo que podrá descargar, y que contiene el archivo de #[i script] de tipo #[i Python] que sirve de base para el diseño del panel.
      .col-lg-6(data-aos="slide-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/script_ui.py')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p.mb-0 Este es un archivo de código, y al abrir el archivo blend se le debe dar “permitir”.
    

</template>

<script>
export default {
  name: 'Tema8',
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
