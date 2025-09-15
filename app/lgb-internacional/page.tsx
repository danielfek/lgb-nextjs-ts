// app/lgb-internacional/page.tsx
import Navbar from "@/components/Navbar";
import AnimateIn from "@/components/AnimateIn";
import { Twitter, Instagram } from "lucide-react";

export const metadata = {
  title: "LGB Internacional — LGB Colombia",
  description:
    "LGB Colombia está asociado a LGB International, la federación internacional de organizaciones LGB.",
};

export default function LgbInternacionalPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-50 text-neutral-900">
        {/* Hero con degradado y animación */}
        <section className="bg-gradient-to-tr from-fuchsia-600 via-rose-500 to-amber-400 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn className="mx-auto max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                LGB Internacional
              </h1>
              <p className="mt-4 text-lg">
                LGB Colombia está asociado a{" "}
                <em className="italic">LGB International</em>, la federación
                internacional de organizaciones nacionales de lesbianas, gays y
                bisexuales.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Contenido */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <AnimateIn className="mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Sobre LGB International
            </h2>

            <p className="text-neutral-800 leading-7 mb-4">
              <em className="italic">LGB International</em> es la federación
              internacional para organizaciones nacionales de lesbianas, hombres
              gays y bisexuales. Desde la creación de LGB Alliance en el Reino
              Unido en 2019, se han formado grupos en diversos países para
              reconstruir un movimiento LGB sin la influencia del discurso
              trans.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-white"
              >
                Volver al inicio
              </a>

              {/* Si quieres enlazar a una web externa, cambia href por la URL */}
              <a
                href="https://lgbinternational.org" // reemplaza con la URL correcta
                target="_blank" // abre el enlace en una nueva pestaña
                rel="noopener noreferrer" // seguridad al abrir en nueva pestaña
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800"
              >
                Más sobre LGB International
              </a>
            </div>
          </AnimateIn>
        </section>
      </main>
    </>
  );
}
