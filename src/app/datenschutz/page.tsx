export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-10 text-4xl font-bold">Datenschutzerklärung</h1>

      <div className="space-y-8 rounded-2xl bg-brand-muted p-8 shadow-sm text-slate-700">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Verantwortliche Stelle
          </h2>
          <p>Tanja Baumann & Mark Skarupa</p>
          <p>Dörflistrasse 11</p>
          <p>8057 Zürich</p>
          <p>Schweiz</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Erhebung und Bearbeitung von Personendaten
          </h2>
          <p>
            Wir bearbeiten Personendaten, die uns Besucherinnen und Besucher
            freiwillig übermitteln, zum Beispiel bei einer Kontaktaufnahme per
            E-Mail oder über ein zukünftiges Kontaktformular.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Zweck der Bearbeitung
          </h2>
          <p>
            Die Daten werden verwendet, um Anfragen zu beantworten,
            Probefahrten zu koordinieren, Beratungen durchzuführen und
            Informationen zu Bowhead Adaptive Mountain Bikes bereitzustellen.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Weitergabe von Daten
          </h2>
          <p>
            Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Bearbeitung
            einer Anfrage, zur Beratung, zur Bestellabwicklung oder aufgrund
            gesetzlicher Pflichten erforderlich ist.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Hosting und technische Daten
          </h2>
          <p>
            Beim Besuch dieser Website können technische Daten wie IP-Adresse,
            Datum, Uhrzeit, Browsertyp und aufgerufene Seiten durch den
            Hosting-Anbieter verarbeitet werden. Diese Daten dienen dem sicheren
            und stabilen Betrieb der Website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Cookies und Tracking
          </h2>
          <p>
            Derzeit verwenden wir keine Analyse- oder Marketing-Cookies. Falls
            wir später Tracking, Kartenfunktionen oder externe Dienste
            integrieren, wird diese Datenschutzerklärung entsprechend
            aktualisiert.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Rechte betroffener Personen
          </h2>
          <p>
            Betroffene Personen können Auskunft über ihre gespeicherten Daten
            verlangen sowie Berichtigung oder Löschung beantragen, soweit keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-slate-900">
            Kontakt
          </h2>
          <p>
            Für Datenschutzanfragen können Sie uns über die im Impressum
            angegebenen Kontaktdaten erreichen.
          </p>
        </section>

        <p className="pt-4 text-sm text-slate-500">
          Stand: Juni 2026. Beyond Mobility befindet sich derzeit in Gründung.
        </p>
      </div>
    </main>
  );
}