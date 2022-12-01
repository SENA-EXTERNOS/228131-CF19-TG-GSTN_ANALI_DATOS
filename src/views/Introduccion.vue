<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-2(data-aos="fade-right").mb-lg-0.mb-3
        .px-2: img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p.mb-0 Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje orientado a la ciencia de datos. Durante su desarrollo se abordarán los ejes temáticos: introducción a la implementación de modelos de machine learning, implementar modelos a través de API REST e implementación en IAAS (aws ecs). Al finalizar el componente formativo, estará en la capacidad de desplegar la solución informática de acuerdo a criterio técnico y marcos de referencia. Antes de empezar, mire el siguiente video para identificar el contexto de aprendizaje.
            br
            br
            |#[b ¡Muchos éxitos, que tenga un aprendizaje significativo y memorable!]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
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
