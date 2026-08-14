import Image from "next/image";

export default function UeberUnsPage() {
  return (
    <main>
      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Über uns
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Wir möchten Menschen ein Stück Freiheit zurückgeben.
          </h1>
        </div>
      </section>

      <section className="bg-brand-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
            <Image
              src="/pictures/team.jpeg"
              alt="Tanja Baumann und Mark Skarupa mit ihren Bikes am Trail-Einstieg"
              width={1200}
              height={800}
              className="w-full rounded-2xl shadow-lg"
            />

            <div>
              <h2 className="mb-4 text-3xl font-bold">
                Unsere Geschichte
              </h2>

              <p className="text-lg leading-8 text-slate-700">
                Ride Unbound (in Gründung) wurde von Mark Skarupa und Tanja Baumann
                gegründet. Nach seinem Unfall hat ein Bowhead Bike Marks Leben
                verbessert: Es gab ihm die Möglichkeit zurück,
                wieder auf Trails unterwegs zu sein, Natur zu erleben und
                Freiheit neu zu spüren.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Aus dieser Erfahrung entstand die Idee, diese Möglichkeit auch
                anderen Menschen zugänglich zu machen — mit persönlicher
                Beratung, Probefahrten und einer Community, die verbindet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}