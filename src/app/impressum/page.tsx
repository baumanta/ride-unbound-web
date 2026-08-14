export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-10 text-4xl font-bold">
        Impressum
      </h1>

      <div className="rounded-2xl bg-brand-muted p-8 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Verantwortlich für den Inhalt
        </h2>

        <div className="space-y-1 text-slate-700">
          <p>Tanja Baumann & Mark Skarupa</p>
          <p>Dörflistrasse 11</p>
          <p>8057 Zürich</p>
          <p>Schweiz</p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">
            Kontakt
          </h2>

          <div className="space-y-1 text-slate-700">
            <p>E-Mail: info@ride-unbound.com</p>
          </div>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          <p>
            Ride Unbound befindet sich derzeit in Gründung.
          </p>
        </div>
      </div>
    </main>
  );
}