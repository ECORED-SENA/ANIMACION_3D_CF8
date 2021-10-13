<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Construcción de #[i rigging] manual
    
    .row.align-items-center.bg-color3.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        p Anteriormente se realizó un #[i rigging] de forma automática, pero ahora se hará manualmente. Por ello, el departamento de #[i rigging] se convierte en un puente entre los de modelado y animación. Los modeladores entregan las geometrías, ya sean props o personajes, como se muestra en la figura 23, para que los #[i riggers] busquen la mejor solución técnica y artística que permitirá que los animadores hagan su trabajo. Los #[i riggers] también pueden intervenir en procesos posteriores a la animación, realizando simulaciones de ropa y cabello.
        .row.justify-content-center
          .col-lg-3
            p.BorTit1 #[strong Figura 23]#[br] #[i Ejemplo de rigging en una mano]
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_2/img_2.png', alt='Texto que describa la imagen')

        p(data-aos="slide-right") Para alistar un personaje en el proceso de #[i rigging ]manual se debe organizar primero el punto de pivote, el cual es la referencia central y en las que los diferentes tipos de sistemas de coordenadas funcionarán como eje principal, limpiando las transformaciones para resetear la información. 

        p(data-aos="slide-left") Luego, se pasará a organizar jerárquicamente el sistema de huesos y controladores y finalmente se miran los Constraints que son la forma de controlar las propiedades de un objeto y la herramienta Armature y huesos; para profundizar en el tema se invita a revisar el siguiente objeto de aprendizaje: 

    .row.align-items-center.bg-color4.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        h5.mb-5 Conceptos básicos para iniciar el proceso de #[i rigging]

        .tarjeta.tarjeta_ro.p-4.mb-5
          SlyderA
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                p 
                  strong Cursor 3D y puntos de pivote 
                p El cursor 3D es una herramienta muy útil dentro del #[i software] Blender, dado que nos da un punto de referencia desde el cual transformar los objetos; también sirve para alinear unos objetos con otros. El manejo correcto de este nos ayudará a establecer de manera adecuada los puntos de pivote de nuestros objetos. 
            
              .col-md-5
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/sKRkKHedHmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Cursor 3D y puntos de pivote 
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                p 
                  strong Sistema de coordenadas 
                p Dentro de cualquier #[i software] 3D tendremos disponibles diferentes sistemas de coordenadas que ayudarán a transformar nuestros objetos según las necesidades que se tengan. Sistemas de coordenadas como Globales, Locales, Gimbal, entre otros, se explican a continuación:  
            
              .col-md-5
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/EncUzIuVeOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Sistema de coordenadas  
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                p 
                  strong Aplicar o limpiar transformaciones 
                p Al momento de modelar objetos dentro del ambiente de Blender 3D se llega a construir un historial de transformaciones que, al momento de crear un sistema de control para su posterior animación, llega a ser caótico si no se limpia. En el video a continuación se muestra cómo se deben aplicar las transformaciones y ajustar los puntos de pivote.   
            
              .col-md-5
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/PsUc10fAPRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 limpiar transformaciones 
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                p 
                  strong #[i Outliner] y nomenclatura 
                p El proceso de #[i rigging] se caracteriza por el correcto orden y designación de cada uno de los elementos dentro de una escena. Esto ayudará a encontrar posibles errores en el proceso de #[i rigging], también facilitará la construcción de la jerarquía.    
            
              .col-md-5
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/c6tTgzTJqgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Outliner y nomenclatura 
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                p 
                  strong Construcción de jerarquía
                p Todos los sistemas de esqueletos y de controles están compuestos por un esquema de jerarquías que permiten los diferentes puntos articulados de un objeto móvil. La forma como están relacionados los objetos dentro de un sistema de #[i rig] marcarán su funcionalidad.    
            
              .col-md-5
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/tbpekrm1oIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5  Jerarquía y emparentamiento
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                p 
                  strong #[i Constraints]
                p Son la forma de controlar las propiedades de un objeto. Se podría decir que es una relación existente entre dos o más objetos, donde uno es el manejador –o aquel que fija la restricción–, y otro es el manejado.    
            
              .col-md-5
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/W94YAVz7XHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5  Constraints
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                p 
                  strong #[i Armature] y huesos
                p Son una herramienta que permite mover o deformar una geometría de forma más sencilla. Los #[i bones] o huesos, son la base de los #[i armatures] o esqueletos.     
            
              .col-md-5
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/Pzpn60JYfc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption.mb-5 Armature



</template>

<script>
export default {
  name: 'Tema2',
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
