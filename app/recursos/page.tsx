"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Download,
  Search,
  Filter,
  Tag,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar"; // si aún no tienes este componente, quita esta línea y el <Navbar />
import AnimateIn from "@/components/AnimateIn";
import { RECURSOS, Recurso } from "@/components/resources-data";

export default function RecursosPage() {
  const [q, setQ] = useState("");
  const [filtro, setFiltro] = useState<
    "Todos" | "Definiciones" | "Comunicados" | "Intervenciones"
  >("Todos");

  const visibles = useMemo(() => {
    return RECURSOS.filter((r) =>
      filtro === "Todos" ? true : r.tipo === filtro
    )
      .filter((r) => {
        const hay = (s: string) => s.toLowerCase().includes(q.toLowerCase());
        return (
          hay(r.titulo) ||
          hay(r.resumen) ||
          r.etiquetas.some(hay) ||
          hay(r.tipo)
        );
      })
      .sort((a, b) => (a.actualizado < b.actualizado ? 1 : -1));
  }, [q, filtro]);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header reutilizable */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <AnimateIn className="mx-auto px-4">
            <h1 className="text-3xl font-bold tracking-tight">Recursos</h1>
            <p className="mt-2 max-w-2xl text-neutral-700">
              Material descargable para personas, familias y funcionarios
              públicos que buscan información clara y basada en evidencia sobre
              orientación sexual y derechos LGB en Colombia.
            </p>

            {/* Controles: búsqueda + filtros */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <label className="relative sm:flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Buscar por título, etiqueta…"
                  className="w-full rounded-2xl border border-neutral-300 bg-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring"
                  aria-label="Buscar recursos"
                />
              </label>

              <div className="inline-flex items-center gap-2">
                <Filter
                  className="h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
                <div className="flex rounded-2xl border border-neutral-300 p-1 bg-white">
                  {(
                    [
                      "Todos",
                      "Definiciones",
                      "Comunicados",
                      "Intervenciones",
                    ] as const
                  ).map((op) => (
                    <button
                      key={op}
                      onClick={() => setFiltro(op)}
                      className={`px-3 py-1.5 text-sm rounded-xl ${
                        filtro === op
                          ? "bg-neutral-900 text-white"
                          : "hover:bg-neutral-100"
                      }`}
                      aria-pressed={filtro === op}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Grid de recursos */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mx-auto px-4">
            {visibles.length === 0 ? (
              <p className="text-neutral-600">
                No encontramos resultados para “{q}”. Prueba con otra búsqueda o
                cambia el filtro.
              </p>
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibles.map((r) => (
                  <li
                    key={r.id}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 rounded-full px-2 py-1">
                        <FileText className="h-3.5 w-3.5" /> {r.tipo}
                      </span>
                      <span className="text-xs text-neutral-500">
                        Actualizado{" "}
                        {new Date(r.actualizado).toLocaleDateString("es-CO")}
                      </span>
                    </div>

                    <h2 className="mt-3 text-lg font-semibold">{r.titulo}</h2>
                    <p className="mt-2 text-sm text-neutral-700">{r.resumen}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.etiquetas.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 text-xs text-neutral-700 bg-neutral-100 rounded-full px-2 py-1"
                        >
                          <Tag className="h-3 w-3" /> {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      {r.archivo && (
                        <>
                          <a
                            href={r.archivo}
                            download
                            className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800"
                          >
                            <Download className="h-4 w-4" /> Descargar
                          </a>
                          <Link
                            href={`/recursos/${r.id}`}
                            className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-white"
                          >
                            Ver en línea
                          </Link>
                        </>
                      )}
                      {r.enlace && (
                        <a
                          href={r.enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-white"
                        >
                          Ver fuente
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
