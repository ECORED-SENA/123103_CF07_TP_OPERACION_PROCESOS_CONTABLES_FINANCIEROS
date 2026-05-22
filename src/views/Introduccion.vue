<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La #[b gestión de requerimientos] del usuario en procesos #[b contables y tributarios] tiene una incidencia directa en la #[b calidad del servicio] y en la#[b  confiabilidad] de la información que circula dentro de una organización. No se trata únicamente de responder consultas o registrar solicitudes, sino de asegurar que cada requerimiento sea atendido con orden, precisión y oportunidad, especialmente cuando involucra #[b datos financieros], soportes documentales, plazos normativos y decisiones que pueden afectar la operación institucional. En este sentido, la #[b atención al usuario] adquiere un valor estratégico, porque conecta la capacidad técnica del área responsable con la percepción de transparencia, cumplimiento y organización que recibe el usuario.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-intro(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 Su estudio resulta aplicable en contextos donde es necesario clasificar solicitudes, verificar información, administrar accesos, consultar sistemas contables y tributarios; y emitir respuestas sustentadas técnica y documentalmente. Estas actuaciones son frecuentes en organizaciones que deben resolver requerimientos relacionados con certificados, reportes, validaciones, aclaraciones, soportes, reclamos o seguimiento de trámites. Cuando estos procesos no se gestionan adecuadamente, aumentan los #[b errores], se debilita la #[b trazabilidad], se afectan los #[b tiempos de respuesta] y se incrementa el riesgo de entregar información incompleta o inconsistente. Por ello, comprender la lógica técnica de esta gestión contribuye a mejorar la #[b capacidad de respuesta] y a fortalecer prácticas orientadas a la #[b calidad], la responsabilidad y el control del servicio.
      .col-xl-auto.col-md-9
        figure(data-aos="fade-left")
          img(src="@/assets/curso/intro/img2.png").m-auto
    .caja-intro-2(data-aos="flip-up")
      p.mb-0 Desde esta perspectiva, el desarrollo de esta temática permite entender que la atención de requerimientos en el ámbito contable y tributario exige más que buena disposición para el servicio: demanda criterios para #[b identificar al usuario], organizar la atención, manejar información con restricciones de acceso, comunicar respuestas con claridad y cerrar cada trámite con soporte, registro y seguimiento. Su importancia radica en que aporta referentes para actuar con mayor consistencia frente a situaciones reales de trabajo, #[b optimizar la gestión de solicitudes] y contribuir al mejoramiento continuo de los procesos organizacionales vinculados con el servicio al usuario y la administración de información sensible.

</template>

<script>
export default {
  name: 'Introduccion',
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
