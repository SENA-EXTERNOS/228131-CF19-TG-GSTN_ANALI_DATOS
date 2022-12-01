<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementar modelos a través de API #[em REST]
    p.mb-5(data-aos='fade-right') En estes apartado hablaremos sobre uno de los conceptos más mencionados en el mundo del desarrollo de software, hablamos de API #[em REST.]
    .row.justify-content-center.mb-5
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.png', alt='')

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

<style lang="sass"></style>
