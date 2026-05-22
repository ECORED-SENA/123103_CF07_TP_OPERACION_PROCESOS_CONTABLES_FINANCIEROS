<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Identificación del usuario y caracterización del requerimiento
    p La identificación del usuario y la caracterización del requerimiento constituyen el punto de partida de toda atención técnica en procesos contables y tributarios. Antes de consultar un sistema, asignar prioridades o elaborar una respuesta, es necesario establecer con claridad #[b quién solicita la atención, qué necesita, con qué nivel de acceso cuenta y cuál es la naturaleza de su requerimiento]. Esta fase inicial reduce ambigüedades, mejora la organización del servicio y aporta condiciones para que el trámite posterior se desarrolle con mayor precisión, oportunidad y trazabilidad (Berry & Parasuraman, 2015).
    p.mb-5 En escenarios contables y tributarios, esta identificación no puede entenderse como una formalidad administrativa. Su utilidad práctica radica en los siguientes aspectos:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img2.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Diferenciación de responsabilidades
                p.mb-0.text-center Permite establecer qué dependencia, cargo o proceso debe atender el requerimiento.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img3.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Protección de información sensible
                p.mb-0.text-center Restringe el acceso a datos contables, financieros o tributarios según autorización.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Selección del canal adecuado
                p.mb-0.text-center Facilita definir si la atención procede por sistema interno, correo, presencialidad o plataforma digital.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Verificación de identidad
                p.mb-0.text-center Confirma que quien solicita la información está legitimado para hacerlo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Registro inicial
                p.mb-0.text-center Permite documentar datos mínimos para apertura, seguimiento y cierre del trámite.
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img7.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Cuando esta fase se realiza de forma deficiente, aumentan riesgos operativos que afectan la calidad del servicio:
            br
            ul.fa-ul.estilo___ul_bloque.mb-0
              li.mb-0.ajuste---li.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 Clasificación incorrecta del requerimiento. 
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 Acceso no autorizado a información. 
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 Respuestas incompletas. 
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 Demoras innecesarias en la atención. 
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 Pérdida de trazabilidad del caso. 
              br
              p Estas situaciones reducen la eficiencia y la oportunidad de la atención (González, 2018). 
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipología de usuarios internos y externos
    p.mb-5 La #[b tipología de usuarios] permite reconocer las diferencias entre quienes interactúan con los procesos #[b contables y tributarios] y, en consecuencia, ajustar la atención a sus necesidades y competencias. En términos generales, los #[b usuarios internos] pertenecen a la organización y requieren información para fines operativos, administrativos, de control o de #[b toma de decisiones]. Los #[b usuarios externos], en cambio, se relacionan con la entidad desde fuera de su estructura y pueden requerir certificados, soportes, aclaraciones, estados de cuenta, validaciones o respuestas frente a #[b obligaciones específicas].
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Esta distinción es importante porque no todos los usuarios tienen el mismo nivel de #[b conocimiento técnico] ni el mismo derecho de acceso a la información. Desde una perspectiva aplicada, diferenciar usuarios internos y externos permite evitar #[b errores frecuentes] en la atención.
        .caja-tema1(data-aos="zoom-in")
          p Por ejemplo:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Un responsable del área financiera puede requerir reportes detallados o información de conciliación. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Un proveedor puede solicitar certificaciones o seguimiento de pagos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Un contribuyente externo puede requerir validaciones o respuestas frente a obligaciones específicas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Algunos usuarios requieren lenguaje técnico especializado, mientras otros necesitan comunicación más clara y directa.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img8.png").m-auto
    p.mb-5 Por ello, la tipología del usuario no solo describe a quién se atiende, sino que orienta cómo debe gestionarse el requerimiento desde el inicio del trámite (González, 2018).
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Interno")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img9.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Interno
            p.mb-0 Hace parte de la estructura organizacional y sus solicitudes suelen relacionarse con reportes, validaciones, cruces de información, soportes internos y consultas operativas; por ello, la atención exige verificar el rol, la dependencia, la necesidad funcional y el nivel de acceso correspondiente.
      .py-3.py-md-4(titulo="Externo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img10.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Externo
            p.mb-0 Se relaciona con la organización desde fuera de la entidad y puede requerir certificados, aclaraciones, estados de cuenta, respuestas a reclamos o seguimiento de trámites; en estos casos, la atención exige verificar la identidad, la legitimidad de la solicitud y el alcance de la información entregable.  
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Necesidades de atención
    p.mb-5 Las necesidades de atención no son homogéneas; un mismo servicio puede ser solicitado por usuarios con distintos niveles de #[b conocimiento, urgencia, frecuencia] de uso o relación con la organización. Por eso, la segmentación del usuario resulta necesaria para comprender mejor el contexto del requerimiento y definir la forma de atención más pertinente. Segmentar no significa discriminar, sino organizar criterios para responder con mayor precisión, por ejemplo, según:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center El tipo de usuario. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center El nivel de complejidad de la solicitud. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center La recurrencia del trámite. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center El impacto de la información solicitada. 
    p.mb-5 Los siguientes criterios permiten relacionar las necesidades de atención con niveles de acceso y requisitos documentales, lo que favorece una gestión más ordenada desde el primer contacto: 
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img12.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Tipo de vínculo").ajuste-cajaAcordion
            p.mb-3 Interno o externo. Define el alcance de la información y los requisitos de validación.
          .row(titulo="Finalidad del requerimiento").ajuste-cajaAcordion
            p.mb-3 Operativa, informativa, legal, soporte o seguimiento. Permite ajustar tiempos, nivel técnico y ruta de respuesta.
          .row(titulo="Nivel de acceso").ajuste-cajaAcordion
            p.mb-3 Básico, restringido o autorizado. Delimita la información que puede consultarse o entregarse.
          .row(titulo="Soporte documental").ajuste-cajaAcordion
            p.mb-3 Identificación, autorización, radicado o anexos. Sustenta la procedencia del trámite.
    p.mb-0 La documentación requerida debe ser coherente con la naturaleza del requerimiento y con las políticas de control interno y resguardo de la información de cada entidad. 
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Clasificación y categorías de requerimientos contables y tributarios
    p La #[b clasificación del requerimiento] permite ordenar las solicitudes según su naturaleza y orientar su tratamiento técnico. En procesos #[b contables y tributarios], esta clasificación suele abarcar #[b consultas generales], solicitudes de información, reportes especiales, validaciones, asesorías, reclamos y seguimiento de trámites.
    p.mb-5 Esta diferenciación es importante porque cada categoría exige #[b tiempos], responsables, soportes y niveles de análisis distintos. Un #[b reclamo] por inconsistencia en un registro, por ejemplo, no se gestiona de la misma manera que una solicitud de #[b certificado] o una consulta general sobre un procedimiento (González, 2018). Además de la categoría temática, los requerimientos pueden clasificarse por:
    .bg-carrusel
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center
              .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                .caja-tema1-2.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
                    p.mb-0.text-center Urgencia 
              .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                .caja-tema1-2.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="zoom-in")
                        img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
                    p.mb-0.text-center Complejidad 
              .col-xl-4.col-md-9(data-aos="zoom-in")
                .caja-tema1-2.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="fade-left")
                        img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
                    p.mb-0.text-center Alcance
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p La #[b urgencia] se relaciona con plazos o riesgos asociados al trámite; la #[b complejidad] se vincula con el nivel de análisis técnico requerido; y el #[b  alcance] define si la solicitud afecta un registro puntual o si compromete varios procesos, áreas o periodos.
            p.mb-0 Esta clasificación es relevante porque prepara la fase posterior de #[b priorización] y contribuye a evitar tratamientos uniformes para solicitudes que, en realidad, son muy diferentes entre sí. Una #[b gestión técnica] rigurosa exige clasificar antes de actuar (Arévalo, 2017). Los siguientes criterios permiten iniciar la #[b caracterización del requerimiento] y orientar su canalización posterior dentro del proceso de atención:
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img14.png").m-auto   
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Consulta general
                p Solicitud de orientación básica sobre un procedimiento o dato. 
                p.mb-0 #[b Ejemplo]: consulta sobre fecha de emisión de un certificado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto  
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Solicitud de información
                p Petición de entrega o consulta de información disponible. 
                p.mb-0 #[b Ejemplo]: solicitud de estado de cuenta o soporte de pago.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto         
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Validación
                p Revisión de consistencia o exactitud de un dato o documento.
                p.mb-0 #[b Ejemplo]: verificación de un registro contable o de una retención.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto         
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reporte especial
                p Generación de salida específica a partir de sistemas o bases de datos. 
                p.mb-0 #[b Ejemplo]: reporte de movimientos por periodo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img19.png', alt='' style="max-width: 500px").m-auto         
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reclamo o inconsistencia
                p Manifestación de inconformidad por error, omisión o diferencia. 
                p.mb-0 #[b Ejemplo]: reclamo por valor liquidado de forma incorrecta.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto         
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Seguimiento
                p Solicitud de estado o avance de un trámite ya iniciado. 
                p.mb-0 #[b Ejemplo]: consulta sobre avance de una corrección documental.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img21.png', alt='' style="max-width: 500px").m-auto 
    p.mb-0 Esta clasificación puede ampliarse con subcategorías institucionales cuando la organización maneje rutas diferenciadas para tipos específicos de atención.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Canales de atención
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Los #[b canales de atención] constituyen los medios a través de los cuales ingresa el requerimiento y se mantiene la relación con el usuario. Entre los más frecuentes se encuentran la atención presencial, telefónica, por #[b correo electrónico], por ventanilla, por mesa de ayuda o mediante #[b plataformas institucionales]. Sin embargo, un error común consiste en asumir que el canal solo cumple una función de recepción. En realidad, el canal también condiciona:
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | El tipo de #[b evidencia] disponible.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | El #[b tiempo de respuesta].
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | La #[b trazabilidad] del trámite.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | El mecanismo de #[b verificación de identidad].
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img22.png").m-auto 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3(data-aos="fade-right")
          p.mb-0 Por ello, su selección y uso deben responder a un #[b protocolo de servicio] previamente definido (Berry y Parasuraman, 2015). La verificación de identidad es una actividad especialmente importante en este punto, porque permite confirmar que la persona que formula la solicitud está legitimada para hacerlo y que la información entregada corresponde al alcance autorizado.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img23.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 En servicios #[b contables y tributarios], este control no es accesorio, sino necesario para proteger la #[b información] y evitar accesos indebidos. La #[b calidad del servicio] no depende solo de la rapidez de la atención; también depende de que el trámite se realice con #[b seguridad], consistencia documental y respeto por las restricciones de acceso definidas por la organización. Cada canal exige medidas particulares de verificación y registro, lo que contribuye a reducir #[b errores] en la atención inicial:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Presencial")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img25.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Presencial
            p.mb-0 Se utiliza para la entrega de documentos, aclaraciones y radicación de solicitudes; por ello, requiere documento de identificación, validación de autorización, firma o constancia correspondiente.
      .py-3.py-md-4(titulo="Telefónico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img26.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Telefónico
            p.mb-0 Se emplea para orientación inicial, seguimiento y validación básica; en consecuencia, requiere preguntas de contraste, datos de referencia y confirmación de identidad.
      .py-3.py-md-4(titulo="Correo electrónico institucional")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img27.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Correo electrónico institucional
            p.mb-0 Se destina a solicitudes formales, envío de soportes y respuestas documentadas; por ello, exige confirmación del remitente, validación del dominio, revisión de anexos y autorización correspondiente.
      .py-3.py-md-4(titulo="Plataforma o portal interno")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img28.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Plataforma o portal interno
            p.mb-0 Se utiliza para radicación, consulta de estado y carga de documentos; por tanto, requiere usuario registrado, credenciales vigentes y control de acceso.
    .bg-1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Ruta inicial de identificación del usuario y caracterización del requerimiento
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img30.svg', alt='Diagrama de flujo sobre proceso de atención de requerimientos. Incluye ingreso por canal de atención, verificación de identidad, validación de perfil de acceso, revisión documental, confirmación de documentación completa, clasificación inicial del requerimiento y salida hacia gestión posterior, con rutas alternas para solicitar información adicional o restringir acceso cuando no se cumplen condiciones.').m-auto
        p.mb-0 Esta figura representa la secuencia inicial del trámite, desde el ingreso del usuario por un canal de atención hasta la validación de identidad, la identificación de su perfil de acceso y la clasificación preliminar del requerimiento. Su propósito es exponer que la atención inicial no es una acción aislada, sino una cadena de decisiones que condiciona la calidad del proceso posterior.
        Separador
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Registro inicial del requerimiento, confidencialidad y control de acceso
        p.mb-5 El registro inicial del requerimiento formaliza #[b el ingreso del trámite al sistema de atención]. No basta con escuchar o recibir una solicitud; es necesario documentar datos mínimos que permitan identificar al usuario, comprender el objeto del requerimiento, registrar fecha y canal de ingreso, dejar constancia de soportes aportados y establecer condiciones iniciales para su gestión. Este registro es importante porque:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Da trazabilidad desde el comienzo. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Facilita la consulta posterior. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Permite verificar si la respuesta se produjo dentro de los tiempos establecidos. 
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img11.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Favorece el cumplimiento de los procedimientos definidos. 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-3.ajuste-tema1-3(data-aos="fade-right")
          p.mb-0 La #[b confidencialidad y el control de acceso] se articulan con este #[b registro inicial], ya que el tratamiento de la información debe limitarse a los #[b perfiles autorizados] y a la finalidad legítima del trámite.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/img31.jpg").m-auto
      .col-xl.d-none.d-xl-block
        figure.mb-1(data-aos="fade-left")
          img(src="@/assets/curso/temas/img24.svg" alt='' style="max-width: 80px")
        p.mb-0 En otras palabras, registrar bien no significa capturar información indiscriminadamente, sino consignar los #[b datos necesarios] y resguardarlos de forma adecuada. Una práctica deficiente en esta etapa puede comprometer la #[b reserva de la información], generar errores de #[b trazabilidad] o incluso afectar la consistencia del proceso completo. Por eso, el registro inicial debe entenderse como un #[b mecanismo técnico de control], no solo como un requisito administrativo (Domínguez, 2012).
    p.mb-5 Los siguientes campos permiten documentar el ingreso de una solicitud con criterios de suficiencia, organización y control: 
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img32.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Fecha y hora de ingreso
            p.mb-0.text-center Ubicar el inicio formal del trámite.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img33.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Canal de atención
            p.mb-0.text-center Identificar medio de recepción y condiciones de respuesta.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img34.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Datos de identificación del usuario
            p.mb-0.text-center Reconocer quién formula la solicitud.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img35.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Calidad en la que actúa
            p.mb-0.text-center Determinar legitimidad y alcance del requerimiento.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img36.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Descripción del requerimiento
            p.mb-0.text-center Precisar objeto de la atención.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img37.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Soportes aportados
            p.mb-0.text-center Registrar evidencia documental entregada.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img38.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Nivel de acceso o restricción
            p.mb-0.text-center Delimitar consulta y entrega de información.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img39.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Responsable receptor
            p.mb-0.text-center Dar trazabilidad a la recepción inicial.
        p.mb-0 La identificación del usuario y la caracterización del requerimiento constituyen una fase determinante para la calidad del trámite contable y tributario. Cuando esta etapa se desarrolla con criterios claros de tipología, segmentación, clasificación, verificación y registro, se generan condiciones más sólidas para organizar la atención, proteger la información y orientar una respuesta técnica pertinente.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
