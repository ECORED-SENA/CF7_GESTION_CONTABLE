<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
        .col-auto
            img(src="@/assets/curso/images/tema1/intro.svg" alt="", style="width:700px; display:inline-block; margin: 0 auto;")

    p.mb-3 En el presente componente se abordan los temas: activos financieros, pasivos financieros, instrumentos de patrimonio y la normatividad vigente aplicable al presente tema. Los instrumentos financieros son contratos que dan lugar, simultáneamente, a un activo financiero en una entidad y a un pasivo financiero o a un instrumento de patrimonio en otra entidad, lo que permite concretar todos estos conceptos en el momento de reconocer, medir y revelar de manera correcta los diferentes títulos que se comercian a diario en el mercado de capitales y que forman parte del día a día de cualquier empresa en sus procesos de maximizar la rentabilidad de sus activos y de financiación de su negocio. 

    p.mb-3 Nota aclaratoria: las tablas que se toman como referencia en los ejemplos de cada uno de los temas desarrollados, elaboradas mediante el programa Excel son derivadas de estos ejercicios, la elaboración es propia del autor del presente componente, por lo tanto, no se numeran y no se establece un nombre específico.

   

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
