<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión operativa y planificación de la atención
    p.mb-5 La #[b gestión operativa] y la #[b planificación de la atención] permiten transformar un requerimiento recibido en un trámite organizado, controlado y susceptible de seguimiento. En procesos #[b contables y tributarios], esta fase adquiere especial importancia porque no basta con identificar al usuario y comprender la solicitud; también es necesario definir cómo se va a atender, en qué secuencia, con qué tiempos, mediante qué recursos y bajo qué criterios de #[b prioridad]. Cuando esta organización no existe, la atención se vuelve #[b reactiva] y se presentan efectos como los siguientes:
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.justify-content-center
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Aumento de retrasos.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Dispersión de responsabilidades.
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Debilitamiento de la trazabilidad del proceso.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img40.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Desde una perspectiva aplicada, la gestión operativa de la atención articula decisiones sobre:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |  
            p.mb-0 Recepción.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Validación. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Clasificación. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |  
            p.mb-0 Asignación.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Seguimiento. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Control. 
          br
    p.mb-0 Su utilidad radica en que convierte el trámite en un #[b proceso planificado] y no en una suma de respuestas aisladas. En contextos donde confluyen solicitudes de distinta #[b urgencia], complejidad y alcance, planificar la atención permite distribuir la #[b carga de trabajo], administrar mejor los #[b tiempos de respuesta] y sostener una prestación del servicio más consistente y verificable, especialmente cuando existen compromisos #[b institucionales, legales o documentales] asociados al requerimiento (Berry y Parasuraman, 2015).
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Mapa de procesos de atención de requerimientos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3.ajuste-tema1-4(data-aos="fade-right")
          p.mb-0 El #[b mapa de procesos de atención de requerimientos] representa la secuencia lógica de actividades mediante las cuales una solicitud del usuario ingresa al sistema de atención, es revisada, organizada, gestionada y cerrada. Su función no es meramente gráfica. En realidad, este mapa permite comprender cómo se relacionan las #[b etapas del trámite], qué decisiones deben tomarse en cada momento y cuáles son los #[b puntos de control] que reducen errores o reprocesos.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img41.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 En procesos #[b contables y tributarios], disponer de una #[b visión de conjunto] resulta importante porque la respuesta al usuario depende de actividades encadenadas, no de actuaciones improvisadas (Arévalo, 2017). 
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img42.png', alt='').m-auto
        .col-xl.fit___box_container
          p Además, el mapa de procesos facilita la comprensión de las #[b responsabilidades institucionales], ya que permite identificar:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Dónde comienza la recepción. 
            li.mb-0 
              span.fa-li
                i.fas.fa-check-circle
              | Cuándo corresponde validar información. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | En qué momento se consulta la base de datos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cómo se prioriza la atención. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cuándo el trámite pasa a cierre o seguimiento. 
    p.mb-5 Sin este tipo de representación, es frecuente que se confundan #[b funciones], se dupliquen tareas o se omitan #[b controles importantes]. Por ello, el #[b mapa de procesos] no debe verse como un recurso decorativo, sino como un #[b instrumento de organizació]n y mejora operativa del servicio (Domínguez, 2012). Las etapas que integran la #[b ruta operativa de atención] permiten mantener control, #[b oportunidad y consistencia] durante el trámite:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Recepción
            p.mb-0.text-center Registrar el ingreso del requerimiento y dejar la solicitud radicada o incorporada al sistema.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img44.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Validación
            p.mb-0.text-center Confirmar identidad, legitimidad y completitud, dejando el requerimiento habilitado para trámite.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img45.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Clasificación
            p.mb-0.text-center Determinar naturaleza y categoría de la solicitud, con una ruta de atención preliminar definida.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img46.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Priorización
            p.mb-0.text-center Establecer nivel de urgencia e impacto, definiendo el orden de atención.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img47.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Procesamiento
            p.mb-0.text-center Desarrollar consultas, análisis o verificaciones, con información gestionada para responder.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img48.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Respuesta
            p.mb-0.text-center Comunicar solución, orientación o resultado, dejando al usuario informado de manera técnica y clara.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img49.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cierre
            p.mb-0.text-center Registrar finalización y solución del trámite, consolidando trazabilidad.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img50.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Seguimiento
            p.mb-0.text-center Verificar cumplimiento, satisfacción o necesidad adicional, realizando control posterior del servicio.
        .bg-1
          .px-5
            .row.justify-content-center.mb-5
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 2.
                  span Mapa de procesos de atención de requerimientos contables y tributarios
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img51.svg', alt='Diagrama de flujo sobre gestión de requerimientos. Incluye etapas de recepción, validación, clasificación, priorización, procesamiento, respuesta y cierre, con decisiones sobre información completa, procedencia, canalización a otra área y cumplimiento de criterios de atención, además de rutas para solicitar información adicional o revisar criterios cuando corresponde. ').m-auto
            p.mb-0 Esta figura representa la secuencia operativa del trámite, desde la recepción inicial del requerimiento hasta su cierre y seguimiento. Su propósito es exponer las relaciones entre validación, clasificación, priorización, procesamiento, respuesta y control final dentro de la atención de solicitudes en contextos contables y tributarios.
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Recepción, validación y procesamiento del requerimiento
        p.mb-5 #[b La recepción del requerimiento] constituye el momento en que la organización asume formalmente la solicitud del usuario y la incorpora a una #[b ruta de atención]. Sin embargo, esta fase no debe reducirse al simple acto de recibir documentos o escuchar una petición. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img52.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Su valor operativo radica en que permite determinar:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Si la solicitud contiene la información mínima necesaria. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |  
            p.mb-0 Si fue presentada por el canal correcto. 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Si cumple las condiciones básicas para iniciar el trámite. 
    p En términos técnicos, una recepción mal realizada suele trasladar problemas a las etapas posteriores, generando vacíos de información, reprocesos o respuestas deficientes (González, 2018).
    p.mb-5 La validación, por su parte, implica revisar la integridad del requerimiento, la identidad del solicitante, la pertinencia de los soportes y la correspondencia entre lo solicitado y los procedimientos de la organización. Después de esta revisión, el procesamiento inicia con la asignación de la solicitud a la ruta que corresponda, lo que puede implicar:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Consulta de antecedentes.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Verificación en sistemas.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Análisis documental.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Traslado a un responsable.
    p.mb-5 Lo importante aquí es entender que estas tres acciones forman una unidad operativa: recibir sin validar genera desorden, validar sin procesar produce estancamiento y procesar sin una recepción adecuada compromete la consistencia del trámite (Arévalo, 2017). Las acciones iniciales del trámite cumplen funciones específicas dentro de la gestión operativa: 
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Recepción")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img53.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Recepción
            p Incorporar formalmente la solicitud al sistema de atención. 
            p.mb-0 #[b Riesgo]: pérdida de trazabilidad o ingreso incompleto del trámite.
      .py-3.py-md-4(titulo="Validación")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img54.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Validación
            p Confirmar requisitos, soportes y procedencia. 
            p.mb-0 #[b Riesgo]: inicio de trámites improcedentes o con vacíos documentales.
      .py-3.py-md-4(titulo="Procesamiento")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img55.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Procesamiento
            p Asignar ruta de atención y comenzar análisis o consulta. 
            p.mb-0 #[b Riesgo]: retrasos, reprocesos o desarticulación del trámite.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Priorización, tiempos de respuesta y matriz impacto-urgencia
    p.mb-5 La #[b priorización] permite ordenar los requerimientos de acuerdo con #[b criterios objetivos] y no solo según el momento de llegada o la presión del usuario. En procesos contables y tributarios, este aspecto es importante porque no todas las solicitudes tienen la misma implicación legal, operativa o técnica. Algunas exigen atención inmediata por vencimientos normativos o por afectación directa a una operación institucional; otras admiten un plazo mayor porque su impacto es más limitado o porque requieren menos análisis. Priorizar adecuadamente significa asignar atención según necesidad real del trámite y no según percepciones subjetivas de urgencia (Arévalo, 2017).
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3.ajuste-tema1-5(data-aos="fade-right")
          p.mb-0 Los #[b tiempos de respuesta] deben establecerse en coherencia con esa priorización. Esto exige definir criterios como urgencia legal, impacto operativo, complejidad técnica, dependencia de terceros y disponibilidad de información. La #[b matriz impacto-urgencia] es una herramienta útil para este fin, ya que ayuda a clasificar las solicitudes según el nivel de afectación que pueden generar y la premura con que deben resolverse.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img56.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 No obstante, su uso debe ser crítico: una matriz no reemplaza el #[b análisis técnico] del caso, sino que sirve como apoyo para decidir con mayor uniformidad y trazabilidad (Domínguez, 2012). Estos criterios operativos permiten justificar decisiones sobre tiempos de respuesta y asignación de esfuerzos de manera más técnica y verificable:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img57.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Urgencia legal
            p.mb-0.text-center Corresponde a la existencia de plazos normativos o vencimientos, por lo que aumenta la prioridad cuando el incumplimiento puede generar consecuencias jurídicas o administrativas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img58.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Impacto operativo
            p.mb-0.text-center Se relaciona con la afectación sobre procesos, pagos, cierres o reportes, elevando la prioridad cuando compromete la continuidad de la operación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img59.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Complejidad técnica
            p.mb-0.text-center Hace referencia al nivel de análisis, validación o consulta requerido, lo que puede ampliar los tiempos de atención previstos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img60.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Alcance del requerimiento
            p.mb-0.text-center Se vincula con el número de áreas, periodos o registros involucrados, incrementando la necesidad de coordinación entre responsables.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img61.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Disponibilidad de información
            p.mb-0.text-center Corresponde a la existencia inmediata o dispersa de los datos requeridos, influyendo directamente en el tiempo objetivo de respuesta.
        p.mb-5 La siguiente matriz ayuda a clasificar solicitudes según su nivel de urgencia e impacto. Su propósito es orientar decisiones de atención y apoyar la programación del trabajo sin sustituir el juicio técnico sobre cada caso.
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Matriz básica impacto-urgencia para la atención de requerimientos
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Impacto / Urgencia
                th.ajuste-border-tabla.texto-left Baja urgencia
                th.ajuste-border-tabla.texto-left Media urgencia
                th.texto-left Alta urgencia
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Bajo impacto
                td.ajuste-border-tabla.texto-left Atención programada
                td.ajuste-border-tabla.texto-left Atención dentro del ciclo normal
                td.texto-left Atención priorizada breve
              tr
                td.ajuste-border-tabla.texto-left Impacto medio
                td.ajuste-border-tabla.texto-left Atención programada con seguimiento
                td.ajuste-border-tabla.texto-left Atención prioritaria
                td.texto-left Atención inmediata según recursos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Alto impacto
                td.ajuste-border-tabla.texto-left Atención prioritaria por afectación potencial
                td.ajuste-border-tabla.texto-left Atención muy prioritaria
                td.texto-left Atención crítica e inmediata   
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Asignación de recursos, carga de trabajo y capacidad operativa
    p.mb-5 La #[b asignación de recursos] implica distribuir personas, tiempo, herramientas y capacidades de acuerdo con el volumen y la complejidad de los requerimientos recibidos. Esta actividad es necesaria para evitar que la atención se concentre de forma desordenada en algunos responsables mientras otros recursos quedan #[b subutilizados].
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3.ajuste-tema1-5(data-aos="fade-right")
          p.mb-0 En la práctica, una buena priorización pierde efectividad si no va acompañada de una #[b asignación realista de recursos], porque el sistema de atención puede terminar sobrecargado, con acumulación de trámites, vencimientos y disminución en la calidad de las respuestas (Arévalo, 2017).
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img62.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 La #[b carga de trabajo] y la capacidad operativa deben analizarse como variables dinámicas. No basta con conocer cuántos requerimientos ingresan; también es importante establecer cuántos pueden atenderse razonablemente en un periodo determinado, qué nivel de complejidad presentan y qué dependencia tienen de otras áreas o sistemas. 
    p.mb-5 Este análisis permite:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Ajustar agendas. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Redistribuir responsabilidades. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Anticipar situaciones de saturación. 
    p.mb-5 En este punto, el error más común consiste en asumir que todos los requerimientos consumen el mismo esfuerzo, lo cual distorsiona la programación y debilita la gestión del servicio (Domínguez, 2012).  Estos factores permiten valorar de manera más precisa el esfuerzo real que demanda cada trámite.
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Variables para analizar carga de trabajo y capacidad operativa
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Variable
                th.ajuste-border-tabla.texto-left Qué permite analizar
                th.texto-left Utilidad operativa
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Volumen de requerimientos
                td.ajuste-border-tabla.texto-left Cantidad de solicitudes ingresadas
                td.texto-left Dimensionar demanda de atención
              tr
                td.ajuste-border-tabla.texto-left Complejidad promedio
                td.ajuste-border-tabla.texto-left Esfuerzo técnico requerido por trámite
                td.texto-left Ajustar tiempos y responsables
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tiempo medio de respuesta
                td.ajuste-border-tabla.texto-left Duración habitual de atención
                td.texto-left Estimar capacidad real del equipo
              tr
                td.ajuste-border-tabla.texto-left Recursos humanos disponibles
                td.ajuste-border-tabla.texto-left Número y perfil del personal
                td.texto-left Distribuir carga de trabajo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Dependencia de sistemas o áreas
                td.ajuste-border-tabla.texto-left Necesidad de apoyos externos
                td.texto-left Prever demoras o cuellos de botella
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Formatos de planificación, cronograma, indicadores y planes de contingencia
    p.mb-5 La #[b planificación de la atención] requiere formatos e instrumentos que permitan pasar de la intención de organizar a una #[b gestión documentada] y verificable. Entre ellos se encuentran la matriz de requerimientos, el cronograma semanal, los formatos de asignación de personal, la matriz de carga de trabajo, los reportes de capacidad y los planes de contingencia.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3.ajuste-tema1-5(data-aos="fade-right")
          p.mb-0 Estos instrumentos no son accesorios administrativos; cumplen una #[b función de control], porque facilitan la programación de actividades, la distribución de responsabilidades, el seguimiento de avances y la detección de desviaciones frente a tiempos o cargas previstas (Arévalo, 2017).
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img63.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 Los #[b indicadores] complementan esta planificación, al ofrecer información sobre el número de requerimientos atendidos, los tiempos promedio de respuesta, el porcentaje de cumplimiento, la acumulación de trámites y el comportamiento de la demanda.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Por su parte, los #[b planes de contingencia] permiten mantener la continuidad del servicio ante eventos como ausencia de personal, fallas en los sistemas, incremento inusual de solicitudes o indisponibilidad temporal de la información. Una gestión operativa sólida no se limita a planear lo normal; también debe prever cómo actuar frente a situaciones que alteran la prestación del servicio (Berry y Parasuraman, 2015).
        p.mb-0 A continuación, se presentan los principales instrumentos utilizados para organizar la atención de requerimientos. Su propósito es evidenciar que la planificación requiere #[b soporte documental] y no solo decisiones verbales o informales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img64.png").m-auto  
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Matriz de requerimientos").ajuste-cajaAcordion
            p.mb-3 Consolida las solicitudes recibidas, lo que permite clasificarlas, priorizarlas y realizar su respectivo seguimiento.
          .row(titulo="Cronograma semanal").ajuste-cajaAcordion
            p.mb-3 Distribuye las actividades por periodos definidos, con el fin de organizar los tiempos y los responsables asignados.
          .row(titulo="Asignación de personal").ajuste-cajaAcordion
            p.mb-3 Define quién atiende cada requerimiento, lo que contribuye a una mejor distribución de la carga operativa.
          .row(titulo="Matriz de carga de trabajo").ajuste-cajaAcordion
            p.mb-3 Mide el volumen y el esfuerzo asumido por cada responsable, lo que favorece el equilibrio operativo.
          .row(titulo="Reporte de capacidad").ajuste-cajaAcordion
            p.mb-3 Compara la demanda con los recursos disponibles, permitiendo ajustar la programación cuando sea necesario.
          .row(titulo="Plan de contingencia").ajuste-cajaAcordion
            p.mb-3 Define la respuesta ante situaciones críticas y permite mantener la continuidad del servicio.
    p.mb-5 Estos instrumentos adquieren mayor valor cuando #[b se articulan con indicadores de gestión], porque permiten reconocer avances, rezagos y necesidades de ajuste en la operación del servicio. A continuación, se relacionan indicadores útiles para valorar la operación del servicio; su uso permite identificar comportamientos recurrentes, ajustar la planificación y respaldar decisiones de mejora: 
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Indicadores para seguimiento de la atención
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Indicador
                th.texto-left Fórmula básica, criterio y utilidad
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Tiempo promedio de respuesta]
                td.texto-left Tiempo total de atención / número de requerimientos. Permite medir la oportunidad del servicio.
              tr
                td.ajuste-border-tabla.texto-left #[b Porcentaje de requerimientos atendidos en plazo]
                td.texto-left Requerimientos dentro del plazo / total atendidos. Permite verificar el cumplimiento.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Requerimientos acumulados]
                td.texto-left Total de pendientes al cierre del periodo. Permite detectar rezagos.
              tr
                td.ajuste-border-tabla.texto-left #[b Carga promedio por responsable]
                td.texto-left Total asignado / número de responsables. Permite valorar la distribución del trabajo.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Reprocesos o devoluciones]
                td.texto-left Número de casos devueltos o reabiertos. Permite identificar fallas en la calidad inicial.
    p.mb-5 En conjunto, los formatos, cronogramas, indicadores y planes de contingencia fortalecen la gestión operativa, porque permiten organizar la atención, controlar el avance de los requerimientos y responder con mayor oportunidad ante situaciones que afecten la continuidad del servicio.
    .caja-tema2-1.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img65.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Caso empresarial
          p.mb-0 Se invita a leer el documento #[b Caso empresarial], donde se aborda la atención de un requerimiento en una empresa de servicios contables y tributarios, relacionado con la validación urgente de un pago tributario, solicitud de soportes y revisión de posibles impactos en obligaciones próximas a vencer. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Caso_empresarial_atencion_requerimiento_empresa_servicios_contables_tributarios.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

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
