<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de verificación sobre gestión técnica de requerimientos y atención al usuario en procesos contables y tributarios',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión del proceso de atención y trámite de requerimientos del usuario en contextos contables y tributarios, mediante la identificación del usuario y del requerimiento, la organización de la atención, la consulta y validación de información, la elaboración de respuestas técnicas y el cierre del trámite conforme al procedimiento técnico y al protocolo de servicio.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Una auxiliar administrativa de una empresa cliente solicita por correo institucional la validación de un pago tributario, el soporte del movimiento y aclaración sobre una diferencia encontrada en sus registros. ¿Cuál es la caracterización más adecuada del caso?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usuario externo con requerimiento mixto de validación, soporte y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Usuario interno con consulta general simple.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usuario externo con reclamo disciplinario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usuario interno con requerimiento de cierre documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,
          texto:
            'En la fase inicial del trámite, la organización recibe una solicitud por canal virtual, pero no encuentra soporte suficiente para verificar identidad y legitimidad del solicitante. ¿Qué decisión es técnicamente más adecuada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Entregar información parcial mientras se completa la verificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cerrar el caso por falta de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solicitar información adicional antes de continuar el trámite.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Escalar de inmediato el caso al área jurídica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,
          texto:
            '¿Cuál de las siguientes situaciones justificaría una priorización alta de atención?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una solicitud frecuente, sin soporte documental, sobre un tema ya respondido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un requerimiento asociado a una declaración próxima a vencerse y con posible inconsistencia de registro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una consulta general sin vencimiento ni impacto operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una petición de copia documental sin urgencia ni afectación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,
          texto:
            '¿Cuál de las siguientes secuencias representa mejor el flujo general del trámite de un requerimiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Respuesta, validación, clasificación, cierre y seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clasificación, recepción, archivo, respuesta y cierre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Priorización, consulta, respuesta, validación y archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recepción, validación, clasificación, priorización, procesamiento, respuesta, cierre y seguimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,
          texto:
            '¿Cuál instrumento sería más pertinente para distribuir actividades, responsables y tiempos de atención durante una semana de trabajo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Matriz de carga tributaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encuesta de satisfacción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reporte consolidado de soportes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cronograma semanal de atención.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 6,
          texto:
            'En la gestión de información contable y tributaria, ¿cuál es la función más relevante de un sistema de información dentro del trámite del requerimiento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar consulta, contraste, control y recuperación de información para sustentar respuestas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir la validación técnica del responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Almacenar información sin necesidad de soportes adicionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar todos los canales de atención al usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,
          texto:
            'Si al contrastar un soporte documental con un registro del sistema aparece una diferencia de valor, ¿qué actuación es más adecuada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escoger el valor del documento porque fue enviado por el usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar la fuente de origen, validar fechas, soportes y consistencia antes de decidir qué registro sustenta la respuesta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Escoger el valor del sistema porque es interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Emitir respuesta definitiva sin explicar la diferencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,
          texto:
            '¿Cuál situación refleja mejor la aplicación del principio de confidencialidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Compartir toda la información disponible para evitar reprocesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Responder verbalmente para no dejar evidencia documental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Entregar únicamente la información autorizada al solicitante legitimado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Omitir el registro de la consulta para acelerar la atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,
          texto:
            'Cuando un requerimiento exige explicar el estado de una obligación, los soportes asociados y las actuaciones previas del trámite, ¿qué salida de información sería más pertinente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un reporte consolidado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una respuesta telefónica informal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un archivo provisional sin soporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una remisión sin análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,
          texto:
            '¿Cuál de las siguientes formulaciones muestra mejor una comunicación profesional ante una inconsistencia detectada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usted está equivocado; el sistema muestra otra cosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No aparece nada, así que debe esperar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se identificó una diferencia entre la información reportada y los registros consultados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eso no nos corresponde.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 11,
          texto:
            '¿Cuál elemento no debería faltar en una respuesta técnica bien estructurada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hallazgo o resultado comunicado con soporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Opinión personal del responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Expresiones informales para acercarse al usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repetición completa de todo el expediente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto:
            'Si un requerimiento excede la competencia del área que lo recibió, la actuación correcta consiste en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responder parcialmente y cerrar el caso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener el caso sin actuación hasta nueva orden.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Canalizar o escalar el requerimiento, dejando registro y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Entregar toda la documentación al usuario para que él resuelva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            '¿Qué criterio permite afirmar que un requerimiento puede cerrarse de manera técnica y documentalmente adecuada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El responsable considera que ya dedicó suficiente tiempo al caso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El caso fue archivado aunque no exista evidencia de respuesta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El usuario dejó de insistir en el tema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se emitió una respuesta suficiente, se registró la actuación y quedaron soportes vinculados al trámite.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto:
            '¿Cuál dato es indispensable en el registro final de la solución?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La opinión del usuario sobre el funcionario que atendió.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El color del formato usado en la atención.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La fecha y hora de cierre del requerimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de personas presentes al momento de responder.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto:
            '¿Cuál conjunto de evidencias respalda mejor la trazabilidad del cierre de un requerimiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Respuesta emitida, registro final, soportes revisados e historial de actuaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo la respuesta enviada al usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente el comprobante de correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El resumen verbal del responsable del caso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 16,
          texto:
            '¿Cuál pregunta resulta más útil para medir satisfacción del usuario con enfoque de mejora?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '¿Considera que la respuesta fue clara y útil para resolver su solicitud?',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '¿Le gustó la atención sí o no?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '¿Está conforme con la organización en general?',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '¿Recibió una respuesta bonita?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 17,
          texto:
            '¿Qué indicador permite evaluar principalmente la oportunidad del cierre?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de documentos archivados por carpeta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de usuarios externos atendidos por trimestre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número total de consultas realizadas en el sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porcentaje de requerimientos cerrados dentro del tiempo objetivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 18,
          texto:
            'Una organización cierra muchos casos en plazo, pero varios deben reabrirse porque la respuesta fue incompleta. ¿Qué indicador ayudaría mejor a detectar ese problema?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de llamadas recibidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tiempo promedio de ingreso al sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Casos reabiertos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Total de usuarios internos activos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 19,
          texto:
            'En un caso donde existe una diferencia entre soporte documental y registro contable, pero aún no termina la validación interáreas, ¿qué tipo de respuesta conviene emitir?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una respuesta definitiva cerrando el caso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una respuesta de avance que informe lo revisado y lo pendiente por validar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ninguna respuesta hasta que todo termine.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una respuesta informal sin registro para no comprometerse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 20,
          texto:
            '¿Cuál enunciado sintetiza mejor el propósito del tema “Gestión técnica de requerimientos y atención al usuario en procesos contables y tributarios”?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Resolver consultas de manera rápida, aunque no siempre queden registradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Centralizar toda la información en un solo documento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Tramitar requerimientos articulando identificación, organización, validación de información, respuesta técnica y cierre controlado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Priorizar únicamente la satisfacción del usuario sobre el soporte documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
