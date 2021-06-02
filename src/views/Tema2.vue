<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .h3 Instrumentos financieros: Activos, pasivos e instrumentos de patrimonio.

        .row.justify-content-center.align-items-center.mt-5
          .col-lg-6
            p Un instrumento de patrimonio es un negocio respaldado por un contrato que pone de manifiesto una participación residual en los activos de una entidad después de deducir todos los pasivos. 
            br
            p Algunos ejemplos de instrumentos de patrimonio, son las acciones ordinarias, ciertos tipos de acciones preferentes, así como, las opciones u otro tipo de derechos o bonos para la suscripción o compra de acciones ordinarias de la empresa.
            br
            p continuación, se relaciona un ejemplo específico de ello :
            br
            p Una obligación (contrato) que será cancelado por la entidad entregando o recibiendo una cantidad acordada de sus instrumentos de patrimonio propio a cambio de un importe fijo en efectivo o cualquier otro activo financiero será un instrumento de patrimonio.
          .col-lg-6
            img.img-a.my-3(src="@/assets/curso/images/tema2/img_9.svg" alt="", style="width:500px; display:block; margin:auto 0;").img-fluid

    #t_2_1.titulo-segundo
      .h4 2.1 Reconocimiento, medición, presentación, Revelación:

    p.mt-5 En el presente ítem se aborda conceptos que determinan el reconocimiento de los instrumentos de patrimonio, a su vez presenta ejemplos que acompañan el proceso de aplicabilidad.
    
    .h5.mt-5.mb-4 Reconocimiento:

    p Una entidad reconocerá la emisión de acciones o de otros instrumentos de patrimonio cuando emita esos instrumentos y otra parte esté obligada a proporcionar efectivo u otros recursos a la entidad a cambio de éstos. (Pasivos y patrimonio 2009, s.f).
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
          img.img-a.my-3(src="@/assets/curso/images/tema2/img_10.svg" alt="", style="width:500px; display:block; margin:auto 0;").img-fluid
      .col-lg-6
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema2/ico_1.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float     
          .col
            p Si los instrumentos de patrimonio se emiten antes de que la entidad reciba el efectivo u otros recursos, la entidad presentará el importe por cobrar como una compensación al patrimonio en su estado de situación financiera, no como un activo.
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema2/ico_2.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float      
          .col
            p Si la entidad recibe el efectivo u otros recursos antes de que se emitan los instrumentos de patrimonio, y no se puede requerir a la entidad el reembolso del efectivo o de los otros recursos recibidos, la entidad reconocerá el correspondiente incremento en el patrimonio en la medida de la contraprestación recibida. 
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema2/ico_3.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float     
          .col
            p En la medida en que los instrumentos de patrimonio hayan sido suscritos, pero no emitidos y la entidad no haya todavía recibido el efectivo o los otros recursos, la entidad no reconocerá un incremento en el patrimonio.
        hr.mt-5.mb-4
    .h5.mt-5.mb-4 Medición:

    p Con los nuevos marcos normativos es improbable que el patrimonio contable multiplicado por el porcentaje de participación represente una estimación fiable del valor razonable de una inversión en instrumento de patrimonio sin cotización pública.
    p En periodos posteriores al reconocimiento inicial, y solo para algunos casos, por ejemplo, en inversiones patrimoniales de baja o ninguna bursatilidad, el valor determinado a partir de una remedición a valor razonable de todos los activos y pasivos de la entidad (patrimonio) podría representar una estimación fiable.

    .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4
            .h5 Ejemplo:
            p La sociedad Contable SAS, compra el primero de julio del año 0 un paquete de acciones del Banco de Bogotá, por valor de $130.000.000 y las clasifica como activos disponibles para la venta.
        .col-lg-6
          img.img-jumbotron-padding(src='@/assets/curso/images/tema2/img_13.svg' alt="", style="width:500px; display:block; margin:auto 0;").img-float

    p.mt-3 La sociedad Contable SAS, compra el primero de julio del año 0 un paquete de acciones del Banco de Bogotá, por valor de $130.000.000 y las clasifica como activos disponibles para la venta.
    br
    p También compra opciones de venta que le dan derecho a vender el paquete de acciones por $130.000.000, el precio pagado por la opción es de $1.300.000.
    br
    p A 31 de diciembre del año 0 el valor razonable del paquete de acciones es de $125.000.000 y el valor razonable de la opción es de $1.600.000.

    SlyderC(:datos="datosSlyderd")

    #t_2_1.titulo-segundo
      .h4 2.2 Aportes de Capital
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p <b>Autorizado:</b> es el valor máximo de capitalización de una sociedad
            li 
              i.fas.fa-check
              p <b>Suscrito:</b> Es la parte del capital autorizado, el cual los accionistas se comprometen a pagar, como si fuera una venta a plazos, sin superar el año, artículo 387 del Código del Comercio, para el caso de las Sociedades Simplificadas por acciones S.A.S, el plazo es de dos años acorde a la ley 1258 de 2008 artículo 387
            li 
              i.fas.fa-check
              p <b>Pagado:</b> Es la parte del capital suscrito que los accionistas han cancelado y que efectivamente se encuentran en poder de la sociedad.
          .cajon.color-secundario.p-4.mt-5.mb-4
            .h5 Ejemplo:
            p La sociedad Contable SAS, compra el primero de julio del año 0 un paquete de acciones del Banco de Bogotá, por valor de $130.000.000 y las clasifica como activos disponibles para la venta.
      .col-lg-6
        img.img-jumbotron-padding(src='@/assets/curso/images/tema2/img_11.svg' alt="", style="width:500px; display:block; margin:auto 0;").img-float




















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyderd: [
      {
        titulo: 'Reconocimiento inicial, compra del paquete de acciones',
        texto: '',
        imagen: require('@/assets/curso/images/tema2/t_1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Reconocimiento inicial, compra del paquete de acciones',
        texto: '',
        imagen: require('@/assets/curso/images/tema2/t_2.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Reconocimiento posterior a 31 de diciembre.',
        texto:
          'Por la contabilización de la partida cubierta a valor razonable con cambios en resultados.',
        imagen: require('@/assets/curso/images/tema2/t_3.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Reconocimiento posterior a 31 de diciembre.',
        texto:
          'Por la contabilización del instrumento de cobertura a su valor razonable, con cambios en los resultados del ejercicio.',
        imagen: require('@/assets/curso/images/tema2/t_4.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
