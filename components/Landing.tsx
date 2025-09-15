"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  BookOpen,
  Megaphone,
  ChevronRight,
  Menu,
  X,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { Twitter, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";

function NavbarInner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-16 items-center justify-between">
      {/* Logo */}
      <a
        href="/"
        className="flex items-center gap-2"
        aria-label="Inicio LGB Colombia"
      >
        <Image
          src="/logo_v6_notitle.png"
          alt="LGB Colombia logo"
          width={40}
          height={40}
          priority
        />
        <span className="font-semibold tracking-tight">LGB Colombia</span>
      </a>

      {/* Desktop links */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="/manifiesto" className="hover:text-neutral-700">
          Manifiesto
        </a>
        <a href="/recursos" className="hover:text-neutral-700">
          Recursos
        </a>
        <a href="/lgb-internacional" className="hover:text-neutral-700">
          LGB Internacional
        </a>
        <a
          href="/contacto"
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-1.5 hover:bg-neutral-50"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Contacto
        </a>
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-200 p-2"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile sheet */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden absolute inset-x-0 top-16 border-b border-neutral-200 bg-white/95 backdrop-blur"
        >
          <div className="px-4 py-4 space-y-2 text-sm">
            <a
              href="/manifiesto"
              onClick={() => setOpen(false)}
              className="block py-2"
            >
              Manifiesto
            </a>
            <a
              href="/recursos"
              onClick={() => setOpen(false)}
              className="block py-2"
            >
              Recursos
            </a>
            <a
              href="/lgb-internacional"
              onClick={() => setOpen(false)}
              className="block py-2"
            >
              LGB Internacional
            </a>
            <a
              href="/contacto"
              onClick={() => setOpen(false)}
              className="block py-2 rounded-xl border border-neutral-200 px-3 text-center flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contacto
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NavbarInner />
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft radial gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 rounded-full px-3 py-1">
              LGB Colombia
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Defendemos los derechos de lesbianas, gays y bisexuales
            </h2>

            <p className="mt-4 text-lg text-neutral-700">
              Buscamos hacer frente a políticas identitarias que atacan
              directamente nuestros derechos en nombre de la inclusividad y un
              falso progresismo. Reclamamos y reivindicamos nuestro derecho a
              una vida libre de discriminación, al libre desarrollo de la
              personalidad y a la organización política. Enfatizamos la
              importancia de reconocer las diferencias entre sexo y género,
              puesto que nuestro sexo y el de la otra persona determinan nuestra
              orientación sexual, y el género, como construcción social e
              imposición patriarcal, nos coacciona para esconderla y/o negarla.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#participa"
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 focus:outline-none focus-visible:ring"
              >
                Súmate a la red
              </a>
              <a
                href="/manifiesto"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-white"
              >
                Leer manifiesto{" "}
                <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILARES 
      <section
        id="manifiesto"
        className="py-16 border-t border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight">
              Nuestros pilares
            </h3>
            <p className="mt-2 text-neutral-700">
              Tres ejes que guían nuestra acción cívica y legal en Colombia.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5" aria-hidden="true" />
                Derechos sin estereotipos
              </h4>
              <p className="mt-2 text-sm text-neutral-700">
                Defendemos la igualdad de derechos para lesbianas, gays y
                bisexuales, basada en la realidad material del sexo y la no
                discriminación.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
                Evidencia y debate
              </h4>
              <p className="mt-2 text-sm text-neutral-700">
                Impulsamos políticas públicas y educación apoyadas en evidencia,
                y un debate abierto, respetuoso y crítico.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <Megaphone className="h-5 w-5" aria-hidden="true" />
                Libertad de expresión
              </h4>
              <p className="mt-2 text-sm text-neutral-700">
                Protegemos la libertad de asociación y de expresión de las
                personas LGB en Colombia.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FOOTER */}
      <footer className="border-t bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <span>© {new Date().getFullYear()} LGB Colombia</span>

          <div className="flex gap-4">
            <a
              href="https://twitter.com/lgb_col"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/lgb_col"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
