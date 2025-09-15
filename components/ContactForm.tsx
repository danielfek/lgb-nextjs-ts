"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Por ahora aquí no enviamos a ningún servicio real; mostramos simulación de éxito.
      // Si quieres, te integro Formspree / EmailJS / una API tuya.
      await new Promise((r) => setTimeout(r, 700));
      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-fuchsia-500 focus:ring-fuchsia-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Correo</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-fuchsia-500 focus:ring-fuchsia-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Mensaje</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-fuchsia-500 focus:ring-fuchsia-500"
          required
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800"
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>

        {status === "ok" && (
          <span className="text-sm text-green-600">¡Mensaje enviado!</span>
        )}
        {status === "error" && (
          <span className="text-sm text-rose-600">
            Error al enviar. Intenta otra vez.
          </span>
        )}
      </div>
    </form>
  );
}
