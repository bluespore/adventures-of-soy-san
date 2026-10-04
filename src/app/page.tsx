import Image from "next/image";
import Link from "next/link";
import AdventureCard from "@/components/AdventureCard";
import { adventures } from "@/data/adventures";

export default function Home() {
  const [opening, ...rest] = adventures;

  return (
    <>
      {/* Hero */}
      <section className="spotlight relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:pt-16">
          <p className="neon display mb-3 text-center text-sm tracking-[0.4em] sm:text-base">
            CLUB BENTO PRESENTS
          </p>
          <h1 className="text-center text-5xl leading-none text-paper sm:text-7xl md:text-8xl">
            THE STAR: <span className="text-orange">SOY-SAN!</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-fog">
            One fish. One fedora. Fourteen thousand handshakes. The mostly true
            story of the singing fish who greeted 1950s New York into submission.
          </p>

          <div className="grain relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border-4 border-cream shadow-[12px_12px_0_0_var(--orange)]">
            <Image
              src={opening.image.src}
              alt={opening.image.alt}
              width={1024}
              height={572}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#adventures"
              className="rounded-full bg-orange px-6 py-3 text-sm font-black uppercase tracking-wider text-ink transition hover:bg-orange-deep"
            >
              See the adventures
            </a>
            <Link
              href="/downloads"
              className="rounded-full border-2 border-cream px-6 py-3 text-sm font-black uppercase tracking-wider text-cream transition hover:border-orange hover:text-orange"
            >
              Download the tunes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats stripe */}
      <section className="border-y border-charcoal bg-charcoal/40">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-6 text-center sm:grid-cols-4">
          {[
            ["212", "nights at Club Bento"],
            ["14,802", "hands shaken"],
            ["31", "hats, individually thanked"],
            ["9", "times Gerald played the song"],
          ].map(([num, label]) => (
            <li key={label} className="py-3">
              <p className="display text-4xl text-orange">{num}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-silver">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Adventures */}
      <section id="adventures" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-orange">
            Tour diary · 1953
          </p>
          <h2 className="text-4xl text-paper sm:text-5xl">Meet &amp; Greet Adventures</h2>
          <p className="mx-auto mt-3 max-w-xl text-fog">
            Every stop on the Greeting Tour, as recorded by a publicist who was
            paid in napkins.
          </p>
        </div>

        <div className="space-y-20">
          {rest.map((adventure, i) => (
            <AdventureCard
              key={adventure.slug}
              adventure={adventure}
              flip={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="ticket grain relative overflow-hidden p-8 text-center sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-deep">
            Admit one
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Who is Soy-San, anyway?</h2>
          <p className="mx-auto mt-3 max-w-lg text-smoke">
            Fedora. Fin. Fourteen thousand friends. Read the full, lightly
            exaggerated biography.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-black uppercase tracking-wider text-cream transition hover:bg-orange hover:text-ink"
          >
            Meet the fish
          </Link>
        </div>
      </section>
    </>
  );
}
