<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Instrumentos financieros: Activos, pasivos e instrumentos de patrimonio.

    p.mt-4.mb-4 A continuación, se relacionan algunos conceptos que se deben tener en cuenta en el reconocimiento y medición de instrumentos financieros:
    .row
      .col-lg-12
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_1.svg' alt='AvatarTop').img-float 
          .tarjeta.acento-contenido
            .p-4
              .h4 Activo financiero:
              p Los activos financieros se clasifican de acuerdo modelo de negocio del suscriptor en tres categorías: a su costo amortizado, a valor razonable con cambios en el patrimonio otro (resultado integral) o a valor razonable con cambios en pérdidas y ganancias dependiendo de  las características de los flujos de efectivo descritos en el documento que protocoliza el instrumento financiero por ejemplo el cobro de los rendimientos generados por el activo o tener la intención de vender el activo. (Norma internacional de información financiera, 2016, p.9)
  
      .col-lg-12
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_2.svg' alt="", style="width:40px; display:block; margin:auto 0;").img-float 
          .tarjeta.acento-contenido
            .p-4
              .h4 Pasivo Financiero:
              p Generalmente los pasivos financieros se miden a costo amortizado, excepto aquellos pasivos financieros que se mantienen para negociar, como por ejemplo los derivados, que se valoran a valor razonable con cambios en resultados.
    
      .col-lg-12
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:40px; display:block; margin:auto 0;").img-float 
          .tarjeta.acento-contenido
            .p-4
              .h4 Patrimonio:
              p Un instrumento de patrimonio es cualquier contrato que ponga de manifiesto una participación residual en los activos de una entidad, después de deducir todos sus pasivos. (Norma Internacional de Contabilidad, s.f. p.2).
    
      #t_1_2.titulo-segundo
        .h4.mt-5 1.1  Política Contable

      p Son los principios, bases, acuerdos reglas y procedimientos específicos adoptados por la entidad en la elaboración y presentación de los estados financieros.
      br
      p Una política contable debe contener:

          .row.justify-content-center.align-items-center.mt-5
            .col-sm 
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Nombre de la política contable
                li 
                  i.fas.fa-check
                  | Debe establecer los criterios de reconocimiento del hecho económico, medición inicial, medición posterior 
                li 
                  i.fas.fa-check
                  | y las revelaciones requeridas.
                li 
                  i.fas.fa-check
                  | Objetivo de la política contable.
                
              p Norma Internacional de Información financiera NIIF 9 define cómo se deben reconocer y medir los instrumentos financieros.
              br
              p La normativa que se debe tener en cuenta para la aplicación de Instrumentos Financieros es la siguiente:
            .col-auto 
                img.img-a.my-3(src="@/assets/curso/images/tema1/img_2.svg" alt="", style="width:400px; display:inline; margin:auto 8rem;").img-fluid
            p Figura 1
            h6 Normativa para la aplicación de instrumentos financieros
          .row.justify-content-center.align-items-center
            .col-auto
                img.img-a.my-3(src="@/assets/curso/images/tema1/img_3.svg" alt="", style="width:600px; display:block; margin:auto 0;").img-fluid

      p.mt-5 Una entidad optará entre aplicar dependiendo del grupo al que pertenece:

      .row.justify-content-center.align-items-center.mt-5
        .col-sm
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Lo previsto en la Sección 11 y Sección 12 si pertenece al grupo número dos Pymes.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Las disposiciones sobre reconocimiento y medición de la NIIF 9 Instrumentos financieros si pertenece al grupo número uno.
      
        .col-auto 
            img.img-a.my-3(src="@/assets/curso/images/tema1/img_1.svg" alt="", style="width:300px; display:inline; margin:auto 8rem;").img-fluid
      .col-6
        p Cuando se aplique un cambio de una política contable se hará de forma retroactiva, como si la nueva política contable se hubiese aplicado siempre. Cuando sea impracticable determinar los efectos en cada periodo específico de un cambio en una política contable sobre la información comparativa para uno o más periodos anteriores para los que se presente información, la entidad aplicará la nueva política contable a los importes en libros de los activos y pasivos al principio del primer periodo para el que sea practicable la aplicación retroactiva, el cual podría ser el periodo actual.
      
      #t_1_2.titulo-segundo
        .h4.mt-5 1.2. Instrumentos financieros

      p Para la ejecución de los instrumentos financieros es necesario conocer algunos elementos que son esenciales para el desarrollo e implementación de los mismos, estos elementos serán abordados a continuación.

      .h5.mt-5.mb-4 Activo financiero

      p Un activo financiero es cualquier activo que posea la forma de efectivo, instrumento de patrimonio neto de otra entidad o que represente un derecho contractual o un contrato que pueda ser liquidado utilizando instrumentos de patrimonio propio de la entidad, los activos financieros deben ser medidos al costo amortizado, pero si son mantenidos para negociar se miden a valor razonable con cambios en el resultado del ejercicio.

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4
            .h5 Ejemplo
            p El 17/11/año 1 la sociedad Contable SAS vendió a crédito 5.000 unidades del producto ZV a $ 100,50 por unidad, se ha concedido sobre la factura un descuento de $ 11.400, El pago se realizará dentro de 2 años y el descuento es del 5%.
        .col-lg-6
          .tabla-b.color-acento-contenido.mb-5
            .tabla-b__header
              .h6.mb-0.text-white Factura
          table
            tr
              th Precio factura
              td 502.500
            tr
              th Descuento
              td 11.400
      p.mt-5 El crédito constituye para el vendedor un activo financiero, pues es un derecho contractual.
      p Como es una transacción a largo plazo año, se debe reconocer el valor del dinero en el tiempo a la tasa del 5% efectiva anual, lo que implica el cálculo del valor presente del valor de la venta neta (491.100) para reconocer al final del año 1 y 2 el ajuste por concepto de los gastos financieros así:
      
    SlyderC(:datos="datosSlyderC")
     
    .h5.mt-5.mb-4 Conceptos

    p.mt-5 Costo amortizado: es el importe al que inicialmente fue valorado un pasivo financiero, menos los pagos de principal que se hubieran producido, menos los intereses correspondientes al período calculados con la técnica del tipo de interés efectivo. (Super contable Sage, s.f p.9)
    br
    p.mb-5 Método de la tasa de Interés Efectiva: es un método para calcular el costo amortizado de un pasivo, calculando la tasa de descuento para igualar los flujos de efectivo, en el periodo cero o periodo de medición, es decir es la tasa que se le aplicará al instrumento financiero para calcular los intereses. Tomado de: Actualícese (2017, 17 de mayo).
    hr.mt-5.mb-5
    .h4.mt-5.mb-4 Pasivos Financiero

    p Es cualquier pasivo que represente una obligación contractual de entregar dinero u otro activo financiero a otra entidad o de intercambiar activos financieros o pasivos financieros con otra entidad o un contrato que sea liquidado utilizando los instrumentos de patrimonio propio de la entidad, debe ser medido al costo amortizado utilizando la técnica del interés efectivo sin embargo si es para negociar incluidos los instrumentos derivados se mide a valor razonable con cambios en el estado de resultados. (Instrumentos financieros NIC 32 s.f p.9)
    br
    p Valor Razonable: es la intermediación efectiva que se hace a través de la oferta y demanda de forma libre, dicho de otra forma, es la interacción de un comprador y un vendedor, que se obligan y comprometen a transar una cantidad de bien determinando un precio y unas condiciones específicas en un mercado libre.


    .h4.mt-5.mb-4 Reconocimiento y Medición

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span a
        p <b>Medición Inicial:</b> Se genera en el momento en que se realiza el hecho económico incluidos los costos indirectos de constitución del título.
      li 
        .lista-ol--cuadro__vineta
          span b
        p <b>Medición Posterior:</b> Se genera en los momentos futuros al reconocimiento inicial y comprende los ajustes propios del instrumento, dependiendo del modelo de negocio que implicó su reconocimiento como para negociar o para la venta, por ejemplo, de tal manera que cuando se presente la información financiera los instrumentos estén valorados correctamente.
    p.mt-3 Según la normatividad los instrumentos financieros que se pueden medir a costo amortizado son todos aquellos en los que se desea mantener el activo para cobrar sus flujos de efectivo contractuales como, por ejemplo:

    .jumbotron-4.mt-5
        .row.justify-content-center.align-items-center
          .col-auto
              img.img-jumbotron-padding(src='@/assets/curso/images/tema1/img_9.svg' alt="", style="width:240px; display:block; margin:auto 3rem;").img-float
          .col-sm 
              ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | TES
                  li 
                    i.fas.fa-check
                    | Bonos
                  li
                    i.fas.fa-check
                    | Valor razonable todos aquellos que se adquieren con la intención de ser negociados.

    .h4.mt-5.mb-4 Revelación

    p.mt-5 Se debe revelar en las notas a estados financieros la naturaleza de los pasivos financieros, garantías, vencimientos, saldos pendientes de pago y cambios significativos. (NIIF 7)

    hr.mt-5.mb-5

    #t_1_2.titulo-segundo
        .h4.mb-4.mt-5 1.3 Obligaciones con terceros
    
    p Todos los desembolsos requeridos para obtener un crédito con una entidad financiera como: estudios de créditos, seguros, entre otros, se deben reconocer en el préstamo. A continuación, encuentra ejemplos que permiten acercarse a un ejercicio real y cotidiano.

    .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4
            .h5 Ejemplo 1:
            p La empresa Contable SAS, adquiere un préstamo para desarrollar un proyecto de expansión, por $200.000.000 con una tasa de interés sobre el préstamo pactado en un 2,5%El interés pactado, 2,5% es el costo financiero que debe asumir por el préstamo recibido.
        .col-auto
          img.img-jumbotron-padding(src='@/assets/curso/images/tema1/img_4.svg' alt="", style="width:340px; display:block; margin:auto 3rem;").img-float

    .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4
            .h5 Ejemplo 2:
            p Una empresa, pacta con una entidad financiera una obligación de $120.000, se pacta que, al finalizar 6 años, la empresa entrega a la entidad financiera $138.000 al finalizar los seis años.
        
          
        .col-lg-6
          .tabla-b.color-acento-contenido.mb-5
            p.mt-3.mb-3 Determinó el interés efectivo incluida en la negociación utilizando la TIR.
            .tabla-b__header
              .h6.mb-0.text-white Factura
          table
            tr
              th PERIODO
              td 1
            tr
              th MONTOS
              td 120.000,00

    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
    datosSlyderC: [
      {
        titulo:
          'Al fin del año 1 reconocimiento posterior del componente financiero',
        texto: '',
        imagen: require('@/assets/curso/images/tema1/t_1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Al final del año 2 reconocimiento posterior del componente financiero.',
        texto: '',
        imagen: require('@/assets/curso/images/tema1/t_2.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Por reclasificar el crédito del largo al corto plazo.',
        texto: '',
        imagen: require('@/assets/curso/images/tema1/t_3.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Reconocimiento por cobro de crédito.',
        texto: '',
        imagen: require('@/assets/curso/images/tema1/t_4.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
