<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4.align-items-center
      .col-lg-2(data-aos="fade-right").mb-lg-0.mb-3
        .px-2: img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .cajon-b.color-primario.p-3.mb-4.abajo-derecha
          p Estimado aprendiz, bienvenido a este recurso de aprendizaje, orientado a la ciencia de datos. Durante su desarrollo, se abordarán ejes temáticos como introducción a la implementación de modelos de #[em Machine Learning], implementación de modelos a través de API REST, así como también la infraestructura IAAS (AWS ECS). Al finalizar el componente formativo, estará en la capacidad de desplegar la solución informática, de acuerdo con un criterio técnico y marcos de referencia. 
            br
          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9iOL7BGkQxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
