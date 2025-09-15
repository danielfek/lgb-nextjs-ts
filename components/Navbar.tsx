"use client";

import React, { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          {/* Mobile menu */}
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
      </div>
    </header>
  );
}
