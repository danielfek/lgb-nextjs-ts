// components/resources-data.ts
export type Recurso = {
  id: string
  tipo: "Definiciones" | "Comunicados" | "Intervenciones"
  titulo: string
  resumen: string
  etiquetas: string[]
  archivo?: string // ruta al PDF en /public/recursos/...
  enlace?: string // alternativa: URL externa
  actualizado: string
}



export const RECURSOS: Recurso[] = [
  {
    id: "definiciones_sexo_genero",
    tipo: "Definiciones",
    titulo: "Sexo y género: guía breve para entender los conceptos",
    resumen:
      "¿Qué es el género? ¿Es diferente del sexo?… empecemos por tener claros estos conceptos, que serán la base de nuestros argumentos y nos ayudarán a comprender las distintas posiciones respecto a la sexualidad y el discurso trans.",
    etiquetas: ["Sexo", "Género", "Identidad"],
    archivo: "/recursos/definiciones.pdf",
    actualizado: "2025-09-15",
  },
  {
    id: "comunicado_0925",
    tipo: "Comunicados",
    titulo:
      "Comunicado sobre el nombramiento de Juan Carlos Florián como Ministro de Igualdad y de Charlotte Schneider Callejas en el Viceministerio de las Mujeres.",
    resumen:
      "Reiteramos nuestra defensa de los derechos de gays, lesbianas y bisexuales y nos oponemos a los discursos identitarios que ponen en riesgo nuestros derechos y los de todas las mujeres. Exigimos el cumplimiento estricto de la ley de cuotas, que busca garantizar la participación real de las mujeres en espacios de poder.",
    etiquetas: ["Ministerio de Igualdad", "Ley de cuotas", "Mujeres"],
    archivo: "/recursos/comunicado_0925.pdf",
    actualizado: "2025-09-15",
  },
  {
    id: "intervencion_0524",
    tipo: "Intervenciones",
    titulo:
      "Intervención LGB Colombia – Audiencia Publica, 16 de Mayo de 2024 – Proyecto de Ley Inconvertibles",
    resumen:
      "Celebramos todas las iniciativas que busquen acabar con cualquier tipo de terapia de conversión. Por esta razón nos oponemos al proyecto de ley “Inconvertibles”, ya que blinda una nueva forma de terapia de conversión basada en la llamada identidad de género.",
    etiquetas: [
      "Ley Inconvertibles",
      "Terapias de Conversión",
      "Medicalización de menores",
    ],
    archivo: "/recursos/intervencion_0524.pdf",
    actualizado: "2025-09-15",
  },

  {
    id: "observaciones_0425",
    tipo: "Intervenciones",
    titulo:
      "Observaciones al Proyecto de Ley No. 122 de 2024 Cámara – Ley Integral de Identidad de Género",
    resumen:
      "Observaciones enviadas a la Comisión Primera de la Cámara de Representantes sobre el Proyecto de Ley 122: Ley Integral de Identidad de Género. ¿Una ley progresista? No si borra el sexo, medicaliza menores innecesariamente y silencia voces discordantes.",
    etiquetas: ["Lay Integral Trans"],
    archivo: "/recursos/observaciones_0425.pdf",
    actualizado: "2025-09-15",
  },
]
