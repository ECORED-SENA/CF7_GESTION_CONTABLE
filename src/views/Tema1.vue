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
          img(src='@/assets/curso/images/tema1/ico_1.svg' alt='AvatarTop')
          .tarjeta.acento-contenido
            .p-4
              .h5.mt-3 Activo financiero:
              p Los activos financieros se clasifican de acuerdo modelo de negocio del suscriptor en tres categorías: a su costo amortizado, a valor razonable con cambios en el patrimonio otro (resultado integral) o a valor razonable con cambios en pérdidas y ganancias dependiendo de  las características de los flujos de efectivo descritos en el documento que protocoliza el instrumento financiero por ejemplo el cobro de los rendimientos generados por el activo o tener la intención de vender el activo. (Norma internacional de información financiera, 2016, p.9)
  
      .col-lg-12
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_2.svg' alt="", style="width:40px; display:block; margin:auto 0;")
          .tarjeta.acento-contenido
            .p-4
              .h5.mt-5 Pasivo Financiero:
              p Generalmente los pasivos financieros se miden a costo amortizado, excepto aquellos pasivos financieros que se mantienen para negociar, como por ejemplo los derivados, que se valoran a valor razonable con cambios en resultados.
    
      .col-lg-12
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:40px; display:block; margin:auto 0;") 
          .tarjeta.acento-contenido
            .p-4
              .h5.mt-5 Patrimonio:
              p Un instrumento de patrimonio es cualquier contrato que ponga de manifiesto una participación residual en los activos de una entidad, después de deducir todos sus pasivos. (Norma Internacional de Contabilidad, s.f. p.2).
    
      #t_1_1.titulo-segundo
        .h4.mt-5 1.1  Política Contable

      p Son los principios, bases, acuerdos reglas y procedimientos específicos adoptados por la entidad en la elaboración y presentación de los estados financieros.
      br
      p Una política contable debe contener:

          .row.justify-content-center.align-items-center
            .col-12.col-md-8.col-lg-6.col-xl-6
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
            .col-12.col-md-8.col-lg-6.col-xl-6
                img.img-a.my-5(src="@/assets/curso/images/tema1/img_2.svg" alt="", style="width:400px; display:block; margin:auto 0;")
           
          h6.mb-5.text-center Normativa para la aplicación de instrumentos financieros
          .row.justify-content-center.align-items-center
            .col-auto
                img.img-a.my-3(src="@/assets/curso/images/tema1/img_3.svg" alt="", style="width:600px; display:block; margin:auto 0;")

      p.mt-5 Una entidad optará entre aplicar dependiendo del grupo al que pertenece:

      .row.justify-content-center.align-items-center
        .col-12.col-md-8.col-lg-6.col-xl-6
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Lo previsto en la Sección 11 y Sección 12 si pertenece al grupo número dos Pymes.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Las disposiciones sobre reconocimiento y medición de la NIIF 9 Instrumentos financieros si pertenece al grupo número uno.
            
            p.mt-5 Cuando se aplique un cambio de una política contable se hará de forma retroactiva, como si la nueva política contable se hubiese aplicado siempre. Cuando sea impracticable determinar los efectos en cada periodo específico de un cambio en una política contable sobre la información comparativa para uno o más periodos anteriores para los que se presente información, la entidad aplicará la nueva política contable a los importes en libros de los activos y pasivos al principio del primer periodo para el que sea practicable la aplicación retroactiva, el cual podría ser el periodo actual.
        .col-12.col-md-8.col-lg-6.col-xl-6 
            img.img-a.my-3(src="@/assets/curso/images/tema1/img_1.svg" alt="", style="width:400px; display:block; margin:auto 3rem;")
      
      #t_1_2.titulo-segundo
        .h4.mt-5 1.2. Instrumentos financieros

      p Para la ejecución de los instrumentos financieros es necesario conocer algunos elementos que son esenciales para el desarrollo e implementación de los mismos, estos elementos serán abordados a continuación.

      .h5.mt-5.mb-4 Activo financiero

      p Un activo financiero es cualquier activo que posea la forma de efectivo, instrumento de patrimonio neto de otra entidad o que represente un derecho contractual o un contrato que pueda ser liquidado utilizando instrumentos de patrimonio propio de la entidad, los activos financieros deben ser medidos al costo amortizado, pero si son mantenidos para negociar se miden a valor razonable con cambios en el resultado del ejercicio.

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4.mt-4
            .h5 Ejemplo
            p El 17/11/año 1 la sociedad Contable SAS vendió a crédito 5.000 unidades del producto ZV a $ 100,50 por unidad, se ha concedido sobre la factura un descuento de $ 11.400, El pago se realizará dentro de 2 años y el descuento es del 5%.
        .col-lg-6.mb-2 
          p <b>Solución:</b>
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
      
    SlyderC(:datos="datosSlyder")
     
    .h5.mt-5.mb-4 Conceptos

    p.mt-5 Costo amortizado: es el importe al que inicialmente fue valorado un pasivo financiero, menos los pagos de principal que se hubieran producido, menos los intereses correspondientes al período calculados con la técnica del tipo de interés efectivo. (Super contable Sage, s.f p.9)
    br
    p.mb-5 Método de la tasa de Interés Efectiva: es un método para calcular el costo amortizado de un pasivo, calculando la tasa de descuento para igualar los flujos de efectivo, en el periodo cero o periodo de medición, es decir es la tasa que se le aplicará al instrumento financiero para calcular los intereses. Tomado de: Actualícese (2017, 17 de mayo).
    hr.mt-5.mb-5
    .h4.mt-5.mb-4 Pasivos Financiero

    p Es cualquier pasivo que represente una obligación contractual de entregar dinero u otro activo financiero a otra entidad o de intercambiar activos financieros o pasivos financieros con otra entidad o un contrato que sea liquidado utilizando los instrumentos de patrimonio propio de la entidad, debe ser medido al costo amortizado utilizando la técnica del interés efectivo sin embargo si es para negociar incluidos los instrumentos derivados se mide a valor razonable con cambios en el estado de resultados. (Instrumentos financieros NIC 32 s.f p.9)
    br
    p Valor Razonable: es la intermediación efectiva que se hace a través de la oferta y demanda de forma libre, dicho de otra forma, es la interacción de un comprador y un vendedor, que se obligan y comprometen a transar una cantidad de bien determinando un precio y unas condiciones específicas en un mercado libre.


    .h4.mt-5.mb-5 Reconocimiento y Medición

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
              img.img-jumbotron-padding(src='@/assets/curso/images/tema1/img_9.svg' alt="", style="width:240px; display:block; margin:auto 3rem;")
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

    #t_1_3.titulo-segundo
        .h4.mb-4.mt-5 1.3 Obligaciones con terceros
    
    p Todos los desembolsos requeridos para obtener un crédito con una entidad financiera como: estudios de créditos, seguros, entre otros, se deben reconocer en el préstamo. A continuación, encuentra ejemplos que permiten acercarse a un ejercicio real y cotidiano.

    .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4
            .h5 Ejemplo 1:
            p La empresa Contable SAS, adquiere un préstamo para desarrollar un proyecto de expansión, por $200.000.000 con una tasa de interés sobre el préstamo pactado en un 2,5%El interés pactado, 2,5% es el costo financiero que debe asumir por el préstamo recibido.
        .col-auto
          img.img-jumbotron-padding(src='@/assets/curso/images/tema1/img_4.svg' alt="", style="width:340px; display:block; margin:auto 3rem;")

    .row.justify-content-center.align-items-center.mt-5
        .col-lg-4
          .cajon.color-secundario.p-4.mb-4
            .h5 Ejemplo 2:
            p Una empresa, pacta con una entidad financiera una obligación de $120.000, se pacta que, al finalizar 6 años, la empresa entrega a la entidad financiera $138.000 al finalizar los seis años.
        
          
        .col-lg-8
          .tabla-b.color-acento-contenido.mb-5
            p.mt-3.mb-3 Determinó el interés efectivo incluida en la negociación utilizando la TIR.
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr.th-1.text-center
                    th PERIODO
                    th MONTOS  
                tbody
                  tr
                    td 
                    td 120.000.00
                  tr
                    td 1
                    td -       

    p.mb-5 Tabla de amortización: para determinar los costos financieros a ajustar en cada periodo
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr.th-1.text-center
                th PERIODOS
                th EMONTO INICIA
                th INTERESES
                th MONTO FINAL
            tbody
              tr
                td 1
                td 120.000.00
                td 2.828.05
                td 122.828.05
              tr
                td 2
                td 122.28.05
                td 2894.70
                td 125.722.75
    
    #t_1_4.titulo-segundo
        .h4.mb-4.mt-5.mb-4 1.4 Pasivos Contingentes
    p Es una obligación posible porque depende de que en el futuro ocurra algo que está fuera del alcance de la empresa para que sea reconocido el compromiso, por lo que los pasivos contingentes no se reconocen, pero si se revelan.
      
    .row.justify-content-center.align-items-center.mt-5
          .col-lg-6
              img.img-a.my-3(src="@/assets/curso/images/tema1/img_5.svg" alt="", style="width:500px; display:block; margin:auto 0;")
          .col-lg-6
              .cajon.color-secundario.p-4.mb-4
                .h5 Ejemplo
                p Una organización espera el resultado de una demanda interpuesta por competencia desleal, los abogados estiman que la empresa tiene una probabilidad alta de perder, el veredicto lo darán los jueces dentro de dos años y se estima el valor de la indemnización en $3.000.000 de pesos.
              p.mt-4 El hecho económico implica reconocer la provisión por valor de tres millones de pesos, pero como se estima para dentro de dos años su reconocimiento el día de hoy se debe medir a su valor presente utilizando una tasa de descuento de mercado.

    #t_1_5.titulo-segundo
        .h4.mb-4.mt-5.mb-4 1.5 Diferencia entre pasivo financiero e instrumento de patrimonio
    p El emisor de un instrumento financiero lo clasificará en el momento de su reconocimiento como un pasivo financiero, un activo financiero o un instrumento de patrimonio de conformidad con el acuerdo contractual que protocoliza el instrumento. Una forma de distinguir un pasivo financiero de un instrumento de patrimonio es que exista una obligación contractual que recae sobre una cualquiera de las partes de entregar activos o intercambiar pasivos y activos de manera desfavorable para el emisor.

    .row.mt-4
      .col-lg-6
        p Por ejemplo, si se trata de una Acción preferencial, esta será reconocida como un pasivo financiero si el emisor está obligado a reembolsar por una cantidad acordada.
        br
        p En el caso de un instrumento con opción de venta, es decir que el tenedor debe devolverlo al emisor a cambio de efectivo u otro activo se reconoce como un pasivo financiero.
    #t_1_6.titulo-segundo
        .h4.mb-4.mt-5.mb-4 1.6 Instrumentos Financieros Pasivos y Activos
    p Para el caso de los instrumentos financieros pasivos y activos aplica la Norma Internacional de Información Financiera (NIIF) 9.
  

    .row.justify-content-center.align-items-center.mt-5
        .col
          h6.mb-2 Clases:
          .col-sm  
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Bonos, certificados de depósito a término (CDT),
                  li 
                    i.fas.fa-check
                    | Aceptaciones bancarias

                  li
                    i.fas.fa-check
                    | Pagarés,
                  li 
                    i.fas.fa-check
                    | Préstamos,
                  li 
                    i.fas.fa-check
                    | Cuentas por cobrar

          p.mt-3.mb-3 Instrumentos financieros de cobertura, derivados.


          .col-sm  
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Opciones
                  li 
                    i.fas.fa-check
                    | Forwards
                  li
                    i.fas.fa-check
                    | Futuros
                  
        .col
          img.img-a.my-3(src="@/assets/curso/images/tema1/img_6.svg" alt="", style="width:300px; display:block; margin:auto 0;")

    p.mt-5.mb-4 Los instrumentos de cobertura son derivados, es decir, activos cuya evolución depende de la que sigan otros (conocidos como subyacentes). Su popularidad se apoya, entre otros factores, en el hecho de que los futuros y muchas opciones se negocien en mercados organizados lo que permite que estos productos estén al alcance de pequeños inversores.

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        .cajon.color-secundario.p-4.mb-4
          .h5 Ejemplo
          p La sociedad Contable SAS realiza el 1/1/AÑO 1 una suscripción de bonos no cotizados cuyas condiciones son las siguientes:
    
    .row.justify-content-center.align-items-center.mt-4
      .col-10
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr.th-1.text-center
                th Suscripción
                th 52
                th bonos
            tbody
              tr
                td Valor emisión
                td 7.000
                td Pesos por bono
              tr
                td Valor reembolso
                td 8.000
                td Pesos por bono
    p.mt-3 Se requiere contabilizar las operaciones derivadas.

    p.mt-3.mb-4 1-cálculo del interés efectivo
    .row.justify-content-center.align-items-center.mt-4
      .col-7
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr.th-1.text-center
                th PERIODO
                th MONTOS
            tbody
              tr
                td 0
                td -363000
              tr
                td AÑO 1
                td 10920
          
      .col-auto
        img.img-a.my-3(src="@/assets/curso/images/tema1/img_7.svg" alt="", style="width:400px; display:block; margin:auto 0;")

    p.mt-3 Tabla costo amortizado

    .row.justify-content-center.align-items-center.mt-5
      .col-12
        .tabla-a.color-acento-contenido
          table
            thead
              tr.th-1.text-center
                th AÑOS
                th SALDO INICIAL
                th INTERÉS EFECTIVO
                th INTERÉS EXPLÍCITO
                th INTERÉS IMPLÍCITO
                th SALDO
            tbody
              tr
                td <b>AÑO 1</b>
                td 365.000,00
                td 36.361,89
                td 10.920,00
                td 25.441,89
                td 390.442
              tr
                td <b>AÑO 2</b>
                td 390.441,89
                td 38.896,45
                td 10.920,00
                td 27.976,45
                td 418.418
    
    SlyderC(:datos="datosSlyderl")

    .row.justify-content-center
      .col-10
        hr
      
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema1/ico_6.svg' alt="", style="width:100px; display:block; margin:auto 0;")    
          .col
            h6.mb-2 Reconocimiento::
            br
            p.mb-2 La entidad reconocerá un instrumento financiero en sus informes financieros cuando se convierta en parte del contrato o negocio jurídico conforme a las disposiciones de este.
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema1/ico_7.svg' alt="", style="width:100px; display:block; margin:auto 0;")      
          .col
            h6.mb-2 Medición Inicial:
            br
            p Los activos y los pasivos financieros se valoran inicialmente por su valor razonable que es el precio del hecho económico salvo evidencia en contrario.
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema1/ico_8.svg' alt="", style="width:100px; display:block; margin:auto 0;")    
          .col
            h6.mb-2 Medición Posterior:
            br
            p Es la forma de reconocer en los estados financieros de manera posterior, el importe del instrumento con el reconocimiento de los ajustes correspondientes dependiendo de la forma como es reconocido y medido el título.
            br
            p La medición se efectúa de acuerdo con el modelo de negocio del suscriptor. A valor razonable con cambios en el resultado del ejercicio, a costo amortizado con el interés efectivo y a valor razonable con cambios en el patrimonio de la sociedad
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema1/ico_9.svg' alt="", style="width:100px; display:block; margin:auto 0;")     
          .col
            h6.mb-2 Presentación:
            br
            p El emisor del título lo presentará clasificándolo en sus estados financieros totalmente o en la parte correspondiente, como un pasivo financiero, un activo financiero o un instrumento de patrimonio, de conformidad con las definiciones y características del hecho económico.
        hr.mt-5.mb-4

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        .cajon.color-secundario.p-4.mb-4
          .h5 Ejemplo
          p.mb-3 La sociedad Contable SAS consultores adquiere un préstamo para compra de una propiedad inmobiliaria, por un valor de $128.000.000, le descuentan $400.000 para gastos de estudio del crédito. La tasa pactada es del 18% EA, con pago a 5 cuotas anuales iguales.
    p Calculamos el valor de la cuota utilizando la herramienta pago en funciones financieras
    |=PAGO
    br
    |=40468926,49
    br
    p <b>TABLA DE AMORTIZACIÓN CONTRACTUAL:</b> para el reconocimiento de los abonos a capital e intereses incluidos en cada cuota por pagar.

    .row.justify-content-center.align-items-center.mt-5
      .col-12
        .tabla-a.color-acento-contenido
          table
            thead
              tr.th-1.text-center
                th AÑOS
                th SALDO INICIAL
                th CUOTA
                th ABONO A INTERESES
                th ABONO A CAPITAL
                th SALDO FINAL
            tbody
              tr
                td <b>AÑO 1</b>
                td 128.000.000
                td $ 40.468.926
                td 22.400.000
                td 18.068.926
                td 109.931.074
              tr
                td <b>AÑO 2</b>
                td 109.931.074
                td $ 40.468.926
                td 19.237.938
                td 21.230.989
                td 88.700.085

    h5.mt-5  Reconocimiento inicial 

    .row.mt-5
      .col-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr.th-1.text-center
                th CUENTA
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td <b>Obligaciones financieras</b>
                td 
                td 128.000.000,00
              tr
                td <b>Costo amortizado</b>
                td 127.600.000,00
                td Pesos por bono
    
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
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Al fin del año 1 reconocimiento posterior del componente financiero',
        imagen: require('@/assets/curso/images/tema1/t_1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Al final del año 2 reconocimiento posterior del componente financiero',
        imagen: require('@/assets/curso/images/tema1/t_2.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'Por reclasificar el crédito del largo al corto plazo',
        imagen: require('@/assets/curso/images/tema1/t_3.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'Reconocimiento por cobro de crédito.',
        imagen: require('@/assets/curso/images/tema1/t_4.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyderl: [
      {
        titulo: '',
        texto: 'Reconocimiento inicial',
        imagen: require('@/assets/curso/images/tema1/t_5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'AÑO 1. Cobro del interés explícito',
        imagen: require('@/assets/curso/images/tema1/t_6.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'AÑO 1. Devengo del interés implícito',
        imagen: require('@/assets/curso/images/tema1/t_7.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'AÑO 1. Reclasificación de los títulos a corto plazo.',
        imagen: require('@/assets/curso/images/tema1/t_8.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'AÑO 2. Cobro del interés explícito',
        imagen: require('@/assets/curso/images/tema1/t_9.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'AÑO 2. Devengo del interés implícito.',
        imagen: require('@/assets/curso/images/tema1/t_10.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'AÑO 2 Reembolso de los títulos',
        imagen: require('@/assets/curso/images/tema1/t_11.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
