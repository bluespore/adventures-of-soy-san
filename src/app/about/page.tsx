import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bio, facts, quotes, timeline } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: "Who is Soy-San? Fedora, fin, and fourteen thousand friends.",
};

export default function AboutPage() {
  return (
    <>
      <section className="spotlight">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-orange">
              About the star
            </p>
            <h1 className="text-5xl leading-none text-paper sm:text-6xl">
              {bio.name}
            </h1>
            <p className="mt-3 text-lg font-bold text-silver">{bio.tagline}</p>
            <p className="mt-5 leading-relaxed text-fog">{bio.intro}</p>

            <dl className="mt-6 space-y-3 text-sm">
              {[
                ["Hometown", bio.hometown],
                ["Arrived", bio.arrived],
                ["Signature move", bio.signature],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 border-l-4 border-orange pl-3">
                  <dt className="w-32 shrink-0 font-bold uppercase tracking-wider text-silver">
                    {k}
                  </dt>
                  <dd className="text-cream">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="grain relative overflow-hidden rounded-xl border-4 border-cream shadow-[8px_8px_0_0_var(--orange)]">
            <Image
              src="/images/soyco-rooftop.png"
              alt="Soy-San standing on a rooftop beside a cat beneath a SOYCO water tower, looking out at the Manhattan skyline at dusk."
              width={896}
              height={504}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-ink/80 px-4 py-2 text-xs text-fog">
              Home: the SOYCO rooftop, with Pickles. 1954.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-charcoal bg-charcoal/40">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 px-4 py-6 text-center sm:grid-cols-4">
          {facts.map(({ label, value }) => (
            <li key={label} className="py-3">
              <p className="display text-3xl text-orange">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-silver">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="mb-10 text-center text-4xl text-paper">The Story So Far</h2>
        <ol className="relative border-l-2 border-orange/50 pl-8">
          {timeline.map(({ year, title, text }) => (
            <li key={year} className="relative mb-10 last:mb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.45rem] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange text-ink"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-ink" />
              </span>
              <p className="display text-2xl text-orange">{year}</p>
              <h3 className="text-xl text-paper">{title}</h3>
              <p className="mt-1 text-fog">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mb-8 text-center text-4xl text-paper">What They&apos;re Saying</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {quotes.map(({ quote, who }) => (
            <li key={who} className="ticket grain relative p-6">
              <p className="display text-5xl leading-none text-orange">&ldquo;</p>
              <blockquote className="-mt-4 text-lg font-bold leading-snug">
                {quote}
              </blockquote>
              <p className="mt-4 text-sm text-smoke">&mdash; {who}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center">
          <Link
            href="/downloads"
            className="rounded-full bg-orange px-6 py-3 text-sm font-black uppercase tracking-wider text-ink transition hover:bg-orange-deep"
          >
            Hear him sing
          </Link>
        </p>
      </section>
    </>
  );
}
