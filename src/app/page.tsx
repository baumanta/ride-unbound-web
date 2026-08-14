import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="mb-6 text-5xl font-bold">
            Ride Unbound
          </h1>

          <p className="mb-8 max-w-2xl text-xl text-slate-300">
            Adaptive Mountain Bikes für mehr Freiheit, Abenteuer und
            uneingeschränkten Zugang zur Natur.
          </p>

          <div className="flex gap-4">
            <Link
              href="/bikes"
              className="rounded-lg bg-brand-accent px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Bikes entdecken
            </Link>

            <Link
              href="/kontakt"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-brand-primary"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="mb-6 text-3xl font-bold">
          Unsere Mission
        </h2>
        <p className="max-w-3xl text-lg text-slate-700">
          Wir möchten Menschen mit eingeschränkter Mobilität den Zugang zu
          Trails, Bergen und Outdoor-Erlebnissen ermöglichen. Mit den
          innovativen Adaptive Mountain Bikes von Bowhead schaffen wir neue
          Möglichkeiten für Abenteuer und Unabhängigkeit.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <video
            className="h-80 w-full object-cover md:h-80"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/videos/mark-trail.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Produkte */}
      <section className="bg-brand-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-bold">
            Unsere Bikes
          </h2>



          <div className="grid gap-8 md:grid-cols-2">
            <Link
              href="/bikes/rx"
              className="rounded-xl bg-white p-8 shadow"
            >
              <h3 className="mb-3 text-2xl font-semibold">
                Bowhead RX
              </h3>

              <p className="text-slate-600">
                Entwickelt für anspruchsvolle Trails, lange Touren und Fahrer die maximale Performance suchen.
                <Image
                  src="/pictures/Bowhead RX v2 (Calgary)-35.jpg"
                  alt="Tanja Baumann und Mark Skarupa mit ihren Bikes am Trail-Einstieg"
                   width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-lg"
                />
              </p>
            </Link>

            <Link
              href="/bikes/reach"
              className="rounded-xl bg-white p-8 shadow"
            >
              <h3 className="mb-3 text-2xl font-semibold">
                Bowhead Reach
              </h3>

              <p className="text-slate-600">
                Vom entspannten Ausflug bis zum anspruchsvollen Trail – dank vollelektrischem Antrieb ist das Reach der vielseitige Allrounder.
                <Image
                  src="/pictures/DSC04938.jpg"
                  alt="Tanja Baumann und Mark Skarupa mit ihren Bikes am Trail-Einstieg"
                   width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-lg"
                />
              </p>
            </Link>

            <Link
              href="/bikes/rogue"
              className="rounded-xl bg-white p-8 shadow"
            >
              <h3 className="mb-3 text-2xl font-semibold">
                Bowhead Rogue
              </h3>

              <p className="text-slate-600">
                Verbindet intuitive Bedienung und hohe Stabilität mit dem dynamischen Fahrgefühl eines adaptiven Mountainbikes.
                <Image
                  src="/pictures/DSC04695-Enhanced-NR_cropped.jpg"
                  alt="Tanja Baumann und Mark Skarupa mit ihren Bikes am Trail-Einstieg"
                   width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-lg"
                />
              </p>
            </Link>

            <Link
              href="/bikes/ranger"
              className="rounded-xl bg-white p-8 shadow"
            >
              <h3 className="mb-3 text-2xl font-semibold">
                Bowhead Ranger
              </h3>

              <p className="text-slate-600">
                Dank vier Rädern bietet der Ranger maximale Stabilität und Sicherheit für Abenteuer abseits befestigter Wege.
                <Image
                  src="/pictures/DSC07393.jpg"
                  alt="Tanja Baumann und Mark Skarupa mit ihren Bikes am Trail-Einstieg"
                   width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-lg"
                />
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">
          Kontakt
        </h2>

        <p className="mb-6 text-lg text-slate-700">
          Interessiert an einer Probefahrt oder einer Beratung?
        </p>

        <Link
          href="/kontakt"
          className="inline-block rounded-lg bg-brand-primary px-6 py-3 text-white hover:opacity-90"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}