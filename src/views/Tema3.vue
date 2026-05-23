<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Gestión de información contable y tributaria
    p La #[b gestión de información contable y tributaria] constituye una base técnica de la atención al usuario, porque permite transformar un requerimiento en una #[b respuesta sustentada], verificable y coherente con los registros de la organización. En este punto del proceso ya no basta con haber identificado al usuario, clasificado la solicitud y organizado la atención; también es necesario consultar #[b fuentes de información confiables], validar datos, controlar accesos y producir salidas que respalden la respuesta emitida.
    p.mb-5 En Colombia, la <b> Ley 1581 de 2012</b> define el tratamiento de datos personales, sus principios y su ámbito de aplicación para entidades públicas y privadas, lo que da sustento a la exigencia de gestionar la información con legalidad, finalidad y control (Arévalo, 2017; Congreso de la República de Colombia, 2012). 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img66.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En contextos contables y tributarios, la información suele encontrarse distribuida en:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |  
            p.mb-0 #[i Software] contable. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Bases de datos tributarias. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Portales institucionales. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Repositorios documentales. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Módulos de reportes.
          br
    p.mb-0  Además, el Modelo de Seguridad y Privacidad de la Información de MinTIC orienta la incorporación de la seguridad en procesos, trámites, servicios, sistemas de información e infraestructura, con énfasis en #[b confidencialidad, integridad, disponibilidad y privacidad de los datos]. Por su parte, la DIAN mantiene servicios en línea y portal transaccional para consultas y trámites tributarios, lo que evidencia la relevancia de los medios autorizados y trazables para la gestión de requerimientos (Domínguez, 2012; MinTIC).
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Estructura y función de los sistemas de información contable y tributaria
    p.mb-5 Los sistemas de información contable y tributaria pueden entenderse como conjuntos #[b organizados de datos, #[i software], procedimientos, usuarios autorizados y soportes documentales] que permiten registrar, procesar, almacenar y recuperar información útil para la operación financiera, el cumplimiento fiscal y la atención de solicitudes. Su función dentro del trámite no se reduce al almacenamiento de registros, porque también facilitan:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/d.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center El control de transacciones.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/c.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La recuperación de evidencias.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/b.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La organización de la información según roles.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/a.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La consulta conforme a necesidades autorizadas.
    p.mb-5 Esta comprensión resulta coherente con la noción de #[b bases de datos y tratamiento de datos personales] prevista en la #[b Ley 1581 de 2012] y con los lineamientos de seguridad y privacidad aplicables al ciclo de vida de la información (Congreso de la República de Colombia, 2012). 
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img67.png', alt='').m-auto
        .col-xl.fit___box_container
          p Desde una perspectiva operativa, estos sistemas cumplen varias funciones simultáneas:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Organizan la información.
            li.mb-0 
              span.fa-li
                i.fas.fa-check-circle
              | Facilitan la recuperación de datos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Permiten el control de transacciones.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Sirven de soporte para la #[b trazabilidad] del proceso.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Sin embargo, un error frecuente consiste en asumir que cualquier dato disponible en el sistema es suficiente por sí mismo para responder al usuario. En realidad, la utilidad de un sistema depende de la #[b calidad de sus registros], de la actualización de la información y de la capacidad de integrarla con otras fuentes internas o externas.
        p.mb-0 En consecuencia, su valor dentro de la atención de requerimientos no radica únicamente en almacenar información, sino en permitir su consulta, contraste, control y recuperación como soporte de #[b decisiones] y respuestas técnicamente sustentadas (MinTIC, 2025). Los componentes que suelen integrar estos sistemas permiten el #[b uso confiable] de la información durante la atención del requerimiento:
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img68.png").m-auto
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img69.png').m-auto
            h4.mb-3.estilo-text Datos
            p.mb-0.text-center Corresponden a registros contables, tributarios y documentales que proveen la base necesaria para validar y responder las solicitudes.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img70.png').m-auto
            h4.mb-3.estilo-text #[i Software]
            p.mb-0.text-center Comprende aplicaciones de registro, consulta y reporte que permiten procesar, organizar y recuperar la información requerida.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img71.png').m-auto
            h4.mb-3.estilo-text Usuarios autorizados
            p.mb-0.text-center Incluye al personal con roles y permisos definidos, encargado de acceder y gestionar la información según su competencia.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img72.png').m-auto
            h4.mb-3.estilo-text Procedimientos
            p.mb-0.text-center Reúne las reglas para la captura, validación y consulta de datos, orientando el uso correcto del sistema.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img73.png').m-auto
            h4.mb-3.estilo-text Soportes documentales
            p.mb-0.text-center Integra facturas, comprobantes, certificados y anexos que respaldan la verificación de los registros.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img74.png').m-auto
            h4.mb-3.estilo-text Controles de acceso
            p.mb-0.text-center  Comprende credenciales, perfiles y restricciones que protegen la información y delimitan su uso autorizado. 
        Separador
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Consulta de información
        p.mb-5 #[b La consulta de información] consiste en recuperar, revisar y utilizar datos pertinentes para atender un requerimiento de manera técnica y sustentada. En procesos #[b contables y tributarios], esta labor puede realizarse en software contable, bases de datos tributarias, portales internos, repositorios documentales y módulos de reportes.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img75.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La DIAN, por ejemplo, ofrece en su portal transaccional servicios como consulta de recibos de pago, consulta de información reportada por terceros, presentación de declaraciones y radicación de solicitudes, lo que muestra que la atención actual exige reconocer medios institucionales diferenciados y autorizados para acceder a información tributaria.
    p.mb-5 No obstante, consultar información no significa extraer datos indiscriminadamente. 
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img76.png', alt='').m-auto
        .col-xl.fit___box_container
          p Una consulta técnica exige:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Pertinencia, porque debe responder al objeto del requerimiento. 
            li.mb-0 
              span.fa-li
                i.fas.fa-check-circle
              | Suficiencia, porque debe reunir la evidencia necesaria. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Control, porque solo debe realizarse en medios autorizados y por personal habilitado. 
    p.mb-5 En este punto también adquieren importancia las #[b consultas estructuradas, incluidas búsquedas avanzadas y filtros definidos] por la arquitectura del sistema, cuando la organización requiere recuperar información distribuida en varios módulos o tablas. Aun así, una consulta mal formulada puede devolver información parcial, duplicada o irrelevante, lo que afecta la calidad de la respuesta final. Cada fuente ofrece un tipo particular de información y su consulta debe responder a la naturaleza del trámite:  
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img77.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="<em>Software</em> contable").ajuste-cajaAcordion
            p.mb-3 Contiene asientos, saldos, movimientos y comprobantes, lo que permite verificar registros contables y sus respectivos soportes.
          .row(titulo="Base de datos tributaria").ajuste-cajaAcordion
            p.mb-3 Reúne declaraciones, retenciones, pagos y obligaciones, permitiendo validar información fiscal y tributaria.
          .row(titulo="Portal interno").ajuste-cajaAcordion
            p.mb-3 Integra historial de trámites, radicados y solicitudes, lo que facilita consultar el estado y seguimiento del requerimiento.
          .row(titulo="Repositorio documental").ajuste-cajaAcordion
            p.mb-3 Almacena facturas, certificados, anexos y soportes escaneados, permitiendo confirmar la evidencia documental disponible.
          .row(titulo="Módulo de reportes").ajuste-cajaAcordion
            p.mb-3 Genera informes por periodo, tercero, cuenta o concepto, lo que facilita producir salidas para responder al usuario.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img78.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La consulta de información para la atención del requerimiento suele desarrollarse mediante la siguiente secuencia operativa:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Identificar la necesidad de información.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 ¿Qué dato se necesita? 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Seleccionar la fuente autorizada.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 ¿Dónde consultar? 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Consultar en el sistema autorizado.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Acceder y recuperar datos. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Revisar y contrastar resultados.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Verificar y comparar datos. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Validar con soporte documental.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Confirmar evidencias. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Disponer los datos para la respuesta.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Organizar la salida.
          br    
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Validación de datos, consistencia de registros y control de calidad de la información
    p.mb-5 La validación de datos tiene como propósito #[b verificar que la información obtenida sea correcta], suficiente y coherente con el requerimiento formulado. En procesos contables y tributarios, esta validación resulta necesaria porque una misma solicitud puede apoyarse en registros de distintas fuentes, periodos o niveles de detalle. Por ello, no basta con encontrar un dato en el sistema; es indispensable confirmar que corresponda:
    .bg-carrusel
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img79.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Al usuario adecuado.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img80.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Al periodo consultado.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img81.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Al concepto correcto.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img82.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Al soporte documental pertinente.
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p Esta tarea es relevante porque una respuesta aparentemente rápida, pero construida sobre datos inconsistentes, compromete la confiabilidad del servicio y puede generar consecuencias operativas o tributarias para la organización y para el usuario (Arévalo, 2017; Congreso de la República de Colombia, 2012).
            p La consistencia de registros se refiere a la concordancia entre datos que deberían guardar relación lógica entre sí, como valores, fechas, identificadores, cuentas, terceros, comprobantes y obligaciones asociadas. En este sentido, el control de calidad de la información exige revisar:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Integridad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Exactitud.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Actualidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Coherencia.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img83.png").m-auto 
    p.mb-5 Cuando existan diferencias entre registros, la validación no debe limitarse a escoger uno de ellos, sino que debe establecer la fuente de origen, revisar soportes asociados, verificar fechas de actualización y determinar cuál registro conserva mayor consistencia documental y operativa dentro del proceso.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-intro(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img84.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 El Decreto 1074 de 2015, en desarrollo del principio de veracidad o calidad, dispone que deben adoptarse medidas razonables para asegurar que los datos personales sean precisos y suficientes, y que se actualicen, rectifiquen o supriman cuando corresponda. Por ello, validar implica contrastar, jerarquizar fuentes y documentar la decisión técnica adoptada antes de emitir una respuesta al usuario (González, 2018; República de Colombia, 2015).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img85.png").m-auto
    p.mb-5 Estos criterios apoyan la revisión técnica de los datos antes de emitir una respuesta al usuario:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img86.png').m-auto
            h4.mb-3.estilo-text Exactitud
            p.mb-0.text-center Corresponde a la coincidencia del dato con el registro real, lo que permite verificar valores, fechas, terceros y conceptos.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img87.png').m-auto
            h4.mb-3.estilo-text Integridad
            p.mb-0.text-center Se refiere a la presencia completa de la información necesaria, permitiendo confirmar que no falten soportes ni campos obligatorios.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img88.png').m-auto
            h4.mb-3.estilo-text Coherencia
            p.mb-0.text-center Consiste en la relación lógica entre registros vinculados, lo que permite contrastar documentos, saldos, pagos y movimientos.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img89.png').m-auto
            h4.mb-3.estilo-text Actualidad
            p.mb-0.text-center Hace referencia a la vigencia temporal de la información, permitiendo validar que los datos correspondan al periodo requerido.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img90.png').m-auto
            h4.mb-3.estilo-text Pertinencia
            p.mb-0.text-center Corresponde a la relación directa con la solicitud del usuario, lo que permite evitar información irrelevante o excesiva.
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p Los criterios anteriores permiten establecer una revisión general de #[b la calidad de la información]; sin embargo, en la atención de requerimientos contables y tributarios, esa validación no puede quedarse en una comprobación aislada de exactitud o integridad.
            p.mb-0 En muchos casos es necesario #[b contrastar registros] provenientes de distintas fuentes, debido a que una misma solicitud puede involucrar comprobantes, movimientos, soportes documentales y estados de trámite que no siempre coinciden de manera inmediata. Por ello, #[b la consistencia de la información] se fortalece cuando el análisis incorpora verificaciones cruzadas que permitan identificar diferencias, confirmar correspondencias y sustentar técnicamente la decisión adoptada frente al requerimiento.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img91.png").m-auto
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Ejemplo de control de consistencia entre registros
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Elemento comparado
                th.ajuste-border-tabla.texto-left Fuente 1
                th.ajuste-border-tabla.texto-left Fuente 2
                th.texto-left Verificación requerida
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Valor pagado
                td.ajuste-border-tabla.texto-left Comprobante contable
                td.ajuste-border-tabla.texto-left Base tributaria
                td.texto-left Confirmar coincidencia del monto.
              tr
                td.ajuste-border-tabla.texto-left Fecha de registro
                td.ajuste-border-tabla.texto-left #[i Software] contable
                td.ajuste-border-tabla.texto-left Soporte documental
                td.texto-left Verificar correspondencia temporal.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Identificación del tercero
                td.ajuste-border-tabla.texto-left Maestro de terceros
                td.ajuste-border-tabla.texto-left Documento soporte
                td.texto-left Confirmar coincidencia del titular.
              tr
                td.ajuste-border-tabla.texto-left Concepto del movimiento
                td.ajuste-border-tabla.texto-left Asiento contable
                td.ajuste-border-tabla.texto-left Declaración o anexo
                td.texto-left Revisar coherencia del concepto.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Estado del trámite
                td.ajuste-border-tabla.texto-left Portal interno
                td.ajuste-border-tabla.texto-left Historial de atención
                td.texto-left  Verificar avance y actuaciones previas.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Seguridad de acceso, confidencialidad y trazabilidad en el uso de la información
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La #[b seguridad de acceso] se refiere al conjunto de medidas que delimitan quién puede consultar, procesar, modificar o comunicar información dentro de un sistema. En procesos contables y tributarios, esta dimensión es especialmente sensible porque los registros suelen contener datos financieros, fiscales, documentales y personales cuya divulgación o uso indebido puede afectar la confianza del usuario y comprometer la responsabilidad institucional.
        p.mb-0 La Ley 1581 de 2012 establece principios como legalidad y finalidad en el tratamiento de datos personales, mientras que el MSPI de MinTIC orienta a incorporar la seguridad de la información en procesos, trámites, servicios y sistemas, con el propósito de preservar confidencialidad, integridad, disponibilidad y privacidad de los datos (Congreso de la República de Colombia, 2012).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img92.png").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img93.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[b La confidencialidad] se articula con esta seguridad de acceso, ya que implica proteger la información frente a consultas no autorizadas, usos inadecuados o divulgación innecesaria. A su vez, la trazabilidad permite dejar evidencia sobre:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Qué información fue consultada. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Quién la consultó. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Con qué propósito. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 En qué momento del proceso. 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3.ajuste-tema1-5(data-aos="fade-right")
          p.mb-0 En desarrollo de #[b la reglamentación de protección de datos], el Decreto 1074 de 2015 dispone que todo responsable y encargado debe designar una persona o área que dé trámite a las solicitudes de los titulares, lo cual refuerza la necesidad de roles definidos, control del acceso y documentación de las actuaciones.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img94.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 Por ello, la trazabilidad no debe verse como una carga adicional, sino como una condición de respaldo para #[b la calidad técnica y documental del trámite] (Domínguez, 2012).  Estas dimensiones esenciales permiten comprender que proteger la información no consiste únicamente en restringir accesos, sino también en justificar y registrar su utilización: 
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img95.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Seguridad de acceso
            p.mb-0.text-center Tiene como propósito restringir el uso de la información según el rol y la autorización asignada, mediante ingreso con credenciales y permisos diferenciados.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img96.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Confidencialidad
            p.mb-0.text-center Busca evitar la divulgación indebida de la información, mediante entrega limitada únicamente a usuarios legitimados.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img97.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Trazabilidad
            p.mb-0.text-center Permite registrar las actuaciones realizadas sobre la información, mediante historial de consultas, modificaciones y respuestas emitidas.
    p.mb-5 La relación entre #[b seguridad de acceso, confidencialidad y trazabilidad] muestra que el uso de la información no depende solo de restricciones formales, sino también de controles concretos que permitan aplicar esos principios en la operación cotidiana. 
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img98.png', alt='').m-auto
        .col-xl.fit___box_container
          p En consecuencia, la atención de requerimientos exige pasar de una comprensión conceptual de la protección de la información a la implementación de mecanismos verificables que regulen:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  El ingreso a los sistemas. 
            li.mb-0 
              span.fa-li
                i.fas.fa-check-circle
              | La consulta de registros. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  La legitimidad del solicitante. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  La conservación de evidencias sobre las actuaciones realizadas. 
    p.mb-5 De este modo, los controles no solo previenen riesgos, sino que también respaldan la responsabilidad técnica y documental del trámite. Los siguientes controles apoyan una gestión más segura y coherente con la necesidad de resguardar datos sensibles:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Credenciales individuales
                p.mb-0 Tienen como finalidad identificar al usuario que accede al sistema, lo que reduce el uso compartido o no autorizado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img99.png', alt='' style="max-width: 500px").m-auto  
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Perfiles por rol
                p.mb-0 Buscan limitar el acceso a la información según la función asignada, reduciendo accesos excesivos o innecesarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img100.png', alt='' style="max-width: 500px").m-auto  
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Registro de consultas
                p.mb-0 Permite dejar evidencia del uso de la información, lo que reduce la falta de trazabilidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img101.png', alt='' style="max-width: 500px").m-auto  
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Validación de legitimidad del solicitante
                p.mb-0 Tiene como propósito confirmar la procedencia del requerimiento, reduciendo la entrega indebida de información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img102.png', alt='' style="max-width: 500px").m-auto  
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resguardo de soportes
                p.mb-0 Busca proteger documentos y anexos, lo que reduce riesgos de pérdida, alteración o divulgación no autorizada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img103.png', alt='' style="max-width: 500px").m-auto  
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Reportes, consultas estructuradas e integración de datos para la respuesta al usuario
    p.mb-5 #[b La generación de reportes] constituye una salida técnica del proceso de consulta y validación de información. En atención a requerimientos contables y tributarios, los reportes permiten #[b presentar datos organizados por periodo, tercero, cuenta, obligación, movimiento o estado del trámite], lo que facilita sustentar respuestas de forma más clara y verificable. Sin embargo, un reporte no debe entenderse como una simple impresión o descarga automática. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img104.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Su valor depende de:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 La pertinencia de los criterios utilizados. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 El nivel de detalle requerido. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 La correspondencia entre la información mostrada y la solicitud del usuario. 
    p.mb-5 En ese mismo marco, #[b las consultas estructuradas y la integración de datos] pueden apoyar la recuperación de información cuando esta se encuentra distribuida en varias tablas, módulos o fuentes institucionales. Entre estas consultas pueden encontrarse filtros avanzados y, cuando la arquitectura lo permita y el perfil autorizado lo habilite, consultas SQL orientadas a recuperar o relacionar registros con mayor precisión. No obstante:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center No toda consulta compleja produce una mejor respuesta. 
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center No toda integración de datos garantiza calidad por sí misma. 
    p.mb-5 Estas herramientas solo resultan útiles cuando se aplican con criterios de pertinencia, validación y control, y cuando sus resultados se interpretan correctamente dentro del trámite del requerimiento (MinTIC, s. f.; Domínguez, 2012).  Algunos reportes pueden emplearse según la necesidad específica de información:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img105.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Reporte de movimientos").ajuste-cajaAcordion
            p.mb-3 Contiene registros por cuenta, tercero o periodo, lo que permite sustentar validaciones contables.
          .row(titulo="Reporte de obligaciones").ajuste-cajaAcordion
            p.mb-3 Integra el estado de pagos, vencimientos o declaraciones, permitiendo aclarar la situación tributaria del usuario.
          .row(titulo="Reporte de soportes").ajuste-cajaAcordion
            p.mb-3 Presenta la relación de documentos asociados al trámite, lo que respalda la entrega documental requerida.
          .row(titulo="Reporte de seguimiento").ajuste-cajaAcordion
            p.mb-3 Incluye el estado del requerimiento y las actuaciones realizadas, permitiendo informar el avance o la trazabilidad del caso.
          .row(titulo="Reporte consolidado").ajuste-cajaAcordion
            p.mb-3 Reúne datos provenientes de varias fuentes, lo que permite presentar una visión completa de la situación consultada.
    p.mb-5 Los reportes aumentan su utilidad cuando se articulan con mecanismos que permitan recuperar, relacionar y sintetizar información de manera más precisa: 
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img106.png').m-auto
            h4.mb-3.estilo-text Consulta estructurada básica
            p.mb-0.text-center Permite recuperar registros específicos mediante filtros definidos, por lo que se debe verificar que los criterios de búsqueda sean pertinentes.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img107.png').m-auto
            h4.mb-3.estilo-text Consulta relacional
            p.mb-0.text-center Facilita vincular datos de varias tablas o módulos, por lo que se debe confirmar la coherencia entre los campos relacionados.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img108.png').m-auto
            h4.mb-3.estilo-text Integración de datos
            p.mb-0.text-center Consolida información proveniente de distintas fuentes, por lo que se requiere validar su consistencia antes de emitir la respuesta.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img109.png').m-auto
            h4.mb-3.estilo-text Exportación de resultados
            p.mb-0.text-center Facilita la generación de reportes o soportes documentales, por lo que se debe proteger la confidencialidad y el alcance de uso de la información.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img110.png').m-auto
            h4.mb-3.estilo-text Resumen consolidado
            p.mb-0.text-center Sintetiza datos para explicar un caso al usuario, por lo que se deben evitar simplificaciones que oculten diferencias relevantes.
        p.mb-5 Además del estudio conceptual del tema, resulta útil acudir a recursos de apoyo que faciliten la comprensión práctica del manejo de software contable, servicios tributarios en línea, portales institucionales y consultas estructuradas aplicadas a la recuperación de información.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Recursos de apoyo para profundizar en la gestión de información contable y tributaria
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Recurso de apoyo
                th.ajuste-border-tabla.texto-left Fuente sugerida
                th.ajuste-border-tabla.texto-left Tema principal
                th.texto-left Utilidad práctica
            tbody
              tr
                td.ajuste-border-tabla.texto-left Guías y capacitaciones de Siigo Nube
                td.ajuste-border-tabla.texto-left Portal de Clientes Siigo
                td.ajuste-border-tabla.texto-left #[i Software] contable
                td.texto-left Permite revisar procesos de reportes contables y tributarios, configuración de impuestos y manejo de funcionalidades del sistema.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Canales virtuales de atención y servicios en línea
                td.ajuste-border-tabla.texto-left DIAN
                td.ajuste-border-tabla.texto-left Bases de datos tributarias y servicios tributarios
                td.texto-left Facilita comprender trámites, consultas y servicios disponibles en el portal transaccional y en los canales virtuales de la entidad.
              tr
                td.ajuste-border-tabla.texto-left Video atención y autogestión
                td.ajuste-border-tabla.texto-left DIAN
                td.ajuste-border-tabla.texto-left Portales institucionales de atención
                td.texto-left Sirve como referente de interacción formal, trazabilidad y atención por medios virtuales.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Introducción a Transact-SQL
                td.ajuste-border-tabla.texto-left Microsoft Learn
                td.ajuste-border-tabla.texto-left SQL básico
                td.texto-left Ofrece una ruta de entrada al lenguaje SQL, bases de datos relacionales y uso de consultas.
              tr
                td.ajuste-border-tabla.texto-left Tutorial de MySQL
                td.ajuste-border-tabla.texto-left Oracle MySQL Documentation
                td.ajuste-border-tabla.texto-left Consultas estructuradas y bases de datos
                td.texto-left Permite practicar consultas, creación y uso de bases de datos y recuperación de información.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Guías internas de la organización
                td.ajuste-border-tabla.texto-left Manuales o tutoriales institucionales
                td.ajuste-border-tabla.texto-left Portales internos
                td.texto-left Son la referencia más pertinente cuando se requiere aprender el manejo del portal específico usado por la entidad.
    p.mb-5 Como complemento del capítulo, estos recursos permiten profundizar en herramientas y entornos de consulta que apoyan la atención del requerimiento. Su valor no radica únicamente en fortalecer el manejo operativo de una plataforma, sino en ampliar la comprensión sobre recuperación de información, generación de reportes, uso de servicios institucionales y aplicación de consultas estructuradas en contextos de atención.
    .caja-tema2-1.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img65.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio aplicado 1
          p.mb-0 Se invita a leer el documento Ejercicio aplicado, donde se aborda la gestión de información para la atención de un requerimiento contable y tributario relacionado con la validación de pagos, revisión documental y aclaración de inconsistencias en registros financieros.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejercicio aplicado1.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
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
