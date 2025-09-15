import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";

export const metadata = {
  title: "Manifiesto — LGB Colombia",
  description:
    "Manifiesto fundacional de LGB Colombia en defensa de los derechos de lesbianas, gays y bisexuales.",
};

export default function ManifiestoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 text-neutral-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <AnimateIn className="mx-auto px-4">
            <h1 className="text-3xl font-bold tracking-tight">Manifiesto</h1>

            {/* Introducción breve */}
            <p className="mt-4 text-neutral-800 leading-7">
              Este manifiesto recoge los principios fundacionales de LGB
              Colombia: defender los derechos civiles y políticos de lesbianas,
              gays y bisexuales en Colombia, con base en la evidencia, el
              respeto a la laicidad del Estado y la libertad de expresión.
              Aspiramos a una ciudadanía plena para todas las personas, sin
              estereotipos de género ni imposiciones ideológicas.
            </p>

            {/* Botón de descarga */}
            <div className="mt-6">
              <a
                href="/manifiesto.pdf"
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800"
                download
              >
                Descargar PDF
              </a>
            </div>

            {/* Lista numerada */}
            <ol className="mt-10 list-decimal pl-6 space-y-6 text-neutral-800">
              <li>
                Tomamos como referencia la Declaración Universal de Derechos
                Humanos. Está dentro de nuestros intereses y objetivos velar su
                completo cumplimiento y luchar para que estos derechos les sean
                garantizados a todas las colombianas y colombianos, en especial
                a lesbianas, gays y bisexuales.
              </li>
              <li>
                Reconocemos y enfatizamos la importancia de entender el sexo
                como categoría protegida por la legislación nacional e
                internacional, y en consecuencia, garante del derecho de
                homosexuales y bisexuales a tener una ciudadanía plena.
              </li>
              <li>
                Entendemos la heterosexualidad, homosexualidad y bisexualidad
                como características intrínsecas a la naturaleza humana.
                Celebramos, reivindicamos y luchamos por los derechos civiles y
                políticos de las personas atraídas hacia otras de su mismo sexo.
                Nos oponemos radicalmente a todo tipo de homofobia,
                independientemente de su origen: ya sea una moral conservadora,
                o cualquier autoproclamado progresismo que pretenda negar o
                mermar nuestros derechos.
              </li>
              <li>
                Nos oponemos a la introducción del concepto “identidad de
                género” en la jurisprudencia y ordenamiento jurídico
                colombianos, en tanto amenaza la laicidad del Estado al imponer
                una visión subjetiva y/o religiosa de la realidad.
              </li>
              <li>
                Compartimos la preocupación por la situación actual de las
                personas trans en el país, quienes sufren discriminación y
                violencia por parte del mismo Estado y la sociedad. Reconocemos
                que la garantía de su ciudadanía plena no puede ni debe hacerse
                a costa de los arduamente conseguidos derechos de las mujeres y
                personas atraídas hacia otras de su mismo sexo. Nos abrimos a un
                diálogo democrático que lo permita.
              </li>
              <li>
                Rechazamos con vehemencia la iniciación de tránsitos (entendidos
                como transiciones entre los llamados géneros) sociales, médicos
                y/o quirúrgicos de menores de edad. Defendemos el derecho de la
                infancia, la población más vulnerable de la sociedad, a un libre
                desarrollo de la personalidad sin presiones ni imposiciones. Nos
                oponemos a que los gustos, aficiones, comportamientos o
                preferencias de niños y niñas puedan ser determinantes de su
                sexo registral y/o los conviertan en potenciales pacientes
                crónicos del sistema de salud.
              </li>
              <li>
                Rechazamos el ambiente hostil generado por sectores que
                promueven discursos identitarios en torno a la “identidad de
                género”, pues vulnera el derecho a la libre expresión, en
                especial de las mujeres feministas que plantean cuestiones de
                interés público y cuya voz ha sido atacada y deslegitimada sin
                argumentos. Hacemos un llamado a un diálogo democrático,
                informado y pacífico.
              </li>
            </ol>

            {/* Enlace secundario */}
            <p className="mt-8 text-sm text-neutral-600">
              También puedes{" "}
              <a
                className="underline hover:no-underline"
                href="/manifiesto.pdf"
                download
              >
                descargar el PDF aquí
              </a>
              .
            </p>
          </AnimateIn>
        </div>
      </main>
    </>
  );
}
