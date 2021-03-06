<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Instrumentos de patrimonio

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
        p Un instrumento de patrimonio es un negocio respaldado por un contrato que pone de manifiesto una participación residual en los activos de una entidad después de deducir todos los pasivos. 
        br
        p Algunos ejemplos de instrumentos de patrimonio, son las acciones ordinarias, ciertos tipos de acciones preferentes, así como, las opciones u otro tipo de derechos o bonos para la suscripción o compra de acciones ordinarias de la empresa.
        br
        p A continuación, se relaciona un ejemplo específico de ello :
        br
        p.mb-5 Una obligación (contrato) que será cancelado por la entidad entregando o recibiendo una cantidad acordada de sus instrumentos de patrimonio propio a cambio de un importe fijo en efectivo o cualquier otro activo financiero será un instrumento de patrimonio.
      .col-lg-6
        img.img-a.my-3(src="@/assets/curso/images/tema2/img_9.svg" alt="", style="width:500px; display:block; margin:auto 0;")

    #t_2_1.titulo-segundo
      h2 2.1 Reconocimiento, medición, presentación, revelación

    p.mt-5 En el presente ítem se aborda conceptos que determinan el reconocimiento de los instrumentos de patrimonio, a su vez presenta ejemplos que acompañan el proceso de aplicabilidad.
    
    .h5.mt-5.mb-4 Reconocimiento

    p Una entidad reconocerá la emisión de acciones o de otros instrumentos de patrimonio cuando emita esos instrumentos y otra parte esté obligada a proporcionar efectivo u otros recursos a la entidad a cambio de estos. (Pasivos y patrimonio 2009, s.f).
    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
          img.img-a.my-3(src="@/assets/curso/images/tema2/img_10.svg" alt="", style="width:500px; display:block; margin:auto 0;")
      .col-lg-6
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema2/ico_1.svg' alt="", style="width:70px; display:block; margin:auto 0;")    
          .col
            p Si los instrumentos de patrimonio se emiten antes de que la entidad reciba el efectivo u otros recursos, la entidad presentará el importe por cobrar como una compensación al patrimonio en su estado de situación financiera, no como un activo.
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema2/ico_2.svg' alt="", style="width:70px; display:block; margin:auto 0;")     
          .col
            p Si la entidad recibe el efectivo u otros recursos antes de que se emitan los instrumentos de patrimonio, y no se puede requerir a la entidad el reembolso del efectivo o de los otros recursos recibidos, la entidad reconocerá el correspondiente incremento en el patrimonio en la medida de la contraprestación recibida. 
        hr.mt-5.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img.me-5(src='@/assets/curso/images/tema2/ico_3.svg' alt="", style="width:70px; display:block; margin:auto 0;")
          .col
            p En la medida en que los instrumentos de patrimonio hayan sido suscritos, pero no emitidos y la entidad no haya todavía recibido el efectivo o los otros recursos, la entidad no reconocerá un incremento en el patrimonio.
        hr.mt-5.mb-4
    .h5.mt-5.mb-4 Medición

    p Con los nuevos marcos normativos es improbable que el patrimonio contable multiplicado por el porcentaje de participación represente una estimación fiable del valor razonable de una inversión en instrumento de patrimonio sin cotización pública.
    p En periodos posteriores al reconocimiento inicial, y solo para algunos casos, por ejemplo, en inversiones patrimoniales de baja o ninguna bursatilidad, el valor determinado a partir de una remedición a valor razonable de todos los activos y pasivos de la entidad (patrimonio) podría representar una estimación fiable.

    .row.justify-content-center.align-items-center.mt-5.mb-3
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4
            .h5 Ejemplo:
            p La sociedad Contable SAS, compra el primero de julio del año 0 un paquete de acciones del Banco de Bogotá, por valor de $130.000.000 y las clasifica como activos disponibles para la venta.
        .col-lg-6
          img.img-jumbotron-padding(src='@/assets/curso/images/tema2/img_13.svg' alt="", style="width:500px; display:block; margin:auto 0;")

    p También compra opciones de venta que le dan derecho a vender el paquete de acciones por $130.000.000, el precio pagado por la opción es de $1.300.000.
    br
    p.mb-4 A 31 de diciembre del año 0 el valor razonable del paquete de acciones es de $125.000.000 y el valor razonable de la opción es de $1.600.000.

    SlyderC.mb-5.slyder-C_content(:datos="datosSlyderd")

    separador

    #t_2_2.titulo-segundo
      h2 2.2 Aportes de capital
  
    p.mb-3 Los aportes iniciales de los socios corresponden al capital y está representado en acciones, libremente negociables en las bolsas de valores. 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p <b>Autorizado:</b> es el valor máximo de capitalización de una sociedad
            li 
              i.fas.fa-check
              p <b>Suscrito:</b> es la parte del capital autorizado, el cual los accionistas se comprometen a pagar, como si fuera una venta a plazos, sin superar el año, artículo 387 del Código del Comercio, para el caso de las Sociedades Simplificadas por acciones S.A.S, el plazo es de dos años acorde a la ley 1258 de 2008 artículo 387
            li 
              i.fas.fa-check
              p <b>Pagado:</b> Es la parte del capital suscrito que los accionistas han cancelado y que efectivamente se encuentran en poder de la sociedad.
          .cajon.color-secundario.p-4.mt-5.mb-4
            .h5 Ejemplo: 
            p.mb-3 En 2017 se constituyó la empresa Aprendiendo S.A., con un capital autorizado de 120.000 acciones con un valor por acción de $2.500, los accionistas suscribieron el 50 % de las acciones autorizadas y pagaron el 70 % de la suscripción.
      .col-lg-6
        img.img-jumbotron-padding(src='@/assets/curso/images/tema2/img_11.svg' alt="", style="width:500px; display:block; margin:auto 0;")
      
      h4.titulo-cuarto  Reconocimiento inicial

      
    .row.justify-content-center.align-items-center.mt-5
        .col-lg-7
          .tabla.color-acento-contenido.mb-5
            table
              thead
                tr.th-1.text-center
                  th CUENTA
                  th DÉBITOS
                  th CRÉDITOS
              tbody
                tr
                  td Capital por suscribir
                  td 300.000.000
                  td 
                tr
                  td Capital autorizado
                  td 
                  td 300.000.000
        .col-lg-8
          .tabla-b.color-acento-contenido.mb-5
            
            .tabla.mb-4
              table
                thead
                  tr.th-1.text-center
                    th CUENTA
                    th DÉBITOS
                    th CRÉDITOS
                tbody
                  tr
                    td Efectivo y sus equivalentes
                    td 105.000.000
                    td 
                  tr
                    td Capital suscrito por pagar
                    td 45.000.000
                    td 
                  tr
                    td Capital por suscribir
                    td 
                    td 150.000.000
      
        h4.titulo-cuarto  Detalle de las cuentas: 
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        .jumbotron-cafe.p-4
          .row
            .col-12.col-md-8.col-lg-6.col-xl-6
              p.mb-2 Capital autorizado       
              p.mb-3 Valor por acción
              br         
              img(src='@/assets/curso/images/tema2/line.svg' alt="", style="width:100px; display:block; margin:auto 18rem;")
              br
              p.mb-2 Valor total            
              p.mb-2 Capital Suscrito
              img(src='@/assets/curso/images/tema2/line.svg' alt="", style="width:100px; display:block; margin:auto 18rem;")
              br              
            .col-12.col-md-8.col-lg-6.col-xl-6
              p 120.000 acciones
              br
              
              P 2.500,00 
              br
              br
              p 300.000.000
              P 50 %
              
      .col-12.col-md-8.col-lg-6.col-xl-6
        .jumbotron-cafe.p-4
          .row
            .col-12.col-md-8.col-lg-6.col-xl-6
              p.mb-2 Total suscrito      
              p.mb-3 Pagado 
              Before       
              img(src='@/assets/curso/images/tema2/line.svg' alt="", style="width:100px; display:block; margin:auto 18rem;")
              br
              p.mb-2 Total capital pagado 
              br           
              p.mb-2 Capital Por pagar 
              img(src='@/assets/curso/images/tema2/line.svg' alt="", style="width:100px; display:block; margin:auto 18rem;")
              br           
            .col-12.col-md-8.col-lg-6.col-xl-6
              p 150.000.000
              P 70 %
              br     
              br        
              p 105.000.000
              br  
              P 45.000.000 
              
    h4.mb-3 Presentación:
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        .jumbotron-cafe.p-5
          p Aprendiendo S.A. 
          p Estados de Situación Financiera Inicial  
          p.mb-2 A 1/1/17
          p.mb-2 Activos
          p.mb-4 Activo Corriente

          p.mb-2 Efectivo y sus equivalentes...........$105.000.000

          p.mb-2 Total, activos...................................$105.000.000

          strong.mb-2 Pasivos
          p.mb-2 Total, Pasivos.....................................................0

          p Patrimonio

          p.mb-2 Capital social

          p.mb-2 Capital autorizado........................$ 300.000.000

          p.mb-2 Capital por suscribir.....................$ (150.000.000)

          p.mb-2 Capital suscrito por cobrar............$ (45.000.000)

          p.mb-2 Total, Patrimonio............................$ 105.000.000

          p.mb-2 Total, Pasivo y Patrimonio.............$ 105.000.000

      .col-lg-6.p-5
        img.img-a(src='@/assets/curso/images/tema2/img_12.svg' alt="", style="width:400px; display:block; margin:auto 0;")

    separador
    
    #t_2_3.titulo-segundo
      h2 2.3 Ganancias acumuladas
    
    p Es el dinero guardado que no es entregado a los accionistas en forma de dividendos, estas ganancias se encuentran en el patrimonio como ganancias acumuladas en el estado de Situación Financiera.
  
    p.mb-5 De igual forma se relaciona en el estado de cambios en el patrimonio; cuyo objetivo, es mostrar los cambios o variaciones presentadas de un periodo a otro. Entre las variaciones que se analizan y que son significativas para dicho estado financiero, se puede observar la política de dividendos que maneja la entidad, donde se encuentra estipulado no distribuir el 100% de las utilidades del ejercicio, de tal manera, que la parte no decretada para reparto, queda acumulada hasta tanto los socios decidan distribuirla entre los accionistas.

    separador

    #t_2_4.titulo-segundo
      h2 2.4 Reservas
    p.mb-5 Están contempladas en el artículo 452, 453 y 454 del Código del comercio, sección II reparto de utilidades.

    TabsC.color-acento-contenido.mb-5
        .py-3.py-md-4(titulo="Art. 452")
          .row
            .col-12
              .h6.mb-3  Reserva Legal
              p Art. 452. Reserva Legal. Las sociedades anónimas constituirán una reserva legal que ascenderá por lo menos al cincuenta por ciento del capital suscrito, formada con el diez por ciento de las utilidades líquidas de cada ejercicio. Cuando esta reserva llegue al cincuenta por ciento mencionado, la sociedad no tendrá obligación de continuar llevando a esta cuenta el diez por ciento de las utilidades líquidas. Pero si disminuye, volverá a apropiarse el mismo diez por ciento de tales utilidades hasta cuando la reserva llegue nuevamente al límite fijado. Conc.: 110 núm. 8°, 154, 271 núm. 4°, 272 núm. 5°, 350, 371, 454, 456, 476. (Legis. 2020).
                             
        .py-3.py-md-4(titulo="Art. 453")
          .row
            .col-12
              .h6.mb-3  Reservas estatutarias y ocasionales 
              p Art. 453. Reservas estatutarias y ocasionales. Las reservas estatutarias serán obligatorias mientras no se supriman mediante una reforma del contrato social, o mientras no alcancen el monto previsto para las mismas. Las reservas ocasionales que ordene la asamblea solo serán obligatorias para el ejercicio en el cual se hagan y la misma asamblea podrá cambiar su destinación o distribuirlas cuando resulten innecesarias. (leyes estatutarias 2020).
        .py-3.py-md-4(titulo="Art. 454")
          .row     
            .col-12
              .h6.mb-3  Incremento en el porcentaje de distribución de utilidades
              p Art. 454. _ Incremento en el porcentaje de distribución de utilidades. Si la suma de las reservas legal, estatutaria y ocasional excediere del ciento por ciento (100 %) del capital suscrito, el porcentaje obligatorio de utilidades líquidas que deberá repartir la sociedad conforme al artículo 155, se elevará al setenta por ciento. (Código Comercio Colombiano. 1971)
              br
              p La reserva legal es un ahorro que las empresas por mandato legal en Colombia están obligadas a utilizar con el fin de proteger el capital y preservar las empresas en el futuro evitando disolverse o liquidarse por la disminución de su patrimonio. Las sociedades limitadas, las anónimas, en comandita por acciones y las extranjeras. Deben hacer uso de la figura reserva legal. En el primer año, no se efectúan reservas; es decir, no aplica el 10 % sobre las utilidades.
              
        .py-3.py-md-4(titulo="Art. 456")
          .row     
            .col-12
              p.mb-2 Según el Código del comercio, sección II reparto de utilidades artículo 456, las reservas se utilizan para:
              .h6.mb-3  Manejo de pérdidas
              p Art. 456. Manejo de pérdidas. Las pérdidas se enjugarán con las reservas que hayan sido destinadas especialmente para ese propósito y, en su defecto, con la reserva legal. Las reservas cuya finalidad fuere la de absorber determinadas pérdidas no se podrán emplear para cubrir otras distintas, salvo que así lo decida la asamblea. Si la reserva legal fuere insuficiente para enjugar el déficit de capital, se aplicarán a este fin los beneficios sociales de los ejercicios siguientes.
              br
              p La reserva legal para las sociedades de responsabilidad limitada aplicará el 10 % de reservas frente a sus utilidades acorde al libro segundo, responsabilidad limitada del Código del Comercio:

        .py-3.py-md-4(titulo="Art. 371")
          .row     
            .col-12
              p Art. 371. Reserva Legal, balances y reparto de utilidades. La sociedad formará una reserva legal, con sujeción a las reglas establecidas para la anónima. Estas mismas reglas se observarán en cuanto a los balances de fin de ejercicio y al reparto de utilidades. (Código Comercio Colombiano. 2020b).
              br  
              p En las sociedades extranjeras aplicará el 10 % de reserva legal, como es aplicada en las sociedades anónimas sin importar el tamaño de empresa. 

        .py-3.py-md-4(titulo="Art. 476")
          .row     
            .col-md-9.mb-4.mb-md-0
              p.mb-2 Acorde al Libro Segundo De las Sociedades Extranjeras, Artículo 476 Código Comercio Colombiano:
          .row.justify-content-center.align-items-center.mb-5.mt-5
            .col-4 
              .h6.mb-3.img-jumbotron-padding Reservas y vigilancia
              p.img-jumbotron-padding Art. 476. _ Reservas y vigilancia. Las sociedades extranjeras con negocios permanentes en Colombia constituirán las reservas y provisiones que la ley exige a las anónimas nacionales y cumplirán los demás requisitos establecidos para su control y vigilancia. 
            .col-8   
              .tabla-c.mb-5
                table
                  caption 
                  tr
                    th Utilidad
                    td
                      .h6.mb-0 5.000.000,00 
                  tr
                    th Menos impuesto de renta 32 %
                    td
                      .h6.mb-0 1.600.000,00
                  tr
                    th Utilidad neta
                    td
                      .h6.mb-0  3.400.000,00
                  tr
                    th Reserva Legal 10 %
                    td
                      .h6.mb-0 340.000,00
                  tr
                    th Utilidad a distribuir a los o accionistas
                    td
                      .h6.mb-0 3.060.000,00
            p.mt-5 Frente a la utilidad se aplica el % porcentaje vigente definido en cada reforma tributaria, el resultado obtenido, se aplica el 10 % de reserva legal y se resta a la utilidad líquida.

    separador

    #t_2_5.titulo-segundo
      h2 2.5 Otro resultado integral (ORI)  
    
    p.mt-5 Una entidad presentará su resultado integral total para un periodo: en un único estado del resultado integral, en cuyo caso el estado del resultado integral presentará todas las partidas de ingreso y gasto reconocidas en el periodo además de las partidas correspondientes a utilidades no realizadas, o en dos estados —un estado de resultados y un estado del resultado integral—, en cuyo caso el estado de resultados presentará todas las partidas de ingreso y gasto reconocidas en el periodo excepto las que estén reconocidas en el resultado integral total fuera del resultado.
    br
    p.mb-4 Se reconocen como otro resultado integral y forman parte del resultado integral total, cuando se producen:

    .row.justify-content-center.align-items-center.mt-5
        .col
          h6.mb-2 Clases:
          .col-sm  
            
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Diferencias en cambio que surjan de la conversión de moneda extranjera. 
                  li 
                    i.fas.fa-check
                    | Diferencias en cálculos actuariales. 

                  li
                    i.fas.fa-check
                    | Cambios en los importes recuperables de activos revalorizados con cambios en el patrimonio.
    
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10
          img.img-a(src='@/assets/curso/images/tema2/t_5.svg' alt="", style="width:800px; display:block; margin:auto 0;")          

    p.mb-3 Para ampliar la información sobre la normatividad aplicable a instrumentos financieros, los invito a revisar los siguientes enlaces:

    p.mb-3 También denominada notas internas, utilizadas para enmendar errores o realizar ajustes contables. Se utiliza en aquellas operaciones que carecen de un soporte específico.

    
    .row.justify-content-center.align-items-center
      .col
        p.mt-3 Consulte en la página Consejo Técnico de la Contaduría Pública, la Norma Internacional de Información financiera NIIF 7. 

      .row.mt-5
        .col-lg-6
          a.anexo.mb-4.mb-lg-0(href="http://www.aplicaciones-mcit.gov.co/adjuntos/niif/12_ES_BV2012_IFRS07_PART%20A.pdf" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Consejo Técnico de la Contaduría Pública, 2010, P, A256.
          p.mt-3.mb-4 Consulte en la página del Consejo Técnico de la Contaduría Pública la Norma Internacional de Información financiera
          a.anexo.mb-4.mb-lg-0(href=" https://www.ctcp.gov.co/publicaciones-ctcp/orientaciones-tecnicas/1472852072-9672 " target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Consejo Técnico de la Contaduría Pública, 2019 Página 5
          p.mt-3.mb-4 Consulte en la página Consejo Técnico de la Contaduría Pública, el tema instrumentos del patrimonio, página12 y siguientes
          a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/publicaciones-ctcp/orientaciones-tecnicas/1472851475-1578" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Consejo Técnico de la Contaduría Pública, 2015, P., 2.
          p.mt-3.mb-4 Consulte en la página Consejo Técnico de la Contaduría Pública, el tema Otro Resultado Integral ORI, página 8 y siguientes.
          a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Consejo Técnico de la Contaduría Pública, 2014, P.8
        .col-auto 
            img.img-a.my-3(src="@/assets/curso/images/tema2/img_14.svg" alt="", style="width:350px; display:inline-block; margin:auto 0").img-fluid












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
        titulo: 'Reconocimiento inicial, compra de las opciones',
        texto: '',
        imagen: require('@/assets/curso/images/tema2/t_2.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Reconocimiento posterior a 31 de diciembre. Por la contabilización de la partida cubierta a valor razonable con cambios en resultados',
        texto: '',
        imagen: require('@/assets/curso/images/tema2/t_3.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Reconocimiento posterior a 31 de diciembre. Por la contabilización del instrumento de cobertura a su valor razonable, con cambios en los resultados del ejercicio',
        texto: '',
        imagen: require('@/assets/curso/images/tema2/t_4.svg'),

        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
