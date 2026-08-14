export default function KontaktPage() {
  return (
    <main>
      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Kontakt
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Jeder Weg zurück auf den Trail beginnt mit einem ersten Gespräch.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Wir beraten Sie persönlich und unterstützen Sie dabei,
            das passende Bike für Ihre Bedürfnisse zu finden.
          </p>
        </div>
      </section>

      <section className="bg-brand-muted">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-xl">
            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Wir freuen uns auf Ihre Nachricht
              </h2>

              <p className="leading-8 text-slate-700">
                Sie möchten mehr über Bowhead Adaptive Mountain Bikes erfahren,
                eine Probefahrt vereinbaren oder herausfinden, welches Modell am
                besten zu Ihnen passt?
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Kontaktieren Sie uns unverbindlich. Wir beraten Sie gerne
                persönlich.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Kontaktinformationen
              </h2>

              <div className="space-y-2 text-slate-700">
                <p>
                  <strong>Ride Unbound</strong>
                </p>
                <p>Mark Skarupa & Tanja Baumann</p>
                <p>Dörflistrasse 11</p>
                <p>8057 Zürich</p>
                <p>Schweiz</p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                E-Mail
              </h2>

              <p className="text-slate-700">
                <a
                  href="mailto:info@ride-unbound.com"
                  className="font-medium text-brand-accent hover:underline"
                >
                  info@ride-unbound.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Probefahrten
              </h2>

              <p className="leading-8 text-slate-700">
                Interessieren Sie sich für ein Bowhead Bike?
                Kontaktieren Sie uns für eine persönliche Beratung und
                Informationen zu Probefahrten.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}