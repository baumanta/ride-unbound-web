import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaInstagram } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ride Unbound",
  description: "Adaptive Mountain Bikes by Bowhead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="text-xl font-bold">
              <Link href="/" className="flex items-center">
                <Image
                  src="/pictures/logo_light_long.svg"
                  alt="Ride Unbound"
                  width={250}
                  height={30}
                  priority
                />
              </Link>
            </div>

            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/">Home</Link>

              <div className="group relative">
                <Link href="/bikes" className="hover:text-brand-accent">
                  Bikes
                </Link>

                <div className="invisible absolute left-0 top-full z-50 mt-2 w-48 rounded-xl border bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <Link
                    href="/bikes"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-brand-muted"
                  >
                    Übersicht
                  </Link>

                  <Link
                    href="/bikes/reach"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-brand-muted"
                  >
                    Bowhead Reach
                  </Link>

                  <Link
                    href="/bikes/rx"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-brand-muted"
                  >
                    Bowhead RX
                  </Link>

                  <Link
                    href="/bikes/rogue"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-brand-muted"
                  >
                    Bowhead Rogue
                  </Link>

                  <Link
                    href="/bikes/ranger"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-brand-muted"
                  >
                    Bowhead Ranger
                  </Link>
                </div>
              </div>


              <Link href="/ueber-uns">Über uns</Link>
              <Link href="/kontakt">Kontakt</Link>

              <a
                href="https://instagram.com/markskarupa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:opacity-80"
              >
                <FaInstagram size={24} />
              </a>

            </nav>
          </div>
        </header>

        {/* Seiteninhalt */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-brand-primary text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">

            {/* Linke Seite */}
            <div>
              <p className="font-semibold">
                Ride Unbound
              </p>

              <p className="mt-2 text-sm text-slate-300">
                Adaptive Mountain Bikes • Schweiz • Deutschland • Österreich
              </p>

              <div className="mt-4 flex gap-6 text-sm">
                <Link href="/impressum" className="hover:text-brand-accent">
                  Impressum
                </Link>

                <Link href="/datenschutz" className="hover:text-brand-accent">
                  Datenschutz
                </Link>
              </div>
            </div>

            {/* Rechtes Logo */}
            <Link href="/">
              <Image
                src="/pictures/logo_dark_long.svg"
                alt="Ride Unbound"
                width={300}
                height={40}
                className="opacity-90 transition-opacity hover:opacity-100"
              />
            </Link>

          </div>
        </footer>
      </body>
    </html>
  );
}