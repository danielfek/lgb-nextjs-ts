// app/recursos/[id]/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import { RECURSOS } from "@/components/resources-data";
import { notFound } from "next/navigation";

//type Props = { params: { id: string } };

//export default function RecursoDetallePage({ params }: Props) {
export default function RecursoDetallePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const recurso = RECURSOS.find((r) => r.id === id);

  if (!recurso) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 text-neutral-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{recurso.titulo}</h1>
              <p className="mt-2 text-sm text-neutral-600">
                {recurso.tipo} · Actualizado{" "}
                {new Date(recurso.actualizado).toLocaleDateString("es-CO")}
              </p>
              <p className="mt-4 text-neutral-700">{recurso.resumen}</p>

              <div className="mt-6 flex gap-3">
                {recurso.archivo && (
                  <a
                    href={recurso.archivo}
                    download
                    className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800"
                  >
                    Descargar
                  </a>
                )}
                {recurso.enlace && (
                  <a
                    href={recurso.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-white"
                  >
                    Ver fuente
                  </a>
                )}
                <a
                  href="/recursos"
                  className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-white"
                >
                  Volver a Recursos
                </a>
              </div>
            </div>
          </div>

          {/* Embedded preview */}
          <div className="mt-8">
            {recurso.archivo ? (
              <div className="border rounded-lg overflow-hidden">
                <iframe
                  src={recurso.archivo}
                  title={recurso.titulo}
                  className="w-full"
                  style={{ minHeight: "70vh", border: 0 }}
                />
              </div>
            ) : (
              <p className="text-neutral-600">
                No hay archivo adjunto para previsualizar.
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
