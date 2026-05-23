<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Cierre, trazabilidad y evaluación del servicio
    p #[b El cierre del requerimiento] no debe entenderse como el simple fin de una interacción, sino como la fase en la que la organización consolida la respuesta, #[b registra la actuación realizada], deja evidencia del trámite y verifica si el servicio fue prestado de manera completa, oportuna y trazable.
    p.mb-5 En entidades públicas, la Ley 1755 de 2015 exige una resolución pronta, completa y de fondo de las peticiones, lo que ofrece un referente útil para comprender que cerrar un caso no equivale a archivarlo sin más, sino a documentar adecuadamente su resultado. En paralelo, la Ley 594 de 2000 atribuye a la administración la responsabilidad sobre la gestión de documentos y archivos, lo que refuerza la relación entre cierre, registro y conservación de la evidencia del trámite (República de Colombia, 2015).
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img154.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Desde una perspectiva aplicada, este capítulo permite comprender que un cierre técnicamente sólido requiere tres condiciones:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |  
            p.mb-0 Que la respuesta haya sido emitida con sustento suficiente. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0  Que la actuación quede registrada en el sistema o medio institucional correspondiente. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Que exista información verificable para seguimiento, consulta posterior y mejora del servicio.
    p.mb-0 En esta lógica, la satisfacción del usuario y la evaluación de tiempos no aparecen como tareas separadas, sino como #[b parte del control final del proceso], en coherencia con el enfoque de servicio a las ciudadanías y mejora continua promovido por Función Pública en el marco del MIPG (Departamento Administrativo de la Función Pública, 2025). 
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Políticas, criterios y procedimientos de cierre del requerimiento
    p.mb-5 El cierre de un requerimiento debe responder a #[b criterios previamente definidos por la organización]. No basta con que el responsable considere que “ya respondió”; se requiere verificar si la solicitud fue atendida dentro del alcance planteado, si la información entregada resuelve de manera suficiente el asunto consultado y si el trámite dejó evidencia de las actuaciones realizadas.
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img155.png', alt='').m-auto
        .col-xl.fit___box_container
          p En el ámbito público, la exigencia de respuesta completa y de fondo establecida por la Ley 1755 de 2015 sirve como referencia importante para delimitar cuándo un requerimiento puede considerarse efectivamente resuelto (República de Colombia, 2015). En términos operativos, el procedimiento de cierre debe contemplar, como mínimo:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | La comprobación del estado final del caso. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | La identificación de la respuesta emitida. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | La revisión de soportes. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | El registro de la fecha de finalización. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | La definición de si procede archivo definitivo o seguimiento posterior. 
    p Un cierre débil suele producir reaperturas innecesarias, consultas repetidas e imposibilidad de demostrar qué se hizo y cuándo se realizó cada actuación. Estas situaciones afectan la trazabilidad del trámite, incrementan la carga operativa y debilitan la confianza del usuario en la gestión realizada. 
    p.mb-5 Por ello, el cierre debe asumirse como una #[b decisión técnica y documental], no como una formalidad administrativa menor (Arévalo, 2017; Domínguez, 2012). Estos criterios prácticos ayudan a decidir si un requerimiento puede darse por cerrado.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Respuesta emitida
                p Confirmar que el usuario recibió respuesta o comunicación de resultado.
                p.mb-0 #[b Riesgo:] el caso puede figurar cerrado sin solución comunicada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img156.png', alt='' style="max-width: 500px").m-auto  
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Alcance atendido
                p Verificar que la respuesta cubre la solicitud formulada. 
                p.mb-0 #[b Riesgo:] cierre incompleto o parcialmente resuelto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img157.png', alt='' style="max-width: 500px").m-auto 
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Soporte disponible
                p Confirmar existencia de registros, documentos o evidencia de la actuación. 
                p.mb-0 #[b Riesgo:] dificultad para sustentar lo actuado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img158.png', alt='' style="max-width: 500px").m-auto 
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Registro final
                p Dejar constancia de fecha, responsable y estado del trámite.
                p.mb-0 #[b Riesgo:] pérdida de trazabilidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img159.png', alt='' style="max-width: 500px").m-auto 
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Necesidad de seguimiento
                p Determinar si el caso requiere control posterior. 
                p.mb-0 #[b Riesgo:] archivo prematuro de situaciones no consolidadas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img160.png', alt='' style="max-width: 500px").m-auto 
    p.mb-0 A partir de estos criterios, puede advertirse que cerrar un requerimiento no depende solo del acto de responder, sino de verificar si el proceso produjo una #[b salida suficiente, documentada y coherente con la solicitud recibida]. Por ello, el cierre bien gestionado reduce reprocesos y aporta una base más firme para la consulta posterior del caso y para la evaluación del servicio prestado (Berry & Parasuraman, 2015).
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Registro de la solución y tiempos de atención en el sistema
    p.mb-5 Una vez resuelto #[b el requerimiento], la solución debe registrarse en el sistema o medio institucional correspondiente. Este registro cumple una función doble: por un lado, documenta lo actuado; por otro, permite #[b controlar tiempos, responsables y estados del trámite]. En consecuencia, no debería limitarse a expresiones genéricas como “caso cerrado” o “solicitud atendida”, porque esas fórmulas no ofrecen suficiente evidencia sobre la actuación realizada ni facilitan una revisión posterior del proceso (Arévalo, 2017).
    .caja-tema5(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p.mb-0 La medición de tiempos también debe quedar asociada al registro de solución. La Ley 1755 de 2015 establece #[b términos para resolver distintas modalidades de peticiones en el ámbito público] y, aunque no todos los escenarios contables y tributarios se rigen por esos mismos plazos, ese marco resulta útil para reforzar una cultura de control sobre oportunidad, vencimientos y cumplimiento. De esta manera, registrar la solución no solo deja memoria del caso, sino que también #[b permite analizar si la atención] se realizó dentro de los tiempos objetivo definidos por la organización (Departamento Administrativo de la Función Pública, 2022). 
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img161.jpg', alt='').m-auto
    p.mb-5 Los siguientes campos básicos contribuyen a un cierre más completo y verificable dentro del sistema de atención.
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img162.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img163.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Número o código del requerimiento
                p.mb-0.text-center Identifica el caso de manera única.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img164.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Fecha y hora de cierre
                p.mb-0.text-center Ubica el momento de finalización del trámite.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img165.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Responsable de la solución
                p.mb-0.text-center Permite identificar quién atendió o validó el cierre.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img166.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Descripción de la actuación realizada
                p.mb-0.text-center Resume la respuesta o solución emitida.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img167.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Medio de respuesta
                p.mb-0.text-center Indica si se respondió por correo, plataforma, teléfono o presencialmente.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img168.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Estado final del caso
                p.mb-0.text-center Define si quedó cerrado, canalizado o con seguimiento.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img169.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tiempo total de atención
                p.mb-0.text-center Permite analizar oportunidad y cumplimiento.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img170.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Soporte asociado
                p.mb-0.text-center Relaciona documento, registro o evidencia del cierre.
        p.mb-0 El registro final, bien hecho, permite reconstruir el recorrido del requerimiento sin depender de la memoria del responsable que lo atendió. En escenarios con alto volumen de solicitudes, esta práctica es especialmente importante porque evita cierres ambiguos, facilita auditoría interna y fortalece el control sobre tiempos reales de respuesta frente a los tiempos esperados (Arévalo, 2017; Zeithaml, 2018).
        Separador
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Archivo, trazabilidad y documentación final del requerimiento
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3.ajuste-tema1-4(data-aos="fade-right")
          p.mb-0 #[b El archivo del requerimiento debe entenderse como parte del ciclo de gestión documental] y no solo como almacenamiento pasivo de papeles o archivos digitales. La Ley 594 de 2000 establece la responsabilidad de crear, organizar, preservar y controlar los archivos, y el Modelo de Gestión Documental y Administración de Archivos del Archivo General de la Nación desarrolla procesos como planeación, gestión y trámite, organización, transferencia y disposición de documentos.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img171.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 Esto significa que el cierre de un requerimiento debe #[b dejar evidencia organizada y recuperable], de modo que la actuación pueda consultarse posteriormente y conserve valor probatorio, administrativo o de seguimiento cuando corresponda (Congreso de Colombia, 2000; Archivo General de la Nación, 2020).
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img172.png', alt='').m-auto
        .col-xl.fit___box_container
          p La trazabilidad, en este marco, no solo consiste en saber que el caso existió, sino en poder reconstruir qué ocurrió con él:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Quién lo recibió. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Qué validaciones se hicieron. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Qué respuesta se emitió. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Qué soportes lo respaldan. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | En qué momento se cerró o archivó.
    p.mb-5 Un trámite sin trazabilidad efectiva puede parecer resuelto, pero queda débil frente a revisión posterior, reclamaciones o necesidad de consulta histórica. Por ello, la documentación final debe ser suficiente para sostener la coherencia entre requerimiento, actuación y cierre (Domínguez, 2012; Gestión Documental, s. f.).  La ruta básica del cierre documentado puede organizarse de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Verificación de la solución").ajuste-cajaAcordion
            p.mb-3 Confirmar resultado y comunicar respuesta.
          .row(titulo="Registro final").ajuste-cajaAcordion
            p.mb-3 Dejar constancia en el sistema institucional.
          .row(titulo="Integración de soportes").ajuste-cajaAcordion
            p.mb-3 Incorporar evidencia respaldatoria al expediente.
          .row(titulo="Validación de cierre").ajuste-cajaAcordion
            p.mb-3 Verificar que el caso quedó completo.
          .row(titulo="Archivo del caso").ajuste-cajaAcordion
            p.mb-3 Conservar documentación en expediente.
          .row(titulo="Disponibilidad para consulta o seguimiento").ajuste-cajaAcordion
            p.mb-3 Habilitar acceso ordenado al caso.
    p.mb-5 La secuencia anterior permite advertir que el archivo del requerimiento no es una actividad separada del cierre, sino su prolongación documental. En consecuencia, la organización debe asegurar que los soportes del caso queden vinculados al registro final y que exista correspondencia entre el estado del trámite y la evidencia conservada. Los siguientes documentos y registros suelen respaldar la finalización del trámite.
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img173.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Respuesta emitida al usuario
            p.mb-0.text-center Demuestra la comunicación del resultado.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img174.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Registro final en sistema
            p.mb-0.text-center Consolida estado, fecha y responsable.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img175.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Soportes revisados
            p.mb-0.text-center Respaldan la solución o validación efectuada.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img176.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Constancia de canalización, si aplica
            p.mb-0.text-center Evidencia remisión a otra área o instancia.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img177.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Historial de actuaciones
            p.mb-0.text-center Permite reconstruir la secuencia del trámite.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img178.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Medio de archivo o expediente
            p.mb-0.text-center Garantiza conservación y consulta posterior.
        Separador
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Satisfacción del usuario y mejora continua del servicio
        p La satisfacción del usuario no debe reducirse a una percepción emocional aislada; en el #[b contexto de atención de requerimientos], funciona como una fuente de información para valorar si la respuesta fue clara, oportuna, útil y consistente con la expectativa generada por el trámite.
        p Función Pública, en el marco del MIPG, incorpora mediciones de experiencia ciudadana y satisfacción del servicio como insumos de seguimiento y mejora, lo que refuerza la idea de que evaluar la atención no es un complemento opcional, sino una práctica de gestión (Departamento Administrativo de la Función Pública, 2024).
        p.mb-5 Sin embargo, medir satisfacción no equivale a preguntar únicamente si el usuario “quedó contento”. Un instrumento bien diseñado debe permitir identificar aspectos concretos del servicio, como:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/e.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Comprensión de la respuesta.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/f.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Facilidad del canal utilizado.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/g.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Oportunidad de atención.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/h.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Utilidad de la información suministrada.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/i.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center Percepción sobre el trato recibido.
    p.mb-5 De lo contrario, la medición se vuelve superficial y aporta poco al mejoramiento de los procesos (Berry & Parasuraman, 2015).  Estas dimensiones permiten diseñar instrumentos más precisos y útiles para la mejora del servicio:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img180.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Claridad de la respuesta").ajuste-cajaAcordion
            p.mb-3 ¿La información entregada fue comprensible? Permite ajustar redacción y lenguaje técnico.
          .row(titulo="Oportunidad").ajuste-cajaAcordion
            p.mb-3 ¿La respuesta llegó dentro del tiempo esperado? Ayuda a revisar tiempos y capacidad de atención.
          .row(titulo="Trato recibido").ajuste-cajaAcordion
            p.mb-3 ¿La interacción fue respetuosa y profesional? Fortalece protocolos de servicio.
          .row(titulo="Utilidad de la solución").ajuste-cajaAcordion
            p.mb-3 ¿La respuesta resolvió u orientó adecuadamente su solicitud? Permite identificar cierres incompletos.
          .row(titulo="Facilidad  del canal").ajuste-cajaAcordion
            p.mb-3 ¿El medio de atención facilitó el trámite? Apoya mejora de canales y acceso.
    p.mb-5 La información derivada de estas mediciones solo adquiere valor cuando se traduce en acciones de mejora. Por ello, la evaluación del servicio debe conectarse con decisiones sobre #[b protocolos, tiempos, redacción de respuestas, canales de atención o capacitación del personal], y no quedarse en estadísticas aisladas. Los resultados obtenidos pueden convertirse en acciones concretas de mejoramiento:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Baja comprensión de la respuesta
                p.mb-0 Puede originarse en un lenguaje excesivamente técnico o ambiguo, por lo que se recomienda ajustar los formatos y fortalecer la capacitación en lenguaje claro.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img181.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Inconformidad con tiempos de atención
                p.mb-0 Puede relacionarse con sobrecarga operativa o seguimiento deficiente, por lo que conviene revisar plazos, distribución de carga y alertas de control.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img182.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reiteración de solicitudes similares
                p.mb-0 Puede derivarse de respuestas incompletas o poco orientadoras, por lo que se sugiere mejorar la estructura de respuesta y los recursos de apoyo disponibles.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img183.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dificultad con el canal usado
                p.mb-0 Puede presentarse por fallas de acceso o de trazabilidad del medio, por lo que se recomienda optimizar el canal y el protocolo asociado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img184.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Percepción de trato poco adecuado
                p.mb-0 Puede obedecer a una débil aplicación de los principios de servicio, por lo que se aconseja reforzar las pautas de comunicación y atención responsable.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img185.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Verificación del cumplimiento de tiempos objetivo e indicadores de atención
    p.mb-5 #[b La verificación del cumplimiento de tiempos] objetivo permite contrastar la planeación del servicio con la ejecución real del trámite. Este análisis resulta importante porque una organización puede cerrar numerosos requerimientos y, aun así, presentar #[b fallas en oportunidad, acumulación de casos o incumplimiento de plazos].
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img186.png', alt='').m-auto
        .col-xl.fit___box_container
          p Por ello, los tiempos deben revisarse no solo al nivel individual de cada caso, sino también como comportamiento global del proceso de atención (Arévalo, 2017). Los indicadores, en este contexto, ayudan a convertir el cierre del requerimiento en información útil para la gestión. El Manual Operativo del MIPG menciona informes de medición de experiencia ciudadana y satisfacción del servicio entre los insumos de seguimiento, y ese enfoque puede complementarse con indicadores operativos como:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |   Porcentaje de cumplimiento en plazo. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Tiempo promedio de cierre. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Casos reabiertos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Volumen de requerimientos pendientes. 
    p.mb-5 La utilidad de estos indicadores no está en su cantidad, sino en su #[b capacidad para mostrar tendencias, alertar sobre desviaciones y orientar decisiones de mejora] (Departamento Administrativo de la Función Pública, 2024; Departamento Administrativo de la Función Pública, 2025).  Estos indicadores permiten verificar si el cierre del requerimiento se está gestionando con oportunidad y consistencia:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Indicadores para evaluar oportunidad, cierre y calidad documental de los requerimientos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Indicador
                th.texto-left Criterio de cálculo o revisión y utilidad
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Porcentaje de requerimientos cerrados en plazo
                td.texto-left Casos cerrados dentro del tiempo objetivo / total cerrados. Verifica oportunidad del servicio.
              tr
                td.ajuste-border-tabla.texto-left Tiempo promedio de cierre
                td.texto-left Suma de tiempos de atención / total de casos cerrados. Permite analizar duración real del trámite.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Casos reabiertos
                td.texto-left Total de requerimientos cerrados que vuelven a activarse. Evidencia debilidad en la resolución o cierre.
              tr
                td.ajuste-border-tabla.texto-left Pendientes vencidos
                td.texto-left Requerimientos abiertos fuera de plazo. Identifica rezagos críticos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Requerimientos con soporte incompleto de cierre
                td.texto-left Casos cerrados sin evidencia suficiente. Mide calidad documental del cierre.
    p.mb-5 Como apoyo al proceso formativo, se recomienda revisar los siguientes recursos, orientados al fortalecimiento de competencias en servicio al ciudadano, gestión documental, atención institucional y radicación de solicitudes en entornos digitales. Estos materiales aportan referentes prácticos para comprender procedimientos, mejorar la trazabilidad y aplicar buenas prácticas en la atención de requerimientos.
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center
          .col-xl-6.mb-4.mb-lg-0
            a.anexo.mb-3(href="https://www.youtube.com/watch?v=ndLzs2zzN7k" target="_blank")(data-aos="fade-right")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] Capacitación virtual de la Política de Servicio al Ciudadano
            a.anexo(href="https://www.youtube.com/watch?v=b79LuGZkK2w" target="_blank")(data-aos="fade-right")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] Gestión documental y archivos, permite profundizar en archivo, organización documental y trazabilidad.
          .col-xl-6
            a.anexo.mb-3(href="https://www.youtube.com/watch?v=V6EgRsNWdbM" target="_blank")(data-aos="fade-left")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] Procedimientos para la atención al ciudadano.
            a.anexo(href="https://www.youtube.com/watch?v=0jwJ2G0VEa0" target="_blank")(data-aos="fade-left")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] ¿Cómo radicar una PQRSD en servicios digitales?
    .caja-tema2-1.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img65.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio aplicado 3
          p.mb-0 Se invita a leer el documento Ejercicio aplicado 3, donde se aborda el cierre y la evaluación de un requerimiento contable y tributario previamente validado, con énfasis en la trazabilidad documental, registro final y medición de la calidad del servicio.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejercicio aplicado3.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
