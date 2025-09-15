import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { Mail, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contacto — LGB Colombia",
  description:
    "Ponte en contacto con LGB Colombia: correo electrónico y redes sociales.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-fuchsia-50 to-white text-neutral-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold tracking-tight">Contacto</h1>
          <p className="mt-4 text-neutral-700">
            Si quieres ponerte en contacto con LGB Colombia, puedes escribirnos
            directamente o seguirnos en nuestras redes sociales:
          </p>

          {/* Lista de opciones */}
          <ul className="mt-8 space-y-6">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-fuchsia-600" />
              <a
                href="mailto:contacto@lgbcolombia.co"
                className="underline hover:no-underline"
              >
                contacto@lgbcolombia.co
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Twitter className="h-5 w-5 text-sky-500" />
              <Link
                href="https://twitter.com/lgb_col"
                className="underline hover:no-underline"
              >
                @LGB_COL
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-pink-500" />
              <Link
                href="https://instagram.com/lgb_col"
                className="underline hover:no-underline"
              >
                @lgb_col
              </Link>
            </li>
          </ul>

          {/* Formulario: componente cliente */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Escríbenos directamente</h2>
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
